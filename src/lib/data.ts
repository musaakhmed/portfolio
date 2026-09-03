export interface Project {
  slug: string
  title: string
  tagline: string
  summary: string
  challenge: string
  architecture: string
  solution: string
  imageUrl: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  featured: boolean
  publishedDate: string
}

export interface Post {
  slug: string
  title: string
  date: string
  readingTime: string
  excerpt: string
  content: string
  imageUrl: string
  tags: string[]
}

export const initialProjects: Project[] = [
  {
    slug: "asenox",
    title: "ASENOX",
    tagline: "B2B wholesale distributor of curated SPC flooring and interior doors in NJ.",
    summary:
      "Official digital presence for ASENOX, a premier B2B wholesale supplier of luxury SPC flooring and interior doors based in Edison, New Jersey. Features curated collections, trade showroom scheduling, and dealer application pipelines.",
    challenge:
      "Creating a refined, high-end architectural aesthetic tailored to trade professionals (retailers, contractors, builders, designers) that communicates dependable supply and drives showroom visits.",
    architecture:
      "Next.js App Router (Turbopack), Tailwind CSS, Schema.org LocalBusiness & B2B Wholesale schema, smooth scroll reveals, interactive feature accordions, and Google Maps showroom integration.",
    solution:
      "Engineered an ultra-fast, visually striking B2B experience with dealer conversion funnels, luxury micro-interactions, and direct showroom booking workflows.",
    imageUrl: "https://asenox.com/images/hero.jpg",
    tags: ["Next.js", "Tailwind CSS", "B2B Wholesale", "Architecture", "TypeScript", "Edison NJ"],
    demoUrl: "https://asenox.com",
    githubUrl: "",
    featured: true,
    publishedDate: "2024-08-20",
  },
  {
    slug: "espace-forma",
    title: "Espace Forma",
    tagline: "Digital platform for a Brussels-based social integration and education non-profit.",
    summary:
      "Espace Forma (EF) asbl is a Brussels non-profit organization dedicated to social emancipation, digital inclusion, and education. Designed and built their official digital platform featuring multilingual educational programs, homework support (École de Devoirs), service voucher programs (Titres-Services), and partner integrations.",
    challenge:
      "The organization needed a friendly, accessible, GDPR-compliant portal to clearly present their multifaceted community initiatives, from digital literacy workshops to state-supported educational programs, with effortless content management.",
    architecture:
      "Built with Next.js App Router, Tailwind CSS, Framer Motion animations, responsive video hero banners, and Vercel hosting.",
    solution:
      "Engineered an accessible, mobile-first community portal with sub-second page loads, intuitive service discovery, interactive partner carousels, and contact pipelines.",
    imageUrl: "https://espaceforma.be/assets/about/qui-sommes-nous.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Non-Profit", "Brussels"],
    demoUrl: "https://espaceforma.be",
    githubUrl: "",
    featured: true,
    publishedDate: "2024-05-12",
  },
  {
    slug: "ef-connect",
    title: "EF Connect",
    tagline: "Enterprise staff planning, reporting, and operational intelligence portal.",
    summary:
      "EF Connect is a mission-critical operations and planning platform engineered for Espace Forma in Brussels. It centralizes employee scheduling across weekly shifts, training tracking, partner session debriefs, and real-time operational KPI analytics.",
    challenge:
      "Coordinating multi-location educational programs, external institutional partners (equal.brussels, STIB, COCOF), and diverse shift rotations required a high-density, real-time matrix interface with sub-second response times and seamless dark/light themes.",
    architecture:
      "Built on Next.js App Router (SSR & static chunk optimization), Tailwind CSS with custom semantic design tokens, Outfit & Fira typography hierarchy, SVG bezier trend charts, radial capacity donut graphs, and resilient server action mutations.",
    solution:
      "Delivered an enterprise-grade web application featuring weekly/monthly schedule matrices, batch week duplication, structured session reporting modals with curriculum tracking, and automated administrative compliance.",
    imageUrl: "/images/projects/ef-connect-dashboard.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Enterprise SaaS",
      "Data Visualizations",
      "Shift Planning",
      "Brussels",
    ],
    demoUrl: "https://connect.espaceforma.be",
    githubUrl: "",
    featured: true,
    publishedDate: "2024-06-15",
  },
  {
    slug: "msr-trading",
    title: "MSR Trading",
    tagline: "International B2B trading platform for medical equipment & laboratory instruments.",
    summary:
      "Modern Silk Road (MSR) Trading connects global healthcare markets from Istanbul to international hubs. Built a corporate web platform showcasing world-renowned medical and laboratory brands, clinical chemistry reagents, diagnostic equipment, and RFP quote pipelines.",
    challenge:
      "Presenting thousands of specialized medical and laboratory products from tier-one manufacturers (Abbott, Roche, Siemens, Thermo Fisher) with high search engine visibility and structured B2B inquiries.",
    architecture:
      "Next.js App Router, Tailwind CSS, Schema.org Organization JSON-LD, Google Analytics, dynamic brand showcases, and optimized responsive layouts.",
    solution:
      "Architected a high-converting B2B portal featuring category filtering, interactive quote request dialogs, sticky procurement benefits, and multilingual support.",
    imageUrl: "https://msr-trading.com/assets/images/cards/lab.jpeg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "B2B Trading", "Healthcare", "SEO"],
    demoUrl: "https://msr-trading.com",
    githubUrl: "",
    featured: true,
    publishedDate: "2024-02-18",
  },
  {
    slug: "msr-process",
    title: "MSR Process & Machinery",
    tagline: "Turnkey engineering, industrial machinery, and sustainable energy solutions.",
    summary:
      "Corporate showcase for MSR Process & Machinery, delivering engineering, maintenance, and turnkey expansion solutions across food, beverage, chemical, cryogenic, and sustainable energy industries since 2017.",
    challenge:
      "Communicating complex industrial processes and engineering capabilities across diverse sectors (from precision manufacturing to solar energy and sustainable agriculture) with a compelling, modern digital presence.",
    architecture:
      "Next.js App Router, Tailwind CSS, interactive sticky card scrolling reveals, SVG process diagrams, and high-performance pre-rendering.",
    solution:
      "Delivered a clean, authoritative industrial website with interactive industry cards, custom request-a-quote pathways, and responsive mobile navigation.",
    imageUrl: "https://msrprocess.com/assets/images/cards/industry.jpeg",
    tags: ["Next.js", "Tailwind CSS", "Industrial", "Engineering", "TypeScript"],
    demoUrl: "https://msrprocess.com",
    githubUrl: "",
    featured: true,
    publishedDate: "2023-10-05",
  },
  {
    slug: "horzees-nft",
    title: "Horzees NFT",
    tagline: "Official showcase website for Horzees NFT on Solana.",
    summary:
      "Horzees of Indarados is an NFT collection built on the Solana network. Designed and developed the official showcase web application with high-performance mint countdowns, interactive roadmap visualizations, and wallet integration.",
    challenge:
      "Delivering a latency-sensitive, visually rich Web3 application that loads instantly on mobile devices, handles peak traffic spikes, and provides a seamless user journey.",
    architecture:
      "Built with Next.js App Router, Tailwind CSS, and Solana Web3.js SDK integration. Assets are statically pre-rendered with responsive modern image formats.",
    solution:
      "Engineered an ultra-fast responsive interface with zero layout shift, automated SVG icons, animated roadmap milestones, and cross-browser wallet connectivity.",
    imageUrl: "https://media.graphassets.com/5ULgBJdPRX66qpFiJ4L7",
    tags: ["Solana", "NFT", "Web3", "TailwindCSS", "NextJS", "TypeScript"],
    demoUrl: "https://horzees.vercel.app/",
    githubUrl: "https://github.com/musaakhmed/horzees",
    featured: true,
    publishedDate: "2023-08-10",
  },
  {
    slug: "best-eastern-hotel",
    title: "Best Eastern Hotel",
    tagline: "A website proposal for a 3* hotel with leisure club & restaurant.",
    summary:
      "A full-scale digital proposal and web application prepared for an independent 3* hotel with a leisure club and restaurant. Features room booking inquiries, dining menus, wellness facility scheduling, and dynamic CMS integration.",
    challenge:
      "Hotel staff needed an effortless way to manage room rates, special packages, and restaurant menus without touching code, while guests demanded rapid mobile load times.",
    architecture:
      "Architected using Next.js App Router, Tailwind CSS for responsive hospitality layout, and headless CMS integration with GraphQL APIs.",
    solution:
      "Implemented static generation with on-demand revalidation for sub-second page loads, accessible reservation modals, and a cohesive warm luxury color palette.",
    imageUrl: "https://media.graphassets.com/p2PCMMQzu7aAEoRL64uQ",
    tags: ["NextJS", "TailwindCSS", "Contentful CMS", "SPA", "TypeScript"],
    demoUrl: "https://bah-website-beta.vercel.app/",
    githubUrl: "https://github.com/musaakhmed/bah-next-contentful",
    featured: true,
    publishedDate: "2023-04-15",
  },
  {
    slug: "qriptique",
    title: "qriptique",
    tagline: "Real-time cryptocurrency analytics tracker using the CoinGecko API.",
    summary:
      "A real-time cryptocurrency market tracking dashboard built with Next.js and Tailwind CSS. Features live price updates, 24-hour volume changes, interactive sparklines, and fast search filtering.",
    challenge:
      "Public financial APIs have aggressive rate-limits. The challenge was maintaining real-time price updates and smooth search without triggering 429 throttling errors.",
    architecture:
      "Next.js server-side caching, client-side SWR optimistic revalidation, CoinGecko REST endpoints, and Tailwind CSS for a sleek terminal theme.",
    solution:
      "Implemented client-side debounced queries, in-memory route caching, and responsive sparkline charts with dark mode optimization.",
    imageUrl: "https://media.graphassets.com/xuRviyKiQaCDAK6F06tN",
    tags: ["NextJS", "API", "Crypto", "Web3", "TailwindCSS", "Vercel"],
    demoUrl: "https://qriptique.vercel.app/",
    githubUrl: "https://github.com/musaakhmed/crypto-tracker",
    featured: true,
    publishedDate: "2022-11-20",
  },
]

