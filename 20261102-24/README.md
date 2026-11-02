# Square & Roll

A local-browser **four-part kit-card generator** for a square wheel rolling over matching inverted-catenary rails. Snip sixteen real tabs, bond two upright rails into four base sockets, then gently hand-guide the loose thick wheel across the middle humps. No axle or hardware. **Adhesive, snips and a file are required.** This is a rolling geometry demonstration, not an unattended vehicle or captive fidget. Physical print, fit, glue strength, stability, friction and rolling smoothness have not been tested.

## Run

Node 22.12+. `npm install`, `npm run dev`; `npm test` runs reproducible geometry checks. `npm run predeploy` builds the app. Base URL `/daily-app2/20261102-24/`. Per-app `deploy` uses gh-pages, but the combined public site must be published with the parent ROOT predeploy/deploy flow. `node serve.mjs` serves actual production files at port 5724 under the real base path; `node browser-test.cjs` and `node studio-test.cjs` exercise those files.

## Reference-first evidence

Read-only inspection of local `keycap_generator2/public/templates/clicker_template2.stl` and `fidget_fabric_generator/public/templates/diamond-link.stl`, plus their READMEs, found switch/socket and interlocking-link structures rather than a sheet-kit reference. Their actual hashes, bounds and components are in `reference-analysis.json`. No suitable local kit-card source was found.

