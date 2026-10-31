# Angle & Neusis — tomahawk trisector kit-card studio

A local React + Vite maker studio for an original **two-part angle-trisection tool**: semicircular blade/spike/datum tool plus a tongue-seated upright lifting grip. Eight real breakaway runners join both to a Boolean-unioned card. Not a loose print layout or a copied STL. The novel interaction is simultaneous geometric **neusis alignment**, not a moving fidget joint.

## Run / check

```
npm install
npm run dev
npm test
node extra-check.mjs
node axis-test.mjs
npm run predeploy
node serve.mjs                 # production base-path server, port5642
node browser-test.cjs
node studio-test.cjs
node rapid-test.cjs
node mobile-regression.cjs
```

Per-app `predeploy` is exactly `npm run build`; `deploy` is `gh-pages -d dist`. Public releases use the ROOT monorepo `npm run predeploy` then `npm run deploy`, not the app deploy command.

## Reference first, original reconstruction

Physical reference: **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY4.0](https://creativecommons.org/licenses/by/4.0/). Its README and repository LICENSE were inspected; license included in REFERENCE-LICENSE.txt. Download URL, SHA-256, bounds, components, actual socket loops and local candidate rejection measurements are in `reference-measurements.json`; design mapping is in `reference-analysis.json`. Inspect the measured three Z cross-sections in `evidence/reference-sections.png`. Reproduce with Python/trimesh/numpy/matplotlib: `python reference-inspect.py /path/to/downloaded/reference.stl`. Raw source STL is NOT bundled, published or repaired. Source was nonwatertight (27 edge-adjacent components); the new originals are robust Manifold solids, not a claim that the source was valid.

Measured source: **1.6mm** nominal sheet, **4.5 ×1.700012mm** rectangular sockets, low runner planes **.21/.22mm**. Preserve the default1.6mm grip sheet and nominal4.5mm tongue breadth. Proposed TOTAL receiving allowance **.15mm** (adjust .1–.3) replaces source's measured .100012; printer/material-dependent, not universal. Tool sheet2–2.6mm and stronger .4–.6mm accessible runners are deliberate redesigns. No switch sockets: this is not a clicker.

Local candidates were located and actually parsed first: keycap_generator2 clicker_template2 and fidget_fabric_generator diamond-link. Their switch/link mechanisms were unsuitable as sheet-card interfaces; see measured hashes/bounds/reasons in the report. All local reference trees and old daily_app stayed read-only.

Visual/interaction reference: read-only keycap_generator2 README,styles.css,App.tsx,Viewer.tsx,imageTrace.ts,worker.ts,geometry/stl.ts and export.ts. Concrete patterns:374px scrollable left rail; sticky compact brand/theme header; tactile raised controls; paired numeric/range inputs; foldable sections; large right preview; checkerboard cutout; imported-source dimensions and explicit units; worker/stale-result gating; per-part/ZIP exports; saved theme; preview-first stacked phone layout. Shared local infrastructure from daily_app2/20261101-4 is adapted; all tool geometry, placements, mathematical tests and assembly checks are new. No Git history or dependency tree was copied. Dependencies freshly installed.

## Geometry and operation

Use tool-space points `C=(0,0), D=(-R,0), E=(-2R,0)` and a radius-R semicircle **on y<=0**. The handle's straight RIGHT datum is x=-R; material is left of it. Handle/spike thickening does not obscure the needed circular tangent. For vertex `A=(-R,-h)`, `h=R/tan(theta/3)` makes AE,AD,AC and the other circle tangent three equal angles. The circle centre is a true1.2mm through-hole. Three .3mm-deep checking ticks lie at the theoretical handle distances for120°,90°,60° where they fit, top-to-bottom. The96-chord semicircle has at most .0035mm chord error, before FDM errors. This is NOT a precision instrument or a compass-and-unmarked-straightedge construction. Principle: [tomahawk geometry](https://en.wikipedia.org/wiki/Tomahawk_(geometry)); instructions and diagram here are independently authored, no article illustration bundled.

1. Print card OR clean parts bed-flat Z=0. Snip eight runners1.6mm outside the part and trim nubs. All four tool tabs are on the **left non-datum edge**, away from spike, arc and right datum. Grip tabs avoid its tongue/shoulders.
2. Trial-fit the4.5mm-wide tongue, adjust allowance, then lower grip into its socket. Shoulders rest on tool top; tongue stops flush with underside. Square and bond **one fixed seat**, cure. Adhesive required; no friction/snap capture claim.
3. On a paper angle, put right datum through vertex A, spike E on one ray and semicircle tangent to the other ray inside the angle. Slide/rotate iteratively. Mark the datum and C through the centre hole; lift the tool and join A–C with a straightedge. These are the two trisectors. Use60–120° test drawings if reach permits. Minimum nominal usable angle is3atan(R/(handle-4)); sharper angles may not fit. Grip is for gentle repositioning, not pressing hard.

External supplies: paper, fine pencil, straightedge, square, filament-compatible adhesive and snips. PLA/PETG,.16–.20mm layers,3 walls,100% mm scale,no supports intended. Physical printing, hand alignment, marking accuracy and durability are **not tested**. Computational mesh/mathematical checks are not physical validation.

## Supported ranges (all linear dimensions mm)

Card150–180 ×160–190; radius18–26; datum handle72–96; handle breadth18–22; tool sheet2–2.6; grip sheet1.6–2; grip height14–20; grip breadth12–16; TOTAL socket allowance.1–.3; spacing3–4; tabs.8–1.4 wide and.4–.6 thick. Invalid values, nonfinite transforms and incompatible packing block generation/export. Three presets are true model thumbnails; three grip profiles preserve the datum. Controls all affect actual geometry. Reset, undo/redo (bounded35 snapshots), six named local designs and JSON save/open are implemented.

## Image / legend workflow — local 2D to relief

PNG and JPEG content/extension/dimensions are checked before decode:2MB,12MP,6000px/side maximum; normalized to<=500px and converted to a **20×20 grid**. SVG:2MB,<=2000 simple shapes,<=6000px dimensions; scripts/external references/effects/text reject. Browser rasterization preserves filled holes. Bounded text(up to8characters) and six searchable bundled icons use the same conversion.

Contain/cover crop,±25% shift,light/dark background,threshold1–254 or grayscale heights feed an explicitly triangulated watertight height field. It is Boolean-subtracted .4–.6mm deep in a13mm-diameter safe lower-handle zone. Bright holes remain UNENGRAVED solid backing; dark regions cut material. This is sampled silhouette/height-map geometry, not exact vector tracing or full3D reconstruction from a photo. Checkerboard shows actual20×20 cutout. Relief scale4–7mm,rotation±180°,X±1.5/Y±2mm; transforms leaving safe zone reject. Engraving only (no raised mode) deliberately keeps bed-flat sheet geometry and functional edges untouched. Backing>=1.4mm. Replace/remove/reset supported. Synthetic mark.png,waves.jpg,ring.svg available via file links and local sample buttons.

## STL workflow — actual mesh integration, no hull substitution

ASCII and binary STL;40bytes–2MB;<=1500triangles;every axis .2–250mm. Explicit mm confirmation required because STL has no units. Select Z up,Y up or inverted Z before attachment; changing up-axis removes source and requests reattachment. Source3D preview,dimensions,triangle count and format appear. Scale XY proportionally to footprint4–7mm and Z independently to engraving depth.4–.6;rotate around Z,center/place/reset. Original mesh becomes a Boolean cutter in the protected handle; its shape and transforms measurably change the exported tool/card.

Supported input is intentionally restricted to **one outward-wound closed CONVEX solid with broad flat bed contact (>=25% footprint) and no overhanging XY projection**. Nonmanifold/open,concave,hollow,multibody,inverted/degenerate,self-intersecting or unsupported meshes reject with actionable errors. Convex hull is calculated ONLY to validate bottom contact; never substituted for input geometry. Weld tolerance1e-5mm,edge incidence/winding,connectedness,volume and pairwise triangle intersection checks precede CSG in the worker. No automatic mesh repair claim. Synthetic wedge-ascii.stl and gem-binary.stl are provided.

## Privacy, portable state and export

No API keys,servers,remote services or CDN assets. All fonts (Fredoka/Rubik,OFL),Three.js,Manifold WASM and fflate bundled locally. React/Vite app runs on device. User files are never uploaded or placed in repository. JSON and named local designs include bounded image/mesh payloads; missing image payload explicitly requests reattachment. Theme saved separately. Sample fixtures are synthetic and attributed in samples/.

Worker owns Manifold and input parsing;100ms debounce,current-state key,request IDs and conversion/import flags reject stale completions. All current meshes undergo closed-solid checking. Invalid edits can leave the last-good preview visible with a warning but every STL/ZIP action is disabled until the exact current state validates. Worker failures block export with reload guidance. Per-part binary STLs and Everything ZIP include connected card,clean tool,grip and numbered ASSEMBLY.txt with current fits. Preview and exporter share exact current mesh; UI fingerprint is checked against actual downloads. STL contains no preview colour or unit metadata. Assembled/exploded transforms are explanatory only; exports always bed-flat.

## Verification evidence

`validate.mjs`:independent binary-STL parsing,finite/nondegenerate faces,unit stored normals and outward winding,1e-5mm welded exactly-two/opposite edge incidence,positive volume per component,Euler characteristic and expected bounds. Every exported card and clean part checked;default,all presets,all profiles,min/max and each field endpoint,PNG-style and STL-derived variants. Invalid dimensions rejected. CSG checks cover separate parts/no intersections,vertical insertion,exact tongue/receiving void,shoulders,card envelope/part inclusion,8 severed runners releasing exactly3 components (carrier+2parts),and sampled upper cross-sections within bed footprint. Analytic60–120° trisection assertions are cross-checked against actual semicircular mesh vertices,datum material side and centre hole.

`extra-check.mjs`:both import kinds at min/max,actual ring-hole/unengraved material and dark pixel subtraction probes,real parameter changes. `axis-test.mjs`:Y-up/inverted-Z inputs reconstruct exact expected output. Browser suites use actual production assets under the real base URL and real file-picker/download actions. See JSON reports and evidence screenshots; VALIDATION.md summarizes observed results. No physical-print test was performed.
