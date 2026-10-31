# Pan & Pitch

A **three-part flat-pack kit-card generator** for a hand-held straw panpipe rack. Release a backboard and two matched pierced collars from twelve real breakaway runners. Seat four tongues horizontally, bond the fixed joints, then fit external stopped drinking straws through both collars. Tube count, diameter, pitch, profiles and fit alter the real printable geometry. This is not a game, unchanged STL re-export or automatic photo-to-3D service.

## Run and reproduce

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
node browser-test.cjs
node studio-test.cjs
node mobile-regression.cjs
node icons-drop-test.cjs
```

React + Vite; Three.js, Manifold WASM, fflate; locally bundled Fontsource Fredoka/Rubik (SIL OFL). No CDN/API keys, server or paid service needed at runtime. Production base `/daily-app2/20261101-7/`. Required per-app scripts `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public release uses the ROOT monorepo deployment, not the per-app script.

## Reference-first evidence and attribution

Local STL candidates were inspected first: keycap_generator2 clicker_template2 (switch cavities/stem) and fidget_fabric_generator diamond-link (interlocking8mm link); both README files and meshes were read. Neither supplies an appropriate sheet/carrier interface. Measurements, hashes and rejection reasons are in `reference-measurements.json`. Read-only PRIMARY visual reference: keycap_generator2 README, styles.css, App.tsx, Viewer.tsx, worker, export, imageTrace and geometry/stl modules. Adopted concrete 374px left rail/right viewer, tactile lower shadows, checkerboard source/cutout, paired sliders/numbers, saved light/dark theme, worker/current-result gating and preview-first phone layout. No switch sockets imposed on this unrelated kit. Generic editor/import infrastructure is reused from the prior app; the new solids, horizontal assembly, bore geometry and purpose are redesigned, not a circular-loom reskin.

