# Validation — Loop & Lather

All checks below are computational/browser checks, **not physical printing or soap-film tests**.

Completed against the production Vite bundle at `/daily-app2/20261101-19/`:

- `npm test`: **44 cases**. Three presets, three silhouettes, each parameter bound, representative combined bounds, both STL fixtures and transformed variants, threshold/grayscale fields, and image/STL sources at combined bounds.
- Every clean-part and connected-card binary STL independently parsed: exact byte length, finite vertices, nondegenerate faces, stored unit normals aligned with winding, 1e-5 mm welded edges with exactly two opposite incidents, positive signed volume for each component, expected dimensions and bed alignment. Loose layout has three disjoint solids; card has one.
- Kernel intersections: no unwanted assembled/flat-layout collisions; both sockets/tongues probed; stop shoulders engage; tips flush; both full 0–20 mm insertion/removal paths sampled independently against dock/other loop. Real apertures and bands probed for every shape. Twelve accessible snips avoid parts and leave exactly three parts plus carrier. Sampled sections confirm no unsupported XY growth from bed footprint. Bounds/fit errors block generation.
- `browser-test.cjs`: actual PNG/JPEG and ASCII/binary STL file-picker imports and actual STL downloads. Pixel/threshold/depth/crop/grayscale and mesh scale/rotation/depth/placement changes alter output vs built-in, exact geometry fingerprint matches UI and Node regeneration from same exported JSON. Replaced/removed/reset restores exact built-in bytes. Minimum/maximum UI dimensions, every separate STL, invalid/truncated/open/nonmanifold/oversized/concave meshes, wrong content, excessive pixels/triangles/dimensions, empty white images and invalid transforms all tested; invalid exports disabled and recovery successful. Every downloaded imported model also gets independent part/assembly validation.
- `studio-test.cjs`: every preset exported and checked; all shapes; text, searchable icons and SVG; portable image/STL JSON round-trip and named-design reload; missing payload rejection; undo/redo; actual ZIP unzipped and each STL checked; assembled/exploded/isolated/card/loose views; see-through/fit; saved dark theme, keyboard focus, collapsible sections and reduced-motion context; worker script aborted then successful reload recovery.
- `icons-drop-test.cjs`: all six icons independently mesh/assembly-checked; actual PNG drag-and-drop.
- `orientation-test.cjs`: Z/Y/−Z source axes, explicit mm confirmation, correct transformed dimensions, changed final geometry, all part meshes and assembly checks.
- `rapid-test.cjs`: rapid invalid edits cannot re-enable stale export; spacing changes exact mesh; reset byte identity; background inversion changes geometry; every dedicated per-part button downloaded and independently parsed.
- `personalization-check.mjs`: actual final-mesh volume probes prove bright central image hole keeps backing while dark ring removes material.
- `ui-test.cjs` and browser suite: 320/390 px preview-first layout, actual touch orbit and pinch evidenced by changed canvas screenshots, file uploads/downloads, no overflow in all five tabs or expanded assembly notes, export reachable, phone JSON download. Assembly lift visually changes preview but not print mesh bytes.
- Gallery: all inline scripts compiled by `new Function`; new entry exactly once, correct path and area; STL category first; **349 existing entries preserved, 350 total**; browser rendering/search without runtime errors.
- `npm run predeploy`: production build passes; bundled local worker, WASM, fonts. Vite emits its standard large-bundle and Manifold node-module externalization warnings; production worker loading and exports were tested successfully.

Detailed machine-readable reports: `geometry-validation.json`, `browser-validation.json`, `studio-validation.json`, `icons-drop-validation.json`, `orientation-validation.json`, `rapid-validation.json`, `personalization-validation.json`, `ui-validation.json`, `gallery-validation.json`. Screenshots in `evidence/` and desktop/mobile PNGs.

Reference downloaded and measured in this run; parser/sections/component measurements in reference files. No source STL redistributed. No private user uploads stored. External solution/tray required; no physical print, calibration, assembly, wetting, film, stability or durability test performed. Geometric validation does not guarantee liquid-film formation.

## Combined production verification

Root `npm run predeploy` completed: 350 built, 0 failed, 0 skipped. Every app index exists under `deploy/`, root HTML exactly matches, and the new app bundle matches its tested `dist/`. Full browser import/download/error/touch suite rerun against the actual combined folder at port 5685 passed (`combined-browser-validation.json`). Gallery syntax/render/search rerun against combined root passed with 349 prior entries unchanged.
