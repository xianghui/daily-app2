# Validation — Roll & Reveal

Performed against the production Vite base path before publication. No physical print, winding experiment or adhesive-strength test was performed.

- Reference mesh freshly downloaded, SHA-256 recorded and 30,616 triangles parsed; measured sheet/socket sections retained. Local candidate meshes inspected/rejected for sheet-kit use. No raw reference mesh redistributed.
- 34 built-in configurations + 8 import-derived configurations: every card and all seven clean-part STLs checked for exact float32 length, finite/nondegenerate faces, outward normals, 1e-5 mm welded two-face opposite-winding edges, positive volume per component, expected dimensions and bed alignment.
- Full-turn spindle/keeper and part-pair intersections, four source-fit socket gauges, shoulder seats, axial insertion and positive head/keeper stops; analytic polygon-inscribed bore radius clears shaft corners for every angle. Adhesive is explicitly required for actual keeper retention.
- 28 safe runner cuts release seven functional pieces and carrier without damaging parts. Card bounds, separate print layout, 64 support-column sections and maximum allowed paper-roll envelopes checked.
- Six imported image/ASCII/binary extrema pass the full mesh/assembly checks. Independent solid probes preserve bright holes inside engraved art.
- Browser imports use actual file pickers and download real STL bytes; PNG/JPEG, ASCII/binary STL, threshold/depth/crop/scale/rotation/placement affect geometry. Download, current preview signature and Node rebuild from saved JSON match exactly. All parts and ZIP-contained STLs parsed separately.
- Recoverable invalid-file/geometry/transform/empty-image rejection, stale export gates, worker abort/recovery, explicit units, Y/−Z axis transforms, replace/remove/reset, presets/shapes, text/icons/SVG, JSON and named local asset roundtrips, undo/redo and missing-payload errors passed.
- Desktop left 374 px rail / right preview, saved light/dark theme, visible keyboard focus, reduced motion, collapsible sections, 320/390 px preview-first phones without overflow, real touch orbit/pinch, phone image/STL imports and downloads passed.
- Rotating assembled preview visibly changes spindle/keeper poses without altering printable export bytes. Assembled/card/exploded and phone screenshots are in evidence/.
- Individual app `npm run predeploy` passed. Root combined validation/publication reports record gallery script compilation, all prior entries preserved, root deploy completeness and live site verification separately.

## Reproducible evidence

`validation-report.json`, `import-extremes-validation.json`, `hole-validation.json`, `browser-validation.json`, `studio-validation.json`, `axis-validation.json`, `preview-validation.json`, `combined-browser-validation.json`, `gallery-validation.json`, `gallery-browser-validation.json`, `combined-validation.json`, `publication-validation.json`.

The computational checks establish the documented geometry and supported assembly path, not universal printer tolerance, force/strength, reliable paper winding or physical safety certification. Paper/tape and six cured adhesive bonds are required. Calibrate with your printer/materials and operate gently.
