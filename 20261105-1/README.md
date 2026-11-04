# Pitch & Breeze

A reference-grounded, six-part pitched wind-rotor kit card. Snip 24 real breakaway runners, glue a two-tongue mast into its deck, bond three equal blades at a chosen 20–40° pitch in open hub notches, then mount the rotor on an external M3 axle and 12 mm sleeve. Turn gently by hand or experiment with mild desk airflow. **Physical printing, airflow performance, balance, stability, bearing friction and adhesive strength have NOT been tested.** No motor/air-compressor operation is intended.

## Reference first, not a relabelled paddle wheel

Local STL candidates under `/Volumes/ExternalHD/3d_printing_apps/` were inspected first: the Keycap Studio three-component switch template is unrelated to a sheet assembly; Fidget Fabric's eight-mm interlocked link is also unsuitable. The selected public reference is Mike Kasberg's **White Cat Kit Card**, [upstream](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), CC BY 4.0. See REFERENCE-LICENSE.txt and reference-analysis.json for attribution, download URL, hashes, component analysis and actual measured sections. No raw third-party mesh is bundled. The original fan-art outline is not reproduced.

The downloaded binary reference SHA-256 is `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. STL units are assumed millimeters, not embedded metadata. Parsed bounds span approximately 179.82 × 178.02 × 3.19 mm. The source splits into 27 edge-adjacent components including degenerate/duplicate pseudo-components; it is NOT used as a validated printable mesh. Sections at Z=.10, .215 and 1.59 mm measure 4.50 × 1.70001 mm sockets; a principal sheet plane is 1.60 mm, and low runners reach .21–.22 mm. See `evidence/reference-sections.png` and the reproducible `reference-analysis.py`.

**Measured versus proposed:** reconstruct 4.40 × sheet mast tongues and 4.50 × 1.70 mm sockets by default (.10 mm TOTAL clearance). The .40 mm blind floor, .20 mm tongue-tip gap, .40–.60 mm stronger breakaway runners, M3 bearing, three open radial blade-root seats, blade silhouettes and actual pitched rotor assembly are new design decisions, not source measurements. Open root notches deliberately require a paper angle jig and adhesive; they do not mechanically index or retain blade pitch. This adapts the reference's sheet/slot/carrier construction to a new six-part assembly, rather than copying its mesh. Unlike the earlier four-paddle wheel, three pitched blades act around an axial flow direction, with a coaxial metal axle and external spacer.

## Studio and workflows

React + Vite, Three.js/OrbitControls, Manifold WASM in a Web Worker, fflate ZIP, locally bundled Fredoka/Rubik fonts. No CDN, account, upload, API key or service. Maker-studio layout follows the inspected read-only Keycap Studio: 374 px left control rail, paired range/numeric inputs, collapsible sections, raised tactile buttons, saved light/dark theme, large right viewer. Phone layout puts preview, dimensions and export first. Assembled, exploded, flat connected card, clean plate and every isolated part use the same current mesh. Rotor angle is explicitly preview-only; it does not change print orientation. Axle line is explanatory and not exported.

Three real presets, rounded/clipped/scalloped deck and matching blade tips, text and six searchable bundled icons, local named designs, undo/redo, portable JSON with bounded embedded import payloads. Missing image payloads explicitly request reattachment. STL does not encode preview colours.

### Image / SVG to actual geometry

File picker or drag/drop: actual PNG/JPEG, or sanitized simple SVG paths/shapes rasterized locally. Maximum 2 MB, 12 MP and 6,000 px per side; normalized to <=500 px. SVG <=2,000 simple elements, no scripts, references or external resources, rasterized at 256 px. Text must be flattened. Images use an exact displayed **20 × 20 luminance sample grid**, not a full 3D reconstruction from a photo. Fit/cover crop, background light/dark inversion, X/Y crop shift ±25%, threshold 1–254 or grayscale height mode. A bounded triangular height-field cutter is Boolean-subtracted from the apron: .4–.6 mm depth, 4–7 mm XY footprint, rotation ±180°, placement X±1.5/Y±2 mm. Bright holes remain unengraved with full backing; interpolation means pixel edges are not exact vector traces. Checkerboard shows the actual sampled cutout. Art stays within a 5.8 mm radius keep-in region at deck Y=-14 mm, away from both sockets and mechanism. Minimum backing is 1.0 mm. Empty conversion and invalid transforms disable export.

### STL to actual integrated engraving

Strict ASCII/binary reader; source preview and dimensions, explicit millimeter confirmation (STL has no units), Z-up/Y-up/-Z-up before attachment, proportional XY footprint scale, independent bounded depth, rotation, center and placement. The original accepted mesh is Boolean-subtracted from the deck; no convex-hull replacement. Units are confirmed before integration. Choose a closed, outward-wound, single connected **convex flat-bottom** solid with no overhang outside its bed footprint. Unsupported concavities/cavities are rejected explicitly, not repaired or discarded. Limit 1,500 triangles, 2 MB and .2–250 mm each axis. Finite vertices, nondegenerate faces, edge incidence, winding, positive volume, self-intersection, convexity and >=25% flat bed contact are checked before modeling. Reset transforms, replace/remove import and return to defaults are available. Synthetic sample PNG/JPEG/SVG/ASCII/binary STL files are bundled; no personal uploads are committed. All file processing remains local.

## Supported ranges / mm unless noted

| Setting | Range |
|---|---|
| Card X / Y | 180–240 / 220–300 |
| Blade radial span / chord | 20–32 / 14–20 |
| Actual blade assembly pitch | 20–40 degrees |
| M3 bearing diameter | 3.2–3.6 |
| Sheet thickness | 1.6–2.4 |
| Total mast/socket clearance | .10–.30 |
| Part spacing | 3–5 |
| Breakaway tab width / thickness | .8–1.2 / .4–.6 |

All three blades always match. Hub radius 15.5 mm, root shoulder radius 16 mm, radial root length 4.4 mm; open notch width = 4.4 cos(pitch) + sheet sin(pitch) + clearance. The notch is a projected clear insertion corridor, not a close oblique mortise; adhesive and jig are mandatory. Axis height = upper rotor-radius bound + 10 mm. A 12 mm external sleeve guarantees analytic mast separation throughout rotation; the full rotor is additionally collision-checked at 15° intervals. Card envelope and minimum backing are checked. Impossible inputs stop export rather than using a stale last-good mesh.

## Print / assembly

Print **either** one connected card **or** six clean parts, flat Z=0, PLA/PETG, .16–.20 mm layers, .4 mm nozzle, supports not intended. Calibrate with deck + mast first; no universal fit is promised. Snip 24 runners outside functional interfaces; glue the mast into its two blind deck sockets. Radially insert and bond three blades in a same-handed pitch using a paper angle jig. Align each root mid-thickness to hub mid-thickness; fully cure before mounting. Supply **M3 × 35 mm screw, M3 locknut, two M3 washers, 12 mm long M3 sleeve/spacer, adhesive, paper jig**. Sequence: screw → washer → hub → 12 mm sleeve → mast → washer → locknut. Leave rotor free, not clamped; external hardware retains it. Check by hand through a full revolution. Secure deck to the desk if needed. Gentle airflow only. Do not overspeed, motor-drive or use compressed air. Adhesion and aerodynamic force are unverified. See the on-screen numbered guide / ZIP ASSEMBLY.txt.

## Run, export, verify

```
npm install
npm run dev
npm test
npm run predeploy
python3 serve-production.py
node browser-test.cjs
node studio-test.cjs
node personalization-test.cjs
node mobile-layout.cjs
node extra-validation.mjs
```

Requires modern WebGL/Worker-capable browser and Node 22.12+. `serve-production.py` serves the actual production base at `http://127.0.0.1:5941/daily-app2/20261105-1/`. Manifold WASM is bundled by Vite; parsing/modeling run off the main thread, requests are debounced and stale results ignored. Current-state keys gate preview/export. Every worker result is checked for finite nondegenerate faces, outward winding, closed welded edges and positive volume per single part.

