# Documentación para el cliente

## Cómo actualizar contenido

1. Edita los archivos en `src/data/content.ts` con los textos oficiales.
2. Haz un commit y push a la rama `main`.
3. El despliegue se ejecuta automáticamente vía GitHub Actions.

## Comandos útiles

| Comando | Qué hace |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Previsualiza el build de producción |
| `npm run verify` | Ejecuta typecheck + lint + build + e2e |
| `npm run test:e2e` | Ejecuta los test de Playwright |

## Estructura de archivos

- `src/layouts/` — Plantillas HTML globales (Head, Layout)
- `src/components/ui/` — Componentes reutilizables (Button, Input, Card, Modal)
- `src/components/` — Secciones de página (Header, Hero, Features, Footer, Form)
- `src/pages/` — Páginas del sitio (index, servicios, contacto, 404)
- `src/styles/` — Tokens de diseño y estilos globales
- `src/data/content.ts` — Textos del sitio (actualizar contenido real aquí)
- `public/` — Imágenes, favicon, robots.txt, llms.txt
- `scripts/` — Scripts de deploy y rollback para VPS
- `.github/workflows/quality.yml` — Pipeline CI/CD de GitHub Actions

## Dominio y hosting

- Dominio: `[por configurar]`
- Servidor VPS: `[por configurar]`
- SSL: Let's Encrypt (automático con el script de setup)
- Despliegue: Git push a `main` → GitHub Actions → deploy automático a staging; manual a production

## Contacto técnico

Para dudas técnicas o cambios urgentes, contactar a `[email técnico]`.