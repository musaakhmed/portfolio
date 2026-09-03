"use client"

import * as React from "react"
import { Mail, Copy, Check, Send, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [copied, setCopied] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)
  const [statusNotice, setStatusNotice] = React.useState<string | null>(null)

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const contactEmail = "hi@musah.dev"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)
    setStatusNotice(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.")
      }

      if (data.simulated) {
        setStatusNotice(
          "Demo mode: Message recorded! In production, configure RESEND_API_KEY in .env to deliver directly to your inbox."
        )
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (err: any) {
      setErrorMessage(
        err.message || "An error occurred while sending your message. Please try again or email directly."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="sayhi" className="py-24 px-6 lg:px-12 border-t border-oxford-border/40">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-sun/30 bg-sun/10 px-4 py-1 text-xs font-mono font-medium text-sun mb-4">
          <Mail className="h-3.5 w-3.5" />
          <span>Get in Touch</span>
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-5xl font-mono">
          Say <span className="text-sun">hi!</span>
        </h2>

        <p className="mt-4 text-base text-slate-300 sm:text-lg max-w-xl mx-auto leading-relaxed">
          Have an interesting project, question, or opportunity? Drop me an email directly at{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-sun underline decoration-sun/40 hover:decoration-sun transition-all"
          >
            {contactEmail}
          </a>{" "}
          or send a message below and I will get back to you promptly.
        </p>

        {/* 1-Click Copy Email Banner */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center gap-2 rounded-lg bg-sun px-6 py-3 font-semibold text-oxford transition-all hover:bg-sun-light shadow-md shadow-sun/20"
          >
            <Mail className="h-4 w-4" />
            <span>Open Email Client</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 rounded-lg border border-oxford-border bg-oxford-card px-5 py-3 text-sm font-mono text-slate-200 transition-all hover:border-sun/60 hover:text-sun"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-400">Email Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-sun" />
                <span>{contactEmail}</span>
              </>
            )}
          </button>
        </div>

        {/* Interactive Direct Message Form with Resend */}
        <div className="mt-12 max-w-xl mx-auto rounded-xl border border-oxford-border bg-oxford-card p-6 sm:p-8 text-left shadow-xl">
          {submitted ? (
            <div className="text-center py-8">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 font-mono">Message Sent!</h3>
              <p className="mt-2 text-sm text-slate-300">
                Thank you for reaching out. Your message has been sent to{" "}
                <span className="text-sun font-mono">{contactEmail}</span>. I'll get back to you as soon as possible.
              </p>
              {statusNotice && (
                <p className="mt-3 text-xs text-amber-300/80 bg-amber-950/40 p-3 rounded-lg border border-amber-800/40">
                  {statusNotice}
                </p>
              )}
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setSubmitted(false)
                  setStatusNotice(null)
                }}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="flex items-center gap-2 rounded-lg bg-rose-950/40 border border-rose-800/40 p-3 text-xs text-rose-300">
                  <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                >
                  Your Name <span className="text-sun">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                >
                  Your Email <span className="text-sun">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                >
                  Subject (optional)
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Opportunity"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                >
                  Message <span className="text-sun">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or inquiry..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2"
              >
                {isSubmitting ? (
                  <span>Sending message via Resend...</span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
