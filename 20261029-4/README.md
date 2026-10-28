# Veil & Shift

A four-part **moiré screen kit-card generator**, not a browser game or a static STL download. Snip sixteen runners, stand two double-slot feet, adhesive-fix a rear grating and lower a second, removable grating into the front guides. Gently shift the front ±3 mm: its angled, differently pitched apertures form changing broad interference bands against a bright diffuse backdrop. All four parts and carrier are generated with real solid operations.

## Reference-first provenance

Searched STL files under `/Volumes/ExternalHD/3d_printing_apps/` first. Read the local kit-card README; its three kit-card projects have no STL assets outside dependencies. Clicker cavities, telescoping shells and fabric links do not establish sheet/carrier construction. Local references and the old daily_app tree were read-only. Checked both galleries to avoid repeating existing mechanisms.

Downloaded **White Cat Kit Card**, Mike Kasberg (mkasberg), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Read README, LICENSE and kit_frame.scad. Parsed the actual 1,530,884-byte binary STL: **30,616 triangles**, SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**. Assumed millimeters, consistent with OpenSCAD; STL stores no units. Measured envelope **179.82 × 178.02 × 3.19 mm**, two edge-connected components at 1e-5 mm welding. Source has nonmanifold/coplanar artifacts: inspection-only, not claimed repaired or printable.

Fresh sections at Z=0.10/0.50/1.59 mm, vertex Z histogram and Y=100 rail section establish **1.6 mm sheet**, **1.6 mm carrier rails**, and low bridges at **0.21–0.22 mm**. Viewed actual generated section PNG before finalizing this design. See reference-analysis.py, reference-analysis.json, reference-sections.svg/png.

### Measured dimensions versus proposed redesign

- Retain measured **1.6 mm sheet** by default, expose 1.6–2.4 mm.
- Reinforce measured **1.6 mm rails** to 2.4 mm. Reconstruct the real connected carrier/sheet strategy, not loose pieces beside a rectangle.
- Redesign source thin bridges as accessible **0.4–0.6 mm-thick × 0.8–1.4 mm-wide** cut tabs; four per part.
- **Original proposed interfaces, not measured source fits:** two 84–100 × 54–68 mm pierced screens, two 36–48 × 12 mm double-slot feet, 6 mm slot-floor height and guide engagement. Slots are sheet + 0.10–0.35 mm TOTAL clearance. Screen faces separated 4–6 mm. Rear pitch 4–6 mm; front pitch +10–20%, slot slope 4–12°. Horizontal web 1.4–2 mm (normal width is web × cos slope, at least 1.36 mm). Front hand-slide ±3 mm; intentionally lift-out, NOT captive and no end stops.

This is a documented original parametric reconstruction of source construction principles with a new optical assembly, not cat artwork, an unchanged export, convex hull, or a reskin of a prior mechanism. No raw reference mesh or artwork redistributed. Attribution does not imply endorsement.

## Run

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs  # localhost:5492/daily-app2/20261029-4/
node browser-test.cjs
node feature-test.cjs
```

React + Vite, Three.js OrbitControls, Manifold WASM worker, fflate, locally bundled Fredoka/Rubik. Independently scaffolded and installed dependencies; reused first-party local import/export/persistence plumbing, with new grating, carrier packing, guide geometry and mechanical tests. No copied Git history or dependency tree.

Read-only keycap_generator2 README, styles.css, App.tsx, Viewer.tsx, worker, STL parser, image tracing and export modules informed concrete studio patterns: **374 px left control panel**, sticky compact brand/theme header, collapsible sections, paired slider/mm inputs, tactile raised selected buttons, source/cutout preview, source units/orientation/placement editor, large gradient-backed right viewer, dimensions/warnings/export beneath. Phone puts preview/export before stacked controls. Saved dark theme, focus outlines, large targets and reduced-motion support.

Vite base `/daily-app2/20261029-4/`. App scripts exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`; public combined site is deployed from the ROOT monorepo only. Node 22.12+ recommended.

## Parameters, all physical lengths in millimeters

| Parameter | Supported range |
| --- | --- |
| Carrier width / height | 200–240 / 110–140 |
| Screen width / height | 84–100 / 54–68 |
| Rear grating pitch / horizontal web | 4–6 / 1.4–2 |
| Front pitch increase / slot angle | 10–20% / 4–12° |
| Foot length / fixed height | 36–48 / 12 |
| Clear screen-face separation | 4–6 |
| Sheet / fixed carrier rail | 1.6–2.4 / 2.4 |
| Total guide allowance | 0.10–0.35, default 0.20 |
| Part spacing | 4–7 |
| Breakaway width / height | 0.8–1.4 / 0.4–0.6 |
| Dimple depth | 0–0.4 |

Three real mesh-thumbnail presets, round/chamfered/stepped silhouettes, bounded variations, reset, undo/redo. Impossible carrier packing is blocked, never scaled silently. Screen bottom rails are 10 mm, top rails 16 mm, side margins 6 mm. Grating holes are actual through-cuts clipped to a protected window. Tangent zero-volume cutters are skipped explicitly; no mesh repair or replacement. Rear mark resides entirely on top rail, away from apertures and guides. Max raised import stays at least 1.2 mm short of the front screen. Slots stop downward travel and constrain Y; they deliberately do not retain front against upward removal or unlimited X travel. Hold frame when sliding; ±3 mm is the supported demonstration range.

## Local image / SVG / text / icon conversion

