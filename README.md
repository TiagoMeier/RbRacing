# RB Racing — Sitio Web

Sitio web oficial de **RB Racing**, taller de mecánica, competición y electromecánica en Villa Carlos Paz, Córdoba.

## ✨ Features

- 🎨 **Diseño moderno y minimalista** con identidad racing (paleta blanco/gris/rojo)
- 🌓 **Modo claro y oscuro** (toggle en el navbar, recuerda preferencia)
- ⚡ **Splash screen** con animación de tacómetro al cargar (solo primera vez por sesión)
- 📱 **100% responsive** — mobile, tablet y desktop
- 🚀 **SEO optimizado** — meta tags, Open Graph, Schema.org LocalBusiness
- 💬 **Botón flotante de WhatsApp** con tooltip animado
- 🖼️ **Galería con lightbox** (navegación con teclado: ← → Esc)
- ⭐ **Sección de testimonios**
- ❓ **FAQ con acordeón animado**
- 🏷️ **Marquee de marcas** con efecto infinito
- ✨ **Animaciones al scroll** con Framer Motion
- 📊 **Contadores animados** en stats
- 🔝 **Botón "volver arriba"** flotante
- 🗺️ **Mapa integrado** con efecto grayscale

## 🛠️ Stack

- **React 18** + **Vite** + **SWC** (compilación rápida)
- **Tailwind CSS** (con dark mode)
- **React Router** (navegación entre páginas)
- **Framer Motion** (animaciones)
- **React Helmet Async** (SEO dinámico)

## 🚀 Cómo correrlo

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # Build de producción
npm run preview      # Preview del build
```

## 📁 Estructura

```
src/
├── assets/                   # Logo y fotos del taller
├── components/
│   ├── Navbar.jsx            # Barra superior + theme toggle
│   ├── Footer.jsx            # Footer + redes + back-to-top
│   ├── Splash.jsx            # Splash screen con tacómetro
│   ├── WhatsAppFloat.jsx     # Botón flotante de WhatsApp
│   ├── Lightbox.jsx          # Visor de galería
│   ├── Reveal.jsx            # Wrapper para animaciones al scroll
│   ├── Seo.jsx               # Meta tags por página
│   ├── Testimonials.jsx      # Sección de testimonios
│   ├── BrandsMarquee.jsx     # Carrusel de marcas
│   └── FAQ.jsx               # Preguntas frecuentes
├── context/
│   └── ThemeContext.jsx      # Estado del tema (claro/oscuro)
├── hooks/
│   └── useInView.js          # Hook para detectar viewport
├── pages/
│   ├── Home.jsx              # Inicio
│   ├── Services.jsx          # Servicios detallados
│   ├── About.jsx             # Nosotros + stats
│   └── Contact.jsx           # Contacto + form + mapa
├── App.jsx                   # Routing principal
├── main.jsx                  # Entry point
└── index.css                 # Estilos + Tailwind + dark mode
```

## 🎨 Personalizar

| Qué cambiar | Dónde |
|---|---|
| Logo / fotos | `src/assets/` |
| Textos | `src/pages/*.jsx` |
| Colores | `tailwind.config.js` → `colors.rb` |
| Redes sociales | `src/components/Footer.jsx` |
| Testimonios | `src/components/Testimonials.jsx` |
| FAQs | `src/components/FAQ.jsx` |
| Marcas del marquee | `src/components/BrandsMarquee.jsx` |
| Meta tags SEO | `index.html` (globales) + `src/components/Seo.jsx` (por página) |
| Schema.org | `index.html` (bloque JSON-LD) |

## 📞 Datos del taller

- 📍 Av. Ramón J. Cárcano 2016, Villa Carlos Paz, Córdoba
- 📞 3541-216151 / 3541-381628
- 🕘 Lun a Sáb · 9 a 20hs

## 🚀 Deploy

El sitio es 100% estático, se puede deployar gratis en:
- **Vercel** (recomendado) — conectá el repo y listo
- **Netlify** — drag & drop de la carpeta `dist/`
- **GitHub Pages** — con configuración mínima
- **Cloudflare Pages** — gratis y rápido

Para SPAs con React Router, configurar redirect de todas las rutas a `/index.html`.
