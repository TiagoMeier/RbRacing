# RB Racing — Sitio Web (v2 Minimal Premium)

Sitio web oficial de **RB Racing**, taller de mecánica, competición y electromecánica en Villa Carlos Paz, Córdoba.

Versión rediseñada con filosofía **minimal premium** inspirada en marcas como Polestar, Tesla y Rivian. Menos elementos, más impacto.

## ✨ Filosofía

> "Lo perfecto se alcanza no cuando no hay nada más que añadir, sino cuando no hay nada más que quitar." — Antoine de Saint-Exupéry

Esta versión eliminó el ruido visual para dejar protagonista al contenido real: las fotos del taller, los servicios y la marca. La diferencia con la versión anterior es **calidad sobre cantidad**.

### Lo que se mantiene
- 🎨 Diseño premium con tipografía Inter cuidadosamente trabajada
- 🌓 Modo claro / oscuro (recuerda preferencia)
- 📱 100% responsive — mobile, tablet, desktop
- 🚀 SEO completo + Schema.org LocalBusiness
- 📲 PWA — instalable como app + offline
- 💬 WhatsApp flotante (sin animaciones invasivas)
- 🖼️ Imágenes WebP optimizadas (415 KB total)
- 🎯 Logo SVG vectorial

### Lo que se eliminó (intencional)
- Splash screen con tacómetro
- Marquee de marcas
- Cursor custom
- FAQ con acordeón
- Timeline de historia
- Stats animados
- Testimonios placeholder
- Speed-lines de fondo
- Diagonales rojas y clip-paths
- Cotizador multi-paso
- Framer Motion (animaciones nativas con IntersectionObserver)
- Sección "Nosotros" como página separada

**Resultado:** -50% bundle size (207 KB vs 391 KB de JS), tiempo de carga más rápido, foco visual claro.

## 🛠️ Stack

- React 18 + Vite + SWC
- Tailwind CSS con dark mode
- React Router
- React Helmet Async (SEO)
- IntersectionObserver nativo (reveal en scroll)

## 🚀 Cómo correrlo

```bash
npm install
npm run dev          # http://localhost:5173
npm run build
npm run preview
```

## 📁 Estructura

```
public/
├── favicon.svg
├── icon-192.png / icon-512.png
├── manifest.json (PWA)
├── og-image.png (1200×630 para compartir)
└── sw.js (service worker)

src/
├── assets/           # Fotos WebP del taller
├── components/
│   ├── Navbar.jsx           # Minimal + theme toggle
│   ├── Footer.jsx           # 4 columnas limpio
│   ├── Logo.jsx             # SVG inline
│   ├── Reveal.jsx           # IntersectionObserver puro
│   ├── Seo.jsx              # Meta tags dinámicos
│   └── WhatsAppFloat.jsx
├── context/
│   └── ThemeContext.jsx
├── pages/
│   ├── Home.jsx             # Hero + intro + 3 servicios + galería + CTA
│   ├── Services.jsx         # 3 áreas detalladas
│   └── Contact.jsx          # Info + form + mapa
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Paleta y tipografía

- **Colores**: blanco / negro / 11 grises (`ink-*`) / 1 rojo (`accent`)
- **Tipografía**: Inter — pesos 400, 500, 600
- **Tamaños**: clamp-fluid (escala 100-1600px automática)
- **Espaciado**: generoso (32px / 48px / 64px / 96px / 128px)

## 📞 Datos del taller

- 📍 Av. Ramón J. Cárcano 2016, Villa Carlos Paz, Córdoba
- 📞 3541-216151 / 3541-381628
- 🕘 Lun a Sáb · 9 a 20hs

## 🚀 Deploy

100% estático. Recomendado: **Vercel** o **Netlify** (gratis, SPA-aware out-of-the-box).

## 📝 Personalizar

| Qué | Dónde |
|---|---|
| Fotos | `src/assets/work-*.webp` |
| Logo | `src/components/Logo.jsx` (SVG inline) |
| Colores | `tailwind.config.js` → `colors` |
| Textos | `src/pages/*.jsx` |
| Redes | `src/components/Footer.jsx` |
| Meta tags | `index.html` + `src/components/Seo.jsx` |
