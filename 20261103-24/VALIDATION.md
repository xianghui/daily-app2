# Validation — Descartes & Nest

## Computational checks (not physical print testing)

- `npm test`: 50 preset, range-endpoint, joint-corner, silhouette, image and STL cases. Unsupported packing combinations explicitly blocked. Each valid part and float32 translated print plate checked independently: complete binary STL, finite coordinates, nondegenerate triangles, unit stored normals matching winding, positive volume per connected component, every welded edge exactly twice with opposite directions, expected millimeter bounds.
- `collisionCheck`: one connected card; seven individually closed parts; 28 cuttable runners; snipping produces carrier+seven parts without removing functional geometry; no clean-part layout overlap; declared card envelope and bed contact; runner locations outside tongue interfaces. All assembled solids pairwise nonintersecting; all six circle separations; four pocket-floor seats and feasible insertion; both feet's slots/shoulder seats and parallel insertion. Pocket lands≥0.7mm, minimum sheet1.6mm, engraving backing≥1mm. Precise report per case in `geometry-validation.json`.
- Independent true browser imports/downloads on **production build**, real base path: PNG,JPEG,ASCII STL,binary STL,SVG, threshold/depth/crop/grayscale, transform scaling/rotation/placement, replace/remove/reset. Compared actual binary output to no-import and prior settings. Browser signature equals downloaded bytes and regeneration from browser-saved portable JSON. All imported outputs get the same per-part mesh and assembly checks.
- `import-extremes.mjs`: image,ASCII,binary imports at all-min and all-max supported settings; all final STL parts checked plus same assembly checks. Export signatures differ from no-import versions.
- Invalid/truncated/open/nonmanifold/concave STL,wrong image content,oversize file/pixel count,too many triangles,bad dimensions,empty silhouette and out-of-bounds/empty transforms: actionable errors and disabled export, with reset recovery. Unsupported geometry is not repaired or substituted.
- Three presets and three silhouettes; six actual icon engravings plus text; SVG ring's bright hole independently volume-probed in final Boolean solid. Dark ring recessed; center and continuous backing remain.
- Real ZIP downloaded, extracted and every contained STL parsed/checked. No fake3MF. All individual part buttons downloaded successfully.
- Undo/redo,local named design/reload,portable image and mesh JSON round trips,missing image payload explicitly rejected; all view modes and ghost change actual displayed mesh/transforms. Immediate export blocking during rapid edits, stale-result checks and worker-script abort/reload recovery verified.
- Desktop374px left control panel/right viewer; light/dark saved theme; keyboard focus; collapse behavior; reduced-motion rules. Phone320/390px preview first, no document/viewport overflow on any editor tab or expanded instructions, reachable JSON/STL export; touch orbit/pinch change rendered canvas; real phone PNG/STL imports/downloads.
- No remote runtime/asset calls observed in local production tests. Reference download/license verified separately; user files never uploaded. Reference mesh measured, hashed and sectioned; raw mesh not bundled. Exact license text matches upstream.

## Evidence

`geometry-validation.json`, `browser-validation.json`, `studio-validation.json`, `presentation-validation.json`, `icons-drop-validation.json`, `orientation-validation.json`, `stale-validation.json`, `hole-validation.json`, `import-extremes-validation.json`, gallery/root-build reports and `evidence/` screenshots. Reproducible scripts and logs committed beside source. Staged combined-site imports/downloads run after root predeploy; public production check recorded after deploy.

## Limitations

No physical printing, adhesive bonding, release/assembly force, durability, dimensional accuracy or stability test. Geometric fit is not proof of printer/material performance. Adhesive required; small central insert is not child-safe. Trial plaque+foot first, inspect slicer bridges/layers, calibrate total clearance and trim elephant foot. Printed circles have deliberate gaps and are a tangible diagram, not a precision tangency gauge.
