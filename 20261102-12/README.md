# Notch & Code

A local React/Vite maker studio for a **seven-part three-slider interlock kit card**. Snip 28 real runners, layer a floor / guide frame / window cover, then align three notches before the shared comb bolt can move. This is an educational mechanical AND-gate, **not a security lock**. Compatible adhesive is required on fixed layers only. No purchased mechanical hardware is needed.

## Run and export

Node22.12+; `npm install`, `npm run dev`. `npm test` runs independent STL and assembly checks. `npm run predeploy` builds production assets. The installed per-app `gh-pages` script is `gh-pages -d dist`; public monorepo publishing uses the ROOT deployment instead. Vite base `/daily-app2/20261102-12/`.

Export a connected card, bed-aligned de-tabbed plate, each clean part or Everything ZIP (eight STL files plus numbered assembly instructions). The card is genuinely one solid, not floating parts near a frame. Each of seven clean parts is one solid. STL carries neither unit metadata nor preview colours. Every dimension shown is mm. Preview and exports share the same current worker result and parameter key; invalid/stale states disable all STL/ZIP exports. The live mesh signature can be compared to downloaded bytes.

## Reference evidence and adaptation

**Mike Kasberg, White Cat Kit Card**, [source and instructions](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), CC BY4.0 (`REFERENCE-LICENSE.txt`). Direct STL URL, SHA-256 and measurements appear in `reference-analysis.json` and `reference-measurements.json`. Raw third-party STL is **not redistributed**.

