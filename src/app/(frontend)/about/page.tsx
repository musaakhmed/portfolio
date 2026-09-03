import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Globe, Languages, Code, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Musa Akhmedov: background in law and political science, multilingual fluency across 7 languages, and journey into full-stack web development.",
}

export default function AboutPage() {
  const skills = [
    { name: "JavaScript (ES6+)", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "React", category: "Frontend" },
    { name: "Next.js (App Router)", category: "Frontend" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Payload CMS", category: "CMS & Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "GraphQL & REST APIs", category: "Data" },
    { name: "Git & GitHub", category: "Tools" },
    { name: "PostgreSQL / SQLite", category: "Database" },
  ]

  const spokenLanguages = [
    { name: "English", level: "Fluent / Professional", flag: "🇬🇧" },
    { name: "Azerbaijani", level: "Native", flag: "🇦🇿" },
    { name: "Turkish", level: "Fluent", flag: "🇹🇷" },
    { name: "French", level: "Fluent (Brussels)", flag: "🇧🇪" },
    { name: "Ukrainian", level: "Fluent", flag: "🇺🇦" },
    { name: "Russian", level: "Fluent", flag: "🌐" },
    { name: "Spanish", level: "Conversational / Professional", flag: "🇪🇸" },
  ]

  const places = [
    { country: "Belgium", city: "Brussels (Current Base)" },
    { country: "Azerbaijan", city: "Baku" },
    { country: "Germany", city: "Berlin / Munich" },
    { country: "United Kingdom", city: "London" },
    { country: "Spain", city: "Barcelona / Madrid" },
  ]

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto">
      {/* Page Header */}
      <div className="mb-8 sm:mb-12 border-b border-oxford-border/60 pb-6 sm:pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-sun/30 bg-sun/10 px-3 py-1 text-xs font-mono font-medium text-sun mb-3">
          <Code className="h-3.5 w-3.5" />
          <span>Biography &amp; Background</span>
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-mono font-bold text-slate-100 break-words">
          Hi, my name is <span className="text-sun">Musa</span>!
        </h1>
        <p className="mt-2 sm:mt-3 text-base sm:text-lg text-slate-400 font-mono">
          Front-End &amp; Full-Stack Developer based in Brussels, Belgium
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Bio Content Column */}
        <div className="lg:col-span-8 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
          <p className="text-base sm:text-lg text-slate-200">
            I&apos;m a front-end and full-stack developer based in Brussels. My fascination with coding started back in 2005 when I built my first HTML, PHP, and MySQL community portals{" "}
            <span className="text-slate-400 italic text-sm">
              (PHPNuke and Invision Power Board days!)
            </span>.
          </p>

          <p>
            After graduating in <strong>Law and Political Science</strong> in Brussels, I built a rich, diverse career across journalism, politics, high-level political event management, hospitality operations, and international education. That multidisciplinary background gave me a strong foundation in clear communication, critical analysis, and user-centric problem solving.
          </p>

          <p>
            In March 2020, I returned to my core passion of software development, diving deeply into modern JavaScript and mastering React, Next.js, and TypeScript. Today, I specialize in crafting elegant, lightning-fast web applications with clean architecture and meticulous attention to accessibility and performance.
          </p>

          {/* Multilingual Fluency Showcase */}
          <div className="rounded-xl border border-oxford-border bg-oxford-card p-4 sm:p-6 my-6 sm:my-8">
            <h2 className="text-base sm:text-lg font-mono font-bold text-sun mb-3 flex items-center gap-2">
              <Languages className="h-5 w-5 shrink-0" />
              <span>Multilingual Communication (7 Languages)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mb-4 sm:mb-5">
              Fluency across multiple linguistic spaces enables seamless collaboration with international distributed teams, multicultural stakeholders, and global clients:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {spokenLanguages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex flex-col xs:flex-row xs:items-center justify-between rounded-lg bg-oxford p-3 sm:px-4 sm:py-2.5 border border-oxford-border text-xs font-mono gap-1 hover:border-sun/60 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base shrink-0">{lang.flag}</span>
                    <span className="font-semibold text-slate-200">{lang.name}</span>
                  </div>
                  <span className="text-slate-400 text-[11px] xs:text-right shrink-0">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* International Journey */}
          <div className="rounded-xl border border-oxford-border bg-oxford-card p-4 sm:p-6 my-6 sm:my-8">
            <h2 className="text-base sm:text-lg font-mono font-bold text-sun mb-3 sm:mb-4 flex items-center gap-2">
              <Globe className="h-5 w-5 shrink-0" />
              <span>International Journey</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mb-4">
              I have lived and worked across Europe and Eurasia, which shaped an adaptable, globally minded mindset:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
              {places.map((place) => (
                <div
                  key={place.country}
                  className="rounded-lg bg-oxford p-3 border border-oxford-border text-xs font-mono"
                >
                  <span className="font-semibold text-slate-200 block">{place.country}</span>
                  <span className="text-slate-400 block mt-0.5">{place.city}</span>
                </div>
              ))}
            </div>
          </div>

          <p>
            Beyond code, I&apos;m passionate about all things technology, reading non-fiction, digital and analogue 35mm photography, and taking long-distance walking journeys.
          </p>

          {/* Core Technologies Grid */}
          <div className="pt-4 sm:pt-6">
            <h2 className="text-lg sm:text-xl font-mono font-bold text-slate-100 mb-4">
              Technologies &amp; Toolkit
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-oxford-border bg-oxford-card px-3 py-1.5 text-xs font-mono text-slate-200 transition-all hover:border-sun hover:text-sun"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sun" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation CTA */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sun px-6 py-3.5 sm:py-2.5 text-sm font-bold text-oxford hover:bg-sun-light transition-all text-center"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#sayhi"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-oxford-border bg-oxford-card px-6 py-3.5 sm:py-2.5 text-sm font-semibold text-slate-200 hover:text-sun hover:border-sun/60 transition-all text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Sidebar / Profile Card Column */}
        <div className="lg:col-span-4 w-full">
          <div className="lg:sticky lg:top-24 rounded-xl border border-oxford-border bg-oxford-card p-4 sm:p-6 shadow-xl space-y-6">
            <div className="relative aspect-square w-full max-w-xs sm:max-w-sm mx-auto lg:max-w-none overflow-hidden rounded-lg border border-oxford-border bg-oxford">
              <Image
                src="https://media.graphassets.com/sKHqVQZHRSm1dNl70fQT"
                alt="Portrait photo of Musa Akhmedov"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-3 text-sm font-mono">
              <div className="flex justify-between border-b border-oxford-border/60 pb-2">
                <span className="text-slate-400">Location</span>
                <span className="text-slate-200">Brussels, BE</span>
              </div>
              <div className="border-b border-oxford-border/60 pb-2">
                <div className="flex justify-between mb-1.5">
                  <span className="text-slate-400">Languages</span>
                  <span className="text-sun font-semibold text-xs">7 Spoken</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  English, Azerbaijani, Turkish, French, Ukrainian, Russian, Spanish
                </p>
              </div>
              <div className="flex justify-between border-b border-oxford-border/60 pb-2">
                <span className="text-slate-400">Experience</span>
                <span className="text-sun font-semibold">5+ Years Modern Dev</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Status</span>
                <span className="text-emerald-400 font-semibold">Open for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
