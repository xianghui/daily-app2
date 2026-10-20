# Daily App Lab 2

Fresh continuation of [Daily App Lab](https://xianghui.github.io/daily-app/), retaining the same gallery styling and React + Vite build/publishing workflow without copying the old apps, dependencies, or Git history.

- Local root: `/Volumes/ExternalHD/daily_app2`
- Source: https://github.com/xianghui/daily-app2
- Gallery: https://xianghui.github.io/daily-app2/
- Original collection remains at `/Volumes/ExternalHD/daily_app` and is not modified.

## Builder workflow

Hourly (Asia/Singapore), using the existing Daily App Builder cron job and model. Create `YYYYMMDD-N/`, scaffold React + Vite, install gh-pages, set Vite base to `/daily-app2/YYYYMMDD-N/`, and implement a useful mobile-friendly parametric STL generator for 3D printing. This replaces game generation from 2026-10-20 onward; existing games remain untouched.

Each app retains `predeploy: npm run build` and `deploy: gh-pages -d dist`. Validate actual STL generation/export, printable mesh topology, dimensions in millimeters, parameter limits, and mobile UX before adding its entry to `const APPS` in the root gallery. Check the original gallery for previously used ideas, but do not build or write into the original tree.

```sh
npm install
npm run predeploy
npm run deploy
git add -A
git commit -m "YYYYMMDD-N: Generator Name (stl)"
git push origin main
```

Root predeploy assembles `deploy/index.html` and app builds in `deploy/YYYYMMDD-N/`; root deploy publishes that combined site to `gh-pages`. `npm run deploy` also invokes predeploy automatically via npm lifecycle. GitHub Pages serves the root of gh-pages.

Daily digest remains at 22:00 Asia/Singapore and scans both collections, with each app linked to its own gallery.

## STL generator requirements

Each new app must offer meaningful dimension/shape controls, sensible presets, an interactive 3D preview, and a real downloadable STL generated locally in the browser. Preview and export use the same geometry. Use millimeters, bounded parameters and resolution, sensible wall thickness/tolerances, and practical print orientation guidance. No paid services or API keys.

Verify default and representative parameter extremes by parsing actual exported STL: finite coordinates, expected bounding dimensions, nondegenerate triangles, consistent winding, positive volume, and closed-manifold edge incidence after welding coincident vertices. Exercise a real browser download and phone layout. Do not claim physical print testing unless performed.

Gallery entries use `area:"stl"`, labeled "STL Generators"; preserve earlier entries and their true categories. The daily digest labels each app by its actual type and covers both collections during transition.
