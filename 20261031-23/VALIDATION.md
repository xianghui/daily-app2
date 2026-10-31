# Validation — Pin & Pattern / 20261031-23

## Reference and design

Actual downloaded reference parsed afresh with `reference-inspect.py`; SHA-256, bounds, 30,616 triangles, 27 edge-adjacent components, source nonwatertightness and measured socket loops recorded in reference-measurements.json. Actual Z=.1/.5/1.59 mm section plots inspected. Reference-analysis.json separates measured sheet/socket/runner dimensions from proposed tolerances and redesigned deck/pegs. Source license fetched from its public repository. Raw source not bundled. Local candidates parsed and rejected for inappropriate interfaces; reference projects unchanged.

## Geometry and kit assembly — PASS

`npm test`: 30 built-in cases (three presets, three shapes, combined extrema, each field endpoint), 18 image/STL-derived cases including min/max and transforms, 23 out-of-range inputs rejected. Every case runs independent final binary-STL checks on the connected card and all ten clean parts: finite/nondegenerate triangles, unit normals agreeing with winding, expected mm bounds, weld tolerance1e−5 mm, two opposite-directed faces per edge, adjacency and positive signed volume per intended component.

Every case also checks 45 assembled pairs for no unwanted intersections; nine complete straight insertion/removal paths; actual tongue probes inside each peg and outside the receiving deck; eighteen actual head notches/lips; minimum backing≥1.4 mm and protected artwork clear of sockets; card envelope; flat-piece nonintersection; all40 snips outside part geometry leaving11 components (ten parts plus carrier); bed footprint supports sampled upper sections. Fixed seats require adhesive, no positive retention or force rating claimed. No printed moving joint or band kinematics simulated.

## Browser and production — PASS

`npm run predeploy` succeeded. Actual production dist served at its real `/daily-app2/20261031-23/` prefix with local worker/WASM. `node browser-test.cjs` exercised real file picker PNG/JPEG/ASCII/binarySTL and actual downloaded STLs, every per-part export, defaults/min/max. Exact downloaded fingerprint equals current preview key, saved JSON regenerated in Node, and UI mm dimensions. Every generated import output received complete per-part mesh and assembly checks. Changed pixels/threshold/depth/crop/size/rotation/placement alter actual export. Replace/remove/reset recover exact default. STL unit checkbox gates export. Invalid/truncated/open/nonmanifold/concave/excessive/bad-dimension/fake/empty image and invalid transform inputs block export recoverably. Zero runtime errors or remote requests. 320/390 px touch devices: orbit and pinch visibly change canvas, picker imports and real phone downloads work, no horizontal overflow, export reachable.

`node studio-test.cjs`: real presets, silhouettes, text/icons/SVG; portable image+STL JSON, local named design reload, missing payload request and export block, undo/redo, actual ZIP contents independently parsed (11STLs + numbered assembly guide), all views, dark theme persistence, focus styling, collapsible sections, reduced-motion context, 374px LEFT panel / RIGHT viewer, phone preview-first, aborted worker request and reload recovery. All passed.

Additional passing scripts: personalization-test.cjs (six icons + text + SVG, full mesh/assembly checks); hole-check.mjs (actual solid preserves ring-hole backing and engraves annulus); orientation-test.cjs (Y-up and upside-down exact mesh integration and explicit reattachment); stale-test.cjs (rapid parameter/image edits immediately block stale export, final current result exact). The stale test was corrected to start with a genuinely changed value rather than asserting rebuild on the unchanged default; no application failure remained.

Screenshots: evidence/assembled-light.png, evidence/studio-desktop.png, evidence/connected-card.png, evidence/studio-dark.png, evidence/studio-phone.png, desktop-validation.png, mobile-validation.png. Machine-readable results beside each script.

## Combined gallery/site — PASS

Gallery inline script compiled via new Function; required script nonempty. Exactly one newest `20261031-23` STL entry. All326 previous entries exactly preserved;327 total. STL Generators remains first category; physical-fidget/flat-pack tagline retained. Browser rendering/search/link checks passed with no runtime errors.

ROOT `npm run predeploy`: Built327, Failed0, Skipped0. Verified deploy/index.html exactly equals root gallery and all327 deploy/app/index.html paths exist. `node final-production-test.cjs` against combined deploy server passed real PNG/JPEG/ASCII/binarySTL downloads, mesh/signature checks, assembled/exploded/card views, phone layout and gallery rendering.

## Explicit limitations

Computational/browser checks only. No physical printing, actual assembly, band-force measurement, tension/retention/fatigue test or slicer validation performed. Trial-fit before bonding; use slack loops and stop if pegs bend/lift/crack. External elastic/yarn and compatible adhesive required. STL contains neither units nor preview colours; only supported local mesh imports accepted, not arbitrary repair.

## Publication — PASS

ROOT `npm run deploy` reran combined predeploy (327 built,0 failed,0 skipped) and gh-pages reported Published. GitHub Pages run [41199784805](https://github.com/xianghui/daily-app2/actions/runs/41199784805) completed successfully. Initial public404 responses occurred while Pages was queued/building; after completion, `FINAL_BASE=https://xianghui.github.io FINAL_REPORT=live-production-validation.json node final-production-test.cjs` passed on the actual public site: four real PNG/JPEG/ASCII/binarySTL import/download outputs with independent mesh/fingerprint checks, views, mobile layout,327-card gallery and zero runtime errors. Public app: https://xianghui.github.io/daily-app2/20261031-23/ .
