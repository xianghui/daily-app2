# Daily App Lab 2

Fresh continuation of [Daily App Lab](https://xianghui.github.io/daily-app/), retaining the same gallery styling and React + Vite build/publishing workflow without copying the old apps, dependencies, or Git history.

- Local root: `/Volumes/ExternalHD/daily_app2`
- Source: https://github.com/xianghui/daily-app2
- Gallery: https://xianghui.github.io/daily-app2/
- Original collection remains at `/Volumes/ExternalHD/daily_app` and is not modified.

## Builder workflow

Hourly (Asia/Singapore), using the existing Daily App Builder cron job and model. Create `YYYYMMDD-N/`, scaffold React + Vite, install gh-pages, set Vite base to `/daily-app2/YYYYMMDD-N/`, and implement a mobile-friendly parametric STL generator for 3D-printable physical fidgets OR kit cards, based on inspected existing STL references, with both image and STL import. This replaces game generation from 2026-10-20 onward; existing games remain untouched.

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

Deployment verification: `gh-pages` reporting “Published” proves the branch push, not that Pages has rebuilt. Compare `git ls-remote origin refs/heads/gh-pages` with `gh api repos/xianghui/daily-app2/pages/builds/latest --jq '{status,commit,error}'`. If the latest build still targets an older commit and no new run is queued, request the existing legacy Pages build with `gh api --method POST repos/xianghui/daily-app2/pages/builds`. Wait for that commit to reach `built`, then verify the new app URL and its bundled worker/WASM. Do not change the Pages source or repeatedly republish the same files to resolve this trigger delay. This fallback was needed for 20261021-27.

Daily digest remains at 22:00 Asia/Singapore and scans both collections, with each app linked to its own gallery.

## STL generator requirements

Each new app must offer meaningful dimension/shape controls, sensible presets, an interactive 3D preview, and a real downloadable STL generated locally in the browser. Preview and export use the same geometry. Use millimeters, bounded parameters and resolution, sensible wall thickness/tolerances, and practical print orientation guidance. No paid services or API keys.

Verify default and representative parameter extremes by parsing actual exported STL: finite coordinates, expected bounding dimensions, nondegenerate triangles, consistent winding, positive volume, and closed-manifold edge incidence after welding coincident vertices. Exercise a real browser download and phone layout. Do not claim physical print testing unless performed.

Gallery entries use `area:"stl"`, labeled "STL Generators"; preserve earlier entries and their true categories. The daily digest labels each app by its actual type and covers both collections during transition.

## Fidget focus (2026-10-20)

Fidget-generator runs focus on physical fidget toys (kit-card runs are also supported from 2026-10-27): sliders, spinners, rings, rollers, ratchets, articulated chains, hinges, compliant clickers, and tactile worry toys. Each app should offer a distinct tactile interaction or mechanism rather than a cosmetic variation. Existing apps retain their original categories.

Customize ergonomic size/shape, texture, and mechanism-specific dimensions and clearances in millimeters. Favor support-free, hardware-free, print-in-place mechanisms when feasible; otherwise provide all parts, assembly instructions, and explicit hardware sizes/quantities. Provide printer/material-dependent fit presets and calibration guidance; do not assume universal tolerances.

Keep moving components separate and individually manifold. Check clearances, collisions, retention, movement limits, and release/assembly feasibility at representative settings in addition to STL mesh validation. Preview/export must agree. Geometry validation does not establish that a fidget was physically printed or feels a particular way; describe physical testing only if performed. The digest labels these apps "Fidget STL Generator" without relabeling prior general-purpose generators.

## Image and STL import focus (2026-10-21)

Every future generator must support PNG/JPEG images and ASCII/binary STL through a local file picker (plus desktop drag/drop where supported). Imports are a core customization workflow and must change the actual exported fidget or kit-card geometry, not merely decorate the preview or pass through an unchanged mesh. Earlier apps are not retroactively converted by this requirement.

- Images: provide documented silhouette extrusion or height-map relief on a solid fidget part, preview, crop/fit, threshold or relief settings, millimeter size, depth/thickness, and placement where relevant. Do not claim full 3D reconstruction from one photo.
- STL: preview dimensions, confirm millimeter scale because STL is unitless, transform and integrate the mesh into a mechanically meaningful fidget part. Use valid solid operations or clearly defined separate printable/assembled parts; preserve motion clearances. Reject unsupported/nonmanifold input unless a verified repair path exists.
- Keep files local; no external uploads or personal-input files in Git. Bound file size, pixels, triangles, resolution, and transforms. Provide clear errors, progress and replace/remove/reset controls plus synthetic sample fixtures.
- Verify real browser imports for PNG, JPEG, binary STL and ASCII STL. Prove imported content and transformations affect exported geometry, exercise malformed/excessive input, and run existing topology, dimensions and mechanism checks on both import-derived output paths. The digest describes only implemented import features.

## Current reference: Keycap Studio (2026-10-25)

The primary design/workflow reference is `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`, replacing the earlier Vaseverse presentation direction. Read its README, CSS, App, Viewer and relevant import/export/worker code before designing new apps. The reference project stays read-only. This is future-builder configuration, not an automatic redesign of existing apps.

- Preserve distinct physical fidget mechanisms or kit-card assemblies, both image and STL imports, local processing, mesh/mechanical checks, gallery category and publishing workflow. Do not generate cosmetic keycap clones or force keycap-specific switch templates onto unrelated fidgets.
- Visuals: lavender-grey desk (#e7e9f1), white panels, dark ink (#1f2233), pink accents (#e2557a), rounded Fredoka/Rubik-like typography, thin borders, tactile raised keycap buttons and a working saved dark-mode toggle. Replace the old warm terracotta/right-rail styling.
- Desktop: roughly 350–390 px collapsible/scrollable LEFT controls with a compact sticky header; large RIGHT live viewer, view toolbar, dimensions/build status, warnings and explicit exports. Phone: preview first, then status/export and stacked controls; no horizontal overflow.
- Personalization: shape presets, text/icons, SVG/PNG/JPEG outlines or decoration, useful transforms and raised/engraved options; preserve image holes, offer background/threshold controls and checkerboard cutout preview. Imported STL body/base/grip editing offers units, orientation, scale and placement, with real integration and wall/clearance checks. Do not silently replace input with its convex hull.
- Multi-part designs: assembled/exploded/isolated/print-plate views, meaningful fit visualization, per-part STL and Everything ZIP, and honest orientation/assembly guidance. Optional 3MF requires real format/colour validation; STL does not carry preview colours.
- Heavy geometry work runs off the UI thread; show genuine building/errors/warnings and guard against stale builds/exports. Preserve live edits, at least three valid presets, variations, undo/redo, named local designs and JSON save/open with honest imported-asset restoration.
- Verify layouts/themes/states, actual personalization geometry, view modes, worker failure/stale-result handling, saves and real exports alongside existing import/mesh/mechanism checks. No decorative fake controls or untested print-ready claims.

## Existing-STL references and kit cards (2026-10-27)

Each future run creates either a fidget generator or a kit-card generator based on at least one actual inspected existing STL. This is separate from supporting runtime user imports and from the Keycap Studio UI reference. Preserve the hourly schedule, model, root and publishing contract. Earlier apps are unchanged.

Start with relevant meshes under `/Volumes/ExternalHD/3d_printing_apps/`; consult project documentation, not just filenames. If kit-card references are absent locally, use an accessible public STL with documented provenance/reuse terms. Parse the mesh, record source identifier and SHA-256, dimensions, unit assumptions and components, and inspect relevant interfaces/features. Document the measured structure, chosen parameters and adaptations in the app README plus a reference-analysis file. If no actual mesh can be inspected, report the blocker. Keep reference trees read-only and do not publish private/unlicensed raw source assets.

Kit-card generators must provide real bed-flat frames/runners and removable tabs holding all required parts, controls for card/part/tab size, spacing and fit, flat/de-tabbed/exploded/assembled views, connected-card STL and individual-part exports/ZIP plus assembly instructions. Validate card envelope/thickness/connectivity, absence of unintended overlaps, manifold output, de-tabbed part topology, fitted interfaces and feasible assembly at default and representative extreme parameters. Loose parts laid beside a frame do not qualify as a kit card.

Retain local image/STL customization and existing studio, artifact and mechanical checks. Use gallery `area:"stl"` for both types; the digest distinguishes "Fidget STL Generator" from "Kit Card STL Generator" without recategorizing earlier apps or claiming unperformed physical tests.
