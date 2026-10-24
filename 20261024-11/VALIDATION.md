# Bristle Step validation

## Passed computational checks

- `npm run predeploy`: production build completed. Nonfatal warnings: Manifold's optional Node module is externalized in the browser bundle; main Three.js/React chunk exceeds 500 kB. Browser WASM generation was verified rather than treating these warnings as runtime failures. npm audit found zero vulnerabilities; optional fsevents install-script policy warning did not affect this build.
- `npm test`: 78 parameter cases (default, min/max, presets, all 64 six-parameter corners and eight variations), plus 24 image/STL cases. Actual binary STL parsed independently for finite data, valid normalized normals, nonzero faces, manifold welded edges, opposite neighbor winding, connected components, positive volume and mm bounds. Each output is one solid. Independent expected dimensions: length+18.5 × max(21,width) × (2.4+vertical rise+foot diameter/2) mm.
- Mechanism: six roots/tips, print inclination ≤37°, row/column separation, protected palm import zone, conservative 0.5 mm per-leg lateral envelope, common feet-down contact plane. Exact CSG difference checks prove imports leave the leg region unchanged. These are geometric checks, not friction/dynamic simulation.
- `node browser-test.cjs`: real browser-selected PNG/JPEG and ASCII/binary STL sources; actual STL downloads; default/import byte differences; changed threshold, height, crop, scale, rotation and offsets survive export; source removal/reset; invalid dimensions/transforms, malformed/truncated, oversized, over-pixel/triangle, open/nonmanifold/concave sources and empty images block export recoverably. Export fingerprints match the final preview geometry. Phone widths 390 and 320 tested; real touch orbit and pinch; phone image/STL downloads. Zero app runtime errors or external requests.
- `node extra-browser.cjs`: all presets and four actual Variations exported and passed mesh/mechanism checks. Undo/redo and portable JSON round trips for PNG, JPEG, ASCII STL and binary STL; ZIP solid checked independently; orientation switch keeps export unchanged; preview palette does not change geometry; drag/drop import. Zero runtime errors.
- `node mobile-sheet.cjs`: 320×740 collapse/expand, all control tabs, no horizontal overflow, fixed Download STL within viewport, explicit untested-print guidance.
- `node gallery-test.cjs`: each inline script compiled with new Function, missing/empty scripts rejected; new entry exactly once with area stl and correct folder; all previous gallery entries preserved; category first, search and rendering tested without runtime errors.

Machine-readable reports and desktop/phone screenshots are in this app folder. Production bundle and public-site checks are recorded separately after root deployment.

## Not physically tested

No physical print, gait, force, friction, load or fatigue verification. TPU stiffness, table friction, slicer handling of narrow legs/rounded tips, cyclic return and stepping performance require user calibration. The app explicitly makes no universal material/tolerance or guaranteed walking claim. It offers gentle oblique spring return even if directional walking is not produced. No automatic repair or full 3D photo reconstruction is claimed.

## Production/publication

Root `npm run predeploy` and `npm run deploy` succeeded: 115 app folders, zero failures/skips. Root gallery and all new production files were compared against the staged deploy tree. The complete browser import/export suite was repeated against the static production bundle (`production-browser-validation.json`), not just Vite development mode. The public GitHub Pages app then passed a real PNG sample import, downloaded binary STL mesh checks, and newest-gallery-entry verification with zero runtime/HTTP errors (`public-validation.json`). This verifies publication, not physical printing.
