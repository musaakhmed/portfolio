import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ExternalLink, BookOpen, Layers } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { HeroTerminal } from "@/components/HeroTerminal"
import { ContactSection } from "@/components/ContactSection"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getProjects, getPosts } from "@/lib/payload"

export default async function HomePage() {
  const projects = await getProjects()
  const posts = await getPosts()

  return (
    <>
      <HeroTerminal />

      {/* Featured Projects Section */}
      <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4 border-b border-oxford-border/60 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sun/30 bg-sun/10 px-3 py-1 text-xs font-mono font-medium text-sun mb-2">
              <Layers className="h-3 w-3" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-mono font-bold text-slate-100">
              Featured <span className="text-sun">Projects</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Production web applications, client solutions, and open-source experiments built with modern tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <Card
              key={project.slug}
              className="group flex flex-col justify-between overflow-hidden bg-oxford-card border-oxford-border hover:border-sun/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sun/5"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative aspect-video w-full overflow-hidden bg-oxford">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-oxford-card via-transparent to-transparent opacity-80" />
                </div>

                {/* Project Details */}
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[11px] font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link href={`/portfolio/${project.slug}`}>
                    <h3 className="text-lg sm:text-xl font-bold font-mono text-slate-100 group-hover:text-sun transition-colors flex items-center gap-1.5">
                      <span>{project.title}</span>
                      <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                  </Link>

                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </CardContent>
              </div>

              {/* Project Links Footer */}
              <div className="border-t border-oxford-border/60 px-4 sm:px-6 py-3.5 sm:py-4 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="text-sun hover:underline font-semibold"
                >
                  Read Case Study &rarr;
                </Link>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="p-1 text-slate-400 hover:text-sun transition-colors"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live demo for ${project.title}`}
                      className="p-1 text-slate-400 hover:text-sun transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto border-t border-oxford-border/60">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sun/30 bg-sun/10 px-3 py-1 text-xs font-mono font-medium text-sun mb-2">
              <BookOpen className="h-3 w-3" />
              <span>Writing &amp; Notes</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-mono font-bold text-slate-100">
              Latest <span className="text-sun">Articles</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-mono text-sun hover:underline font-semibold"
          >
            View all posts &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.slice(0, 4).map((post) => (
            <Card
              key={post.slug}
              className="group flex flex-col justify-between overflow-hidden bg-oxford-card border-oxford-border hover:border-sun/60 transition-all duration-300 p-4 sm:p-6"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readingTime}</span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-lg sm:text-xl font-bold font-mono text-slate-100 group-hover:text-sun transition-colors">
                    {post.title}
                  </h3>
                </Link>

                <p className="mt-2.5 text-sm text-slate-400 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-oxford-border/40">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-oxford px-2 py-0.5 text-[11px] font-mono text-slate-400 border border-oxford-border"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-mono text-sun hover:underline font-medium"
                >
                  Read Article &rarr;
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  )
}
