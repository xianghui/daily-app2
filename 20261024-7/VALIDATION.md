# Afterglide validation — 2026-10-24

- `npm run predeploy`: passed; React/Vite production app with locally bundled Manifold WASM, Three.js and ZIP export.
- `npm test`: 270 parameter cases (defaults, endpoints, all 256 range corners, three presets and eight deterministic variations), 24 image/STL integration cases, and rejection checks passed.
- Export checks: binary payload length, finite normalized normals and vertices, nondegenerate triangles, oriented welded edge incidence exactly two, positive enclosed volume per component, five intended separate components, two bearing through-holes, per-part/bed-flat mm dimensions and 6 mm layout gaps.
- Mechanism: two independent serial revolute joints, 2.5 mm minimum bearing wall, 0.8 mm minimum cap overlap, 0.2–0.5 mm radial/axial clearance, upper link above lower cap, import below moving layer. Representative models and imported outputs passed 49 independent joint-pose pairs / 490 component-pair intersections each; only bounded intentional static socket interference is allowed. Solid differences verify imports stay in the stationary safe region.
- Real Playwright PNG/JPEG/ASCII STL/binary STL file inputs and actual downloaded STL passed. Pixel/threshold/depth and STL scale/rotation/placement changes affect the downloaded geometry; it matches the final-preview mesh signature and displayed mm dimensions. Replace/remove/reset and explicit millimeter confirmation passed.
- Recoverable rejection: invalid type/content, truncated data, open/nonmanifold/concave meshes, excessive pixels/bytes/triangles/dimensions, empty silhouettes, nonfinite/out-of-range transforms, safe-zone overflow. Invalid export disabled.
- All presets and four browser Variations outputs passed export and mechanical checks. Undo/redo, all four portable import save/open round trips, preview-colour neutrality, drag/drop, per-part STLs and ZIP parts/assembly notes passed. Independent joint preview poses visibly change assembly but do not change print geometry.
- 1440 px desktop and 320/390 px phones checked: legible studio layout, no horizontal overflow, useful preview, touch orbit/pinch, collapse/expand, all five tabs and always-visible export. Screenshots inspected. No runtime errors or remote generation/file requests.
- Gallery inline script compiled, new entry exactly once/newest/STL, all 110 earlier entries preserved; browser render/search passed with STL Generators first.
- Root predeploy: 111 apps, no failures/skips; exact root index and all 111 app pages verified in deploy/.

See JSON reports and screenshots alongside this file. Physical printing, retention pull-off force, wear, friction, settling behavior and fatigue were **not** tested; digital geometry checks are not a physical printability guarantee.

Public deployment verified: HTTPS app loads, local sample PNG import changes the final model, actual public-browser STL download passes the independent mesh checker, gallery newest entry is Afterglide, and no runtime errors/failed asset requests occurred. See public-validation.json.