Prominent per-part **binary STL** and **Everything ZIP** exports include the connected-card alternative, six clean STLs, portable design JSON and numbered instructions. The clean plate has six separate solids, not fused moving parts. Everything ZIP is not 3MF. Generation and export use exactly the current checked worker result; unsupported edits disable export. Names and displayed X/Y/Z dimensions are in millimeters.

`geometry-validation.json` records defaults, every preset, individual bounds, combined extremes, silhouettes and both import-derived geometries. Checks include float32 STL serialization and normals, closed directed edges, positive component volumes, expected bounds/components, supported footprints, no plate overlaps, 24 actual runner cuts yielding carrier + six intact parts, blind floors/bores, mast insertion and radial blade insertion, full-turn assembly collision samples and analytic separation bounds. Browser reports check real imports/downloads, changed geometry fingerprints, JSON reconstruction, invalid files, all controls, saved designs, worker failure/recovery, local-only requests, theme, desktop/mobile layout, touch orbit/pinch and real ZIP contents. `extra-validation.json` probes the imported SVG ring hole and remaining backing in the final Boolean solid. **Computational checks are not physical print or airflow tests.**

Fonts SIL OFL 1.1; Manifold Apache-2.0; Three.js MIT; fflate MIT; reference CC BY 4.0. Generic editor/import/export infrastructure is adapted from earlier Daily Object Lab studios; the pitched rotor geometry and assembly checks are new. The old daily_app tree and all reference projects remain read-only.
