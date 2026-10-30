# Validation — Lace & Resonance

## Actual source evidence

Fresh public STL download parsed with trimesh; SHA-256, mm assumptions, dimensions, 27 edge-connected components, nonwatertight source defects and four measured 4.5 × 1.700012 mm sockets recorded. Three actual cross-sections rendered and inspected. Source README/OpenSCAD/LICENSE verified, source retained only in `/tmp`. Local switch/link candidates inspected and rejected for sheet-kit use. No source model or private asset redistributed.

## Geometry / assembly (computational, not physical)

`npm test` passed **34 built-in** cases (all presets, minimum/maximum, three silhouettes and every individual field endpoint) and **8 image/STL** cases. Every case checks the connected card and all four separate parts:

- Binary size, finite coordinates, nondegenerate triangles, normalized stored normals agreeing with winding, mm bounds and Z=0 bed placement.
- Weld tolerance 0.00001 mm, exactly two opposite-directed faces per undirected edge, adjacency and positive enclosed volume for every component. One card component; one solid in each clean-part export.
- Exact declared card envelope; packed clean parts disjoint. Sixteen snips avoid all functional part geometry. Snipping separates exactly five components: four clean parts plus carrier.
- Six assembled part-pair intersection checks, zero unintended overlap. Lower hoop and upper clamp have clear vertical insertion paths (26 representative insertion poses per normal check; browser regeneration uses finer sampling).
- Four source-fit foot socket allowances and no tongue intrusion into upper clamp. All six coaxial cord passages checked with solid cylindrical probes against all four parts. Paper aperture probe clears all printable parts.
- Forty sampled section/footprint comparisons per model verify no upper print layer lies outside the bed-supported column footprint. Signature backing >=1.8 mm.

First run detected two oval-lug runner snips touching the lug fringe. Runner levels were moved from ±0.30 to ±0.50 hoop radius; the complete checks then passed. This was fixed before publication.

`node hole-check.mjs` passed actual Boolean volume probes proving the white center hole remains unengraved, the dark annulus actually removes geometry, and solid backing remains.

## Production browser

`npm run predeploy` passed. Playwright served the **actual production `dist` under `/daily-app2/20261030-31/`**, not just Vite development mode.

`browser-test.cjs`: **27 actual STL downloads** parsed, including baseline, PNG, JPEG, threshold/depth/crop/grayscale/scale changes, both STL encodings and transformation/reset variants, minimum/maximum, per-part and phone imports. Exact downloaded signatures match the UI and meshes regenerated from the same portable JSON; all undergo the mesh and assembly checks. Ten malformed/unsupported fixture rejections tested: malformed SVG, truncated STL, open STL, duplicated-face nonmanifold STL, oversized file, fake PNG, excessive image pixels, excessive triangle count, invalid dimensions and concave STL. Empty silhouettes, NaN transform, protected-zone overflow and bad parameter bounds also block stale exports and recover through replace/remove/reset.

`studio-test.cjs`: every real preset downloaded/checked, all three silhouettes, text, searchable icon and SVG, real engraving changes, all views, see-through solids, theme reload, focus outline, collapsible sections, reduced motion, undo/redo, named design reload, image and STL portable JSON. Missing image payload correctly requests reattachment. Everything ZIP unpacked and every contained STL validated against the exact model; numbered instructions included. Worker script deliberately aborted, export disabled, then reload recovered.

`axis-test.cjs`: actual Y-up and −Z-up binary meshes selected through browser picker, reoriented and exported byte-identically to expected Z-up engraving. Changing up axis clears the source and requires reattachment. Both outputs pass solid/assembly checks.

Desktop rail measured 374 px left of viewer. Touch phone contexts 390 and 320 px: no horizontal overflow, preview-first layout, reachable download actions, real PNG/STL uploads. CDP touch orbit and pinch each changed canvas screenshots. No browser runtime errors or external requests in app tests. Screenshots: `desktop-validation.png`, `mobile-validation.png`, `evidence/studio-dark.png`, `evidence/combined-site.png`.

## Gallery / combined output

`gallery-check.cjs`: one inline script compiled with `new Function`, exactly one newest `20261030-31` entry in `stl`; all **303 prior entries unchanged**. Existing STL-first category label and fidget/kit-card tagline retained.

Root `npm run predeploy`: **304 built, 0 failed, 0 skipped**. `check-combined.cjs`: root gallery matches byte-for-byte, all 304 app folders present, 43 new-app production files hash-identical to `dist`. Combined gallery browser rendered 304 cards and opened the correct new app with working production worker/WASM. Full import/download browser suite also runs against the combined root output; see `combined-browser-validation.json`.

## Explicit limits

**No physical print, physical assembly or acoustic test was performed.** Computational fits/collision-free routes do not verify paper clamping force, useful acoustic response, adhesive strength, membrane tension, fatigue or durability. External paper, <=1 mm soft cord and adhesive at four fixed seats required. Nominal 0.2 mm paper positioning is preview-only. Adult craft object, not a calibrated instrument or children's toy. STL stores no colors; raw reference meshes and user uploads are not bundled.
