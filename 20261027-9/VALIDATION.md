# Dwell & Drive validation

No physical print has been made. Force, tooth re-entry, friction, wear and life remain untested.

- `geometry-validation.json`: 68 parameter cases (default, all three presets, 64 extrema) and 35 image/STL-derived cases. Every part and separated float32 STL plate checks finite coordinates, exact binary length, normalized winding-consistent normals, nondegenerate triangles, welded 1e-5 mm edge incidence, positive component volume and bounds. Minimum supported tooth tip measured at least 0.857 mm.
- Mechanism checks: each case samples a full driver revolution with ideal aligned, hand-guided output positioning; no unwanted solid overlap. Thirty-two independent output positions with the driver toothless side facing it verify the free interval. Vertical lift-off is collision-checked. Parts deliberately are not captive. No locked dwell or contact dynamics is claimed.
- `browser-validation.json`: actual production file pickers for PNG/JPEG, ASCII/binary STL, downloaded STLs compared with exact current preview fingerprints and portable JSON regeneration. Pixels, threshold/depth, scale/rotation/placement affect final geometry. Invalid/truncated, excessive, nonmanifold/concave and empty files block export. Phone downloads, touch orbit/pinch and no remote generation requests checked.
- `feature-validation.json`: all presets and shapes, bounded variations, text, icon, SVG relief and engraving, background inversion, undo/redo, named-design persistence, bounded image/STL JSON round trips, up axis, per-part and unzipped ZIP STL checks, view modes, color-only preview, saved theme, keyboard focus, collapsible sections, stale edit blocking.
- `hole-validation.json`: solid probes verify the ring sample's central hole remains unraised/unengraved in both styles.
- `resilience-validation.json`: intentionally aborted production worker disables export, reload recovers, six bundled icons produce distinct geometry.
- `stale-import-validation.json`: delayed old image normalization cannot overwrite a newer import.
- `motion-validation.json`: visible assembled motion, stable print fingerprint, 374 px left desktop rail, 320 px phone preview-first order and no overflow, reduced motion.
- Gallery validation checks compile every inline script, preserve all 193 prior entries unchanged, add this app once as STL, and render/search without runtime errors.
- Root staging verifies all 194 gallery apps are present and new app production files are byte-identical to the individual build. Root browser tests repeat actual imports/downloads against the combined deployment directory.

Reports and screenshots are synthetic test outputs only. See README for printable orientations, unit assumptions, explicit supported-input restrictions, assembly, calibration and material guidance.
