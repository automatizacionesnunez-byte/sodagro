# Assets

The starter media comes from Unsplash and is downloaded locally so production pages do not hotlink images.

```bash
npm run assets:download
```

The manifest at `scripts/assets.json` records the source URL, descriptive alt text, and credit for every image. Replace starter imagery with approved client assets before launch and preserve provenance in this manifest.

Video backgrounds are optional. Add an optimized `.mp4` and poster to `public/videos/` only when motion improves understanding. Keep the poster as the no-video and reduced-motion fallback.
