# Port & Resonance

A React + Vite maker studio generating an original **six-panel Helmholtz-style acoustic chamber kit card**. Snip 24 runners, seat four walls in a signature floor, lower a ported roof over eight tongues, then bond and seal the seams. The cavity and circular aperture—not a membrane, string or electronic tone generator—form the new physical interaction. This is a passive experimental assembly kit, not a browser game, static download, mouthpiece or guaranteed instrument.

## Run

Node 22.12+: `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Individual scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public combined hosting uses the parent monorepo's `deploy/` workflow. Vite base `/daily-app2/20261101-12/`.

Redistribution notices for fonts, Manifold, Three.js and the reference are included under `public/licenses/`.

Bundled dependencies: React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fredoka and Rubik (Fontsource, OFL). Generation/export need no CDN, API key, paid service or server computation. Serve static files over HTTP to load the worker/WASM. User files remain in the browser, never uploaded or committed. Samples are synthetic fixtures adapted from this repository, not personal source assets.

## Actual reference and original adaptation

Read-only local candidates were found under `/Volumes/ExternalHD/3d_printing_apps/` first. Parsed clicker template: SHA-256 `292a392ae7fc81583be72352081413c3e98d3c7387f675d7311f79e8a5b31bf9`, three components, 15.2 × 15.2 × 43.1 mm. Parsed diamond link: SHA-256 `8146cd758a8c0218560a3fe7cdd7b6ad23304fe9e4472ff0259e18266f4ed9fd`, one component, 7.981 × 9.241 × 8 mm. Their cavity/stem and interlocking-link topology are unsuitable sheet-kit interfaces; their READMEs were inspected. No suitable local source kit STL was found.

Selected geometry reference: **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**. Source README and license fetched in this run; downloaded STL actually parsed. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; binary, 30,616 triangles, 179.819997 × 178.019994 × 3.1899996 mm, 27 edge-connected components, not wholly watertight. Units are assumed millimeters because STL has no unit metadata.

Sections at Z=.1/.5/1.59 mm show bed-level runners and pierced sheets. Measured sheet planes: Z=0 and 1.6 mm. Four actual receiving slots measure 4.5 × 1.700012 mm. Low planes .21/.22 mm are recorded, not claimed universally suitable tabs. See `reference-measurements.json`, `reference-analysis.json`, `evidence/reference-sections.png`, `reference-inspect.py` and `REFERENCE-LICENSE.txt`. Reproduce with a Python venv containing trimesh, numpy, scipy, matplotlib and networkx: `python reference-inspect.py /path/to/downloaded-reference.stl`. Raw third-party STL is NOT redistributed.

**Measured vs proposed:** default 1.6 mm wall/roof and 4.5 mm tongue width retain measured scales. The source slot's ~.100012 mm thickness surplus informs—but does not prove—the new .15 mm TOTAL default allowance. New floor thickness 2.4 mm, cavity/port, sixteen tongue joints, two-column six-bay carrier and .4–.6 mm runners are original redesigns. Source mesh defects are not copied or claimed repaired. All solids are independently reconstructed with real Manifold Boolean operations, not convex hull substitutes.

**Visual reference:** inspected read-only Keycap Studio README, styles.css, App.tsx, Viewer.tsx, worker.ts, geometry/stl.ts, imageTrace.ts and export.ts. Concrete patterns retained: 374 px left scroll panel, compact brand/theme header, numeric/range pairs, labelled collapsible sections, white/lavender/coral light theme, saved coherent dark theme, raised tactile buttons, preview-first phone layout, source/cutout comparison, worker-owned solids and current-result export gating. General local studio infrastructure and synthetic tests are adapted from this monorepo; the six-panel acoustic geometry, port model, packing and assembly checks are new. No source history or dependency tree copied.

## Supported parameters

All dimensions in **mm** unless noted; some individually legal ranges cannot pack together and correctly block export.

| Control | Range |
|---|---|
| Card outer width × height | 112–144 × 154–194 |
| Inner cavity width × depth × height | 34–46 × 30–42 × 24–36 |
| Circular port radius | 3–6 |
| Floor thickness | 2–2.6 |
| Wall/roof sheet | 1.6–2.4 |
| Total slot allowance | .1–.3; half per side |
| Minimum part spacing | 3–4 |
| Removable runners | .8–1.4 wide × .4–.6 thick |
| Tongue width | fixed 4.5, measured-reference scale |

Floor/roof outer flange = cavity width/depth + twice sheet + 6 mm. Square, rounded and chamfered flange silhouettes are real solids. Front/rear walls span inner width + 2 sheets; side walls span inner depth and butt between them. Lower tongues extend floor thickness, upper tongues extend sheet thickness, so both sit flush through their sockets. Four 2.4 mm carrier borders/rails and 24 accessible side runners form one closed connected card; clean exports omit all tabs. Card Z=max(floor,sheet), all clean parts rest at Z=0. Incompatible width/height/spacing is rejected, not silently shrunk.

Nominal estimate: `f = 343000/(2π) × sqrt(πr² / (W D H × (sheet+1.7r)))` Hz, all lengths in mm. Default cavity 43.2 cm³; estimate ~689 Hz. This approximate Helmholtz model assumes sealed rigid walls and one short circular port. End correction, adhesive, leaks, panel vibration, signature-recess volume and speaker coupling affect real response. Display is not measured pitch, sound synthesis or physical validation.

## Assembly / print guide

1. Print card OR six clean panels bed-flat, PLA/PETG, .16–.20 mm layers, 0.4 mm nozzle, three walls, 100% mm. No supports intended. Trial-print one floor/wall joint before committing; .1–.3 mm TOTAL allowance is printer/material dependent, never universal. Adjust first-layer expansion rather than forcing a fit.
2. Snip 24 accessible runners about 1.6 mm outside the parts; trim nubs. Avoid sockets, tongues and panel edges that must seal. Six panels remain plus carrier waste.
3. Seat front/rear panels in floor's paired front/rear slots. Lower narrower left/right panels between them into their sockets. Lower roof over all eight upper tongues. Rigid geometry checks sample insertion; there are no hidden crossed tabs requiring impossible sliding.
4. Remove roof after dry-fit. Bond floor joints and four butt seams, then lower and bond roof. Seal every through-slot gap and seam externally with suitable adhesive/tape; leave ONLY the circular roof port open. Adhesive and tape are required, external and not exported. Fits are not captive snaps and are not airtight unsealed. Let adhesive cure. No bearings, magnets, fasteners, film membrane or electronics required.
5. Explore near-port taps or an external small speaker near the approximate frequency; physical response is experimental and not guaranteed. Do not blow into or share it as a mouthpiece. Adult craft: cutters, adhesive, small parts; not for children, pressure use, food or load-bearing.

**No physical print, assembly, leak, resonance, fatigue or sound tests have been performed.** Mesh and rigid assembly checks cannot establish these.

## Image, text, icon and SVG workflow

Picker on desktop/phone and desktop drop accept actual PNG/JPEG or simple SVG, 2 MB maximum. PNG/JPEG headers validated before decoding: ≤12 MP and ≤6,000 px per side. Normalize to ≤500 px. Fit-entire/crop-fill and ±25% crop shifts, light/transparent or inverted dark background, threshold 1–254 or grayscale relief. Checkerboard shows the actual 20 × 20 converted height grid beside the source. Text up to eight characters and six searchable locally defined icons use the same path. Simple SVG rejects scripts, external references, effects/text, invalid dimensions and >2,000 elements; rasterized locally to 256 px with holes preserved at sampling resolution.

Conversion is a closed sampled height-field solid Boolean-subtracted into the central floor. Footprint 4–7 mm, engraving depth .4–.6 mm, rotate ±180°, X ±1.5 / Y ±2 mm. Every transformed vertex must stay within a 6.5 mm safety circle; no joint or roof-port obstruction. Floor below signature ≥1.4 mm. White holes remain unengraved, **not cut through**; verified with real Boolean probes. Empty silhouettes block export recoverably. This is **2D-to-relief, not automatic full 3D reconstruction from one photograph or exact contour tracing**. Tiny/low-contrast detail can vanish at 20 × 20; simplify bold artwork and inspect slicer resolution. Raised style is intentionally unsupported. Replace/remove/reset and transform reset return to deterministic built-ins.

## STL workflow and supported geometry

Binary and ASCII STL, ≤2 MB, ≤1,500 triangles, each oriented dimension .2–250 mm. Select Z up, Y up (+90° X), or −Z up before attaching; changing axis clears the source and requests reattachment. Explicitly confirm mm; STL has no unit metadata. Source 3D preview, dimensions, triangle count and format are shown.

Supported source: one finite, non-self-intersecting, closed outward-wound positive-volume **convex solid**, broad flat bottom ≥25% of XY bounding area, and every XY projection inside its bottom footprint (no overhang). Welding tolerance 1e-5 mm; every edge must have exactly two oppositely directed adjacent triangles. Open, truncated, degenerate, nonmanifold, concave, hollow, multibody and unsupported-overhang geometry rejects with actionable guidance. There is no automatic repair. A bottom-footprint hull is used ONLY to check bed support, never to replace/export the input solid.

XY scales proportionally to a 4–7 mm footprint; Z independently scales to .4–.6 mm engraving depth. Exact triangles, center/rotation/placement and their concavities would enter the kernel unchanged—but concave input is deliberately rejected by the bounded support contract. Minimum scaled XY dimension 1.2 mm. Source mesh is actually Boolean-subtracted into the floor, not merely viewed/re-exported. Imported shape, scale, depth and placement alter downloaded card/floor geometry while leaving joints intact.

## Studio, persistence and export

Three real presets with generated model thumbnails, bounded variations, history undo/redo (35 states), local named designs (six entries), JSON save/open. Portable JSON ≤2 MB includes normalized PNG data (≤1.8M characters, ≤250k px) or bounded indexed STL triangles; restored meshes are revalidated. Missing image payload explicitly requires reattachment, never fake restoration. User source files are not saved in the repository. Named browser storage can fill; JSON remains the backup path.

Assembled, exploded, connected-card, de-tabbed flat layout, and all six isolated-part views share exact meshes. Roof-lift slider is explicitly preview-only and not a motion simulation. Exports always use real bed-flat print orientation. Rotate/zoom/fit via Three.js, touch orbit/pinch plus buttons. Saved dark theme, visible keyboard focus, reduced-motion handling and no hover-only controls.

Worker uses local Manifold WASM, bounded mesh detail and 100 ms debounce. Build IDs discard stale results; exact `[parameters,source,transforms]` plus conversion-state gate disables all export while loading, invalid or stale. Errors are recoverable; worker failure blocks export and instructs reload. Binary STL preview signature matches downloaded bytes. Per-part buttons and Everything ZIP include connected card, six clean panels and numbered assembly/fit notes. STL does not store colour or units; ZIP is not mislabeled 3MF.

## Verification

`npm test`: independent binary STL byte length, finite coordinates, nondegenerate triangles, outward unit normals, welded edge incidence/orientation, per-component positive volume, dimensions and component count. Each card and each clean part checked; 43 cases cover all presets, silhouettes, parameter extrema, image and actual STL sources. Forty invalid inputs/combinations rejected. Real Boolean image-hole probes; 25 roof and wall insertion positions; sixteen actual socket/tongue probes; cavity/port samples; nonintersection; bed support; actual 24-cut release yields seven components. See `validation-report.json`.

Browser scripts use real file pickers, actual downloads and production base path. They compare preview/export signatures and regenerate saved JSON in Node, check every output mesh and assembly, malformed files, image thresholds/pixels/depth, STL orientation/scale/placement, history and portable state, presets/icons/SVG, named saves, ZIP contents, failed workers, touch orbit/pinch, desktop 374 px panel and true 320/390 px viewports. Reproducible `.cjs` scripts and JSON reports live beside this README; screenshots under `evidence/`. These are computational checks only.
