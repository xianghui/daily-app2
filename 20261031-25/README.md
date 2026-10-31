# Scribe & Centre

A React + Vite maker studio for a **three-part round-stock centre-finder kit card**. Snip twelve real runners, seat two perpendicular underside fences into four deck sockets, then use the diagonal pencil slot to mark a centre chord on a 20–50 mm round-stock end face. Rotate the jig and mark again. The crossing approximates the centre. This is an educational craft assembly, **not a calibrated machining tool**.

The deck rests **on top** of the workpiece; the fences hang below and touch perpendicular tangent points on the cylindrical side. The translucent 35 mm cylinder in assembled preview is explanatory external stock, never an exported part. There is no simulated printed motion. A fine pencil, flat-ended round stock and compatible adhesive at four fixed seats are required.

## Run and check

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs                 # production build at localhost:5626/daily-app2/20261031-25/
node browser-test.cjs
node studio-test.cjs
node orientation-test.cjs
node stale-test.cjs
node personalization-test.cjs
node hole-check.mjs
```

Per-app `deploy` uses gh-pages as required; **the public combined site is published from the repository ROOT**, using its predeploy/deploy scripts and `deploy/`, not the individual app deployment.

## Reference-first evidence

Primary interaction/visual reference, inspected read-only: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`, specifically README, App, Viewer, styles, worker, imageTrace, STL and export modules. Concrete patterns adapted: 374 px left rail with sticky compact header; tactile pressed controls and soft pink selection; lavender desk/white panels; paired slider/mm inputs; preview-first phone; checked imported-base editor; source/cutout previews; portable local designs; current-result export gate; heavy CSG in a WASM worker. No source Git history or dependencies copied wholesale. Shared studio infrastructure was adapted from the earlier daily apps; **the centre-finder geometry and assembly checks are new**, not a reskin of their mechanisms.

Local STL candidates were examined first: the keycap clicker template's switch cavities/stem and the fabric generator's 8 mm articulated link do not provide sheet-carrier/assembly joints. Their parsed dimensions, hashes and rejection reasons are in `reference-measurements.json`. Relevant project READMEs were inspected. The external sheet-kit reference was then downloaded and parsed:

- **White Cat Kit Card**, Mike Kasberg; [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card).
- CC BY 4.0: https://creativecommons.org/licenses/by/4.0/ ; full terms in `REFERENCE-LICENSE.txt`.
- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, 30,616 triangles; **179.819997 × 178.019994 × 3.18999958 mm**, units assumed from sheet dimensions because STL has no units.
- 27 edge-adjacent components, source **not watertight**. Used only to measure design interfaces, not silently repaired or re-exported.
- Actual mesh sections at Z=.1,.5,1.59 mm are in `evidence/reference-sections.png`. Measured sheet 1.6 mm; socket loops 4.5 × 1.700012 mm; low carrier runner planes .21/.22 mm.
- Mapped source dimensions: 1.6 mm fence sheets and 4.5 mm tongue width. Redesigned deck 2–2.6 mm and independent total socket allowance .1–.3 mm (default .15) are **proposed tolerances**, not measured or universal. Our twelve runners are .4–.6 mm thick, thicker than source for FDM handling.
- New: top stencil deck, perpendicular underside fences, four sockets, 45° bisector slot, safe engraving patch and original connected carrier. No cat artwork, private STL or raw third-party reference asset is redistributed.

`reference-inspect.py` can reproduce measurements using trimesh/numpy/matplotlib and a separately downloaded source file; its URL is recorded in `reference-measurements.json`. `reference-analysis.json` maps measured evidence to implementation. Geometry is original Boolean reconstruction, never an implicit convex-hull replacement.

## Real customization and parameter ranges

Every dimension below is **millimeters**. The UI pairs sliders with numeric inputs and rejects invalid, empty or out-of-range values before exporting.

