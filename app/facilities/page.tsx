"use client"

import React, { useState } from 'react'

export default function FacilitiesPage() {
    const [active, setActive] = useState<'production' | 'inspection' | 'rnd' | 'certificate'>('production')

    function TabButton({ id, label }: { id: typeof active, label: string }) {
        const isActive = active === id
        return (
            <button
                onClick={() => setActive(id)}
                className={`px-4 py-2 rounded-md mr-2 mb-2 border transition-shadow ${isActive ? 'bg-slate-900 text-white shadow' : 'bg-white text-slate-900 border-[#13395d]'}`}>
                {label}
            </button>
        )
    }

    return (
        <section className="py-16 bg-[#e6f0fa]">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#13395d] text-centertext-3xl md:text-4xl lg:text-5xl font-semibold text-[#13395d] text-center">Facilities</h1>
                <p className="my-4 text-slate-700 leading-relaxed text-center">Learn about our production capabilities, inspection equipment, R&D and certifications.</p>

                {/* Tabs container */}
                <div className="mb-6">
                    <div className="flex flex-wrap">
                        <TabButton id="production" label="1. Production" />
                        <TabButton id="inspection" label="2. Inspection" />
                        <TabButton id="rnd" label="3. R&D" />
                        <TabButton id="certificate" label="4. Certificate and Compliance" />
                    </div>
                </div>

                {/* Content container */}
                <section className="bg-slate-900 rounded-md p-6 shadow text-white">
                    {/* Production */}
                    <div className={`${active === 'production' ? 'block' : 'hidden'}`}>
                        <h2 className="text-2xl font-semibold text-white mb-3">Production — Overview</h2>
                        <p className="mb-4 text-slate-200 leading-relaxed">Newtech has an innovative and state-of-the-art infrastructural setup equipped with the latest machines to enhance the production rate. The company has more than 30% capacity available, which can be expanded.</p>

                        <h3 className="font-semibold mt-4 text-white">Facilities</h3>
                        <p className="mb-4 text-slate-200 leading-relaxed">In-house capabilities include Machining Facilities, Molding Facilities, Stress Relieving Facility, and Sheet Metal facilities.</p>

                        <h3 className="font-semibold mt-4 text-white">Plant Locations</h3>
                        <ul className="list-disc pl-6 text-slate-200 mb-4 leading-relaxed">
                            <li className="mb-2">Plant-1 (Machining Production House): Gali No-42, Sanjay Colony, SECTOR-23, BALLABGARH, FARIDABAD-121004, HARYANA.</li>
                            <li className="mb-2">Plant-2 (Machining): GHAZIABAD, UTTAR PRADESH.</li>
                            <li className="mb-2">Plant-3 (Machining - New Set Up): Sector-25, FARIDABAD, HARYANA.</li>
                        </ul>

                        <h3 className="font-semibold mt-4 text-white">Machine List</h3>
                        <ul className="list-disc pl-6 text-slate-200 leading-relaxed">
                            <li>VMC 4Axis: Hass & Brother (02 nos)</li>
                            <li>VMC 3axis: Hass (05 nos)</li>
                            <li>VMC 5 axis: Hass (01 nos)</li>
                            <li>CNC Turning: LMW (06 nos)</li>
                            <li>Slide Head: Tsugami (01 nos)</li>
                            <li>Tapping: Imported (02 nos)</li>
                            <li>Laser marking: Imported (01 nos)</li>
                            <li>Circular Saw: Indian (02 nos)</li>
                            <li>MIG Welding: Adore (02 nos)</li>
                            <li>Surface Grinder: Indian (02 nos)</li>
                        </ul>
                    </div>

                    {/* Inspection */}
                    <div className={`${active === 'inspection' ? 'block' : 'hidden'}`}>
                        <h2 className="text-2xl font-semibold text-white mb-3">Inspection — Overview</h2>
                        <p className="mb-4 text-slate-200 leading-relaxed">Products are tested on different quality parameters under the strict surveillance of quality controllers.</p>

                        <h3 className="font-semibold mt-4 text-white">Standards Room</h3>
                        <p className="mb-4 text-slate-200 leading-relaxed">The company has an in-house, state-of-the-art Standard-Gauging Room with facilities like height gauges, digital Vernier calipers, and micrometers. All equipment is calibrated through government-approved labs at a pre-defined frequency.</p>

                        <h3 className="font-semibold mt-4 text-white">Inspection Equipment</h3>
                        <ul className="list-disc pl-6 text-slate-200 leading-relaxed">
                            <li className="mb-3"><strong>Coordinate Measuring Machine (CMM)</strong>: Make: Electronica, Model: Ruby cnc 565, Specs: X:500 Y:600 Z:500mm.</li>
                            <li className="mb-3"><strong>Profile Projector</strong>: Make: Electronica, includes a Camera microscope-20x.</li>
                            <li className="mb-3"><strong>Contour Tracer Machine</strong>: Make: Mahr, Model: MarSurf CD 140 A. It offers high precision for roughness and contour with a 140 mm measuring path.</li>
                        </ul>
                    </div>

                    {/* R&D */}
                    <div className={`${active === 'rnd' ? 'block' : 'hidden'}`}>
                        <h2 className="text-2xl font-semibold text-white mb-3">R&amp;D</h2>
                        <p className="mb-3 text-slate-200 leading-relaxed">Team: Newtech has a dedicated Design team working with leading technology in product design, manufacturing, and testing.</p>

                        <h3 className="font-semibold mt-2 text-white">Development Capability</h3>
                        <ul className="list-disc pl-6 text-slate-200 mb-4 leading-relaxed">
                            <li>In-house capabilities to design products & manufacturing processes.</li>
                            <li>CAD & CAM tools are used for designing and machining.</li>
                            <li>Development of components as per customer's sample, drawing & specifications.</li>
                            <li>Can redesign processes in consultation with the customer to improve quality and lower costs.</li>
                        </ul>

                        <h3 className="font-semibold mt-2 text-white">Research Studies</h3>
                        <ul className="list-disc pl-6 text-slate-200 leading-relaxed">
                            <li>Design engineers use the latest tools to maintain quality standards.</li>
                            <li>The team can create and optimize product designs to conform to stringent global standards.</li>
                            <li>Helped many OEM customers to indigenize their product sourcing.</li>
                        </ul>
                    </div>

                    {/* Certificate and Compliance */}
                    <div className={`${active === 'certificate' ? 'block' : 'hidden'}`}>
                        <h2 className="text-2xl font-semibold text-white mb-3">Certificate and Compliance</h2>
                        <p className="mb-4 text-slate-200 leading-relaxed">Overview: Newtech Industries is an ISO 9001:2015 &amp; AS9100 D Certified Company.</p>

                        <h3 className="font-semibold mt-2 text-white">AS 9100D</h3>
                        <p className="mb-3 text-slate-200 leading-relaxed">Standard: Requirements for Aviation, Space, and Defense Organizations.</p>
                        <p className="mb-3 text-slate-200 leading-relaxed">Scope: Manufacture of precision machined components from high-performance polymers for Aerospace, Defence, Space, Automotive, Medical, Oil &amp; Gas, Energy, Semiconductor, Electronic Countermeasure (ECM), Jammers, Counter-Drone Systems, Communication Equipment, Isolators.</p>

                        <h3 className="font-semibold mt-2 text-white">ISO 9001:2015</h3>
                        <p className="mb-3 text-slate-200 leading-relaxed">Standard: Quality Management System.</p>
                        <p className="mb-3 text-slate-200 leading-relaxed">Scope: Manufacturer &amp; Supplier of various types of machinery &amp; plastic equipments and fabrication works.</p>
                    </div>
                </section>
            </div>
        </section>
    )
}