# Borromean & Bound

A React/Vite, local-browser **six-piece Borromean-ring kit-card generator**. Three elongated rectangular loops lie in cyclic coordinate planes. Each pair is unlinked when the third is absent, but all three collectively interlock. This is not a serial chain or an interactive browser puzzle. It makes a physical mathematical display.

## Reference-first evidence

Before final geometry, the read-only local clicker-template and diamond-link STL candidates were parsed. Their switch-specific cuts and 8 mm interlocking fabric geometry are not suitable sheet/closure interfaces. See `reference-measurements.json` for hashes, dimensions, component counts and exclusions. Project instructions and the actual template files were inspected.

The selected public reference is **Mike Kasberg, White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Its README and license were fetched from the source repository. Raw reference STL was downloaded to a temporary path, parsed, sectioned and visually inspected; it is **not bundled**.

- Binary STL SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; 179.819997 ×178.019994 ×3.190000 mm bounding dimensions; 27 edge-adjacent components. Source is not watertight; it is a design reference, not an input automatically repaired or re-exported.
- Actual sections at Z=0.10, 0.50 and 1.59 mm show thin removable webs, sheet parts, and through-socket loops. Default sheet planes 0/1.60 mm; actual sockets 4.50 ×1.700012 mm; low webs at0.21–0.22 mm. Specific socket bounds and component measurements are recorded.
- See `evidence/reference-sections.png`, `reference-analysis.json`, `reference-measurements.json` and reproducible `reference-measure.py` (Python trimesh/numpy/matplotlib/networkx; pass a downloaded reference path).

**Measured vs proposed:** preserve4.50 mm socket length and default1.60 mm sheet. Reconstruct six sockets as4.50 ×(sheet+allowance), tongues as(4.50−allowance)×sheet. Proposed allowance0.10–0.30 mm is TOTAL, not per side. New runners0.8–1.4 mm wide /0.4–0.6 mm high are thicker than the measured source webs. The six open-U/perpendicular-bar parts, cyclic Borromean assembly, shoulder stops, protected engraving patch and original carrier layout are a new CSG reconstruction. No raw third-party/source mesh is redistributed. Attribution and the license text are retained; no endorsement implied.

The source `keycap_generator2` was read-only: README, App, CSS, Viewer, worker, image trace, geometry and export modules inspected. Concrete patterns:374 px scrollable left rail, sticky brand, paired numeric/range inputs, collapsible sections, tactile raised buttons, pink selected states, checkerboard source/cutout views, saved dark theme, large right viewer and preview-first phone. Independent Daily Object Lab studio/parser/export infrastructure is reused from the preceding app; geometry, interface positions, assembly transforms, constraints and validation are replaced. No reference Git history or dependency tree copied wholesale.

## Run and dependencies

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
node browser-test.cjs
node studio-test.cjs
node personalization-check.mjs
node stale-test.cjs
node phone-views-test.cjs
node orientation-test.cjs
node icons-drop-test.cjs
```

`serve.mjs` serves **production** assets at `http://127.0.0.1:5694/daily-app2/20261102-4/`. Playwright/Chromium is used for the browser tests. Dependencies: React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, locally bundled Fredoka/Rubik (Fontsource/OFL); gh-pages for per-app deployment. No CDN, API, paid service or backend. Public publication uses the **root monorepo deploy**, not this app's deploy script.

## Supported controls — all physical lengths in mm

| Control | Range |
|---|---|
| Connected card width ×height |210–250 ×180–220 |
| Long / short U-body spans |72–88 /38–44 |
| Ring band width |6–7 |
| Sheet thickness |1.6–2.4 |
| Total socket allowance |0.10–0.30 |
| Part/frame spacing |3–5 |
| Runner width / thickness |0.8–1.4 /0.4–0.6 |
| Fixed closure height / socket length |16 /4.50 |
| Engraving footprint / depth |4–7 /0.4–0.6 |
| Placement X /Y |±1.5 /±2 within a6.5 mm safe radius |
| Artwork Z rotation |±180° |

Closure bars are4 mm longer than the U-body long span; the centred assembly envelope is(long span+4) mm on all three axes.

Rounded, square and clipped silhouettes change actual solids. Three presets have generated-model thumbnails. Bounded variation, reset, undo/redo (35 snapshots), six local named designs and portable JSON save/open are real. Preview colours do not encode STL colours. Assembled, exploded, connected-card, de-tabbed print plate and all six isolated-piece views share final generated meshes. Exploded offsets are explanatory, not a simulated insertion path. Ghost A can expose the crossings.

## Image → geometry

PNG/JPEG/simple SVG are locally decoded. Limits:16 bytes–2 MB; PNG/JPEG≤12 MP,≤6000 px side; normalize to≤500 px side before saving. SVG≤2000 simple elements, no scripts/external resources/text/effects; rasterized locally to256 px. File picker works on phone and desktop; single-file drag/drop is supported.

Fit/contain or fill/crop and±25% crop shifts feed a **20×20 luminance grid**, with invert-dark or remove-light/transparent background. Threshold1–254 produces two-level heights; grayscale mode produces variable heights. Triangulate a closed height-field cutter, mirror it and Boolean-subtract it from A’s closure bar. The cutter connects to the upper face, so it is an actual engraving, not a texture. Dark pixels engrave0.4–0.6 mm, bright holes leave original material beneath; interpolation occurs between sample vertices. Checkerboard shows the actual converted grid. This is bounded sampled **2D-to-relief**, not exact outline tracing or full3D reconstruction from one photo. Text (8 characters) and six searchable bundled icons use the same conversion. Small features below sampling/printing resolution may be lost. Empty silhouettes are rejected. Raised art is deliberately unsupported to preserve flat sheet thickness and ring clearance.

