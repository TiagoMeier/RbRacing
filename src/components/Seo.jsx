import { Helmet } from 'react-helmet-async'

export default function Seo({ title, description, path = '/' }) {
  const fullTitle = title ? `${title} — RB Racing` : 'RB Racing — Mecánica. Competición. Electromecánica.'
  const desc = description || 'Taller en Villa Carlos Paz, Córdoba.'
  const url = `https://rbracing.com.ar${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
