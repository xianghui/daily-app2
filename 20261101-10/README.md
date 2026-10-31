# Cone & Cut

A local React + Vite **three-part cone-section kit-card generator**. Snip twelve real runners, seat a triangular cone rib on two plinth tongues, then slide an inclined elliptical plate down-left into an opposing open half-lap. Bond all three joints. Adjustable cone and section geometry changes the actual ellipse and oblique joint, not just a label. Adhesive is the only external consumable. A fixed mathematical display, not a moving fidget or precision instrument.

## Run and reproduce

Node22.12+: `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Base `/daily-app2/20261101-10/`. Individual scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`; publication uses root combined deploy. `node serve.mjs` serves production on port5650 with the actual base path. Run `node browser-test.cjs`, `node studio-test.cjs`, `node icons-drop-test.cjs`, `node orientation-test.cjs`, `node rapid-test.cjs`, `node mobile-regression.cjs`, `node preview-test.cjs`. Reports and screenshots are committed; tests require development-only Playwright Chromium.

## Reference-first evidence and attribution

Local STLs were located first under `/Volumes/ExternalHD/3d_printing_apps/`. Read-only inspection covered Keycap Studio README, styles, App, Viewer, worker, imageTrace, export and STL/engine modules. The switch template and Weave diamond-link were actually parsed; their hashes, dimensions and components are in `reference-measurements.json`. These are switch negatives/interlocking textile rather than sheet construction. No unrelated switch sockets were copied.

