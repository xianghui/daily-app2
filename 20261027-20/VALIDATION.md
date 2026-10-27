# Validation — Warp & Weft, 2026-10-27

Computational checks only. No physical print, fit, yarn friction, strength or stability test.

## Passed before publication

- Independent reference STL analysis: 30,616 binary triangles, recorded SHA-256, dimensions/components, measured sheets/frame/bridges and actual cross-sections. Source artifacts disclosed; no raw reference mesh redistributed.
- `npm run predeploy`: production Vite build successful (bundle-size and Manifold Node compatibility notices are nonfatal; production WASM/worker are browser-tested).
- `npm test`: **20** default/preset/parameter-corner cases and **30** imported-output cases. Each checks connected card plus four individual parts: binary size/normals/finite coordinates/nondegenerate triangles, welded two-opposite-face edges, positive volume per component, bed Z and millimeter dimensions.
- CSG assembly checks for all cases: sampled straight frame insertion/lift, zero rigid-part intersection, fitting/oversize slot gauges, exact card/part identities, open yarn notches and weaving window, shuttle passage. Sixteen actual tab cuts yield **five components**: four parts plus connected frame.
- An individually in-range but too-small-card combination is rejected, not silently overlapped (`envelope-validation.json`).
- `browser-test.cjs`: actual PNG/JPEG/ASCII STL/binary STL file selection and binary downloads; source/pixel/threshold/depth/crop/scale/placement differences; reset restores bytes. Browser-export signature equals preview and independently regenerated portable JSON. Every downloaded personalized card passes mesh + assembly checks. Unsupported concave/open/nonmanifold/truncated/excessive meshes/images and invalid/empty transforms/silhouettes block export and recover.
- Real individual-part STL downloads and Everything ZIP (connected card + four parts + guide), all parsed independently.
- `feature-test.cjs`: all three presets, three silhouettes, three bounded variations; text, icon, safe SVG, engraving/background inversion; portable PNG/JPEG/ASCII/binary source round trips, named saves across reload, undo/redo, all views, theme persistence, preview-colour neutrality, drag/drop, Y-up STL, collapsible controls/focus and latest-worker gating.
- `resilience-test.cjs`: deliberately aborted production worker disables export; reload recovers. Six bundled marks yield distinct real geometry. Assembled/ghost screenshots.
- `hole-test.cjs`: CSG probes verify raised and engraved SVG ring retains its internal unraised/unengraved area (not a through hole).
- `portable-errors-test.cjs`: missing image, invalid transform/app/dimensions block export; reset recovers.
- `stale-import-test.cjs`: delayed first image normalization cannot overwrite newer selected image.
- Touch-enabled **390/320 px** phone checks: preview first, no overflow, reachable actual PNG/STL imports/downloads, screenshot-proven touch orbit and pinch zoom. Desktop left rail/right viewer inspected. Saved dark theme, focus and sections checked. Zero app runtime errors or external resource requests.

Reports: `geometry-validation.json`, `browser-validation.json`, `feature-validation.json`, `hole-validation.json`, `resilience-validation.json`, `portable-errors-validation.json`, `stale-import-validation.json`, `envelope-validation.json`; tested desktop/mobile/view screenshots.

## Deployment verification

Gallery script compilation and previous-entry comparison, root staging/file identity, staged production browser and public-site smoke results are stored in their matching JSON reports. Root monorepo predeploy/deploy is used for public publication.

## Recovery notes

Latest create-vite 9.3.2 lacked its React template, including fresh-cache retry; pinned create-vite 8.2.0 scaffolded successfully. No geometry or browser test failures needed a weakened validation contract. An unrelated pre-existing untracked `20261027-17/` directory is intentionally left outside this run's commit.

Root predeploy: 204 built, 0 failed, 0 skipped. Root gh-pages deploy returned Published. Staged browser import/export suite passed again with zero runtime errors.

Pages workflow completed successfully. Live app/gallery verified with real PNG/JPEG/ASCII/binary imports and downloaded manifold outputs (`live-validation.json`, `public-import-validation.json`). Initial public probe preceded Pages readiness; propagation-aware retry passed. Additional staged checks verify 374 px desktop rail, right viewer, both remaining isolated views, assembly lift preview, reduced-motion CSS and 320 px preview-first layout (`studio-layout-validation.json`).
