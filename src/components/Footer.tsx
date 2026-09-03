import Link from "next/link"
import { Heart, Terminal } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-oxford-border/60 bg-oxford py-10 sm:py-12 text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 sm:flex-row lg:px-12 text-center sm:text-left">
        <div className="flex items-center gap-2 font-mono text-slate-300">
          <Terminal className="h-4 w-4 text-sun" />
          <span>musaakhmedov</span>
          <span className="text-slate-600">© {currentYear}</span>
        </div>

        <p className="flex items-center justify-center gap-1 text-xs text-slate-400 sm:justify-end">
          Crafted with Next.js App Router, Payload CMS, Tailwind CSS &amp;{" "}
          <Heart className="inline h-3.5 w-3.5 fill-sun text-sun" />
        </p>
      </div>
    </footer>
  )
}
