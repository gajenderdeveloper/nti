"use client"
import { useState } from 'react'
// Assuming next/image is available. If not, this would be a standard <img> tag.
// For this environment, let's make it a standard <img> tag for compatibility
// and simulate the 'priority' prop with fetchPriority.
// import Image from 'next/image' 

export default function Hero() {
    const slides = [
        {
            // Using placeholder images as /hero-section/ urls won't work here.
            src: 'https://placehold.co/1200x800/e6f0fa/13395d?text=Slide+1+Image',
            alt: 'NTI precision engineering - slide 1',
            title: 'Precision Engineering for a Smarter Tomorrow',
            text: 'NewTech Industries (NTI) is a precision machining enterprise specializing in the manufacture of precision engineering mechanical components for Original Equipment Manufacturers (OEMs) across diverse industrial sectors. Leveraging advanced CNC technology, robust process controls, and stringent quality assurance protocols, NTI delivers engineered parts that meet exacting specifications for performance, durability, and dimensional accuracy.'
        },
        {
            src: 'https://placehold.co/1200x800/d4e3f3/13395d?text=Slide+2+Image',
            alt: 'NTI precision engineering - slide 2',
            title: 'Precision Engineering for a Smarter Tomorrow',
            text: 'NTI partners with OEMs in automotive, aerospace, industrial automation, telecom and energy domains, offering scalable solutions from design validation to full-scale production. Our commitment to precision, reliability, and continuous improvement positions us as a trusted supplier in the manufacturing value chain.'
        }
    ]

    const [index, setIndex] = useState(0)

    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
    const next = () => setIndex((i) => (i + 1) % slides.length)

    const slide = slides[index]

    return (
        <section className="py-6 lg:pt-8 lg:pb-16 bg-[#e6f0fa] font-sans">
            <div className="max-w-7xl mx-auto px-6">
                {/* Banner wrapper
                  MODIFICATION: Removed fixed 'h-80'. 
                  It's now 'h-auto' by default on small screens, and 'h-[520px]' on medium and up.
                */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden relative md:h-[520px]">
                    {/* Left/right arrows are now inside the image container div */}
                    
                    {/* Grid container
                      This 'h-full' correctly inherits 'h-auto' on mobile and 'h-[520px]' on desktop.
                      The 'grid-cols-1 md:grid-cols-2' correctly stacks on mobile and goes side-by-side on desktop.
                    */}
                    <div className="grid grid-cols-1 md:grid-cols-2 items-stretch h-full">
                        {/* Text side (left on desktop, BOTTOM on mobile)
                          MODIFICATION: Swapped order. Now 'order-2' on mobile, 'order-1' on desktop.
                          MODIFICATION: Adjusted padding for mobile ('p-6')
                          MODIFICATION: Adjusted heading size for mobile ('text-2xl')
                          MODIFICATION: Adjusted paragraph size ('md:text-base')
                        */}
                        <div className="p-6 md:p-12 lg:p-20 flex flex-col justify-center h-auto md:h-full order-2 md:order-1">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#13395d]">{slide.title}</h1>
                            <p className="mt-4 lg:mt-6 text-sm md:text-base text-[#13395d] font-semibold">{slide.text}</p>
                        </div>

                        {/* Image side (right on desktop, TOP on mobile)
                          MODIFICATION: Swapped order. Now 'order-1' on mobile, 'order-2' on desktop.
                          MODIFICATION: Added 'relative' class to position arrows.
                        */}
                        <div className="w-full h-80 md:h-full order-1 md:order-2 relative">
                            {/* Left/right arrows
                              MODIFICATION: Moved from parent to inside this div.
                              They are now positioned relative to this container.
                            */}
                            <button aria-label="Previous slide" onClick={prev} className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-[#13395d] rounded-full p-2 shadow-md transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button aria-label="Next slide" onClick={next} className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-[#13395d] rounded-full p-2 shadow-md transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Using a standard <img> tag instead of next/image for compatibility.
                              The 'h-full' and 'w-full' classes make it fill the parent div.
                            */}
                            <img
                                key={slide.src} // Key is important for re-render on change
                                src={slide.src}
                                alt={slide.alt}
                                // width={1200} // Not needed for standard img with w-full/h-full
                                // height={800} // Not needed for standard img with w-full/h-full
                                className="object-cover w-full h-full"
                                // priority={index === 0} // Simulating with fetchPriority
                                fetchPriority={index === 0 ? 'high' : 'auto'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

