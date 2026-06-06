# Raíces y Horizontes — Documentación Completa
**Fotógrafo: Iván · Bogotá, Colombia**

---

## Estructura de Carpetas

```
raices-y-horizontes/
│
├── index.html              ← Página principal (single-page)
│
├── css/
│   └── styles.css          ← Sistema de diseño + todos los estilos
│
├── js/
│   └── main.js             ← Toda la interactividad
│
└── img/
    ├── hero-bg.jpg         ← Imagen principal hero (1920x1080+)
    ├── og-cover.jpg        ← Open Graph thumbnail (1200x630)
    ├── ivan-portrait.jpg   ← Retrato de Iván vertical (480x640)
    ├── ivan-working.jpg    ← Iván trabajando cuadrada (400x400)
    │
    ├── portfolio/
    │   ├── bodas-1.jpg     ← Grande/cuadrada (800x800)
    │   ├── bodas-2.jpg     ← Horizontal (800x400)
    │   ├── bodas-3.jpg     ← Cuadrada (400x400)
    │   ├── retrato-1.jpg   ← Cuadrada (400x400)
    │   ├── retrato-2.jpg   ← Cuadrada (400x400)
    │   ├── corporativo-1.jpg ← Vertical (400x800)
    │   ├── familia-1.jpg   ← Cuadrada (400x400)
    │   └── familia-2.jpg   ← Cuadrada (400x400)
    │
    ├── testimonials/
    │   ├── boda-valen.jpg      (380x380)
    │   ├── corp-carolina.jpg   (380x380)
    │   └── familia-morales.jpg (380x380)
    │
    └── blog/
        ├── blog-1.jpg      ← Featured (800x500)
        ├── blog-2.jpg      ← (500x375)
        └── blog-3.jpg      ← (500x375)
```

---

## Wireframes Textuales por Sección

### 1. NAVEGACIÓN (fija, cambia al hacer scroll)
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo: Raíces y Horizontes]   Sobre mí  Portafolio  ...   │
│                                Servicios  Clientes  Blog   │
│                                            [Cotizar ▶]     │
└─────────────────────────────────────────────────────────────┘
Estado inicial: fondo transparente, texto blanco
Estado scrolled: fondo crema/blur, texto oscuro, sombra sutil
```

### 2. HERO (100vh)
```
┌─────────────────────────────────────────────────────────────┐
│  ░░░░░░░░ FOTO DE BODA/PAREJA (parallax) ░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                             │
│  BOGOTÁ, COLOMBIA · DESDE 2014           ← eyebrow dorado  │
│                                                             │
│  Cada historia                            ← titularesco     │
│  merece ser                               ← serif grande    │
│  recordada                                ← ~7rem          │
│                                                             │
│  Fotografía de bodas, retratos...         ← subtítulo      │
│                                                             │
│  [Ver portafolio]  [Solicitar cotización] ← CTAs           │
│                                                        ↓    │
└─────────────────────────────────────────────────────────────┘
```

### 3. MARQUEE
```
── Bodas · Retratos · Fotografía Corporativa · Sesiones Familiares ──
(Fondo dorado, texto oscuro, animación infinita)
```

### 4. SOBRE MÍ
```
┌──────────────────┬─────────────────────────────────────────┐
│  [Foto Iván]     │  SOBRE MÍ (eyebrow)                     │
│  480x640         │  Hola, soy Iván ← h2 con línea dorada   │
│                  │                                          │
│  ┌──────────┐    │  Texto párrafo 1...                      │
│  │Foto work.│    │  Texto párrafo 2...                      │
│  │ 260x260  │    │  "estar presente sin invadir" ← cursiva  │
│  └──────────┘    │                                          │
│  [10]            │  ┌─────┬─────┬─────┐                    │
│  años de exp.    │  │320+ │800+ │ 98% │ ← stats animados   │
│  (badge charcoal)│  │Bodas│Retr.│Sati.│                    │
│                  │  └─────┴─────┴─────┘                    │
│                  │  [Ver mi trabajo] [Hablemos]             │
└──────────────────┴─────────────────────────────────────────┘
```

### 5. PORTAFOLIO (fondo oscuro)
```
Título + filtros:  [Todos] [Bodas] [Retratos] [Corporativo] [Familia]

