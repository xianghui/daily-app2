# Bridge & Bend — flexure kit studio

A browser-based parametric **eight-part flat-pack kit card**, not a force gauge: snip32 runners, glue two trestles and a stop blade into a socket plinth, then swap three width-graded strips across open cradles and gently press the loose loading shoe toward the real central stop. Same span and thickness, three widths; different real spring geometry. No switches, magnets, bearings or screws. **Adhesive required. Physical printing, assembly, force, elastic limit and fatigue are untested.**

## Reference-first evidence

Local candidates under `/Volumes/ExternalHD/3d_printing_apps/` were inspected first: keycap_generator2 README/style/App/Viewer/worker/STL parser/export/imageTrace and actual switch-template mesh; fidget_fabric_generator README and diamond-link mesh. Switch sockets and an8 mm interlocking link are not suitable sheet-card references. No appropriate local sheet STL found in kit-card project sources. Both existing galleries were checked for duplicate mechanisms.

Downloaded and parsed **White Cat Kit Card**, Mike Kasberg, Printables865769, [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY4.0** ([license](reference-LICENSE.txt)). Source URL and exact download URL are in [reference-analysis.json](reference-analysis.json). The raw STL is NOT bundled.

- Binary STL SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`,30,616 triangles.
- Assumed mm (STL has no unit metadata),179.819997×178.019994×3.1899996 mm.
- Actual mesh sectionsZ.1,.5,1.59: principal sheet planes0/1.6 mm; four sockets4.5×1.700012 mm; low runner verticesZ.21/.22.
- **Nonwatertight original,27 edge-adjacent components.** Design reference only, not a repaired source import.
- Tongue4.4 + total allowance.10 with sheet1.6 reproduces the measured receiving section. Default.15 is **proposed clearance**, not measured universal fit. The2.4–3.2 mm stiff plinth and shoe, new trestles/stop, graded strips and32 bed-aligned runners are original parametric redesigns. No source spacecraft geometry is re-exported.

[Raw measurements](reference-measurements.json), [actual sections](evidence/reference-sections.png), `reference-inspect.py /path/to/source.stl` (trimesh/numpy/matplotlib) make evidence reproducible. Measured source dimensions, proposed printer tolerances and redesigned features are explicitly separate.

Read-only Keycap Studio supplied concrete interaction patterns:374 px left control rail, sticky compact brand/theme header, collapsible sections, slider/numeric mm pairs, raised tactile buttons and pink selected states, checkerboard conversion preview, saved theme, worker status and current-result export gating, preview-first phone stack. No reference project files/dependencies/history were modified or copied wholesale. Shared previously authored local studio/parsing/validation infrastructure is reused.

## Run and dependencies

Node22.12+: `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. React+Vite, Three.js/OrbitControls, Manifold WASM, fflate, local Fontsource Fredoka/Rubik (SIL OFL); Playwright is a development dependency. Generation/export need no CDN/API/server or paid service. Per-app base `/daily-app2/20261031-9/`, scripts `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public combined deployment uses the root monorepo deploy flow.

## Parameters — millimeters unless noted

| Parameter | Range |
|---|---|
| Card X/Y |210–240 each |
| Support center spacing |32–48 |
| Base depth / trestle height |32–36 /15–22 |
| Strip thickness / narrow width |.8–1.6 /5–8 |
| Other two widths |narrow+2,narrow+4 |
| Central stop gap |.4–.8 |
| Cradle lateral total allowance |.6–1.4 |
| Base/shoe thickness / upright sheet |2.4–3.2 /1.6–2.0 |
| Tongue width / socket total allowance |4.4–5.2 /.10–.35 |
| Spacing / runner width / runner height |3.5–4 /.8–1.4 /.4–.6 |
| Art footprint / depth |4–7 /.4–.6 |
| Art Z rotation / X/Y offsets |±180° /±1.5/±2 |

Three real generated-thumbnail presets, three base silhouettes, bounded variation, undo/redo, six local named designs, reset and JSON save/open. A debounced worker owns locally bundled WASM; generation IDs and a complete current-state key reject stale results. Invalid settings/imports or worker failure disable export; any last-good preview is labelled and cannot be silently exported. Runtime checks require closed finite nondegenerate consistently wound positive-volume solids.

## Image → real engraved geometry

Picker and drag/drop accept PNG/JPEG/simple self-contained SVG (2 MB,12 MP,6000px side before decode). Normalize images to≤500 px; restricted SVG≤2000 elements rasterizes locally to256 px, rejecting external references/scripts/effects. Source preview and checkerboard show actual20×20 conversion. Fit/cover, crop pan, light/dark background, threshold1–254 or grayscale relief, footprint, rotation, placement and.4–.6 mm depth change exported solid geometry. Text and six searchable bundled vector icons use the same pipeline.

A closed20×20 triangulated luminance heightfield is **Boolean-subtracted** into the protected outboard base lug, not a preview texture. Bright holes remain unengraved in continuous backing; actual Boolean probes verify this. This is **bounded sampled relief**, not exact SVG contour tracing and not automatic reconstruction of a full3D object from a photo. Raised art is intentionally unsupported so the whole kit stays bed-flat; engraved backing remains≥1.8 mm. Import and engraving never change spring coupons, supports or sockets.

## STL → real part integration

ASCII and binary STL≤1500 triangles/2 MB, oriented dimensions.2–250 mm per axis. Source dimensions, format, triangle count and live mesh preview; explicit **millimeter confirmation** because STL has no metadata. Choose Z/Y/−Z up before attachment; axis changes clear the source and request reattachment. XY scales proportionally to selected footprint, Z independently to engraving depth; rotate/center/place/replace/remove/reset affect exact exported geometry.

Supports **one closed outward-wound convex broad-flat-bottom solid** only. Validate complete facets/bytes, finite vertices, nondegeneracy, welded edge incidence, winding, connectedness, positive volume, triangle intersections, convexity and bottom support before CSG. Open/nonmanifold/concave/hollow/disconnected/overhanging/too-complex input gets an actionable error. **No convex-hull replacement, silent concavity loss or claimed repair.** Original verified mesh triangles form the actual Boolean cutter, meaningfully changing the printable base. Safe-zone checks prevent cut-through and interface damage.

Only synthetic/public-domain sample PNG/JPEG/ring SVG/ASCII/binary STL fixtures are bundled; see `public/samples/ATTRIBUTION.txt`. All user files are processed locally, never uploaded or saved in the repository. Portable JSON/named designs store bounded normalized image or validated mesh payloads. Missing image data explicitly requests reattachment; JSON2 MB maximum. Original personal files are not persisted separately. STL stores neither colors nor units.

## Print, calibrate, assemble

See [PRINTING.txt](PRINTING.txt) for numbered directions. Default card220×220×2.8 mm; export individual clean parts on smaller beds. Flat Z=0, .16–.20 mm layers, PLA/PETG, three perimeters; solid strips with lengthwise paths. No supports intended; inspect slicer. Print base+trestle calibration pair before the full card. Clip32 accessible runners; their attachment sites avoid sockets, tongues and cradle surfaces.

Insert two trestles downward into their four slots; insert the central stop into its own slot. Shoulders sit on the base, tongue tips stop.05 mm above the bed; five **adhesive-fixed** seats, not snap locks. Glue and cure. Set ONE strip across the shallow open cradles; center the loose shoe; gently press toward first stop contact, release and swap strip. Spares sit beside the apparatus in assembled view. No captive-motion or force-limiter claim; don't force past contact or flick parts. Discard whitened/cracked strips.

Relative ideal point-load beam stiffness ∝width×thickness³/span³ (same material). UI surface-strain estimate `6*t*stopGap/span²` is a simplified geometric comparison, **not measured force, elastic limit, fatigue or safety proof**. Actual finite shoe/contact widths, anisotropy, filament and creep differ. Computational clearance uses a flat shoe-contact middle and cosine transition to flat support patches, not an FEA or a deformation prediction. Assembled preview stays undeformed; no fake bending animation. Card, de-tabbed, exploded, assembled, isolated and ghost views share the same result; export is always bed-flat printable geometry, not assembled overlaps.

Prominent card/per-part binary STL and Everything ZIP with all9 STLs (card+8 parts) and numbered assembly notes. Dimensions and current binary fingerprint show exact preview/export state. Preview colors are visual only.

## Validation

`npm test`: independent binary STL bytes/counts, finite coordinates, triangle area, normal/winding agreement,1e−5 mm welded opposite-directed two-face edge incidence, positive volume per component, expected bounds and Z=0. All parts/card, all3 presets/profiles, each field endpoint and combined minima/maxima, threshold/relief and both STL fixtures at default/min/max/transformed states. Card is one solid;32 safe simulated snips release eight pieces plus carrier. Assembled pair intersections, five socket/tongue probes, three vertical insertions, all strip swap paths/support contacts, real stop gap and sampled idealized deflection clearances; sampled upper slices lie within bed footprint. This is not physical print validation.

`browser-test.cjs`, `studio-test.cjs`, `stale-test.cjs`, `axis-test.cjs`, `hole-check.mjs` target production at the actual URL prefix. Real picker PNG/JPEG/ASCII/binary imports; actual STL/ZIP downloads parsed and compared to default, transformed imports and exact current saved-state regeneration. Threshold/depth/pixels/scale/rotation/placement alter exports. Replace/remove/reset, malformed/truncated/nonmanifold/concave/empty/excessive inputs, missing assets, presets/text/icons/SVG holes, undo/redo, portable image/mesh JSON, named reload, theme/focus/collapse, worker abort/recovery and stale guards.320/390 px touch orbit/pinch, preview-first stacking, no overflow and reachable import/export. Reports/screenshots retained beside scripts; see [VALIDATION.md](VALIDATION.md).

**No physical printing, assembly, bending force, durability, fatigue, external slicer or material tests have been performed.**
