"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Terminal, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Blog", href: "/blog" },
  ]

  // Close menu on Escape key press and prevent background scrolling when open
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-oxford-border/60 bg-oxford/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-12">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-2 text-slate-100 transition-colors hover:text-sun"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sun/40 bg-sun/10 text-sun transition-transform group-hover:scale-105">
            <Terminal className="h-5 w-5" />
          </div>
          <span className="font-mono text-base sm:text-lg font-bold tracking-tight">
            musah<span className="text-sun">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden items-center gap-6 md:flex lg:gap-8">
          <ul className="flex items-center space-x-4 lg:space-x-6 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.replace("/#", "/"))
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`transition-colors hover:text-sun py-2 px-1 ${
                      isActive ? "text-sun font-semibold" : "text-slate-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-mono text-slate-400 border border-oxford-border hover:text-sun hover:border-sun/40 transition-colors"
              title="Payload CMS Admin"
            >
              <Shield className="h-3 w-3 text-sun" />
              CMS
            </Link>

            <Link
              href="/#sayhi"
              className="inline-flex items-center justify-center rounded-lg border border-sun/80 bg-sun/10 px-4 py-2 text-sm font-semibold text-sun transition-all hover:bg-sun hover:text-oxford shadow-sm hover:shadow-sun/20"
            >
              Say hi!
            </Link>
          </div>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-oxford-border text-slate-300 transition-colors hover:border-sun hover:text-sun md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay & Menu */}
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 top-16 z-40 bg-black/60 backdrop-blur-sm md:hidden animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <div className="fixed inset-x-0 top-16 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-oxford-border bg-oxford/98 p-6 shadow-2xl backdrop-blur-xl md:hidden animate-in slide-in-from-top-2 duration-200">
            <nav aria-label="Mobile Navigation">
              <ul className="flex flex-col space-y-3 text-center">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href.replace("/#", "/"))
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-lg py-3 text-lg font-medium transition-colors ${
                          isActive
                            ? "bg-sun/10 text-sun font-semibold"
                            : "text-slate-200 hover:bg-white/5 hover:text-sun"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  )
                })}
                <li className="pt-2">
                  <Link
                    href="/admin"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center gap-2 text-sm text-slate-300 border border-oxford-border rounded-lg px-4 py-3 w-full hover:border-sun hover:text-sun transition-colors"
                  >
                    <Shield className="h-4 w-4 text-sun" />
                    Payload CMS Admin
                  </Link>
                </li>
                <li className="pt-2">
                  <Link
                    href="/#sayhi"
                    onClick={() => setIsOpen(false)}
                    className="block w-full rounded-lg bg-sun py-3 text-center font-bold text-oxford shadow-md hover:bg-sun-light transition-all"
                  >
                    Say hi!
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
