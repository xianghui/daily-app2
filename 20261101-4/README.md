# Bristle & Drip

A local browser studio for a **four-part brush-drying rack kit card**. Snip16 real runners, seat two tall shouldered risers and lower a pierced shelf onto their top tongues. External soft loops suspend light miniature brushes bristles-down above a shallow drip recess. This is a new fixed-assembly rack, not a moving fidget, optical kit or laced helix. No load-rating, drying-performance or waterproof claim.

## Run

Node22.12+: `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. React/Vite, Three.js OrbitControls, Manifold WASM in a Web Worker, fflate, local Fredoka/Rubik OFL fonts. All dependencies, fonts and WASM bundled; no CDN/API/backend. Base `/daily-app2/20261101-4/`. Individual predeploy/deploy scripts exist; public combined site uses ROOT predeploy/deploy.

## Actual STL reference and design decisions

Read-only local candidate collections inspected first: keycap_generator2 switch templates, fidget_fabric_generator diamond links, kit_card_generator README and kit-card collection search. Actual local candidates were parsed and hashed: switch cavities and8mm linked joints are unsuitable sheet-card interfaces; no suitable local sheet STL was found. A fresh publicly downloadable **White Cat Kit Card** by Mike Kasberg was then downloaded and parsed before final geometry construction: [repository](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), CC BY4.0. Current repository licence retrieved and preserved in REFERENCE-LICENSE.txt.

Source binary STL SHA256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`;30616triangles,179.819997×178.019994×3.189999mm assumed,27 edge-adjacent components,not watertight. Units assumed mm; STL has no units. Actual sections Z=.1,.5,1.59mm measured1.6mm sheets,4.5×1.700012mm sockets and .21/.22mm low runner planes. See evidence/reference-sections.png, reference-measurements.json and reproducible reference-inspect.py. Source is NOT repaired or re-exported; raw fan-art mesh is not bundled.

Original CSG reconstruction: four4.5mm nominal tongues, source-default1.6mm shelf/riser sheet; two base seats and two shelf seats. The **source-measured** thickness gap is .100012mm. Our **proposed** total slot allowance .15mm, adjustable .1–.3mm, is printer/material dependent. Wider riser shoulders set shelf height without a jig. New16 side runners are .4–.6mm thick, stronger than source low planes; custom two-left/two-tall-right carrier is a real Boolean-unioned connected card. Protected14mm signature extension and shallow .4mm mat recess are new. Concrete mapping in reference-analysis.json.

Primary visual/interaction reference inspected read-only: keycap_generator2 README.md, src/styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts. Applied374px left rail, compact sticky brand, collapsible sections, paired slider/numeric inputs, tactile pressed selection keys, lavender desk/white panels/coral accent, saved coherent dark theme, checkerboard cutout, source/final previews, current-result worker gating and phone preview-first stacked layout. Existing daily studio import/view/export infrastructure adapted; rack geometry, packing, poses, insertion tests and guidance are independent. Reference projects/dependencies/history unchanged.

## Parameters (mm unless stated)

Card232–256×196–220; rack span76–88 plus14mm signature extension; base depth38–44,thickness2–2.6; clear hanging height148–168; shelf depth22–26,sheet1.6–2; riser breadth12–16;3–5 hanging eyes (integer),diameter2.4–3.6; eye pitch `(span-32)/(count-1)`; total fit allowance .1–.3; part spacing3–4; breakaway width .8–1.4,thickness .4–.6. Three real presets and three base profiles; bounded variations. Unsupported packing or invalid values block export. Four nominal4.5mm tongues retain fit dimensions when rack size changes.

## Local image workflow

Desktop/phone picker and drag/drop accept PNG,JPEG,simple SVG. Synthetic examples included. Maximum2MB; PNG/JPEG header validation before decode,<=12MP,<=6000px side,normalized<=500px. SVG<=2000 simple elements; scripts,external references,text/effects rejected; locally rasterized256px. Source preview plus exact sampled checkerboard cutout.

Images composite against a chosen light/dark background with fit/cover crop and ±25% shifts, then sample20×20 luminance. Threshold1–254 or grayscale heights become a closed triangulated relief cutter, Boolean-subtracted .4–.6mm into the protected base extension. White holes stay unengraved on continuous backing; SVG holes survive rasterization. This is sampled **2D-to-relief**, not exact vector tracing or full3D reconstruction from a photo. Six searchable bundled SVG marks and text up to8characters use the same real pipeline. Engraved-only policy is explicit; no fake raised control.

Import footprint4–7mm,rotation±180°,offsetX±1.5/Y±2mm; model checks every transformed cutter vertex against a6.5mm-radius safe zone. Empty silhouettes and out-of-zone edits block export; base backing>=1.4mm. Replace/remove,transform reset,image reset and full defaults are provided. Preview colours do not imply STL colours.

