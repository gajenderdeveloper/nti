import '../styles/globals.css'
import type { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
    title: 'New Tech Industries (NTI) - Precision Engineering',
    description: 'Precision machined metal and plastic parts | ISO 9001:2015 & AS9100 D Certified'
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="antialiased text-slate-800 flex flex-col min-h-screen">
                <Header />

                <main className="flex-1 bg-white">
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    )
}