PNG/JPEG signatures and dimensions checked before decode: ≤2 MB, ≤12 MP, ≤6,000 px side. Normalize to ≤500 px. Simple SVG ≤2,000 elements and ≤6,000 px declared dimensions; scripts, external resources/references, text and effects rejected. Supported vector fills rasterized locally; even-odd holes retained in the sampled relief. Original synthetic samples are CC0.

Image is sampled to an exact **20 × 20 grid**, with contain/cover and ±25% crop shift. Light/transparent background removal or inversion, threshold 1–254, and grayscale mode affect real mesh heights. Threshold yields selected depth or zero; grayscale yields depth × (1−intensity/255). A triangulated closed height surface is **boolean-unioned** into the rear screen's 13 mm landing; engraving subtracts it. Light/transparent holes remain unraised/unengraved inside a continuous backing: not through-holes, exact outline tracing, or automatic full 3D reconstruction from a photo. Checkerboard shows converted pixels; original source and final model are shown separately.

Text ≤8 characters and six searchable bundled SVG marks use the same geometry workflow. Raised depth 0.4–3 mm; engraving 0.4–0.6 mm preserves ≥0.8 mm floor. Footprint 4–7 mm, Z rotation ±180°, X shift ±1.5 mm, Y ±2 mm. Radial safe-zone guard rejects protrusions. Picker works on phone and desktop, with desktop drop, replace/remove and reset.

## STL import contract

ASCII and binary .stl ≤2 MB / 1,500 triangles, each axis 0.2–250 mm. Worker parses and validates. Explicit millimeter confirmation required; Z-up, Y-up or inverted-Z orientation chosen before attachment. Show source dimensions, triangle count and preview. XY scales proportionally to a 4–7 mm footprint; Z independently scales to 0.6–3 mm. Rotation/placement are real. Original source solid is boolean-unioned into rear screen landing, never replaced by a hull.

Supported input: one outward-wound closed **convex, broad flat-bottom solid without XY overhangs**. Concavities, cavities, branches, open/nonmanifold/disconnected/self-intersecting or unsupported meshes are explicitly rejected, never discarded or claimed repaired. Checks cover finite data, bounds, triangles, orientation, welded edges, self-intersections, positive volume and bed contact. Thin scaled grips under 1.2 mm XY are rejected. Changing up-axis clears asset and requests reattachment. A contact hull may be used for validation only; it never becomes printable geometry.

## State, worker, privacy and export

Everything processes locally; no uploads, API/key, remote CDN, analytics or paid service. Dependencies/fonts/WASM bundled. Personal inputs are never placed in repository. Portable JSON ≤2 MB and six local named designs carry bounded image/mesh data. Missing payload explicitly requests reattachment; restored STL is revalidated. Undo/redo retains 35 snapshots.

Debounced worker builds have request IDs and stale-result guards. Exports require the exact current state key; errors, pending imports, invalid controls, unconfirmed units and worker failure block all exports. Last-good preview is labelled and cannot silently export. Preview and STL share exact current valid meshes; browser tests compare signatures and regenerate JSON in Node.

Views: connected card, assembled, exploded, de-tabbed print layout, all four isolated parts. Actual rigid parts share geometry; insertion/phase controls only change explanatory pose, not exports. No fake thread, optics simulation or dynamics. STL stores geometry, not preview colours. Binary connected-card STL, individual four parts and Everything ZIP with all five STLs plus numbered ASSEMBLY.txt. No mislabeled 3MF.

## Printing and assembly

1. PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, three walls. Bed-flat, relief up, no supports intended. Check carrier envelope against bed.
2. Adult: snip sixteen runners and trim nubs/elephant foot without damaging grating webs or slots.
3. Stand feet parallel, double slots upward, X spacing 68% of screen width. Lower rear screen in back slots, centered, to 6 mm-high slot floors. Adhesive-fix both rear seats and cure.
4. Lower front screen into front slots **without adhesive**. Both screen bottom edges rest on floors; 6 mm engagement. Hold rear assembly and shift front ±3 mm. Front can lift out: no captive-retention claim.
5. View through gratings against bright diffuse background. Front angle and pitch difference create moiré bands; phase motion changes overlap. Contrast, lighting, viewpoint and FDM quality affect appearance. No optical performance guarantee.
6. Calibrate one foot and screen-bottom strip first. Start 0.20 mm total allowance and adjust in 0.05 mm increments for actual printer/material. Not a universal tolerance. Adhesive required at fixed rear seats; no hardware needed.
7. Small parts, cutters and adhesive: adult craft, keep from children/pets.

## Validation

See VALIDATION.md and reproducible scripts/reports. Exported float32 STLs independently checked at 1e-5 mm weld: finite nondegenerate faces, normalized normals matching winding, positive volume per component, exactly two opposite incident faces per edge, expected component counts and millimeter bounds. Both gratings and feet checked separately as well as connected card. Computational checks cover presets/extremes/imports, pairwise assembly intersections, vertical insertion, floor stops, lateral guide walls, 25 side-slide positions, projected overlap variation, accessible snips and five components after snipping. Browser exercises real imports/downloads, rejected inputs, exact preview/export, ZIP, portable assets, worker failures, touch orbit/pinch and 320/390 px layouts.

**No physical print, optical/perception, friction, strength, adhesive or stability testing performed.** Computational geometry checks do not establish physical performance.

Dependencies: React/MIT, Three.js/MIT, Vite/MIT, Manifold/Apache-2.0, fflate/MIT, Fredoka/Rubik/SIL OFL. Reference attribution above; synthetic samples CC0.
