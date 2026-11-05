# Nephroid & Lace

A local browser parametric **flat-pack string-art kit-card generator**. Print a connected card, snip twelve real runners, cross-lap the pierced frame and two feet, then lace soft thread through indexed anchors. The finite times-three chord family approximates a two-cusped nephroid. This is an original physical assembly, not an unchanged mesh download or a simulation of a moving fidget.

## Run and export

`npm install`, `npm run dev`; `npm test` runs independent geometry checks. `npm run predeploy` builds the static production app. The Vite base is `/daily-app2/20261105-12/`. Root monorepo deployment publishes the combined site; the per-app `deploy` script is retained but is not used for combined publication.

Download the **connected card**, **clean print plate**, or each of the three bed-flat assembly parts. Everything ZIP includes the card, all clean part STLs, portable design JSON, numbered assembly notes and `LACING.csv`. STL is binary, in millimeters, and contains no preview colours. External thread is preview-only and never exported as plastic. Preview and export consume the exact same valid worker result; invalid edits disable all geometry exports rather than exporting stale geometry.

## Reference-first evidence

Actual local STLs were inspected first: the keycap switch template (three components, 15.20 × 15.20 × 43.10 mm) and fabric link (one component, 7.981 × 9.241 × 8 mm). Their sockets/interlocks are not appropriate planar-sheet interfaces, so neither was imposed on this kit. The primary visual reference, read-only Keycap Studio, informed the concrete 374 px left rail, paired mm inputs, tactile selected buttons, collapsed sections, source/converted views, worker status, imported-STL unit confirmation, and assembled/exploded/print views. No upstream Git history or dependency tree was copied.

