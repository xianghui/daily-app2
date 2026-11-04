# Reciprocal & Roof

A **four-part, connected kit-card generator** for a miniature three-beam cyclic bearing roof: A sits over B, B over C, C over A. Three tapered upright beams gather over a personalized foundation. This is a real physical assembly, not a structural analysis tool. **Adhesive is required; no load capacity, physical printing, fit, strength or stability has been tested.**

## Run and build

React + Vite; Node 22.12+ recommended. `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Production base: `/daily-app2/20261104-23/`. The root monorepo deploy publishes the combined gallery; the per-app gh-pages script is present as requested but is not used for combined publication.

Dependencies: React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, locally bundled Fontsource Fredoka/Rubik. Generation, file decoding, preview and export are local. No APIs, keys, uploads, CDN dependencies or personal repository uploads.

## Actual reference, attribution and measured decisions

Local candidates were examined first, read-only: `keycap_generator2/public/templates/clicker_template2.stl` (three closed switch-template components) and `fidget_fabric_generator/public/templates/diamond-link.stl` (one 7.981 × 9.241 × 8 mm interlocking link). Their switch/fabric interfaces do not apply to a sheet kit. Local kit-generator READMEs were inspected; no appropriate local kit STL was available.

Selected mesh: **White Cat Kit Card**, Mike Kasberg, Printables 865769, [upstream](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. Source/download identifiers, SHA-256, measurements, connected components and sections are recorded in `reference-analysis.json`; source license and upstream attribution are retained. The downloaded file SHA-256 is `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. It has 30,616 triangles, bounds 179.820 × 178.020 × 3.190 mm, and 27 edge-connected pieces including nonmanifold artifacts. It is neither repaired nor used as a production solid, and the raw mesh is not redistributed. Units are assumed mm; STL has no unit metadata.

Actual source cross-sections at Z=.100, .215 and 1.590 mm show four **4.50 × 1.70 mm sockets**, with a **1.60 mm sheet**. Low source runners reach approximately .21–.22 mm. See the generated representative mesh sections in `evidence/reference-sections.png` and the reproducible Python analysis. This original parametric reconstruction adapts those sheet/socket/carrier interfaces, not the cat silhouette. Default tongues are **4.40 × 1.60 mm**, matched to 4.50 × 1.70 mm sockets: **.10 mm total** proposed allowance. Strengthened .4–.6 mm runners, .40 mm blind socket floors, .20 mm tongue-tip clearance and .05 mm bearing-seat allowance are **new proposals**, not source measurements or universal fits.

The new cyclic tapered beams are original. For crossing radius r, contact stations are ±a where a=√3r. Beam slope is H/(2a), so a high beam underside meets the next beam's upper edge at their crossing. Each bearing cutter is transformed from the next actual beam, clipped to the sheet thickness, projected and extruded through the flat part before Boolean subtraction. This conservative seat avoids print-direction undercuts; it is not a convex hull substitution. Three 120°-rotated beams close the cycle. Changes to length, crossing radius and beam depth change real geometry and seats.

### Studio reference

Read-only `keycap_generator2` README, App.tsx, styles.css, Viewer.tsx, worker, STL parser/export and image conversion informed concrete patterns: 374 px left control rail; sticky compact brand/theme header; labelled collapsible sections; paired mm numeric/range fields; raised tactile buttons and pink selected states; white/lavender light desk; saved dark theme; right-side gradient 3D preview with toolbar; phone preview-first stacking; source preview, explicit units and editable import transforms. Switch sockets and old Vaseverse styling are intentionally absent.

## Parameter ranges (mm unless stated)

- Card: width 220–300, height 270–380; part spacing 3–5. Too-small combinations are rejected, not overlapped.
- Beams: length 76–100, crossing radius 10–14, upright depth 8–12; slope computed from actual cyclic contact condition.
- Sheet 1.6–2.4; total socket clearance .10–.30; runner width .8–1.2, height .4–.6. At defaults, source-derived 4.40 × 1.60 mm tongues mate to 4.50 × 1.70 mm sockets.
- Three real presets and round, hexagonal, notched-hexagonal foundation silhouettes.
- Foundation centre engraving keep-in radius 5.8 mm; footprint 4–7; depth .4–.6; rotation ±180°; offsets X ±1.5 / Y ±2. Depth leaves ≥1 mm backing and cannot intersect beam/socket interfaces. Unsupported transforms disable export.

## Image and STL workflows

File picker works on phones and desktops; drop a single file on Import on supported devices. Synthetic samples are linked and bundled. Replace/remove/reset controls restore defaults. Both import workflows visibly change **Boolean-subtracted final foundation geometry**, not preview textures.

