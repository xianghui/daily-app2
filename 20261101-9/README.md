# Thread & North

A local React + Vite parametric **flat-pack suspension compass kit-card** studio. Snip twelve tabs, seat the cantilever mast, then hang the grooved needle cradle from two equal threads meeting at one apex. All three printed parts are included in the connected card. A pre-magnetized needle, fine thread, tape and filament-compatible adhesive are external. A blunt nonmagnetic stick makes a hardware-free yaw demonstration but cannot sense north. Not a navigation instrument.

## Run and build

Node22.12+; `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261101-9/`. Individual `deploy` is `gh-pages -d dist`, but this scheduled release uses the **root combined deploy**. `npm test` performs independent mesh and assembly checks. `node serve.mjs` serves production assets on port5649 under their actual base path. With that running: `node browser-test.cjs`, `node studio-test.cjs`, `node icons-drop-test.cjs`, `node orientation-test.cjs`, `node rapid-test.cjs`, `node mobile-regression.cjs`. Browser scripts use installed Playwright Chromium. Never require a CDN, remote API, paid service or key.

## Actual reference evidence

Local candidate STLs were located first under `/Volumes/ExternalHD/3d_printing_apps/`. Keycap Studio's README, styles, App, Viewer, worker, imageTrace, export and STL parser were inspected read-only. Its three-part15.2/14 mm switch negatives are not sheet-kit joints. Weave's README and actual diamond-link mesh describe an8 mm-high interlocking textile, not a flat card. Both actual local candidate hashes/dimensions/components are in `reference-measurements.json`.