## STL → integrated geometry

ASCII and binary STL,≤1500 triangles and2 MB, each oriented axis0.2–250 mm. Content, finite coordinates, nondegenerate triangles, exact binary length /complete ASCII facets, welded manifold edge incidence and winding, connectedness, positive volume and pairwise surface intersections are checked in the worker. The integration contract is intentionally bounded: **one convex solid, broad flat bottom≥25% footprint, no XY overhang beyond its base**. Concave, hollow, open, inward, self-intersecting, disconnected and unsupported meshes are rejected with recovery guidance; no repair, concavity removal or convex-hull substitution.

Select Z/Y/−Z up before attaching, then explicitly confirm millimeters: STL has no units. Source dimensions, triangle count, original solid preview and XY/Z scale factors are shown. Actual source vertices are proportionally scaled in XY to the chosen footprint and independently scaled in Z to engraving depth; rotate and place within the protected A-bar patch. Boolean-subtract the exact transformed solid, leaving≥1 mm backing and a6.5 mm keep-in radius far from both sockets. The result is different from the original source and visibly/quantifiably changes card and bar STL. Replacement, removal and transform/image resets are supported.

Synthetic sample PNG, JPEG, ring SVG and ASCII wedge/binary gem STL are bundled under `public/samples/`; no personal inputs or reference STL. Samples are independently generated fixtures. Files are processed entirely on-device; no uploads or telemetry. JSON and named designs contain bounded normalized image/mesh payloads; missing image payloads explicitly request reattachment rather than claiming restoration. Personal inputs are never saved into the repository.

## Modeling, validation and current-result export

Manifold solid operations create real unions/differences for every piece, socket and runner. A debounced module Web Worker owns WASM, imports and CSG. Resolution and complexity are bounded. Request IDs reject stale results; a current state key includes parameters, source and transforms, and image settings additionally gate conversion. Invalid edits/file errors/worker failure disable STL and ZIP, even if a labeled last-good preview remains. All output parts get a final finite/volume/welded-edge/winding check. Preview and export use the exact same current result, with signature checks in browser tests.

`npm test` independently parses float32 binary STLs (1e-5 mm vertex welding), checks normalized normals, opposite-directed two-face edges, nondegenerate faces, component-by-component positive volume, bounding dimensions and Euler characteristic. Checks cover each clean piece, connected card and translated six-piece plate, presets, each parameter extreme, combined extremes, silhouettes, threshold/grayscale images and STL-derived outputs. CSG checks validate all15 assembled piece pairs, both U-loop insertion corridors, three closure mouth insertions, six socket probes, three shoulder stops, pairwise unlink translation paths with third ring absent, topology construction, support-free footprints, card bounds and24 safe cuts releasing six parts plus carrier.

The centreline construction is the standard cyclic coordinate-plane rectangular Borromean link with half-long>half-short. Tests verify the cyclic spanning-disk piercing matrix `[[0,0,2],[2,0,0],[0,2,0]]`, zero pairwise linking numbers in a generic projection, clear pair-separation paths and engagement with the third loop. A generic straight-edge projection has8–12 crossings, **not necessarily the minimal six-crossing diagram**. A zero pairwise linking number alone is not used as proof of a three-component unlink. Closure rails stay inside the checked disjoint thickening corridors.

Browser tests exercise actual PNG/JPEG/ASCII/binary picker imports and actual downloaded STL bytes; content/threshold/depth/crop/scale/rotation/placement changes, remove/reset, invalid/truncated/excessive/open/nonmanifold/concave inputs, current-preview signatures, portable assets, named saves, undo/redo, all views, saved theme, keyboard focus, collapsed sections, worker abort/recovery, ZIP contents and320/390 px touch orbit/pinch/downloads. Tested results are in `*-validation.json`, screenshots in `evidence/`.

## Printing and assembly

Read [ASSEMBLY.txt](ASSEMBLY.txt) (also in Everything ZIP). Bed-flat,100% mm, PLA/PETG,0.16–0.20 mm layers,≥3 perimeters; supports not intended. Calibrate A U +bar before the whole kit. Clean first-layer spread, dry-fit, then bond **six seats** using compatible adhesive. Loops must not be glued to one another. Small parts; no load rating.

1. Snip24 runners and clean without damaging tongues.
2. With ALL closure bars off, lay A in XY (long X, open+Y).
3. Raise B from below along+Z (long Y, open+Z).
4. Feed C from+Y toward0 (long Z, open+X).
5. Present each bar at its adjacent mouth5 mm beyond seating, not through a distant ring. A slides−Y, B−Z, C−X. Bar16 mm dimension stands normal to its own U sheet. Align both sockets, dry-fit all rings and bond the six seats.
6. Let cure. Do not force the closed rings apart. Removing/opening a closure breaks the topological constraint; adhesive removal may be destructive.

**No physical printing, assembly, adhesive strength, handling or durability testing has been performed.** Computational mesh/fit/corridor checks are not a physical-print guarantee. No bearings, switches, magnets or fasteners; compatible adhesive is required.
