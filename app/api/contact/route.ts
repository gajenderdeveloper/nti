import nodemailer from "nodemailer"

type ContactBody = {
    name?: string
    email?: string
    message?: string
}

export async function POST(req: Request) {
    try {
        const body: ContactBody = await req.json()
        const { name = "", email = "", message = "" } = body

        if (!email || !message) {
            return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 })
        }

        const user = process.env.EMAIL_USER
        const pass = process.env.EMAIL_PASS
        if (!user || !pass) {
            return new Response(JSON.stringify({ error: "Email credentials not configured" }), { status: 500 })
        }

        const host = process.env.EMAIL_HOST || "smtp.gmail.com"
        const port = process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT) : 465
        const secure = process.env.EMAIL_SECURE ? process.env.EMAIL_SECURE === "true" : true

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: {
                user,
                pass,
            },
        })

        const to = process.env.CONTACT_RECIPIENT || "mayankluthyagico@gmail.com"

        await transporter.sendMail({
            from: `Website Contact <${user}>`,
            to,
            subject: `New contact from ${name || email}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`,
        })

        return new Response(JSON.stringify({ ok: true }), { status: 200 })
    } catch (err) {
        console.error("Contact API error:", err)
        return new Response(JSON.stringify({ error: "Internal error" }), { status: 500 })
    }
}
