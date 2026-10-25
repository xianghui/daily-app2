# Lambda Loom validation — 2026-10-25

## Passed before publication

- React/Vite `npm run predeploy`; local bundled WASM and fonts, no external runtime requests.
- `npm test`: **260 parameter cases** (default, three presets, 256 dimensional corners) and **30 imported-output cases** (ASCII/binary STL, threshold, grayscale, engraved image across presets/extremes). All 12 individual components and combined plate checked per case.
- Independent binary STL checks: nonempty triangles, finite vertices/normals, nondegenerate faces, outward normalized face normals, positive enclosed volume for each connected component, exact two-face edge incidence with balanced winding after 1e-5 mm welding, orientable Euler topology, bed Z=0 and analytical millimeter bounds.
- Default kinematics: 72 positions at 5° increments; 4,464 non-fit assembled pair intersection checks. Additional representative dimensional corners, presets and every imported case receive motion/plate/isolation checks. Four matching pin/cap interference pairs are deliberately measured/exempted; **moving interfaces are never exempted**. Link-length equations, positive wall/axial gaps and near-straight tip segment verified. Not a friction/contact dynamics or strength simulation.
- Browser: real file-picker PNG/JPEG + ASCII/binary STL, actual downloaded STL parsed independently and fingerprint-matched to current preview and saved design. Pixel content, threshold, relief depth, crop, import size, rotation, height and placement visibly/measurably affect exports compared with built-in output.
- Recoverable rejection: truncated, open, nonmanifold, excessive bytes/triangles/pixels/dimensions, unsupported concave models, fake images, empty silhouette, missing/invalid transforms, safe-zone violations and unconfirmed STL millimeters. Invalid or pending edits block export.
- Three presets, bounded variations, silhouettes, text, searchable icon, hole-containing SVG, engraving/background inversion, drag/drop, up-axis source conversion, replace/remove/reset, undo/redo, named design persistence, portable image/STL JSON round trips, latest-result guards, light/dark persistence, keyboard focus and collapsible sections.
- Real complete ZIP (12 STLs + assembly notes), per-part select and direct buttons. Automated repeated downloads are spaced by 300 ms to avoid Chromium's rapid automatic-download throttle; no export implementation was weakened.
- Actual motion-angle control changes assembled pose; exploded pose and base transparency change the rendered view. Preview-only pose/colour controls do not change printable exports.
- Phone file imports/downloads at 390 px, 320 px overflow/reachable export checks, CDP touch orbit and pinch zoom. Screenshots manually inspected for desktop left-control/right-viewer and phone preview-first stacking.
- Worker-load failure blocks export and reload recovers; malformed JSON blocks export and reset recovers.
- Production bundle test: generated WASM worker, local PNG sample and actual manifold export, no runtime errors/failed requests.
- Root gallery: every inline script compiled with `new Function`, one new `stl` entry, newest first, **143 earlier entries preserved**, STL Generators first; browser rendering and search passed.
- Root predeploy copied **144 apps**, 0 failures / 0 skipped. Verified all gallery folders and identical root index in `deploy/`.

## Limits, not tested claims

No physical printing, cap-retention force, friction, strength, fatigue or durability testing. Friction caps require printer/material calibration and are not positive latches. Near-straight trace is approximate. Unsupported STL geometry is rejected, not repaired. Heightfields are sampled relief with backing, not 3D photo reconstruction. Preview colours are not carried by STL.

Raw results: geometry-validation.json, browser-validation.json, feature-validation.json, resilience-validation.json, motion-validation.json, production-validation.json, gallery-validation.json; publication checks are recorded separately when available.
