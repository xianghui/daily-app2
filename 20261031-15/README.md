# Rasp & Rhythm

A local React + Vite maker studio for an actual three-part **flat-pack tactile rasp kit**: personalized deck, upright tooth rail, and a freely handheld tapered scraper. Twelve low runners join every part to a real connected carrier. This is not a loose print layout, static download or keycap clone. Tooth pitch/depth/profile change the tactile contact structure. It is not a cutting tool or a certified toy.

## Run and export

Node 22.12+: `npm ci`, `npm run dev`; `npm run predeploy` builds production. Browser generation runs in a Web Worker using bundled Manifold WASM; Three.js previews the same final validated meshes used by binary STL and Everything ZIP. No API, CDN, account or server is required. `npm test` checks geometry and fit. Browser tests: serve `node serve.mjs`, then `node browser-test.cjs`, `node studio-test.cjs`, `node personalization-test.cjs`, `node stale-test.cjs`; `node hole-check.mjs` probes real engraving holes. Port 5596, prefix `/daily-app2/20261031-15/`.

Export the connected card, three clean parts, or ZIP containing all four STLs and numbered assembly notes. STL stores neither units nor preview colours; use **millimeters / 100%**. Assembled, exploded, card, de-tabbed and isolated views share the solids. The loose scraper sits next to the deck in assembled view: illustrative positioning, not simulated contact/motion. Nothing is silently exported in assembled overlap.

## Reference-first evidence

The read-only local clicker template and fabric link were parsed first. Their measured sizes/components and rejection reasons are in `reference-measurements.json`. Their switch/link interfaces are not useful for a flat sheet kit. The actual publicly downloadable **White Cat Kit Card by Mike Kasberg** was then downloaded, parsed and sectioned before geometry selection:

- Source: https://github.com/mkasberg/white-cat-kit-card and https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card
- CC BY 4.0 https://creativecommons.org/licenses/by/4.0/ ; fetched license in REFERENCE-LICENSE.txt.
- Binary STL SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; envelope 179.820 × 178.020 × 3.190 mm; 27 edge-adjacent components including degenerate/open fragments. Source defects are disclosed, not repaired or republished.
- Actual measured sheet planes: 0 and 1.6 mm; four receiving loops approximately 4.5 × 1.700012 mm; runner Z planes .21/.22 mm. Mesh sections are in `evidence/reference-sections.png`; reproducible parser is `reference-inspect.py` (trimesh/numpy/matplotlib, raw file passed as argument).

Our original CSG reconstruction adopts the measured **sheet/slot relationship and thin breakaway carrier**. It changes tongue width to 6 mm and default TOTAL receiving allowance to .15 mm; .10 mm approximates the measured source allowance. New teeth, dual mounting tongues, personalized deck, tapered scraper and interaction are not in the source. Runners are deliberately increased to .4–.6 mm for FDM starting values. `reference-analysis.json` maps decisions to parameters. No raw third-party STL is bundled, and no license is assumed for private local templates.

The maker-studio visual reference was read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: README, styles, App, Viewer, worker, STL, image and export modules were inspected. Concrete patterns: 374 px left rail, sticky compact brand, tactile controls, lavender desk, coral soft-selected states, paired slider/mm inputs, checkerboard conversion, saved dark theme, phone preview-first, per-part/ZIP exports, and current-result worker gating. Shared studio/import/test infrastructure is adapted from the preceding daily studio; product geometry, carrier packing, assembly checks and tooth contact checks are new. No reference-project history/dependencies were copied wholesale.

## Parameters / mechanical limits

All lengths are mm. Card 200–220 × 116–136; deck width 82–88 and depth 32–38; rail rise 22–28; requested tooth pitch 4–6; tooth depth 1–2; total seat allowance .10–.35; deck/scraper thickness 3.6–4.2; rail sheet 1.6–2; spacing 3.5–5; tab width .8–1.4; tab thickness .4–.6; scraper length 52–62. Three real presets and three combined ergonomic deck/peak profiles. Teeth have ≥1 mm flat tops and ≥20 mm supporting web. Integer tooth count adjusts actual pitch, shown in the studio. Both tongues are 6 mm wide and sheet-thick, with deck-thick insertion length; mortises add total allowance in both directions. Shoulders stop lowering; undersides end flush. Retention requires cured adhesive; no snap or friction fit claimed.

