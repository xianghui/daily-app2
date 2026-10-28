# Prism & Peek

A five-part **flat-pack periscope kit-card generator**, not a pre-made model download. Snip twenty runners, capture two parallel 45° reflector plates between pierced side cheeks, and seat the four feet in a personalized plinth. Supply two thin front-surface mirror-film patches and adhesive. The open frame has no lens, magnification or light-tight enclosure. Never view the Sun or a laser.

## Reference-first evidence

Local STL search covered `/Volumes/ExternalHD/3d_printing_apps/` before choosing geometry. The three local kit-card projects have no source STL; clicker cavities, sliding shells and articulated fabric are not interchangeable construction references. Their trees were left read-only.

Downloaded and independently parsed **White Cat Kit Card**, Mike Kasberg / mkasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0** ([terms](https://creativecommons.org/licenses/by/4.0/)). README, repository LICENSE and `kit_frame.scad` were read. Source/fan artwork is not included, endorsed, modified or exported.

- Actual binary STL: 1,530,884 bytes, 30,616 triangles.
- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Unit assumption: mm; STL has no unit metadata. Source sheet settings corroborate the scale.
- Measured bounds: approximately −0.01..179.81 × −0.01..178.01 × 0..3.19 mm; size **179.82 × 178.02 × 3.19 mm**.
- Two edge-connected components after 0.00001 mm welding. Source has nonmanifold/coplanar artifacts; it is inspection-only, not silently repaired or represented as printable output.
- Actual mesh sections Z=0.10, 0.50, 1.59 mm and a Y=100 mm rail section establish a **1.6 mm sheet and perimeter**, with low bridge elevations around **0.21–0.22 mm**. See `reference-analysis.json`, `reference-analysis.py` and the freshly rendered `reference-sections.png` / SVG.

**Measured vs redesigned:** Preserve 1.6 mm sheet as default/minimum; expose 1.6–2.4 mm. Reinforce source 1.6 mm perimeter to 2.4 mm rails/ribs. Replace its delicate bridges with twenty accessible 0.4–0.6 mm runners. The periscope, 45° mortises, 8 mm-wide reflector tongues, 5 mm tongue projection, 6 mm-wide cheek feet, optical geometry and clearances are **new parametric design choices**, not measurements of the cat's joints. No raw reference mesh is redistributed. This is an original solid reconstruction of its sheet/carrier strategy, not a hull or re-export.

## Studio and development

React + Vite, Three.js OrbitControls, locally bundled Fredoka/Rubik, Manifold WASM in a dedicated worker, fflate ZIP. Dependencies installed independently; no source project dependencies or history copied. Shared first-party daily studio import/persistence/export plumbing is reused, while this product's geometry, assembly, optical checks, controls and prose are original. The read-only `keycap_generator2` README, App, CSS, Viewer, worker, image tracing, STL and export modules informed concrete interaction patterns: 374 px left rail, sticky brand/theme header, labelled collapsible sections, paired number/range controls, tactile pressed keys, checkerboard cutout/source pair, imported-base transform/units editor, large right preview and reachable export panel. Phone layout stacks preview/export before controls. Saved light/dark toggle, visible focus, generous tap targets and reduced-motion support.

```
npm install
npm run dev
npm test                  # mesh + actual assembly/optical-path checks
npm run predeploy         # vite build; base /daily-app2/20261029-1/
node serve-production.cjs # actual dist at http://127.0.0.1:5490/daily-app2/20261029-1/
node browser-test.cjs
node feature-test.cjs
```

Per-app `deploy` is `gh-pages -d dist`; public monorepo publication MUST use root `/Volumes/ExternalHD/daily_app2` predeploy/deploy, not this individual deploy command. Node 22.12+ recommended.

## Parametric limits — millimeters unless stated

| Control | Supported range |
|---|---|
| Card width / height | 190–220 / 160–195 |
| Reflector clear width / length | 24–32 / 26–32 |
| Cheek height / depth | 80–100 / 36–44 |
| Sheet thickness | 1.6–2.4 |
| Total slot clearance | 0.10–0.35; default 0.20, i.e. 0.10 per side |
| Part spacing | 4–7 |
| Runner width / thickness | 0.8–1.4 / 0.4–0.6 |
| Cosmetic medallion dimples | depth 0–0.4 |
| Import footprint / STL height | 4–7 / 0.6–3 |
| Import X / Y / Z rotation | ±1.5 / ±2 / ±180° |

Three actual-model presets (Desk Explorer, Tall Lookout, Pocket Prism), rounded/chamfered/stepped silhouettes, bounded variations, undo/redo, six local named saves and portable JSON. Impossible card packing and unsupported settings are errors, not clamped fake geometry. Printable minimum panel remaining under worst engraving is 0.8 mm. Imports are restricted to the plinth's 6.5 mm-radius protected landing, away from all mortises and the lowest reflector.

## Private image / SVG conversion

All file processing stays in the browser. No API, key, CDN runtime, remote conversion, or uploads. Synthetic samples are bundled; do not put personal source files in this repository.

PNG/JPEG: actual magic/header and dimensions validated before decoding, ≤2 MB, ≤12 MP, ≤6,000 px per side, normalized to ≤500 px. Transparent pixels are composited against the selected light/dark background; luminance optionally inverts for dark backgrounds. Fit/cover and ±25% crop pan are sampled to **20 × 20 luminance values**. Threshold (1–254) maps dark samples to uniform relief; grayscale maps darkness to 0..depth (0.4–3 mm). A closed indexed height surface with perimeter and bottom is built and Manifold-unioned into the solid plinth; engraving instead subtracts a mirrored surface and is limited to 0.4–0.6 mm. The 0.4 mm closed backing overlaps the landing; no interpenetrating shells are exported.

This is **2D-to-height relief, not automatic full 3D reconstruction or exact contour tracing**. White holes remain unraised/unengraved against a continuous solid backing; interpolation produces sloped transitions at 20 × 20 resolution. Final boolean probe tests verify a synthetic ring hole stays open in the *raised region* and unengraved in the engraved region. Source plus actual transparent cutout are shown on checkerboards. Text (up to 8 characters, local Rubik), six searchable original SVG icons, SVG/PNG/JPEG all use this same geometry path. Simple SVGs are locally rasterized at 256 px; only allowlisted filled paths/shapes/groups, ≤2,000 elements, no scripts, references, external resources, effects or embedded text. An SVG is not sent to any service.

## Imported STL integration

Both ASCII and binary supported, **≤1,500 triangles**, ≤2 MB, each source dimension 0.2–250 mm, finite bounded coordinates. Weld at 0.00001 mm; reject empty/truncated files, degenerate faces, open/nonmanifold/inconsistently wound/self-touching or self-intersecting meshes, disconnected or inward solids. Imported-grip integration deliberately accepts **one convex, flat-bottom, support-free solid only**, with ≥25% footprint bed contact and no XY overhang beyond that contact. Concavities, cavities and thin branches are rejected explicitly; no convex hull replacement, repair or silent geometry discard. Larger/general meshes should be prepared in a local modeler.

Pick Z, Y, or −Z up before attaching. The source preview and oriented mm dimensions are displayed; confirm millimeters explicitly because STL stores no units. XY scales proportionally to chosen footprint; Z independently fits height. Rotation, placement, source/final previews, replacement/removal, reset transforms and return to defaults are real. The exact source solid is **boolean-unioned** 0.15 mm into the plinth landing. A bounded safe-zone check prevents invading wall/joint interfaces; final manifold validation also catches unsupported numerical detail. Changing up-axis clears the source and requests reattachment, rather than pretending to rotate a missing asset.

JSON/named saves include bounded normalized PNG data and bounded mesh arrays. Restoration revalidates/reparses those assets; missing image payload explicitly requests reattachment. Paths alone do not restore files. Invalid JSON/transform/payload blocks export and Reset recovers.

## Printable assembly and optics

All five parts are bed-flat. Card rails and internal ribs are one solid; four low runners connect each part to the carrier, not just a rectangle near loose pieces. Tabs avoid tongues, feet and mortises. Twenty accessible snips leave **five distinct parts plus the connected carrier**. The three plinth silhouettes change actual geometry.

Four diagonal through-mortises are `8 + clearance` along the tongue by `sheet + clearance` across it, fixed at 45°. Each 5 mm tongue passes fully through a cheek and extends 2.6–3.4 mm outside. Four plinth through-mortises receive the two 6 mm feet per cheek, with the same total allowance. Cheek shoulders seat against the plinth top, and feet end flush with its bottom. All six joints require appropriate adhesive; clearance slots are not snaps, locks or verified friction fits.

**Assembly sequence:** snip/trim → apply film to both printed top faces → lay left cheek outside down → insert lower reflector shiny side inward/up and **upper reflector flipped**, shiny side inward/down → close right cheek over opposite tongues → lower frame into plinth → glue/cure fixed joints. Dry-fit before adhesive. Film rectangles are `(clear width − 4) × (reflector length − 4)` mm, centered with 2 mm margins, total film+adhesive thickness ≤0.15 mm. No glass; no supplied hardware. Without mirror film it is a frame, not a functioning reflector.

Both reflective planes are parallel, **reflective faces opposing**. A nominal center ray changes +Y → +Z → +Y; normal reversal does not change the reflection law, but the correct physical face must be exposed. The ray clears the cheeks/plinth and passes between the actual finite-thickness reflector surfaces. Finite apertures limit field of view. The upper film reflects from the underside; the model accounts for that geometry, not a ray passing through solid plastic. Gold ray and silver film in assembled/exploded previews are labelled explanatory overlays and never exported.

Print PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, 3+ walls, flat face on bed, no supports intended. Thin runners need 2–3 layers. Print a cheek and reflector first as calibration samples; select actual material/printer allowance and remove elephant foot. Individual parts avoid needing a large card bed. Adhesive choice/curing and film flatness depend on supplies. This is an adult optical craft/display miniature, not precision, protective or structural equipment.

## Export, worker and validation

Binary STL for actual connected card and prominent individual part STLs; Everything ZIP includes all six STLs and numbered `ASSEMBLY.txt`. Exports are always original bed-flat orientation, regardless of assembled, exploded, de-tabbed or isolated preview. Final X/Y/Z millimeter bounds and mesh signature are displayed. STL does not store colours. Three.js uses the same returned validated mesh as export; only view transforms/film/ray are preview-only.

Worker builds are debounced, bounded and request-number guarded. Current state key includes all source/transform parameters; invalid or pending edits disable **all** STL/ZIP exports. Last-good preview is labelled stale, never silently exported. Worker loading errors gate export and reload recovers. Each generated solid is preflighted for finite nondegenerate faces, 0.00001 mm welded two-face opposite edge incidence, positive volume, and one connected component.

Reproducible scripts and JSON reports accompany the app. `validate.mjs` independently checks binary STL byte length, normals/winding, finite coordinates, volume for each connected component, manifold edge incidence and declared dimensions. It exercises defaults, every preset, representative min/max and mixed extremes, invalid combinations, ASCII/binary/image-derived raised/grayscale/engraved outputs, card/part outputs. Manifold intersections independently test all seated part pairs, horizontal cheek insertion, vertical frame seating, shoulder stop, flat part separation, accessible snips and 6 resulting components, real angled/foot mortises, unblocked center ray and nominal reflection directions. Browser scripts select actual files, download actual STL/ZIP/JSON, compare byte signatures to preview and regenerated saved state, and rerun mechanism checks on imported outputs. They also test replace/remove/reset, invalid files and transforms, holes, personalization, saved assets, undo/redo, up axis, themes, collapsed sections, keyboard focus, worker failure/stale edits, narrow touch orbit/pinch and exports, and actual production worker/WASM paths.

**No physical print, hand-force, strength, adhesive retention, film/image quality or fatigue test has been performed.** Computational mesh and assembly/optical-path checks are not those tests. See `VALIDATION.md` for actual run results, not aspirational claims.

Dependency licenses remain with their authors: Manifold Apache-2.0, Three.js MIT, React MIT, fflate MIT, Fontsource fonts SIL OFL. The six small SVG marks and sample meshes/images are synthetic first-party fixtures, not third-party source meshes.