| Parameter | Supported range |
|---|---|
| Card width × height | 110–126 × 168–184 |
| Deck side | 76–84 |
| Fence drop / reach | 14–20 / 48–56 |
| Deck thickness / fence sheet | 2–2.6 / 1.6–2 |
| Pencil through-slot width | 1.2–1.8 |
| Socket TOTAL allowance | .1–.3 |
| Part spacing | 3–4 |
| Tab width / thickness | .8–1.4 / .4–.6 |
| Art footprint / engraved depth | 4–7 / .4–.6 |
| Art rotation / placement | ±180° / X ±1.5, Y ±2 |

Three real model-thumbnail presets, square/rounded/clipped deck profiles, bounded variation, reset, undo/redo, saved light/dark theme, preview colours, text marks and six searchable bundled vector icons are included. All non-colour customization changes exported geometry. The sampled engraving intentionally does not support raised marks: the protected patch stays away from stencil and sockets. STL does **not** store colour.

The inner fence faces are both inset `9 + sheet` from corresponding deck edges. The through-slot follows their exact diagonal bisector, from `9 + sheet + 2` to `deckSide − 9`. Two 4.5 mm tongues per fence pass through deck thickness; shoulders seat below, tongue ends finish flush above. Fences start 14 mm along their edges to prevent corner interference. The slot covers each supported stock centre, while tangent points remain inside fence reach. The kit requires no moving hardware; the fixed calibrated seats need adhesive, not a claimed snap fit.

## Image / SVG → actual engraved geometry

Choose a file on desktop or phone, drag one file onto Import, or try bundled synthetic samples. PNG/JPEG are checked by content signatures and header dimensions before decoding. Maximum **2 MB, 12 MP, 6,000 px per side**; normalized portable images are at most 500 px per side and 250k pixels. Simple SVG shapes/paths (<=2,000 elements) are locally rasterized to 256 px after rejecting scripts, references, external assets and unsupported effects. Outline text before importing SVG. PNG/JPEG are required formats; WebP is not supported.

The normalized image is fitted/cropped and shifted onto a **20 × 20 luminance grid**. Light-background mode removes light/transparent areas; dark mode inverts. Threshold mode maps dark samples to a chosen constant recess depth; grayscale mode maps inverse luminance continuously to depth. Adjacent heights form a triangulated closed height solid, reflected into and Boolean-subtracted from a protected deck patch. Bright interior holes remain unengraved, as verified by actual Boolean probes, on continuous backing >=1.4 mm. This is **sampled 2D-to-relief / silhouette conversion, not exact vector tracing or automatic full-3D reconstruction from a photo**. Source and exact cutout grid appear side by side on a checkerboard. Threshold, background, crop/fit, physical scale, depth, position and rotation alter actual STL triangles. Empty silhouettes reject with recovery controls. Text and bundled icons use this same local conversion, not preview textures.

## STL → exact local mesh-shaped engraving

ASCII and binary .stl up to **2 MB / 1,500 triangles**, each source axis .2–250 mm, one connected outward-facing closed solid. The editor reports oriented source X/Y/Z, triangle count and format; explicitly confirm that coordinates represent **millimeters**. Z-up, Y-up and upside-down options are proper rotations, selected before attachment; changing orientation detaches the source and requests reattachment. Original source preview, XY footprint scale, independent Z-depth fit, rotation, centre/reset, XY placement, replace and remove are available. Portable JSON retains bounded mesh vertices, not just a missing path.

A deliberately bounded supported topology is enforced: convex solid with broad flat bottom (>=25% bounding footprint) and every XY projection inside its bottom outline. Open, nonmanifold, self-touching/intersecting, inward-wound, multiple-shell, concave, hollow, slender or unsupported overhanging inputs are **rejected**, not repaired, hulled or secretly substituted. Guidance asks users to re-export a supported low-poly flat-base solid. A bottom-hull computation is used **only to validate bed support**, never to replace geometry. Every accepted original triangle is passed into Manifold CSG; proportionally scaled XY and independently fitted Z are subtracted from the protected patch, measurably changing the final solid while maintaining backing. This is an actual shape integration into the deck, not unchanged source re-export.