Selected reference: **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY4.0](https://creativecommons.org/licenses/by/4.0/). README, license and actual binary STL were downloaded in this run. No raw third-party mesh is bundled. This is an original parametric reconstruction drawing on measured sheet/tab/interface construction, not a cat or unchanged export.

SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`;30,616 triangles;179.8199968×178.0199938×3.1899996 mm assumed (STL has no units);27 edge-adjacent components, nonwatertight source. Source defects are recorded, NOT repaired or copied. Actual sections Z=.1,.5,1.59 mm in `evidence/reference-sections.png` show thin runners, receiving slots and sheet plates. Measured sheet1.6 mm and slot4.5×1.700012 mm; low planes .21/.22 mm. `reference-inspect.py /path/to/reference.stl` reproduces measurements (trimesh, numpy, matplotlib, scipy, networkx).

**Measured versus proposed:** default1.6 mm sheet and4.5 mm interface scale derive from source. Our4.5 mm nominal male width is proposed, not a measured source male. Slot `(4.5+fit)×(sheet+fit)` uses proposed .15 mm TOTAL clearance, not per side; default4.65×1.75 mm. Oblique lap slot width=sheet+fit, normal to each receiving sheet. Proposed .4–.6 mm runners are thicker than the source low planes. Cone, analytic ellipse, diagonal lap and assembly route are original and mechanically different from prior kits. Shared editor/import/serializer infrastructure is reused; no Git history or dependencies copied wholesale. Details in `reference-analysis.json`.

## Geometry and supported parameters

All lengths mm; section tilt degrees. Manifold WASM unions/differences actual solids in a dedicated worker. Never convex-hull replacement or overlapping-shell pseudo-union. One connected card, three clean closed parts, twelve accessible tabs. Every export rests on Z=0. Frame2.4 mm; three bays keep parts separated. Slot edges/tongues have no breakaway tabs.

| Parameter | Range | Default |
|---|---|---|
| Card width / height |100–124 /178–218 mm|112 /198|
| Cone radius / virtual height |28–36 /48–64 mm|32 /56|
| Section intercept / tilt |18–24 mm /10–25°|21 /18|
| Total joint allowance |.1–.3 mm|.15|
| Plinth / sheet |2–2.6 /1.6–2 mm|2.4 /1.6|
| Part spacing |3–4 mm|3.5|
| Tab width / height |.8–1.4 /.4–.6 mm|1 /.6|

Some cross-combinations do not pack; clear error blocks export rather than shrinking parts. Three presets and square/rounded/clipped plinths, with real generated thumbnails. Every exposed parameter changes exported geometry. Text and six searchable bundled vector marks become real recesses through the local image pipeline.

Virtual cone `x²+y²=R²(1-z/H)²`, section midplane `z=h+x*tanθ`. Let `A=1-(R*tanθ/H)²`, `xc=-R²(1-h/H)*tanθ/(H*A)`. Horizontal ellipse semi-axes `a=R*(1-h/H)/A`, `b=R*(1-h/H)/sqrt(A)`. In-plane major=2a/cosθ, minor=2b; centre shifts xc.128 perimeter samples. This is always an ellipse within supported ranges. Rib's fragile apex truncated2 mm below virtual H; minimum tip width1.75 mm. Finite plate thickness straddles its mathematical midplane; it extends slightly beyond ideal cone surface. The single triangular rib represents the cone profile, NOT an opaque solid cone.

Cone has a right-open inclined half-slot; ellipse has left-open major-axis half-slot. Both end at x≈0 with total allowance. Seat rib vertically first, then translate ellipse along its inclined +U axis toward0 from the right, high side right, open slot left. This provides an accessible assembly path without bending sheets. Glue is required after dry-fit; no snap/positive-retention claim. Preview slider demonstrates insertion only; never changes exported plastic. Assembled/exploded positions and isolated/card/de-tabbed views share exact meshes. No fake motion or hardware sockets.

## Image → actual solid engraving

PNG/JPEG and simple SVG file picker on desktop/phone; drag/drop; bundled CC0 synthetic samples. File16 bytes–2 MB. PNG/JPEG content headers validate12 MP maximum and6,000 px side before decode; locally normalize to ≤500 px side. SVG supports simple paths/shapes only, ≤2,000 elements; reject scripts, foreign elements, external references/effects and invalid dimensions; rasterize locally to256 px. It is sampled conversion, NOT exact vector tracing.

The editor fits or crops/pans to a20×20 grid, alpha-composites onto selected light/dark background, uses luminance(.2126R+.7152G+.0722B), optional invert, then threshold1–254 or grayscale relief. `depth*(1−luminance/255)` or binary selected depth becomes an interpolated watertight height cutter. Boolean subtraction engraves the actual front plinth. Source image and checkerboard cutout/height grid are visible. Bright holes remain unengraved on continuous backing (not physical cut-through holes); this was independently probed. Threshold edges are grid-interpolated; finest useful detail is about one grid cell. This is2D-to-relief, **not automatic full3D reconstruction from one photo**.

Engraving depth .4–.6 mm, footprint4–7 mm, Z rotation±180°, XY offsets±1.5/±2 mm, physical keep-out radius6.5 mm. Transform is validated after rotation. Minimum backing1.4 mm. Raised art intentionally unsupported to keep bed-flat printing; source/transform replace, remove and reset work. Image crop shift±25%, cover/contain and polarity all affect the final solid.

## STL → integrated geometry

ASCII and binary STL ≤1,500 triangles,2 MB, .2–250 mm per dimension, finite coordinates within±10,000 mm. Require one positive-volume, closed outward-wound connected solid; independently check welded edges, degeneracy, self-intersections, convexity, broad flat bed contact≥25% XY and no overhang outside the actual bottom boundary. Unsupported concave/hollow/open/nonmanifold/multibody models reject with actionable guidance; no repair is claimed. The bottom boundary computation is only a validity check; it NEVER replaces the source mesh.

Show oriented source dimensions, format and triangles in a separate3D preview. Select Z/Y/−Z up before attach; changing axis clears source and requests reattachment. Explicitly confirm mm, since STL has no units. Fit XY proportionally to4–7 mm footprint, independently scale Z to .4–.6 mm engraving depth, rotate Z, centre/place in protected base region. Original validated mesh is Boolean-subtracted from the plinth. This is an actual mesh-shaped recess, not unchanged re-export or preview texture. Source shape/scale/placement survive STL export and portable JSON. Reject slender result under1.2 mm XY. It cannot obstruct rib sockets or lap interface. Same export validation runs on imported outputs.

## Studio and privacy

Keycap Studio patterns:374 px scrollable left control rail, sticky compact brand/theme header, paired sliders/numeric units, collapsible sections, tactile lower-shadow controls, soft-pink selected states, lavender-grey desk, white panels and large right live viewer. Locally bundled Fredoka/Rubik fonts. Saved coherent dark theme. Phone preview first, then status/warnings/export and stacked controls;320/390 px, touch orbit/pinch and keyboard focus tested. Reduced-motion CSS. Assembled, exploded, connected-card, de-tabbed and isolated-part views share the exact printable meshes. See-through base helps explain insertion. Insertion slider translates the ellipse along its actual assembly path only; no external-thread guides or motion simulation. Reset/fit/zoom controls work.

100 ms debounced builds, request IDs, current-state keys and worker errors gate export. Invalid edits leave a labelled last-good preview but cannot export it. Every current mesh is checked for finite/nondegenerate faces, opposite-directed double edge incidence at1e-5 mm weld tolerance and positive volume before enabling output. Preview and binary STL serialize the identical current valid result; UI carries a checksum independently compared with real browser downloads. Undo/redo, six local named saves and bounded2 MB JSON include actual downscaled image or mesh payload. Missing image payload requests reattachment; invalid saved meshes are reparsed, not trusted. No personal inputs in repository. All user processing remains in-browser, no uploads or external services. Sample buttons only fetch same-origin bundled fixtures.

## Printing and assembly

See numbered `printNotes` in `src/geometry.js`, UI and ZIP `ASSEMBLY.txt`. Print card OR clean parts,100% mm, PLA/PETG, .16–.20 mm layers,3 walls, no supports intended. Trial-fit tongue/socket and lap first; compensate elephant foot. Snip12 runners1.6 mm outside edges, trim nubs. Seat and bond BOTH rib tongues on plinth; shoulders down, tongue tips .2 mm above underside. Cure. Position ellipse high end right, slot left, approach from right along the inclined major axis and slide down-left until half-slot ends align at x=0. Dry-fit, then bond lap. Adhesive is required; do not force. No bearings, screws, magnets, cords or film. Adult craft with cutters and small pieces. Exploded view illustrates separation, not insertion direction.

## Validation and dependencies

`validation-report.json` records independent serialized float32 STL checks (1e-5 mm weld), normalized/winding-consistent normals, nondegenerate finite triangles, exact mm bounds, two opposite incidents per edge, positive enclosed volume per component and Euler characteristic. Defaults, all presets/profiles, each parameter endpoint, combined endpoints, image and ASCII/binary STL transformed and endpoint models checked. Kernel tests verify33 ellipse insertion positions,13 rib insertion positions, all assembled component intersections, two complete tongues/slots, opposing half-slot openings,32 independent analytic cone-equation points, full card envelope, no packed overlaps,12 cuts yielding three parts plus carrier, and upper cross-sections supported by bed footprint. Bright image holes are independently probed to preserve backing. Runtime worker also checks final manifold/winding/volume before enabling export.

Real browser production tests compare actual downloaded STL signatures to preview and portable JSON regeneration, then apply the same final mesh/assembly checks to imported outputs. Test PNG/JPEG, ASCII/binary STL, simple SVG, changed pixel content/threshold/depth, scale/rotation/placement, remove/replace/reset, invalid/truncated/open/nonmanifold/concave/excessive meshes and dimensions, empty images, every preset, text/icons, portable JSON and named saves, missing payload, ZIP contents and individual buttons, undo/redo, all views, saved theme, keyboard focus, collapsible sections, reduced motion, worker abort/recovery and stale-result gating.320/390 px true-width phones test all tabs, long instructions, picker imports, actual downloads, touch orbit and pinch. No external generation/upload requests.

Dependencies: React/react-dom, Vite/plugin-react, Three.js, fflate, gh-pages(MIT); Manifold(Apache2.0); locally bundled Fredoka/Rubik(SIL OFL). Playwright(Apache2.0) development only. Fixtures are synthetic CC0; six bundled simple marks are original. No CDN/API/key/paid service. Computational validation is NOT physical testing. **Physical printing, assembly, fit, adhesive strength and durability have NOT been tested.**
