"use client"
import { useState } from 'react'

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="bg-hero-texture py-6">
            <div className="max-w-6xl mx-auto px-3">
                <div className="flex items-center gap-4 bg-slate-900 rounded-lg shadow-md px-4 py-3 text-white">
                    <a href="/" className="inline-flex items-center gap-3">
                        <img src="/logo/NTILogo.png" alt="NTI logo" className="h-10 w-auto" />
                        <span className="hidden sm:inline font-semibold">NewTech Industries</span>
                    </a>

                    {/* Desktop nav with short descriptors */}
                    <nav className="ml-auto hidden md:flex gap-6 items-center">
                        <a href="/about" className="py-2 px-3 text-white hover:text-[#133b5c]">
                            <div className="font-medium">
                                <span className="md:block xl:inline">About</span>
                            </div>
                        </a>
                        <a href="/products" className="py-2 px-3 text-white hover:text-[#133b5c]">
                            <div className="font-medium">
                                <span className="md:block xl:inline">Products</span>
                            </div>
                        </a>
                        <a href="/contact" className="py-2 px-3 text-white hover:text-[#133b5c]">
                            <div className="font-medium">
                                <span className="md:block xl:inline">Contact</span>
                            </div>
                        </a>
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={() => setOpen((s) => !s)}
                        className="ml-auto md:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-200 text-slate-900 bg-slate-900"
                    >
                        <svg className={`w-6 h-6 text-white transition-transform ${open ? 'rotate-90' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile overlay menu */}
            <div className={`fixed inset-0 z-50 transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}>
                <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
                <div className="absolute right-0 top-0 h-full w-3/4 p-6 shadow-lg bg-slate-900">
                    <div className="flex items-center justify-between">
                        <a href="/" className="inline-flex items-center gap-3">
                            <img src="/logo/NTILogo.png" alt="NTI logo" className="h-8 w-auto" />
                        </a>
                        <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded text-white">✕</button>
                    </div>
                    <nav className="mt-6 flex flex-col gap-4 text-lg text-white">
                        <a href="/about" onClick={() => setOpen(false)} className="py-2 whitespace-nowrap">About Us</a>
                        <a href="/products" onClick={() => setOpen(false)} className="py-2 whitespace-nowrap">Products</a>
                        <a href="/contact" onClick={() => setOpen(false)} className="py-2 whitespace-nowrap">Contact Us</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}
