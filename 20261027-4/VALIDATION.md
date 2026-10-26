# Orbital Hush — validation record

Run date: 2026-10-27 (Asia/Singapore). **No physical printing, traction, force, fatigue or material testing performed.**

## Passed before publication

- `npm run predeploy`: production React/Vite bundle, locally bundled geometry worker/WASM, fonts and runtime dependencies. Non-fatal Vite browser externalization and size advisories; real production worker loading verified separately.
- `node validate.mjs`: **36 parameter cases** (default, all three presets, 32 representative bound combinations) and **35 imported-output cases** (ASCII STL, binary STL, threshold relief, grayscale relief and engraving over default/presets/extrema). Every part and combined translated float32 plate checked.
- Independent STL checks: nonempty exact byte counts; finite vertices; nondegenerate triangles; normalized normals matching winding; dimensions; exactly two oppositely directed faces per welded edge at 1e-5 mm tolerance; positive enclosed volume for every intended connected component.
- Independent geometric mechanism checks: representative full-turn poses, floor/race walls, guide clearance, nominal roller separation, protected import region, intentional bounded unloaded TPU contact at both concentric surfaces, no unwanted intersections in estimated compressed preview, separated print layouts, race release and roller outward-relaxation/vertical lift paths. **Estimated compression is not verified material behavior.** TPU squeeze is deliberate interference; this is not a rigid interference-free fit.
- `node browser-test.cjs`: actual file-picker PNG/JPEG and ASCII/binary STL attachment; unit confirmation; real STL downloads compared against preview fingerprint and independently regenerated JSON state; changed pixels, thresholds, depths, crop/fit and mesh scale/rotation/placement survive export. Baseline/remove/reset reproducibility; minimum/maximum dimensions; actual per-part downloads.
- Recoverable rejections: malformed/truncated, open/nonmanifold, excessive size/pixel count/triangle count/dimensions, unsupported concavity, empty silhouette, invalid dimensions/transforms and unsafe import placement. Invalid/stale/currently-building state blocks export.
- Phone: **390 and 320 px**, no horizontal overflow, reachable exports, real image/STL imports and downloads; CDP touch orbit and pinch change the actual viewer.
- `node feature-test.cjs`: all presets, silhouettes, bounded variations, text, icons, SVG, engraved/raised/background conversion, exact portable PNG/JPEG/ASCII/binary round trips, local named-design persistence, undo/redo, per-part exports and parsed ZIP with **five valid STLs plus assembly notes**. Light/dark persistence, swatches without STL color claims, drag/drop, Y-up STL import, collapsible sections, visible keyboard focus, latest-worker-result guard.
- `node hole-test.cjs`: actual final-solid volume probes confirm white ring holes are unraised/unengraved while dark artwork creates/removes real geometry. Continuous backing remains; these are relief holes, not cut-through holes.
- `node resilience-test.cjs`: deliberate production worker-script abort disables export with recoverable feedback; reload restores operation; all six original bundled SVG marks change geometry; assembled and ghost views captured.
- `node stale-import-test.cjs`: intentionally delayed first image normalization cannot overwrite a newer selection.
- `node extra-checks.cjs`: desktop 374 px LEFT panel / RIGHT viewer, motion and orbit-offset controls, every individual moving-part view, reduced-motion style, missing portable-image payload explicitly requests reattachment and disables export until reset.
- `node gallery-validate.cjs`: every inline script compiled with `new Function`; missing-script check; new entry exactly once with area `stl`; all **188 earlier entries unchanged**; new entry first.
- Root `npm run predeploy`: **189 apps built/copied, zero failures or skips**. `node root-stage-check.cjs`: all app index pages present, root index exact, every new app file byte-identical to tested production output. Browser gallery: all 189 cards, STL Generators first, search/recovery, no runtime errors.

## Interpretation

The mechanism is an open, cage-free rolling-element bearing, not a geared drive. Ideal equal spacing and no-slip orbit are estimated preview-only positions; rollers can slip, drift or bunch. Intended vertical retention is **none**: hold level, lift the race and redistribute/release the rollers. Print unloaded circular rollers in TPU 95A; rigid rollers may jam. Gentle Roll is a full-size calibration set, not a guaranteed universal fit.

Reports (`*-validation.json`), scripts and synthetic fixtures are retained here; screenshots show actual browser states. `root-browser-validation.json` records the repeated full browser import/download/mobile suite against the actual combined `deploy/` server. `public-validation.json` records the post-publication live Pages worker/WASM and download check when complete.

## Publication result

Root `npm run deploy` completed and reported **Published**. The initial new-path 404 cleared during GitHub Pages propagation. `node public-smoke.cjs` subsequently passed HTTP 200, the correct app title, live worker/WASM, an actual downloaded STL byte-matching the independently generated default model, five outward-wound closed components, gallery newest-first and no runtime errors. Source and reports are committed on `main` after publication.
