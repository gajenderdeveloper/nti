import { Metadata } from 'next'

type Props = {
    title?: string
    description?: string
}

export function generateMetadata({ title, description }: Props = {}): Metadata {
    const metaTitle = title || 'New Tech Industries (NTI) - Precision Engineering'
    const metaDescription = description || 'Precision machined metal and plastic parts | ISO 9001:2015 & AS9100 D Certified'

    return {
        title: metaTitle,
        description: metaDescription,
        robots: 'index,follow'
    }
}

export function generateJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "New Tech Industries (NTI)",
        "url": "https://ntiep.com",
        "logo": "https://ntiep.com/logo/logo.png",
        "sameAs": [],
        "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+91-9813047047",
            "contactType": "customer service"
        }]
    }
}
