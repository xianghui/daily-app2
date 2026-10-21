# Incline Interlude

A browser-based parametric STL studio for an assembled **inclined-slot cam fidget**. A horizontal shuttle drives a captured vertical pin on a perpendicular thumb follower. Unlike independent XY slides, these two motions are coupled: y = −slope × x, with normal slot clearance creating a small amount of backlash. No hardware, bearings, magnets or springs. Four distinct printable solids: palm frame, cam shuttle, thumb follower and guide lid.

## Run and build

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`.
Vite base: `/daily-app2/20261022-8/`. App scripts include `predeploy: npm run build` and `deploy: gh-pages -d dist`; the published collection uses the **root** monorepo deploy flow. React/Vite, Three.js/OrbitControls, manifold-3d WASM and fflate are bundled locally, with Playwright for browser validation. No generation CDN, API, key or backend. Original studio styling informed by the model-first composition at https://vaseverse.org/; no branding/assets/code copied. Existing lab import/preview utilities reused with a newly built cam mechanism.

## Controls and units

All length values and STL coordinates are **millimeters**. Half stroke 3–5 mm; slope 0.4–0.7 mm/mm; shuttle length 38–42 mm; follower width 12–14 mm; palm thickness 3–5 mm; static socket radial allowance −0.08…+0.08 mm; shuttle edge groove depth 0–0.6 mm; running radial/axial clearance 0.2–0.5 mm. Nominal input travel 6–10 mm, ideal output travel 2.4–7 mm. Hard-stop travel includes one running-clearance allowance at each end; checks include that overtravel and normal-slot backlash. Slot end margins exceed pin radius; hard base stops bound travel. Grooves do not reach the cam slot. Preview cycle is an illustrative pose, not a physics/friction simulation.

Three presets generate actual geometry thumbnails. Variations stay in the validated parameter domain. Editing regenerates CSG in a worker. Undo/redo keeps 35 bounded states. JSON save/open includes the validated STL mesh or normalized image and conversion parameters; no missing source is silently invented. Picker, drag/drop, remove/replace and reset are supported. Preview palette does not affect geometry: STL has no colour.

## Image import

PNG and JPEG, 16 bytes–2 MB, ≤12 million pixels, ≤6,000 px per side. Content headers and dimensions are checked before image decoding. Transparency is composited onto white. A portable normalized preview ≤500 px on its longest side is sampled into a **20×20** luminance grid. Fit/contain or fill/crop and X/Y shifts ±25% control sampling. Threshold 1–254 selects raised samples; grayscale mode maps darkness continuously into height. Adjacent samples are triangulated; the perimeter is closed to a 0.4 mm continuous backing and the bottom sealed. This is a raised silhouette/height-map relief, **not full 3D reconstruction from one photograph**. Empty silhouettes are blocked.

Depth is 0.4–3 mm, footprint 4–7 mm, Z rotation ±180°, X shift ±1.5 mm, Y shift ±2 mm on the palm tab. The backing sinks 0.15 mm into the tab and a real manifold union creates one solid. Safety radius 6.5 mm prevents imports from reaching the moving assembly. The source image and exact conversion grid are shown beside the final model. Original and converted synthetic PNG/JPEG samples are included locally.

## STL import

ASCII and binary `.stl`, 16 bytes–2 MB, ≤1,500 triangles, every source axis 0.2–250 mm. STL carries no unit metadata, so **explicit millimeter confirmation** gates integration. Source dimensions and mesh preview are displayed. The parser checks finite coordinates, nondegenerate faces, welded edge incidence and opposite winding, positive volume, one connected shell, nonadjacent face intersections, convexity and a broad flat Z-facing bottom. Open, nonmanifold, inward, concave, disconnected, overhanging or unsupported input is rejected with guidance; no arbitrary repair is claimed. This intentionally narrow acceptance class keeps local integration support-free and verifiable. Use a low convex closed grip with a flat base, not an arbitrary character model.

XY is proportionally fitted to a 4–7 mm maximum span; Z height 0.6–5 mm is independently fitted. Minimum fitted XY span 1.2 mm. Rotate around Z, offset, center/reset, replace/remove. The transformed mesh is sunk 0.15 mm into the stationary palm tab and Boolean-unioned; more than one resulting component blocks export. Source shape, scale and placement all affect exported geometry. Sample ASCII wedge and binary gem are synthetic in-repository fixtures, no external attribution required. Personal files are never uploaded or committed. Saving JSON explicitly downloads a bounded portable source payload to the user's device.

## Export, assembly and calibration

One primary binary STL action exports a bed-flat layout or selected solid; ZIP includes all four individual STLs and assembly notes. Preview and export share the exact final geometry. The assembled preview uses separate rigid transforms; export always uses the printable layout and does not fuse moving joints. Export bounds are shown in mm.

Print all parts **as exported**, flat roof/body face down: follower pin up, lid legs and cheeks up. Flip follower and lid for assembly. Place shuttle in base channel, follower pin into the diagonal slot, then evenly press all four lid feet into the blind base sockets. Lid guide cheeks constrain the follower; roof overlaps retain it; horizontal rails and integral end stops constrain the shuttle. Side windows expose the shuttle and the central opening exposes the follower for thumb rubbing. No support bridges or extra hardware are required by designed geometry. Imported convex grips must remain Z-facing.

Start with PLA or PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, four walls. Try 0.30 mm running clearance, but **not universal**: print all four parts as the full-size calibration trial, deburr pin/slot, compensate elephant foot and inspect slicer paths. For a loose lid use a tighter static socket allowance; for binding increase running clearance. Seat all four legs fully. Never glue moving interfaces or force a jam. Pry the lid up evenly for disassembly. Stop use if the lid loosens. Small parts: not a child’s toy.

## Validation and limitations

`validate.mjs` parses binary exports, checks stored normals, finite coordinates, nondegenerate faces, dimensions against model bounds, nonempty positive-volume components, opposite edge winding and exactly two welded incident faces per edge. Each part is one connected manifold solid. It covers all 256 parameter-box corners, defaults, presets and deterministic variations, plus image-relief and both STL fixtures over defaults/extrema/presets. It checks slot/end-wall margins, roof retention, pin engagement, nonintersecting print layouts and input/output stroke limits. Defaults/extrema/presets and imported cases additionally sample 39 assembled poses (including both hard stops with maximum slot backlash) using real solid intersections, permitting only intended lid-foot/static-socket interference. The pin remains inside the capped slot and guide range across the full stroke.

`browser-test.cjs`: real PNG/JPEG/ASCII/binary picker imports and downloaded binary STLs; pixel/depth/threshold/fit/placement changes; removal/reset; malformed/truncated/nonmanifold/concave/oversized/empty input; dimensions and preview/export signatures; per-part downloads; narrow phone layouts and real touch orbit/pinch. `extra-browser.cjs`: every preset, variations, all portable source round trips, undo/redo, ZIP contents, drag/drop and colour neutrality. `gallery-test.cjs`: inline syntax, preservation of earlier entries and rendered gallery. `production-test.cjs`: production worker/WASM, phone controls, pose changes and large-image portability. JSON reports and desktop/phone screenshots record results.

These are geometry and kinematic checks, **not physical print tests**. No print has been performed. Fit, friction, wear, comfort and lid pull-off forces are unmeasured; imported surface detail may be smaller than a nozzle and should be inspected in a slicer. Digitally valid geometry does not guarantee a successful physical mechanism on every printer/material.
