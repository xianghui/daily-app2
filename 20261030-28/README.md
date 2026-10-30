# Link & Close

A React + Vite browser maker studio for a **six-part interlinked-chain kit card**. Three open U links thread together before transverse closure plates are fitted to six tongue/socket seats and bonded. Alternating link planes produce two genuine interlinks, rather than a chain-shaped decoration or a set of overlapping shells. The broad closure plates are deliberately unlike ordinary chain wire: their sheet joints make the assembly possible from bed-flat parts.

**Adhesive required. Not load-bearing.** No physical print, assembly, strength, adhesive or fatigue test was performed. The assembled view is one ideal nonintersecting alignment, not a freestanding display or a simulation of free draping. Computational checks do not establish real-world performance.

## Reference first

Read-only local candidates were inspected before finalizing geometry: `keycap_generator2/public/templates/clicker_template2.stl` (switch cutters/stem) and `fidget_fabric_generator/public/templates/diamond-link.stl` (8 mm interlocking link). Both were parsed, hashed and measured; neither supplies the sheet-to-transverse-plate joint needed here. Relevant project READMEs were inspected. Measurements and rejection reasons are recorded in `reference-measurements.json`.

The selected mesh is **White Cat Kit Card**, Mike Kasberg: [source/instructions](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. The repository README and actual license were fetched, and the publicly downloadable binary STL was downloaded and parsed this run. License text is in `reference-LICENSE.txt`; download URL and analysis are in `reference-measurements.json`.

SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.

Actual mesh: 30,616 triangles, 179.820 × 178.020 × 3.190 mm, 27 edge-adjacent components, **not watertight**. STL has no units; millimeters are assumed, consistent with the sheet construction. Sections at Z=.1, .5 and 1.59 mm were plotted and visually inspected (`evidence/reference-sections.png`). Four rectangular section loops measure **4.5 × 1.700012 mm**. Sheet planes are Z=0 and 1.6 mm. Low source runner planes at .21/.22 mm are observations, not our runner thicknesses. Source defects were not silently repaired.

Concrete reconstruction: a **4.4 mm tongue, 1.6 mm sheet and .10 mm total allowance** reproduce that measured socket section; .15 mm is our proposed default, not a measured or universal fit. These interfaces locate separate transverse closures on the open links. Our 2–2.8 mm closure thickness, open-link profiles, six glue seats, close-after-threading sequence, 24 Boolean-connected runners and six-bay carrier are original parametric design work. Rounded/broad/chamfered return corners change real geometry. The third-party raw STL is **not redistributed**. No convex hull replaces any source mesh.

`reference-analysis.json` separates measured source geometry from redesigned features and proposed tolerances.

## Studio and dependencies

The read-only `keycap_generator2` README, styles, App, Viewer, worker, STL, image-tracing and export modules were inspected for concrete patterns: 374 px left control panel, sticky compact header, preview-first phone layout, lavender-grey desk, white panels, pink accents, tactile pressed states, local rounded fonts, checkerboard cutouts, saved theme, explicit source units and current-worker-result export gating. Existing monorepo-owned studio/parser/serializer infrastructure is reused; the chain geometry, transformations, assembly paths and topology checks are new. No reference project's Git history/dependency tree was copied.

Node 22.12+: `npm install`, `npm run dev`; `npm test`; `npm run predeploy`. Per-app scripts are exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`. Combined publication uses the **root** deploy directory and deploy flow, not the individual app deployment script. Base path: `/daily-app2/20261030-28/`.

Local dependencies: React/ReactDOM, Vite/react plugin, Three.js/OrbitControls, Manifold-3D WASM, fflate, Fontsource Fredoka/Rubik (OFL), gh-pages; Playwright for tests. All modeling, fonts, viewing and export dependencies bundle locally. No APIs, CDN imports, account, paid service or API key.

## Parameters and fits

All dimensions are millimeters; artwork rotation is degrees. Supported ranges:

- Card: 210–240 × 170–200; part spacing 3.5–5.
- Link length 64–76; breadth 34–38; rail width 6–7; sheet 1.6–2.
- Ideal chain interlink overlap 18–22; center pitch = length − overlap. This changes relative assembly placement, not the printable part geometry; it is explicitly a preview pose control.
- Tongue width 4.4–5.2; closure thickness 2–2.8; total socket allowance .10–.35 (split symmetrically).
- Runner width .8–1.4; runner thickness .4–.6. Twenty-four real bed-aligned runners join six parts to the carrier. Accessible snips 1.6 mm outside part boundaries avoid tongues and socket faces.
- Closure art footprint 4–7; engraving .4–.6; XY offset ±1.5/±2; rotation ±180°. A radial 6.5 mm safe zone protects both sockets. Minimum continuous backing is 1.4 mm. Off-zone transforms are blocked, not silently clipped.

Print one U/closure pair before the whole card. Change allowance in .05 mm steps for material/printer calibration. No universal interference/friction fit is claimed: **all six closure seats require adhesive**. No bearings, switches, magnets, screws or hardware are needed.

## Assembly and print orientation

All exports are bed-flat Z=0, details up, in millimeters. Start PLA/PETG, .16–.20 mm layers, three walls, 100% scale. No supports intended. Ensure your bed fits the declared card; print clean individual parts otherwise.

1. Snip 24 runners with flush cutters; trim carrier nubs, keeping three U links and three closure plates.
2. Hold closure 1 perpendicular to link 1's sheet. Slide both end tongues through its sockets until the shoulders seat; bond and cure.
3. Turn open link 2 a quarter-turn around its long axis and point its opening toward closed link 1. Move it sideways so its open tips pass above/below link 1's sheet. Fit closure 2 over both tongues and bond.
4. Point open link 3 toward link 2, alternate the plane again and thread it vertically through link 2. Fit closure 3 and bond. **Do not close all loops before threading.**
5. After full adhesive cure, gently gather/extend the loose chain. The fixed closure joints never serve as hinges. Closed loops remain distinct and interlinked, not fused. Not intended for pulling loads.

Connected-card, de-tabbed, assembled, exploded and isolated views share the same validated solids. Exploded placement and the ideal assembled alignment are preview-only. Export always uses actual print orientation. Per-part binary STL and Everything ZIP include all seven meshes (connected card + six clean parts) and numbered assembly instructions. STL contains no preview colours; ZIP is not mislabeled as 3MF.

## Image to geometry

PNG/JPEG file picker and drag/drop, plus simple SVG shape rasterization. SVG rejects scripts, external resources, references, filters and unflattened text; at most 2,000 simple elements. Files are at most 2 MB. PNG/JPEG headers must match actual content, ≤12 MP, ≤6,000 pixels/side. Browser decode is checked against headers before normalizing to ≤500 pixels/side. Public synthetic samples are included; no personal files are stored in this repository.

The original and actual converted cutout appear side by side on checkerboards. Choose light/dark background, contain/cover fit, crop shifts ±25%, threshold 1–254 or grayscale relief. Conversion samples a bounded **20 × 20 luminance heightfield**, preserving bright holes as unengraved backing, not as through-holes in the closure. A closed height solid Boolean-subtracts .4–.6 mm from the protected closure. This is **2D-to-relief/silhouette conversion, not full 3D reconstruction from a photograph**. Pixel changes, threshold, depth, fit and transforms change exported geometry. Text (8 characters) and six searchable bundled icons use the same actual geometry path. Raised decoration is intentionally unsupported to keep sheet parts bed-flat.

## STL to geometry

ASCII and binary STL are parsed locally in a worker. Limits: 2 MB, 1,500 triangles, .2–250 mm per axis, bounded finite coordinates. Show source dimensions and source preview, explicitly confirm millimeters because STL has no unit metadata, then fit/rotate/translate the mesh into the protected closure engraving. XY scaling is proportional to the 4–7 mm footprint; independent Z scaling fits .4–.6 mm engraving depth, with explicit displayed factors. Choose Z/Y/negative-Z up **before attachment**; changing axis clears the source and requests reattachment.

Accepted inputs are deliberately bounded: one closed, outward-wound, non-self-intersecting **convex solid with a broad flat bottom and no overhang footprint**. Concavities, cavities, disconnected meshes, open/nonmanifold/truncated files and unsupported geometry produce actionable errors; they are not repaired or substituted with hulls. The exact accepted triangles are used by Manifold Boolean subtraction. The bottom hull is used only for footprint eligibility checks, never as printable replacement geometry. The imported mesh becomes an actual recessed interface-safe signature on the closure, not an unchanged re-export or texture.

Replace/remove, transform reset and built-in reset are supported. Files are never uploaded. Local named designs (six) and JSON include bounded portable image/mesh payloads. Missing image payloads require reattachment; restore never claims a missing file exists. Undo/redo holds up to 35 snapshots.

## Live validity and verification

Heavy parsing/modeling runs in a debounced WASM worker. Request IDs and state keys reject stale results. The visible last-good preview is labeled when invalid, and **all mesh exports remain disabled** until the exact current state is valid. Worker failure is visible and blocks export. Preview and STL share the same final mesh; a UI fingerprint is compared with actual downloaded bytes.

Reproducible checks: `npm test`, `node hole-check.mjs`, then serve production with `npm run preview -- --host 127.0.0.1 --port 5548` and run `node browser-test.cjs`, `node studio-test.cjs`, `node axis-test.cjs`. Reports and screenshots sit beside the app. Independent STL checks cover exact binary length, finite coordinates, nondegenerate faces, outward normals, welded two-opposite-face edges, positive volume per component and expected dimensions. Default, all presets, min/max, every field endpoint, every silhouette, image and STL outputs undergo mesh and assembly checks. The carrier is one solid; snipping yields six parts plus one carrier. All clean parts are separately closed and bed-supported.

Assembly checks use solid intersections for all 15 pairs, open-link side/vertical threading and all three closure approaches at representative steps; shoulders seat against stops. Analytic disk-crossing conditions establish two adjacent interlinks, with a nonadjacent gap and closure-to-rail clearance. Hole probes check actual Boolean solids. This is **not** a proof of all free-chain motions, friction, adhesive strength, physical fit or durability.

Real production-browser tests exercise PNG/JPEG/ASCII/binary imports, source/transform changes, source-axis changes, failed/empty/excessive inputs, invalid exports, reset/replacement, portable JSON/named saves, history, presets/text/icons/SVG, every view, per-part STL and ZIP contents, exact preview/export signatures, worker abort/recovery, saved dark theme, focus/reduced motion/collapsibles, 374 px desktop rail and preview-first 320/390 px phone layouts with touch orbit/pinch and reachable downloads. Root gallery and combined production output are checked before publication. See `VALIDATION.md` and report files for results.