Actual binary mesh: SHA256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`,30,616 triangles,179.819997×178.019994×3.190000mm. Millimeters assumed from source design scale; STL contains no units. Edge-adjacency gives27 components (two major sets plus25 two-triangle patches), not watertight. No repair claim. Actual sections atZ=.1/.5/1.59mm are in `evidence/reference-sections.png`; reproducible read-only parser `reference-measure.py` needs trimesh,numpy,matplotlib and a graph engine (scipy/networkx). Measured main sheet0–1.60mm, small carrier web planes.21–.22mm, sockets4.50×1.700012mm. The original sheet/carrier arrangement drives our reconstruction: default1.60mm sheet, separate parts inside a subdivided carrier, redesigned accessible.4–.6mm runners.

The source socket is **not** a sliding bearing. Its measured fit is recorded, not misleadingly imposed on this unrelated mechanism. The cover has4.50mm-wide finger windows; guide gaps and notches are original solid Boolean reconstructions, not a convex hull or unchanged mesh export. Compared with earlier apps this is a new three-input interlock, not an optical illusion, single thumb shuttle or rotating cipher reskin. Shared local studio/import/export infrastructure is reused; the seven moving/fixed geometries, placements and assembly tests are new.

Read-only local candidates were parsed first: keycap switch template (three components15.2×15.2×43.1mm) and fabric link (one component7.98×9.24×8mm). Those are not sheet-kit interfaces. Local kit-card project instructions were inspected but provided no suitable STL. Visual/interaction reference: read-only `keycap_generator2` README, CSS, App, Viewer, worker, export, imageTrace and STL modules. Concrete patterns adopted:374px left panel, collapsible sections, paired controls, raised tactile keys, muted lavender desk, coral selected states, checkerboard cutout, saved light/dark theme, worker result gating and preview-first phone layout. No source project Git history or dependency tree copied.

## Parameters and mechanism

- Card220–260×260–300mm; supported spacing3–5mm. Minimum carrier wall2.4mm. Slot/card packing checked at bounds.
- Moving sheet1.6–2.4mm. Guide-frame thickness is sheet+.25mm, providing a proposed **total vertical gap**.25mm. Cover/floor are full sheet.
- Gate station pitch30–38mm, real tooth width2–3mm. Three whole-number codes0/1/2 cut actual notch offsets-3/0/+3mm. Solved gate positions are the opposite offsets.
- XY running clearance.20–.40mm **per side**. Notch width=tooth+2×gap. Nominal gate travel6mm; nominal bolt stroke4mm, plus up to the per-side guide tolerance at each end. Nominal.50mm notch-back clearance leaves≥.10mm at maximum tolerance travel. No universal FDM tolerance claim.
- Gate window edge overlap1.5mm; bolt capture overlap≥1mm at nominal endpoints. Adhesive-bound cover, floor and frame stops retain the moving pieces. Forces, yaw/tilt play, wear and glue strength are not simulated.
- Runners.8–1.4mm wide,.4–.6mm thick. Four accessible side runners per clean part, intentionally away from notches.28 cut volumes checked to release exactly seven parts plus carrier without cutting any part.
- Rounded / square / clipped floor silhouettes, three real rendered presets, bounded variation, undo/redo, six local named designs and portable JSON.

## Both import workflows

All processing is local, no API keys, uploads, accounts, paid services or CDN generation dependencies. Manifold WASM and fonts bundle locally. File picker on desktop/phone and drag/drop on supported browsers. `public/samples` contains synthetic test fixtures (PNG, JPEG, hole-bearing SVG, ASCII wedge and binary gem); no personal files or third-party source STL. Reuse permission: synthetic fixtures may be used freely.

**PNG/JPEG/simple SVG → actual engraving:** validate content, file≤2MB, raster≤12MP /6000px per side BEFORE decoding; normalize≤500px. SVG accepts at most2000 simple filled vector elements, no external references, scripts, text, filters or effects; rasterized locally at256px. Fit/cover, crop shifts±25%, light/dark background, threshold1–254 or grayscale relief. Sample a20×20 luminance grid and create a closed piecewise-linear heightfield; subtract its top from floor apron. Bright regions/holes leave full-height backing. This is a coarse **2D-to-relief conversion, not automatic full3D reconstruction or exact vector tracing**. Checkerboard shows the actual sampled cutout; image and threshold/depth changes alter exported geometry. Text≤8 characters and six searchable locally bundled marks use the same path. Raised art deliberately unsupported for this sheet design.

**ASCII/binary STL → exact mesh-shaped engraving:** file≤2MB,≤1500 triangles, each axis.2–250mm. Parse normals-independent vertex data, weld1e-5mm; reject degenerate/nonfinite, open/nonmanifold/inward, disconnected, self-intersecting, concave or unsupported overhanging geometry. Accept one convex solid with broad flat Z-down bed contact (≥25% XY bounds) and no XY overhang. No repair or hull substitution; unsupported meshes get actionable errors. Choose Z/Y/−Z up before attaching, explicitly confirm millimeters (STL has no units). Source dimensions and source3D preview shown. XY scales proportionally to4–7mm footprint; Z independently scales to.4–.6mm depth. Z rotation±180°, X±1.5mm/Y±2mm placement, center/reset, replace/remove. Exact validated mesh Boolean-subtracted from exposed apron, not simply displayed/re-exported.

All imports stay within a13mm-diameter keep-in circle centered on apron, outside sliding guides and cover. Depth.4–.6mm leaves≥1mm backing. Bounded portable JSON includes normalized PNG or exact bounded STL vertices; missing image payload explicitly requests reattachment. Imported STL is revalidated on restoration. Never save input files in the repo. Export only becomes available after current conversion and worker validation succeed.

## Printing and assembly

See `ASSEMBLY.txt` or the in-app numbered guide. Print every part bed-flat at100% scale, PLA/PETG,.16–.20mm layer,.4mm nozzle, three perimeters, no supports intended. Default carrier240×280mm; smaller beds can use individual/clean plate exports. First print floor/frame/gate-one as a calibration set. Remove elephant foot; tune XY gap or sand faces for vertical fit. Bond frame to floor, place three gates and comb from above, check code/stroke, then bond cover ONLY on fixed margins. Keep glue out of guide pockets. Let cure before use. Return comb right before adjusting gates. Never force a blocked code.

## Validation scope

`npm test`:73 cases covering three presets, all silhouettes, every scalar endpoint, combined extrema, all27 codes, image-derived and STL-derived outputs. Every part, connected card and float32 print plate: nonempty/finite/nondegenerate triangles, normalized matching normals, expected mm bounds, outward winding, two opposite-directed faces per1e-5mm welded edge and positive volume per connected component. Exact solid intersections test full supported straight stroke, wrong-code blocking, guide stops, vertical floor/cover capture, insertion paths,28-tab release, no packed overlaps and bed support footprints. Ring probes verify bright image holes remain material and dark ring is actually cut.

Browser scripts exercise actual PNG/JPEG/ASCII/binary file-picker imports and downloads, changed pixels/threshold/depth/scale/rotation/placement, invalid input recovery, preview signature and regenerated JSON match, units/orientation, text/icons/SVG, portable image/mesh/named saves, undo/redo, all views, ZIP contents, immediate stale gating, worker-load failure/recovery,320/390px no-overflow layouts, touch orbit/pinch, theme/focus/reduced motion. Reports and screenshots live beside sources. Root/gallery and deployed production-path checks are separate reports.

**No physical print, friction, fatigue, adhesive-strength or security test was performed.** Watertight geometry alone does not establish real-world movement.

Dependencies: React/ReactDOM, Vite/plugin-react, Three.js OrbitControls, Manifold3D (Apache2.0), fflate, bundled Fredoka/Rubik (SIL OFL), gh-pages. Playwright is development-only. Simple icon paths are local original geometric marks.
