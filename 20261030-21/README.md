# Lens & Focus

A browser-based parametric **five-part kit card** for a real, indexed lens-and-paper-screen optical bench. Snip 20 breakaway runners, assemble a lens tower and its concentric spacer/retainer, and lift/reseat a paper screen among six pairs of sockets. This is not a static download, an optical simulation, or a repeat of the earlier mirror/periscope/pinhole kits.

**Requires an external positive acrylic lens, white paper, tape and adhesive.** Choose Ø20–28 mm, nominal focal length 40–55 mm, with 1.0–1.4 mm thickness throughout the outer 1 mm retaining annulus. Confirm lens suitability by dry fitting. Never aim at the sun, lasers, eyes or intense light. Indoor diffuse LED-lit objects only. Physical printing, lens fit, focus quality and durability have **not** been tested.

## Run / dependencies

`npm install`, `npm run dev`; `npm test` runs mesh and assembly checks. `npm run predeploy` builds the production app; `npm run deploy` is the required optional per-app gh-pages script. Publication of the combined site uses the parent repository's deploy flow, not this per-app script. Base: `/daily-app2/20261030-21/`.

React + Vite, Three.js/OrbitControls, locally bundled Manifold WASM, fflate ZIP, Fontsource Fredoka/Rubik. No remote runtime APIs, CDN, key or paid service. Heavy geometry and STL parsing run in a debounced worker with request IDs, current-state keys and invalid-export gating. Preview and binary-STL exports use identical final mesh arrays. A last valid preview is labelled and cannot be exported after an invalid edit.

## Actual reference evidence

Local candidate trees were searched read-only first, including keycap, slider, spring and linked-fabric projects. Their switch/slider/spring interfaces are unsuitable for this flat-sheet optical kit. Instead, downloaded and parsed the public **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), CC BY 4.0. See `source-README.md`, `source-LICENSE.txt`, `reference-analysis.json`, actual measurements in `reference-measurements.json`, and `evidence/reference-sections.png`. Reproduce inspection using `/tmp/kit-analysis-venv/bin/python reference-inspect.py` with the downloaded file at the documented temporary path.

SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Binary STL, 30,616 triangles, 179.819997 × 178.019994 × 3.1899996 mm; 27 edge-adjacent components, nonwatertight. Units assumed mm, corroborated by source sheet dimensions. Inspected cross-sections at Z=.1, .5 and 1.59 mm, sheet planes0/1.6 mm, actual socket loops4.5×1.700012 mm, low runners.21/.22 mm. **No raw source STL is redistributed or automatically repaired.** The original Boolean reconstruction adapts sheet/socket/carrier interfaces, not ship outlines.

Measured source 1.6 mm sheet is preserved for tower, screen and both lens rings. Tongue4.4 + total allowance.10 reconstructs a4.5×1.7 socket. Default allowance.15 and adjustable.10–.35 are proposed material/printer-dependent starting fits. Deck2–2.8 and runners.4–.6 are independently strengthened redesigns. Optical pocket, six station positions, rim overlap and ring bonding are original, not claimed source dimensions.

