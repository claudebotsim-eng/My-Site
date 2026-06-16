import { Helmet } from 'react-helmet-async'

const BASE = 'https://bridgewellness.org'
const DEFAULT_IMG = `${BASE}/og-image.png`

export default function SEO({ title, description, path = '' }) {
  const fullTitle = title
    ? `${title} | Bridging Wellness`
    : 'Bridging Wellness | Accessible Therapeutic & Behavioral Health Care'

  const desc = description ||
    'Bridging Wellness is an Illinois nonprofit providing financial assistance, education, and provider connections for therapeutic, behavioral health, and alternative medicine care.'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={`${BASE}${path}`} />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={`${BASE}${path}`} />
      <meta property="og:image" content={DEFAULT_IMG} />
      <meta property="og:site_name" content="Bridging Wellness" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={DEFAULT_IMG} />
    </Helmet>
  )
}
