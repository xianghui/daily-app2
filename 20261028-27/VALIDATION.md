# Validation — Lace & Loop / 20261028-27

## Completed automated checks

- Fresh downloaded reference STL parsed and hashed before final construction; actual mesh sections viewed. Provenance, source defects and measured-vs-new decisions recorded in reference-analysis.json. Source raw STL not bundled.
- `npm run predeploy`: passed production Vite build with local worker/WASM/fonts.
- `npm test`: **30 built-in + 35 imported-output cases passed**. Includes presets, independent parameter extrema, mixed extrema, image threshold/grayscale/engraving and ASCII/binary STL integration.
- Every card and part: finite nondegenerate triangles, exact binary-STL bytes, unit normals matching winding, positive volume, mm bounds, two opposite incident faces per edge after 0.00001 mm welding. Each expected solid is one closed connected component.
- Real connected card envelope: default **180 × 185 × 3.05 mm**, 2,732 triangles, one component, approximately 14,795.68 mm³. Default assembled maximum pairwise intersection **1.09e-7 mm³**, below numerical coplanar-contact tolerance 0.0001 mm³.
- Independent intersection checks cover all assembled solids, post insertion from above and riser insertion from below, separate layout parts, and **24 snips → nine parts + carrier**. Default further checked at 25 insertion positions per part. Checks do not establish glue strength.
- Browser production checks: **32 actual STL downloads**; fingerprint equals exact current preview geometry and Node regeneration of exported JSON. PNG, JPEG, ASCII and binary STL selected through real file inputs. Pixel content/threshold/depth/crop/scale/rotation/placement measurably change exported geometry versus no import.
- **10 malformed/unsupported fixture rejections** plus empty silhouettes, invalid dimensions/transforms and medallion overflow: errors recover, exports blocked, replace/remove/reset usable.
- Feature suite: **20 further browser-derived models** checked; presets/variations/silhouettes, text, SVG, engraved/inverted image, orientation, rapid edits, undo/redo, named saves and image/STL JSON round trips. Ten actual ZIP STLs individually parsed, numbered assembly note included. All part download buttons exercised.
- SVG ring holes probed in final raised/engraved solids, all six bundled icons produce distinct geometry. Colour changes preview only. Named image/STL payloads survive reload; missing/corrupt JSON assets and unsupported settings block exports.
- Worker-script abort disables exports; reload recovers. Delayed first image cannot overwrite newer selection. Exact state/request ID gates block stale geometry downloads.
- Desktop 374 px LEFT panel / RIGHT viewer, all isolated/assembled/exploded/card/de-tabbed views, saved dark theme, keyboard focus, collapsible sections and reduced motion tested. Screenshots inspected.
- Touch-enabled **390 and 320 px**: preview-first stacked layout, no horizontal overflow, reachable exports, real image/STL file-picker imports/downloads. CDP orbit and pinch visibly alter canvas.
- Root gallery scripts compile via `new Function`; new entry exactly once, `area:"stl"`, correct folder/newest-first; **237 previous entries preserved**. Browser renders all **238** cards, STL Generators first, search/reset works, no runtime errors.
- ROOT `npm run predeploy`: **238 staged, 0 failed, 0 skipped**; root index byte-identical, all app folders present. Full production-browser import/download suite rerun under ROOT staging base, **32 downloads passed**, no runtime errors or remote requests.

## Evidence and reproducibility

Scripts and machine-readable *-validation.json reports are included. Run commands in README. Browser tests use production prefix `/daily-app2/20261028-27/`; `serve-production.cjs` port 5487, `serve-root.cjs` port 5489. Inspection screenshots include desktop/mobile, assembled, exploded, individual parts and dark theme.

## Not performed / limitations

No physical print, pull-out, force, fatigue, adhesive-strength, cord-friction, tensile or child-safety testing. Cord is user supplied, not simulated. Posts and risers require adhesive and printer/material calibration; use loose decorative lacing only. Unsupported concave/open/nonmanifold STL is explicitly rejected, never hull-substituted or falsely repaired. The source reference itself has mesh defects and is inspection-only. Image conversion is bounded 20 × 20 sampled 2D relief, not full 3D reconstruction.
