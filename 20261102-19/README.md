# Cavalieri & Slice

A local-browser **seven-part flat-pack kit-card generator**, not a static download or a full-solid volume simulation. Snip twenty actual runners, bond two vertical spines into a signature base and bond four horizontal section plates into their slots. At each of two normalized heights, a hemisphere's circular section matches the nominal area of a cylinder-minus-cone's annular section. This assembly and comparison are new to the collection; the initially considered constant-width rotor was rejected because earlier apps already cover it.

## Run

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Vite base `/daily-app2/20261102-19/`. Per-app scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`; actual publication uses the **root monorepo** predeploy/deploy flow. `node serve.mjs` serves production assets at http://127.0.0.1:5719/daily-app2/20261102-19/.

Dependencies are installed locally: React/Vite, Three.js/OrbitControls, Manifold WASM (Apache-2.0), fflate, Fontsource Fredoka/Rubik (OFL), gh-pages. Playwright is for verification. No API key, paid service, CDN, upload or server-side modeling. User files stay in browser memory/local storage; only synthetic fixtures are bundled.

## Reference evidence and attribution

Searched `/Volumes/ExternalHD/3d_printing_apps/` first. Actually parsed local Keycap Studio switch template (three components, 15.20 × 15.20 × 43.10 mm) and Weave link (one component, 7.981 × 9.241 × 8 mm). Read their README/instructions; neither is a suitable sheet/carrier interface for this kit. Their SHA-256 hashes and rejection reasons are in `reference-measurements.json`.

Downloaded and inspected **Mike Kasberg, White Cat Kit Card / Printables 865769**, [source](https://github.com/mkasberg/white-cat-kit-card), [listing](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Source README and full license are included as text. Exact download URL, measurements and design mapping are recorded in `reference-analysis.json`.

- Binary STL SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; assumed millimeters (STL has no unit metadata); bounds **179.819997 × 178.019994 × 3.190000 mm**.
- 27 edge-adjacent components, including two large mesh groups and 25 tiny artifacts; not 27 intended assembly pieces. The source is not globally watertight; no repair is claimed.
- Parsed real cross-sections at Z=.10/.50/1.59 mm, visually inspected `evidence/reference-sections.png`. `reference-measure.py` reproduces measurements with trimesh/numpy/matplotlib/scipy/networkx and a separately downloaded STL.
- Measured **1.60 mm sheet**, **4.50 × 1.700012 mm socket loops**, low carrier planes **.21–.22 mm**.

This original parametric reconstruction retains **4.50 mm tongue widths** in six real joints and **1.60 mm default sheet**. Receiving slots are `(4.50 + running) × (sheet + running)`, with **.10–.35 mm TOTAL clearance proposed for calibration**, not measured from the source. Twenty new bed-aligned runners are .4–.6 mm thick, deliberately stronger than the source's low webs. The source spacecraft artwork and raw mesh are not redistributed or used as final triangles. The Cavalieri display, section equations, cantilever seats, carrier layout and print solids are original.

Read-only visual/interaction reference `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: inspected README, styles, App, Viewer, worker, export, imageTrace and STL modules. Adopted concrete studio patterns: **374 px left rail**, sticky theme/brand header, labelled collapsible sections, paired slider/numeric inputs, tactile selected keys, pink/coral/lavender palette, gradient live viewer, checkerboard/source comparison, imported mesh editor, worker/current-result gating, saved theme, phone preview-first stack and prominent export panel. Generic studio plumbing is adapted from the earlier local daily studio; no reference Git history or dependency tree copied wholesale. No irrelevant switch sockets are imposed on this kit.

## Supported parameters

All linear dimensions are **millimeters**; normalized heights are dimensionless fractions of R.

| Parameter | Supported range |
| --- | --- |
| Card width / height | 210–240 / 225–250 |
| Section radius R | 16–20 |
| Lower normalized height q | .25–.40 |
| Upper normalized height q | .60–.80 |
| Display shelf separation | 16–22 |
| Sheet / total socket clearance | 1.6–2.4 / .10–.35 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |
| Art footprint / engraving depth | 4–7 / .4–.6 |
| Art rotation / X / Y | ±180° / ±1.5 / ±2 |

