# Wedge Dwell

A local React + Vite parametric STL studio for **progressive taper-driven TPU jaw spreading**. Insert a narrow PLA/PETG key into two long TPU cantilever jaws: the loose entry becomes increasing interference near the end, then reversing releases it. A broad trailing shoulder bounds insertion; the nose remains 4 mm from the root bridge. The key is deliberately removable, not captive or load-bearing. No hardware required.

## Studio

A large live Three.js preview dominates the desktop beside a compact parameter rail. Warm ivory/clay styling, slim header, Shape/Mechanism/Surface/Import/Print tabs, active-part selection, source and final previews, three real mesh thumbnails (Soft Entry, Wedge Dwell, Long Pause), valid bounded Variations, undo/redo, portable JSON save/open and always-reachable binary STL/ZIP exports. Phones have a generous preview, collapsible controls and fixed export. Orbit, pinch, zoom, reset/fit, 10 mm grid and explicit millimeter dimensions are included. STL stores geometry, not preview colours.

UX reference: https://vaseverse.org/ — model-first editing, presets, local settings, quiet warm studio styling. The reference was fetched; its documented tab/preset/local-export interactions informed the editor. No branding, assets, text or source code copied. Shared local import/export infrastructure is adapted from earlier Daily Object Lab studios; this taper-and-flexure mechanism and its checks are distinct from earlier toggle, ratchet, rigid slider and snap-socket designs.

Assembled preview shows **rigid, collision-free pre-contact insertion only**. After contact the real TPU jaws must deform; neither contact friction, force nor deformation is simulated. Export always uses the same final worker geometry as the print-layout preview. The two exported solids never intersect or fuse.

## Local imports

Use a picker on desktop/phone, or drag one file onto Import. Replace/remove and reset transforms are supported. All data remains in browser memory; no upload, cloud API, API key, paid service or CDN. Synthetic bundled fixtures are documented in `public/samples/README.md`; no personal files are committed.

**PNG/JPEG:** maximum 2 MB, 12 megapixels, 6,000 pixels per side. Actual signature/dimensions checked before decoding. Images normalize to at most 500 px on the long side, then sample to a 20×20 luminance grid after contain/cover and ±25% crop shifts. Luminance = .2126 R + .7152 G + .0722 B, transparency composited over white. Threshold mode gives dark samples the chosen depth and others zero; grayscale gives depth × (1 − luminance/255). Triangulated interpolated heights sit on a continuous 0.4 mm backing, sunk 0.15 mm into the recessed palm floor and Boolean-unioned with the body. Empty relief is rejected. This is **2D-to-relief**, not reconstruction of a complete 3D object from a photo. Source and exact sampled-grid previews are shown alongside the final model. Depth .4–3 mm; threshold 1–254; footprint 4–7 mm.

**ASCII/binary STL:** maximum 2 MB and 1,500 triangles; source dimensions each .2–250 mm. STL has no unit metadata: explicit millimeter confirmation is mandatory. Parser checks complete facets, finite coordinates, welded edge incidence and winding, positive volume, connectedness, degenerate faces and triangle intersections. Deliberately supported subset: one convex solid with a broad flat Z-bottom (at least 25% of footprint) and all XY projections inside that bottom footprint. Open/nonmanifold, concave, hollow, disconnected, inverted or overhanging sources are rejected with guidance; no repair is claimed. Simplify and orient your model externally first. Source 3D preview/dimensions remain visible. XY scale proportionally fits 4–7 mm; Z independently fits .6–5 mm. Rotate around Z ±180°, X offset ±1.5 mm, Y ±2 mm, or center/reset. Fitted XY minimum span 1.2 mm. Boolean union must produce exactly one closed palm component. Every transformed vertex must remain within the 6.5 mm palm safe radius. Moving key and jaw interface cannot be modified by imports.

JSON contains a bounded normalized image PNG plus controls/pixels, or a bounded validated mesh payload. Opening reruns validation and restores the portable import; missing image payload is explicitly rejected with a reattachment message. JSON maximum 2 MB. Save files contain the chosen source; save only when you intend to preserve it.

## Parameters (millimeters)

| Parameter | Range | Effect |
|---|---|---|
| Jaw opening | 9–11 | Width of the straight unobstructed jaw gap |
| Jaw free length | 30–40 | Flexible span, insertion scale |
| TPU jaw thickness | 1.2–1.8 | Flexure stiffness |
| Maximum per-jaw spread | .3–.6 | Intentional terminal elastic interference, **not running clearance** |
| Body height | 4–6 | Vertical thickness of body and key |
| Palm dimple depth | 0–.6 | Subtractive texture outside import well |