**PNG/JPEG:** file ≤2 MB, content/header checked before decode, ≤12 MP and ≤6,000 px side. Normalize to ≤500 px, fit/crop with ±25% pan, composite light/dark background, sample a **20×20 grid**. Threshold selects dark grid heights; grayscale controls proportional depths. Adjacent height samples are triangulated and sealed into a closed relief cutter, then subtracted. Bright areas/holes leave intact backing. The checkerboard shows the sampled cutout, not a claim of exact vector tracing. This is **2D-to-relief**, never automatic full 3D reconstruction from one photo. Empty silhouettes and out-of-range conversion settings block exports.

**SVG:** simple self-contained filled paths/shapes only, ≤2,000 elements; no external resources, scripts, effects or embedded raster. Rasterized locally at 256 px, then uses the same bounded method. Bundled searchable icons and text use this same real geometry conversion.

**STL:** binary and ASCII; ≤2 MB / 1,500 triangles; .2–250 mm per source axis. Exact content length, finite coordinates, triangle area, welded edge incidence, winding, positive volume, one closed component, convexity and broad flat-bed contact are checked. Only supported closed convex relief cutters are accepted. Concavities, cavities, disconnected/open/nonmanifold/overhanging meshes produce actionable errors; **they are not replaced by a hull or silently repaired**. Select Z/Y/−Z up before attachment, inspect source dimensions, explicitly confirm millimetres, then proportionally scale XY and independently fit Z to engraving depth. Rotate/centre/place within the protected zone. Mesh preview shows the actual source. Scale factors are displayed; original topology is retained in the cutter.

All personal files stay in browser memory or explicit local design storage. Bounded image/mesh payloads travel in portable JSON; missing image payloads explicitly request reattachment. Undo/redo, six named local designs, JSON save/open, imported restoration, text and six icons are implemented.

## Geometry / exports / views

Manifold solid operations run in a bundled WASM Web Worker. Debounced edits, request IDs, stale-result guards and current-state keys prevent last-good exports after invalid edits. Runtime errors disable export; reload recovers a failed worker. All parts pass an independent final welded edge/winding/positive-volume check before becoming current. The preview and STL serializer share the exact result; a byte fingerprint is exposed for comparison.

Assembled, radially exploded, connected-card, de-tabbed plate and isolated-part views use the same meshes. Exploded separation is explanatory, not physical stress/motion simulation. Three.js orbit, touch/pinch, zoom and fit are supported. Preview colours are not stored in STL.

Download a binary **connected-card STL**, the clean print plate, any individual part, or **Everything ZIP** containing five STLs (card plus four alternative clean parts), portable JSON and numbered assembly instructions. This is a real connected carrier with sixteen accessible low breakaway runners. Card and loose parts are alternatives, not duplicate required parts. No generic ZIP is labelled 3MF.

## Print, calibration and assembly

1. Print card OR four loose parts flat at Z=0, .4 mm nozzle / .16–.20 mm layers, PLA/PETG. Supports are not intended. Card requires a large bed; individual parts suit smaller beds.
2. Print foundation and beam A to calibrate source-derived fits. Printer, material, first-layer expansion and flow alter fits. Do not force a tight tongue.
3. Snip sixteen runners and trim nonfunctional edges. Preserve foot tongues, sockets and bearing seats.
4. Hold the three upright beams outside the sockets, each rotated 120° from the previous one. Keep all tongues lifted clear of the foundation. Gather the cluster radially so high seats cross above the next beam's lower edge; then lower all three together. Use a helper or temporary low-tack tape. Independent vertical insertion is **not** possible for the cyclic overlap; it is not advertised as such.
5. Shoulders rest on foundation, tongues clear floors by .20 mm. Adhesive is required at all three sockets and cyclic bearing seats; temporary tape is only an assembly jig. There is no captive snap retention.
6. This miniature demonstrates cyclic bearing geometry; it is not a load-bearing reciprocal structure. Computational checks do not establish adhesive strength, physical dexterity, stability or printing success. No physical prototype was tested.

## Reproducible validation

`npm test` exercises all presets, shapes, individual parameter bounds, joint extremes, images and both STL formats. `validate.mjs` independently parses actual float32 binary STL: exact count/length, finite coordinates, normalized outward normals, nondegenerate triangles, welded incidence exactly two and opposite direction, per-component positive volume, dimensions and expected component counts. It checks card bounds, all part print footprints, no loose/assembled collisions, runner cuts releasing carrier + exactly four unharmed parts, actual blind sockets/floors, protected engraving backing, cyclic crossing equation, and collision-free coordinated radial gathering plus cluster lowering. Physical forces are not simulated.

Browser scripts upload PNG/JPEG/ASCII/binary STL through real file pickers, download actual geometry, compare byte signatures to preview/current JSON regeneration, and rerun mesh/assembly checks. Invalid content, excessive inputs, empty art, unsupported geometry, replace/remove/reset, stale edits, worker failure/recovery, all presets/views, icon/text/SVG conversion, holes, ZIP, portable saves, undo/redo, light/dark, keyboard focus, mobile layout/export and touch gestures are checked. See saved JSON reports/screenshots for performed results; no physical print claim is implied.