Impossible envelopes and invalid/nonfinite inputs block export. Three real presets have generated 3D thumbnails; round/square/chamfered base silhouettes, bounded variations, reset, undo/redo (35 snapshots), six local named saves and portable JSON save/open are implemented.

For a section at q=z/R, disc radius = `R√(1−q²)`, annulus outer radius = `R`, hole radius = `qR`, and both **nominal areas** are `πR²(1−q²)`. Two samples illustrate Cavalieri's principle; they are not complete solids, a precision instrument or a numerical volume proof. **Mounting stems are excluded from theoretical area comparisons.** Display levels are spaced independently for visibility, not to a common continuous Z/R scale. Circular boundaries are 96-sided polygons with nominal area error below .1%; this is disclosed rather than described as exact analytic mesh geometry. The smallest annular band is 3.2 mm.

## Assembly and printing

See `ASSEMBLY.txt` and the in-app numbered guide. Seven clean parts: base, two spines, lower/upper disc, lower/upper annulus. Every clean part is a single closed sheet-thick solid. Twenty bed-aligned breakaway runners hold them in one genuinely connected card. Default card is **220 × 235 × 1.6 mm**; individual parts and de-tabbed plate are separate exports.

1. Print 100% mm scale, PLA/PETG, .4 mm nozzle, .16–.20 mm layers, three walls, bed-flat. No supports intended. Print a spine/shelf fit trial before the full card; clearances are not universal.
2. Snip twenty runners 1.5 mm outboard of the clean outlines; file nubs. Tabs are on base/spine sides or shelf-stem ends, not inside functional socket walls.
3. Lower both spine tongues into base sockets. Shoulders seat on the base and tongues reach the bed. Bond and cure.
4. Slide upper then lower discs backwards into left-spine slots; repeat for annuli on right. **Compatible adhesive is required in all six joints.** The cantilever shelves are not snap/friction retained. Support them level while curing; the assembly preview centers tongues within the proposed socket gap.
5. Compare matched levels. This is a lightweight display, never load-bearing. No hardware, captive motion, fake hinge or compliant feature is claimed.

**No physical print, fit, glue-strength, snipping-force, sagging, wear or classroom-use test was performed.** Digital fit and mesh checks cannot establish those results.

## Image, SVG, text and icons

PNG/JPEG picker and drag/drop, **2 MB / 12 MP / 6,000 px per side**; header checked before decode, normalized to ≤500 px. Fit or crop into an actual **20×20 luminance grid**, light/transparent or inverted dark background, threshold 1–254 or grayscale relief, pan ±25%, physical scale, rotation and placement. The solid piecewise-triangular height field is Boolean-subtracted from the protected front apron, centered at **Y=−R−7 mm**. Source and sampled checkerboard cutout are shown. Sampled bright holes stay unengraved over solid backing; dark pixels cut real recesses. Empty silhouettes fail recoverably.

This is **2D-to-engraved relief, not full 3D reconstruction from a single photo**, nor exact vector tracing. Small detail below the grid pitch is not guaranteed. Simple filled SVG paths/shapes are sanitized (no scripts, external references/resources or effects, ≤2,000 elements), rasterized locally to 256 px, and converted through the same grid. Text up to eight characters and six searchable bundled original vector marks use the same actual geometry path. Only engraved marks are offered; raised/through cuts are deliberately unsupported to keep ≥1 mm backing. The 6.5 mm safe-area radius cannot reach spine sockets.

## Imported STL

Actual **ASCII and binary STL**, **2 MB / 1,500 triangles**, .2–250 mm on every source axis. Explicit **millimeter confirmation** is required; STL carries no units. Oriented dimensions and original-mesh source preview are shown. Z/Y/−Z-up chosen before attaching; changing up-axis clears the source and asks for reattachment. Proportional XY footprint scale, independent Z depth, Z rotation and XY placement are real geometry transforms. The **original accepted triangles** are Boolean-subtracted from the protected apron, not merely displayed or unchanged-re-exported.

