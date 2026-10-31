# Validation — Stitch & Stretch

Computational/browser validation on 2026-10-31. **No physical print, assembly, fabric tension, strength, accuracy or fatigue test.**

## Reference

- Downloaded public White Cat Kit Card STL and source README/LICENSE; parsed actual binary mesh with Trimesh. SHA-256, 30,616 triangles, dimensions, 27 edge-adjacent components, nonwatertight condition, socket loops, sheet planes and candidate-source measurements recorded in `reference-measurements.json`.
- Viewed actual mesh sections at Z = 0.1, 0.5 and 1.59 mm, saved in `evidence/reference-sections.png`. Source 1.6 mm sheet / 4.5 × 1.700012 mm sockets map to generator interfaces. Proposed clearance and thicker runners are explicitly distinct.
- Original design reconstruction only; no raw reference mesh redistributed, no source repair claimed. Local reference projects remain read-only.

## Pure geometry and mechanics

`npm test` passed: **42 cases**, plus **40 invalid parameter/packing cases rejected**. See `validation-report.json`.

- Three presets; square/soft/clipped profiles; simultaneous supported minima/maxima; every scalar low/high; exact ASCII/binary source meshes at default/transformed settings; synthetic threshold/grayscale image-derived geometry.
- Every exported part and connected card independently parsed from binary float32 STL. Exact byte length, finite coordinates, nondegenerate faces, normalized stored normals, consistent outward winding, welded edge count exactly two with opposite directions, connected-component positive volume and expected millimeter bounds checked. Vertex weld tolerance: 0.00001 mm.
- Each card and clean part is one closed connected solid. Every card stays within declared X/Y envelope and Z thickness; every intended part is contained. Float32 reconstruction containment tolerance is 0.002 mm³, not a design clearance.
- No pairwise solid intersections in assembled state or card layout. Both rail insertion paths checked at 13 positions per side for normal cases, and 25 per side for browser-derived exports. Four clearance sockets receive 4.5 mm tongues without elastic insertion; 12 mm shoulders establish the fixed gap. Adhesive is explicitly required at all four fixed seats.
- Sixteen runner cuts release exactly **four parts plus carrier**. Runner lands exclude tongues and sockets. Accessible 1.6 mm snip stand-off documented.
- Upper sections sampled through each part and card never exceed the bed footprint: no floating reduced-thickness tongues. Eye probes confirm open through-bores. Minimum backing and socket/eye ligaments checked independently of mesh closedness.
- Tall rails in a too-short card reject; the wide preset and randomizer choose a taller card. This packing correction was made before publication.

## Real production browser imports and exports

`node browser-test.cjs` passed against built `dist`, served under the actual base prefix. `browser-validation.json` records **27 downloaded outputs** and **10 malformed/unsupported file rejections**, plus empty-image, invalid transform and invalid parameter checks.

- PNG and JPEG file picks: image content, threshold, engraving depth, crop/shift, grayscale and footprint alter exported geometry. Replace/remove/reset recover; reset reproduces the built-in fingerprint.
- ASCII and binary STL file picks: units explicitly confirmed, source dimensions shown; footprint, Z depth, rotation and placement survive into actual downloaded geometry. Reset transformations reproduces each prior fingerprint.
- For imported outputs, independently parsed each part/card and reran the same assembly/insertion/runner/bed checks. Saved JSON regenerated the exact browser STL in Node; actual downloads match the UI geometry fingerprint and displayed dimensions.
- Truncated, open, duplicate-face/nonmanifold, concave, over-complex, oversized, wrong-content, excessive-dimension and huge-image inputs reject with recoverable errors and disabled export. Empty silhouettes and protected-zone violations also block export.
- 390 px touch file picks and actual PNG/STL downloads pass; 320 px layout has no horizontal overflow and exports remain reachable. CDP touch orbit and pinch both change the canvas screenshot.
- Zero runtime errors and zero runtime remote-service requests in this suite.

## Studio features and portable assets

`node studio-test.cjs` passed; `studio-validation.json` records:

- Every real preset downloaded and checked; all three silhouettes, text, searched icon and SVG change geometry.
- Image and original-mesh portable JSON round trips; named design reload; missing image payload rejected with explicit reattachment guidance.
- Undo/redo restores exact geometry; saved dark theme, visible keyboard focus, reduced motion, collapsible sections, 374 px left controls/right viewer and preview-first 320 px phone layout verified.
- All card/assembled/exploded/de-tabbed/isolated views exercised. Exploded offset, translucent cloth and lacing lines are explicitly preview-only.
- Actual Everything ZIP unzipped: every one of five STL files parsed and checked; numbered assembly notes present. No generic ZIP presented as 3MF.
- Worker script deliberately aborted: actionable failure and blocked export; reload recovers.

Additional passing suites:

- `personalization-test.cjs`: text, all six bundled icons and SVG, each with final mesh and assembly checks (`personalization-validation.json`).
- `hole-check.mjs`: probes actual Boolean solid; white center remains solid, dark ring engraves, continuous backing retained (`hole-validation.json`).
- `background-test.cjs`: light/dark inversion produces different checked geometry (`background-validation.json`).
- `orientation-test.cjs`: Y-up and upside-down STL restore exact expected oriented geometry; changing axis detaches source (`orientation-validation.json`).
- `stale-test.cjs`: immediate export blocking during rapid parameter/image edits, newest-only result and invalid-transform recovery (`stale-validation.json`).

## Gallery and combined production

- `npm run predeploy` passes for individual app, including locally emitted worker/WASM/fonts.
- Gallery inline script compiled with Node `new Function`; missing/empty scripts fail the check. One correct newest `20261031-26` entry, `area: stl`, category label/order and tagline verified. All **329 prior entries** exactly preserved (`gallery-validation.json`).
- Browser gallery rendering/search passes with **330 cards**, STL first, correct new link and no runtime errors (`gallery-render-validation.json`).
- Root `npm run predeploy` passes: **330 apps built/copied, 0 failed, 0 skipped**; `deploy/index.html` and `deploy/20261031-26/` exist. Combined production gallery link reaches the working new app (`combined-gallery-validation.json`).
- Full browser import/export suite rerun against combined `deploy/` tree under the real prefix; `combined-production-validation.json` confirms the same imports, geometry changes, rejections, fingerprint matches and mobile downloads passed with zero runtime errors.

## Limits

These tests do not establish real FDM tolerances, force, glue performance, cloth retention, fatigue or embroidery suitability. The source-inspired fit must be calibrated on the user's printer/material. The small craft frame needs external fabric, soft thread, blunt needle and adhesive, and must not be load-bearing. Unsupported STL topology is rejected, never silently hulled or repaired.

## Public publication proof

Root `npm run deploy` completed with `Published`. GitHub Pages build for deployment commit `a3914b281840fc7da53f26c7a855a1027a2529ac` reported `built` with no error. After propagation, `node live-production-test.cjs` passed against the public HTTPS site: HTTP 200, locally bundled production worker/WASM, actual PNG-derived and ASCII-STL-derived downloads matching their displayed mesh fingerprints, no phone overflow, 330-card gallery with the correct newest entry, and no runtime errors. See `live-production-validation.json` and `evidence/live-phone.png`.

Main source commit `681ceca` was pushed to `origin/main`; it also preserved the previously staged 20261031-25 files, as required by the requested root `git add -A` workflow. A subsequent evidence-only commit stores this public verification.
