# Trace & Tally — Rolling Distance Kit Studio

An original four-part **flat-pack kit-card** maker. Snip sixteen real runners, bond a shouldered flat axle into the pointer handle, slide on the graduated wheel, then side-insert and bond its keeper. Hold vertically over a paper path and roll without slipping; count full revolutions plus fractional tick divisions. This is a customizable craft tracing aid, **not a certified measuring instrument**. Calibrate against a known 100 mm line.

## Run / build

Requires modern Node and browser WebGL/Web Workers.

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Vite base: `/daily-app2/20261030-2/`. The app has the required `predeploy: npm run build` and `deploy: gh-pages -d dist`; public publication uses the parent monorepo's combined `deploy/` flow. No APIs, paid services, remote imports, fonts or CDN runtime resources.

## Reference-first evidence and attribution

Actual inspected STL: **White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**; license reproduced in `reference-LICENSE.txt`. Download URL, SHA-256, dimensions, component counts, sockets and three cross-sections are in `reference-analysis.json`, reproduced by `reference-inspect.py` using trimesh/numpy/matplotlib and the documented temporary download. Raw source is NOT redistributed.

Binary STL SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. It has 30,616 triangles, bounds about 179.820 × 178.020 × 3.190 mm, 27 edge-adjacent components and is not watertight. This source defect is recorded; we do not repair or export that mesh. See `evidence/reference-sections.png` for actual Z=.10/.50/1.59 mm cuts. Measured sheet planes are 0 and 1.6 mm; four socket loops measure 4.5 × 1.700 mm; low runner Z planes are .21/.22 mm.

The original reconstruction retains **bed-flat sheet construction, rectangular perpendicular sockets and a connected breakaway carrier**. A 4.4 mm axle neck plus .10 mm total allowance reproduces the measured 4.5 × 1.7 mm socket at 1.6 mm sheet. Default .15 mm allowance, the 8 mm shaft, wheel/bearing, keeper, graduations, handle shape, .4–.6 mm runners and 2.4 mm carrier are **proposed redesigned features**, not measured source dimensions. Two fixed joints require adhesive. Nothing claims source-identical kinematics or printed performance.

Local candidates were searched and parsed first: `keycap_generator2/public/templates/clicker_template2.stl` (three switch components), and `fidget_fabric_generator/public/templates/diamond-link.stl` (8 mm tall interlocking link). Neither provides a suitable sheet/socket kit reference. Their hashes, dimensions and reasons are recorded. The original `daily_app` gallery and both reference project trees remain read-only. `idea-audit.json` records duplicate avoidance against both galleries.

### Studio interaction reference

Read-only inspection of `keycap_generator2/README.md`, `src/styles.css`, `App.tsx`, `Viewer.tsx`, worker, STL parser, image tracing and export modules informed: a 374 px left control rail, collapsible labelled controls, paired numeric/range inputs, tactile raised buttons, lavender-grey desk, coral selection states, locally bundled Fredoka/Rubik, source/cutout previews, saved dark theme, current-result worker/export gating, print/assembled/exploded/isolated views, and preview-first phone layout. Reused local studio plumbing from the previous daily app is adapted for an entirely different four-part assembly; source meshes, reference Git history and dependency trees are not copied.

## Meaningful parameters (all lengths mm)

| Parameter | Supported range |
| --- | --- |
| Card width / height | 130–180 / 100–130 |
| Handle length | 55–75 |
| Wheel diameter | 30–44 |
| Graduations | 8, 12, 16 |
| Radial running clearance | .20–.50 |
| Total fixed socket/key allowance | .10–.35 |
| Sheet thickness | 1.6–2.4 |
| Part spacing | 4–6 |
| Tab width / thickness | .8–1.4 / .4–.6 |
| Grip groove depth | .2–.5 |

Three real presets have actual model thumbnails; three grip silhouettes change geometry. Undo/redo, eight-character local text relief, searchable bundled SVG marks, preview-colour swatches, six named local designs and portable JSON save/open are working. STL contains geometry, **not colours**. Every current mesh receives closed-manifold/winding/finite/volume preflight in the worker. Invalid input blocks export; a last-good preview is labelled and cannot silently export.

## Image-to-model (PNG / JPEG / simple SVG)

Files remain on-device. Limit 2 MB; PNG/JPEG content headers checked before decode; ≤12 MP, ≤6,000 px/side, normalized to ≤500 px. Simple SVG only (no script, external resource, text, filters or active references); ≤2,000 elements, rasterized locally to 256 px. SVG fills retain holes through rasterization. Synthetic `public/samples/` include PNG, JPEG and a ring SVG.

The source is fit/cropped and panned into an explicit **20 × 20 sampled grayscale grid**. Choose light/transparent background removal or dark background inversion. Threshold 1–254 creates silhouette relief heights, or grayscale maps darkness continuously to height. A triangulated height surface and closed backing are CSG unioned into the protected handle medallion; rotation, physical footprint (4–7 mm), ±1.5/±2 mm placement and depth (.4–3 mm) change exported geometry. Engraving uses subtraction with .4–.6 mm depth and preserves at least .8 mm backing at minimum sheet thickness. Bright/transparent holes remain unraised or unengraved, **not through-holes in the backing**. A checkerboard shows the actual sampled cutout, alongside the source. This is explicitly **2D-to-relief conversion, not full 3D reconstruction from a photograph**. Details below sampling resolution may disappear.

## STL-to-model (ASCII and binary)

