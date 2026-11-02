# Wedge & Rise

A browser-local, reference-grounded **five-part kit-card generator**. Snip twenty real runners and assemble two upright window guides on a socketed deck. Slide an inclined wedge under a horizontal crossbar: left motion raises it, right motion lowers it. This is a hand-guided geometric demonstration, **not a load-bearing jack**. It differs from the gallery's loose inclined sled, gears, pivots and seated-disc kits.

## Run / build / checks

Node22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. `npm run deploy` is the required individual-app gh-pages command; public combined publication uses the ROOT monorepo flow. Vite base is `/daily-app2/20261103-6/`.

`python3 serve.py --port 5756` serves the production bundle at its real prefix. `node browser-test.cjs`, `node studio-test.cjs`, `node presentation-test.cjs`, `node stale-test.cjs`, `node orientation-test.cjs`, `node icons-drop-test.cjs` exercise actual browser file pickers, downloads, mesh validation and studio state. `python3 serve.py --staged --port 5757` serves the combined root deploy (use `TEST_BASE=http://127.0.0.1:5757`). Reports and screenshots are committed. See VALIDATION.md for actual outcomes; a script's existence is not proof it was run.

## Reference-first provenance

Actual STL: Mike Kasberg's **White Cat Kit Card**, [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), [CC BY4.0](https://creativecommons.org/licenses/by/4.0/). Upstream README and LICENSE retrieved during this run; source license is bundled as REFERENCE-LICENSE.txt. No raw third-party STL or private reference asset is redistributed.

The accessible previously downloaded public binary mesh `/tmp/kit-reference-20261102.stl` was freshly parsed this run, not inferred from a screenshot. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; **179.820 ×178.020 ×3.190mm**, assuming millimeters (STL itself has no units). It has27 edge-adjacent components including degenerate artifacts and is not globally watertight. It is a measurement/design reference only, not a repaired template.

`reference-measure.py` reproduces dimensions, connected components, source plane counts and three actual mesh cross-sections. Python dependencies: trimesh,numpy,matplotlib,scipy,shapely,networkx. `reference-measurements.json` is the full result, `reference-analysis.json` maps measurements to the new design, and `evidence/reference-sections.png` shows actual sections at Z=.10,.50,1.59mm. Measured source sheet is1.60mm, sockets4.50×1.700012mm, and low runners have .21/.22mm upper planes.

**Measured versus redesigned:** default sheet1.60mm and through-sockets4.50×1.70mm are retained. Matching tongues4.40×1.60mm provide a **proposed** .10mm TOTAL allowance in each axis. Stronger .4–.6mm tabs, new five-bay carrier, wedge incline, contact geometry, guide windows and .20–.40mm per-side guide gaps are original reconstruction, not source dimensions or universal fit recommendations. Source artistic shapes are not copied. Local switch-template and fabric-link STLs were inspected/parsed first but rejected as unsuitable for a flat sheet/card mechanism; their hashes/dimensions/reasons are recorded.

