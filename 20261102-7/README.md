# Polar & Project

A local React/Vite maker studio for an actual two-part **stereographic-projection kit card**. Snip eight runners, seat an upright meridian ring in a pierced tangent-plane base, then lay three light front-face cords to explore how a circle projects from its north pole onto a plane. This is a physical educational assembly, not a browser game or an optical projector. The ring represents a meridian, not a full sphere. No physical print, fit, strength, accuracy or assembly test is claimed.

## Reference-first evidence and original reconstruction

Read local candidate instructions and parsed actual local switch template and diamond link under `/Volumes/ExternalHD/3d_printing_apps/` first. Their cavities and 8mm link geometry are unsuitable for a flat sheet kit; measurements/rejection reasons are in reference-analysis.json. Selected/downloaded **White Cat Kit Card / Printables865769**, by **Mike Kasberg**, https://github.com/mkasberg/white-cat-kit-card , **CC BY4.0**, https://creativecommons.org/licenses/by/4.0/ . Source README and full license checked; license in REFERENCE-LICENSE.txt. Actual binary STL SHA-256:

`5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`

Mesh:30,616triangles,179.820×178.020×3.190mm,27 edge-adjacent components, nonwatertight. Units assumed mm (STL has no metadata), corroborated by source sheet dimensions. Main sheet0–1.60mm; four socket loops4.50×1.700012mm; low runner planes0.21–0.22mm. Actual measured cross-sections at Z0.10,0.50,1.59mm viewed in evidence/reference-sections.png. Run `python reference-measure.py /path/to/downloaded.stl` with trimesh/numpy/matplotlib/scipy to reproduce. reference-measurements.json records fresh measurements; reference-analysis.json separates measured data, proposed fits and new features. Raw STL is **not bundled**. Source was inspected, not repaired or re-exported.

Preserved source structure: default1.60mm sheet,4.50mm socket length, narrower matching tongues, unioned low breakaway runners holding parts in a frame. Original reconstruction replaces spacecraft parts with a new trigonometric meridian and deck, two shouldered seats, ray eyes and entirely new two-bay carrier packing. Proposed allowance0.10–0.30mm total, variable sheet thickness and0.4–0.6mm bed-aligned runners are new printer-dependent choices, not measurements or universal fits. Two fixed joints need compatible adhesive. Tongues equal sheet depth and finish flush under the deck.

Primary read-only visual/interaction reference: keycap_generator2 README.md, src/styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts. Concrete studio patterns:374px scrolling left panel, compact sticky header, tactile raised/pressed buttons, labelled collapse sections, paired sliders/numeric fields, source/cutout checkerboard, saved light/dark theme, worker builds and current-state export gating. Phone is preview/dimensions/export first, controls stacked below. Local Fredoka/Rubik fonts. Reused preceding Daily Object Lab editor/import/serializer/test infrastructure; this kit geometry, packing, poses and projection/insertion tests are new. No reference project Git history/dependency tree copied or modified.

## Geometry and assembly

For radius R and angle φ measured from south, the ring mark is `(R sin φ, R(1−cos φ))` in XZ; north is `(0,2R)` above the base. Plane landing is `x=2R tan(φ/2)`. Three angles are step,2×step,3×step; change radius/step to alter all actual drilled positions. At90° landing=2R; north has no finite plane image. Witness ticks by each landing are engraved geometry. The ring is an actual annular Boolean solid, not a filled disc or convex hull.

Eight accessible tabs attach the two parts to a connected frame. Snip1.6mm outside contours and clean nubs. Lower ring tongues vertically into two sockets; shoulders seat on the deck. Dry-fit/calibrate first, then bond both fixed joints. Tips are flush underneath, so the assembled base sits flat. No moving or snap-fit retention is claimed.

**External materials:** compatible adhesive, three light threads around250mm each, low-tack tape. Lay threads **in front of** the solid ring, tape at north and respective marked ring points, pass through matching base holes and tie below with minimal tension. Do not try to route a straight thread inside the solid ring plane. Base cord holes use front-plane Y=−sheet/2−0.35mm. Preview coloured thin rays are ideal front-face construction guides, **not exported plastic**. Tape/rim contact and cord diameter cause approximate physical alignment; no precision or optical claim. No-cord alternative: inspect the marked geometric construction; visible physical rays require supplied thread. See ASSEMBLY.txt and the in-app numbered guide.

## Run, generation and export

```
npm install
npm run dev
npm run predeploy
npm test
node serve.mjs
node browser-test.cjs
node studio-test.cjs
```

Production base `/daily-app2/20261102-7/`. Per-app predeploy/deploy scripts and gh-pages installed; actual combined publication uses root deploy/ flow. Heavy CSG and STL preflight run in a local Web Worker using bundled Manifold WASM. Bounded curves(128segments),20×20image grid,100ms debounce, request IDs and exact state keys. Every error/invalid/pending edit blocks **all** exports, even when the last valid preview remains visible. No stale last-good download. Preview and export use the same exact current final meshes; UI signature is compared with downloaded bytes. Canonical binary STL serialization normalizes float32 signed zero and triangle ordering for Node/browser agreement.

Assembled, exploded, connected-card, clean print-plate and isolated-part views use the same meshes. Exploded placement is illustrative only. Per-part and connected-card STL, and Everything ZIP(card+two part STLs+numbered assembly guide). All printable geometry is bed-flat. STL does not contain preview colours or the external-thread guides. No 3MF claims. Local generation/export needs no server/API key/CDN.

