import { generateMetadata as getSEOMetadata, generateJsonLd } from '../components/SEO'
import Hero from '../components/Hero'
import About from '../components/About'
import Approvals from '../components/Approvals'
import Timeline from '../components/Timeline'
import Products from '../components/Products'
import Facilities from '../components/Facilities'
import Quality from '../components/Quality'
import Industries from '../components/Industries'
import WhyChoose from '../components/WhyChoose'
import Contact from '../components/Contact'

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
