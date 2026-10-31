# Chord & Cusp

A browser-based **three-part kit-card generator**: an indexed circular loom, a two-socket pedestal and a winding shuttle. Snip twelve real runners, bond the two tongue seats and lace soft thread from hole `i` to `(multiplier × i) mod N`. ×2 suggests a cardioid-like envelope; ×3 makes two cusps. Front chords are external thread, shown as labelled preview-only lines. This is not a game, image generator or unchanged STL download.

## Run / export

```
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
node browser-test.cjs
node studio-test.cjs
```

Production base `/daily-app2/20261101-6/`. The app has its required per-app `predeploy: npm run build` and `deploy: gh-pages -d dist`; public combined publication uses the ROOT monorepo deploy flow. Browser tests use Chromium from Playwright. All runtime dependencies, WASM and Fontsource Fredoka/Rubik fonts are locally bundled. React, Vite, Three.js, Manifold3D (Apache2), fflate; no CDN, API key, paid service or upload endpoint.

## Reference first

Local candidates were parsed first: keycap_generator2's clicker_template2 (three switch-interface components) and fidget_fabric_generator's diamond-link (one interlocking8mm link), with their README instructions. Neither supplies a flat carrier/sheet socket appropriate to this kit. Their source trees remain read-only. The PRIMARY visual reference keycap_generator2 was inspected: README, styles, App, Viewer, worker, export, imageTrace and STL modules. Adopted concrete patterns:374px left rail, tactile lower-shadow controls, saved theme, checkerboard source/cutout, paired numeric/sliders, current-result export gating and preview-first phones. No switch socket imposed on this unrelated design.

The actual **White Cat Kit Card**, Mike Kasberg, https://github.com/mkasberg/white-cat-kit-card / Printables865769, CC BY4.0 (REFERENCE-LICENSE.txt), was downloaded and parsed anew. SHA256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Binary30616 triangles,179.819997×178.019994×3.189999mm;27 edge-adjacent components, nonwatertight. Units assumed mm, corroborated by source sheet design; STL stores none. Actual measured sections at Z=.1,.5,1.59mm are in evidence/reference-sections.png, complete measurements in reference-measurements.json. Source sheet1.6mm,4.5×1.700012mm socket loops,low runners .21/.22mm. No arbitrary private mesh or raw third-party STL bundled; the original source is neither repaired nor re-exported.

Our original reconstruction preserves4.5mm nominal tongues and default1.6mm loom sheet. Receiving slots add proposed TOTAL fit.15mm (.1–.3), not a universal fit. Thicker .4–.6mm runners improve low-layer print accessibility; frame and layout are original. The circle loom, lower shoulder bridge, cord indices, separate shuttle and shaped pedestal replace the source spacecraft assembly. See reference-analysis.json for exact measured/proposed mapping. The existing string towers/hyperboloid kits were checked: this is a planar multiplication-circle craft, not their mechanism.

## Parameters / millimeters

Card100–130×156–186; R24–32;18/24/30 eyes; multiplier2/3 (also engraves2/3 dots on pedestal); band5–7; eye1.4–2; pedestal depth28–36; pedestal thickness2–2.6; upright/shuttle sheet1.6–2; total socket fit.1–.3; spacing3–4; runner width.8–1.4,thickness.4–.6. Square/rounded/chamfer pedestal profiles. Three true thumbnails/presets. Noninteger eye count and multiplier rejected. Layout stays within declared envelope; impossible packing blocks export. Minimum radial eye wall1.5mm in supported range; independent tested neighbouring-eye webs exceed2.3mm. Binary dot engravings are optional visual guides,0.42mm diameter; use numbered map if printer resolution loses them. Index0 uses a larger dot; count counterclockwise from right.

## Local image workflow

File picker on desktop/phone or single-file drag/drop: actual PNG/JPEG ≤2MB,≤12MP,≤6000px per side. Header validated before decode, normalized to≤500px. Simple SVG ≤2000 elements,no scripts/references/remote content; locally rasterized256px. Text (8 chars) and six searchable bundled original icons enter this same pipeline. Source and checkerboard cutout shown.

