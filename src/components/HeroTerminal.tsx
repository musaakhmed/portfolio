"use client"

import * as React from "react"
import Link from "next/link"
import { Copy, Check, ChevronDown, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroTerminal() {
  const [copied, setCopied] = React.useState(false)

  const terminalText = `> whoami
Musa Akhmedov - Front-End & Full-Stack Developer
> location
Brussels, Belgium
> languages
English, Azerbaijani, Turkish, French, Ukrainian, Russian, Spanish (7 languages)
> stack
JavaScript (ES6+), TypeScript, React, Next.js, Tailwind CSS, Payload CMS
> background
Law & Political Science graduate -> Full-stack developer since 2020
> passions
Tech architecture, analogue & digital photography, long-distance walking`

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-5xl w-full">
        {/* Intro Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sun/30 bg-sun/10 px-4 py-1 text-xs font-mono font-medium text-sun">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Available for front-end &amp; full-stack opportunities</span>
        </div>

        {/* Semantic H1 */}
        <h1 className="mb-6 font-mono text-4xl font-extrabold tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
          Hi, my name is <span className="text-sun">Musa</span>.
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-slate-300 sm:text-xl leading-relaxed">
          I build high-performance web applications with{" "}
          <strong className="font-semibold text-slate-100">React</strong>,{" "}
          <strong className="font-semibold text-slate-100">Next.js</strong>, and{" "}
          <strong className="font-semibold text-slate-100">TypeScript</strong>. Based in{" "}
          <span className="text-sun font-medium">Brussels, Belgium</span>. Multilingual in 7 languages.
        </p>

        {/* Interactive Terminal Window */}
        <div className="mb-10 overflow-hidden rounded-xl border border-oxford-border bg-oxford-card shadow-2xl">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between border-b border-oxford-border bg-oxford/90 px-4 py-3">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-slate-400">
                musa@brussels: ~/portfolio
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded px-2 py-1 text-xs font-mono text-slate-400 transition-colors hover:bg-white/5 hover:text-sun"
              title="Copy terminal contents"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Window Body */}
          <div className="p-6 font-mono text-sm leading-relaxed text-slate-300">
            <p className="text-slate-400">
              <span className="text-sun">$</span> whoami
            </p>
            <p className="pl-4 text-sun-light font-medium">
              Musa Akhmedov — Front-end Developer based in Brussels, Belgium
            </p>

            <p className="mt-3 text-slate-400">
              <span className="text-sun">$</span> languages --spoken
            </p>
            <p className="pl-4 text-slate-200">
              English, Azerbaijani, Turkish, French, Ukrainian, Russian, Spanish (7 languages)
            </p>

            <p className="mt-3 text-slate-400">
              <span className="text-sun">$</span> stack --primary
            </p>
            <p className="pl-4 text-slate-200">
              React, Next.js (App Router), TypeScript, Tailwind CSS, Payload CMS
            </p>

            <p className="mt-3 text-slate-400">
              <span className="text-sun">$</span> interests
            </p>
            <p className="pl-4 text-slate-200">
              Tech architecture, analogue &amp; digital photography, long-distance walking
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 rounded-lg bg-sun px-6 py-3 text-sm font-bold text-oxford transition-all hover:bg-sun-light hover:shadow-lg hover:shadow-sun/20"
          >
            <span>View Recent Work</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-lg border border-oxford-border bg-oxford-card px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-sun/60 hover:text-sun"
          >
            About My Journey
          </Link>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-slate-400 transition-all hover:text-slate-100"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </section>
  )
}