The selected public reference is **White Cat Kit Card**, Mike Kasberg, [source README](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY4.0](https://creativecommons.org/licenses/by/4.0/). License downloaded independently to `REFERENCE-LICENSE.txt`. Download URL is recorded in measurements. Raw third-party STL is NOT bundled or redistributed. Attribution applies to its measured construction reference; this is an original parametric reconstruction, not a copied cat or repaired source mesh.

Downloaded binary STL:30,616 triangles; SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; assumed mm (STL has no unit metadata);179.8199968×178.0199938×3.1899996 mm;27 edge-adjacent components and nonwatertight source. Measured source sheet1.6 mm and receiving slot4.5×1.700012 mm; low planes .21/.22 mm. Cross-sections at Z=.1,.5,1.59 mm are plotted in `evidence/reference-sections.png`; source bounds and individual components recorded. Source defects are not silently repaired. Re-run `reference-inspect.py /path/to/reference.stl` with trimesh/numpy/matplotlib.

**Mapping:** default1.6 mm sheet and4.5 mm receiving-interface scale come from source measurements. Our4.5 mm male tongue is a proposed nominal reconstruction, not a measured source male width. Actual slots are `(4.5+fit)×(sheet+fit)`, with proposed .15 mm TOTAL allowance (not per side). At default4.65×1.75 mm. Tongue depth=plinth thickness−.2 mm. Proposed runners are .4–.6 mm high rather than blindly copying the source's low planes. Original cantilever, paired foot tongues, three thread eyes and needle groove differ entirely from the source and prior reflector/pipe-rack/loom kits. Generic tested studio/import/serializer infrastructure is reused; no project dependencies or Git history copied wholesale.

## Parametric construction and supported units

All dimensions are mm; angle controls are degrees. Manifold WASM performs genuine union/difference in a dedicated Web Worker. No convex-hull substitution and no overlapping-shell pseudo-unions. Three individually closed parts plus one connected-card export; each card has three separate frame bays and four accessible runners per part. Cutting all12 runners produces three parts and one remaining carrier. Tabs land away from tongue edges, sockets, eyes and needle groove. All exported components rest on Z=0.

| Control | Range mm | Default |
|---|---|---|
| Card width / height |110–134 /164–204|122 /184|
| Mast reach / eye height |38–46 /50–64|42 /58|
| Cradle length |38–46|42|
| Vertical thread drop (assembly-only) |26–34|30|
| Thread eye diameter |2–3|2.4|
| Total slot allowance |.1–.3|.15|
| Plinth / sheet thickness |2–2.6 /1.6–2|2.4 /1.6|
| Part spacing |3–4|3.5|
| Tab width / height |.8–1.4 /.4–.6|1 /.6|

Some card/part combinations do not fit; packing rejects them instead of shrinking the parts. Square, rounded and clipped profiles change both plinth and cradle. Three real presets have independently generated thumbnails. Text and six searchable bundled vector icons become real recesses through the same local image pipeline. STL stores neither colours nor units. Final X/Y/Z follows the selected downloadable part, not an assembled screenshot.

## Image → actual solid engraving

PNG/JPEG and simple SVG file picker on desktop/phone; drag/drop; bundled CC0 synthetic samples. File16 bytes–2 MB. PNG/JPEG content headers validate12 MP maximum and6,000 px side before decode; locally normalize to ≤500 px side. SVG supports simple paths/shapes only, ≤2,000 elements; reject scripts, foreign elements, external references/effects and invalid dimensions; rasterize locally to256 px. It is sampled conversion, NOT exact vector tracing.

The editor fits or crops/pans to a20×20 grid, alpha-composites onto selected light/dark background, uses luminance(.2126R+.7152G+.0722B), optional invert, then threshold1–254 or grayscale relief. `depth*(1−luminance/255)` or binary selected depth becomes an interpolated watertight height cutter. Boolean subtraction engraves the actual front plinth. Source image and checkerboard cutout/height grid are visible. Bright holes remain unengraved on continuous backing (not physical cut-through holes); this was independently probed. Threshold edges are grid-interpolated; finest useful detail is about one grid cell. This is2D-to-relief, **not automatic full3D reconstruction from one photo**.

Engraving depth .4–.6 mm, footprint4–7 mm, Z rotation±180°, XY offsets±1.5/±2 mm, physical keep-out radius6.5 mm. Transform is validated after rotation. Minimum backing1.4 mm. Raised art intentionally unsupported to keep bed-flat printing; source/transform replace, remove and reset work. Image crop shift±25%, cover/contain and polarity all affect the final solid.

## STL → integrated geometry

ASCII and binary STL ≤1,500 triangles,2 MB, .2–250 mm per dimension, finite coordinates within±10,000 mm. Require one positive-volume, closed outward-wound connected solid; independently check welded edges, degeneracy, self-intersections, convexity, broad flat bed contact≥25% XY and no overhang outside the actual bottom boundary. Unsupported concave/hollow/open/nonmanifold/multibody models reject with actionable guidance; no repair is claimed. The bottom boundary computation is only a validity check; it NEVER replaces the source mesh.

Show oriented source dimensions, format and triangles in a separate3D preview. Select Z/Y/−Z up before attach; changing axis clears source and requests reattachment. Explicitly confirm mm, since STL has no units. Fit XY proportionally to4–7 mm footprint, independently scale Z to .4–.6 mm engraving depth, rotate Z, centre/place in protected base region. Original validated mesh is Boolean-subtracted from the plinth. This is an actual mesh-shaped recess, not unchanged re-export or preview texture. Source shape/scale/placement survive STL export and portable JSON. Reject slender result under1.2 mm XY. It cannot obstruct mast sockets, moving cradle or thread paths. Same export validation runs on imported outputs.

## Studio and privacy

Keycap Studio patterns:374 px scrollable left control rail, sticky compact brand/theme header, paired sliders/numeric units, collapsible sections, tactile lower-shadow controls, soft-pink selected states, lavender-grey desk, white panels and large right live viewer. Locally bundled Fredoka/Rubik fonts. Saved coherent dark theme. Phone preview first, then status/warnings/export and stacked controls;320/390 px, touch orbit/pinch and keyboard focus tested. Reduced-motion CSS. Assembled, exploded, connected-card, de-tabbed and isolated-part views share the exact printable meshes. See-through base helps explain insertion. Manual yaw and thin external thread guides are explanatory geometry only: no magnetics/dynamics prediction, and never exported as plastic. Reset/fit/zoom controls work.

100 ms debounced builds, request IDs, current-state keys and worker errors gate export. Invalid edits leave a labelled last-good preview but cannot export it. Every current mesh is checked for finite/nondegenerate faces, opposite-directed double edge incidence at1e-5 mm weld tolerance and positive volume before enabling output. Preview and binary STL serialize the identical current valid result; UI carries a checksum independently compared with real browser downloads. Undo/redo, six local named saves and bounded2 MB JSON include actual downscaled image or mesh payload. Missing image payload requests reattachment; invalid saved meshes are reparsed, not trusted. No personal inputs in repository. All user processing remains in-browser, no uploads or external services. Sample buttons only fetch same-origin bundled fixtures.

## Printing, assembly and hardware

See numbered `printNotes` in `src/geometry.js`, UI and ZIP `ASSEMBLY.txt`. Print card OR three clean parts at100% mm, PLA/PETG, .16–.20 mm layers,3 walls, no supports intended. Calibrate one socket/tongue first, elephant-foot-compensate gently. Cut12 tabs1.6 mm outside parts, trim nubs without damaging interfaces. Insert both mast tongues vertically, bond BOTH seats and cure. Tie two equal thread legs through cradle eyes to one small loop through the mast eye, routed down the FRONT face to a common knot BELOW the arm. Estimated common knot apex6 mm BELOW eye centre (2 mm below the arm bottom); route the leader down the front face and under the arm, so ALL yawing thread legs start BELOW the arm. Real loop determines this, not a printed constraint. Position cradle directly below. Thread length ≈hypot(vertical drop−6,cradleLength/2−3), plus knots/loop allowance. Reported drop is from overhead-eye centre to cradle TOP. Nominal yaw is360°, but swing/tilt/knots are not simulated.

Place a centered pre-magnetized needle no longer than cradleLength−14 mm and ≤1 mm diameter in the1.2 mm-wide,.4 mm-deep blind groove; secure with narrow nonmagnetic tape. Cradle backing ≥1.2 mm. External fine thread,1 needle,tape and adhesive are required. Adult craft, sharp needle and small pieces; no loose needle. A blunt nonmagnetic stick gives a nonmagnetic suspension demonstration. Away from ferrous objects/electronics, let the thread untwist on a level nonmetal table. A real response depends on magnetization, thread torsion, mass balance, knots and interference. No automatic north/south label, numerical heading or accuracy claim. Do not use for navigation.

## Validation and dependencies

`validation-report.json` records46 independent mesh/assembly cases: defaults, all presets/profiles, each parameter bound, combined bounds, images and ASCII/binary STL with transforms and extremes.42 invalid parameter combinations rejected. Every card/part is independently serialized and parsed: binary byte count, finite float32 coordinates, nonzero faces, normalized normals, outward winding, positive volume PER component, dimensions and closed edge incidence. Kernel checks test24 cradle yaw positions,13 mast insertion positions, two real tongues/slots, three clear eyes, needle groove/backing,912 clear thread-path samples across24 yaw angles plus13 front-leader samples, card bounds, no part overlaps,12 real cuts giving4 components, and bed-support cross-sections. These are geometry checks, not force/stability/magnetic testing.

Real Playwright production tests save actual STL and ZIP downloads, parse each, compare UI checksums and JSON regeneration, import PNG/JPEG/ASCII/binary STL/SVG, vary threshold/content/depth/scale/placement, reject truncated/empty/oversize/open/nonmanifold/concave meshes and empty art, test undo/redo, JSON/named round trips, all views, theme, worker abort/recovery, stale workers and320/390 px phones. Reports/screenshots are alongside this README. Reproducible test scripts are committed. See VALIDATION.md for release results.

Dependencies: React/react-dom(MIT), Vite/plugin-react(MIT), Three.js(MIT), Manifold(Apache2.0), fflate(MIT), Fontsource Fredoka/Rubik(SIL OFL), gh-pages(MIT); Playwright(Apache2.0) is development-only. Six simple bundled mark paths are original local marks. CC0 synthetic samples, no third-party raw STL. **Physical printing, assembly, suspension balance, strength and magnetic behavior have NOT been tested.**
