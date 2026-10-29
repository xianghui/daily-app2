# Shutter & Shimmer

A local React + Vite maker studio for a **three-part hand-turned radial shutter fidget**. Hold the stationary palm and turn the scalloped screen against diffuse room light: N fixed apertures and N+1 moving apertures form a traveling transmission wave. This is neither a browser game nor a static STL re-export. It follows the many recent kit-card runs with a distinct optical/tactile interaction.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

`vite.config.js` uses `/daily-app2/20261029-17/`. Individual `predeploy` is `npm run build`; `deploy` is `gh-pages -d dist`. Public publication is through the parent monorepo's `deploy/` workflow, not this individual script. All generation, Three.js viewing, fonts, WASM, STL and ZIP packaging run locally; no API, CDN, paid service or file-upload endpoint.

## Actual STL reference and reconstruction

Reference: local supplied `/Volumes/ExternalHD/3d_printing_apps/spinning_generator/旋转兔子.stl`. Its project README and analysis instructions were inspected, then the **actual binary STL was independently parsed in this run** using `inspect-reference.mjs`. SHA-256:

`fe104f4001da035ff0e4f6666cc4647c6b2fa0f9f66a7a3519889c7486c8bf41`

320,308 triangles, 10 connected closed oriented components, overall **136.0943 × 61.7829 × 74.0756 mm**. STL is unitless: mm is corroborated by the local project, not embedded metadata. The identified hollow sleeve has bounds about **18.6633 × 18.6649 × 34.5472 mm**. Independent sections at Z=36,40,48,56,64 mm show a circular working-band outer radius **8.843–8.861 mm**, expanding to **9.327–9.339 mm** near its upper end, and a rotating three-lobed inner bore with radial extent **4.491–6.845 mm**. `reference-sections.svg` shows the actual sliced sleeve outlines; `reference-analysis.json` records measurements and all component bounds/volumes.

**Adaptation, not copying:** preserve the coaxial stationary hollow sleeve / separately rotating outer body arrangement. The measured 8.85 mm sleeve envelope plus a **new 2 mm web** defines the shutter aperture start radius **10.85 mm**. The measured bore's 4.49 mm minimum radius informs the circular **4.49 mm post**. Replace the original three-lobed helical constraint with a circular running bore, because this interaction requires continuous relative screen rotation, not screw-driven axial motion. The sector screens, grip, hollow plug socket and keeper are original parametric solids; the source thread, rabbit silhouette and decorative shells are not reused. Complete original source retention was not established; this app makes no claim to reproduce it. Proposed clearances are **new**, not measured source fits.

No redistribution permission is established for the supplied source, so **no raw third-party STL is bundled**. Reference trees and the old daily_app tree were read-only. No convex hull substitutes for the source or an imported mesh. Manifold solid differences and unions create all printable geometry.

### Visual/interaction reference