Local file-picker and drag/drop work on desktop; file-picker works on phones. ≤2 MB, ≤1,500 triangles, each dimension .2–250 mm. Strict finite/degenerate/welded-edge/consistent-winding/positive-volume/one-component/self-intersection checks precede modeling. Unsupported open, concave, hollow, branching or overhanging meshes are rejected with actionable errors. Supported contract: one **closed outward convex solid** with a broad flat Z-down footprint (≥25% of XY bounding rectangle), no overhang beyond that footprint. This bounded contract is explicit; **no convex hull replacement or repair is performed**. The hull in the parser is only used to validate bottom contact, never as output geometry.

Select Z-up / Y-up / upside-down before attaching. See the actual oriented source preview and source dimensions. Explicitly confirm millimeters because STL carries no unit metadata. XY scales proportionally to chosen 4–7 mm footprint, Z independently to .6–3 mm; rotate and place within the safe medallion zone. The original source mesh is genuinely solid-unioned to the handle with .15 mm embedding, never re-exported unchanged and never allowed into the bearing, rim or socket. Reset transforms, replace/remove source, reset image settings and return to defaults are supported. Limits/transforms validate before heavy work; a Web Worker with local Manifold WASM performs bounded CSG, debouncing and stale-response guarding.

## Saving and privacy

No source uploads or external requests. Named designs use this browser's localStorage, with quota errors exposed. Portable JSON ≤2 MB includes bounded normalized image data or original validated mesh vertices, not unverifiable local paths. Missing image payload asks for explicit file reattachment and blocks export. Reopened STL payloads are revalidated. Bundled fixtures are synthetic (wedge, gem, ring and grayscale art), not personal input or third-party mesh copies.

## Physical construction / honest limits

Print all parts face-up at Z=0, PLA/PETG, .16–.20 mm layers, three walls, 100% scale, supports not intended. Test clean parts before a full card. Calibrate both fixed socket allowance and running clearance for your printer/material.

1. Clip sixteen runners at accessible points about 1.6 mm outside parts, then trim nubs. Wheel runners attach to its **outer rim**: carefully flush-trim/smooth without flattening the rim, then recalibrate. For best accuracy print the clean wheel STL separately.
2. Turn axle upright, lower its narrow neck into handle socket, stop at shoulder, bond that fixed neck joint and cure.
3. Lower wheel over free axle tip, ticks outward. The bearing clears the **diagonal of a rectangular shaft**, so it is a simple faceted plain bearing with play, not a precision round journal.
4. Insert keeper tail sideways through axle slot until wide head stops it. Bond keeper to axle only; keep adhesive off wheel. The overlap retains the wheel in both axial directions, but fixed-piece seating relies on adhesive, not hidden snap retention.
5. Align the double zero tick with the engraved handle pointer, hold over a paper line and roll without slipping. Read full turns plus fractional divisions; no automatic revolution counter. UI gives actual 192-sided exported perimeter `192 × D × sin(π/192)` and distance per division; ideal `πD` differs slightly. Shrinkage, facets, bearing play and slip dominate accuracy. Calibrate against a known 100 mm line.

Hardware-free printed assembly; adhesive is a required consumable. Small parts/cutters: adult craft. Assembled preview rotation is ideal, not a rolling/slip/force simulation; exploded positions explain the assembly, not printable orientation. Export always uses flat actual parts.

**No physical print, accuracy, fatigue, wear, adhesive or strength tests were performed.** Computational geometry/assembly checks are distinct from those unperformed physical checks.

## Export and validation

Prominent connected-card STL, every individual-part STL, and Everything ZIP (all five STL files plus numbered `ASSEMBLY.txt`). Exact same checked meshes/parameters feed preview and binary STL; UI mesh signatures are compared with browser-downloaded bytes and portable JSON reconstruction. The connected carrier is one solid; de-tabbed kit has four distinct closed solids, no overlaps.

Reproducible checks:

```sh
node validate.mjs
node extreme-check.mjs
node hole-check.mjs
node serve-production.cjs
# Other terminal, against actual dist/ and its real base prefix:
node browser-test.cjs
node studio-test.cjs
node supplemental-test.cjs
node variation-test.cjs
```

Independent binary parsing checks finite/nondegenerate triangles, exact byte count, unit normals matching winding, expected mm bounds, positive volume per component and exactly two oppositely directed faces per edge after 1e-5 mm welding. Mechanism tests check full-turn wheel clearance at 38 noncommensurate-angle positions, axle/wheel/key insertion paths, shoulder and key-head stops, both directions of wheel retention, four flat parts disjoint and sixteen distinct non-fused runners and sixteen snips producing five components including carrier. Default/minimum/maximum, all presets/silhouettes and imported image/STL variants are checked; actual Boolean probes verify raised/engraved holes.

Playwright exercises production WASM/worker loading, PNG/JPEG/ASCII/binary STL real uploads/downloads, threshold/depth/pixels/transforms, malformed/truncated/open/nonmanifold/concave/oversize files, empty silhouettes, recovery, presets/text/icons/SVG, undo/redo, JSON/named saves, missing payload, every STL/ZIP entry, saved dark theme, keyboard focus, collapsible sections, reduced motion, 374 px left rail, preview-first 320/390 px phones with real touch orbit/pinch and reachable export. Worker abort/recovery and stale/current mesh gating are tested. Reports and screenshots are stored beside the app.

Dependencies: React/Vite, Three.js, Manifold (Apache-2.0), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL); Playwright for verification. Library license texts remain with dependencies; reference attribution/license above.