┌──────────────┬──────┬──────┐
│              │ Ret. │Corp. │  Grid 4 columnas
│  Boda 1      │ 1    │ 1    │  Items: large (2x2),
│  (2x2)       ├──────│ (1x2)│  wide (2x1), tall (1x2)
│              │Fam.1 │      │
├──────┬───────┴──────┼──────┤
│Boda2 (2x1)          │Ret.2 │
├──────────────┬──────┴──────┤
│Boda 3        │ Familia 2   │
└──────────────┴─────────────┘
Hover: overlay con título + categoría
Click: abre lightbox
```

### 6. SERVICIOS (fondo crema)
```
         Paquetes y servicios
         
┌──────────────┬──────────────────┬──────────────┐
│   ESENCIA    │    MEMORIA       │    LEGADO    │
│  (borde)     │  (FONDO NEGRO)   │  (borde)    │
│              │  [Más popular]   │             │
│  $1.200.000  │  $2.800.000      │  $4.500.000 │
│  ✓ 4 horas   │  ✓ 8 horas       │  ✓ Todo día │
│  ✓ 150 fotos │  ✓ 400 fotos     │  ✓ Ilimitado│
│  ✓ Galería   │  ✓ Pre-boda incl.│  ✓ Álbum fís│
│  ✓ 15 días   │  ✓ Álbum digital │  ✓ 2 fotógr.│
│              │  ✓ 21 días       │  ✓ 30 días  │
│  [Solicitar] │  [Solicitar ★]   │  [Solicitar]│
└──────────────┴──────────────────┴──────────────┘
```

### 7. TESTIMONIOS
```
┌──────────────────────────────────┬──────────────┐
│                                  │              │
│  ★★★★★                          │  [Foto       │
│  "Iván capturó cada emoción de   │   cliente    │
│   nuestra boda de una manera     │   380x380]   │
│   que nunca imaginamos posible…" │              │
│                                  │              │
│  Valentina & Sebastián           │              │
│  Boda · Casa de Campo · 2024     │              │
│                                  │              │
│     ● ○ ○  (dots / autoplay)    │              │
└──────────────────────────────────┴──────────────┘
```

### 8. FAQ (accordion)
```
Preguntas frecuentes

▼ ¿Con cuánta anticipación debo reservar?          [+]
─────────────────────────────────────────────────────
  ▲ ¿Cómo es el proceso de entrega de fotografías? [×]
    Para bodas recomiendo reservar con mínimo...
─────────────────────────────────────────────────────
  ¿Trabajas fuera de Bogotá?                       [+]
─────────────────────────────────────────────────────
```

### 9. BLOG
```
┌────────────────────────────┬──────────────┬──────────────┐
│                            │              │              │
│  [Imagen grande 16:10]     │ [Img 4:3]    │ [Img 4:3]   │
│                            │              │              │
│  Guías · Bodas             │ Técnica      │ Negocios     │
│  Todo lo que necesitas     │ Cómo aprove- │ Por qué tu   │
│  saber para planear las    │ char la luz  │ empresa nece-│
│  fotos de tu boda...       │ natural...   │ sita fotos.. │
│  📅 15 abril 2025          │ 📅 3 mar '25 │ 📅 18 feb '25│
└────────────────────────────┴──────────────┴──────────────┘
```

### 10. CONTACTO (fondo oscuro)
```
┌──────────────────────┬───────────────────────────────────┐
│  HABLEMOS            │  ┌─────────────────────────────┐  │
│  Reserva tu sesión   │  │  [Nombre]    [Teléfono]      │  │
│  ideal               │  │  [Email]                     │  │
│                      │  │  [Servicio ▼]                │  │
│  📍 Bogotá, Colombia │  │  [Fecha]     [Presupuesto ▼] │  │
│  ✉ hola@...          │  │  [Mensaje textarea]          │  │
│  📱 +57 300 ...      │  │                              │  │
│                      │  │  [▶ Enviar solicitud]        │  │
│  [IG] [FB] [TT]      │  └─────────────────────────────┘  │
│  [WhatsApp chat]     │                                   │
└──────────────────────┴───────────────────────────────────┘
```

### 11. FOOTER
```
┌──────────────────┬──────────┬──────────┬──────────────┐
│ Raíces y         │ Servicios│ Navegar  │ Contacto     │
│ Horizontes       │ · Bodas  │ · Inicio │ hola@...     │
│                  │ · Retr.  │ · Sobre  │ +57 300...   │
│ Descripción...   │ · Corp.  │ · Port.  │ Bogotá, Col. │
│                  │ · Fam.   │ · Blog   │              │
│ [IG][FB][TT]     │ · Cotiz. │ · FAQ    │              │
└──────────────────┴──────────┴──────────┴──────────────┘
© 2025 Raíces y Horizontes · Bogotá          Privacidad · Términos
```

---

## Sistema de Diseño

### Paleta de colores
| Variable          | Valor     | Uso                        |
|-------------------|-----------|----------------------------|
| `--cream`         | `#F5F0E8` | Fondo secciones, textos    |
| `--warm-white`    | `#FDFBF7` | Fondo principal            |
| `--charcoal`      | `#1C1A17` | Fondos oscuros, botón prim.|
| `--gold`          | `#C9A96E` | Acentos, precios, dorado   |
| `--taupe`         | `#8C7B6B` | Texto secundario           |
| `--sand`          | `#E8DCC8` | Bordes, divisores          |

