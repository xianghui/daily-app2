# Daily App Lab 2

Fresh continuation of [Daily App Lab](https://xianghui.github.io/daily-app/), retaining the same gallery styling and React + Vite build/publishing workflow without copying the old apps, dependencies, or Git history.

- Local root: `/Volumes/ExternalHD/daily_app2`
- Source: https://github.com/xianghui/daily-app2
- Gallery: https://xianghui.github.io/daily-app2/
- Original collection remains at `/Volumes/ExternalHD/daily_app` and is not modified.

## Builder workflow

Hourly (Asia/Singapore), using the existing Daily App Builder cron job and model. Create `YYYYMMDD-N/`, scaffold React + Vite, install gh-pages, set Vite base to `/daily-app2/YYYYMMDD-N/`, and implement a mobile-friendly parametric STL generator specifically for 3D-printable physical fidget toys with both image and STL import. This replaces game generation from 2026-10-20 onward; existing games remain untouched.

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

## Fidget focus (2026-10-20)

Future generators focus exclusively on physical fidget toys: sliders, spinners, rings, rollers, ratchets, articulated chains, hinges, compliant clickers, and tactile worry toys. Each app should offer a distinct tactile interaction or mechanism rather than a cosmetic variation. Existing apps retain their original categories.

Customize ergonomic size/shape, texture, and mechanism-specific dimensions and clearances in millimeters. Favor support-free, hardware-free, print-in-place mechanisms when feasible; otherwise provide all parts, assembly instructions, and explicit hardware sizes/quantities. Provide printer/material-dependent fit presets and calibration guidance; do not assume universal tolerances.

Keep moving components separate and individually manifold. Check clearances, collisions, retention, movement limits, and release/assembly feasibility at representative settings in addition to STL mesh validation. Preview/export must agree. Geometry validation does not establish that a fidget was physically printed or feels a particular way; describe physical testing only if performed. The digest labels these apps "Fidget STL Generator" without relabeling prior general-purpose generators.

## Image and STL import focus (2026-10-21)

Every future generator must support PNG/JPEG images and ASCII/binary STL through a local file picker (plus desktop drag/drop where supported). Imports are a core customization workflow and must change the actual exported fidget geometry, not merely decorate the preview or pass through an unchanged mesh. Earlier apps are not retroactively converted by this requirement.

- Images: provide documented silhouette extrusion or height-map relief on a solid fidget part, preview, crop/fit, threshold or relief settings, millimeter size, depth/thickness, and placement where relevant. Do not claim full 3D reconstruction from one photo.
- STL: preview dimensions, confirm millimeter scale because STL is unitless, transform and integrate the mesh into a mechanically meaningful fidget part. Use valid solid operations or clearly defined separate printable/assembled parts; preserve motion clearances. Reject unsupported/nonmanifold input unless a verified repair path exists.
- Keep files local; no external uploads or personal-input files in Git. Bound file size, pixels, triangles, resolution, and transforms. Provide clear errors, progress and replace/remove/reset controls plus synthetic sample fixtures.
- Verify real browser imports for PNG, JPEG, binary STL and ASCII STL. Prove imported content and transformations affect exported geometry, exercise malformed/excessive input, and run existing topology, dimensions and mechanism checks on both import-derived output paths. The digest describes only implemented import features.
