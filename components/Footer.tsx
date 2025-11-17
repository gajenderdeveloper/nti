export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                    <a href="/" className="inline-flex items-center gap-3">
                        <img src="/logo/NTILogo.png" alt="NTI logo" className="h-10 w-auto" />
                        <span className="sr-only">Newtech Industries</span>
                    </a>
                    <p className="mt-4 text-sm text-slate-300">A prominent Manufacturer, Supplier, and Service Provider offering a comprehensive range of Precision Machined parts in metal & Plastics.</p>
                    <p className="mt-3 text-sm text-slate-300">Partner with NTI — where precision meets performance</p>
                </div>

                <div>
                    <h4 className="font-semibold">Quick Links</h4>
                    <div className="h-0.5 w-12 bg-ntiBlue mt-2 mb-3 rounded" />
                    <ul className="mt-1 space-y-2 text-sm text-white">
                        <li><a href="/about" className="hover:underline text-white">About Us</a></li>
                        <li><a href="/about" className="hover:underline text-white">Our Mission</a></li>
                        <li><a href="/facilities" className="hover:underline text-white">Machining Facilities</a></li>
                        <li><a href="/products" className="hover:underline text-white">Product Services</a></li>
                        <li><a href="/contact" className="hover:underline text-white">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold">Business Sectors</h4>
                    <div className="h-0.5 w-12 bg-ntiBlue mt-2 mb-3 rounded" />
                    <ul className="mt-1 space-y-2 text-sm text-slate-300">
                        <li>Agro-Machinery</li>
                        <li>Medical</li>
                        <li>Construction Equipment</li>
                        <li>Tele-communication</li>
                        <li>Exports</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold">Contact Us</h4>
                    <div className="h-0.5 w-12 bg-ntiBlue mt-2 mb-3 rounded" />
                    <address className="not-italic mt-1 text-sm text-slate-300">
                        Krishna Colony, Gali No.6, Near Sector-25 Ballabgarh, Faridabad-121004 Haryana (India)
                    </address>
                    <div className="mt-3 text-sm">
                        <div className="text-white">Phone: <a href="tel:+919813047047" className="hover:underline text-white">+91 9813047047</a></div>
                        <div className="text-white mt-1">Email: <a href="mailto:nti@ntiep.com" className="hover:underline text-white">nti@ntiep.com</a></div>
                    </div>
                    <p className="mt-4 text-xs text-slate-400">Also: Reseller of FORSTA FILTERS in India | Deals: All kind of engineering plastic products.</p>
                </div>
            </div>

            <div className="border-t border-slate-800">
                <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-slate-400 flex items-center justify-between">
                    <div>© 2025 Newtech Industries. All Rights Reserved.</div>
                    <div className="text-xs">Designed &amp; Developed</div>
                </div>
            </div>
        </footer>
    )
}
