# Sector & Span

A local React + Vite maker studio for a **four-part proportional-sector kit card**. Snip the connected carrier, bond a shouldered axle into the long fixed arm, lower the free arm and bond a transverse keeper. Four paired radial station holes demonstrate similar triangles: for opening angle θ, span at station k is `2 × k × pitch × sin(θ/2)`, so the spans grow 1:2:3:4. A gentle fan-and-compare tactile interaction, not a precision gauge or angle-locking instrument.

## Reference-first evidence

Actual geometry reference: **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), CC BY 4.0. The source README and repository LICENSE were inspected. The binary STL was downloaded to `/tmp/sector-span-reference.stl`, parsed with trimesh and sectioned at Z=.10, .50 and 1.59 mm. SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. It has 30,616 triangles, a 179.820 × 178.020 × 3.190 mm envelope, 27 edge-adjacent components and is not watertight. It is a design reference, **not repaired or redistributed**.

Measured sheet planes: 0 and 1.6 mm. Sectioned source sockets: 4.5 × 1.700012 mm. Reconstruction maps these to an original 4.4 mm-wide axle in a `(4.4 + total allowance) × (sheet + total allowance)` fixed-arm socket: at source sheet thickness and .10 allowance this reproduces 4.5 × 1.7 mm. Default .15 mm allowance is a **proposed printer-dependent starting point**, not measured source tolerance. Original .4–.6 mm removable runners differ from the source's .21/.22 mm low features.

The sector arms, four proportional stations, diagonal-clearance journal, transverse bonded key, remote artwork landing and assembly are new constructions, not the source spacecraft or a copied mesh. The moving bearing diameter is `hypot(4.4, sheet) + 2 × allowance`; its corners clear by the selected allowance. The moving arm rests on the fixed arm as a sliding thrust face; the key leaves `2 × allowance` axial play. Both fixed connections require compatible adhesive. There is no snap fit or angle lock.

`reference-measurements.json`, `reference-analysis.json`, `reference-inspect.py` and `evidence/reference-sections.png` contain measured evidence and parameter mapping. Only license text is bundled, not the raw reference STL. All source project trees remain read-only.

