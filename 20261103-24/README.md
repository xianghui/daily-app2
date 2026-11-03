# Descartes & Nest

A browser-based, parametric **circle-packing display kit card**. Snip 28 real runners, nest three equal discs and a smaller Soddy insert into a recessed plaque, and stand the plaque on two slotted feet. Seven de-tabbed parts, connected card, exploded/assembled/isolated views, binary STL and Everything ZIP. Adhesive is required; no hardware or paid service. This is an original reconstruction, not an unchanged reference export.

## Reference-first evidence

Local `keycap_generator2` switch templates and `fidget_fabric_generator` diamond link were parsed read-only and rejected as unsuitable sheet-kit references. Local kit generators contain no suitable actual STL. Public **White Cat Kit Card**, Mike Kasberg, [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source](https://github.com/mkasberg/white-cat-kit-card), CC BY4.0 was downloaded and parsed before final modeling. Source SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; binary30,616 triangles;179.820×178.020×3.190mm assumed millimeters,27 edge-adjacent components, not completely watertight. Source is a design reference only, not repaired or redistributed.

Actual sections at Z0.10,0.50,1.59mm are saved in `evidence/reference-sections.png`. The measured1.60mm sheets,4.50×1.70mm rectangular sockets and0.21–0.22mm carrier runners inform real geometry. We keep4.50mm tongue width; reconstruct sockets as(4.50+clearance)×(sheet+clearance), default4.65×1.75mm. Proposed0.10–0.30mm total fit allowance is not claimed universal. Runners are redesigned0.4–0.6mm thick. See `reference-analysis.json`, `reference-measurements.json`, reproducible`reference-measure.py` and upstream/license files.

Visual/interaction reference read-only: keycap_generator2 README,styles,App,Viewer,worker,STL,export and image conversion modules. Concrete patterns:374px left studio panel, grouped tactile buttons, paired ranges/numeric mm fields, checkerboard conversion, source mesh editor, preview-first phones, saved dark theme, worker builds and exact current-state export gating. No reference Git history, dependencies or source mesh copied wholesale. Shared studio plumbing is adapted from the existing daily app; circle-packing geometry and assembly checks are new.

## Circle geometry and assembly

Nominal equal-circle radius r14–18mm. Centers form an equilateral triangle of side2r, at radius2r/√3 from the origin. Ideal central circle radius r/(3+2√3). Printed radii of all four inserts are reduced by half the selected1.00–1.40mm separation: six theoretical contacts each have this deliberate real gap. At least0.7mm top lands remain between pockets. Pockets add half the socket allowance radially,0.80mm deep above a full sheet backing. The enclosure rim6–9mm and round/hexagonal/octagonal silhouettes do not change this construction.

Plaque is sheet+0.8mm thick; other parts and frame are sheet1.6–2.4mm. Two integral bottom tongues are4.50mm wide, sheet-deep and sheet-thick. Two elliptical feet have32mm front/back footprints and calibrated through-slots. Four inserts lower directly into pockets while plaque is flat, glue and cure; plaque then lowers along world Z into both feet until shoulders seat. Glue retains all six joints; no snap-fit, precision-instrument or force prediction claim. The mathematical diagram and actual STL change together.

Card width120–160mm; height180–240mm; spacing3–5mm; tabs0.8–1.2mm wide,0.4–0.6mm thick. Four tabs per part join actual crossbars/frame. Snip1.8mm outside outlines, away from functional tongues and foot slots. All parts fit inside the declared card envelope or export is blocked. Circle separation must exceed socket clearance by at least0.7mm; thinner lands/tangent pocket boundaries are blocked. Combinations that cannot pack are blocked, not silently resized. Default140×210×2.4mm card. Clean parts suit smaller beds. Small central insert is not a child-safe toy.

## Local image / SVG / text / icon workflow

PNG,JPEG and restricted simple SVG via file picker, drag/drop or bundled synthetic samples. Files≤2MB; bitmap≤12MP,6,000px/side; decoded image normalized to≤500px. SVG≤2,000 simple shapes,≤6,000px/side; rejects scripts, linked assets, external URLs, filters and active content. Rasterized locally256px. Text(max8 characters) uses bundled Rubik; six searchable bundled geometric icons use the same image conversion.

**2D-to-relief only, not full3D reconstruction from one photo.** Fit/crop and ±25% crop shift, remove light/transparent or dark background, threshold1–254 or grayscale depth. A20×20 luminance grid generates a closed triangulated height-field cutter; exact Boolean subtraction engraves the protected upper lug. Threshold creates two plateau heights with interpolated boundary triangles; grayscale interpolates all heights. Bright holes remain unengraved islands on continuous backing, not through-holes. Checkerboard shows the actual sampled cutout; source shown separately. Engraving is0.4–0.6mm deep; a6.5mm radial keep-in zone and≥1mm backing are enforced. Raised style intentionally unsupported to preserve the sheet/coupon contract. Imported relief footprint4–7mm, rotation±180°,placement X±1.5/Y±2mm. Replace/remove/reset and built-in defaults work.

## Local STL editor

Both actual binary and complete ASCII STL accepted; ≤2MB,1,500triangles, one connected outward-wound closed solid, source dimensions0.2–250mm per axis. Checks finite vertices, nondegenerate faces, welded edge incidence/winding, positive volume, self-contact/intersections and bounded complexity. Explicitly restricted to **convex flat-bottom solids** whose projected geometry fits its bottom footprint; concavities,cavities,multiple components and overhangs rejected with guidance. It does not replace anything with a convex hull or claim repair. A bottom-footprint hull is used only to validate support, never as replacement geometry.

Source 3D preview, source dimensions, explicit mm confirmation(STL has no units),Z/Y/−Z-up selection before attachment, proportional XY footprint scale, independent depth scale,rotation,center and placement. The exact transformed mesh is Boolean-subtracted from the plaque lug. Source geometry therefore measurably changes exported material, rather than just being displayed or re-exported. Up-axis changes clear the import and request reattachment. Safe dimensions do not alter pockets or assembly joints.

All user processing stays in-browser; no user files uploaded or included in repository. Samples are synthetic. Portable JSON/local named designs contain bounded image/mesh payloads; malformed/missing payload requests reattachment. Six named designs, undo/redo,three actual-model preset thumbnails,JSON save/open.

## Runtime and export

React+Vite,Three.js OrbitControls,Manifold WASM solid CSG in a Web Worker,fflate ZIP,locally bundled Fontsource Fredoka/Rubik(OFL). All runtime dependencies bundled locally, no CDN/API calls. Heavy mesh/file checks run in worker,100ms debounce,sequence guards,immediate current-state export gating. Failed worker/build/import disables export, even if a last-good preview remains. Preview and STL use the same current valid mesh; displayed FNV signature is verified against actual browser downloads.

Binary STL per part or connected card/de-tabbed plate; Everything ZIP includes all8STLs(connected card+7clean parts),portable design JSON and numbered assembly/printing instructions. STL stores geometry, not preview colors; no misleading3MF export. Print layout remains flat regardless of assembled/exploded preview.

## Run / test

```
npm install
npm run dev
npm test
npm run predeploy
python3 serve.py
node browser-test.cjs
node studio-test.cjs
node presentation-test.cjs
node icons-drop-test.cjs
node orientation-test.cjs
node stale-test.cjs
node hole-check.mjs
```

Production base`/daily-app2/20261103-24/`; production server localhost5825. Per-app deploy scripts present as requested; publication uses root monorepo deploy only. See validation scripts,reports and `VALIDATION.md` for actual results.

## Print guidance / limits

PLA/PETG,0.4mm nozzle,0.16–0.20mm layers,3+walls,100%mm scale. Plaque recesses UP, engraving DOWN, short underside bridging needs slicer inspection. No supports intended. Print plaque+foot as fit trial before card; trim elephant foot, never force. Snip28runners carefully, keep small insert, smooth contact nubs. Glue discs into pockets flat,let cure; lower plaque tongues into both feet and bond. Use plastic-compatible adhesive; no hardware required. Do not claim universal fit, load-bearing capability or stability under pushing.

**No physical print, bonding, assembly-force, durability or long-term stability test was performed.** Computational solid/fit checks are not physical validation.
