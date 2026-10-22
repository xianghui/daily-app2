# Thread Reverie

A browser-based parametric **captive lead-screw fidget**, built with React + Vite. Hold a stationary palm tab and turn a fluted thumb nut: each revolution advances it by the chosen helical pitch. Reverse at the ends. This continuous screw pair differs from a pin following a bounded barrel-cam slot. Three printed parts, no hardware.

## Studio

Model-first live Three.js canvas, touch orbit/pinch, zoom/reset-fit, millimeter dimensions, actual model preset thumbnails, Shape/Mechanism/Surface/Import/Print controls, valid variations, undo/redo, bounded portable JSON save/open, geometry-only binary STL and individual-part/ZIP export. Assembled preview shows motion; all-part export is a separated bed-oriented layout. Preview colours do not exist in STL. All modeling, assets, WASM, libraries and export are local; no CDN or API. The static samples are synthetic fixtures, authored locally, CC0.

The visual reference is https://vaseverse.org/: its fetched page confirms configurable browser modeling and local export, and exposes muted warm styling tokens. This studio uses an original identity, interface text and fidget geometry. No branding, imagery or source code was copied from that site. Layout uses the requested large preview, quiet clay/sand palette, compact right rail, mobile collapsible controls and reachable export.

## Parameters — mm unless noted

- Threaded spindle length: 24–36; helical pitch: 6–9; smooth ridge depth: 1–1.4.
- Running radial clearance: 0.25–0.50; stationary palm-tab radius: 7–9.
- Palm edge groove depth: 0–0.5; cap socket radial allowance: −0.08 to −0.01.
- Fixed core radius 4.8, nut outer radius 10, retaining-cap radius 9, base thickness 3. Nut height equals one pitch. Minimum grooved outer wall ≥3 mm at supported extremes. Filament/extrusion calibration remains essential.
- Smooth single-start thread radius: `4.8 + depth*(0.5+0.5*cos(theta-2*pi*z/pitch))`. 72 angular samples and ≤0.3 mm axial spacing. Matching nut bore adds radial clearance. The nut's rotation is coupled to translation at `2*pi/pitch` radians per mm; the preview compensates the spindle's 2.99 mm origin. Surface slope is ≤36.3° from vertical. There are no sharp or unsupported square-thread ledges.

## Local image import

PNG and baseline/progressive JPEG, 16 bytes–2 MB, ≤12 MP, ≤6,000 px per side. Header is checked before browser decode. Input is reduced to a ≤500 px working bitmap; local preview and a 20×20 conversion grid are shown. Fit/cover, X/Y crop shifts ±25%, threshold 1–254, depth 0.4–3 mm, footprint 4–7 mm, rotation ±180° and placement X ±1.5 / Y ±2 mm are editable. Transparency is composited onto white.

Luminance uses 0.2126R + 0.7152G + 0.0722B. Threshold maps darkness to raised height (not a fully cut-out border); grayscale maps `(1-luminance/255)*depth`. The triangulated height field sits on a continuous 0.4 mm solid backing. Its bottom is embedded 0.15 mm into the stationary palm tab, then robustly unioned. White/empty conversions are rejected. This is **2D-to-relief / raised-silhouette conversion, not automatic full 3D reconstruction from one photograph**.

## Local STL import

ASCII and binary STL, 40 bytes–2 MB, ≤1,500 triangles; one closed outward-wound connected convex solid, 0.2–250 mm in each axis. STL has no units: explicit millimeter confirmation is required. Rejects nonfinite coordinates, degenerate triangles, open/nonmanifold edges, inconsistent winding, negative volume, disconnected solids, triangle intersections, concavity and unsupported overhangs. No automatic repair is claimed. Reorient/reduce/repair unsupported files in a real modeler before retrying.

Supported grips require a broad flat bottom (≥25% XY footprint), with all projected vertices inside that bottom. XY is proportionally scaled to a 4–7 mm footprint; Z independently to 0.6–5 mm height. Minimum fitted XY span is 1.2 mm. Rotate around Z, center/reset, and shift X/Y within bounded limits. Source mesh preview and original mm dimensions appear beside the final studio preview. Imported geometry replaces the default oval grip and is unioned into the stationary palm tab, never the moving thread or cap. Every transformed vertex must stay within its 6.5 mm radial safe zone; unsafe placement blocks export. Replace/remove/reset is available.

All user files stay in browser memory; no upload, external service or automatic persistence. Explicit JSON save includes bounded source mesh or reduced PNG payload and source settings; opening revalidates imported STL. Personal input files are not bundled in this repository.

## Manufacturing and assembly

Print base upright, nut bore vertical, cap socket down. PETG recommended; PLA suitable for fit trials. Start with 0.4 mm nozzle, 0.16 mm layers, four walls. Smooth slopes normally permit support-free printing on calibrated FDM machines; inspect slicer layers and tune overhangs. The cap's tiny socket ceiling is a 2.8 mm bridge. Remove strings and elephant-foot burrs. Print the socket coupon and try it on a Ø2.8 mm peg before committing to cap fit. Running clearances and socket interference are printer/material dependent, not universal.

Turn the nut onto the uncapped spindle, then press the cap onto its shoulder peg; it must seat on the spindle end, not on a moving surface. Radius 9 mm cap and radius 12 mm base retain the nut. Reverse before overtightening against either end stop. Increase clearance/reprint rather than forcing a stuck nut. Check retaining cap before use. Small removable parts, not for young children; not load-bearing.

## Development / validation

`npm install`; `npm run dev`; `npm test`; `npm run predeploy`. Base URL `/daily-app2/20261022-30/`. Required per-app deploy script exists, but combined public deployment uses **root** `npm run predeploy` then `npm run deploy`.

Dependencies: React, Three.js, manifold-3d (WASM solid unions/differences), fflate (ZIP); Vite and Playwright development tools. Manifold work and strict STL preflight run in a worker; resolution/file limits bound complexity. gh-pages is a publishing dependency only, not sent to browsers. Its transitive braces/globby toolchain currently has an npm audit advisory; generation does not accept glob expressions or execute this dependency.

`validate.mjs` checks parsed binary STL length, finite coordinates, normalized normals, nondegenerate triangles, welded edge incidence exactly two, consistent directed winding, positive volume per connected component, expected mm dimensions and individual solids. Mechanical checks cover pitch/phase, radial gap, slope, wall thickness, end/cap retention, separated print layouts and sampled actual solid intersections (only intended cap-peg press fit excluded). Checks cover presets, extremes, variations, image relief and both imported STL fixtures. Browser tests select real PNG/JPEG/ASCII/binary files, download actual generated STL, compare signatures, change source conversion/scale/placement, reject malformed inputs, exercise undo/redo, portable save/open, ZIP, individual parts and mobile touch controls. Reports and screenshots record completed checks.

**Digital geometry/mechanism verification is not a physical print test. No physical print, durability or tactile testing has been performed.**
