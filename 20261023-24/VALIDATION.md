# Validation record — 2026-10-23

## Geometry / import tests

`npm test` passed **78 parameter cases** (defaults, min/max, presets, all 64 low/high parameter corners, eight deterministic variations) plus **24 imported-source combinations** (threshold image, grayscale relief, ASCII wedge and binary frustum across defaults, min/max and all presets).

Independent binary STL parsing verifies nonempty exact file length, finite vertices/normals, nondegenerate triangles, outward normals, directed winding, two incidents per welded edge at 0.00001 mm tolerance, one positive-volume connected component, bed Z=0 and analytic millimeter bounds. A real named-body export is checked separately.

Stem floors ≥2.8 mm, annular walls ≥1.7 mm, protected grip extent and rim recession, low uniform-density center of mass and axial balance bounds pass. Boolean material/air probes check the body, stem floor and rim. CSG differences confirm image and STL imports modify only the well, leaving both spherical and annular contact surfaces unchanged. Monolithic boolean modeling avoids interpenetrating shells and internal surfaces.

## Browser tests

`node browser-test.cjs`: real file-picker PNG and JPEG imports, ASCII and binary STL imports, mm confirmation gates, source previews, changed source pixels/threshold/depth/crop/scale/rotation/placement affecting actual downloaded STL, exact preview/export fingerprints, measured dimensions, replacement/removal/reset, named-body export, extrema and invalid dimensions. Wrong type, fake PNG, oversized image headers/files, excess triangles, bad STL dimensions, truncated/open/nonmanifold/concave meshes and white empty relief are rejected with recoverable errors and disabled export. Invalid transforms and unsafe placement also block export.

Phone checks at 390×844 and 320×740: real touch orbit and two-finger zoom, image/STL picker import and STL downloads, no horizontal overflow, reachable export. No runtime errors or external requests from the editor.

`node extra-browser.cjs`: every preset, four random variations, mesh/mechanism checks on actual downloaded exports, undo/redo, all four portable import JSON save/open round trips, real drag/drop, preview-colour geometry neutrality.

`node mobile-sheet.cjs`: all five tabs, collapse/expand controls, export always inside the 320×740 viewport, explicit unperformed physical-test guidance. Desktop and mobile screenshots were visually reviewed.

`node gallery-test.cjs`: every inline script compiled with `new Function`, new entry present exactly once with `area: "stl"`, correct folder/link, all **103 prior entries retained**, **104 total entries**, STL Generators first, search restores all entries, no runtime errors.

The individual production build and root monorepo predeploy both passed. Root output contains index.html and all 104 app subfolders (105 index files total), zero failed or skipped apps. A second browser suite runs against the actual combined deploy output before publication; its report is `production-browser-validation.json`.

## Scope / unverified physical behavior

**No physical print, inversion, force, endurance or friction test was performed.** There is no dynamics simulation. A valid manifold mesh and low centroid do not prove inversion. Tippe-top turnover remains explicitly experimental in UI and README. Removable lower-hemisphere supports and a brim are required. Uniform solid infill, complete support removal and polished contact surfaces are necessary assumptions. No universal calibration, guaranteed spin time or ready-to-print physical certification is claimed.

## Published site

Root `npm run deploy` returned **Published**. `node public-check.cjs` verified the public app title, loaded bundled modeling/WASM assets, imported the synthetic PNG locally, downloaded and independently validated its actual binary STL, and checked the public gallery lists Turnover Ritual first. No public runtime errors or failed asset requests. See `public-validation.json`.
