"use client"
import { useState } from 'react'

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="py-6 bg-[#e6f0fa]">
            <div className="max-w-6xl mx-auto px-3">
                <div className="flex items-center gap-4 bg-slate-900 rounded-lg shadow-md px-4 py-3 text-white">
                    <a href="/" className="inline-flex items-center gap-3">
                        <img src="/logo/NTILogo.png" alt="NTI logo" className="h-10 w-auto" />
                        <span className="hidden sm:inline font-semibold text-white">NewTech Industries</span>
                    </a>

                    {/* Desktop nav with short descriptors */}
                    <nav className="ml-auto hidden md:flex gap-6 items-center">
                        <a href="/about" className="py-2 px-3 text-white hover:text-[#133b5c]">
                            <div className="font-medium">
                                <span className="md:block xl:inline">About</span>
                            </div>
                        </a>
                        <div className="relative group">
                            <a href="/products" className="py-2 px-3 text-white hover:text-[#133b5c] inline-flex items-center">
                                <div className="font-medium">
                                    <span className="md:block xl:inline">Products</span>
                                </div>
                                <svg className="w-4 h-4 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </a>

                            {/* Dropdown on hover */}
                            <div className="absolute right-0 mt-2 w-56 bg-white text-slate-900 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transform translate-y-1 group-hover:translate-y-0 transition-all z-50">
                                <div className="border-t my-1" />
                                <a href="/products/cones?sub=with" className="block px-4 py-2 hover:bg-gray-100">OWN CONES with conductive paints</a>
                                <a href="/products/cones?sub=without" className="block px-4 py-2 hover:bg-gray-100">OWN CONES without conductive paints</a>
                                <a href="/products/screws" className="block px-4 py-2 hover:bg-gray-100">Screws</a>
                                <a href="/products/rollers" className="block px-4 py-2 hover:bg-gray-100">Rollers</a>
                                <a href="/products/gears" className="block px-4 py-2 hover:bg-gray-100">Gears</a>
                            </div>
                        </div>
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
            <div className={`fixed inset-0 z-10 transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}>
                <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
                <div className="absolute right-0 top-0 h-full w-3/4 p-6 shadow-lg bg-slate-900">
                    <div className="flex items-center justify-between">
                        <a href="/" className="inline-flex items-center gap-3">
                            <img src="/logo/NTILogo.png" alt="NTI logo" className="h-8 w-auto" />
                        </a>
                        <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded text-white">✕</button>
                    </div>
                    <nav className="mt-12 flex flex-col gap-1 text-lg text-white">
                        <a href="/about" onClick={() => setOpen(false)} className=" whitespace-nowrap text-white">About Us</a>
                        <div className="py-4">
                            <a href="/products" onClick={() => setOpen(false)} className="block text-white">Products</a>
                            <div className="pl-3 flex flex-col gap-2">
                                <a href="/products/cones?sub=with" onClick={() => setOpen(false)} className="text-sm text-white ">• OWN CONES with conductive paints</a>
                                <a href="/products/cones?sub=without" onClick={() => setOpen(false)} className="text-sm text-white">• OWN CONES without conductive paints</a>
                                <a href="/products/screws" onClick={() => setOpen(false)} className="text-sm text-white">• Screws</a>
                                <a href="/products/rollers" onClick={() => setOpen(false)} className="text-sm text-white">• Rollers</a>
                                <a href="/products/gears" onClick={() => setOpen(false)} className="text-sm text-white">• Gears</a>
                            </div>
                        </div>
                        <a href="/contact" onClick={() => setOpen(false)} className=" whitespace-nowrap text-white">Contact Us</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}
