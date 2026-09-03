import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Layers, CheckCircle2, Cpu, Target } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getProjectBySlug, getProjects } from "@/lib/payload"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) return { title: "Project Not Found" }

  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Musa Akhmedov`,
      description: project.summary,
      images: [{ url: project.imageUrl }],
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="py-12 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        href="/#portfolio"
        className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-sun transition-colors mb-6 sm:mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to all projects</span>
      </Link>

      {/* Header */}
      <header className="mb-8 sm:mb-10 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="default" className="text-xs font-mono">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-mono font-extrabold text-slate-100 break-words">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-mono break-words">
          {project.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sun px-6 py-3.5 sm:py-2.5 text-sm font-bold text-oxford hover:bg-sun-light transition-all shadow-md shadow-sun/20 text-center"
            >
              <span>Live Preview</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-oxford-border bg-oxford-card px-5 py-3.5 sm:py-2.5 text-sm font-mono text-slate-200 hover:border-sun/60 hover:text-sun transition-all text-center"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Source Repository</span>
            </a>
          )}
        </div>
      </header>

      {/* Featured Cover Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-oxford-border bg-oxford shadow-2xl mb-8 sm:mb-12">
        <Image
          src={project.imageUrl}
          alt={`${project.title} screenshot overview`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      {/* Case Study Sections */}
      <div className="space-y-8 sm:space-y-12 text-slate-300 leading-relaxed">
        {/* Project Summary */}
        <section className="rounded-xl border border-oxford-border bg-oxford-card p-4 sm:p-8">
          <h2 className="text-lg sm:text-xl font-mono font-bold text-slate-100 mb-3 flex items-center gap-2">
            <Layers className="h-5 w-5 text-sun shrink-0" />
            <span>Project Overview</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">{project.summary}</p>
        </section>

        {/* The Challenge */}
        {project.challenge && (
          <section className="rounded-xl border border-oxford-border/60 bg-oxford-card/60 p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-mono font-bold text-slate-100 mb-4 flex items-center gap-2.5">
              <Target className="h-5 w-5 sm:h-6 sm:w-6 text-sun shrink-0" />
              <span>The Challenge &amp; Objectives</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">{project.challenge}</p>
          </section>
        )}

        {/* Technical Architecture */}
        {project.architecture && (
          <section className="rounded-xl border border-oxford-border/60 bg-oxford-card/60 p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-mono font-bold text-slate-100 mb-4 flex items-center gap-2.5">
              <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-sun shrink-0" />
              <span>Architecture &amp; Technical Decisions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">{project.architecture}</p>
          </section>
        )}

        {/* Key Solutions */}
        {project.solution && (
          <section className="rounded-xl border border-oxford-border/60 bg-oxford-card/60 p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-mono font-bold text-slate-100 mb-4 flex items-center gap-2.5">
              <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-sun shrink-0" />
              <span>Key Solutions &amp; Outcomes</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">{project.solution}</p>
          </section>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 sm:mt-16 border-t border-oxford-border/60 pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link
          href="/#portfolio"
          className="text-sm font-mono text-sun hover:underline font-semibold"
        >
          &larr; View all projects
        </Link>
        <Link
          href="/#sayhi"
          className="inline-flex items-center gap-2 text-sm font-mono text-slate-300 hover:text-sun"
        >
          Have a similar project? Let&apos;s talk &rarr;
        </Link>
      </div>
    </article>
  )
}
