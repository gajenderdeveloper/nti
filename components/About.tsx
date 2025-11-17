import Link from 'next/link'

export default function About() {
    return (
        <section id="about" className="py-16 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">About NewTech Industries (NTI)</h2>
                <p className="mt-4 text-white text-sm lg:text-lg">Since 2009, Newtech Industries (NTI) has been a prominent manufacturer and service provider of high-precision machined parts in metal, and plastics. We are a single-spot solution for your production line, from R&amp;D and design to final manufacturing. Our products are trusted for their precise dimensions, robust construction, and excellent finish.</p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-[#e6f0fa] border rounded transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#13395d]">
                        <div className="w-8 h-8 text-[#13395d]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                                <path d="M12 2l6 3v5c0 5-3 9-6 11-3-2-6-6-6-11V5l6-3z" />
                                <path d="M9 12h6" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h4 className="mt-3 font-semibold text-[#13395d]">ISO 9001:2015 & AS9100 D Certified</h4>
                        <p className="mt-2 text-sm text-[#13395d]">We adhere to the highest international quality standards for manufacturing and fabrication.</p>
                    </div>

                    <div className="p-6 bg-[#e6f0fa] border rounded transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#13395d]">
                        <div className="w-8 h-8 text-[#13395d]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                                <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                                <path d="M12 7v5l3 3" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h4 className="mt-3 font-semibold text-[#13395d]">In-house R&amp;D and Design</h4>
                        <p className="mt-2 text-sm text-[#13395d]">Our engineers use the latest CAD &amp; CAM tools to develop components from your drawings or samples.</p>
                    </div>

                    <div className="p-6 bg-[#e6f0fa] border rounded transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#13395d]">
                        <div className="w-8 h-8 text-[#13395d]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                                <path d="M3 21h18M5 3h14v6H5zM7 9v12" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h4 className="mt-3 font-semibold text-[#13395d]">Key Industries Served</h4>
                        <p className="mt-2 text-sm text-[#13395d]">We proudly supply the Medical, Construction, Tele-communication, Agro-Machinery, and Hydro-turbine sectors.</p>
                    </div>

                    <div className="p-6 bg-[#e6f0fa] border rounded transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#13395d]">
                        <div className="w-8 h-8 text-[#13395d]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="12" cy="12" r="9" strokeDasharray="2 2" />
                            </svg>
                        </div>
                        <h4 className="mt-3 font-semibold text-[#13395d]">Advanced Facilities</h4>
                        <p className="mt-2 text-sm text-[#13395d]">Our state-of-the-art setup includes 5-axis VMC, CNC Turning, and in-house molding capabilities.</p>
                    </div>

                    <div className="p-6 bg-[#e6f0fa] border rounded transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#13395d]">
                        <div className="w-8 h-8 text-[#13395d]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                                <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        </div>
                        <h4 className="mt-3 font-semibold text-[#13395d]">Our Vision</h4>
                        <p className="mt-2 text-sm text-[#13395d]">To be a global leader and a brand of choice for our valued customers, with sustainable and responsible business practices.</p>
                    </div>

                    <div className="p-6 bg-[#e6f0fa] border rounded transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#13395d]">
                        <div className="w-8 h-8 text-[#13395d]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                                <path d="M12 2c2 0 4 2 4 4 0 4-4 8-4 8s-4-4-4-8c0-2 2-4 4-4z" />
                                <path d="M5 19c1-2 5-4 7-4s6 2 7 4" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h4 className="mt-3 font-semibold text-[#13395d]">Our Mission</h4>
                        <p className="mt-2 text-sm text-[#13395d]">To provide superior products and services of exceptional value through continuous innovation and the application of new technologies.</p>
                    </div>
                </div>

                <div className="mt-6">
                    <Link href="/about" className="inline-block hover:bg-[#13395d] bg-[#e6f0fa] text-[#13395d] hover:text-white px-5 py-3 rounded-md">Read More</Link>
                </div>
            </div>
        </section>
    )
}
