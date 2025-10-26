export default function Contact() {
    return (
        <section id="contact" className="py-12">
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white border rounded">
                    <h3 className="text-xl font-semibold">Contact Us</h3>
                    <p className="mt-2 text-slate-700">Phone: +91-XXXXXXXXXX / +91-YYYYYYYYYY<br />Email: info@example.com<br />Location: Sector 25, Faridabad, Haryana</p>
                    <div className="mt-4">
                        <form className="grid gap-3">
                            <input className="p-2 border rounded" placeholder="Your name" />
                            <input className="p-2 border rounded" placeholder="Email" />
                            <textarea className="p-2 border rounded" placeholder="Message" rows={4}></textarea>
                            <button type="button" className="bg-ntiBlue text-white px-4 py-2 rounded">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="p-6 bg-white border rounded">
                    <h4 className="font-semibold">Our Location</h4>
                    <div className="mt-3 h-64 bg-slate-100 rounded flex items-center justify-center">Map Placeholder</div>
                </div>
            </div>
        </section>
    )
}
