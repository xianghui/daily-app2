# Validation — 2026-11-02

## Reference

Public STL downloaded afresh, SHA-256 verified, actual triangles parsed in Trimesh. Cross-sections Z=.10, .50, 1.59 mm inspected. Source and local-candidate dimensions/components recorded in `reference-measurements.json`; measured-versus-proposed decisions in `reference-analysis.json`. Source mesh defects disclosed. Raw reference not redistributed. A missing Python dependency was resolved using an isolated temporary venv; measurement then passed.

## Computational geometry

`npm test`: **35 variants passed**, covering three presets; rounded/square/chamfered silhouettes at simultaneous parameter extrema; each field independently low/high; sampled image relief, threshold artwork, maximum depth, a bright hole; ASCII/binary STL tools with default/transformed placements. Every generated card and every clean part plus three-component de-tabbed plate independently parsed from serialized binary STL.

Checks: complete byte lengths, finite vertices, nonzero-area faces, normalized stored normals matching winding, welded 1e-5 mm edge incidence exactly two opposite-oriented faces, positive volume per connected component, expected component counts and millimeter bounds. CSG checks at **361 rotation positions per variant**: equal-width faceting error <=.02 mm, no tray/rotor or rotor/rotor intersection, vertical insertion/removal at representative angles, support-free sampled cross-sections. Twelve snip cuts produce exactly four components (carrier plus three parts), preserving clean part volumes. Card envelope and Z=2×sheet checked.

## Real production-browser checks

`browser-test.cjs`: actual file picker PNG/JPEG/ASCII/binary STL, actual STL downloads, per-part STL downloads and regenerated JSON exact-byte signatures. Changes in pixels, threshold/depth, crop, grayscale, source footprint, STL rotation/scale/placement all affect exports. Imported variants receive the same full rotation, insertion, tab-release and independent mesh checks as defaults. Source and final previews verified. Remove/reset reproduces original geometry. Tests also cover defaults and numeric extrema.

Malformed/truncated/open/nonmanifold/concave STL, excessive byte/triangle/pixel counts, bad dimensions, fake image content, empty silhouette, invalid transforms and out-of-zone artwork blocked, exports disabled, reset/replace recoverable. No automatic mesh-repair or convex-hull substitution.

Phone contexts 320/390 px: preview first, no overflow, usable export, real uploads and downloads, CDP touch orbit and pinch changed canvas screenshots. Desktop measured 374 px left control panel/right viewer. All editor tabs and responsive views checked.

`studio-test.cjs`: all three presets; shape controls; text/searchable icons/SVG engraving; portable image and exact-mesh JSON round trips; named-design persistence across reload; missing-payload rejection; undo/redo; actual ZIP unpacked and every contained STL parsed; all views; saved dark theme; visible keyboard focus; collapsible sections; reduced motion; worker-script abort, disabled export and reload recovery.

`presentation-test.cjs`: card/assembled/exploded/loose/tray and each isolated-part view; rotation and ghost alter visible preview but not printable signature; every editor tab no horizontal overflow at 320/390 px; reachable exports. Screenshots retained under `evidence/`.

`icons-drop-test.cjs`: all six vector marks alter real geometry, receive independent STL/full assembly checks, and single-file drag/drop works. `orientation-test.cjs`: Z/Y/−Z source up-axis dimensions verified after real file attachment, mm confirmation and solid reconstruction. `stale-test.cjs`: rapid parameter/image edits gate export immediately; only newest exact state is exportable; invalid transform recovery.

No runtime exceptions or remote file-processing requests observed. All assets served from production `dist` under actual base path. Test reports are in corresponding `*-validation.json` files.

## Gallery / combined site

Every root inline script compiled with `new Function`; missing scripts fail. New entry exactly once, STL category first, newest first. **386 prior entries unchanged**, 387 total. Root `npm run predeploy` assembled **387 apps, zero failures, zero skips**. Combined staging gallery renders all 387 entries without runtime errors; the complete browser import/download suite passed again from the root deploy directory. Actual SVG ring probes confirm uncut centre backing with engraved surrounding ring. Root deploy published successfully. Initial public checks saw the previous cached release; waited for Pages run 41426538914 to complete successfully before retrying. Public page subsequently passed: actual built-in, PNG-derived and STL-derived downloads matched current geometry signatures and independent mesh checks; public gallery rendered all 387 entries without errors. See public-validation.json and public-gallery-validation.json.

## Limits

**No physical print, fit, friction, strength or rolling test was performed.** Computational geometry does not establish manufacturing accuracy. Rotors are intentionally loose/open-top; no captive retention or force-fit claim. Filing card runners can spoil the functional arc; clean individual STLs are recommended for accurate comparison. Preview is support-centred fitting poses, not no-slip rolling dynamics. STL imports deliberately support only documented convex broad flat-bottom meshes; sampled image conversion is 2D relief, not photo-to-object reconstruction. Real printer calibration required.
