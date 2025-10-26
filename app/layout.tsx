import '../styles/globals.css'
import type { ReactNode } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
    title: 'New Tech Industries (NTI) - Precision Engineering',
    description: 'Precision machined metal and plastic parts | ISO 9001:2015 & AS9100 D Certified'
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <body className="antialiased text-slate-800">
                <Header />

                <main className="min-h-screen bg-white">
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    )
}
