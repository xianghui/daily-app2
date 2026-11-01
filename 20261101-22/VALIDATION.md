# Validation — Steiner & Knot / 20261101-22

Completed on 2026-11-01. Computational checks only; **no physical print or equilibrium test**.

- Actual reference binary STL downloaded, SHA-256 recorded, 30,616 triangles parsed, dimensions/components measured; three mesh cross-sections inspected. Two local reference candidates also parsed. Source license verified CC BY 4.0. No raw source mesh bundled.
- `npm run predeploy`: passed individual production build with local worker/WASM/font paths.
- `node validate.mjs`: **42 cases passed**: three presets, three silhouettes, each parameter boundary, combined boundaries, transformed ASCII/binary STL and threshold/grayscale image geometry, imports at extremes. Independently validates exported float32 triangle arrays, finite/nondegenerate faces, positive volume EACH component, consistent normals/winding, opposite-direction welded edges (1e-5 mm), dimensions and intended component counts.
- Separate assembly checks: all six assembled part pairs; 63 insertion steps across three saddles; six sockets/tongues/shoulder stops; flush feet; real one-component card, correct envelope/bed support, no part overlaps; sixteen safe snips release four parts plus carrier. Three drop windows and 459 spherical cord-path samples per case, up to **0.50 mm cord diameter**. Ideal 120° branch angles and force-vector residual independently checked. These are geometric route checks, not tension/friction/strength/stability simulations.
- `browser-test.cjs`: passed real production browser file-picker PNG/JPEG/ASCII/binary imports and actual STL downloads; pixel/threshold/depth/crop/size and STL source/scale/rotation/placement change exported geometry vs defaults. Reset restores baseline. Actual downloaded bytes match UI fingerprint AND regeneration from downloaded JSON. Imported variants receive the same final-mesh and assembly checks.
- Browser negative cases passed: wrong/truncated image or STL, empty silhouette, excessive byte/pixel/triangle counts and dimensions, open/nonmanifold/concave inputs, invalid transform/keep-in edits. Invalid export disabled; replace/remove/reset recovery works.
- `studio-test.cjs`: three real presets/thumbnails, silhouettes, text/searchable icons/SVG, hole-preserving portable image payload, saved/restored/revalidated mesh payload, missing-payload errors, undo/redo, named saves/reload, all views, theme persistence/focus/collapse/reduced-motion, actual ZIP unpack and every STL independently parsed. Worker-script abort disables export; reload recovers.
- `personalization-check.mjs`: actual final solid probed: bright center of ring preserves surface, dark ring removes material; geometry differs from default.
- `orientation-test.cjs`: Z/Y/−Z source transforms, explicit mm gate and final geometry validated.
- `icons-drop-test.cjs`: six bundled icons alter actual geometry; every result independently mesh/assembly checked; actual drag/drop PNG works.
- `rapid-test.cjs`: spacing changes real exports; late worker cannot enable invalid state; exact reset and background polarity; actual per-part button downloads parsed.
- `ui-test.cjs` plus primary browser checks: 320/390 px phone preview-first layout, exports and all editor sections reachable with no overflow, expanded instructions/JSON download, real CDP touch orbit/pinch changes canvas. Desktop 374 px LEFT controls/RIGHT viewer; light/dark visual evidence inspected. No application runtime errors or remote requests.
- Entire import/download/studio/orientation/icons/rapid/mobile suites repeated on **ROOT combined production output** under `/daily-app2/20261101-22/` at local port 5682. See `combined-browser-validation.json` and companion reports; no development-server-only validation.
- Root gallery inline script compiled with `new Function`, script presence required; new `stl` entry exactly once/first and correct path. **353 entries render, all 352 previous entries unchanged**. STL Generators category first; browser runtime error list empty.
- Root `npm run predeploy`: **353 built/copied, zero failed, zero skipped**. Root deploy/index.html and every gallery app's index.html verified present.

## Deliberate limitations

Only one closed convex broad-flat-bottom source STL is supported; concavities/hollows/overhangs are rejected, not repaired or replaced by a hull. Images become sampled 20×20 relief, not vector-exact outlines or full-object 3D. Preview palette is not STL colour. Dashed cords, ideal knot and external riser/weights are explanatory, not printable or simulated.

The experiment requires external cord, equal light weights, narrow riser, tape and adhesive. Source-fit allowance is proposed and printer/material dependent. Physical print/assembly, cord sliding, equilibrium, load/adhesive strength and stability are **untested**. Do not interpret watertightness or collision-free ideal routing as physical performance proof.
