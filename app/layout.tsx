import '../styles/globals.css'
import type { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata = {
    icons: {
        icon: '/favicon.ico'
    },
    title: 'New Tech Industries (NTI) - Precision Engineering',
    description: 'Precision machined metal and plastic parts | ISO 9001:2015 & AS9100 D Certified'
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </head>
            <body className="antialiased text-slate-800 flex flex-col min-h-screen">
                <Header />

                <main className="flex-1 bg-white">
                    {children}
                    <Analytics />
                    <SpeedInsights />
                </main>

                <Footer />
            </body>
        </html>
    )
}