## Privacy / responsive pipeline / exports

All user files are processed locally in the browser, never uploaded or committed. Dependencies, fonts, icons, WASM and fixtures are bundled without CDN/API/key/paid service. Samples under `public/samples/` are synthetic geometric/image fixtures, not private inputs or third-party model copies. Image headers, file limits, transforms, finite vertices and topology are checked before expensive operations. Heavy geometry and STL preflight run in a Web Worker with bounded resolution, 100 ms debounce, generation IDs and stale-result guards. Exports are disabled on invalid import/settings, worker errors, pending conversion/build or noncurrent results. Last-good preview is explicitly labelled and cannot be exported as current. Reload recovers worker loading failure.

Connected card, assembled, exploded, de-tabbed and isolated-part views use identical checked part meshes. Touch orbit/pinch, fit, zoom, see-through and selection work on phones. Exploded offsets and the external stock ghost are preview-only. Binary STL export always uses real bed-flat printable orientation at Z=0; per-part buttons and Everything ZIP include the connected card, three clean parts and numbered assembly instructions. Preview and download use the exact same current geometry and hash. No fake 3MF is offered.

Named designs (up to six) and portable JSON round-trip dimensions, bounded image payload, conversion settings, original STL mesh, confirmation and transforms. Missing image payloads explicitly request reattachment; nothing pretends to restore missing assets. Files are revalidated when opening. Browser storage can be cleared by the user; download JSON for portability.

## Printing and assembly

PLA or PETG; .16–.20 mm layers, three walls, print bed-flat at 100% mm scale. The connected card is one closed solid containing all three parts and twelve removable runners. Clean part STLs omit runners. No supports intended: upper sections are within their bed footprints. Snip runners 1.6 mm outside part edges, remove nubs and preserve tongues. Trial-fit one fence/deck pair first; clearance depends on printer, material, elephant-foot and slicer compensation. If it binds, adjust total allowance, not global STL scale. Four clearance seats require filament-compatible adhesive; check 90° using a known square while curing. Keep adhesive away from contact faces and stencil. The deck then rests on the round-stock end face, with fences contacting sides below. Use only a fine pencil by hand, no powered cutting or machining.

Full numbered instructions are in the app/ZIP via `printNotes`. See validation reports for **computational checks only**: no physical print, assembly, marking accuracy, strength or long-term durability test has been performed. Use a known circle to calibrate before craft use. Small parts require adult handling.

## Dependencies and verification

React/ReactDOM, Vite + React plugin, Three.js OrbitControls, Manifold 3D WASM, fflate, gh-pages, bundled Fontsource Fredoka/Rubik (OFL); Playwright as a development dependency. Dependency licences remain in installed packages. The model exports original geometry; CC BY source attribution is preserved above and in the app's assembly notes.

`validate.mjs` independently reparses binary exports (exact byte/triangle length, finite coordinates, nonzero triangles, outward unit normals, bounds, welded edges at 1e-5 mm with exactly two opposite-directed incident faces, positive volume per connected component). It checks each clean part and connected card. CSG tests cover pairwise assembled/layout nonintersection, upward insertion paths, all four tongue/socket probes, stencil-through-stock-centre probes across 20–50 mm, backing thickness, accessible snip cuts releasing exactly three parts plus carrier, card envelope and bed-supported sections. Defaults, all presets/profiles, min/max sets, field endpoints and image/STL derivatives run the same tests. Browser scripts exercise actual file pickers and downloaded STL/ZIP bytes, compare exact preview hashes and JSON regeneration, invalid/truncated/excessive/unsupported files, transformations, recovery, worker abort/stale guards, presets, icons/text/SVG, portable designs, themes, keyboard focus, phone overflow and touch gestures. Reports and screenshots are committed; see `VALIDATION.md` for observed results.
