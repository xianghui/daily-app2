# Loop Loom — Scotch-yoke fidget STL studio

A local browser-based parametric generator for a hardware-free palm fidget. Circling an eccentric crank pin drives a slotted shuttle back and forth. Two guide posts prevent shuttle rotation. This interaction is continuous reciprocation, not a geared spinner, simple track slider, ratchet or clicker.

## Run / export

`npm install` then `npm run dev`. `npm run predeploy` builds with base `/daily-app2/20261021-14/`. Per-app deploy scripts exist as requested; publish the combined collection from the **root** repository deploy flow, not from this folder.

React + Vite, Three.js with OrbitControls, and Manifold WASM are bundled locally. Mesh generation runs in a worker, with bounded 48-segment cylinders and 12 segments per corner quadrant. No CDN, service, API, keys or uploads. Binary STL export uses exactly the final mesh arrays used by the preview. Print-layout and assembled-motion previews use identical solids with different rigid transforms; exports always use separated print coordinates. Individual parts export at their local origin. STL units are interpreted as millimeters.

## Controls (all dimensional values in mm)

| Parameter | Range | Default |
|---|---|---|
| Shuttle travel | 12–24 | 18 |
| Frame / slot wall | 3–5 | 4 |
| Palm corner radius | 3–8 | 6 |
| Grip scallop depth | 0–0.7 | 0.4 |
| Running radial / axial gap | 0.25–0.60 | 0.40 |
| Cap diametral interference | −0.10–0.15 | 0.05 |

Pocket, Everyday, Loose PETG presets; reset; slider + numeric inputs; invalid/out-of-range/nonfinite values block export. Size depends on stroke and wall; both assembled X/Y/Z and flat-layout X/Y/Z are shown. An assembled angle slider illustrates a full revolution. Orbit, pinch zoom, explicit zoom buttons and fit-to-view work on phones and desktops.

## Mechanism / dimensions

Seven solids: palm base with three integral posts; crank with integral eccentric pin; shuttle with one transverse and two parallel slots; four interchangeable blind retaining caps. Post diameters 4 mm; running slot/bore width = 4 + 2 × gap. Cap outside diameter 7 mm, height 2 mm, bore = 4 − interference, bore depth 1.4 mm and roof 0.6 mm. Designed engagement about 1.35 mm leaves 0.05 mm roof gap at nominal placement. Minimum cap overlap beyond running slots is 0.9 mm. All rigid plates are 3 mm thick. Slot ligaments are at least 3 mm. No compliant parts.

The eccentric radius is half the stroke; shuttle X = eccentric radius × cos(crank angle). Pin Y slides through the transverse slot. Fixed guide posts move relative to the shuttle through its longitudinal slots. Capsule end centers match the eccentric travel; radial gap remains at the endpoints. Continuous bounds check slot travel, ligaments, guide/drive cap spacing and coverage over the base. Crank and main pivot cap are below the shuttle. Guide/drive caps are above it. Caps friction-seat to their posts; cap/post interference is intentional. All other moving interfaces remain separate.

## Print and assemble

Print flat as exported: posts up, caps open-side down. Start with PLA/PETG, 0.2 mm layers, 0.4 mm nozzle, four walls and 30% infill. No supports intended; cap roofs bridge about 4 mm. Remove strings and elephant foot. Do not scale the STL after export, since that scales the fit too.

1. Fit crank onto the central base post.
2. Friction-seat one cap onto that post, leaving the running gap above the crank.
3. Place shuttle over both guide posts, threading eccentric drive post through transverse slot.
4. Seat three remaining caps without clamping the shuttle.
5. Turn slowly through a full revolution. If binding, stop, carefully pry off caps with a thin tool, deburr or recalibrate. Do not force the posts.

The crank cap sits under the shuttle and must be installed first. Caps are friction-retained, not positive-lock snaps. Verify each resists a gentle hand pull, and stop using the toy if any loosen. Small removable parts are not suitable for young children. No magnets, bearings, screws, adhesive or other hardware required.

## Calibration guidance

Print a cap alone (7 × 7 × 2 mm), then the base and crank as a full-size pivot trial. The crank must turn freely, the cap must seat without splitting and must resist pulling off. Start running gap 0.40 mm for PLA, 0.60 mm for PETG; adjust in 0.05 mm increments. Positive cap interference tightens grip, negative compensates for undersized holes; adjust in 0.05 mm steps. These are printer/material-specific starting values, not universal tolerances. Trial grip cannot predict long-term wear.

## Validation

`npm test` runs geometry checks and writes `geometry-validation.json`: defaults, presets, minima/maxima and all 64 range corners (70 cases). Combined and seven individual binary STLs are parsed for finite coordinates, nonempty/nondegenerate triangles, stored normal consistency, opposite directed edge winding, exactly two welded edge incidences (1e-5 mm weld tolerance), seven closed components (one for each individual export), positive component volumes and millimeter bounds. Disjoint export bounding boxes exclude accidental print-layout joins. Manifold CSG with 1e-5 mm simplification provides real unions/subtractions, not overlapping render-only meshes.

Mechanism checks cover 361 angle positions for travel, running gaps, retention overlap and cap separation. Defaults/min/max additionally undergo 24-angle Manifold intersection checks on every assembled part pair except the four intentional cap/post friction fits. These are geometry/kinematic checks, not a force, durability or physical print test.

`node browser-test.cjs` (dev server port 5196, or TEST_BASE override) exercises presets, minimum/maximum controls, invalid inputs, actual combined and individual downloads, parsed STL validity and exact preview/export fingerprints. It tests live preview, assembled motion, 390/320 px phone layouts, touch orbit, pinch zoom, reachable download and no remote requests/runtime errors. `node gallery-test.cjs` checks gallery script compilation, preserved entries, correct unique new entry and browser render/search against root server port 5195. JSON reports and desktop/mobile screenshots document results. Production is also browser-tested against the combined deploy output.

**No physical print has been tested.** Sliding feel, friction-cap retention, bridge quality, wear and strength require printer-specific trials.