Visual/interaction reference: read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` README, styles, App, Viewer, worker, export, image trace and STL modules. Concrete patterns:374px scrollable left rail, paired sliders/numbers, collapsible controls, tactile coral selected buttons, checkerboard cutout/source previews, exact-result exports, saved theme, rounded bundled fonts, preview-first phone stack. Shared local studio/import/export/testing infrastructure was adapted from the preceding app; all optical-kit solids and assembly checks are new.

## Parameters — millimeters unless indicated

| Control | Supported range |
|---|---|
| Connected card width / height |240–260 each; large bed required |
| Bench length / width |104–112 /44 |
| Purchased lens diameter |20–28 |
| Optical center above deck |24–30 |
| Lens pocket diametral allowance |.20–.40 |
| Six screen station pitch |6–8; separation30 + station×pitch, station0–5 |
| Socket total allowance |.10–.35; sheet1.6 |
| Tongue width |4.4–6 |
| Deck thickness |2–2.8 |
| Carrier spacing |3.5–5 |
| Runner width / thickness |.8–1.4 /.4–.6 |
| Engraving footprint / depth |4–7 /.4–.6 |
| Art X / Y / rotation |±1.5 /±2 /±180 degrees, additionally safe-zone bounded |

Three real presets, three bench silhouettes, bounded variation, undo/redo, six local named designs, portable JSON save/open, replace/remove/reset imports, text and six searchable bundled marks. Assembly station slider changes the displayed seat only: all six actual socket pairs remain in every exported bench. Purchased lens and paper are deliberately omitted, not falsely represented as exported plastic.

## Image and SVG workflow

PNG/JPEG mandatory formats and restricted simple SVG accepted through native picker on phones/desktops or desktop drop. File16 bytes–2 MB; PNG/JPEG≤12MP,≤6000px side before decoding; normalized to≤500px. SVG≤2000 simple elements; external resources, scripts, effects and text rejected. SVG is safely rasterized locally to256px; no remote resolution.

Fit/contain or fill/crop, crop shifts±25%, light-background removal or dark inversion, threshold1–254 or grayscale, depth.4–.6, physical footprint/rotation/placement. Raster is sampled to20×20 grayscale heights. A closed triangulated height surface is Boolean-subtracted from the protected front bench badge. The .4 mm carrier layer stays above the deck so bright background regions do not cut. Bright image holes stay unengraved on continuous backing; this is **sampled 2D-to-relief/silhouette engraving, not exact contour tracing or automatic full-3D reconstruction**. Checkerboard shows actual converted cutout; original image remains visible separately. Text/icons use the same real geometry conversion. Engraving only: raised marks are intentionally unsupported on this bed-flat kit. Boolean probes verify hole centers remain solid.

## STL workflow

ASCII and binary STL accepted,≤1500 triangles, .2–250 mm per oriented axis. Explicit millimeter confirmation is mandatory because STL has no units. Select Z/Y/−Z up before attachment, then center/reset, scale footprint proportionally in XY, independently normalize Z to engraving depth, rotate around Z and place in the safe badge. Source dimensions, original format/triangles, scale factors and source mesh preview are shown.

Importer validates binary length/ASCII syntax, finite coordinates, face degeneracy, opposite-directed welded edges, positive closed volume, single convex solid and supported broad bed footprint. Concave, hollow, branched, nonmanifold, open, overhung, excessive and unsupported input is rejected with recoverable errors. Convexity is a supported-input restriction, **not** a hull substitution: exact accepted source vertices/faces are Boolean-subtracted, preserving their actual shape. Art cannot reach sockets or cut through the deck; final backing≥1.4 mm. Import size/position/rotation changes measurably alter actual downloaded STL.

Files stay local. No user input is uploaded or written into this repository. Bundled public samples are synthetic original fixtures, reusable without attribution (`public/samples/README.md`). JSON/local named designs retain bounded normalized image data and bounded mesh payloads. Missing image payloads explicitly require reattachment; malformed portable assets block exports. No hidden file-path restoration.

## Assembly and prints

Export connected card or five individual bed-flat parts; Everything ZIP contains six real STLs plus numbered assembly instructions and current fit values. STL stores no colors. Small-bed users must use clean-part exports. Print PLA/PETG at100% mm, .16–.20 layers, three walls; no supports intended. Calibrate the clean bench/tower pair before full printing. Source-fit sockets, not universal press fits; fixed tower and ring stack need adhesive. Screen is gravity-seated and intentionally lift-out, not captive.

Snip20 runners1.6 mm outside pieces; trim nubs. Dry-fit rings/lens, bond spacer to tower, insert lens flat side toward tower and bond retainer outside optical area. Pocket1.6 mm deep, nominal radial capture1 mm. Seat/bond tower; tape paper to front of screen. Lift screen above deckThickness+1 mm before moving to any of six stations. Seat shoulders on deck. Compare focus at different stations against a diffuse LED-lit object. Ideal thin-lens estimate v=f*u/(u-f), e.g.f40/u240 →v48mm; real principal planes and offsets mean discrete settings may not achieve sharp focus. No optical performance promise. Full instructions are embedded in-app and included in ZIP.

## Verification

`validate.mjs`: independent downloaded/binary STL checks: exact byte count, finite normals/vertices, nondegenerate faces, winding, positive volume **per component**, welded1e-5mm edge incidence, millimeter bounds. Tests defaults/presets/shapes/all field extrema and image/STL-derived outputs. Every generated edit additionally validates final part meshes inside the worker.

Assembly tests independently reconstruct exact final solids and intersect every assembled pair at all six stations; socket gauges14, shoulder stops2, vertical insertion/lift-and-reseat paths, ring approach paths, external peripheral-lens envelope and capture2, disjoint print layout,20 safe snip cuts yielding five pieces+frame, card envelope/Z, upper sections inside first-layer footprint. This proves geometric fit/paths only, not material, adhesive, optics, strength or physical print success.

`browser-test.cjs`: production-path real file-picker PNG/JPEG/ASCII/binary imports; download/hash vs preview and regeneration from saved JSON; changed pixels/threshold/depth/scale/placement; corrupt/excessive/empty/unsupported inputs; reset/remove/replace; part STL parsing;320/390px no-overflow, orbit/pinch and phone downloads.

`studio-test.cjs`: real presets, silhouettes, text/icons/SVG, portable assets, named storage/reload, undo/redo, ZIP contents parsed, views, theme/focus/collapsible/reduced-motion, desktop rail and phone order, intentionally aborted worker and recovery. `axis-test.cjs`, `hole-check.mjs`, `import-extremes.mjs` add oriented mesh, hole-volume and imported parameter-extreme checks. Reports/screenshots are saved alongside scripts. Computational and browser tests are distinguished from unperformed physical tests.
