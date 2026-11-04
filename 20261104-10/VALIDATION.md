# Validation record — 2026-11-04

No physical print, damping, force, magnetic retention or fit test was performed.

- `npm test`: **45** default/preset/outline/parameter-extreme/image/STL cases. Every card, clean part and translated loose plate checked for finite nondegenerate float32 triangles, unit normal/winding consistency, closed edges after 1e−5-mm welding, positive volume of every component and declared mm bounds.
- Each case independently checked real twenty-tab release into carrier + five intact parts, flat/assembled nonintersection, four aligned tongue sockets, fifteen insertion poses, magnet gauges, M3 shaft and spacer, bolt length budget, thirteen pendulum angles and external copper with 0/1-mm axial offsets. Entire supported sheet ranges checked for bed-supported upper footprints.
- `image-hole-test.mjs`: actual Boolean probes verify ring hole retains backing while dark ring engraves.
- `browser-test.cjs`: real PNG/JPEG and ASCII/binary STL file pickers, downloaded mesh parsing and current preview/export hashes; thresholds, depths, crop, image content, STL scale/rotation/placement affect real output. All part downloads checked. Invalid/truncated/open/nonmanifold/concave/excessive inputs, empty image and invalid dimensions/transforms block exports with reset recovery. Phone 320/390 layouts, actual touch orbit/pinch and image/STL downloads passed. Zero runtime errors and zero remote generation requests. Repeated against production hashed worker/WASM under the exact base path.
- `studio-test.cjs`: all presets, text/icons/SVG, portable image/mesh JSON and named saved designs survive reload, missing payload requests reattachment, undo/redo, every ZIP STL parsed, views, dark theme persistence, keyboard focus, collapsed sections, reduced motion and 374-px desktop left rail. Production worker intentionally aborted then reloaded successfully. The initial development-only run could not match the hashed production worker route; rerunning against actual production bundle passed the intended failure test. No product worker fault was found.
- `stale-test.cjs`: rapid parameter/image edits immediately disable stale export, latest valid result matches independent Node generation; invalid transform recovery passed, including production bundle.
- `orientation-test.cjs`: Z/Y/−Z orientation, explicit mm confirmation, source dimensions and final generated geometry passed in production.
- `isolated-test.cjs`: every isolated part rendered and real STL downloaded/parsed in production.
- `mobile-layout.cjs`: all five tabs plus expanded instructions at 320/390 px without overflow; real portable JSON download and reachable STL actions. Preview first, controls stacked. Screenshots inspected at desktop/phone sizes.
- `interaction-test.cjs`, `icons-drop-test.cjs`: recommended swing inspection changes only preview, bounded variations work, all five sample buttons, six icon Boolean edits, exact reset and real drag-drop file attachment passed; repeated against production.
- `gallery-check.cjs`: every inline script compiled with `new Function`, missing scripts fail, new STL entry exactly once, all previous 432 entries preserved, category label/order correct.
- `gallery-browser.cjs`: 433 entries render without runtime errors, newest link and search correct.

Reports are executable-test outputs in the adjacent JSON files. Reference mesh was actually downloaded and parsed; hash, dimensions, component/defect analysis and measured sections are in `reference-analysis.json` and `evidence/reference-sections.png`. Raw third-party reference mesh is not bundled.

Root `npm run predeploy`: **433 built, zero failures/skips**; root index and new dist exactly matched deploy copies, and every gallery folder has a deploy/index.html.

Combined root publication succeeded. GitHub Pages build/deploy run 41744850685 completed successfully. The initial live smoke ran during rollout and saw the pre-publication 404; after rollout, the live app returned HTTP 200 and real browser default/imported-STL downloads passed (`public-validation.json`). The public root gallery also rendered all 433 entries without runtime errors.
