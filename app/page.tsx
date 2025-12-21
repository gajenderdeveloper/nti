import { generateMetadata as getSEOMetadata, generateJsonLd } from '../components/SEO'
import Hero from '../components/Hero'
import About from '../components/About'
import Approvals from '../components/Approvals'
import Products from '../components/Products'

export const metadata = getSEOMetadata()

export default function Page() {
    const jsonLd = generateJsonLd()

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
            <About />
            <Approvals />
            <Products />
        </>
    )
}