Visual/interaction reference: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`, including README, App, styles, Viewer, worker, export, imageTrace and STL parser. Concrete patterns: 374 px left rail, compact sticky header, lavender desk/white panels/coral tactile selection states, paired millimeter inputs, saved dark theme, checkerboard image cutout, source mesh preview and explicit mm confirmation, exact-current worker result gating, preview-first phone stacking. Reused bounded studio/import/export/persistence infrastructure from `20261030-10`; the complete product geometry, fitting, kinematics, mechanical checks, presets and instructions were replaced. No history or dependency tree copied.

## Run / export

```sh
npm install
npm run dev
npm run predeploy
npm test
node parameter-check.mjs
```

Vite base is `/daily-app2/20261030-11/`. The app has `predeploy: npm run build`, `deploy: gh-pages -d dist`; the public combined site uses the **parent monorepo deploy flow** instead. Fonts, React, Three.js, fflate and Manifold WASM are bundled locally. No API keys, CDN imports or paid service. Heavy geometry and topology checks run in a debounced worker with request IDs/stale-result gating. Current valid geometry supplies both preview and binary STL. Failed edits disable export rather than downloading stale last-good geometry.

## Supported parameters (all lengths mm)

| Parameter | Supported range |
|---|---|
| Card width / height | 240–270 / 100–130 |
| Fixed / moving arm reach | 90–110 / 48–64 |
| Arm width | 16–22 |
| Station pitch, four stations | 8–12 |
| Sheet thickness | 1.6–2.4 |
| Total fixed-joint allowance / radial corner clearance | .10–.35 |
| Part spacing | 3.5–5 |
| Breakaway runner width / thickness | .8–1.4 / .4–.6 |
| Recessed tactile grooves | .2–.5 |

Three real presets and soft, cut-corner and rounded silhouettes affect printed geometry. Unsupported combinations (especially a large kit on the smallest card) fail clearly. The declared card XY envelope is enforced; maximum Z includes raised artwork above the sheet, not just nominal sheet thickness. Geometry is grounded at Z=0. Default card is 250 × 110 × 3.05 mm. Individual arms/axle/key export in bed-flat orientation. Connected-card STL, four individual STLs, and Everything ZIP with numbered instructions are real printable meshes. STL stores neither colour nor units. No 3MF is claimed.

## Local image / legend workflow

Choose PNG/JPEG or simple self-contained SVG; desktop drag/drop and phone file pickers work. Text (up to eight characters) and six searchable original SVG marks use the same geometry path. Files stay in the browser and are never uploaded. Only synthetic fixtures live in `public/samples`.

Limits: 16 bytes–2 MB; PNG/JPEG content/signature checked, ≤12 MP and ≤6,000 px per side. Images are locally normalized to ≤500 px then sampled on a **20 × 20** grid. SVG accepts simple paths/shapes, ≤2,000 elements, rejects scripts/external references and rasterizes to 256 px before sampling. Fit/cover crop, ±25% pan, light/dark background, threshold 1–254 or grayscale height, footprint 4–7 mm, Z rotation ±180°, placement X±1.5/Y±2 mm, raised depth .4–3 mm or engraved .4–.6 mm are bounded. This is **2D-to-relief**, not full 3D reconstruction or exact vector outline tracing. Grid samples are triangulated into a closed height-field, then Boolean-unioned/subtracted from a solid fixed-arm landing. Bright holes remain unraised/unengraved over solid backing; probes verify this in final geometry. Checkerboard preview shows actual sampled foreground.

The circular landing has a 6.5 mm safe radius, a .2 mm recess, and a minimum .8 mm backing after maximal engraving. It is beyond the moving arm's entire sweep, not near the axle or station holes. Imported content, threshold, depth, footprint, crop and placement measurably alter the final STL. Empty silhouettes, invalid transforms or leaving the safe zone block export. Replace, remove, reset transforms and return to defaults remain available.

## Local STL workflow

Supports actual ASCII and binary STL, ≤2 MB, ≤1,500 triangles, dimensions .2–250 mm per axis. Select Z, Y or −Z up before attachment; changing axis clears the import and requests reattachment. Source dimensions, triangle count and format are shown. **Explicit millimeter confirmation is required** because STL has no unit metadata. XY scales proportionally to a 4–7 mm footprint; Z independently to .6–3 mm. Scale factors, rotation, center/reset and placement controls are real.

Strictly bounded contract: one connected, outward-wound, closed, **convex solid with a broad flat bed contact**, no footprint overhang. The original vertices/triangles are transformed and Boolean-unioned into the fixed-arm landing; the source is **never substituted with a convex hull**. The parser checks complete facets, finite coordinates, dimensions, degenerate triangles, welded opposite-direction two-face edges, connectivity, positive volume and triangle intersections. Concave, hollow, open/nonmanifold, disconnected, excessive, overhanging or otherwise unsupported meshes are rejected with actionable guidance. There is no automatic repair claim. Bottom-footprint hull analysis is only a validation test, not replacement geometry.

## Saved designs / views / accessibility

Undo/redo, up to six local named designs, and versioned JSON save/open include bounded normalized image pixels or original mesh payloads. Missing image payloads explicitly request reattachment; invalid payloads are rejected. Theme is saved. Assembled, exploded, real connected card, de-tabbed print layout and isolated-part views share the same model. Preview angle is illustrative and changes only assembled placement, not the flat exported part geometry. Orbit, pinch, zoom buttons and fit-to-view work on touch devices. Saved dark theme, visible keyboard focus, generous buttons, collapsible labelled sections and reduced-motion CSS are present. Phone preview/export precede the controls; no narrow sidebar rail.

## Printing / assembly

Print flat, PLA/PETG, .16–.20 mm layers, three walls; no supports intended. Check bed size: use individual STLs if the card exceeds the bed. Snip all sixteen runners away from functional interfaces; flush-trim nubs. Export fixed arm + axle as a calibration pair before the full card. Fit depends on printer/material; never force a tight part. Bond fixed arm to axle first, lower the moving arm, side-insert and bond the keeper only after checking free motion. The head stops key insertion; its crosswise overhang blocks blade withdrawal. Keep glue out of the bearing and sliding faces. The rectangular journal permits some lateral play. Paper/ruler can be used to compare hole-center spans; there is no precision measuring accuracy claim. Cutters and compatible adhesive are external requirements; no metal hardware needed.

**No physical print, wear, friction, adhesive-strength, accuracy or assembly-force tests were performed.** Computational mesh validity does not prove successful printing or tactile quality. Adult craft: small parts and cutters.

## Verification performed

See `VALIDATION.md` and reproducible scripts/reports. Node independently parses final float32 STL, welds at 1e-5 mm, checks every edge has two oppositely directed triangles, checks unit normals, finite/nondegenerate faces, positive volume for every component, exact mm dimensions, all individual meshes and connected card. Manifold intersections check assembly/insertion, full-rotation samples, keeper retention, station holes, full-sweep artwork exclusion, disjoint flat parts and safe runner cuts. Browser tests use **real file-picker imports and downloaded STL/ZIP bytes**, compare exact preview fingerprints and regenerate saved state in Node. Production worker/WASM paths, invalid-file recovery, image holes, orientation, PNG/JPEG/ASCII/binary imports, presets/extrema, mobile touch orbit/pinch, persistence, theme, focus and failure/stale export handling are exercised. These are computational checks, not physical tests.

Dependency licenses: Fredoka/Rubik fonts SIL OFL 1.1; Manifold Apache-2.0; React, Three.js and fflate MIT. Original bundled six-mark SVG set and synthetic fixtures are freely reusable. Reference attribution/license is retained separately.
