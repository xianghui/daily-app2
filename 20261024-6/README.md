# Seal & Peel

A React + Vite browser studio for an experimental **press–pause–peel suction-cup fidget**, not an attachment or load-bearing mount. Print an open shallow TPU bowl, invert it on a clean smooth nonporous surface, gently press the back, then lift the long tab to peel the sealing rim. A leaky print still supports gentle bowl squeezing. Unlike a vented bulb, the interaction depends on temporary rim contact and edge release. No physical print, adhesion, force or fatigue testing has been performed.

## Run and export

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`.

React 19, Vite 8, Three.js and locally bundled manifold-3d WASM; Playwright for browser verification; gh-pages for deployment. No CDN, server, API key or paid generation service. Source files are processed locally in a worker/browser canvas. Only bundled synthetic fixtures are fetched from this site. Personal files are never uploaded or added to the repository.

One primary Download STL produces binary STL from **exactly the same worker mesh displayed in the preview**, in millimeters, with a parameterized filename. The part selector also exports the single integral body independently. There are no separately assembled parts; ZIP is therefore unnecessary. Object preview and print layout are identical undeformed geometry, opening upward, floor Z=0. Preview colours are not stored in STL.

## Controls and geometry

| Parameter | Range (mm) |
| --- | --- |
| Seal radius | 16–22 |
| Bowl depth | 6–10 |
| Lower radial wall | 0.8–1.2 |
| Planar sealing rim width | 1–2 |
| Floor thickness | 2–3 |
| Palm dimple depth | 0–0.6 |

The outer wall is a 45° conical shell; its lower radius is seal radius minus bowl depth. The cavity begins above the solid floor and opens through a continuous annular rim. Inner radial thickness interpolates from the lower wall to the rim width. Minimum conservative normal wall thickness is reported live (at least 0.55 mm over supported combinations). Final X/Y/Z dimensions are visible, including real imports. Actual palm dimples subtract material outside the protected import well. All unions/subtractions use Manifold solid operations, not overlapping exported shells.

Three real-mesh preset thumbnails: Pocket Seal, Seal & Peel, Broad Landing. Variations stay within the supported ranges. Undo/redo stores modeling changes; local JSON save/open carries a bounded source payload and settings. Invalid or missing payloads cause actionable errors, not a fictitious restoration. Preview palette, orbit, zoom and reset/fit are independent of exported geometry. Desktop has a model-first canvas/right rail; phones have tabbed collapsible controls and a fixed accessible export area.

## Image import

PNG and JPEG only, verified headers and decoded dimensions, 16 bytes–2 MB, ≤12 MP and ≤6,000 px per axis. A normalized portable image is bounded to 500 px per side. Transparent pixels are composited on white. Fit/contain or fill/crop and ±25% crop shifts resample to **20 × 20 grayscale vertices**. Luminance uses 0.2126R + 0.7152G + 0.0722B. Threshold 1–254 creates low/high relief heights; grayscale mode maps darkness linearly to 0.4–3 mm relief depth. Triangulated interpolation creates a continuous height-map surface on 0.4 mm backing, not discrete floating pixels. The closed backing is sunk 0.15 mm into the palm well and robustly unioned. Empty conversions are rejected. This is **2D-to-relief**, not 3D reconstruction from a photo.

Source and exact conversion-grid previews are shown alongside the final model. Footprint 4–7 mm; rotation ±180° around Z, X shift ±1.5 mm, Y shift ±2 mm. Every transformed vertex must remain inside a 6.5 mm safe radius. Replace/remove/reset and built-in defaults remain available.

## STL import

Both ASCII and binary `.stl`, ≤2 MB, 1–1,500 triangles, one connected closed outward-wound solid, 0.2–250 mm per source axis. **Explicitly confirm millimeter coordinates** because STL contains no unit metadata. Source dimensions, triangle count, format and a separate source-mesh preview are shown. XY is scaled proportionally into the selected footprint; Z is independently fitted to 0.6–5 mm grip height. Rotate around Z, center/reset and place within the same safe well.

Deliberately narrow contract: convex, broad flat-bottom, support-free grips whose complete XY projection stays inside their bottom footprint (bottom contact at least 25% of footprint). Fitted XY minimum span is 1.2 mm. Open/nonmanifold, inconsistent winding, zero-volume, disconnected, excessive, self-intersecting, concave, overhanging or unsupported meshes are rejected with guidance; no silent repair. The result must be exactly one connected solid. Decoration changes exported geometry but cannot enter the cup or rim. A portable JSON includes validated low-poly vertices/indices and is revalidated on opening.

Synthetic PNG, JPEG, ASCII wedge and binary gem fixtures are bundled under `public/samples/`; no personal inputs. They originate from the local Daily Object Lab fixture set and require no third-party assets.

## Print and calibration

TPU 95A only. Print **opening UP**, floor flat on bed, 0.4 mm nozzle, 0.2 mm layers, fully fill thin walls and inspect slicer toolpaths. Outer expansion is 45°; no supports or assembly intended. Use Pocket Seal as a full-size material/airtightness calibration, starting with ≤0.5 mm axial press. Layer leakage and surface finish can prevent adhesion; geometry checks do not establish suction performance. Stop for permanent creasing or layer separation. Never use as a load-bearing suction mount. No hardware, sliding fits or universal fit tolerances are claimed. Do not coat the seal to hide print leaks.

## Validation

`validate.mjs` independently parses exported binary STL: finite coordinates/normals, normalized normals, nondegenerate faces, positive volume per component, edge incidence exactly two after 1e-5 mm welding, consistent neighbor winding, genus zero, bed origin and independent millimeter bounds. All 64 parameter-range corners, defaults, three presets, representative variations and both image/STL integrations are covered. Material/void probes sample the solid floor, conical shell, unobstructed cavity and continuous coplanar rim; solid differences verify imports only alter the palm well. These are geometry/mechanism-envelope checks, **not physical seal or deformation tests**.

Browser tests exercise actual PNG/JPEG and ASCII/binary file pickers, compare exported geometry against default and altered settings, compare exact preview/export fingerprints, test malformed/oversized/nonmanifold/unsupported input, empty images, transforms, resets, every preset, variations, undo/redo, portable save/open, per-body downloads, drag/drop and colour-neutral geometry. Phone tests cover 320/390 px layouts, touch orbit/pinch, image/STL downloads, all tabs, sheet collapse and export visibility. Results are stored in validation JSON files and screenshots.

The archived `/daily_app/` gallery was consulted read-only. Vaseverse was consulted as an interaction/layout reference; no branding, assets, text or source was copied.
