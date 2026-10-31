# Corporate Site

Proyecto generado por WEBS Factory. Astro + Tailwind + TypeScript estricto. Equipo corporativo con múltiples páginas, SEO técnico, accesibilidad WCAG 2.2 AA y optimización para buscadores con IA.

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run verify` | typecheck + lint + build + e2e |

## Estructura

```
src/
├── layouts/     Layouts principales
├── components/  UI + secciones de página
├── styles/      Tokens CSS + global styles
├── data/        Contenido y configuración
└── pages/       Rutas del sitio
public/images/   Imágenes locales optimizadas y manifiesto de procedencia
scripts/         Deploy y setup VPS
.github/         CI/CD con GitHub Actions
```

## Despliegue en Cloudflare

El proyecto está configurado para despliegue automático en Cloudflare Pages / Workers:
- `wrangler.json` gestiona la configuración de assets y el comando de build automático (`npm run build`).
- Consulta `AGENTS.md` para conocer las reglas críticas de despliegue antes de realizar push a `main`.

## Variables de entorno

Copia `.env.example` a `.env` y completa los valores.

## Imágenes y vídeo

El starter incluye diez imágenes locales descargadas desde Unsplash con su manifiesto de fuente y atribución:

```bash
npm run assets:download
```

Puedes añadir un vídeo corto en `public/videos/` y usar `VideoBackground.astro` con la imagen poster correspondiente. El vídeo es opcional y nunca sustituye al contenido HTML ni al fallback fotográfico.