Intentionally supported subset: one convex, watertight, consistently outward-wound, positive-volume, broad-flat-bottom solid without overhang footprint. Truncated, open/nonmanifold, inward, disconnected, self-intersecting, excessive, concave/cavity/branching or unsupported overhanging geometry is **rejected with actionable errors**. No automatic repair, discarded concavity or hull replacement. Convexity is verified before passing the original triangles to Manifold; a 2D bottom hull only validates bed support, never replaces geometry. Minimum scaled XY footprint is 1.2 mm; safe-zone, transform and backing checks protect interfaces.

Replace/remove/reset recover the built-in model. JSON and local named designs contain bounded normalized image/mesh payloads, not imaginary paths to missing files. Missing image payload explicitly requests reattachment; restored STL triangles are parsed and validated again. No personal source file is stored in this repository or uploaded.

## Worker, views and export

Manifold CSG and mesh parsing run in a bundled Web Worker, 100 ms debounce, bounded resolution, request IDs and exact current-state keys. Pending, failed, invalid or stale state disables exports immediately. Last-good preview is explicitly labelled when not current; it cannot silently export. Failed worker loading disables export with reload guidance.

Connected card, de-tabbed print plate, assembled, exploded and every isolated part use the **same current valid solids**. See-through base explains seating; orbit, touch/pinch, fit, top view and zoom are implemented. STL exports use real bed-flat print orientation, not assembled overlaps. Current X/Y/Z dimensions and mesh fingerprint are from exactly the binary-STL geometry shown/exported. Preview colors are not in STL.

Prominent STL selector and per-part buttons; **Everything ZIP** contains the connected card, all seven clean-part binary STLs and numbered assembly/current-fit instructions. No mislabeled 3MF. Fonts, WASM, worker and sample assets are locally bundled.

## Verification

`npm test` independently parses final binary STL for 14 preset/shape/extreme/image/STL cases, including every clean part and translated de-tabbed plate. Checks exact binary length, finite coordinates, nonzero face area, matching normalized normals, positive volume per component, 1e−5 mm welded edge incidence exactly two/opposite, Euler consistency, expected dimensions/components and bed alignment. Actual Manifold intersections check assembled separation, spine vertical and shelf horizontal insertion paths, shoulder support, six socket clearances, card envelopes, all part inclusion, 20 accessible snips releasing seven parts plus carrier and sampled upper-footprint bed support. Mathematical area identities are checked independently of mesh validity. These are **computational checks**, not physical testing.

Production-browser scripts (`browser-test.cjs`, `studio-test.cjs`, `orientation-test.cjs`, `phone-views-test.cjs`, `presentation-test.cjs`, `stale-test.cjs`, `icons-drop-test.cjs`) use real file pickers and downloaded bytes. PNG/JPEG/ASCII/binary/SVG and all marks change exported geometry; threshold, pixels, depth, scale and placement changes are compared to defaults. Download fingerprints equal UI mesh state and independently regenerated portable JSON; every downloaded/import-derived part reruns mesh/assembly checks. ZIP contents are unzipped and each STL parsed.

Tests cover defaults/presets/extremes, malformed/excessive/nonmanifold/concave/empty inputs, export blocking and recovery, remove/reset, portable assets, missing payload errors, named saves/reload, undo/redo, all layouts/isolations, stale edit guards, worker abort/recovery, 320/390 px preview-first mobile without overflow, touch orbit/pinch, reachable export/JSON, desktop left rail, collapsible controls, saved dark theme, keyboard focus and reduced motion. `personalization-check.mjs` probes actual image-derived ring holes in the Boolean solid. Reports and inspected desktop/phone/reference screenshots are included. Gallery/combined deployment checks preserve earlier entries and verify production assets under the real base prefix.
