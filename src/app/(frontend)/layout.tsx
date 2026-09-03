import type { Metadata, Viewport } from "next"
import "@/app/globals.css"
import { Navbar } from "@/components/Navbar"
import { SocialSidebar } from "@/components/SocialSidebar"
import { Footer } from "@/components/Footer"

export const viewport: Viewport = {
  themeColor: "#000929",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://musah.dev"),
  title: {
    default: "Musa Akhmedov | Front-End & Full-Stack Developer",
    template: "%s | Musa Akhmedov",
  },
  description:
    "Portfolio of Musa Akhmedov, a front-end and full-stack developer based in Brussels, Belgium. Specializing in React, Next.js, TypeScript, and modern web architectures.",
  keywords: [
    "Musa Akhmedov",
    "Frontend Developer",
    "Full-Stack Developer",
    "Brussels",
    "Belgium",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Payload CMS",
  ],
  authors: [{ name: "Musa Akhmedov", url: "https://musah.dev" }],
  creator: "Musa Akhmedov",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://musah.dev",
    siteName: "Musa Akhmedov",
    title: "Musa Akhmedov | Front-End & Full-Stack Developer",
    description:
      "Crafting high-performance, accessible web applications in Brussels, Belgium with Next.js, React, and TypeScript.",
    images: [
      {
        url: "https://media.graphassets.com/5ULgBJdPRX66qpFiJ4L7",
        width: 1200,
        height: 630,
        alt: "Musa Akhmedov Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Musa Akhmedov | Front-End & Full-Stack Developer",
    description:
      "Crafting high-performance, accessible web applications in Brussels with Next.js, React, and TypeScript.",
    creator: "@neodarwishism",
    images: ["https://media.graphassets.com/5ULgBJdPRX66qpFiJ4L7"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-oxford text-slate-100 flex flex-col min-h-screen">
        <Navbar />
        <SocialSidebar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