Read-only inspection of `keycap_generator2/README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, worker, STL I/O and export modules informed concrete studio patterns: compact sticky brand, 374 px left controls, grouped mm range/numeric fields, tactile short-shadow buttons, soft selected states, collapsible sections, gradient viewer, imported-source preview/units, named designs and separate-part export. Palette uses lavender-grey #e7e9f1, white panels, dark ink #1f2233 and coral #e2557a; locally bundled Fredoka/Rubik fonts. This is not a keycap/clicker and has no switch socket. General-purpose local import, history and preview infrastructure is adapted from the existing studio family; all shutter geometry and mechanism tests are specific to this app.

## Physical design / parameter limits

All physical dimensions are **millimeters**. Inputs are validated before geometry; invalid combinations pause export rather than downloading a stale last-good mesh.

| Parameter | Supported range | Effect |
|---|---|---|
| Palm diameter | 22–28 | Round, hexagonal or oval grip |
| Shutter outer radius | 26–34 | Real optical screen size |
| Rotor thickness | 1.6–2.4 | Moving plate section |
| Radial and axial running gap | 0.30–0.70 | Circular bore gap and each side of ideal centered rotor pose |
| Fixed apertures | Integer 10–16 | Moving screen always N+1 |
| Open fraction | 0.35–0.55 | Angular aperture width / pitch |
| Keeper adhesive gap | 0.10–0.25 radial | Plug radius = 2.1 minus this gap |
| Palm dimple depth | 0–0.6 | Tactile surface cuts |

Constants: stationary plate 3 mm; palm relief well 0.8 mm deep, leaving 2.2 mm backing; post radius 4.49 mm; socket radius 2.1 mm; socket depth 4.15 mm; keeper insertion 4 mm; keeper head radius 7.2 mm and thickness 1.6 mm. Source-derived aperture start radius 10.85 mm; outside rim at least 2.55 mm after scallops. Keeper overlaps rotor bore by at least 2.01 mm radially. Proposed fits are printer/material dependent. No physical print, retention strength, optical contrast or fatigue claims.

Presets **Soft Shimmer**, **Traveling Light** and **Fine Rays** generate actual thumbnail meshes. Bounded variations, undo/redo, saved named local designs and JSON open/save include bounded imported mesh/image payloads. Missing image payloads explicitly request reattachment. Saves are limited to six named entries; history to 35 snapshots.

## Personalization and local imports

PNG/JPEG/SVG and both ASCII/binary STL imports affect the **exported stationary palm geometry**, never the moving interface. Desktop/phone file picker and desktop drop zone; download/try five synthetic sample fixtures in `public/samples/`. Remove, replace, reset transforms, reset image controls and return to built-ins are implemented.

- File limit 2 MB, image ≤12 megapixels and ≤6,000 pixels per side checked from file headers before decode. PNG/JPEG normalized locally to at most 500×500 pixels; simple SVG rasterized locally to 256×256. SVG accepts simple paths/shapes/groups only, rejects active/external elements and unsupported content. Normalized payloads, not private original files, may be explicitly saved in local/JSON designs. No personal uploads are committed.
- **Image method:** fit or fill/crop, ±25% crop offsets, threshold 1–254, light or dark background removal/inversion, thresholded silhouette relief or luminance height relief. The source is sampled into a bounded **20×20** grid; adjacent samples form a closed triangulated height-field on a solid backing. Transparent pixels composite against chosen background; bright interior holes remain unraised/unengraved, with the continuous backing retained. Checkerboard shows the actual converted samples. This is **2D-to-relief**, not full 3D reconstruction from one photo, and not exact outline tracing. Features below the sample pitch may be lost; use bold artwork and inspect the final model. Raised depth 0.4–3 mm, engraving depth 0.4–0.6 mm; engraving retains at least 1.6 mm floor. Empty fields are blocked.
- Text (up to 8 characters) and six searchable bundled original icons use the same local image-to-solid path. Scale 4–7 mm, rotation ±180°, X ±1.5 mm, Y ±2 mm; all vertices must stay inside a 6.5 mm radius safe zone or export is blocked. Built-in default thumb nub returns when import is removed.
- **STL contract:** strict complete binary/ASCII parsing, ≤1,500 triangles, finite coordinates, each source dimension 0.2–250 mm, one connected outward-wound closed solid, opposite paired welded edges, no degenerate faces or self-intersections. Unsupported open/nonmanifold, concave, hollow, multipart, narrow/branching and overhanging inputs are explicitly rejected, not filled, convex-hulled or claimed repaired. Supported input is a broad flat-bottom **convex grip**; all XY projections must lie inside its bottom footprint, with bed contact ≥25% of bounding footprint. A small convexity/footprint calculation is validation only: original supplied vertices/faces are used for integration.
- Select Z-up, Y-up or upside-down **before attaching**; changing orientation requests reattachment. Source preview shows oriented mm dimensions and triangle count; explicit mm confirmation is required. XY scales proportionally to 4–7 mm footprint; Z independently maps to 0.6–5 mm height. Displayed source-to-target scale and source dimensions are explicit. Rotation/placement then apply to the actual mesh. Manifold unions it 0.15 mm into the isolated palm well, at least 10 mm clear of the complete shutter envelope. Slender XY results below 1.2 mm and unsafe placements are blocked.

## Views / exports

Assembled, exploded, print plate and isolated fixed/turning/keeper views share the exact same mesh arrays. Rotation and inspection separation are preview-only; STL always uses **separate bed-flat print orientations**. The cap prints head-down/plug-up and turns over for assembly. Orbit, zoom, fit and touch pinch work locally. Optional transparent fixed screen explains the bearing. The assembled rotor is centered in its 2×gap axial float; in use, it rests on a plate and makes intended sliding contact. No elastic/dynamic simulation.

Prominent binary STL download, explicit part selector, three per-part STL buttons and **Everything ZIP** (three STLs plus numbered assembly/print notes). STL has no colours or unit metadata: import as mm at 100%. Preview colours do not change print geometry. No fake 3MF. Displayed final X/Y/Z bounds match the selected exported geometry. Preview and exports use the same valid worker result; request IDs, serialized state keys and pending image conversion checks reject stale exports.

## Print / assembly

1. Start with **Soft Shimmer** as a full-size calibration trial. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, three walls; all three parts bed-flat as exported. No supports intended. Deburr aperture edges, post and bore; remove strings.
2. Lower rotor over stationary post. Confirm free rotation and axial float without keeper. Adjust running gap for printer, material and elephant-foot compensation.
3. Put a very small amount of suitable adhesive **inside stationary socket only**. Invert keeper and fully insert its 4 mm plug. Keep glue away from moving bearing and plate faces. Cure according to adhesive instructions and pull-check bond.
4. Keeper head captures the rotor only **after the bond cures**. This is an adhesive seat, not a snap fit or unverified friction lock. Without adhesive, omit the loose keeper and use the horizontal lift-out alternative. No bearings, magnets or fasteners required; adhesive is an additional consumable.
5. Hold the palm against diffuse room light and gently turn the scalloped shutter. Keep fingers away from the narrow gap. No bright/flashing source, motorized high-speed use or loading.

Small parts, adhesive and pinch points: adult maker project, not a child toy. Computational checks do not establish force, wear, bond strength, optical contrast or print success. **No physical print testing has been performed.**

## Validation and dependencies

`validate.mjs` independently parses final binary STL, verifies byte lengths, finite/nondegenerate faces, normal agreement, oppositely oriented welded edge incidence (1e-5 mm tolerance), each connected component's positive volume, Euler consistency, exact mm bounds and bed-flat placement. Runs defaults, all presets, representative min/max combinations, supported image/STL sources and transformed imports. Every separately exported part and translated float32 print plate is checked. Manifold intersections sample a complete turn, both axial-float limits, plug/rotor insertion paths, actual head-blocked withdrawal and separated print plate. Actual sliced screen overlap is measured inside a quadrant at several rotations to prove the optical openings move. Geometry is checked independently of unsupported physical performance claims.

Browser tests run against the **production bundle under its real base prefix**, exercise actual file pickers/downloads, compare downloaded mesh fingerprints to preview and regenerated JSON state, test PNG/JPEG pixel/threshold/depth changes and ASCII/binary STL transforms, errors/reset, all presets and marks, hole geometry, portable round trips, worker failure/staleness, named saves/history, actual ZIP parts and light/dark UI. Touch-enabled 390/320 px checks include orbit/pinch and reachable export. See `VALIDATION.md` and generated JSON reports for actual results.

Runtime dependencies: React/React DOM (MIT), Vite (MIT), Three.js (MIT), Manifold WASM (Apache-2.0), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL). gh-pages provides requested deployment tooling; Playwright is local validation tooling. Synthetic fixtures and icon paths are inherited from this monorepo's studio infrastructure; no private or unlicensed source models are redistributed.
