# Ratio Reverie validation

## Reproduce

```sh
npm install
npm test
node engagement-test.mjs
node dense-motion.mjs
npm run predeploy
node serve-production.cjs
# In another terminal:
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node motion-test.cjs
node isolated-test.cjs
node resilience-test.cjs
node stale-import-test.cjs
node gallery-validate.cjs
```

- `geometry-validation.json`: **68 parameter cases** (defaults, all three presets and 64 representative extrema) and **35 imported-output cases**. Binary STL is independently parsed, welded at 1e-5 mm, and checked for finite coordinates, nondegenerate faces, normalized consistent normals, opposite-directed two-face edge incidence, positive volume for each component, expected millimeter dimensions and separated part layout. Every part and combined plate is checked. Sources include both STL encodings, threshold and grayscale image geometry, and engraved relief.
- `engagement-validation.json`: each stage has positive blocked-flank contact when driven off its intended ratio, in both directions at 12 phases. Intended motion is separately collision-free. Checks span all presets and representative extremes.
- `dense-motion-validation.json`: 198 positions per case with a step count coprime to tooth periodicity. Tests presets and minimum/maximum built-in, image-derived and STL-derived models. Checks physically seated rotors, all part pairs, the exact two-stage angular relation, print separation and ordered removal: output first, input next, compound last. Unwanted intersection tolerance is 1e-5 mm³; the largest seated-contact numerical residue was 4.27e-6 mm³. Preview-only inspection lift is explicitly labeled.
- `browser-validation.json` / `root-browser-validation.json`: real file input uploads of PNG, JPEG, ASCII and binary STL, actual STL downloads, exact UI fingerprint / portable-state regeneration equality, measurable pixel/threshold/depth/scale/rotation/placement changes, reset signatures, bad/truncated/open/nonmanifold/concave/excessive files and unsafe transforms, disabled invalid export. Includes 320/390 px touch-enabled phones, orbit/pinch, no overflow and reachable downloads. Files stay local; no remote file-processing requests.
- `feature-validation.json`: presets, variations and silhouettes; undo/redo; portable imported-asset JSON and local named save roundtrips; text, icons, SVG and engraving; real ZIP extraction and each contained STL; drag/drop, Y-up import, views, persisted dark theme, keyboard focus and collapsible sections. Preview-only colours do not alter STL.
- `hole-validation.json`: solid-kernel probe volumes verify the SVG ring's bright center remains unraised / unengraved and dark ring changes the actual final solid.
- `isolated-validation.json`: all three individual rotor views differ and preserve the printable-state fingerprint.
- `motion-validation.json`: desktop 374 px left rail, phone preview-first order, 320 px no overflow, reduced motion, three visibly different motion poses and unchanged printable geometry.
- `resilience-validation.json` / `stale-import-validation.json`: aborted production worker disables export; reload recovers. All six bundled marks alter geometry. Stale asynchronous import conversions cannot overwrite the latest selection.
- Gallery reports: all 195 previous entries preserved verbatim, one newest STL entry, inline scripts compile, browser gallery renders/searches without runtime errors, STL category first.
- `root-stage-validation.json`: all 196 apps present, root index matches, new production output byte-identical in root deploy staging.
- `public-validation.json`: post-publication smoke checks live HTML, worker/WASM, exact actual STL and newest gallery card.

These are **computational geometry, mechanism and browser checks**, not physical print testing. Print fit, friction, wear, forces, durability and physical operation have not been tested. Printer/material-specific calibration remains required. The open-post rotors are deliberately non-captive; hold level and follow the documented removal order.
