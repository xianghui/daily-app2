# Validation — Quarterturn Passage

- Individual predeploy: PASS.
- Geometry: 260 default/preset/min-max cases plus 35 imported-output cases passed independent binary STL checks (finite vertices, face area, normals/winding, positive per-component volumes, 1e-5 mm welded edge incidence, separate solids and mm bounds).
- Mechanism: residual twisted-bore clearance, stroke, radial stop overlap, intentional socket interference, top release and isolated imports checked. Actual boolean collision checks at 17 travel positions for representative and import cases. Print layouts do not intersect.
- Browser: PNG/JPEG and ASCII/binary STL file uploads, image content/threshold/depth, STL scale/rotation/placement and actual downloads compared against default and exact preview/saved-state geometry. Invalid, truncated, open, nonmanifold, concave, oversized, bad-dimension and empty inputs recoverably block export.
- Features: presets, shapes, random variation, text, icons, SVG raised/engraved hole probes, named saves, portable asset JSON, undo/redo, per-part and ZIP exports, saved themes, latest worker result and worker-load errors.
- Studio: 374 px left rail/right preview; phone preview-first at 320/390 px, no overflow, reachable export and actual phone image/STL downloads; touch orbit/pinch. Stroke moves actual assembly ring without changing printable export. Isolated stop and ghost views verified. Reduced motion and keyboard focus checked.
- Gallery: all inline scripts compile; exactly one correct new STL entry; all 148 older entries preserved; browser renders 149 cards, STL category first, search works, no runtime errors.

Machine-readable reports and actual screenshots are stored beside this document. See README for reproducible scripts and limits.

**Not physically printed.** No measured fit/retention force, fatigue, tactile-feel or nonlinear FEA claims. Friction stop is removable, not positively locked; tolerances require printer/material calibration.

- Production: full file-picker/import/export browser suite repeated against root deploy output: PASS.
- Root predeploy: 149 built, zero failures/skips; gallery plus every app exists in deploy.
- Root `npm run deploy`: Published successfully.
