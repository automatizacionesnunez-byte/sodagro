# Reglas y Protocolos del Proyecto SODAGRO

Este documento define las reglas operativas, de diseño y de despliegue continuo obligatorias para el proyecto **SODAGRO** (`projects/sodagro`).

---

## 1. Reglas Críticas de Despliegue en Cloudflare (Workers / Pages)

Para evitar que los despliegues en Cloudflare fallen al subir cambios a la rama `main`, se deben respetar estrictamente las siguientes directrices:

### A. Pre-Push Verification (Obligatorio)
- **NUNCA hacer `git push origin main` sin haber ejecutado antes `npm run build` en local** y comprobar que finaliza con código 0 y genera la carpeta `./dist`.

### B. Compatibilidad de Node.js y Script de Build
- Astro 7 requiere Node.js `>=22.12.0`. En entornos CI/CD de Cloudflare, el CLI directo puede lanzar advertencias o fallos si la versión de Node difiere.
- El comando de build en `package.json` **DEBE** permanecer como:
  ```json
  "build": "node scripts/build.mjs"
  ```
- El script `scripts/build.mjs` compila programáticamente mediante `build({})` de la API de Astro. **No eliminar ni alterar este script**.
- Mantener los archivos `.node-version` y `.nvmrc` fijados en `22.12.0`.

### C. Configuración de `wrangler.json` (Inmutable)
`wrangler.json` debe mantener siempre la siguiente estructura:
```json
{
  "name": "sodagro",
  "compatibility_date": "2024-09-23",
  "compatibility_flags": ["nodejs_compat"],
  "assets": {
    "directory": "./dist",
    "binding": "ASSETS",
    "html_handling": "auto-trailing-slash",
    "not_found_handling": "404-page"
  },
  "build": {
    "command": "npm run build"
  }
}
```
> [!CAUTION]
> **NUNCA actualizar `compatibility_date` a la fecha actual ni a fechas futuras**. El binario `workerd` de Cloudflare fallará inmediatamente si la fecha de compatibilidad supera la fecha de compilación de su servidor (`ERR_RUNTIME_FAILURE`). Mantenerla fijada en `"2024-09-23"`.

> [!IMPORTANT]
> La sección `"build": { "command": "npm run build" }` es indispensable para que el runner de Cloudflare compile la web antes de desplegar los assets estáticos de `./dist`.

---

## 2. Reglas de Diseño y Contenido (Menos es Más)

- **Cero "Mini Cartelitos" / Pills decorativas**:
  - Queda prohibido el uso de cápsulas flotantes tipo SaaS (`rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider`).
  - Los encabezados y secciones deben ser limpios, directos y con tipografía sólida.
- **Hero Transparente y Fotográfico**:
  - Las imágenes del campo y de maquinaria deben apreciarse con sus tonos naturales (verdes, tierra, luz de Andalucía).
  - Usar degradados oscuros ligeros y semitransparentes exclusivamente para garantizar legibilidad y contraste WCAG AA, sin tapar ni oscurecer la viveza del paisaje.
- **SEO On-Page Natural y sin Información Excesiva**:
  - Priorizar la concisión: menos texto superfluo, más contundencia en los beneficios tangibles para el agricultor.
  - Palabras clave esenciales integradas de forma natural: *servicios agrícolas*, *recolección mecanizada*, *paraguas vibrador*, *poda*, *vivero oficial*, *plantones certificados*, *Cabra*, *Córdoba*, *Andalucía*, *gestión PAC*.
  - Llamadas a la acción (CTAs) orientadas al contacto directo y prioritario: WhatsApp oficial (+34 638 71 72 15) y teléfono directo con técnicos agrícolas.

