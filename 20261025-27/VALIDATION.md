# Threefold Seat — validation

## Computational checks

- `npm test`: **132 parameter cases and 35 imported-output cases passed**. Defaults, all presets, 128 field-bound combinations with alternate silhouettes, representative min/max imports, threshold/grayscale/engraved outputs and both ASCII/binary STL fixtures.
- Final exported binary STL checked independently for byte length, finite vertices, nondegenerate triangles, unit stored normals agreeing with winding, welded edge incidence exactly two and opposite directions (1e-5 mm quantization), positive volume per connected component, genus zero, expected millimeter bounds and print-bed Z=0. Each part and the float32-separated combined plate checked.
- Full hand-guided cycle sampled at 121 positions with actual Manifold solid intersections. No overlap. Analytical sphere/V-face tangency, groove face coverage, minimum floor, plate/rim clearance, separated print layout and imported geometry isolation checked. Actual faceted feet tested at contact height and 0.08 mm farther down: nominal seat has no overlap, further descent intersects the groove faces. Parts are deliberately lift-removable, not captive.
- The first browser/Node regeneration comparison exposed triangulation differences in a sphere Boolean seam. Replaced that input with an explicitly constructed, quantized, closed hemisphere mesh and quantized foot center coordinates. Rebuilt and reran the suite; exact byte fingerprints now agree between browser downloads and Node regeneration from saved JSON. No stale-output workaround was used.

## Actual production-browser checks

Playwright Chromium served the production `dist/` at the actual `/daily-app2/20261025-27/` prefix; worker and WASM loaded locally.

- Actual file-picker imports and downloaded STL bytes: PNG, JPEG, ASCII STL, binary STL. Changed pixels, threshold, relief depth, crop, image scale, STL footprint/height/rotation/XY placement all change geometry. Remove/reset restores the initial byte signature. Every downloaded output regenerated from its portable JSON and passed independent mesh and mechanism checks.
- Per-part STL buttons, combined print plate and ZIP entries validated as closed printable geometry. Preview/export fingerprint and displayed millimeter dimensions match downloaded bytes.
- Empty white image, truncated/open/nonmanifold/concave STL, excessive file bytes, excessive image pixels/triangles/dimensions, fake image data, invalid settings/empty transforms and safe-zone violations produce recoverable errors with exports disabled.
- All presets, bounded variations, palm shapes, actual text/icon/SVG raised and engraved geometry. Final-solid probes verify the SVG ring hole stays unraised/unengraved. Preview swatches change appearance but not STL bytes.
- Undo/redo; named design persists through reload; portable image and STL JSON round trips; up-axis transformation; drag/drop; all view modes; light/dark persistence; collapsible sections; keyboard focus; latest-worker-result and invalid-state gating.
- Worker-script load failure blocks export; reload recovers. Malformed JSON blocks export; reset recovers.
- Desktop left controls/right viewer and phone preview-first layout inspected. 390 px and 320 px widths have no horizontal overflow and reachable exports. Real CDP touch orbit and two-finger pinch change canvas images. Real phone PNG/STL uploads and downloads pass.
- No browser runtime errors and no off-origin requests during app tests.
- Gallery inline scripts compile with `new Function`; exactly one new STL entry; all **154** existing entries preserved in order. Browser displays **155** entries, search works, STL Generators appears first and new destination is correct.

Reports: `geometry-validation.json`, `browser-validation.json`, `feature-validation.json`, `resilience-validation.json`, `hole-validation.json`, `gallery-validation.json`. Screenshots include desktop, phone, dark theme and every view.

## Not performed

No physical print, seating feel, friction, contact-force, wear, repeatability or fatigue test. Support-free orientation is geometric guidance, not a claim of a tested physical specimen. The model is not captive and must not be marketed as precision-tested or safe for children.
