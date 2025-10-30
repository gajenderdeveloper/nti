"use client"

import React, { useEffect, useState } from 'react'

export default function Approvals() {
    const clients = ['Stryker', 'POLYMED', 'TEREX', 'Dinamic Oil', 'CommScope']
    const [idx, setIdx] = useState(0)

    useEffect(() => {
        const t = setInterval(() => setIdx((i) => (i + 1) % clients.length), 3500)
        return () => clearInterval(t)
    }, [])

    function prev() {
        setIdx((i) => (i - 1 + clients.length) % clients.length)
    }

    function next() {
        setIdx((i) => (i + 1) % clients.length)
    }

    return (
        <section id="approvals" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 ">
                <h2 className="text-3xl font-bold text-nti-blue mb-2 text-center">Our Approvals & Certifications</h2>
                <p className="text-gray-700 mb-6 text-center">Trusted by industry leaders and approved for critical sectors.</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Use a two-column grid inside the left area so the two cards sit side-by-side on md+ screens */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                            <div className="bg-[#e6f0fa] p-6 rounded border h-full flex flex-col">
                                <h3 className="text-xl font-semibold mb-3 text-center">Official Certifications</h3>

                                <div className="grid grid-cols-1 gap-4">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-20 h-20 flex items-center justify-center bg-white border rounded">
                                            {/* Placeholder certification icon */}
                                            <svg className="w-10 h-10 text-[#13395d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M12 2l6 3v5c0 5-3 9-6 11-3-2-6-6-6-11V5l6-3z" />
                                                <path d="M9 12h6" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">AS9100 D Certified</h4>
                                            <p className="text-sm text-gray-700 mt-1">Approved for Aviation, Space, and Defence organizations. Scope: manufacturing of precision components for Aerospace, Defence, Space, Automotive, and Medical.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="w-20 h-20 flex items-center justify-center bg-white border rounded">
                                            <svg className="w-10 h-10 text-[#13395d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <circle cx="12" cy="12" r="4" />
                                                <path d="M12 2v4" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">ISO 9001:2015 Certified</h4>
                                            <p className="text-sm text-gray-700 mt-1">Demonstrates our commitment to a high-standard Quality Management System and consistent delivery of quality products.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#e6f0fa] p-6 rounded border h-full flex flex-col">
                                <h3 className="text-xl font-semibold mb-3">Key Sector & Client Approvals</h3>
                                <p className="text-sm text-gray-700 mb-3">We are an approved supplier for major defence organisations and a trusted partner to global leaders across several sectors.</p>

                                <div className="grid grid-cols-1 gap-4 mt-auto">
                                    <div>
                                        <h4 className="font-semibold">Major Industry Approvals</h4>
                                        <p className="text-sm text-gray-800 mt-2">Trusted by customers in key sectors including:</p>
                                        <ul className="mt-2 text-sm text-gray-800 space-y-1">
                                            <li><strong>Medical:</strong> Stryker, POLYMED</li>
                                            <li><strong>Construction & Heavy Equipment:</strong> TEREX, Dinamic Oil</li>
                                            <li><strong>Telecommunications:</strong> CommScope</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
