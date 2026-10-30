# Verification — Ridge & Rasp

## Completed computational and browser checks

- Fresh public-reference download, SHA-256, binary STL parse, dimensions/components and actual mesh sections; source1.6mm sheet and4.5×1.700012mm sockets map to tested parameters. Source mesh not bundled.
- `npm run predeploy`: production bundle with local worker/WASM/fonts.
- `npm test`: **36 built-in +8 image/STL cases**; each card and each of four clean parts independently checked for binary STL length, finite vertices/unit normals, nondegenerate faces,1e-5mm welded two-face incidence/opposite winding, positive volume per component and declared millimeter dimensions.
- `node import-extremes.mjs`: **99 additional image/STL preset/extreme cases**, same mesh/assembly validation; exact measured source-fit dimensions reproduced.
- Each assembly validation:25 hand-held stroke poses,150 pairwise intersection checks, simultaneous top-down panel insertion into both feet,2 socket gauges and2 shoulder stops, actual ridge crest/valley probes.16 nondamaging snips release exactly4parts+carrier. Packed pieces disjoint;40 sampled bed-support column checks. Preview has explicit.5mm non-contact gap, not motion/force simulation.
- `node browser-test.cjs`: actual production picker PNG/JPEG/ASCII/binary STL inputs; downloaded STL parsed, signatures differ from default and change with threshold/depth/pixels/scale/crop/rotation/placement. Preview/download/portable-JSON regeneration match. Truncated/open/nonmanifold/concave/excessive/empty files, bad dimensions and transforms disable export recoverably; remove/reset exact. Actual individual-part downloads parsed.320/390px phone no overflow, exports reachable; real touch orbit/pinch and mobile image/STL uploads/downloads passed. No app runtime errors or external requests.
- `node studio-test.cjs`: all presets/shapes/text/icons/SVG, ZIP unzipped and each actual STL parsed, undo/redo, local named design reload, portable image/STL JSON, missing payload blocked, views/ghost/fit, saved dark theme/focus/collapsible controls,374px desktop left rail,320px preview-first phone, worker abort/reload recovery.
- `node axis-test.cjs`: Y/negative-Z synthetic browser imports reorient to the same expected engraved STL; axis changes explicitly detach source.
- `node hole-check.mjs`: real Boolean probe confirms white interior hole remains unengraved while dark ring removes panel material.
- `node stale-test.cjs`: rapid edits produce exact newest result; invalid edit cannot export last-good; reset exact. Mixed extreme ridge/foot model checked at73 stroke positions.
- `node gallery-validate.cjs`: every inline gallery script compiled;297 entries including296 previous unchanged; new entry exactly once, newest first, STL category first.

Machine-readable reports and screenshots accompany reproducible scripts. Browser tests use actual production bundle under the configured base path, not only Vite development mode. Combined-site validation is recorded in gallery/deployment reports during publication.

## Not performed

No physical print, printer/material fit calibration, contact/force simulation, musical tuning, acoustic output, tooth wear, thin-panel bending strength, adhesive strength or durability tests. Adhesive is required at both fixed joints; striker is intentionally loose. Source reference has mesh defects and is only a measured geometry reference, not repaired or re-exported. Computational tests cannot establish physical performance.
