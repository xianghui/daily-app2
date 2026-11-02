# Siphon & Crest

A local React + Vite parametric **four-part flat-pack kit card**, not a fluid simulator. Snip a real connected carrier, glue a curved hose saddle and outlet mast into a personalized base, then route an external flexible hose for a water-only siphon experiment. A loose, three-bore gauge helps choose a non-pinching tube fit. The gallery was checked for prior mechanisms; this is a siphon-routing assembly rather than another slider, optical wheel or static re-export.

## Run / build

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Vite base is `/daily-app2/20261102-17/`. Individual `predeploy` is `npm run build`, `deploy` is `gh-pages -d dist`; public monorepo publication uses the ROOT predeploy/deploy flow. `node serve.mjs` serves production assets at http://127.0.0.1:5717/daily-app2/20261102-17/.

Dependencies are bundled locally: React, Three.js/OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik (OFL); Playwright for browser checks. No API, key, paid service, CDN import or backend is required. Heavy CSG and STL parsing run in a worker with bounded resolution, 100 ms debounce, request IDs and current-state gating. Invalid edits disable export immediately; an explicitly labelled last-good preview is not exportable as the current design.

## Reference-first evidence and differences

Local models were found and parsed first: Keycap Studio's three-component switch template and Weave's 8 mm diamond link are not suitable flat-sheet assembly/carrier references. Their exact dimensions, SHA-256 and rejection reasons are in `reference-measurements.json`. Their README files were inspected. The public alternative is **Mike Kasberg's White Cat Kit Card**, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**; license and source README are recorded locally. `reference-analysis.json` includes the exact raw download URL.

Actual binary STL SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. 30,616 triangles; assumed millimeters (STL has no units), 179.819997 × 178.019994 × 3.190000 mm. Reparsed read-only using `reference-measure.py`; cross-sections at Z=.1/.5/1.59 mm are in `evidence/reference-sections.png` and were inspected. There are **27 edge-adjacent mesh components**, including degenerate artifacts, NOT 27 intended parts. The source is not globally watertight and was neither repaired nor used as printable output.

Concrete measured structure: 1.60 mm sheet; rectangular socket sections **4.50 × 1.700012 mm**; low carrier-web planes around .21–.22 mm. Our original solid reconstruction retains three **4.50 mm tongue widths**, defaults to the measured 1.60 mm sheet, and cuts actual `(4.50 + clearance) × (sheet + clearance)` sockets. The .10–.35 mm TOTAL clearance is a proposed printer/material-dependent fit, not a source measurement. A segmented carrier connects all four parts with sixteen real .8–1.4 mm wide, .4–.6 mm thick bed-aligned runners, deliberately thicker than the source webs.

New geometry comprises a two-tongue semicircular saddle with three thread eyes, a one-tongue U-notched outlet mast, three-socket base and three-bore tube gauge. Radius/OD customize physical routing, board width, notch and bores. No original spacecraft artwork or raw third-party STL is bundled; no hull substitution. `reference-analysis.json` separates measurements and redesign decisions.