**Documented method:** composite transparency over selected light/dark background; fit/cover crop and±25% pan; sample20×20 luminance. Threshold mode creates0/depth vertex heights (piecewise triangular interpolation), grayscale uses depth×(1-luminance/255). A closed padded height solid is mirrored and Boolean-subtracted from the pedestal. This is sampled2D-to-relief,NOT automatic full3D reconstruction and not exact contour tracing. Bright holes remain unengraved backing, not through-holes. Depth .4–.6mm,>=1.4mm backing. Safe13mm diameter front signature zone away from both sockets. Physical footprint4–7mm,rotation±180°,X±1.5/Y±2mm. Raised artwork intentionally unsupported; flat underside and functional keep-outs take priority. Sample pixels,threshold,depth,crop,scale all alter real exported geometry. Supplied CC0 fixtures only; no personal files committed.

## STL workflow

Actual ASCII/binary STL≤2MB,≤1500 triangles; every dimension .2–250mm. Explicit mm confirmation mandatory. Select Z/Y/−Z up BEFORE loading; changing orientation requires reattachment. Source mesh/dimensions preview,proportional XY scale to4–7mm footprint,independent Z .4–.6mm engraving depth,rotation/placement/center/reset/replace/remove. Exact uploaded solid is Boolean-subtracted,never a convex hull.

Deliberately supported contract:one closed,outward-wound,convex,positive-volume solid with broad flat base and no projected overhang. Reject concave,hollow,disconnected,nonmanifold,degenerate,self-intersecting,oversized/truncated or unsupported meshes with actionable errors; no claimed automatic repair. Convexity is verified against every face,NOT used to replace the input. Triangle intersections checked before heavy modeling. Unsupported imports disable export until replacement/removal/reset. Source and final models both shown; all personal files remain local.

## Editor / exact export

Worker owns all heavy CSG/STL validation;100ms debounce,sequence stale guards. Every generated part validated for closed directed edge incidence and positive volume. Preview/export share current valid arrays and displayed signature; invalid edits show labelled last-good preview but disable every STL/ZIP action. Worker failure disables exports and requests reload. Resolution128-segment ring,24-segment eyes,20×20 art bounds complexity.

Assembled/exploded/de-tabbed/card/isolated views use the same solids, only rigid transforms differ. See-through pedestal explains sockets. External thread lines show ideal front paths; no tension/weight simulation. Outputs always bed-flat binary STL,per-part buttons and Everything ZIP (connected card,three clean STLs,numbered ASSEMBLY.txt). STL has NO colours/units; no false3MF claim. Named local designs (six),undo/redo (35 snapshots),JSON save/open include bounded image/mesh payloads; missing payload explicitly requests reattachment. Saved images capped250k pixels,JSON≤2MB.

## Print / assembly

1. Trial-print tongue ends and pedestal slots; adjust TOTAL allowance for printer/material.
2. Bed-flat PLA/PETG,.16–.20mm layers,three walls,100%mm. No supports intended.
3. Snip12 accessible runners1.6mm beyond part edges;trim without cutting eyes/tongues.
4. Lower BOTH loom tongues vertically into pedestal,shoulders on top;bond both fixed clearance seats and cure.
5. Wind soft sewing thread on shuttle. Pass THREAD,not shuttle,through numbered eyes. Front chord i→m*i mod N;skip self-pairs;back returns/knots discretionary. On-screen numbered map and pair table supplied.
6. Use low tension on level surface. External thread,scissors and filament-compatible adhesive required. No bearings,magnets or fasteners. Adult craft,not load-bearing.

**Physical printing,assembly,stability,thread tension and craft results have NOT been tested.** Computational checks validate geometry,clearance,card release,insertion and ideal chord correspondence only;watertightness does not prove real-world performance. See VALIDATION.md and machine-readable reports for performed checks,not claims of physical tests.
