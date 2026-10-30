# Validation — 2026-10-31

Computational and production-browser verification; **no physical printing, assembly or fluid testing**.

- `npm test`: **34 built-in cases**, **18 import-derived cases**, **26 rejected dimension bounds**. All separately exported solids and connected cards checked for finite, nondegenerate outward-wound faces, exact binary length, mm bounds, positive component volume and welded manifold edges (1e-5 mm tolerance).
- Default card220 ×190 ×2.8 mm, one closed component. Three clean parts; twelve snips produce three parts plus one carrier. No packed/assembled intersections; insertion, tongue/shoulder seating, eight cord eyes, conservative tube-envelope witnesses and bed-footprint sections verified across parameters/imports.
- `hole-check.mjs`: Boolean probes confirm white center preserved, dark ring engraved and continuous backing retained.
- `browser-test.cjs`: actual PNG/JPEG/SVG/ASCII/binary file-picker imports; downloaded geometry differs from no-import and changes with pixels/threshold/depth/scale/rotation/placement. Every downloaded card is checked against UI fingerprint, portable JSON regeneration, full mesh checks and assembly checks. Actual per-part STL downloads verified. Malformed/truncated/nonmanifold/open/concave/excessive/empty/dimension/transform errors block export and recover.320/390px phone imports, download, touch orbit and pinch, no overflow.
- `studio-test.cjs`: every real preset, profiles, text/icon/SVG art, imported image and mesh JSON round trips, named save/reload, missing-payload error, undo/redo, all views, ZIP unpacking and each contained STL, saved dark theme, keyboard focus, collapsible sections, reduced-motion,374px left panel and phone preview-first layout. Worker-script abort disables exports; reload recovers.
- `stale-test.cjs`: rapid dimensions and image edits immediately gate exports; only the latest valid worker result becomes downloadable.
- `axis-test.cjs`: Y-up and negative-Z fixtures reorient to the same engraved export; changing axis removes the source and requests reattachment.
- `gallery-check.cjs`: every inline script compiled by `new Function`, nonempty script required; one correct newest STL entry; **all310 prior entries preserved**; STL Generators category remains first.
- Combined root `npm run predeploy`: **311 built,0 failed,0 skipped**. `check-combined.cjs` verifies every gallery folder plus file hashes for all44 new production assets. Actual base-path production worker/WASM and bundled fonts load locally. Combined gallery browser runtime check passes.
- `final-production-test.cjs`: actual direct STL buttons for card/base/both towers, exact byte signatures, closed manifold exports,320px touch orbit/pinch and reachable exports. Full browser import/export suite also run on the combined production output.

Reports: `validation-report.json`, `browser-validation.json`, `studio-validation.json`, `hole-validation.json`, `axis-validation.json`, `stale-validation.json`, `gallery-validation.json`, `gallery-browser-validation.json`, `combined-build-validation.json`, `combined-browser-validation.json`, `final-production-validation.json`. Screenshots in `evidence/` and desktop/mobile-validation.png. Tests operate on synthetic inputs only.

Tube envelope is an estimated purchased-component path, not a simulated liquid or exported printed tube. Tube bending, cord/adhesive strength, support adhesion, water settling, capillarity, dimensional accuracy and practical usability still require physical trials. Fit is printer/material dependent; two seats require adhesive, four cord loops and an external transparent tube are required. No universal calibration or waterproofness claim.

## Publication verification

Root `npm run deploy` completed with `Published`. GitHub Pages build/deployment run41122984036 succeeded. An initial404 during normal Pages rollout cleared after that deployment finished. `public-test.cjs` then verified HTTP200, the live worker/WASM, an actual default STL download with exact expected bytes and manifold checks, current fixture attribution and one visible gallery link. See `public-validation.json`.