Read-only visual reference: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`. Inspected README, styles, App, Viewer, worker, export, imageTrace and STL modules. Reused concrete maker patterns: ~374 px left control rail/right live viewer; preview-first phone stack; collapsible sections; tactile pink selected keys; checkerboard conversion/source comparison; paired numeric/slider controls; saved light/dark theme; local portable assets; exact worker-result export gating. Shared studio plumbing was adapted from the earlier local daily studio; the solid generator and assembly checks are newly implemented for this kit, not a renamed prior mechanism.

## Parameters — all lengths in millimeters

| Control | Supported range |
| --- | --- |
| Connected card width / height | 190–240 / 175–220 |
| Saddle edge radius | 20–28 |
| Flexible tube OD | 4–5 |
| Sheet | 1.6–2.4 |
| Total socket clearance | .10–.35 |
| Part spacing | 3–5 |
| Breakaway width / thickness | .8–1.4 / .4–.6 |
| Mark footprint / depth | 4–7 / .4–.6 |
| Mark rotation / XY offset | ±180° / ±1.5, ±2 |

Soft, square and clipped base silhouettes and three real rendered presets change the solid. Bounded variation, undo/redo (35 snapshots), reset, six local named saves and JSON save/open are implemented. The safe engraving keep-in radius is 6.5 mm, separated from all sockets; at least 1 mm backing remains. Out-of-range or numerically invalid values block export, never silently clamp to another model.

Tube centreline bend radius is `saddle radius + tube OD/2`, at least four times OD over all supported values. This is only a starting design constraint: verify the actual tubing manufacturer's bend/kink specification. Saddle crest centreline height is `sheet + 40 + radius + OD/2`; outlet notch centre is `sheet + 29`. External tube ends, vessel levels and flow are user-set. There is no automatic flow prediction.

## Images, text, icons and SVG — actual cut geometry

File picker and drag/drop accept PNG, JPEG and simple SVG. Maximum 2 MB; PNG/JPEG ≤12 MP and 6,000 px side; decoded image is normalized to ≤500 px, then sampled to a **20 × 20 luminance grid**. Fit/crop, ±25% pan, light-background removal or dark inversion, threshold 1–254, grayscale relief, physical footprint, rotation, XY placement and depth affect an actual closed height-field solid Boolean-subtracted from the base apron. A piecewise triangular surface interpolates samples; this is **2D-to-engraved relief, not full 3D reconstruction or exact vector tracing**. Bright holes remain unengraved on the continuous backing. Source and checkerboard cutout-grid previews are shown. All-white/empty artwork is rejected.

Simple SVG paths/shapes are sanitized (no scripts, href, external resources/effects; max 2,000 elements), locally rasterized at 256 px and converted by the same method, keeping sampled holes. Text up to 8 characters and six searchable bundled vector marks use this same real geometry path. Only engraved style is supported: raised or through marks could obstruct the route or weaken the thin sheet. STL stores no preview colors.

## STL — exact parsed solid integration, with explicit limitations

Both ASCII and binary STL, ≤2 MB / 1,500 triangles, .2–250 mm on each source axis. Select Z/Y/−Z up before attaching. The parser checks complete facets/byte length, finite coordinates, nondegenerate triangles, opposite-wound two-incident welded edges (1e−5 mm), positive outward volume, one component and self-intersections.

Supported input is intentionally limited to **one closed convex broad-flat-bottom solid**, ≥25% bottom footprint and no projected overhang. Concave/hollow/open/nonmanifold/branched/overhanging input is rejected with actionable feedback, never replaced with a convex hull or called repaired. This app does not support every STL. A source preview, dimensions/format and explicit millimeter-confirmation checkbox precede integration because STL contains no unit metadata.

The exact normalized parsed solid is proportionally scaled in XY to a 4–7 mm footprint and independently in Z to .4–.6 mm engraving depth, rotated, placed and **Boolean-subtracted from the base**. Displayed scale factors are explicit. The safe-zone and backing checks protect assembly joints. Replace/remove, reset transforms, reset conversion and reset-all return to working built-ins. Axis changes require reattachment. Synthetic PNG/JPEG/SVG/ASCII/binary samples and sample downloads are bundled; no personal input file is in the repository.

## Saves, views and export

Bounded portable JSON ≤2 MB includes normalized image and mesh payloads and revalidates restored assets. Named saves use browser localStorage, not a server. Missing image payload requests reattachment rather than pretending restoration. User files are processed locally, not uploaded or saved in the repository.

Connected card, assembled, exploded, de-tabbed print plate and all isolated-part views share the exact latest valid worker meshes. Rotate/zoom/pinch, fit/top and see-through base work. Assembly transforms depict actual shoulder-seated parts; exploded offsets and route sketch are illustrative. External hose, ties, vessels and water are not rendered or simulated.

Binary STL per part, connected-card STL, four-part de-tabbed plate and Everything ZIP. ZIP includes five STLs plus numbered instructions/current fits. All exported parts are bed-flat, not the standing preview. X/Y/Z mm bounds and a mesh fingerprint correspond to current export selection; browser checks compare downloaded bytes with the UI signature and regenerate the same JSON in Node. No generic STL ZIP is called 3MF.

## Print, assembly and use

See `ASSEMBLY.txt` and the in-app guide. PLA/PETG, .4 mm nozzle, .16–.20 mm layers, three walls; no supports intended. Calibrate a tongue/socket first, cut sixteen accessible runners, file nubs, lower both saddle tongues and the outlet tongue into the base, then **glue all three sockets** and cure. Gauge remains loose. All parts print flat; carrier size may exceed small beds, so clean parts are also available.

External supplies: about .6 m of flexible clear 4–5 mm OD tubing, four soft thread ties, two open vessels, stable support for supply vessel, tray/cloth, snips/file and compatible adhesive. Wrap tubing over the saddle's outside curve, loosely tie through three eyes, then guide the downstream leg through the open mast notch and fourth tie. Do not pinch the bore. Tube is supported and tied, not sealed or pressurized by the printed kit.

Water only, room temperature. Fully prime tubing by immersion, never by mouth. Set supply surface below crest, intake submerged, outlet tip below supply surface. Use a tray and stable vessel support. Air leaks, exposed intake, kinks or insufficient head stop flow. No perpetual motion, suction pump or capillary-pumping claim. Not a child's toy or certified laboratory device.

## Verification and honest limits

`npm test`: independently parse float32 binary STL, finite nondegenerate faces, normalized normals/winding, 1e−5 mm welded edges with exactly two opposite incidents, positive volume per component, bounds and component counts; every preset, silhouette, individual/combined scalar extrema, image and ASCII/binary-derived models. Boolean tests check assembled nonintersection, vertical mast insertion, shoulder stops, socket cut-through, real carrier part inclusion, sixteen accessible snip paths releasing exactly five components (four parts + carrier), bed-supported upper footprints, open tie/gauge holes and 19 nonintersecting nominal hose-sphere samples along the saddle. Minimum bend/backing constraints are checked independently of watertightness.

Browser scripts exercise production worker/WASM assets, real picker uploads/downloads, threshold/pixel/depth/transform changes, remove/reset, rejected files, min/max bounds, source axes and mm confirmation, text/icons/SVG holes, current-state blocking, JSON/local save and undo/redo, per-part/ZIP meshes, all views, theme/focus/collapses and 320/390 px no-overflow touch UX. Reports are generated beside the app; completed checks are summarized in `VALIDATION.md`.

**No physical print, water-flow, tube fit/kink, adhesive-strength, snipping-force, stability, durability or educational-use test has been performed.** Collision tests do not predict material deformation or hydraulic performance. The external hose and vessel setup must be checked in practice.