## Local STL workflow

ASCII and binary STL,<=2MB,<=1500triangles,finite coordinates,dimensions .2–250mm per axis. Strict parser verifies nondegenerate triangles,1e-5mm welded opposite-directed edge pairs,one outward positive-volume component,self-intersections and supported bed contact. **Supported contract: convex, broad-flat-bottom, no overhang beyond bed footprint.** Concave,hollow,branched,open,multibody/nonmanifold meshes explicitly reject. No hull replacement, silent repair or discarded concavities.

Select Z/Y/−Z up before attaching; view oriented source3D dimensions and explicitly confirm mm (STL stores no unit metadata). XY proportional scale targets4–7mm footprint; independent Z scale targets .4–.6mm cut depth. Rotate,place,center,replace/remove. Actual input triangles become the Boolean base engraving cutter, not a texture or unchanged re-export. All interfaces stay outside the art zone. Minimum scaled XY extent1.2mm.

Files never upload or become personal repo assets. Portable JSON<=2MB and six local named designs include bounded source PNG/pixels or mesh payloads; restored STL revalidated. Missing image payload explicitly requests reattachment and blocks export. Undo/redo keeps35states. Synthetic samples are original generated fixtures, not private/third-party meshes.

## Views and exports

Orbit,zoom,fit,touch/pinch. Connected card,de-tabbed layout,assembled,exploded and all four isolated parts share final printable solids. Translucent base option explains joints. Assembly/explosion positions are explanatory,not force/knot simulation; no brushes or cords shown. Worker,bounded resolution,100ms debounce,stale ids and state-key gates disable export until current valid result. Invalid edits may retain labelled last-good preview but cannot export it.

Binary STL per-part buttons and Everything ZIP (connected card + four clean STLs + numbered ASSEMBLY.txt/current fits). Always bed-flat Z=0 irrespective of preview; dimensions displayed in mm. No3MF claim. FNV signature in stage matches downloaded bytes and Node regeneration of saved JSON. STL contains neither colour nor units.

## Print and assemble

1. Print100% mm,PLA/PETG,.16–.20mm layers,three walls,no supports intended. Trial-print one riser and socket-bearing parts for calibration. Card needs a232–256×196–220mm bed; clean parts may be arranged separately.
2. Snip16 runners1.6mm outside edges;trim nubs,keep tongues/eyes intact. Adult supervision for cutters/small parts.
3. Lower both risers into base sockets;shoulders rest on base. Bond two FIXED seats with filament-compatible adhesive,hold square,cure.
4. Lower shelf over both top tongues;eyes face front opposite riser row. Underside seats on broad shoulders. Bond two more FIXED seats,cure level. Four adhesive seats;no friction/snap retention.
5. Thread <=1mm external soft cord through eyes,tie loops and girth-hitch LIGHT miniature brush handles/ferrules so bristles hang down. Verify knots by hand before use. Combined brush+loop length must be **at least10mm shorter than clear height**. Space thin brushes so they do not touch; keep front row clear of risers. Put removable absorbent paper mat in recess. Cord,mat,adhesive,square external. Not load-rated or watertight; do not hang heavy/full-size tools. Remove brushes before moving rack. Preview omits cord/brush physics.

## Validation

`npm test`: independent float32 binary-STL parser checks exact byte count,finite vertices/unit normals,nondegenerate triangles,outward winding,1e-5mm welded edge incidence,component-wise positive volume,Euler,expected mm bounds and bed-flat orientation. Defaults/presets/profiles/min/max/each range edge,image/STL-derived outputs validated separately. CSG tests check zero unintended assembly/layout overlaps,13 positions each riser/shelf insertion,actual four socket/tongue volumes,cord routes,minimum walls,one connected card and16cuts releasing four parts plus carrier;upper sections must lie inside bed footprint.

Production browser scripts: `node serve.mjs` at127.0.0.1:5641;`node browser-test.cjs`;`node studio-test.cjs`. Actual PNG,JPEG,ASCII/binary STL picker uploads and downloads,changed geometry/threshold/depth/transform comparison,invalid files,per-part STL and ZIP,portable saves,undo/redo,views,themes,worker failure,320/390px mobile overflow/orbit/pinch. Additional `node extra-check.mjs`, `node axis-test.mjs` and `node rapid-test.cjs` cover imported extremes, actual image holes, axes and fast stale-result gates. Reports/screenshots alongside app; exact outcomes in VALIDATION.md.

**No physical print,assembly,knot retention,load/stability,strength,drying or waterproofing test performed.** Computational fits and valid meshes do not prove printer fit or rack performance.