Key nose width 6 mm; initial per-face clearance = (jaw opening − 6)/2, i.e. 1.5–2.5 mm. Key length = free jaw length − 4 mm; terminal key width = jaw opening + 2 × selected spread. Taper contact begins at key length × (jaw opening − 6)/(terminal key width − 6). The shoulder extends at least 1 mm beyond each outer jaw edge at its forward face. The minimum palm floor is body height − .8 mm. Recessed palm imports remain within a 6.5 mm radius and over 24 mm from jaw interfaces. Parameters update actual solids without reload; invalid dimensions disable export.

The nominal beam estimate 1.5 × thickness × spread / free-length² stays below .002 over supported ranges. This is a **small-deflection cantilever reference**, not validated TPU constitutive, friction, force, fatigue or safety analysis. A sampled end-load deflection envelope clears the taper; it does not predict the exact real contact shape. Never force a rigid printed jaw.

## Print, export and assembly

**Print the palm-jaws in TPU 95A; print the tapered-key separately in PLA/PETG.** Bed-flat exactly as exported, .4 mm nozzle, .2 mm layers, ≥3 perimeters and solid narrow jaw sections. No supports or hardware intended. Material differences require two print jobs or deliberate slicer material assignment; a combined STL does not encode materials. The ZIP has one named STL for each part plus an assembly guide; either part is also directly selectable for STL export. Selected-part dimensions follow that export, not the assembled pose.

Start with Soft Entry as a full-size material/fit calibration coupon and .3 mm per-jaw spread. .4 mm is the balanced starting setting; .6 mm is exploratory and firmer. Tolerances depend on extrusion, printer, TPU formulation, orientation and surface finish. Remove brim/stringing without thinning flexures. On a flat surface, hold the palm and insert the narrow key nose between the open jaw ends. Advance gently, stopping when the shoulder meets the jaw ends; reverse to release or lift the key out. No latch, captive retention or permanent assembly. Stop if whitening, buckling, cracking or harsh sticking occurs. This is not a structural wedge/clamp. Small removable part, not for children.

## Privacy, dependencies and commands

React/React DOM, Three.js, locally bundled manifold-3d WASM robust Boolean solids, fflate ZIP; Vite/React plugin and Playwright development tools. All geometry and STL validation run in a bounded local worker. No server generation, CDN imports, API key or paid service. Files stay in browser memory; local Save JSON explicitly embeds the bounded imported payload. No personal inputs are in the repository.

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 5280
npm test
node browser-test.cjs
node extra-browser.cjs
node mobile-sheet.cjs
npm run predeploy
```

Browser tests use port 5280; TEST_BASE can target a locally served production deployment. Individual predeploy/deploy scripts are retained. Publication uses the **root monorepo** predeploy/deploy flow so all gallery entries remain available.

## Validation scope

Independent binary-STL parsing verifies finite coordinates, nondegenerate triangles, normalized outward face normals, positive volume per closed connected component, exact welded edge incidence/direction at 1e-5 mm, Euler characteristic, component count and millimeter bounds. Every worker-generated solid is independently preflighted before exports enable. Test all 64 parameter corners, defaults, presets and eight variations; exercise 24 image/STL-derived combinations with the same mesh and mechanism checks. Root and key bounds are checked independently of the exporter.

Solid intersections probe 31 rigid pre-contact positions, confirm intentional interference at the shoulder limit, root clearance, nonintersecting export layout and unchanged taper/jaw geometry under imports. A 401-point analytical end-loaded cantilever envelope checks that bounded jaw spreading can clear the full taper. This envelope is geometrical, not a contact solver. Browser tests import actual PNG/JPEG and ASCII/binary STL fixtures, download/parse the changed geometry and compare exact final-preview signatures, source content/threshold/depth/scale/placement changes, replace/remove/reset, invalid files/transforms/dimensions, empty silhouettes, portable save/open, undo/redo, individual parts, ZIP, presets/variations and phone touch orbit/pinch/inputs at 320/390 px. No external file requests are allowed during the local browser suite.

**No physical print, force, friction, wear or cycle testing performed.** Calibration and a physical print remain necessary. See generated validation JSON and VALIDATION.md for observed results.