The selected geometry/design reference is **White Cat Kit Card**, Mike Kasberg, [upstream](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. See `REFERENCE-LICENSE.txt` and `REFERENCE-UPSTREAM.md`. Download URL is recorded in `reference-analysis.json`; raw source STL is NOT redistributed.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, 30,616 triangles; assumed millimeters because STL carries no unit metadata.
- Bounds: approximately −.010…179.810 X, −.010…178.010 Y, 0…3.190 Z; dimensions 179.820 × 178.020 × 3.190 mm.
- 27 edge-adjacent components, including source degenerate/duplicate pseudo-components. The raw source is not wholly manifold; this is documented, NOT treated as a validated printable import or repaired silently.
- Source sections at Z=.10, .215 and 1.59 mm were generated and inspected. Four measured receiver loops are 4.50 × 1.70 mm. Source sheet planes measure 1.60 mm; thin runner tops occur at .21/.22 mm. See `evidence/reference-sections.png` and the full analysis.

**Adaptation:** preserve the measured 1.60 mm sheet / 1.70 mm default receiving-width relationship. Reconstruct new ring, apron, feet and runner solids parametrically with Manifold CSG. The source's 4.50 mm socket length is NOT retained: the new open cross-laps are 6 mm deep with selected axial relief. Strengthen runners to .4–.6 mm, add accessible paired attachment bands, and protect a continuous apron backing. No source cat silhouette, raw triangles, switch socket or arbitrary convex-hull replacement is used.

## Parameters and useful limits

All physical dimensions are **mm**:

| Parameter | Supported range |
|---|---|
| Card width / height | 150–220 / 160–220 |
| Anchor radius | 30–42 |
| Anchors | 24–48, multiples of four |
| Thread hole | 1.6–2.4 |
| Lacing index offset | 0–5 integer; offset+1 dots engraved in apron |
| Sheet | 1.6–2.4 |
| Total slot allowance | .10–.30 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |
| Art footprint / depth | 4–7 / .4–.6 |
| Art rotation / X / Y offsets | ±180° / ±1.5 / ±2 |

Three presets have real model thumbnails. Rounded, clipped and scalloped aprons change printable outlines. Ring inner/outer radii are anchor radius −4 / +6. The 24 mm apron separates the signature from the lowest thread eye. Minimum neighbouring-hole ligament is 1.5 mm; inward ligament is at least 2.8 mm. A protected 5.8 mm-radius art zone centered at (0,8) leaves at least 1 mm of sheet backing. Card capacity and topology are checked; unsupported combinations block export.

## Image and legend workflow

PNG/JPEG file pickers on desktop and phone, drag-and-drop, and five synthetic sample fixtures are included. Simple SVG supports paths/shapes but rejects scripts, references, effects and external resources. Images are content-checked before decoding: 2 MB, ≤12 megapixels, ≤6,000 px per side. They are normalized to ≤500 px; SVG rasterizes locally to 256 px.

The exact method is a **20 × 20 sampled threshold/grayscale height solid**, not a full 3D reconstruction from one photograph or exact smooth contour tracing. Fit/crop, background inversion, threshold and depth produce a closed height-field cutter; robust subtraction engraves the apron. Bright/transparent holes leave original backing, demonstrated by the ring fixture and final-solid volume probes. The source image and actual checkerboard cutout are shown. Footprint, rotation and placement change the exported solid. Text (eight characters) and six searchable bundled SVG icons use this same pipeline. Only engraved art is offered to preserve the declared envelope and backing; raised style is intentionally unsupported.

Replace/remove/reset controls restore built-in geometry. Named designs (up to six), undo/redo and JSON save/open preserve bounded normalized image or verified mesh payloads. Missing image payloads explicitly request reattachment; file paths alone are never pretended to restore assets.

## STL import workflow

Binary and ASCII STL are parsed locally in the geometry worker. Maximum 2 MB / 1,500 triangles, .2–250 mm per axis; finite vertices, degenerate faces, edge incidence/direction, positive volume, one connected component, self-intersections, outward winding and supported footprint are checked. **Deliberate support contract:** one convex closed solid with a broad flat bottom and no overhanging footprint. Concave/hollow/open/nonmanifold/multi-body/unsupported meshes are rejected with actionable messages. The importer never hull-replaces or claims arbitrary repair. The hull used to check planar bed contact is ONLY a diagnostic; the accepted original 3D triangle mesh is preserved.

Select Z, Y or −Z up before attaching; changing up-axis clears the asset for explicit reattachment. Source dimensions and format are shown and millimeter units must be confirmed. XY scale preserves aspect ratio and normalizes to the chosen footprint; Z independently normalizes to engraving depth. Rotate, center/reset, position, replace or remove. The actual accepted mesh becomes a Boolean subtraction cutter in the protected frame apron, visibly changing exported geometry. Its source preview remains available. Source features cannot obstruct either foot slot or any thread eye.

## Assembly and material guidance

1. Print either the connected card OR three clean parts flat, Z=0; PLA/PETG, .16–.20 mm layers, .4 mm nozzle, no supports intended. Print a frame and foot as a full-size fit coupon first.
2. Snip twelve low runners in the gaps and trim scars without damaging clean outlines. The cut checks leave exactly one carrier plus three intact released parts, no detached runner fragments.
3. Stand frame and feet at 90°. Raise each top-slotted foot from below into its corresponding bottom-open frame slit. Ends meet at 6 mm with selected relief. Both feet and frame bottoms rest at Z=0. Fit depends on material, printer and elephant foot; .10 mm is only a starting total allowance. Adhesive is recommended after calibration; clearance cross-laps are not captive snaps.
4. External .4–.8 mm soft cotton thread and small amount of adhesive are required; optionally use a blunt needle. Index 0 is the rightmost long tick, indices increase counterclockwise. Connect i → (3i + offset) mod N according to the app/table/CSV, skipping self-connections. Tie chords separately or return along the back; keep front chords gently slack. Preview omits rear returns, knots and tension. Do not pull tight or lift by loose feet.
5. Assembled, exploded, connected card, clean plate and isolated views share the printable solids. Exploded positioning is illustrative; export always uses real bed-flat geometry.

## Privacy and dependencies

All file processing, generation and export happen on-device. No API, paid service, upload, remote font or CDN dependency is required. Synthetic sample files only; no personal user uploads are stored in the repository. Bundled React/Vite, Three.js orbit/touch controls, Manifold WASM in a worker, fflate ZIP, Fontsource Fredoka/Rubik. Icon paths are original synthetic marks. Manifold Apache-2.0; fonts SIL OFL; other packages retain their own licenses.

The maker-studio IO/UI scaffolding was adapted from a prior daily app; the physical nephroid lacing assembly, solid construction, anchor layout, slot/foot transforms and independent assembly validator are new.

## Validation versus physical testing

`validate.mjs` parses serialized float32 STL independently: exact byte length, finite vertices, nondegenerate faces, normal/winding agreement, welded 1e-5 mm edge incidence with opposing directions, per-component positive volume and mm bounds. Every card and clean part is checked, plus the translated clean plate. Geometry-kernel checks simulate twelve cuts, require exactly carrier+three released parts, check intact parts, card envelope, supported first-layer footprint, all eyes in clean and connected solids, no print/assembled overlap and 41 samples of each foot insertion path. Test defaults, presets, all individual bounds, combined extrema, silhouettes and both image/STL-derived geometry. Browser tests exercise real file uploads, downloads, portable roundtrips, failures, views, workers, themes and phone touch/layout. See reports and `VALIDATION.md` for actual results.

**Physical printing, fit, stability, lacing, tension, durability and optical fidelity have NOT been tested.** Computational geometry validation is not a physical-test claim. Decorative kit only; no structural rating or guaranteed universal fit.
