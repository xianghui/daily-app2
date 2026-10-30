# Sweep & Scribe — beam-compass kit-card studio

A browser-based **three-part physical kit-card generator**. Snip twelve runners, bond a shouldered pivot blade into its socket foot, then lower a lift-off beam over its shaft. Hold the foot stationary and guide a suitable pencil through the far bore to trace a circle. Beam radius, bearing height, pencil bore, foot size, silhouette, calibrated fits, carrier and engraved personalization change real exported geometry. This is not a browser game or calibrated drafting instrument.

## Reference-first evidence

Searched local `/Volumes/ExternalHD/3d_printing_apps/` first; read the keycap and fabric READMEs and parsed actual candidate STLs. Switch cavities/stems and thick interlocking links are unsuitable sheet-card references; `reference-measurements.json` records their hashes, bounds, components and rejection reasons. All source trees and the old daily_app gallery remain read-only.

Downloaded **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Source README/license retained. Fresh binary STL analysis:

- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; 179.820 × 178.020 × 3.190 mm; 27 edge-adjacent components; nonwatertight. These defects are documented, not claimed repaired.
- Actual mesh sections at Z=.10/.50/1.59 mm: `evidence/reference-sections.png`. Sheet planes 0/1.6 mm; four socket loops 4.5 × 1.700012 mm; low carrier .21/.22 mm. Units assumed millimeters; STL has no units.
- **Preserved** 1.6 mm sheet for pivot blade, lower tongue and upper bearing shaft. Socket `(tongueWidth + totalAllowance) × (1.6 + totalAllowance)` reproduces measured 4.5 × 1.7 at 4.4/.10.
- **Proposed** default .15 mm total allowance, .4–.6 mm thicker runners, 2–2.8 mm beam/foot, entirely new compass outlines and gravity-bearing interface. These are redesigns, not measured reference dimensions or universal tolerances.

`reference-inspect.py` remeasures `/tmp/sweep-scribe-reference.stl` with trimesh/numpy/matplotlib. `reference-analysis.json` maps evidence to code parameters. Original parametric CSG reconstruction; no raw reference STL or ship outlines bundled, no hull substitution. The reference is not a physical test of this new mechanism.

### Maker-studio interaction reference

Inspected read-only `keycap_generator2` README, styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts. Concrete patterns: 374 px left rail, sticky compact header, collapsible sections, slider/numeric millimeter pairs, tactile raised/pressed controls, #e7e9f1 desk, white panels, #1f2233 ink, #e2557a coral, bundled Fredoka/Rubik, saved dark mode, checkerboard conversion, original STL source preview and explicit units, worker/current-state export gating. Phones place preview, feedback and exports before stacked controls. No source Git history or dependency tree copied. Daily-app studio/import/serializer helpers reused; new mechanism, solids, assembly transforms and mechanical tests, not a cosmetic ring-catching reskin.

## Run

```sh
npm install
npm run dev
npm test
node hole-check.mjs
node import-extremes.mjs
npm run predeploy
node serve-production.cjs
# another shell, production base-path tests:
node browser-test.cjs
node studio-test.cjs
node axis-test.cjs
node preview-test.cjs
```

React + Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik; Playwright for tests. Runtime/font/WASM/worker dependencies bundled locally, no CDN/API/key/paid service. Library notices remain with authors; Manifold Apache-2.0, fonts SIL OFL, icons original synthetic SVG. Base `/daily-app2/20261030-18/`; test server 5498. Individual scripts exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`. Publication uses root combined deploy flow.

## Dimensions and assembly

All lengths **mm**, angles degrees.

| Control | Range |
|---|---|
| Card width × height | 180–220 × 110–135 |
| Beam length / nominal radius | 64–84 / length minus 20 (44–64) |
| Foot diameter | 30–38 |
| Bearing shoulder height | 10–18 |
| Pencil guide bore | 6.4–9 |
| Beam/foot thickness | 2–2.8 |
| Tongue width / thickness | 4.4–6 / fixed measured 1.6 |
| Socket and bearing total allowance | .10–.35 |
| Part spacing | 3.5–5 |
| Runner width / thickness | .8–1.4 / .4–.6 |

Default card **190 × 120 × 2.4**, three bays, outer frame, two internal rails and twelve real bed-flat runners. Twelve safe cuts release **three separate parts plus carrier**; clean-part exports have no tabs. Capsule, octagonal and tapered beams, matching foot silhouettes, three actual model-thumbnail presets, bounded variations/reset, 35-state undo/redo, six named local designs, portable JSON save/open.

Blade lower tongue prints Z=0..1.6, then rotates upright; broad shoulders seat at foot top. Tongue length equals foot thickness and reaches its underside. Upper shaft has rectangular `tongueWidth × 1.6` section. Beam bore = **shaft diagonal + total allowance**, so it clears every rotational angle. Upper shoulders support the arm at `footThickness + shoulderHeight`; wide shoulders stop downward travel. Beam deliberately lifts off: **gravity seated, not captive**, no keeper or snap retention claim. Fixed foot joint needs adhesive after calibration. Do not glue the rotating bearing.

Pencil bore and pivot are beam-local Y=`length−10` and Y=10; nominal radius is their separation. Guide is a loose through-hole, **not a pencil clamp**. Select a barrel smaller than the bore; hold it upright with its tip on paper while holding the foot stationary. Play, pencil tilt and printer variation alter actual drawing radius. Pencil + adhesive are required consumables; removable putty under foot optional. No bearings, magnets or metal fasteners. Radius and bearing-height controls change the assembly, not merely a preview.

Print bed-flat, PLA/PETG, .16–.20 mm layers, three perimeters, no supports intended. Dry-fit and calibrate before full card. Card may exceed a small printer bed; use clean part exports. Numbered assembly/print instructions are in-app and in ZIP. Physical print, adhesive strength, friction, stability and drawing accuracy are **not tested**.

## Images, SVG, text and icons

Desktop/phone picker and drag/drop: PNG, JPEG, simple SVG. Synthetic samples `mark.png`, `waves.jpg`, `ring.svg` included. 16 bytes–2 MB; image ≤12 MP and ≤6000 px side, normalized to ≤500 px. SVG ≤2000 simple vector elements, rasterized locally to 256 px; active/external content, text/effects rejected with flattening guidance.

Conversion: select light/dark background, contain/cover crop and ±25% pan → **20 × 20 luminance grid** → thresholded silhouette or grayscale height field → closed triangulated Boolean cutting tool → actual beam engraving. This is **2D-to-relief, not full 3D reconstruction or exact outline tracing**. Checkerboard displays actual converted foreground; bright holes remain unengraved with solid backing (solid probes verify). Fine details below grid/nozzle resolution may be lost.

Footprint 4–7, depth .4–.6, rotation ±180°, X±1.5/Y±2. Safe circular zone radius 6.5 centered beam X=0/Y=24, away from pivot/pencil interfaces; backing ≥1.4. Empty art and unsafe transforms block export. Eight-character text and six searchable bundled marks follow same real-geometry path. Engraved only to keep a smooth writing-tool surface. Replace/remove/reset work; preview colours never imply STL colour.

## STL imports

Binary and ASCII STL, 16 bytes–2 MB, ≤1500 triangles, each source axis .2–250. Original synthetic wedge/gem sample meshes. Display oriented source preview, dimensions, triangle count/format and **require millimeter confirmation**. Z/Y/−Z up (axis change clears source and requests reattachment); proportional XY scale to 4–7 footprint, independent Z depth .4–.6, rotate/place/center/reset.

Original triangles become an **exact Boolean cavity** in the beam, not an unchanged re-export, texture, overlapping shell or hull. Supported input contract: **one outward-wound closed convex solid, broad flat bottom, no unsupported overhang**. Validate content/length/facets, finite coordinates, degeneracy, welded 1e−5 edges with opposite winding, positive volume, components, self-intersection, convexity, support and dimensions. Concave, hollow, open, disconnected, nonmanifold or overhung input explicitly rejected; no arbitrary repair. A footprint hull is used for support verification only, never replaces the mesh.

Files stay local in browser, never uploaded or committed. JSON ≤2 MB includes bounded normalized image or original indexed mesh payload; revalidated on open. Missing payload explicitly requests reattachment, not fake restoration. Only synthetic fixtures committed.

## Geometry, worker and export

Manifold Boolean solids, bounded resolution/complexity, debounced worker, request IDs and exact state keys. Invalid edits/import/error/worker failure disable every STL and ZIP action; last-good preview is labelled and cannot silently export stale geometry. Preview and export share exact current final solids; UI fingerprint matches downloaded bytes and independently regenerated JSON state.

Connected-card, de-tabbed, assembled, exploded and isolated views use same geometry. Preview angle turns the arm only; export remains exact bed-flat geometry, never overlapping assembled shells. Four prominent binary STL exports: connected card and each of three clean parts. Everything ZIP contains those STLs + numbered `ASSEMBLY.txt` and current fit values. No fake 3MF or colour-in-STL claims.

## Verification

`validate.mjs`: 32 built-in cases (all presets, silhouettes, independent and coordinated extrema), eight imported cases. `import-extremes.mjs`: six imported extreme cases. Actual float32 STL checks: exact binary size, finite nonempty nondegenerate faces, unit winding-consistent normals, expected mm bounds/bed alignment, welded edges exactly two opposite incident faces, per-component positive volume and Euler characteristic. Every separate solid checked.

Independent actual-solid checks: full 360° rotation at 25 positions against blade/foot, foot tongue insertion and beam lift-off at 25 positions each, actual source-fit gauge, both shoulder stops, pencil passage to paper clear of foot, flat-part disjointness, twelve non-damaging snips producing four components, card bounds, sampled bed-supported footprints. These numerical checks are not physical print/drafting tests.

Production browser tests upload PNG/JPEG/ASCII/binary STL through real file pickers, download actual STLs, compare default/import variants, pixels/threshold/depth/crop, mesh scale/rotation/placement, source axes, reset/replace/remove. Reject malformed/truncated/oversized/open/nonmanifold/concave, empty images and unsafe settings. Test all presets, silhouettes, text/icons/SVG, image holes, per-part/ZIP contents, JSON/named image+mesh round trips, missing payloads, undo/redo, all views, theme/focus/collapses/reduced motion, worker abort/recovery, 374 px desktop left rail, 320/390 px preview-first phones, no overflow, touch orbit/pinch and exports. Reports and screenshots are retained beside scripts.

**Computational checks do not prove physical print behavior, glue strength, stability or drafting accuracy. Calibrate with the actual material/printer.**
