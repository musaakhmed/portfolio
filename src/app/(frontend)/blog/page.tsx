import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPosts } from "@/lib/payload"

export const metadata: Metadata = {
  title: "Blog & Technical Notes",
  description:
    "Articles and insights on modern web development, Next.js, React, TypeScript, and software engineering by Musa Akhmedov.",
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8 sm:mb-12 border-b border-oxford-border/60 pb-6 sm:pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-sun/30 bg-sun/10 px-3 py-1 text-xs font-mono font-medium text-sun mb-3">
          <BookOpen className="h-3.5 w-3.5" />
          <span>Technical Journal</span>
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-mono font-bold text-slate-100 break-words">
          Articles &amp; <span className="text-sun">Notes</span>
        </h1>
        <p className="mt-2 sm:mt-3 text-base sm:text-lg text-slate-400 font-mono">
          Reflections on web performance, frontend architecture, and developer tooling.
        </p>
      </div>

      {/* Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {posts.map((post) => (
          <Card
            key={post.slug}
            className="group flex flex-col justify-between overflow-hidden bg-oxford-card border-oxford-border hover:border-sun/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sun/5"
          >
            <div>
              {post.imageUrl && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-oxford">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-oxford-card via-transparent to-transparent opacity-60" />
                </div>
              )}

              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-sun" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-slate-500" />
                    {post.readingTime}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-lg sm:text-xl font-bold font-mono text-slate-100 group-hover:text-sun transition-colors leading-snug break-words">
                    {post.title}
                  </h2>
                </Link>

                <p className="mt-2.5 sm:mt-3 text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
            </div>

            <div className="border-t border-oxford-border/60 px-4 sm:px-6 py-3.5 sm:py-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-[11px] font-mono">
                    #{tag}
                  </Badge>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="text-xs font-mono text-sun hover:underline font-semibold inline-flex items-center gap-1"
              >
                <span>Read article</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