export const initialPosts: Post[] = [
  {
    slug: "upgrading-nextjs-12-to-14-part-2-next-image",
    title: "Upgrading NextJS 12 to 14 (Part 2: next/image)",
    date: "November 18, 2023",
    readingTime: "4 min read",
    excerpt:
      "As the next step of the update, I solved the errors and layout breaking changes thrown by the modern next/image component in NextJS 14.",
    content: `After successfully updating the \`next/link\` component, the next major milestone in modernizing this portfolio from Next.js 12 was tackling \`next/image\`.

In Next.js 13 and 14, the legacy \`next/legacy/image\` component was completely overhauled in favor of standard, native HTML \`<img>\` output without wrapped \`<span>\` elements.

### Key Changes Encountered

1. **Removal of Wrapper Spans**: The old \`next/image\` generated nested \`<span>\` containers with base64 placeholder GIFs and absolute positioning. The new component renders a native \`<img>\` with modern CSS attributes.
2. **Simplified Layout Props**: \`layout="responsive"\` and \`layout="fill"\` were replaced by standard CSS styling and the boolean \`fill\` prop.
3. **Improved Core Web Vitals**: Eliminating the wrapper elements significantly improved Largest Contentful Paint (LCP) and reduced DOM node count across the site.

\`\`\`tsx
// Before (Next 12)
<Image src="/photo.jpg" layout="responsive" width={800} height={500} />

// After (Next 14+)
<Image src="/photo.jpg" width={800} height={500} className="w-full h-auto" alt="Description" />
\`\`\`

By migrating to the modern image component, our page payloads became lighter, cleaner, and strictly compliant with modern accessibility standards.`,
    imageUrl: "https://media.graphassets.com/jWuV0UDSjehvGBscxDKg",
    tags: ["NextJS", "next/image", "Portfolio", "Performance"],
  },
  {
    slug: "upgrading-nextjs-12-to-14-part-1",
    title: "Upgrading NextJS 12 to 14 (Part 1: next/link)",
    date: "November 15, 2023",
    readingTime: "3 min read",
    excerpt:
      "I finally decided to update my portfolio and start by upgrading Next JS 12 to 14! Here is how I resolved the invalid Link children errors.",
    content: `As you already know, this portfolio is powered by NextJS and, until recently, it ran on version 12. With all the new features and performance improvements brought into NextJS 14, I decided to upgrade the codebase and bring it completely up to date.

### The Upgrade Plan

1. Update \`next/link\` throughout the codebase
2. Update \`next/image\` to native \`<img>\`
3. Migrate to the App Router
4. Implement \`next/font\` to eliminate render-blocking web fonts
5. Complete TypeScript strict mode migration
6. Optimize and clean CSS

\`\`\`bash
npm i next@latest react@latest react-dom@latest eslint-config-next@latest
\`\`\`

### Resolving next/link Errors

The first error encountered upon booting the dev server was:
> Error: Invalid \`<Link>\` with \`<a>\` child. Please remove \`<a>\` or use \`<Link legacyBehavior>\`.

In Next.js 13+, \`<Link>\` renders the underlying anchor tag automatically. Wrapping an explicit \`<a>\` inside \`<Link>\` is no longer needed:

\`\`\`tsx
// Before
<Link href="/about">
  <a>About</a>
</Link>

// After
<Link href="/about">
  About
</Link>
\`\`\`

Removing redundant anchor tags cleaned up the JSX and eliminated hydration mismatches!`,
    imageUrl: "https://media.graphassets.com/K2VJuYdqRhSa0VS0Qd86",
    tags: ["NextJS", "Portfolio", "Upgrade", "TailwindCSS"],
  },
  {
    slug: "javascript-concepts-introduced-in-es6",
    title: "JavaScript Concepts Introduced in ES6",
    date: "August 12, 2022",
    readingTime: "5 min read",
    excerpt:
      "A deep dive into foundational ES6 features that revolutionized modern JavaScript: let/const, arrow functions, destructuring, promises, and modules.",
    content: `Modern JavaScript looks and feels vastly different than it did a decade ago. ECMAScript 2015 (ES6) introduced language features that transformed how we write clean, expressive code.

### 1. Block Scoping with let and const
Prior to ES6, \`var\` was function-scoped and hoisted, leading to tricky scope bugs. \`let\` and \`const\` introduced true lexical block scoping.

### 2. Arrow Functions and Lexical this
Arrow functions provide a concise syntax and, crucially, do not bind their own \`this\`, making callback handling intuitive in event-driven UI code.

\`\`\`javascript
// Traditional function
const numbers = [1, 2, 3];
const doubled = numbers.map(function(n) {
  return n * 2;
});

// ES6 Arrow function
const doubledES6 = numbers.map(n => n * 2);
\`\`\`

### 3. Object & Array Destructuring
Destructuring allows extracting properties or items cleanly into variables:

\`\`\`javascript
const user = { name: 'Musa', role: 'Frontend Developer', city: 'Brussels' };
const { name, role, city } = user;
\`\`\`

Mastering these core principles creates a strong foundation for React, TypeScript, and modern framework architectures.`,
    imageUrl: "https://media.graphassets.com/Hh4NDg0URqm5U1yOjFHx",
    tags: ["JavaScript", "ES6", "Concepts", "Frontend"],
  },
  {
    slug: "why-did-i-do-this",
    title: "Why Did I Do This? Building a Modern Developer Blog",
    date: "July 12, 2022",
    readingTime: "4 min read",
    excerpt:
      "Why did I decide to build a developer blog with Next JS, Tailwind CSS and Headless CMS? Reflections on developer experience and ownership.",
    content: `Why build your own blog when platforms like Medium, Substack, and Dev.to exist?

For a software engineer, your personal website is more than just a portfolio — it is your digital garden, your playground for testing emerging technologies, and a showcase of how you solve real problems.

### Core Objectives
1. **Full Ownership**: Total control over typography, performance, content formatting, and analytics without third-party popups or paywalls.
2. **Speed and Core Web Vitals**: Statically generated pages that load instantly worldwide.
3. **Clean Developer Experience**: Seamless content workflow paired with a modern utility-first CSS system (Tailwind).

Building this portfolio allowed me to experiment with headless CMS architectures, responsive layouts, and performance optimization techniques that I apply to production applications every day.`,
    imageUrl: "https://media.graphassets.com/BuY9RVbKRqiCANLDVlAO",
    tags: ["WebDev", "NextJS", "React", "TypeScript"],
  },
]
