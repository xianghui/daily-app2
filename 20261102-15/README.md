# Log & Slide

A browser-based **two-part logarithmic slide-rule kit-card generator**. Snip eight real runners, lower the loose C-scale ruler into the D-scale guide body, align C's 1 over D's 2, and read D's 6 beneath C's 3. Both logarithmic scales, fine ticks and seven-segment numerals are actual engraved solids. This is a physical educational kit, not a browser game, certified measuring tool or captive fidget.

React + Vite; Node 22.12+. `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Base `/daily-app2/20261102-15/`. Per-app `predeploy` is exactly `npm run build`; `deploy` is `gh-pages -d dist`. Public monorepo publishing uses the **root** combined deploy flow.

## Reference-first measurements and attribution

Local candidates were located and parsed **before final geometry selection**: Keycap Studio's three-component switch template (944 triangles, 15.2 × 15.2 × 43.1 mm overall), and Weave's interlocking diamond link (5,940 triangles, 7.981 × 9.241 × 8 mm). Their instructions and actual geometry show that neither is an appropriate sheet/carrier reference; their source trees remain read-only.

Selected mesh: **Mike Kasberg, White Cat Kit Card / Printables 865769**, [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**, license included in `REFERENCE-LICENSE.txt`. The actual accessible STL was parsed from a previously downloaded temporary reference, hashed and cross-sectioned anew for this build. SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**. Binary STL, 30,616 triangles; 179.820 × 178.020 × 3.190 mm, assuming millimeters because STL contains no unit metadata. There are 27 edge-adjacent components, including defective paired artifacts; the source is **not watertight**. No repair or physical testing is claimed.

`reference-measure.py`, `reference-measurements.json`, `reference-analysis.json` and `evidence/reference-sections.png` record the actual mesh. Sections at Z=.1, .5 and 1.59 mm show subdivided carrier rails, sheets and low webs. Measured source sheets are 1.60 mm; four slots are 4.500 × 1.700012 mm; low runner planes occur near .21/.22 mm. Read-only source `kit_frame.scad` corroborates the 1.6 mm frame/sheet convention.

**Design adaptation:** the sheet/subdivided-carrier/low-web architecture is reconstructed with original Manifold CSG. Default sheets retain measured 1.6 mm; proposed bed-aligned .4–.6 mm runners are deliberately thicker than the reference, without claiming tested breakaway force. Source slots do not belong on a loose slide and are not reused. No source artwork, wheels, raw third-party mesh or arbitrary private assets are redistributed. New physical geometry comprises matching logarithmic scales, real recessed numerals, an open-ended guide and a loose ruler; it is not the prior pentomino packing or Napier-rod geometry.

Keycap Studio read-only visual/interaction files inspected: README, styles.css, App.tsx, Viewer.tsx, worker, export, imageTrace and geometry/STL modules. Concrete patterns adopted: 374 px left control rail, sticky compact brand, tactile lower-shadow buttons, pink selected states, collapsible editor sections, paired slider/mm inputs, source and checkerboard cutout previews, explicit STL unit confirmation/orientation, worker current-result export gating, saved light/dark mode and preview-first phone stacking. Infrastructure is adapted from earlier daily studios; no reference Git history/dependencies copied wholesale.

## Parameters and physical operation

All dimensions in **millimeters** except explicitly marked degrees, image values or preview percentage.

| Control | Supported range / actual effect |
|---|---|
| Card width / height | 210–280 / 90–130; genuine connected envelope |
| Logarithmic scale length L | 110–160; matches both scales and changes both bodies |
| Sheet / floor | 1.6–2.4; guide top and assembled slide top at 2×sheet |
| Slide-to-guide gap | .20–.40 **per side**, channel width 12+2×gap |
| Part spacing | 3–5; clear space to carrier rails |
| Runner width / thickness | .8–1.4 / .4–.6, bed-aligned, eight accessible runners |
| Body silhouette | Rounded, square, clipped corners; real outline changes |
| Tick width / depth | .45 / .4; solid Boolean engravings, not textures |
| Art footprint / depth | 4–7 / .4–.6, at least 1 mm floor remaining |
| Art placement / rotation | X ±1.5, Y ±2 around apron center, ±180°; actual vertices constrained inside 6.5 mm safe radius |
| Slide pose | 0–60% of L, **preview only**; minimum remaining support overlap .4L+20 |

Coordinates are `x=L*log10(v)`, 1≤v≤10. Each scale engraves 0.1 subdivisions through 2 and 0.2 subdivisions thereafter, plus labels 1–9. The terminal decade uses a doubled index. Labels use separated seven-segment pockets to avoid nonmanifold corner-touching voids. Decimal placement and overflow are chosen mentally. Mark contrast may be improved manually; STL contains no color.

No hardware, press fit, glue, or captive-retention claim. The guide is open at both ends and above; lower the slide vertically onto its continuous floor. It can be lifted out or slid off; keep flat. Matching scale offsets demonstrate multiplication/division, not a friction simulation. Calibrate the two clean parts first: clearance is printer/material dependent, not universal. Remove elephant foot. Print floor-down at 100% mm, PLA/PETG, .16–.20 mm layers, .4 mm nozzle, three perimeters; no supports intended. Clip eight runners at their 1.6 mm-outboard snip locations, then file nubs flush without gouging channels or scales. Cutting tools and small cutoffs require appropriate supervision.

## Local image and STL workflows

File-picker on phone/desktop and drag-and-drop. Bundled original synthetic examples: PNG, JPEG, simple SVG, ASCII and binary STL under `public/samples`. Replace/remove/reset, source previews and final meshes are available. Personal files never upload, enter the repository or leave the browser.

**Images:** validate content/header, 2 MB, ≤12 MP, ≤6,000 px side before decoding; normalize to ≤500 px side. SVG is simple validated local shapes/paths only, ≤2,000 elements, rasterized at 256 px; scripts, external references, embedded images, filters/fonts are rejected. Contain/cover crop and ±25% crop shifts feed a **20×20 luminance sample grid**. Composite against light/dark background, then threshold 1–254 or grayscale depth×(1−luminance/255). A closed triangulated heightfield is Boolean-subtracted from the protected apron. Source and exact sampled cutout appear on a checkerboard. Bright holes preserve full-thickness backing inside the engraved silhouette. This is bounded **2D-to-relief**, not exact outline tracing or automatic full3D reconstruction from a photo. Engraved-only style intentionally preserves the planar body and protected mechanism; no fake raised control.

**STL:** strict local ASCII/binary parser, 2 MB and 1,500 triangles maximum, each axis .2–250 mm. Verifies finite coordinates, nondegenerate triangles, closed oppositely wound welded edges, single connected component, positive volume, self intersections, convexity, and broad flat bed contact (≥25% footprint) with no overhang beyond it. Supported integration contract: **one outward closed convex solid**, not concave/hollow/disconnected/branched/open/nonmanifold input. Unsupported meshes fail explicitly; no repair or hull substitution. A convex hull is used only to *check bed contact*, never to replace imported geometry.

Show source dimensions, triangles and format. Explicitly confirm mm because STL has no units. Select Z/Y/−Z up before attaching; changing axis requests reattachment. Exact original mesh is a Boolean engraving cutter: XY scales proportionally to 4–7 mm footprint; Z independently to .4–.6 mm depth, with explicit factors. Placement, rotation and scale alter exported solid geometry; it is neither unchanged re-export nor a texture. A protected region and ≥1 mm backing keep imports away from sliding interfaces. Source mesh has its own 3D preview. Imported mesh and image payloads are bounded in JSON and named saves; missing files request reattachment rather than pretending restoration.

## Studio and export

Locally bundled Fredoka/Rubik fonts, three actual model-thumbnail presets, bounded variations, undo/redo (35 states), six named local designs, portable ≤2 MB JSON save/open, saved dark/light theme, searchable six-icon selection and rasterized text. Preview colors do not change STL. Assembled/exploded/card/clean-plate/isolated views share the exact final meshes with rigid display transforms; exports always bed-flat, never assembled overlapping shells. Touch orbit/pinch, top view, fit and zoom controls.

Manifold WASM performs real unions/subtractions in a Web Worker with bounded resolution, 100 ms debounce, request IDs, current-state keys and image-conversion guards. Building/error/ready states are real; invalid inputs or stale results disable every STL/ZIP export. The last-good mesh may remain visible but cannot silently export. Every generated final part is preflighted for finite triangles, nondegeneracy, closed oriented welded edges and positive volume. All libraries/fonts/WASM are bundled; no CDN, external generation, API key, server or paid service.

Binary connected-card STL, each clean part, de-tabbed print plate, and Everything ZIP. ZIP includes card and both parts plus numbered `ASSEMBLY.txt` with current fits. Carrier is a single real Boolean solid with eight connecting webs; the loose plate is separately labelled and not called a kit card. Final selected-export X/Y/Z and fingerprint reflect its actual geometry. No 3MF claims.

## Reproducible checks

`npm test` → `geometry-validation.json`: 32 cases spanning presets, silhouettes, individual endpoints, combined endpoints and image/STL-derived solids. Independent float32 binary-STL parser verifies exact length, finite triangles, unit normals matching winding, nonzero faces, 1e-5 mm welded edge incidence exactly two with opposite directions, positive volume for each component and expected mm bounds. Tests cover card, clean parts and float32-translated loose plate.

Independent Manifold checks: six stroke positions through 60% L, collision-free vertical insertion at six heights each, floor support, nearly-full-gap inflated side clearance, eight accessible safe snip blades yielding exactly three components (carrier + two parts), no unintended print overlaps, declared card envelope and upper-section support within first-layer footprints. Logarithmic tick coordinates and multiplication identities are checked independently. Bright-center/dark-ring probes verify real engraved holes with backing.

`node browser-test.cjs`, `studio-test.cjs`, `phone-views-test.cjs`, `orientation-test.cjs`, `stale-test.cjs`, `icons-drop-test.cjs` and `personalization-check.mjs` run against actual production assets served under the real base prefix by `node serve.mjs`. Reports and screenshots are beside the scripts. Real picker uploads/downloads cover PNG/JPEG/ASCII/binary STL; geometry fingerprints are compared to default, threshold/depth/content/crop, scale/rotation/placement and Node regeneration from saved JSON. Each derived output receives the same solid/mechanism checks. Invalid/truncated/open/nonmanifold/concave/oversize/dimension/empty images/invalid transforms disable export and recover via replace/reset. ZIP is actually unzipped and meshes parsed. Tests cover presets/text/icons/SVG, portable assets/missing payloads, undo/redo, named-save reload, worker loading failure/recovery and stale edit gating. Touch 320/390 px checks cover orbit/pinch, all tabs/views, expanded instructions, actual exports, preview-first stacking and no overflow. Desktop checks cover left rail, theme, keyboard focus and collapsible sections.

**No physical print, fit, force, breakaway, friction, accuracy, contrast/legibility, strength or durability test has been performed. Computational mesh/assembly validation does not establish these.**

Dependencies: React, Vite, Three.js/OrbitControls, Manifold3D (Apache2.0), fflate (MIT), gh-pages, Fontsource Fredoka/Rubik (SIL OFL), Playwright for tests. Bundled icon primitives are original simple geometric SVG marks.
