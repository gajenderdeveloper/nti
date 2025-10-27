"use client"
import { motion } from 'framer-motion'
import TiltCard from './TiltCard'

export default function Hero() {
    return (
        <section className="py-6 lg:py-20 bg-[#e6f0fa]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="text-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#13395d] text-center">Precision Engineering for a Smarter Tomorrow</h1>
                        </div>

                        <div className="text-center">
                            <p className="mt-4 lg:mt-10 text-sm lg:text-lg text-[#13395d] font-semibold text-center">An ISO 9001:2015 & AS9100 D Certified Company specializing in precision machined metal and plastic parts for global industries.</p>
                        </div>
                    </div>

                    <div>
                        <div className="w-full">
                            {/* 3D Tilt Card with carousel/ticker and side controls */}
                            <div className="w-full max-w-md md:max-w-lg mx-auto">
                                {/* Lazy-load the TiltCard client component */}
                                {/* import at top of file is static; Hero is client so this works */}
                                {/* @ts-ignore-next-line */}
                                {/* If you want the TiltCard to show all images from public/hero-section, create a file public/hero-section/list.json that contains an array of image paths (e.g. ["/hero-section/1.jpg","/hero-section/2.jpg"]) — TiltCard will fetch it automatically. */}
                                <TiltCard showOverlay={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
