import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      )
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    const recipientEmail = process.env.CONTACT_EMAIL || "hi@musah.dev"

    if (!apiKey) {
      console.warn(
        "RESEND_API_KEY is not configured in .env. Simulating email transmission to:",
        recipientEmail
      )
      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Message processed successfully (demo mode: configure RESEND_API_KEY to send live emails).",
      })
    }

    const resend = new Resend(apiKey)

    const { data, error } = await resend.emails.send({
      from: "musah.dev Contact Form <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email,
      subject: subject
        ? `[musah.dev] ${subject} (from ${name})`
        : `[musah.dev] New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #1a2559; border-radius: 8px; background-color: #000929; color: #f8fafc;">
          <h2 style="color: #fca311; margin-top: 0;">New Message from musah.dev</h2>
          <div style="background-color: #0a1338; padding: 16px; border-radius: 6px; margin: 16px 0;">
            <p style="margin: 4px 0;"><strong>Sender Name:</strong> ${name}</p>
            <p style="margin: 4px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #fca311;">${email}</a></p>
            ${subject ? `<p style="margin: 4px 0;"><strong>Subject:</strong> ${subject}</p>` : ""}
          </div>
          <h3 style="color: #cbd5e1; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Message Body:</h3>
          <div style="background-color: #0a1338; padding: 16px; border-radius: 6px; white-space: pre-wrap; line-height: 1.6; color: #e2e8f0;">${message}</div>
          <p style="font-size: 12px; color: #64748b; margin-top: 24px; text-align: center;">Sent via the contact form on musah.dev</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend API error:", error)
      return NextResponse.json(
        { error: error.message || "Failed to dispatch email via Resend." },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data,
      message: "Your message has been sent successfully!",
    })
  } catch (err: any) {
    console.error("Contact form error:", err)
    return NextResponse.json(
      { error: err.message || "An unexpected error occurred while sending your message." },
      { status: 500 }
    )
  }
}