Visual/interaction reference, read-only: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` README, styles, App, Viewer, worker, imageTrace, STL and export modules. Applied concrete patterns:374px left studio rail, sticky compact brand, tabbed/collapsible controls, paired numeric sliders, raised tactile buttons, coral selection, lavender desk, rounded bundled Fredoka/Rubik, checkerboard image cutout, source mesh editor, worker/current-result gating, saved theme, and preview-first phone layout. No dependencies/history or raw templates copied wholesale. Shared local gallery studio plumbing was adapted; mechanism, geometry, assembly logic, measurements and validation are new.

## Real geometry / parameters

All linear dimensions in **millimeters**; incline/rotation in degrees. Supported ranges:

| Parameter | Range |
|---|---|
| Card width / height |140–180 /175–215|
| Wedge length / follower width |44–54 /7–9|
| Incline / half stroke |12–22° /6–9|
| Sheet thickness |1.6–2.4|
| Socket TOTAL allowance |.10–.25|
| Guide clearance PER SIDE |.20–.40|
| Part spacing |3–5|
| Tab width / thickness |.8–1.2 /.4–.6|

Card sizes must fit selected parts and spacing; combinations too small are blocked rather than shrunk/overlapped. Deck and guides offer soft, square and clipped silhouettes. Three real presets generate live mesh thumbnails. Bounded variation, undo/redo, six local named designs and portable JSON save/open are implemented. Saved designs include bounded image or original verified mesh payload; missing image payload requests reattachment and blocks export.

The base has four real through-sockets, continuous apron backing≥1mm, and recessed travel ticks. Guides have full-thickness bed-aligned tongues; glue only their feet. Wedge has5mm low end, true planar incline and an8mm-tall grip extending beyond the guide ends at every supported position. The grip tip aligns with real recessed deck travel marks. Crossbar lies horizontal across both windows; its uphill lower edge contacts the slope. Ideal vertical rise is `2*halfStroke*tan(incline)`. Crossbar X play changes ideal height by ±`guideClearance*tan(incline)`; printer error and friction add uncertainty. No physical motion test, force rating, fatigue, load capacity, self-locking or automatic return is claimed.

**Parts are loose, not captive.** Keep deck level and steady crossbar sideways; it can slide out through the guide windows. Wedge has no hard end stops; respect marked stroke and keep the contact edge supported. Positive geometric contact and collision-free ideal motion do not prove real friction behavior. This is an adult teaching/craft kit, not a toy for small children.

## Both import workflows affect exported geometry

Files stay **entirely in the browser**. No upload, API, CDN, keys, paid services or remote fonts. Dependencies, fonts, synthetic samples and Manifold WASM are bundled locally. Source and final3D previews are visible. File picker works on phone and desktop; single-file drag/drop is supported. Replace, remove, reset transforms and return-to-defaults are real state transitions.

**Image→model:** actual PNG/JPEG plus simple safe SVG. Raster headers checked before decoding; ≤2MB,≤12MP,≤6000px/side. Normalize longest side≤500px; then fit/crop/pan into20×20 luminance samples. Select dark or inverted-light background, threshold1–254 or grayscale relief, .4–.6mm depth. Transparent area is composited onto selected background. SVG is sanitized simple vector markup, rasterized locally at256px, then sampled identically (≤2000 elements; no scripts, text, effects or external resources). This is **2D-to-height-field relief, not full3D reconstruction** or exact contour tracing. Threshold samples are connected by planar triangles; grayscale samples give continuously varying height. Bright holes stay unengraved, backed by a continuous solid. Checkerboard shows actual transparent conversion grid. Source pixels, threshold, depth, crop, size, rotation and position affect final Boolean-subtracted geometry. Empty silhouettes and impossible safe-zone transforms block export.

**STL→model:** actual binary and ASCII parser, ≤2MB/1500triangles; .2–250mm each source axis. Require explicit mm confirmation because STL has no unit metadata. Select Z/Y/−Z up before attaching; source dimensions are reported after orientation. Changing axis clears source and requests reattachment. Scale XY proportionally to a4–7mm footprint, independently scale Z to .4–.6mm engraving depth; actual scale factors shown. Rotate±180°, place X±1.5,Y±2mm, or reset/center. The **actual verified mesh** is Boolean-subtracted as a personalized protected base engraving, never unchanged re-exported or convex-hulled. Closed, outward-wound, connected, positive-volume, convex broad-flat-bottom, non-overhanging solids only. Open/nonmanifold, inward, degenerate, intersecting, concave, hollow/multipart or unsupported shapes get actionable errors; no arbitrary repair is claimed. The bottom-footprint hull is used ONLY as a validation predicate, never substituted for source geometry. Slender features<1.2mm in XY after scaling are rejected.

Artwork must remain inside a6.5mm safe radius on the front apron, away from guide sockets and the wedge. Engraved only: no raised mark that would change the sheet envelope. Small searchable bundled heart/sun/wave/star/circle/plus vector icons and up-to8-character text are rasterized locally through the same geometry pipeline. Fine text may need fewer characters/larger scale; inspect before printing. Preview colors are not stored in STL.

## Mesh pipeline / exports

Manifold WASM in a Web Worker performs real union/subtraction. All solids are closed; card frame, dividers,20 accessible runners and five parts form **one connected printable solid**. De-tabbed individual parts remain separate, no accidental fusing. Meshes are bounded/simplified at .0001mm and checked for finite coordinates, nondegenerate faces, positive volume, exactly two opposite-directed incident faces per welded edge (1e-5mm tolerance). All exported parts are bed-flat atZ=0. Byte fingerprints tie preview/current parameter key to the exact downloadable binary STL. Debouncing, sequence ids and immediate current-state comparison disable stale export after edits, imports, conversion errors or worker failure. Last-valid preview is labelled as such while invalid.

Assembled, exploded, connected card, clean print plate and every isolated part use identical solids. Preview travel changes positions only; exports never export assembled interpenetration or pose. See-through guides explain contact. Exploded offsets are illustrative only. Per-part binary STLs, real connected-card STL, five-part de-tabbed plate and Everything ZIP include all six STL assets, portable design JSON and numbered assembly/current-fit instructions. ZIP is not called3MF; no3MF implemented.

React,Vite,Three.js,Manifold3D,fflate and local Fontsource fonts. Fonts carry bundled SIL OFL licenses; Manifold is Apache2.0. Synthetic sample PNG/JPEG/SVG and ASCII/binary STLs are original local fixtures, not user files or redistributed source models.

## Print / assembly

1. PLA/PETG, .4mm nozzle, .16–.20mm layers,3+walls,100%mm scale; no supports intended. Print guide/socket pair first and adjust total fit allowance. Check elephant foot/burrs. Tolerances depend on printer/material.
2. Snip20 tabs1.8mm outside part edges, then file remaining stubs flush. Do not scar the inclined edge, feet or windows. Clean STLs avoid cleanup.
3. Seat the two guide cheeks in the four deck sockets, around the horizontal crossbar, or thread the bar sideways through both aligned windows. Glue only fixed feet after dry-fit.
4. Lift crossbar above the highest wedge edge. Slide low end in from the right between cheeks. Lower crossbar gently onto the slope.
5. Hold level, steady the crossbar sideways, pinch the accessible wedge grip, aligning its leftmost tip with the engraved marks. Left raises/right lowers. Do not load, force, invert, overtravel or expect friction-free return.

No physical print or operation has been performed. Computational checks are reported separately in VALIDATION.md.
