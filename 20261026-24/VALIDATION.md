# Knee Cadence verification

Passed against the production build at its real base path and again via the root combined deploy folder.

- 20 built-in/preset/extreme parameter cases; 35 imported-output cases, including minimum and maximum geometry. Every part and float32 separated plate passed independent STL length, finite coordinates, nondegenerate triangle, normal/winding, edge incidence (1e-5 mm welding), per-component positive volume, component count and millimeter bounds checks.
- 64 independent mechanism extreme combinations × 73 full-revolution samples; no unintended intersection. Deliberate cap interference confined to its own pin, printer-dependent. Closure margins, bore walls, isolation, cap roof, separated plate, reverse-order cap and link withdrawal passed. See dense-motion-validation.json.
- Production browser file-picker PNG/JPEG and ASCII/binary STL imports changed actual downloaded geometry. Pixel content, threshold, relief, crop, scale, height, rotation and placement survive export. Export hashes match preview and Node regeneration from actual portable JSON.
- Invalid/truncated/open/nonmanifold/concave/excessive sources, empty silhouettes, bad dimensions and transforms block every export; remove/replace/reset recover. Worker abort blocks export, reload recovers, delayed old imports cannot overwrite newer selections.
- All three presets, bounded variations, three palm shapes, text, six searchable icons, SVG ring, raised/engraved hole probes, source orientation, undo/redo, portable image/STL JSON, named designs across reload and missing-payload reattachment feedback passed.
- All thirteen individual buttons and real ZIP contents parsed. A 220 ms delay between automated individual clicks avoids Chromium automatic-download rate throttling; ZIP is the intended bulk export.
- Desktop left rail/right viewer, all view modes, persisted dark theme, colour-only preview changes, collapsible sections, visible keyboard focus, reduced motion, 320/390 px preview-first touch layout, orbit/pinch, phone imports and downloads passed. Zero document horizontal overflow, runtime errors or remote app requests.
- Positive/zero cap fit is visibly identified as calibration output that cannot be assumed to retain the linkage.
- Gallery: all 179 previous entries preserved exactly; new STL entry occurs once, newest first; inline scripts compile; runtime search/category rendering passed. Root stage contains all 180 declared apps, zero failures/skips.

## Not physically tested

No physical prints, retention-force measurements, wear, fatigue, strength or durability tests. Running and friction fits require calibration on the user's printer. This is ideal rigid-link computational validation, not a guarantee of a working physical fit, walker performance or universal support-free printing. Tall posts require care; assemble/disassemble in the documented order.

## Reports

geometry-validation.json, dense-motion-validation.json, browser-validation.json, root-browser-validation.json, feature-validation.json, additional-validation.json, resilience-validation.json, hole-validation.json, stale-import-validation.json, cap-calibration-validation.json, gallery-validation.json, gallery-browser-validation.json and root-stage-validation.json; reproducible scripts and screenshots are included.
