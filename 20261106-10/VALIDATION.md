# Executed validation — 2026-11-06

## Reference

Independently parsed actual STL bytes for two local candidates and selected public CC BY 4.0 White Cat kit card; hash/dimensions/components in reference-analysis JSON. Public download returned HTTP403; accessible cached identical bytes were measured, not an old app description. Upstream README/frame source inspected. Three measured cross-sections rendered and visually inspected. No raw reference redistributed.

## Geometry: PASS

`npm test`: **71** independent cases. Defaults, three presets, all shapes, each parameter minimum/maximum, combined extremes, all eight ring/pinion count pairs at both module and clearance extrema, plus image and STL-derived defaults/min/max.

For card, both clean parts and translated loose plate: actual float32 STL length, finite coordinates, nonzero triangle area, normalized normals matching winding, every welded (1e-5 mm) edge exactly two opposite incident faces, positive volume per connected component and expected millimeter bounds. One connected card; exactly two independent clean solids; bed Z=0 and declared sheet height.

Six simulated runner snips release exactly carrier + undamaged ring + undamaged pinion. Upper sections contained in bed footprint; card pencil holes unblocked. Four ring runners remain outside working teeth; two pinion root runners do not cross tooth flanks. Full **121-position** rolling sweep includes **.1 mm residual root pads**, no unintended ring/pinion intersections. Outward overdrive DOES collide, verifying real engagement rather than unrelated overlapping circles. Eleven vertical drop/release positions checked. Actual print origins and native pinion rotation map into assembly. Pencil web >=1.6 mm; apron backing >=1.2 mm. Geometry invalidation blocks export.

## Browser: PASS

Chrome / Playwright development AND actual built production base-path suites:

- Real file-picker PNG/JPEG/ASCII/binary STL imports; actual downloaded STL parsed and geometry changed versus built-in output.
- Threshold, grayscale, depth, crop, pixels, XY footprint, rotation, placement and engraving depth alter actual exported geometry. Remove/reset restores exact baseline signature.
- UI fingerprint equals downloaded bytes; saved same-state JSON regenerates exactly the same binary in Node. Each image/STL-derived model reruns all part mesh / carrier / gear checks.
- Explicit STL millimeter confirmation, up-axis transform; source dimensions/scale shown. Reject malformed/truncated, nonmanifold/open/concave, huge images, oversized files, excessive triangles, empty art and unsafe transforms; recover through replace/remove/reset. No silent repair/hull replacement.
- All presets, outer silhouettes, text, all six distinct searchable SVG icons, ring SVG hole; probe confirms white ring center keeps backing while dark band removes real material.
- Portable JSON PNG/JPEG/ASCII/binary round trips; local named save survives reload; undo/redo; missing asset, wrong app, unsafe transform and invalid JSON dimensions blocked.
- Every view/isolated part, real per-part STLs and Everything ZIP (all embedded STLs independently validated). Preview colours/position never alter printable geometry. Saved light/dark mode, keyboard focus and collapsing sections.
- Touch orbit and pinch proved by different canvas screenshots. Real phone image/STL downloads. **320/390 px**, all editor tabs and long instructions: no horizontal overflow, preview before controls, exports and JSON reachable. Desktop left panel **374 px**, large right viewer. Reduced-motion rules verified.
- Production worker-script abort blocks export; reload restores it. Eight repeated STL-to-image replacements with forced late ResizeObserver callbacks produce no runtime errors. Delayed image normalization cannot overwrite newer file selection. Bounded debounce and current-state gates reject stale export.
- Runtime errors **0**, remote API/file-upload requests **0** in import/export suite. All processing remains local.

See geometry-validation.json, browser-validation.json, production-browser-validation.json, feature-validation.json, mobile-layout-validation.json, hole-validation.json, portable-errors-validation.json, resilience-validation.json, resize-cleanup-validation.json and stale-import-validation.json; reproducible scripts and screenshots alongside.

## Build / gallery

Individual `npm run predeploy`: PASS. Root `npm run predeploy`: **481 built/copied, 0 failed, 0 skipped**. Root inline script compiled with new Function; new entry exactly once, STL first; **480** prior entries byte-equivalent as parsed objects. Combined deploy/index matches root and every app folder exists. Actual production combined-gallery browser check retained all entries and loaded current geometry through the new link.

## Limits, not performed

**No physical print, friction, wear, drawing accuracy, pencil-fit, force or user assembly test.** Computational collision/mesh checks do not prove these. Pinion is loose and hand-guided, not captive. Fine pencil, paper, tape and flush cutters required. Root runner scars must be flush-trimmed to <=.1 mm; clean parts make the calibration sample. Clearances are proposed FDM starting settings, not universal tolerances. Source itself has edge anomalies and was not repaired or asserted printable.

Root `npm run deploy`: **Published** using `gh-pages -d deploy` after its root predeploy rebuilt/copied all 481 folders. Publication uses the combined root flow, not individual app deployment. Existing unrelated untracked `20261105-7/` was not modified or included in this commit.
