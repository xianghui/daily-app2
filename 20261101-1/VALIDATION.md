# Verification — 2026-11-01

Computational checks only; **no physical print, assembly or optical test**.

- Actual reference downloaded and parsed; hash, units, dimensions, components, measured socket loops and cross-sections recorded. License retrieved. Source defects disclosed, no source asset redistributed.
- `npm test`: 42 full generated cases (presets, profiles, field extrema and image/STL variants), 40 invalid parameter cases rejected. Every card and clean part independently parsed from actual binary float32 STL: closed-manifold opposite-directed edge incidence, finite coordinates, normals, positive component volumes, nondegenerate faces and expected mm bounds.
- `node import-extremes.mjs`: 8 additional image/STL min/max parameter combinations passed full part/card mesh and assembly checks.
- Independent solid checks: no assembled/plate pair intersections, wall insertion and roof insertion, unobstructed optical corridor and external film placement, source-derived tongue/slot probes, upper-slice support, card envelope, one connected card and simulated16runner cuts releasing exactly4parts+carrier.
- `node hole-check.mjs`: white image hole remains unengraved, dark ring removed by actual Boolean cutter, continuous backing retained.
- `node browser-test.cjs`: real PNG/JPEG/ASCII/binary file uploads, actual STL downloads, content/threshold/depth/crop/image-scale/STL-scale/rotation/placement changes survive exports, remove/reset, default/min/max geometry, invalid/truncated/empty/oversized/bad-dimension/open/concave inputs, disabled invalid export, per-part downloads. Every successful downloaded model gets mesh and assembly checks and preview signature comparison; portable JSON regenerated with same exact fingerprint. 320/390px mobile, touch orbit/pinch, phone image+mesh uploads/downloads. No runtime errors or remote requests.
- `node studio-test.cjs`: all presets/profiles, text, icons/SVG, portable image/STL JSON, local named save/reload, missing-payload error, undo/redo, actual ZIP decompression/all STLs checked, all views, saved dark theme, keyboard focus, collapsible sections, reduced motion, desktop374pxrail/right preview, phone preview-first, aborted worker blocks exports then reload recovers.
- Background inversion, Y/−Z orientations and explicit source reattachment, rapid edits/stale-result guard, all6icons/text/SVG each passed dedicated tests. Reports and screenshots saved alongside reproducible scripts.
- `npm run predeploy` passed; production-path tests use local bundled worker/WASM/fonts and actual built files. Gallery inline script compilation, exactly1newstlentry/newestfirst, 331priorentries exactly preserved and runtime gallery/search checks passed.

External film, foil, wrap, tape and adhesive required. Printed slit is a foil backing, not a precision aperture; no resolution or light-tightness claim. Material/printer calibration remains necessary.

Root `npm run predeploy`: 332 built, 0failed, 0skipped. Combined deploy root index and all43appfiles match source dist bytes. Root `npm run deploy`: Published. See public verification JSON for post-publication checks.
