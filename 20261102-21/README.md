# Cycloid & Race

A reference-grounded **five-part physical kit-card generator**, not a timing simulator. Snip a connected carrier, assemble paired cycloidal and straight rails on a socketed base, then gently release two identical external balls. An original reconstruction of measured sheet/carrier interfaces; neither a source-STL re-export nor a previous generator's mechanism reskin.

## Run and build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite; Three.js OrbitControls; Manifold WASM in a module Worker; fflate ZIP; locally bundled Fredoka/Rubik. No CDN, API, account, paid service or uploaded personal files. App base `/daily-app2/20261102-21/`. Root monorepo deploy publishes the combined site; per-app scripts are available but not used to replace it.

## Actual mesh reference and attribution

Mike Kasberg, **White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. Source license and README retained as text. Raw model was downloaded for read-only analysis, not bundled or published. No spacecraft artwork is reproduced.

SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Binary STL: 30,616 triangles; assumed millimeters, 179.820 × 178.020 × 3.190 mm; 27 edge-adjacent components including nonwatertight faces. This is not claimed repaired or directly printable. See `reference-analysis.json`, `reference-measurements.json`, `reference-measure.py` and `evidence/reference-sections.png` for independently re-parsed mesh bounds, components, Z-plane counts and actual sections at .1, .5 and 1.59 mm.

**Measured source → deliberate reconstruction:** sheet planes 0/1.60 mm; rectangular sockets 4.50 × 1.700012 mm; low runner planes .21/.22 mm. Keep default sheet 1.60 mm and eight 4.50 mm tongues. Receiving sockets are deliberately redesigned to `(4.50 + total clearance) × (sheet + total clearance)`; .10–.35 mm TOTAL is a proposed calibration range, not a measured source tolerance. Twenty stronger .4–.6 mm breakaway runners touch side webs away from functional tongues and rolling edges. Eight adhesive joints replace any unverified source retention behavior.

Local candidates were searched first under `/Volumes/ExternalHD/3d_printing_apps/`. Actual local switch template and diamond-link meshes were parsed, hashed, dimensioned and component-counted in the analysis file; they are not appropriate sheet-carrier references. Relevant Keycap Studio and Weave READMEs were inspected. Kit Card Studio's README describes an independently procedural house and supplies no suitable reusable STL asset, hence the documented public sheet reference.

Visual/interaction reference (read-only): `keycap_generator2` README, styles, App, Viewer, worker, imageTrace, STL parser and exporter. Concrete patterns adapted: 374 px left rail, collapsible labeled controls, slider/numeric pairs, tactile depressed selections, checkerboard image cutout, saved theme, large right-hand viewer, preview-first phone layout, source editor and current-result worker gating. Studio plumbing reused from earlier original daily apps; track geometry, assembly, guide and validation are new.

## Physical design and ranges — millimeters

| Parameter | Supported range |
|---|---|
| Card width / height | 210–240 / 225–250 |
| Track horizontal span | 64–80 |
| Sheet / minimum rail web | 1.6–2.4 / 9 |
| Inside rail gap / external ball diameter | 3–4 / 6–8 |
| Lane separation | 20–26 |
| Total socket clearance | .10–.35 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |

Source-derived tongues remain 4.50 mm wide. Invalid combinations, artwork outside safe zones, insufficient backing, missing unit confirmation and invalid source geometry block export. Base silhouettes: rounded, square, clipped. Three real geometry presets and bounded variations. Every preset gets its own generated thumbnail.

Cycloid top edge uses `r=span/π`, `x=r(t−sin t)`, `z=9+r(1+cos t)`, 0≤t≤π, 64 segments. Straight edge joins its endpoints. Both parts start above a 9 mm continuous web and carry two source-derived base tongues. Rail pairs have an inside gap smaller than ball diameter; lane clearance is checked. The ball centre sits a distance `sqrt((diameter/2)^2−(gap/2)^2)` normal to the edge at paired inner contacts. Its finite-radius path is not the ideal point-mass curve. **No quantitative brachistochrone timing, synchronized release or guaranteed race outcome is claimed.** Balls exit freely into a user-supplied tray. Start gently a little forward of the steep initial edge.

## Imports and real geometry integration

All processing stays locally in the browser. File picker works on phone/desktop; single-file drop supported. Synthetic/public fixtures in `public/samples/` allow PNG, JPEG, SVG, ASCII STL and binary STL trials without personal files. Personal source files must not be added to the repository.

