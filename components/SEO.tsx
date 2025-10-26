import Head from 'next/head'

type Props = {
    title?: string
    description?: string
}

export default function SEO({ title, description }: Props) {
    const metaTitle = title || 'New Tech Industries (NTI) - Precision Engineering'
    const metaDescription = description || 'Precision machined metal and plastic parts | ISO 9001:2015 & AS9100 D Certified'

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "New Tech Industries (NTI)",
        "url": "https://example.com",
        "logo": "https://example.com/logo.png",
        "sameAs": [],
        "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "customer service"
        }]
    }

    return (
        <Head>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="robots" content="index,follow" />
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Head>
    )
}
