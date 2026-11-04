# Eddy & Brake

A local React + Vite maker studio for a **five-part magnetic-damping pendulum kit card**. Snip twenty real runners; assemble a socketed deck, pivot portal, two opposing magnet carriers and a windowed copper-vane frame. This is a physical flat-pack assembly generator, not a browser simulation or game.

**External magnets, copper and M3 hardware are required. Physical printing, fit, retention strength and damping have not been tested.** Computational geometry checks do not establish a useful damping coefficient. Without magnets/copper it is an undamped pendulum, not a hardware-free magnetic equivalent.

## Run / build

Node 22.12+ recommended. `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Own deploy scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; public combined deployment belongs to the parent monorepo. Vite base is `/daily-app2/20261104-10/`.

Dependencies are independently installed: React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, local Fontsource Fredoka/Rubik, gh-pages and Playwright for validation. Fonts, WASM and worker scripts are locally bundled. No CDN, account, API key, server generation or paid service.

## Reference-first evidence and reconstruction

Inspected the read-only Keycap Studio README, App.tsx, Viewer.tsx, styles.css, imageTrace.ts, worker, STL and export modules. Adopted concrete studio patterns: 374-px left control rail, paired range/number fields, raised tactile buttons and pressed selections, lavender-grey desk, coral accents, white panels, local rounded fonts, saved dark theme, source/cutout previews, explicit STL orientation and mm confirmation, worker-owned geometry, isolated/assembled/exploded/plate views and prominent part/ZIP export. Phone layout places preview and export before stacked collapsible controls. No source project files were edited or its dependencies/history copied.

Local actual STL candidates were inspected first: clicker_template2 (three MX-specific components, inappropriate for a flat card) and diamond-link (8-mm-tall interlocking fabric, inappropriate for sheet joints). With no suitable local sheet-kit STL, downloaded and parsed **White Cat Kit Card**, Mike Kasberg, Printables 865769, https://github.com/mkasberg/white-cat-kit-card , **CC BY 4.0**. Upstream README and licence are included. No raw source STL is redistributed.

Actual binary mesh: SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; 179.820 × 178.020 × 3.190 mm; 27 edge-adjacent components including defective/sliver shells; overall not watertight. Source units are assumed mm (STL stores none), consistent with upstream construction. Measured cross-sections at Z=.100, .215 and 1.590 mm are recorded in `reference-analysis.json` and `evidence/reference-sections.png`. **Do not infer that the defective source is repaired or directly printable.**

Measured construction: 1.60-mm sheet, repeated 4.50 × 1.70-mm receiving sockets and .21–.22-mm runner tops. Source male clips are 4 mm wide. Our ORIGINAL CSG reconstruction adapts perpendicular sheet/socket assembly, subdivided card bays and accessible low runners. New straight 4.50-mm tongues use the source SOCKET span, not an asserted identical source male interface. Sheet is intentionally thickened to 2.2–3.0 mm; sockets use selected total allowance .10–.30 mm, runners .4–.6 mm. Pendulum geometry, copper window, magnet bores and M3 pivot are new, not measured source features. No feline silhouettes or source triangles are copied. All generated parts are true Boolean solids; no hull replacement.

Distinct interaction versus prior kits: a free copper-covered vane crosses a transverse static magnetic field between two bored carriers, for a with/without-conductor or magnets damping comparison. It is not a generic pendulum re-skin: parameterized field gap, conductive sheet window and two opposing magnet seats are real exported interfaces. Field strength, current, drag, friction and motion over time are NOT simulated.

## Supported dimensions — millimeters

| Parameter | Range |
|---|---|
| Card X / Y | 160–220 / 270–320 |
| Reach / pivot height above deck | 36–44 / 66–76 |
| Inner magnet-face gap | 10–16 |
| Copper frame width / height | 24–32 / 20 |
| Magnet disc diameter / thickness | 8–12 / 3 (purchased) |
| Magnet diametral allowance | .10–.30 |
| M3 diametral clearance | .20–.60 |
| Sheet thickness | 2.2–3.0 |
| Total tongue/socket allowance | .10–.30 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |

Card frame/shelf width 2.4 mm. Tongues 4.50 mm wide × sheet thick. Portal feet at X ±32, Y −18; towers centered at X=0 and Y ±(gap+sheet)/2. Base outline is an ellipse, hexagon or octagon with common functional socket positions. Fit checks reject an undersized card rather than overlap pieces. All sheets print flat at Z=0. Minimum art backing 1.5 mm. Three actual presets, bounded variation, undo/redo, named local saves (six) and portable design JSON are functional.

## Local image workflow

Picker and drag/drop accept **PNG, JPEG and simple SVG**. Image limits: 2 MB, 12 MP, 6000 px per side; decoded image normalized to ≤500 px; SVG ≤2000 elements, simple local filled shapes only, rasterized at 256 px. Scripts, external references, embedded resources and effects rejected. Synthetic samples are in `public/samples` with attribution. No personal files are committed or sent anywhere.

Images become **sampled 20 × 20 height-field engravings**, NOT reconstruction of a full 3D object from one photograph and not exact vector tracing. Fit/cover crop, crop pan, light/transparent or dark/inverted background, threshold 1–254 or grayscale relief, .4–.6-mm depth, 4–7-mm physical footprint, rotation and XY placement change the actual mesh. Adjacent samples are triangulated into a closed height field and Boolean-subtracted from the deck; white holes retain full backing, edges interpolate between grid nodes. The checkerboard displays removed regions. Text (up to eight characters) and six searchable bundled SVG marks use the same geometry path. Engraved-only protects uniform sheet height; raised mode is intentionally not offered.

Art is restricted to a 6.5-mm-radius keep-in patch at deck (0,−28), apart from sockets and moving interfaces. Off-patch artwork and empty silhouettes block export. Remove, replace and reset restore working state.

## Local STL workflow

**Binary and ASCII STL**, 16 bytes–2 MB, ≤1500 triangles, each dimension .2–250 mm. User selects Z/Y/−Z up, sees oriented source preview and source X/Y/Z, explicitly confirms millimeter units (STL has no metadata), then scales footprint 4–7 mm and engraving depth .4–.6 mm, rotates ±180° and places X ±1.5 / Y ±2 mm. Displayed XY and Z factors are explicit: XY preserves aspect ratio; Z fits engraving depth independently.

Input parser welds coincident vertices at 1e−5 mm, requires finite nondegenerate faces, two opposite-directed incidents on every edge, one connected positive-volume solid and outward winding. **Only convex, broad-flat-bottom, support-free meshes are supported.** Concave, hollow, disconnected, overhanging, open or nonmanifold files are rejected with actionable errors. No repair or convex hull substitution is performed. A bottom-footprint hull is used only to TEST containment, never to replace the source. The accepted source's exact triangles form a Boolean subtraction into the actual kit deck, not an unchanged export or preview-only object. Source and final previews, explicit scale factors and geometry signatures demonstrate integration.

JSON includes bounded normalized image data or the validated mesh, not file paths. Missing payload requests reattachment; invalid portable state blocks export. User inputs stay in browser memory/local storage/downloaded designs only. Export uses exact current valid worker result; stale last-good preview is labelled and exports disabled during invalid edits/builds/errors. Image conversion settings also gate currentness.

## Print and assemble

Full eleven-step guide is in the UI and actual ZIP `ASSEMBLY.txt`. Default card is **180 × 290 × 2.4 mm**; export clean parts on smaller beds. PLA/PETG, .4-mm nozzle, .16–.20-mm layers, 3+ walls, 100% mm scale. No supports intended; inspect slicer layer previews and print/calibrate a deck/portal pair first. Clearances are starting ranges, not universal fits.

1. Snip twenty runners 1.8 mm outside part edges, trim stubs.
2. Seat portal and two towers FROM ABOVE, glue square. Four shoulders meet deck top; tongue bottoms bed-flush.
3. Epoxy **two axially magnetized disc magnets**, selected diameter × 3 mm thick, inner faces flush and opposite poles facing. Adhesive retains discs; no secure snap containment claim.
4. Tape/glue a continuous **copper sheet, selected width × 20 × .3 mm**, onto rear-facing vane rim across its window. Deburr edges.
5. Fit **M3 × 30 mm screw, two ≤.5-mm washers, locknut and 3.2-mm-ID / ≤5-mm-OD tubular spacer** cut to **18−sheet mm**. Order: screw head, portal, spacer, washer, moving eye, washer, locknut. Retain axial freedom without clamping the eye. Axial hardware offset ≤1 mm is checked; preview is centered ideal pose.
6. Check copper clears magnets throughout gentle ±18° swings. This is a recommended inspection range, NOT a printed hard stop. Compare with magnets/copper removed. Never equate a mesh check with damping, force or physical retention testing. Keep loose magnets inaccessible to children and away from sensitive devices.

Print/download ONE card OR its five clean parts, not both for the same assembly. Every part STL is in flat print orientation; assembled/exploded preview transforms are never baked into print files. Binary STL has no colors. Everything ZIP contains six validated STLs, portable JSON and numbered instructions, not a mislabeled 3MF.

## Reproducible validation

`npm test` runs independent binary-STL validation plus exact CSG fit/assembly checks on defaults, all presets, individual and combined extrema, every outline and image/STL-derived variants. STL checks verify float32 export, triangle count, finite coordinates, nondegenerate triangles, unit normals, opposite edge winding after 1e−5-mm welding, positive volume for EACH component and expected dimensions/components. Card, individual parts and translated loose plate are checked separately.

Assembly checks: real tab connectivity and cuts yielding carrier + five parts, unchanged released parts, no flat/assembled overlaps, four aligned sockets, top insertion paths, exact magnet/spacer/shaft gauges, bolt length budget, copper thickness + ≤1-mm hardware-offset clearance through thirteen ±18° poses, ground clearance and art backing. Sampled upper footprints remain within bed footprints. These are rigid computational geometry checks only.

Browser tests use real file pickers, PNG/JPEG/SVG + binary/ASCII STL, downloaded STL parsing, live/export signatures and portable-state regeneration. They cover changed image pixels/threshold/depth/crop, transforms, malformed and unsupported files, empty silhouette, reset, presets, icons, text, saved designs, ZIP contents, all views, worker failure/stale-result recovery, desktop rail, themes, focus, collapse, mobile 320/390-px overflow, real touch orbit/pinch and reachable exports. Tests run against both development and real production base-path hosting before publication. See reports/evidence for actual results; no physical testing is claimed.