- PNG/JPEG: validate magic bytes and dimensions before decoding. ≤2 MB, ≤12 MP and ≤6,000 px per side; normalize to ≤500 px. Fit/cover and ±25% crop shift; light/transparent or dark background removal; threshold 1–254 or grayscale relief. Rebuild a closed bounded **20×20 sampled height surface**, Boolean-subtracted from the actual apron. This is **2D-to-relief**, not single-photo 3D reconstruction. Holes survive to the sampling resolution; this is not exact vector tracing. Checkerboard displays the actual sampled removed background. Source and converted images are shown.
- SVG: ≤2 MB; simple filled paths/shapes only, ≤2,000 elements, bounded ≤6,000 px side; scripts, references, external resources and effects rejected. Rasterized locally at 256 px, then the same sampled conversion. Holes follow browser fill rules and retain sampled bright centres.
- STL: actual binary or complete ASCII content, ≤2 MB, ≤1,500 triangles, .2–250 mm in each source axis, finite coordinates; welded .00001 mm edge/winding checks, one connected positive-volume component, nondegenerate faces, self-intersection testing. Explicitly **convex, broad flat-bottom, support-free solid** subset only. Concave, hollow, disconnected, open/nonmanifold, overhanging or unsupported meshes are rejected with actionable errors. No repair or convex-hull replacement. Set Z-up/Y-up/inverted Z before attaching, confirm unitless STL coordinates represent millimeters. Show oriented source dimensions and 3D preview; XY scales proportionally, Z independently controls depth. Use actual triangles as a Boolean engraving tool, not unchanged re-export.

Import footprint4–7 mm; depth .4–.6 mm; rotate±180°, X±1.5/Y±2 mm. Safe keep-in radius6.5 mm on front apron at Y=-24 mm. A >=1 mm backing and separation from sockets are enforced. Engraving-only preserves the sheet and track interfaces; raised art is deliberately unsupported here. Built-in text and six searchable bundled icons use this real image-to-engraving path. Remove/replace/reset return to defaults. Transparency composites onto selected background.

## State, views and exports

Debounced heavy geometry/CSG and STL validation run in the Worker. Loading/error/success states, generation IDs and exact parameter/source keys block stale results and exports. Invalid edits may leave a visibly labeled last-good preview but **cannot export it**. Preview and export share the exact validated geometry; displayed fingerprint is checked against downloaded bytes.

Assembled, exploded, connected-card, de-tabbed plate, base-only and every isolated-part view; see-through base; touch orbit/pinch, fit/top/zoom; saved coherent dark theme; accessible generous focusable controls; reduced-motion styles. Preview positions are geometric rigid assembly placements, not physics simulations. Color is preview-only: STL stores no colors.

Undo/redo (bounded35 states), six local named designs, JSON save/open. Portable JSON embeds bounded normalized PNG and source mesh payloads, not file paths. Missing/oversized/invalid payloads request reattachment rather than pretending restoration. Maximum JSON2 MB; portable normalized image≤250k pixels.

Binary STL for one connected card, five individually closed clean parts, or a five-component de-tabbed plate. Per-part buttons and Everything ZIP include connected-card, all five clean STLs and numbered current-fit instructions. All print orientations are bed-flat at Z=0; assembled visual overlap is never exported as a union. Download filenames contain source and dimensions. No mislabeled 3MF.

## Printing and assembly

See [ASSEMBLY.txt](ASSEMBLY.txt) and the in-app numbered guide. PLA/PETG, .4 mm nozzle, .16–.20 mm layers, three walls; no supports intended. Try one rail/base fit first. Snip twenty accessible runners outside clean parts, file nubs, lower each matched rail pair into four sockets, glue eight joints and cure with rails parallel. Adhesive is required; no snap/friction retention claim. Supply **two identical 6–8 mm balls, catch tray, snips and adhesive**. No hardware-free claim; balls are the required external hardware. Ball and small-part choking hazards; supervise children, wear eye protection when snipping, catch loose balls. Not load-bearing.

## Validation and limits

`npm test` independently parses final float32 binary STL: byte count, finite coordinates, nonzero faces, normal/winding agreement, welded edge incidence exactly2 with opposite direction, positive volume of **each** component, expected dimensions, Z=0. Defaults, all presets, all parameter extrema and image/STL-derived builds are tested. CSG checks cover assembled pairwise collisions, vertical insertion paths, all eight clear slots, flat-plate separation, one connected card, twenty snip cuts leaving carrier+five intact parts, equal edge endpoints and monotonic descent. Bright image holes are probed in actual solids. Upper slices at runner height and near the sheet top remain inside their .05 mm first-layer footprints. A 48-segment finite-radius sphere clears all assembled parts at 25 positions on each path, starting cycloid t=.4 rad, with a disclosed .015 mm numerical contact lift. This checks obstructions, not rolling dynamics; browser-imported outputs receive the same checks.

Browser scripts exercise real file inputs/downloads, changing pixels/threshold/depth/placement, invalid files/settings, reset/remove, preview/export fingerprints and JSON regeneration, source axis changes, text/icons/SVG, all views, ZIP meshes, saves/history, worker failures/stale results and mobile touch/overflow. Reports/screenshots record performed checks. Production prefix is tested, not only Vite development.

**Computational geometry checks are not physical testing.** Physical printability, ball behavior, timing, snip force, friction, fit, glue strength and durability have not been physically tested. Finite-radius balls and polygonal rail approximation prevent interpreting this as a precision time comparison.