## Supported ranges

All physical dimensions in **mm**; angular step/rotation explicitly degrees.

| Control | Range |
|---|---|
| Card width / height |225–260 /100–145|
| Meridian radius / radial band |30–38 /5–7|
| Angular step |25–30degrees, three marks|
| Sheet / total fixed-seat allowance |1.6–2.4 /0.10–0.30|
| Cord eye diameter |2–2.8|
| Part spacing |3–5|
| Runner width / height |0.8–1.4 /0.4–0.6|
| Import footprint / engraving depth |4–7 /0.4–0.6|
| Artwork rotation / X / Y |±180degrees /±1.5 /±2|

Minimum analytical radial eye wall1.1mm at narrowest supported band/largest eye; faceting and printing can alter practical fit. Unsupported packing blocks export with guidance, never clips parts. Socket4.50×(sheet+allowance), tongue(4.50−allowance)×sheet. Print a seat/eye calibration sample first or use an individual part; clean first-layer expansion before evaluating allowance.

## Real image and STL workflows

Choose/replace with native desktop/phone file picker or drag one file onto Import. Source and final geometry are shown; remove/reset restores built-in defaults. Synthetic CC0 samples for PNG,JPEG,SVG,ASCII STL and binary STL are bundled in public/samples. No personal inputs or private references are in the repository.

- **PNG/JPEG:** actual signatures and dimensions validated;16bytes–2MB,≤12MP,≤6000px side. Normalize to≤500px, composite transparency against selected light/dark background, contain/cover and crop±25%; luminance sample to20×20. Threshold1–254 or grayscale gives a triangulated height surface, closed with sides/back, then Boolean-cut into the protected base tag. Threshold height is linear between samples, not exact vector tracing. Bright/transparent holes leave untouched backing. Actual checkerboard shows sampled cutout. Depth0.4–0.6mm,≥1mm backing. **2D-to-relief, not full3D reconstruction from one photo.**
- **Simple SVG:**≤2MB,≤2000allowed basic shapes,≤6000px side. Reject scripts, external resources, effects and references. Rasterize locally256×256 then same sampled process; ring holes preserved in final cuts. Text(up to8characters) and six searchable local icons go through this same real geometry workflow. Only engraving supported, to keep sheet thickness and printable backing.
- **ASCII/binary STL:** complete content and topology validated,≤2MB,≤1500triangles,0.2–250mm each source axis. Explicitly confirm **millimeters** because STL is unitless. Z/Y/−Z orientation selected before attachment (axis change clears source and requests reattachment); show oriented source dimensions and real3D source. XY proportional footprint scale, independent Z engraving depth, rotation, placement, reset. Exact mesh solid is Boolean-subtracted into tag; never replaced by a convex hull. **Deliberately supports one closed outward connected convex broad-flat-bottom solid only**. Reject nonmanifold/open, inward, disconnected, self-touching/intersecting, concave, cavity, slender/overhanging or inadequately bed-supported inputs with actionable errors. No silent repairs. Parser uses a bottom hull only as a validation boundary, never as replacement geometry.

Safe tag is radius6.5mm at base y−12, away from two sockets and three cord landing eyes. All source processing is local browser-only. JSON save/open and six named local designs include bounded source payloads; missing images request reattachment, never pretend to be restored. Undo/redo includes assets. Source metadata is not uploaded or committed.


## Printing and validation

PLA/PETG,100%scale,.16–.20mm layers,.4mm nozzle,3perimeters. Flat sheet/card support-free by computational bed-footprint checks; inspect slicer before printing. Snip runners carefully, clean nubs and calibrate one joint. Do not tension/load the ring. Small cut parts/cord are not a toy or child-safety claim. **No physical print, assembly, adhesive, strength or thread-tracking test performed.**

See VALIDATION.md, executable scripts and JSON reports. Independent float32 binary-STL validation checks nonempty data, exact byte count, finite coordinates, normalized normals/winding, nondegenerate faces,1e−5mm welded edges(two opposite incident triangles), positive volume per component, expected dimensions and bed Z=0. Actual CSG checks: separate assembled solids, socket/tongue presence, shoulder stop, full vertical insertion, clean print layout,8safe cuts releasing2parts+carrier, frame envelope and support footprints. Trigonometric formula/collinearity independently checked at all three angles;123front-ray probes avoid plastic. These are geometry checks, not a physical performance test.

Production Playwright tests select actual PNG/JPEG and ASCII/binary STL fixtures and download actual generated bytes; compare changed pixels/threshold/depth/crop, source mesh transforms, defaults, reset and exact UI/Node/export signatures. Each import-derived output gets the same mesh/assembly checks. Tests also cover malformed/truncated/open/nonmanifold/concave/excessive files, empty images, unsafe transforms, every preset, extrema, SVG holes, all6icons/text, ZIP contents, local/JSON portable assets, missing-payload errors, undo/redo, worker abort/recovery/stale edits, desktop left-panel layout,320/390px no-overflow preview-first phone, touch orbit/pinch, saved dark theme and focus. Combined gallery syntax/render and production path/WASM checked before authorized deployment.

Dependencies installed independently: React/Vite, Three.js/OrbitControls, Manifold3D(Apache2), fflate, Fontsource Fredoka/Rubik(SIL OFL). Playwright development-only. Synthetic sample images/STLs in public/samples are CC0; no private reference or user-uploaded file is committed. Source attribution applies to design reference, not to a redistributed raw mesh.
