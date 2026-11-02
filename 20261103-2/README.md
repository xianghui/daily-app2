# Involute & Unwind

A browser-based **three-part involute drawing kit-card generator**. Snip a real connected carrier into a circular cord former, pencil shoe and upright grip. Glue the grip in the shoe, tape the former to paper and unwrap fine cord tied directly to a pencil to trace an involute. This is a physical assembly, not a browser game or static STL viewer.

## Run and dependencies

```sh
npm install
npm run dev
npm test
npm run predeploy
python3 serve.py
node browser-test.cjs
node studio-test.cjs
```

Production base `/daily-app2/20261103-2/`; local production test port5742. Root monorepo deploy publishes combined gallery; per-app predeploy/deploy scripts also provided. React/Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik and Playwright. All runtime dependencies/assets bundled locally; no CDN, account, API key, paid service or backend. Maker-studio styling and interaction reference: read-only `3d_printing_apps/keycap_generator2` README, styles, App, Viewer, worker, image trace, STL and export modules. Reused maintained maker-studio plumbing from sibling daily apps, not the reference project's dependency tree/Git history. Left374px controls, tactile selection, saved light/dark theme, preview-first phones.

## Actual reference and reconstruction

**White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY4.0](https://creativecommons.org/licenses/by/4.0/). License confirmed from source repository. Actual cached public download reparsed during this run; raw mesh not bundled. SHA256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Binary30616triangles, assumed mm, envelope179.819997×178.019994×3.189999mm,27edge-adjacent components including small nonclosed fragments. Source defects are documented, not silently repaired. Inspect `reference-analysis.json`, reproducible `reference-measure.py`, `reference-measurements.json`, `evidence/reference-sections.png` and `evidence/source-LICENSE.txt`.

Read-only local keycap three-component15.2×15.2×43.1mm template and diamond-link7.98×9.24×8mm were first parsed/rejected as unsuitable sheet-kit references; hashes/components in analysis. Reference cross-sections atZ=.1,.5,1.59mm show actual sheet planes0/1.6mm,4.50×1.700012mm rectangular sockets and lower runner planes.21–.22mm. **Mapped:** default sheet1.60mm, socket length4.50mm,width=sheet+clearance=1.70mm; new tongue4.40×1.60mm with .10mm total clearance. Stronger redesigned runners.4–.6mm tall versus source.21–.22mm. Actual circular former, pencil shoe, ergonomic grip, bore, tie eye and carrier layout are new, not claimed measured source geometry. No raw reference mesh redistribution; no convex-hull substitution.

## Parametric kit

Three real model-thumbnail presets: First unwind, Wide spiral, Pocket trace. Rounded, square or chamfered shoe/grip silhouettes; former stays circular. Paired slider/numeric mm inputs, bounded variation, reset, undo/redo, six local named designs, portable JSON save/open. Payloads contain bounded normalized images or mesh triangles; missing payloads explicitly request reattachment.

| Parameter | Supported mm |
|---|---|
| Card width/height |140–190 /230–260|
| Circular former radius |20–30|
| Grip height |16–24|
| Pencil bore |7–9|
| Sheet thickness |1.6–2.4|
| Socket length |4.5–5.5|
| Total socket allowance |.10–.30|
| Part spacing |3–5|
| Runner width/thickness |.8–1.2 /.4–.6|

12actual low breakaway runners, four per part. Frame and two crossbars Boolean-unioned with parts/runners into one closed card within the declared envelope. Tab centers at25%/75% of each part width avoid the centered grip tongue and pencil bore/socket. Snip1.8mm outside part boundary, file remaining nibs flush. Circle working rim must be especially smooth; clean individual STL avoids runner scars. Detabbed parts remain distinct. Geometry constraints block invalid edits without exporting last-good output.

## Assembly and drawing

See ASSEMBLY.txt and UI numbered guide. Sheet tongue fits shoe socket from above; shoulder seats at shoe top. **Adhesive retention**, not snap-fit. Print shoe/grip first to calibrate allowance. External fine cord≤.5mm, pencil smaller than bore, paper, tape and suitable adhesive required; no metal hardware. Tape former underside firmly to paper. Cord tied through rim eye, wrapped clockwise on circular rim near sheet midheight, free end tied DIRECTLY to pencil near tip through shoe bore. Do not tie to an offset shoe eye. Pencil vertical, shoe hand-held; keep cord low and taut. Tape collar on pencil can prevent cord riding up.

**Begin at120°:** tangency120°counterclockwise from radial start tick; remaining cord wrapped clockwise from anchor to tangency; free tangent length2.094R=41.9–62.8mm. Total working length approximately2πR excluding knot tails and tie-hole leader. Operate120–240°only; earlier shoe poses may hit former. Ideal curve x=R(cos t+t sin t),y=R(sin t−t cos t),t radians; unwrapped arc/free tangent lengthRt. Preview repositions actual shoe/grip to this ideal path; external pencil/string omitted, diagram provides theoretical tangent. Pose is preview-only, not measured physical behavior. Finite cord/pencil radii, leader,192-sided rim, friction and slip cause error. Not a precision gear cutter. Physical printing/drawing untested.

## Personalization and real local imports

Up to8text characters,six searchable vector icons, simple SVG and PNG/JPEG become actual Boolean engravings in fixed former center, protected6.5mm radius, away from rim/tie eye. Footprint4–7mm, rotate±180°, X±1.5mm,Y±2mm, depth.4–.6mm,≥1mm continuous backing. Raised marks intentionally unsupported to maintain flat sheet height. STL contains no preview colors.

**Images:** actual type/header checked before decoding; ≤2MB,≤12MP,≤6000px side. Normalize≤500px, fit/cover,crop±25%,remove light/transparent or dark background. Sample20×20luminance grid with threshold1–254 or grayscale h=(1−luminance/255)×depth. Closed triangulated height cutter inverted/subtracted by Manifold. Source and actual checkerboard cutout shown. Bright interior holes retain original solid sheet, tested by an intersection probe. Bounded sampling can lose fine detail; no exact smooth trace claim. **2D-to-relief/silhouette conversion, not full3D reconstruction from one photograph.** SVG simple paths/shapes≤2000elements,no scripts/external assets/effects,rasterized locally then same height method.

**STL:** real ASCII/binary parsing,≤2MB,≤1500triangles,.2–250mm each source axis. Finite coordinates/nondegenerate faces, welded closed-manifold edges/opposite winding, single outward positive-volume component, triangle intersections and convex flat-bottom input checked. **Concave/hollow/open/nonmanifold/overhanging input is explicitly unsupported and rejected**, never silently convex-hulled/repaired. ChooseZ/Y/−Zup before attachment; confirm assumed millimeters because STL has no unit metadata. Source preview and dimensions, proportional XY footprint scaling and independent Z engraving depth,rotate/center/place controls. Exact mesh is Boolean-subtracted as an engraving cutter; not unchanged re-export. Shape/scale/placement alter exported triangles. Replace/remove/reset recovers defaults. A 2D hull test validates broad bed contact only and never replaces source geometry.

User files stay local in browser/worker; no uploads or personal files stored in repository. Bundled syntheticPNG,JPEG,SVG,ASCII/binarySTL fixtures and attribution available in Import. JSON/local designs include bounded portable assets; malformed/missing/oversized payloads block export with recovery guidance.

## Views and exports

Connected card, clean print plate, assembled, exploded, all isolated parts, transparent former; touch orbit/pinch,fit/top/zoom. Preview and exports share exact latest valid worker mesh/current-state key. Stale request ids ignored; invalid edits show labelled last-good preview and disable all mesh exports. All exports are bed-flat atZ0, never overlapping assembled poses. X/Y/Zmm dimensions shown. Prominent binary STL for card/each part and Everything ZIP containing4STLs,portable JSON and numbered assembly guide. No fake3MF/color claim.

## Verification

`npm test` validates39cases: three presets, all silhouettes at combined minima/maxima and every parameter endpoint, threshold/grayscale/holes and transformed ASCII/binary imports. Independent float32STL parsing checks exact byte count,finite positions,nondegenerate faces,normal/winding agreement,positive volume per component,1e−5mm vertex-weld edge incidence2/opposite directions,component counts and expected mm bounds. Every clean part, connected card and translated loose plate validated. Real kernel intersections at120–240°every10°check former/shoe/grip separation,pencil cylinder clearance and top-down grip insertion. Card envelope and12snips verified to release carrier+3parts without damaging parts. Upper section footprints contained within bed footprint. Equations check tangent perpendicularity and free lengthRt separately from watertightness.

Browser production tests exercise actual file pickers/downloads, image pixel/threshold/depth/crop/scale, STL transforms/unit/orientation,replace/remove/reset,invalid files/dimensions/nonmanifold/concavity,empty images,portable JSON/exact Node regeneration,local saves,undo/redo,presets,text/all icons/SVG hole,ZIP every mesh,stale gating,worker abort/recovery,theme/focus/collapsible sections,all views,320/390px phones and genuine touch orbit/pinch. See JSON reports,screenshots and VALIDATION.md. These are computational/static geometry checks only. **Not physically printed; adhesive durability, material fit, cord friction and drawing accuracy remain untested.** PLA/PETG,.4mm nozzle,.16–.20mm layers,3+walls,100%mm,flat without supports intended. Calibrate first.