### Tipografía
- **Display**: Cormorant Garamond (300, 400, 600) — titulares, citas
- **Body**: Jost (300, 400, 500) — párrafos, navegación, labels

### Breakpoints responsive
| Breakpoint  | Cambios principales                              |
|-------------|--------------------------------------------------|
| > 1100px    | Layout full desktop 4 columnas                  |
| ≤ 1100px    | Servicios en 1 columna, footer 2 cols            |
| ≤ 900px     | Portfolio 2 cols, testimonios sin imagen         |
| ≤ 768px     | Menú hamburguesa, about 1 col, blog 1 col        |
| ≤ 480px     | Portfolio 1 col, WhatsApp solo ícono             |

---

## Optimizaciones SEO

### Meta tags implementados
- ✅ Title tag descriptivo (< 60 chars)
- ✅ Meta description (< 160 chars)
- ✅ Meta keywords
- ✅ Canonical URL
- ✅ Open Graph (og:title, og:description, og:image, og:url, og:locale)
- ✅ Twitter Card (summary_large_image)
- ✅ Schema.org LocalBusiness JSON-LD
- ✅ Schema.org FAQPage (en FAQ items)
- ✅ Lang="es-CO"

### Performance
- ✅ `loading="lazy"` en todas las imágenes del portafolio
- ✅ `width` y `height` en imágenes (evita CLS)
- ✅ Fuentes con `display=swap`
- ✅ Preconnect a Google Fonts
- ✅ CSS variables para evitar recalculaciones
- ✅ Scroll listeners con `{ passive: true }`
- ✅ IntersectionObserver para animaciones (no scroll listener)
- ✅ Imágenes con alt text descriptivos

### Accesibilidad
- ✅ Roles ARIA en secciones
- ✅ aria-label en elementos interactivos
- ✅ aria-expanded en FAQ
- ✅ aria-live en slider y formulario
- ✅ Contraste de colores WCAG AA
- ✅ Focus visible en elementos interactivos
- ✅ Skip links implícitos via navegación clara

---

## Checklist de imágenes requeridas

Para poner el sitio en producción, reemplaza los placeholders con fotos reales:

```
img/hero-bg.jpg           → Foto impactante de boda/pareja (1920x1080+)
img/og-cover.jpg          → Thumbnail para compartir en redes (1200x630)
img/ivan-portrait.jpg     → Foto formal o cálida de Iván (480x640)
img/ivan-working.jpg      → Iván en acción con cámara (400x400)
img/portfolio/*.jpg       → 8 fotos del portafolio (ver especificaciones)
img/testimonials/*.jpg    → 3 fotos de clientes (380x380, ovaladas en diseño)
img/blog/*.jpg            → 3 thumbnails de blog
```

**Recomendación**: Usar WebP para fotos reales con fallback JPG.
Comprimir con squoosh.app o sharp (Node.js) al 80% de calidad.

---

## Integración de formulario real

Opciones recomendadas para el formulario de contacto:

1. **Formspree** (gratuito hasta 50 envíos/mes):
   ```html
   <form action="https://formspree.io/f/TU_ID" method="POST">
   ```

2. **EmailJS** (JavaScript, sin backend):
   ```js
   emailjs.sendForm('service_id', 'template_id', form);
   ```

3. **WhatsApp directo** (más simple):
   Construir URL con los datos del formulario y redirigir a wa.me

---

## Próximas mejoras sugeridas

- [ ] Galería individual por categoría (páginas separadas)
- [ ] Sistema de blog real con CMS (Netlify CMS, Sanity, Contentful)
- [ ] Integración Google Analytics 4
- [ ] Google My Business embed
- [ ] Booking calendar (Calendly embebido)
- [ ] Testimonios de Google integrados vía API
- [ ] Video showreel en Hero (loop muted)
- [ ] PWA (manifest.json + service worker)
- [ ] Animaciones GSAP para transiciones más elaboradas
