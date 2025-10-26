"use client"
import { useState, useEffect } from "react"

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
    const [showPopup, setShowPopup] = useState(false)

    useEffect(() => {
        if (status === "success" || status === "error") {
            setShowPopup(true)
            const t = setTimeout(() => {
                setShowPopup(false)
                setStatus("idle")
            }, 4000)
            return () => clearTimeout(t)
        }
    }, [status])

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        setStatus("sending")
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })

            if (res.ok) {
                setStatus("success")
                setForm({ name: "", email: "", message: "" })
            } else {
                setStatus("error")
            }
        } catch (err) {
            setStatus("error")
        }
    }

    return (
        <main className="bg-hero-texture flex items-center justify-center py-8">
            <div className="w-full max-w-2xl bg-slate-900 p-8 rounded-2xl shadow text-center">
                <h1 className="text-2xl font-bold mb-2 text-white">Contact Us</h1>
                <p className="mb-6 text-white">Send us a message and we'll get back to you.</p>

                <form onSubmit={onSubmit} className="space-y-4 text-left">
                    <label className="block">
                        <span className="text-sm text-white">Name</span>
                        <input
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="mt-1 w-full p-2 border rounded bg-gray-200"
                            required
                        />
                    </label>

                    <label className="block">
                        <span className="text-sm text-white">Email</span>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="mt-1 w-full p-2 border rounded"
                            required
                        />
                    </label>

                    <label className="block">
                        <span className="text-sm text-white">Message</span>
                        <textarea
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="mt-1 w-full p-2 border rounded"
                            rows={5}
                            required
                        />
                    </label>

                    <div className="flex items-center justify-between gap-4">
                        <div className="px-4 py-2 text-sm text-white">
                            <p>Phone: <a href="tel:+919813047047" className="underline">+91 9813047047</a></p>
                            <p>Email: <a href="mailto:nti@outlook.in" className="underline">nti@outlook.in</a></p>
                        </div>
                        <button type="submit" disabled={status === "sending"} className="bg-white text-[#133b5c] font-bold px-4 py-2 rounded">
                            {status === "sending" ? "Sending..." : "Send Message"}
                        </button>
                    </div>

                    <div className="mb-6 text-sm text-white">
                    </div>
                </form>
            </div>
            {/* Toast / Popup */}
            {showPopup && (
                <div className="fixed left-1/2 top-6 z-50 w-auto transform -translate-x-1/2">
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded shadow-lg text-white ${status === "success" ? "bg-emerald-600" : "bg-red-600"}`}>
                        <div className="text-sm">{status === "success" ? "Message sent — thank you." : "Error sending message."}</div>
                        <button aria-label="Close" onClick={() => { setShowPopup(false); setStatus("idle") }} className="text-white/80 hover:text-white ml-2">✕</button>
                    </div>
                </div>
            )}
        </main>
    )
}
