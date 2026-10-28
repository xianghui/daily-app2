# Slide & Count — validation record

Production build: `npm run predeploy` passed. No physical print was performed.

## Reference evidence

Freshly downloaded and parsed White Cat Kit Card (Mike Kasberg, CC BY 4.0); SHA-256, 179.820×178.020×3.190 mm bounds, 30,616 triangles, 2 edge-adjacent components, sheet/bridge measurements and original-source defects documented in reference-analysis.json. Actual mesh-plane sections at Z=0.1/0.5/1.59 mm rendered and visually inspected. Source not bundled or silently repaired. Reference maker-studio code inspected read-only.

## Geometry / assembly

`npm test`: **14 parameter cases + 30 imported-source cases passed**. Cases include defaults, all presets, every silhouette, simultaneous minimum/maximum parameters and eight crossed extrema. All 16 exported solids per case checked independently: exact binary size, finite coordinates, nondegenerate triangles, normal agreement, edge welding at1e-5 mm, exactly two opposite edge incidences, positive volume per connected component and mm bounds.

Kernel intersections check all15 assembled parts; 13 samples per foot/rail/key insertion path and full bead sliding envelope; cheek bead stops and transverse key rail stops; no part overlaps in flat layout; all parts inside connected card; 60 modeled cuts release15 parts plus one carrier. The maximum-case check initially found cheek tabs near functional tongues; placement was moved away from them and the entire suite rerun successfully.

This proves computational construction/assembly clearance, not friction, fatigue, strength, material behavior or physical print quality. Fixed clearance joints may need optional adhesive after calibration.

## Real production-browser downloads

browser-test.cjs: **38 actual STL downloads** checked (connected card plus every part, PNG/JPEG/ASCII/binary STL inputs, threshold/depth/crop/scale/rotation/placement and minima/maxima). Downloaded fingerprint equals preview and regenerated JSON state; dimensions agree with displayed mm bounds. Ten malformed/excessive/unsupported input scenarios block export and recover. Empty silhouette, invalid transforms, keep-out breach and stale edit handling verified.

feature-test.cjs: **20 regenerated/download-checked feature models**, all presets, variations, silhouettes, text, SVG, raised/engraved, background inversion and up-axis import. Portable image/STL round trips, persisted named designs, undo/redo, ZIP containing16 STLs and assembly instructions, real per-part buttons, view geometry neutrality, color preview, saved dark theme, focus, sections and drag/drop passed.

Additional reports: hole probes prove SVG-ring interior remains unraised/unengraved; all six bundled icons change geometry; worker abort blocks exports/reload recovers; delayed first image cannot overwrite newer selection; missing portable data is rejected; named imported assets survive reload. Browser runtime error arrays empty; import/generation test made no external file-processing requests.

## Desktop / phone

374 px left panel, right viewer, collapsible sections, selected tactile states, focus and reduced motion checked. Phone320/390 px: preview first, no horizontal overflow, reachable exports, real file picker imports/downloads, touch orbit and pinch verified by canvas changes. Final compact isolated-part selector works; preview starts within300 px. Bead travel visibly changes assembled positioning while export stays identical. Screenshots include desktop-validation.png, phone-320-validation.png, phone-390-validation.png and assembly/print/isolated/dark variants.

## Gallery / combined deployment

Root inline scripts compiled with Node new Function; **230 prior entries preserved**, new entry exactly once and newest first, STL Generators first. Browser search/filter and all231 gallery cards render without runtime errors. Root predeploy staged231 apps, zero failures/skips; root-stage-check.cjs verifies every gallery app exists, new-app files hash-match dist, and actual image/STL imports/downloads from combined deploy paths.

See JSON reports and executable scripts for observed details. Public deployment and live checks are recorded in public-validation.json when completed.
