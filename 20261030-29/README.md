# Comb & Capture

A local React + Vite studio for a **nine-part contour-sampler kit card**: five independently sliding closed-slot blades, a pinned lower guide, upper capture rail and two upright end keys. Gently press blunt tips against a small profile, hold their positions by hand, and trace the coarse shape. **No clamp, detents or precision-measurement claim.** This is a new pinned sliding-blade assembly, not a cosmetic variation on the previous interlinked chain kit.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
# http://127.0.0.1:5549/daily-app2/20261030-29/
node browser-test.cjs
node studio-test.cjs
node axis-test.cjs
node hole-check.mjs
```

The per-app deployment scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. The combined public site uses the parent monorepo deployment, not this app's gh-pages command.

## Reference-first evidence / attribution

Before geometry selection, local STL candidates were found under `/Volumes/ExternalHD/3d_printing_apps/`. Keycap Studio and Weave READMEs were inspected; actual clicker template and diamond-link meshes were parsed, hashed and measured. Neither is a suitable sheet-kit interface. Their measurements and rejection reasons are in `reference-measurements.json`.

The selected mesh is **White Cat Kit Card**, Mike Kasberg: [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**, full licence in `reference-LICENSE.txt`. The source README and licence were retrieved, and the actual 1,530,884-byte binary STL was downloaded, parsed and sectioned by `reference-inspect.py`. SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**. Bounds179.820×178.020×3.190mm,30,616 triangles,27 edge-adjacent components. STL has no unit metadata: millimeters assumed and corroborated by sheet dimensions. The source is not watertight, is not repaired, and its raw mesh is **not bundled**.

Cross-sections at Z=.1/.5/1.59mm in `evidence/reference-sections.png` reveal separate sheet parts, thin carrier connections and rectangular assembly sockets. Four measured loops are4.5×1.700012mm; sheet planes are0 and1.6mm. End keys use4.4×1.6mm tongues plus.10mm total allowance to reconstruct that interface. Default.15 and adjustable.10–.35 are **proposed printer-dependent values**, not measured source tolerances. Original carrier runners .21/.22mm are redesigned to.4–.6mm for this kit.

This is an original parametric reconstruction of the measured sheet/socket/carrier strategy. The pinned slider slots, rail sandwich, capture arrangement, clearances, contour-transfer interaction and nine-part layout are new. No source spaceship silhouette, third-party raw STL, private upload, Git history or source dependency tree is redistributed. See `reference-analysis.json` for concrete design mapping.

Read-only visual/interaction reference: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` README, styles, App, Viewer, worker, STL parser, image trace and exports. Applied concrete patterns:374px scrolling left editor, sticky compact branding, collapsible sections, tactile selected buttons, bundled Fredoka/Rubik, lavender desk/coral actions, saved dark theme, checkerboard conversion, oriented imported-base preview, worker ownership and current-result export gating. Shared local studio infrastructure was adapted from the previous app; mechanism geometry and validation are new.

## Geometry / supported ranges (millimeters)

| Control | Range |
|---|---|
| Card width × height |180–220 ×140–180|
| Blade length / width |44–56 /5–7|
| Total slide stroke |14–22|
| Running clearance PER SIDE, XY and Z |.20–.35|
| Fixed socket TOTAL allowance |.10–.35|
| Lower rail thickness |2.4–3.2|
| Blade / upper rail / end-key sheet |1.6–2|
| End tongue width |4.4–5.2|
| Part spacing |3.5–4|
| Runner width / height |.8–1.4 /.4–.6|

Three presets have live model thumbnails. Soft, chamfered and capsule silhouettes change actual solids. Integral pins are1.6×3mm. Slots are `(3+stroke) × (1.6+2*gap)`mm. Pitch is `bladeWidth+2*gap+.6`, so adjacent blades cannot collide at opposing lateral play limits. Blade end walls are at least9.5mm. Top rail separation is `bladeThickness+2*gap`; guide pins stop .1mm below its underside, retaining at least `sheet-.1` engagement even at maximum allowed lift. Upper and lower end-key shoulders locate the four fixed tongue seats. No hardware needed; **adhesive required only at those four fixed seats**. Glue is not a moving fit.

All bodies are produced with Manifold WASM Boolean solids. The connected-card STL really unions32 runners to all nine parts and the frame; de-tabbed parts omit runners. Each export is checked for closed manifold edges, winding, nondegenerate finite triangles and positive volume. Unsupported settings block export; last-good preview is explicitly marked and cannot be exported as the current design.

Assembled, exploded, connected-card, loose-parts and isolated-part views share printable meshes. The preview-offset slider moves blades within the designed stroke but is **not an exported dimension** or force simulation. Three.js supports orbit, pan, touch pinch/zoom and fit. Preview colour does not exist in STL.

## Image / SVG → physical engraving

Use desktop/phone file picker or single-file drag/drop for real PNG or JPEG; simple local SVG fills can also be rasterized. Limits2MB,12MP,6,000px side; SVG ≤2,000 simple elements, no scripts, external links, effects or embedded resources. SVG is rasterized256px; decoded images are normalized ≤500px and then sampled to20×20. Fit entire image or fill/crop, ±25% crop offsets, dark/light background, threshold1–254 or grayscale relief.