Selected and freshly downloaded **White Cat Kit Card**, Mike Kasberg, [GitHub source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Attribution and licence text are preserved. No source STL or spacecraft artwork is redistributed.

The actual 30,616-triangle binary STL SHA-256 is `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; bounds 179.820 × 178.020 × 3.190 mm. STL has no units: mm is an explicit design assumption supported by measured sheet features. Fresh Z=0.10/0.50/1.59 mm cross-sections are in `evidence/reference-sections.png`. Measurements establish 1.60 mm sheet, four 4.50 × 1.700 mm narrow socket loops and runner Z levels .21/.22 mm. The source has 27 edge-adjacent components including degenerate slivers; the overall mesh is not watertight. It is a design reference, not an import claimed repaired.

**Mapped decisions:** retain default 1.60 mm sheet and 4.50 mm tongue width; change sockets to current sheet + explicit .10–.35 mm total clearance, and width 4.50 + clearance. Reconstruct four bonded tongue joints and a genuine one-component carrier from robust solids. Replace fragile/elevated source runners with bed-aligned .4–.6 mm tabs. Catenary rails, thick square wheel, protected engraving apron and card layout are original parametric geometry, not source artwork or source primitive re-exports. Raw source read-only; no convex-hull replacement. See `reference-measure.py`, `reference-measurements.json` and `reference-analysis.json`.

The visual/interaction reference is read-only **keycap_generator2**: README, styles, editor, Viewer, worker, STL, imageTrace and export modules inspected. Concrete patterns used: 374 px left studio rail, paired sliders/numbers, labelled collapsible sections, raised tactile controls, soft pink selection, lavender-grey desk, white panels, local Fredoka/Rubik fonts, saved dark theme, checkerboard conversion, source mesh preview, current-worker-result gating, and preview-first stacked phone layout. No Git history or dependencies copied wholesale. Generic import/preview/editor infrastructure adapted from earlier Daily Object Lab studios; this kit's mechanics and validation are new.

## Real geometry and limits (all lengths mm)

| Parameter | Supported range |
|---|---|
| Card envelope X / Y | 150–190 / 125–165 |
| Square side | 18–26 |
| Wheel width | 8–12 |
| Rail root height | 8–14 |
| Wheel overhang beyond outer rail | 1–2 per side |
| Base / rail sheet | 1.6–2.4 |
| Socket total clearance | .10–.35 |
| Packing spacing | 3–5 |
| Tab width / bed height | .8–1.2 / .4–.6 |
| Engraving depth | .4–.6, >=1 backing |

Unsupported combinations (insufficient card space or <.6 mm web between rail seats) are blocked, not silently clamped. Three real presets; square/rounded/chamfered base shapes. The wheel edges remain exactly square. All printable parts bed-aligned. The thick wheel is deliberately not a 1.6 mm sheet, and the displayed Z envelope correctly includes its width.

For square half-side a, each rail has four repeated humps `y = B + a*(sqrt(2)-cosh(u/a))`, `|u| <= a*asinh(1)`, pitch `2*a*asinh(1)`. Each hump uses 96 straight chords. Ideal wheel center is level at `baseTop + B + a*sqrt(2)`; orientation `-atan(sinh(u/a))` modulo quarter turns. Preview is a **kinematic pose**, not physics. Changing side changes both real exported wheel and track. Clearance calibrates assembly only; no artificial rolling gap. Bounded profile chord error is documented in the UI. The square is free to be lowered from above; no axle assembly or retention claim. The paired rails lie inside the wheel width with chosen edge margin; guide by hand and avoid track ends.

## Image / text / icon / SVG workflow

Pick or drop actual PNG/JPEG up to 2 MB, 12 MP and 6,000 px per side. Content/header dimensions are checked before decoding, then downscaled to <=500 px. Simple SVG (<=2,000 vector elements; no script, external resource, filters or text) is rasterized locally to 256 px. External content is rejected, never fetched. Bundled searchable six-icon marks and up to eight text characters use the same conversion path.

Images are sampled into a **20 × 20 grayscale grid**, contain/cover fitted with ±25% crop shift. Light/transparent background removal or dark/invert, threshold 1–254, thresholded height or grayscale height, .4–.6 mm depth, footprint 4–7 mm, rotation ±180°, X ±1.5 / Y ±2 mm. A solid closed height surface is Boolean-subtracted from the protected front apron; it is not a preview texture. Bright regions/holes stay unengraved with continuous backing; interpolation introduces sloped transition pixels, not exact vector contours. Checkerboard shows the converted pixels next to the original. **2D-to-relief, not full 3D reconstruction from one photo.** Engraving-only is intentional to protect thickness and avoid supports; no fake raised toggle.

The whole transformed tool must fit a 6.5 mm radius keep-in zone, separated from rail sockets. Reset transformations, replace/remove artwork, reset image settings or return to built-in mark. The same validated mesh feeds preview and all STL exports.

## STL workflow

Actual binary and ASCII `.stl` files, 40 bytes–2 MB, <=1,500 triangles, .2–250 mm per oriented source axis. Select Z-up/Y-up/negative-Z before attaching, then explicitly confirm millimeter coordinates because STL has no unit metadata. Shows original oriented source 3D preview, bounds, format, triangle count and scale factors. XY scales proportionally to a 4–7 mm footprint; Z fits .4–.6 mm engraving depth independently; rotate/place/center controls alter exported geometry.

Strict welded edge/winding/connectivity, finite/dimension/area/volume and self-intersection tests precede solid operations. Deliberate bounded contract: **one closed, convex, outward-facing, broad-flat-bottom solid without overhang**. Concave, hollow, thin-branch, open, nonmanifold, inward, disconnected, self-intersecting or unsupported oriented meshes are rejected with guidance. Convexity is validated but the mesh itself is used: no generated hull, silent repair or discarded concavity. Its real triangles form a Manifold Boolean engraving tool, preserving >=1 mm base backing and joint keep-outs. This is a functional personalization operation, not an unchanged re-export.

## Studio and export

React/Vite, locally bundled Three.js, Manifold WASM, fflate and Fontsource fonts. Worker performs heavy geometry and STL preflight. 100 ms debounce and request IDs reject stale results; exact state key disables exports during pending/invalid edits, file imports, failed conversion or worker failure. A last-valid preview is visibly labelled and never silently exported. Source files never leave this browser; no accounts, API keys, CDN imports or generation APIs. Synthetic samples only in `public/samples` (project-created).

Assembled rolling pose, exploded, connected card, de-tabbed plate, isolated parts, see-through base; touch orbit/pinch, fit/top/zoom buttons. No preview overlap is exported as a solid: the print card has actual Boolean-unioned tabs. Per-part binary STL, connected-card STL, loose plate, **Everything ZIP** containing all five STLs, portable design JSON and numbered assembly guide. STL has no preview colours. No 3MF claim.

Undo/redo, up to six local named designs and JSON save/open include bounded normalized-image or original indexed-mesh payloads. Missing image payloads request reattachment; mesh JSON is revalidated. Local saves remain localStorage on this browser/origin. File imports are not placed in the repository.

## Validation versus printing

`npm test`: presets, all individual extrema and three silhouette min/max combinations; each serialized part and combined loose plate checked for exact binary length, finite coordinates, nondegenerate faces, normalized consistent normals, welded (1e-5 mm) two-opposite-incident edges, connected component count and positive volume per component, bed Z and mm bounds. Real CSG tests check support-free upper slices, connected card, sixteen-runner cutting into carrier + four preserved parts, zero plate overlap, four open sockets and vertical insertion. 65 rolling positions test actual wheel/rail intersections, constant ideal center height and contact to both rails within .03 mm. Same checks run on image- and STL-derived outputs, including hole preservation. Range failures are recorded as explicit rejections.

Browser scripts use real Playwright file-picker PNG/JPEG/SVG and ASCII/binary STL uploads against production files under the real base prefix. Downloads are parsed, UI signatures/dimensions compared, and portable JSON regenerates byte-identical geometry in Node with the same mesh/mechanical validation. Changed pixels, depth, threshold, crop, scale, rotation and placement must change exports; removal/reset must restore defaults. Malformed, empty, excessive, open/nonmanifold/concave inputs block exports recoverably. Tests include presets, text/icons, views, ZIP parts, named saves, JSON asset round trips, missing assets, undo/redo, theme, keyboard focus, collapsed sections, stale edits and worker failure/reload. Touch orbit/pinch, 320/390 px overflow and phone file imports/downloads checked. Reports/screenshots are saved alongside this README.

These are **computational checks only**, not physical print, force, rolling, friction, glue or durability tests. Print a small fit pair and inspect the slicer first. PLA/PETG, .4 nozzle, .16–.20 layers, three walls, 100% scale, support-free flat orientation intended. Carefully trim wheel edges and rail roots. Adhesive manufacturer guidance applies. Small pieces are not children's toys.

Licences: reference CC BY 4.0; Manifold Apache-2.0; Three.js MIT; fflate MIT; fonts SIL OFL through Fontsource. See installed package licences.
