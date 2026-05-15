import { Helmet } from 'react-helmet-async'

export default function Seo({ title, description, path = '/' }) {
  const fullTitle = title ? `${title} · RB Racing` : 'RB Racing — Taller Mecánico, Competición y Electromecánica · Villa Carlos Paz'
  const desc = description || 'Taller especializado en mecánica general, preparación para competición y electromecánica en Villa Carlos Paz, Córdoba.'
  const url = `https://rbracing.com.ar${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={desc} />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
