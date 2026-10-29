# Ray & Box

A local React + Vite studio for a **six-panel pinhole-camera kit card**. Snip the runners, seat four walls in a floor, lower the roof and add a paper projection screen. This is a physical assembly generator, not a camera app or simulated photograph. Customize chamber proportions, aperture, fits, label silhouette and actual printable artwork/grips.

**Required extras:** opaque filament, translucent tracing paper, opaque seam tape and suitable adhesive. The camera is not guaranteed light-tight; projected brightness/resolution is untested. Never aim at the sun, lasers or bright point sources. **No physical print or optical-performance tests have been performed.**

## Run / build

Node 22.12+ and npm: `npm install`, `npm run dev`. `npm run predeploy` builds `dist/`; `npm test` runs independent mesh and assembly checks. The Vite base is `/daily-app2/20261029-18/`. Per-app gh-pages scripts exist as requested, but public deployment uses the **root monorepo deploy/** flow, not this app's deploy command.

All dependencies are locally bundled: React/React DOM, Vite, Three.js, Manifold WASM (Apache-2.0), fflate, Fontsource Fredoka/Rubik (SIL OFL). gh-pages is deployment tooling and Playwright is browser-test tooling. No CDN, paid API, service or API key. Browser files never upload.

## Reference-first evidence / attribution

Local STL candidates under `/Volumes/ExternalHD/3d_printing_apps/` were enumerated first, including the clicker templates, slider references and fabric-link meshes. Their mechanical structures did not provide a flat-sheet kit carrier suited to this six-panel chamber. The public **White Cat Kit Card**, by **Mike Kasberg**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source](https://github.com/mkasberg/white-cat-kit-card), is licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Its README, LICENSE, `kit_frame.scad` and main SCAD were inspected read-only.

The actual binary STL was downloaded fresh to `/tmp/raybox-reference.stl` and parsed/sectioned, not inferred from a listing image. Identifier, download URL, hash, dimensions, component details, section counts and explicit adaptation decisions are in `reference-analysis.json`. `reference-inspect.py` reproduces read-only measurements; `evidence/reference-sections.png` depicts actual mesh sections at Z=.1, .5 and 1.59 mm, visually reviewed in this run.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; overall **179.8200 × 178.0200 × 3.1900 mm**. STL has no unit metadata; millimeters are corroborated by SCAD.
- Measured sheet planes **0 and 1.6 mm**; perimeter at Y=100/Z=.5 spans X=0 to 1.6 mm: **1.6 mm rail**. Low bridge elevations include **.21/.22 mm**; source `wire()` confirms tapered one-layer connections plus overlap, not a universal printer fit.
- **27 edge-adjacent components**, including 25 two-triangle artifacts; original mesh is **not watertight**. It is a design reference only: not silently repaired, boolean-imported or re-exported.

**Measured versus redesigned:** retain the measured **1.6 mm default sheet** and genuine connected-carrier/low sacrificial-runner construction. New frame rails are **2.4 mm**; new runners are **.4–.6 mm thick × .8–1.4 mm wide** for this larger chamber kit. Six original camera panel profiles, sixteen mortises, complementary tongues, paper-window border, physical aperture and isolated exterior label lip are new. Proposed total slot allowance **.10–.35 mm**, **.15 mm tongue-end recess** and **.1 mm end sealing gap** are not measured source fits. No source spacecraft outlines are copied; no raw third-party STL is bundled. Credit is also included in exported assembly instructions. No endorsement implied.

### Studio reference

Read-only inspection of `keycap_generator2/README.md`, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, `src/worker.ts`, STL reader/writer, image tracing, legend and export modules informed concrete patterns: **374 px left panel**, compact brand/theme header, collapsible sections, paired mm sliders/numbers, tactile short-shadow keys, pink selected states, named designs, source preview and explicit units, and separate printable exports. Lavender-grey desk #e7e9f1, white panels, dark ink #1f2233 and coral #e2557a; coherent saved dark theme and locally bundled rounded fonts. Phone layout puts viewer/toolbar, dimensions and export **before** stacked controls. No unrelated switch sockets or keycap templates are imposed.

Generic local import, history, UI and mesh serialization infrastructure is adapted from this monorepo's maker studios. All camera geometry, optical checks, placements and assembly sequence are specific to this generator. Gallery audit found no earlier pinhole/obscura physical kit mechanism; older software camera games are unrelated.

## Parameters / units / physical design

All dimensions below are **millimeters**, except preview rotation and calculated field angles in degrees.

| Control | Range | Actual geometry effect |
|---|---|---|
| Card width / height | 200–260 / 180–235 | Connected outer envelope and three carrier bays |
| Chamber inner width / height | 30–42 / 26–38 | Four wall profiles and roof/floor mortise placement |
| Chamber clear length | 44–68 | Wall span and aperture-to-window separation |
| Pinhole diameter | .8–1.6 | Actual through aperture, bounded 48-sided cylinder |
| Tongue width | 4–6 | Sixteen matching structural seats |
| Total joint clearance | .10–.35 | Added to each mortise dimension, not per side |
| Sheet | 1.6–2.4 | Panel section and joint engagement |
| Part spacing | 4–7 | Accessible runner lengths and card packing |
| Breakaway width / thickness | .8–1.4 / .4–.6 | Twenty-four solid-connected low runners |
| Label dimples | 0–.4 | Actual tactile cuts outside the chamber |

Rounded, chamfered and tapered label-lip silhouettes and three actual-mesh preset thumbnails: **Rose Camera**, **Wide View**, **Long Focus**. Bounded variation uses a generous 260 × 235 mm carrier; impossible small-carrier/large-part combinations report an error instead of overlapping parts or resizing silently. The continuous minimum label floor is .8 mm after maximum permitted engraving. Sheet panels stay at least 1.6 mm. Card maximum Z includes label relief and is shown explicitly.

There are six independently printable closed parts plus one real connected-card export. Every panel has four accessible low runners attached to the carrier; tabs avoid functional tongues, slots, aperture and window. Removing 24 runners leaves six panels and the carrier as **seven distinct solids**. Carrier goes to waste. Each upper/lower tongue engages sheet minus .15 mm, so tips do not protrude through floor or roof. Shoulders support the panels; **adhesive is required**, not an untested snap lock. New tolerances depend on printer, material and first-layer expansion: print a floor and wall first as a fit calibration.

Side walls span Y=.1 to L−.1; front and rear panels sit just outside their ends. The .1 mm end gaps avoid geometric interference but require opaque seam tape. Eight lower tongues enter the floor before the roof is lowered over eight upper tongues; the assembly sequence has been checked by solid intersection along insertion paths. Paper mounts outside the rear window, whose nominal inner-width/height inset is 4 mm on every side; extra side thickness adds backing. Seal all seams/mortises with opaque tape, use opaque filament and test in a dark room.

The displayed screen distance is front-inner-plane to outside paper plane: **clear length + sheet**. Ideal field angle = `2 atan(window size / (2 × screen distance))`. The pinhole is thick (one full sheet) and FDM printable, not an ideal optical stop; vignetting, layer leakage, diffraction and paper scatter are **not** simulated. Four ideal rays and the translucent screen plane are explanatory **preview only**, not printable parts or a promise of image quality. Smaller aperture trades brightness for geometric sharpness; no calibrated focal length, image or resolution claim.

## Image / text / icon / SVG workflow

Choose/replace from a file picker on desktop/phone or drag one file into Import. Synthetic samples are bundled and downloadable: `mark.png`, `waves.jpg`, `ring.svg`, `wedge-ascii.stl`, `gem-binary.stl` (generated studio fixtures, no personal inputs).

PNG/JPEG file limit **2 MB**, ≤12 megapixels and ≤6000 pixels per side, checked from headers before decode; normalized locally to at most 500 × 500. Simple SVG shape/path/group input is bounded at 2000 elements, rejects active/external content and unsupported effects, and rasterizes locally to 256 × 256. Original private uploads are not placed in this repository.

**Exact method:** fit or crop the source with ±25% crop offsets; composite transparency against the selected light/dark background; sample luminance into **20 × 20** values. Threshold 1–254 selects dark pixels, or luminance produces grayscale heights. Triangulate that heightfield into a closed backing solid, then use Manifold union/subtraction in a .2 mm deep label well. This is **2D-to-relief**, not full 3D reconstruction from one photograph and not exact outline tracing. The checkerboard shows actual selected samples; interior bright holes stay unraised/unengraved on the continuous backing. Small details below sample pitch may be lost. Empty silhouettes are blocked.

Raised depth .4–3 mm; engraved depth **.4–.6 mm** keeps at least .8 mm backing. Eight-character text and six searchable original SVG marks use the same geometry path. Footprint 4–7 mm, Z rotation ±180°, X ±1.5 mm, Y ±2 mm; all vertices must remain within the protected 6.5 mm radius or exports stop. The label lip is **outside** behind the screen, keeping artwork away from the optical chamber and joints. Preview colours do not alter geometry and STL does not store them.

## STL integration workflow

Both complete **binary and ASCII STL** are parsed in the geometry worker. Limits: 2 MB, **1500 triangles**, each source dimension .2–250 mm, finite coordinates, no degenerate faces, one connected positive-volume outward-wound closed solid, oppositely paired welded edges (1e−5 mm) and no self-intersections.

Supported input is deliberately bounded to a **convex broad flat-bottom grip** whose complete XY projection stays inside its bed footprint; base contact must be at least 25% of its bounding footprint. Open/nonmanifold, concave, hollow, multipart, branching, overhanging and other unsupported input gets actionable rejection—**not** a convex hull, unverified repair or unchanged re-export. The original triangles are used; footprint/convexity calculations validate only.

Select Z-up, Y-up or −Z-up before attaching (changing axis requests reattachment). A separate source 3D preview shows oriented source dimensions/triangle count/format. Explicitly confirm mm: STL stores no units. Footprint 4–7 mm scales XY proportionally, Z independently fits .6–3 mm height; source-to-target scale factors are shown. Set rotation and placement; reset, remove or replace anytime. Manifold **unions the original transformed mesh .15 mm into the exterior label well**, creating one closed floor part. Slender results below 1.2 mm or out-of-zone placements are blocked. It visibly and measurably changes the final card/floor STL while other components remain unchanged.

## State / responsive generation / export

Heavy solids and STL validation run in a locally bundled **Web Worker + Manifold WASM**, with 100 ms debounce, bounded resolution, request IDs, state-key matching, import/conversion busy gates and clear worker/build errors. The last valid preview may remain visible after an invalid edit, but **export is disabled** until the current state succeeds. Preview and export share exactly the same mesh arrays; the displayed mesh fingerprint matches downloaded bytes in tests.

Undo/redo (35 snapshots), six named browser-local designs and JSON save/open include bounded normalized image/original indexed-mesh payloads, not unverifiable file paths. Missing portable image data explicitly requests reattachment; restored STL payload is reparsed/revalidated. Local storage errors offer JSON download. No upload or remote processing. Only synthetic fixtures/evidence are committed.

Views: connected card, assembled camera, exploded, de-tabbed plate and every isolated panel. Fit/orbit/zoom and touch orbit/pinch, optional see-through panels and estimated assembly separation. Exploded positions, paper and rays are preview-only. All STL downloads stay **bed-flat** and do not fuse assembly interfaces.

Download the connected card, each of six panels, or **Everything ZIP** containing seven actual binary STLs (card + six alternatives) and numbered `ASSEMBLY.txt`. Do not print both the complete card and a second set of identical loose panels. No fake 3MF, no image-only exports. Default card 225 × 215 mm; max 260 × 235 mm may exceed a printer bed—export separate parts instead.

## Printing / assembly

1. Opaque PLA/PETG, .4 mm nozzle, .16–.20 mm layers, three walls, all pieces bed-flat. No supports intended. Print floor and wall first, calibrate clearance and inspect hole size; never force a joint.
2. Snip 24 runners, trim nubs, clear strings and deburr holes/mortises.
3. Seat long side walls in four outside floor slots. Seat front pinhole and rear screen frame in transverse slots. Label lip remains behind rear frame.
4. Lower roof over eight upper tongues. Once fit is confirmed, glue all 16 fixed joints square and let cure.
5. Tape flat translucent tracing paper over the outside of the rear window. Seal every housing seam/mortise with opaque tape; test for light leakage in a dark room. Paper/tape are additional consumables, not generated solids.
6. Aim at a bright room-lit scene, shade the screen and look at its rear face. Do not use direct sun, lasers or bright point sources. Optical performance, strength and print quality remain unverified physically.

Small parts, cutters, tape and adhesive require adult handling; not a child toy or a measurement instrument. Full numbered notes and attribution travel with ZIP exports.

## Validation performed

See `VALIDATION.md`, `geometry-validation.json`, browser reports and reproducible scripts. Computational mesh/fit checks are distinct from physical print or projected-image testing. **No physical print, adhesive strength, light-tightness or optical-performance test was performed.**
