import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, BookOpen, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { getPostBySlug, getPosts } from "@/lib/payload"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Musa Akhmedov`,
      description: post.excerpt,
      images: post.imageUrl ? [{ url: post.imageUrl }] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="py-12 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-3xl mx-auto">
      {/* Back to Blog */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-sun transition-colors mb-6 sm:mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to all articles</span>
      </Link>

      {/* Header */}
      <header className="mb-8 sm:mb-10 space-y-4">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-mono">
              #{tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-mono font-extrabold text-slate-100 leading-tight break-words">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono text-slate-400 pt-2 border-b border-oxford-border/60 pb-4 sm:pb-6">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-sun" />
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-slate-400" />
            {post.readingTime}
          </span>
          <span>•</span>
          <span>By Musa Akhmedov</span>
        </div>
      </header>

      {/* Featured Image */}
      {post.imageUrl && (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-oxford-border bg-oxford shadow-xl mb-8 sm:mb-10">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed font-sans break-words">
        {post.content.split("\n\n").map((block, idx) => {
          if (block.startsWith("### ")) {
            return (
              <h2
                key={idx}
                className="text-xl sm:text-2xl font-mono font-bold text-slate-100 mt-8 mb-3 break-words"
              >
                {block.replace("### ", "")}
              </h2>
            )
          }
          if (block.startsWith("> ")) {
            return (
              <blockquote
                key={idx}
                className="border-l-4 border-sun bg-oxford-card p-3 sm:p-4 rounded-r-lg text-slate-200 italic font-mono text-xs sm:text-sm my-4"
              >
                {block.replace("> ", "")}
              </blockquote>
            )
          }
          if (block.startsWith("```")) {
            const lines = block.split("\n")
            const code = lines.slice(1, -1).join("\n")
            return (
              <pre
                key={idx}
                className="overflow-x-auto max-w-full rounded-lg border border-oxford-border bg-oxford-card p-3 sm:p-4 font-mono text-xs sm:text-sm text-sun-light my-4"
              >
                <code>{code}</code>
              </pre>
            )
          }
          if (block.startsWith("1. ") || block.startsWith("2. ") || block.startsWith("- ")) {
            const listItems = block.split("\n")
            return (
              <ul key={idx} className="list-disc list-inside space-y-2 text-slate-300 my-4 pl-2 text-sm sm:text-base">
                {listItems.map((li, i) => (
                  <li key={i}>{li.replace(/^[0-9]+\.\s+|^-\s+/, "")}</li>
                ))}
              </ul>
            )
          }
          return (
            <p key={idx} className="leading-relaxed">
              {block}
            </p>
          )
        })}
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 sm:mt-16 border-t border-oxford-border/60 pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link
          href="/blog"
          className="text-sm font-mono text-sun hover:underline font-semibold"
        >
          &larr; Back to all articles
        </Link>
        <Link
          href="/#sayhi"
          className="text-sm font-mono text-slate-400 hover:text-sun"
        >
          Have thoughts? Get in touch &rarr;
        </Link>
      </div>
    </article>
  )
}
