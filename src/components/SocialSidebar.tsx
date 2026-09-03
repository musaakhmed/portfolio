import * as React from "react"
import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "@/components/icons"

export function SocialSidebar() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/musaakhmed",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/musaakhmed/",
      icon: LinkedinIcon,
    },
    {
      name: "X (Twitter)",
      href: "https://twitter.com/neodarwishism/",
      icon: TwitterIcon,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/neodarwishism/",
      icon: InstagramIcon,
    },
    {
      name: "Email",
      href: "mailto:hi@musah.dev",
      icon: Mail,
    },
  ]

  return (
    <aside
      aria-label="Social Profiles"
      className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-6 lg:flex"
    >
      <ul className="flex flex-col items-center space-y-4">
        {socials.map((social) => {
          const Icon = social.icon
          return (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Musa's ${social.name}`}
                className="group flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition-all hover:-translate-y-1 hover:text-sun hover:bg-sun/10"
              >
                <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            </li>
          )
        })}
      </ul>
      <div className="h-24 w-[1px] bg-gradient-to-b from-oxford-border to-sun/60" />
    </aside>
  )
}