Method: luminance/alpha-composited image samples become a closed triangulated height solid, then Boolean-subtract .4–.6mm into the upper-rail center. The checkerboard shows the exact sampled cutout; bright/transparent holes remain unengraved with continuous backing. This is **2D-to-sampled-relief/silhouette conversion, NOT automatic full3D reconstruction from a photo** and not exact vector outline tracing. Text (8characters) and six searchable bundled marks use the same pipeline. Engraved-only to preserve the flat assembly backing; no fake raised/inlay controls. Use bold marks; sub-nozzle details may not print.

Artwork size4–7mm, rotation±180°, X±1.5mm/Y±2mm placement. Protected circular6.5mm-radius zone rejects oversize transforms. Source/final preview, replace/remove, center/reset and default recovery are implemented. Background, image pixel content, threshold, crop, scale, depth and placement alter actual exported mesh. Depth leaves≥1mm upper-rail backing, no effect on guide pins or slots.

## STL → physical rail mark

ASCII and binary STL,2MB,≤1,500 triangles; each source dimension.2–250mm. Source coordinates are displayed as assumed mm and **explicit mm confirmation is required**. Select Z/Y/negative-Z up before attachment; changing orientation clears the asset and requires reattachment. Source preview and bounding dimensions are shown. Footprint4–7mm controls uniform XY scaling; Z is independently scaled to.4–.6mm engraving depth, with both scale factors displayed. Rotate, center, place, reset, replace/remove.

The **exact accepted mesh** is normalized and Boolean-subtracted into the upper-rail center, not merely previewed or re-exported. Contract is deliberately bounded: a single outward-wound watertight **convex broad-flat-bottom** solid, no cavities, branches, self-touching, intersections or unsupported overhang. Concavities are **rejected**, never converted into a convex hull; no automatic repair is claimed. Actionable topology/content/dimension/transform errors disable export and permit recovery. Synthetic wedge/gem ASCII/binary and PNG/JPEG/SVG fixtures under `public/samples/` were authored locally and may be reused (CC0); no user files are stored in this repository.

## Designs / privacy / runtime

Undo/redo; up to six named localStorage designs; portable2MB JSON includes bounded normalized image or original accepted mesh payloads. Missing image payloads request reattachment, not pretend restoration. Imported mesh JSON is revalidated on open. User files never leave the browser: no server, API key, CDN, telemetry or paid service. Dependencies (React/Vite, Three.js, Manifold WASM, fflate, Fontsource fonts) are bundled locally. Manifold runs in a module worker; debounced100ms builds use request ids and exact-state keys, stale-response guards, honest busy/error states and disabled invalid export. Every current-result STL has a displayed DOM fingerprint tested against actual downloads.

## Exports / assembly / printing

Download connected card or each of nine clean parts as binary STL; Everything ZIP includes ten STLs plus numbered `ASSEMBLY.txt` with current fit values. All parts bed-aligned, lower pins upward; preview/export identical current solids. Flat card is within declared X/Y and its maximum Z includes the raised pins (not just sheet thickness). STL is not3MF, carries no colours. Use 100% mm scaling, PLA/PETG, .16–.20mm layers,3walls, no supports intended.

1. Snip32 runners at least1.6mm outside part edges; trim nubs. Do not cut functional slots or tongues. Frame becomes waste.
2. Dry-fit end keys in lower rail; fit five blade slots over the pins; lower upper rail onto both upper tongues.
3. Test every blade through its stroke. Calibrate one blade and the rails first; running play and socket fit depend on printer/material/first-layer expansion.
4. Bond only four fixed tongue seats, away from sliders. Cure before use.
5. Gently sample blunt shapes and hold strips while transferring. No position lock, self-locking, force, safety, lifespan or precision guarantee.

## Validation / limitations

`validate.mjs` independently parses exported float32 binary STL, checks normals against face winding, welds at1e-5mm, requires two oppositely oriented face incidences per edge, traverses each component and checks positive enclosed volume, genus and expected mm bounds. Every clean part and connected card is checked. Kernel intersections test all blade paths, both lateral/vertical play limits, travel and lift stops, assembling end keys/blades/top, disjoint plate layout and32 safe snips yielding nine parts plus one carrier. Sampled upper sections must be supported by the bed footprint. Presets, silhouettes, simultaneous extremes, every single-field extreme and image/STL variants are checked.

Browser tests use actual production bundles and WASM under the real base prefix, real PNG/JPEG/ASCII/binary file-picker imports, actual STL/ZIP downloads, changed pixel/threshold/depth/transform signatures, Node regeneration of saved state, malformed/open/nonmanifold/concave/oversized/truncated rejection, empty-image recovery, current-state export gates, restored portable assets, undo/redo, mobile orbit/pinch and320/390px layouts. Worker abort/reload, dark theme, keyboard focus and collapsible controls are exercised. See generated reports and `VALIDATION.md` for observed results.

**Computational checks only. No physical printing, fit, assembly, strength, fatigue, adhesive, accuracy or contour-transfer performance test has been performed.** A watertight mesh is not a physical print certification.