Actual geometry reference: **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY4.0** ([license](https://creativecommons.org/licenses/by/4.0/), full text in REFERENCE-LICENSE.txt; independently retrieved and byte-compared). Downloaded and parsed anew before final geometry. SHA256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; binary30,616 triangles;179.819997×178.019994×3.189999mm;27 edge-adjacent components, source nonwatertight. Millimeters assumed and corroborated by source's1.6mm sheet; STL stores no units. Examined actual cross-sections Z=.1,.5,1.59mm, saved in `evidence/reference-sections.png`. Source sheet1.6mm, receiving slots4.5×1.700012mm and low runner planes.21/.22mm.

Original reconstruction keeps default1.6mm collar sheet and adopts4.5mm as the interface width scale. **The proposed4.5mm rectangular male tongue is not claimed to be a measured source male width.** Our slots add proposed TOTAL .15mm allowance:4.65×1.75mm default, intentionally different from source. Thicker backboard2–2.6mm and runners.4–.6mm are new. Four adhesive seats replace source clip behavior; no snap-fit equivalence claimed. See `reference-analysis.json` for measured/proposed mapping. Neither private source mesh nor raw third-party STL is bundled; no repair or re-export of the defective source.

## Parameters and constraints — millimeters

Card100–130×156–186; backboard40–48 high; tube count4/5/6; pitch9–11; straw outside diameter5–7; bore TOTAL allowance.2–.6; collar depth24–28; backboard thickness2–2.6; collar sheet1.6–2; slot TOTAL allowance.1–.3; part spacing3–4; runner width.8–1.4/thickness.4–.6. Board width=(count−1)×pitch+16. Four tongues4.5mm wide,collar-sheet thick,backboard-thickness+.3mm long. Slot rows16 and30mm above board bottom; collars centred vertically in their clearance. Minimum inter-bore web1.4mm,outer bore wall>=4.2mm,engraving backing>=1.4mm. Recessed ordinal ticks.45mm wide/.25mm deep may need a fine nozzle. Square/rounded/chamfer backboards and three real model-thumbnail presets. Bounded variations,undo/redo,named designs,JSON,colour preview only.

## Both local import workflows

Picker on phones/desktops and single-file drop. Replace/remove/reset always available. All user files stay in browser; no upload endpoint. Only synthetic original CC0 fixtures bundled (`public/samples`), no personal assets committed.

**PNG/JPEG** actual headers validated before decode:16bytes–2MB,<=12MP,<=6000px/side, normalized to<=500px. Simple SVG<=2000 elements, no scripts/references/remote resources; locally rasterized256px. Text<=8 chars and six searchable bundled original icons enter this same pipeline. Source plus actual checkerboard cutout shown.

Image conversion: composite against selectable light/dark background; fit/cover crop and±25% pan; sample20×20 luminance. Threshold1–254 gives0/depth vertex heights; grayscale depth×(1−luminance/255). Closed padded height solid,mirrored and Boolean-subtracted into the lower backboard. This is **2D sampled relief, NOT full 3D reconstruction or exact contour tracing**. Bright holes retain unengraved backing,not through-holes. Recess.4–.6mm; protected13mm circular footprint zone centred8mm above bottom,away from sockets. Import size4–7mm,rotation±180°,X±1.5/Y±2mm. Raised mode intentionally unsupported to protect the flat print face. Content,threshold,crop,depth and transforms change real exported geometry.

**ASCII/binary STL**:16bytes–2MB,<=1500 triangles,each dimension.2–250mm. Explicit millimeter confirmation required because STL has no unit metadata. Choose Z/Y/−Z up before attachment; changing up-axis requests reattachment. Source dimensions/source3D preview; proportional XY scale to4–7mm footprint,independent Z.4–.6mm depth,rotation,placement,center/reset. Exact mesh Boolean-subtracted,**never a convex hull replacement**. Deliberately supported contract:one closed,outward-wound,convex,positive-volume solid with broad flat base and no projected overhang. Face-side convexity checked,not used to rebuild input. Reject concave,hollow,disconnected,self-intersecting,open,nonmanifold,degenerate/truncated or unsupported meshes with actionable errors; no claimed repair. Source and final previews both available.

## Shared preview/export and portable state

Worker owns CSG and heavy parsing;100ms debounce,sequence stale guards,bounded resolution48-segment bores/20×20 art. Real building/ready/error state. Each final component checked for finite coordinates,nondegenerate faces,closed oppositely directed edge incidence,positive volume. Preview and export use the same current valid arrays and mesh fingerprint. Invalid changes show labelled last-good preview but disable all exports; worker failure requests reload.

Connected-card,de-tabbed,assembled,exploded and isolated views use the same solids with rigid transforms; see-through backboard explains sockets. External straws are NOT shown/exported as printed solids. Printable geometry stays bed-flat. Download connected-card or each clean part as binary STL; Everything ZIP contains those four meshes plus numbered ASSEMBLY.txt and current-fit data. STL has neither units nor colours; no3MF claim. JSON/local named designs contain bounded image/mesh payloads,not fictitious paths; missing payload explicitly asks for reattachment. JSON<=2MB; saved images<=250k pixels;six local designs/35 undo states.

## Printing and assembly

1. Trial-print tongue ends/receiving slots for your material/printer. Clearance is not universal. Print flat PLA/PETG,.16–.20mm layers,three walls,no supports intended.
2. Snip12 runners1.6mm outside part edges;trim without damaging tongues,slots or bores.
3. Backboard upright,signature low/front. One-notch collar to lower row,two-notch to upper;insert pairs of tongues horizontally from FRONT to REAR,bores in front. Bond all FOUR fixed joints,let cure. Hand-held,not free-standing.
4. Supply4–6 clean straight food-grade straws,removable tape,secure food-safe bottom closures,scissors and rack adhesive. Thread each straw through BOTH corresponding bores. Align open mouths10mm above upper collar;retain at both collars with tape stops. Printed plastic is NOT a mouthpiece or food-safe-certified item.
5. Close bottoms;leave tops open. For external cutting guide,longest180mm;semitones0,2,4,7,9,12. Lᵢ=(180+.3×OD)×2^(−semitone/12)−.3×OD. Crude quarter-wave/end correction,not tuning guarantee. Same internal bore assumed;cut long and trim gradually. Even shortest straw traverses both collars. Gentle blowing across clean rims;do not inhale or share mouth-contact items.
6. Tube wall thickness,temperature,plugs and blowing technique affect pitch. Not a certified musical instrument/toy. No bearings,magnets or fasteners;external straws,tape/closures/adhesive required.

**Physical printing,assembly,strength and sound/tuning have NOT been tested.** Computational mesh and insertion/clearance/tab checks are not physical validation. See VALIDATION.md and reproducible reports for performed checks.