The contact nose is 2.4 mm wide, smaller than the minimum tooth pitch. Hold the wand's long axis across the rail, tilt so only its nose contacts, and move along the tooth row. The free wand can lift away. No captive clearance or retention is needed for a handheld part; no fake slider or switch controls are imposed.

## Imports / privacy / conversion

File picker works on desktop/phone; drop one source on the import section. PNG/JPEG/simple SVG and binary/ASCII STL are supported. Synthetic samples in `public/samples` are generated fixtures, not personal uploads. No source leaves the browser or is committed to the repository.

PNG/JPEG content/header, extension, dimensions, 2 MB file size, ≤12 MP, ≤6000 px side are checked before decode; normalize to ≤500 px, then sample a bounded **20 × 20** grid with contain/cover, crop shift ±25%, threshold 1–254 or luminance relief, light/dark background and depth .4–.6 mm. Simple sanitized SVG is rasterized at 256 px (≤2000 elements; no scripts/external resources). A closed triangulated heightfield cutter is subtracted from continuous deck backing. White holes remain unengraved; dark regions are cut. Source and exact sampled checkerboard preview are both visible. It is explicitly **2D-to-relief, not full 3D reconstruction** and not exact vector tracing. Fine details below the grid will be lost. Raised/cut-through art is deliberately unsupported on this protected bed-flat design.

STL: 40 bytes–2 MB, ≤1500 triangles, each source axis .2–250 mm. Parse complete ASCII facets or exact binary count, finite dimensions/coordinates, nondegenerate faces, welded two-face edges with opposite directions, connected positive-volume shell, self-intersections, convexity and broad flat bottom with no unsupported overhang. Only that documented subset is accepted. Concavity/open/nonmanifold/multiple shells are explicitly rejected, not silently hulled or repaired. Source dimensions and units confirmation are shown; Z/Y/−Z up-axis must be selected before attaching. Orient/re-export in a modeler if unsupported. Exact imported mesh becomes a Boolean engraving cutter, retaining the mesh shape, with proportional XY footprint 4–7 mm and independent Z depth .4–.6 mm; show the numerical scale factors. Z rotation ±180°, X ±1.5 and Y ±2 mm placements must stay inside a 6.5 mm-radius protected zone. Source and final-model previews, replace, remove, reset transforms and built-in reset are available. Up-axis changes explicitly request reattachment.

## State and validation

Undo/redo, six local named designs, JSON save/open; portable bounded image and indexed-mesh payloads restore assets, not missing file paths. Missing payloads require reattachment. LocalStorage quota errors offer JSON. Export requires matching exact parameter/source/transform key and current request sequence; invalid edits never export stale last-good geometry. Worker loading failures disable exports. Every generated solid receives manifold/winding/degenerate/finite checks, not just sampled tests.

Independent binary-STL validation welds at 1e−5 mm and checks exact byte count, normals, triangles, two opposite edge incidents, per-component positive volume and mm bounds. Assembly tests use exact kernel intersections: two-seat vertical insertion, no part collisions, separate clean parts, card envelope, real tab connectivity and safe cutter access, four components after twelve snips, bed support, protected artwork region. The complete wand is rotated across the rail with its leading rounded tip overlapping the rear top edge by .3 mm. A bounded exact-solid contact sweep follows the rail surface and must resolve >.1 mm geometric rise/fall. That sweep demonstrates clearance/contact geometry, **not tactile force, sound or fatigue**. Tests cover presets, extremes, images, STL, transformations, actual browser downloads, ZIP and mobile touch. See VALIDATION.md and JSON reports for actual results.

## Print and assembly

PLA/PETG; .16–.20 mm layers, three walls, all parts bed-flat, no supports intended. Snip deck/rail runners 1.6 mm outside part envelopes and wand runners 3.5 mm outside the taper; trim stubs without damaging tongues/teeth/nose. Calibrate the seats with a small test print first. Lower rail into both deck mortises, bond, let cure. Hold deck while gently scraping along the teeth; lift wand to return. Adhesive is the only required consumable, no hardware. Keep out of eyes/skin; do not cut or apply body weight. Small parts, adult maker model. Computational validation is not physical printing or physical assembly validation; neither has been performed.

Dependencies: React/Vite, Three.js, manifold-3d (Apache-2.0), fflate, Fontsource Fredoka/Rubik (SIL OFL), gh-pages; Playwright for browser validation. All runtime dependencies/fonts are bundled locally.
