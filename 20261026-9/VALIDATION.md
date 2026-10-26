# Tangent Turn — validation

Computational checks, not physical print certification.

## Geometry and mechanism

- `npm run predeploy`: production build succeeds, bundled local worker/WASM/fonts.
- `npm test`: **68** default/preset/parameter-boundary cases and **30** image/STL-derived cases pass.
- Independent binary-STL parser checks actual float32 exports: exact lengths, finite values, nonzero triangle area, normalized normals matching winding, expected mm bounds, positive volume per connected body, exactly two opposite-directed incident faces for every edge welded at 0.00001 mm, and orientable topology.
- One connected intended body, four continuous arm samples, eight open-side probes, sufficient root embed/floors, and conservative free-length/beam-strain estimates pass across tested bounds.
- CSG differences against the same unpersonalized design prove imported geometry remains inside the rigid hub and does not alter flexible arms.
- The beam estimate is not FEA or a force, travel, rotation-angle or fatigue prediction. No deformation collision simulation is claimed. Preview is explicitly the undeformed body.

## Actual browser interactions and downloaded geometry

Production-path Playwright tests pass:

- **23 actual STL downloads** in the core browser suite, including default, image pixels/threshold/depth/crop/grayscale/scale, PNG/JPEG differences, ASCII/binary STL scale/height/rotation/placement/reset, extrema, individual body and phone imports.
- Every downloaded signature matches the exact preview signature and the independent model rebuilt from a saved JSON snapshot. Downloaded bounding dimensions match the UI.
- **20 additional generated models** in the feature suite: every preset, variations, ergonomic pad shapes, text, icons, SVG ring, engraving, inverted JPEG, portable round trips, Y-up import and latest-worker state.
- Ten malformed/excessive/open/nonmanifold/unsupported file fixtures reject recoverably; empty images, invalid dimensions/transforms and safe-zone violations block export. Reset/remove restores default geometry.
- Solid probes verify actual raised/engraved ring holes remain unraised/unengraved over the backing.
- All six bundled icons work; text/marks are geometry, not textures. Preview-color changes affect only display.
- Undo/redo, named design persistence for images/STL, PNG/JPEG/ASCII/binary portable JSON round trips, missing-image reattachment feedback and bounded mesh restoration pass.
- Actual ZIP unpacks to the checked body STL and TPU print notes; direct STL buttons work.
- Worker load failure disables export; reload recovers. Deliberately delayed first image normalization cannot overwrite a newer import.
- Desktop: 374 px left rail/right viewer. Phone 320/390 px: preview first, reachable exports/imports, no horizontal overflow, real touch orbit/pinch changing the canvas. Theme persistence, selected tactile states, keyboard focus, collapsible sections and reduced-motion checks pass. Screenshots inspected.
- No app runtime errors or remote requests in the browser import/export suite.

## Gallery and combined deployment

- Gallery inline scripts compile with `new Function`; new entry exists exactly once, area `stl`, correct folder, newest first.
- All **164 previous entries** are preserved byte-for-byte; gallery renders **165** cards with STL Generators first and working search.
- Root `npm run predeploy`: **165 built/copied, 0 failed, 0 skipped**.
- Root stage check: gallery exact, all 165 application index files present, all **43 new-app distribution files** match staged bytes.

Reproducible scripts and JSON reports are included beside this file. No physical print, measured coupled turn, force, fatigue or lifetime test was performed.

## Publication verification

Root `npm run deploy` published the combined `deploy/` tree. After GitHub Pages propagation, `node live-test.cjs` passed against the public HTTPS URL: HTTP 200, worker/WASM load, default + PNG-imported + binary-STL-imported real manifold downloads, exact preview/saved-state/download signatures and all 165 gallery cards with Tangent Turn first. The complete browser import/download suite also passed against the locally served combined deployment (`combined-browser-validation.json`).
