import { generateMetadata as getSEOMetadata } from '../../components/SEO'

export const metadata = getSEOMetadata({
    title: "About Newtech Industries (NTI)",
    description: "About NTI — ISO 9001:2015 & AS9100 D Certified precision manufacturer"
})

export default function AboutPage() {
    return (
        <>
            <section className="py-16 bg-[#e6f0fa]">
                <div className="max-w-6xl mx-auto px-6 space-y-12">
                    <div className="grid gap-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#13395d] text-center">About Newtech Industries</h1>

                            <p className="mt-4 text-slate-700 leading-relaxed text-center">An ISO 9001:2015 & AS9100 D Certified Company.</p>

                            <p className="mt-4 text-slate-700 leading-relaxed">Incorporated in 2009 at Faridabad, Haryana, India, "NEWTECH INDUSTRIES" (NTI) is known as a prominent Manufacturer, Supplier, and Service Provider. We are occupied in offering a comprehensive range of Precision Machined parts in metal, and Plastics. Our offered products are widely acknowledged in the market for their qualitative features such as easy installation, precise dimensions, robust construction, application-specific design, and excellent finish.</p>

                            <p className="mt-4 text-slate-700 leading-relaxed">We have developed an innovative and state-of-the-art infrastructural setup that enables us to manage all our business operations in an efficient and well-defined manner. This infrastructure spreads over an extensive area and is well-equipped with the latest machines, tools, and equipment to enhance the production rate. Our facility is segregated into enormous departments, including manufacturing, production, quality testing, R&amp;D, and warehousing and packaging.</p>

                            <p className="mt-4 text-slate-700 leading-relaxed">All products provided by us are tested on different quality parameters under the strict surveillance of our quality controllers to assure their strength and finishes. To meet the exact needs and preferences of our esteemed customers, we can also customize these products as per their necessities.</p>
                        </div>

                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <article className="p-6 border rounded-lg bg-slate-900 shadow">
                            <h2 className="text-2xl font-semibold text-white text-center">Our Vision</h2>
                            <p className="mt-2 text-slate-300 leading-relaxed">To be a global leader and a brand of choice for our valued customers, an employer of choice for our employees, and a forward-looking company with sustainable performance and responsible business practices.</p>
                        </article>

                        <article className="p-6 border rounded-lg bg-slate-900 shadow">
                            <h2 className="text-2xl font-semibold text-white text-center">Our Mission</h2>
                            <p className="mt-2 text-slate-300 leading-relaxed">To support our customers by providing superior products and services of exceptional value which help them gain competitive advantage in their markets.</p>

                            <p className="mt-2 text-slate-300 leading-relaxed">To sustain our vision by constantly seeking renewal via continual improvement in processes and the application of new technologies and best business practices.</p>

                            <p className="mt-2 text-slate-300 leading-relaxed">To dedicate ourselves to the principle of craftsmanship and collaboration.</p>

                            <p className="mt-2 text-slate-300 leading-relaxed">To utilize the best technologies in mechanical, statistical, and management techniques in manufacturing.</p>

                            <p className="mt-2 text-slate-300 leading-relaxed">To strive to achieve a company-wide commitment to continuous improvement in all areas.</p>
                        </article>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-[#13395d] text-center">Why Choose Newtech?</h2>

                        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                            <li className="flex gap-3 items-start">
                                <span className="mt-1 text-slate-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#133b5c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h13M21 7v10a2 2 0 01-2 2H8a2 2 0 01-2-2V7m13 0l2 0m-6 5v1m0 4v1" />
                                    </svg>
                                </span>
                                <span className="text-slate-700">Committed to on-time delivery.</span>
                            </li>

                            <li className="flex gap-3 items-start">
                                <span className="mt-1 text-slate-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#133b5c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zM12 14v8m0 0l-3-3m3 3l3-3" />
                                    </svg>
                                </span>
                                <span className="text-slate-700">Quality to the highest level.</span>
                            </li>

                            <li className="flex gap-3 items-start">
                                <span className="mt-1 text-slate-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#133b5c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="text-slate-700">Adhere to meet Customer Specific Requirements.</span>
                            </li>

                            <li className="flex gap-3 items-start">
                                <span className="mt-1 text-slate-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#133b5c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" />
                                    </svg>
                                </span>
                                <span className="text-slate-700">Versatile product range.</span>
                            </li>

                            <li className="flex gap-3 items-start">
                                <span className="mt-1 text-slate-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#133b5c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13.5V6a2 2 0 00-2-2h-7.5m0 0A2.5 2.5 0 009 6v7.5M9 13.5H3v7.5h7.5" />
                                    </svg>
                                </span>
                                <span className="text-slate-700">Single spot solution for all requirements of your production line.</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-[#13395d] text-center">Our History (Key Milestones)</h2>

                        <div className="mt-6 overflow-hidden">
                            <div className="ticker">
                                <div className="ticker-track flex gap-4">
                                    <article className="min-w-[260px] p-4 bg-slate-900 border rounded shadow">
                                        <time className="text-sm font-medium text-white">2009</time>
                                        <p className="mt-1 text-white">Company incorporated.</p>
                                    </article>

                                    <article className="min-w-[260px] p-4 bg-slate-900 border rounded shadow">
                                        <time className="text-sm font-medium text-white">2012</time>
                                        <p className="mt-1 text-white">Entered the machining parts segment.</p>
                                    </article>

                                    <article className="min-w-[260px] p-4 bg-slate-900 border rounded shadow">
                                        <time className="text-sm font-medium text-white">2013</time>
                                        <p className="mt-1 text-white">Entered into manufacturing engineering plastics parts.</p>
                                    </article>

                                    <article className="min-w-[260px] p-4 bg-slate-900 border rounded shadow">
                                        <time className="text-sm font-medium text-white">2016</time>
                                        <p className="mt-1 text-white">Received first order from Construction Equipment.</p>
                                    </article>

                                    <article className="min-w-[260px] p-4 bg-slate-900 border rounded shadow">
                                        <time className="text-sm font-medium text-white">2017</time>
                                        <p className="mt-1 text-white">Supply started to Medical Instruments manufacturing components and export to the USA.</p>
                                    </article>

                                    <article className="min-w-[260px] p-4 bg-slate-900 border rounded shadow">
                                        <time className="text-sm font-medium text-white">2021</time>
                                        <p className="mt-1 text-white">Started business in telecommunications.</p>
                                    </article>

                                    <article className="min-w-[260px] p-4 bg-slate-900 border rounded shadow">
                                        <time className="text-sm font-medium text-white">2023</time>
                                        <p className="mt-1 text-white">Started supply in the Hydro-turbines sector.</p>
                                    </article>

                                    <article className="min-w-[260px] p-4 bg-slate-900 border rounded shadow">
                                        <time className="text-sm font-medium text-white">2024</time>
                                        <p className="mt-1 text-white">New Tech Sector-25 Plant inaugurated.</p>
                                    </article>

                                    <article className="min-w-[260px] p-4 bg-slate-900 border rounded shadow">
                                        <time className="text-sm font-medium text-white">2009</time>
                                        <p className="mt-1 text-white">Company incorporated.</p>
                                    </article>

                                    <article className="min-w-[260px] p-4 bg-slate-900 border rounded shadow">
                                        <time className="text-sm font-medium text-white">2012</time>
                                        <p className="mt-1 text-white">Entered the machining parts segment.</p>
                                    </article>

                                </div>
                            </div>

                            <p className="mt-6 text-slate-700">Upcoming Project: Aero Defence</p>
                        </div>

                        <style dangerouslySetInnerHTML={{
                            __html: `
                            .ticker { position: relative; }
                            .ticker-track { animation: scroll-left 24s linear infinite; }
                            .ticker-track:hover { animation-play-state: paused; }
                            @keyframes scroll-left {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-50%); }
                            }
                            .ticker-track > * { flex: 0 0 auto; }
                        ` }} />
                    </div>
                </div>
            </section>
        </>
    )
}
