# Collet Calm validation — 2026-10-27

## Passed before publication

- `npm run predeploy`: bundled production app, local module worker, Manifold WASM and fonts.
- `npm test`: **68 parameter cases** (default, three presets, 64 mixed endpoint combinations), **35 imported-output cases** (ASCII/binary meshes, threshold/grayscale/engraved image fields across presets/extremes).
- Every part and float32-translated print plate: independent binary STL size/count, finite coordinates, nonzero triangles, normalized normals matching winding, 1e-5 mm welded edges with exactly two opposite-directed faces, positive volume per component and expected millimeter dimensions. Three distinct connected components on the print plate, no part overlap.
- Independent mechanism intersections: released sleeve/collet/spindle clearances; actual thrust seat support; six open slots; sleeve remains above unslotted root; intentional sleeve/finger contact at estimated pressed positions, distinct from unwanted rigid collisions; vertical disassembly; palm customization stays isolated. These are geometry checks, not elastic-contact simulation.
- Real production browser PNG/JPEG/ASCII-STL/binary-STL picker uploads and downloads; geometry fingerprints differ from defaults and change with source pixels, threshold, depth, fit/crop, STL scale/rotate/place. Export matches current preview and portable JSON regeneration exactly.
- Per-part buttons and real ZIP entries parsed as closed solids, including assembly/material notes.
- Invalid/truncated/open/nonmanifold/concave/oversize files, excessive triangles/dimensions, invalid transforms, blank silhouettes, safe-zone breaches and invalid parameters: actionable errors, disabled exports, working reset/replacement.
- All three presets, random bounded variations, three ergonomic shapes, text, all six icons, SVG ring raised/engraved holes verified by solid probes, light/dark background behavior.
- Undo/redo; local named designs across reload; JSON round trips containing image and STL payloads; up-axis reorientation.
- Live worker edits and invalid-current-state export guard; deliberately aborted production worker blocks export and reload recovers; delayed first image normalization cannot overwrite a newer file.
- Seven visibly distinct print/assembled/exploded/isolated views, estimated sleeve motion, color-only geometry neutrality, saved theme, keyboard focus and collapsible sections.
- 374 px desktop left panel/right viewer; 320/390 px phone no overflow, preview before stacked controls, reachable exports, real touch orbit and pinch screenshots and phone image/STL downloads.
- Gallery inline scripts compile using `new Function`; new entry exists exactly once, area `stl`, correct folder; **191 prior entries retained unchanged**. Root staged build has **192 apps**, root index and every current app file byte-identical to production build. Browser gallery renders and search restores all entries.

Machine-readable reports and screenshots are beside this document. `browser-validation.json` is the individual production server; `root-browser-validation.json` records the combined root staging server. `public-validation.json`, when present, is a post-publication live GitHub Pages smoke test.

## Not performed / not claimed

No physical prints, force/elastic deformation simulation, wear or fatigue tests. TPU finger contraction is not uniform in real use; the nominal 0.10 mm post interference is a geometric target, not a force prediction. Pressed viewer positions overlay undeformed solids intentionally and are labelled preview-only. Printable STL parts are separate and never include those overlapped placements. Keep level, calibrate with Easy Release and stop at gentle resistance; loose parts are not captive. No hardware required, but TPU 95A is required for the collet.

## Reproduce

```sh
npm install
npm test
npm run predeploy
node serve-production.cjs
# In another terminal in this folder:
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node resilience-test.cjs
node stale-import-test.cjs
node view-motion-test.cjs
```

The server uses port 5377 and the real `/daily-app2/20261027-7/` production base. For combined staging run parent `npm run predeploy`, then `node serve-root.cjs` (port 5386), `node root-stage-check.cjs`, `TEST_BASE=http://127.0.0.1:5386 TEST_REPORT=root-browser-validation.json node browser-test.cjs`, and `TEST_BASE=http://127.0.0.1:5386 node gallery-test.cjs`.

## Deployment

The root predeploy staged all 192 gallery apps with 0 failures/skips. The root deploy published the combined deploy directory to gh-pages. An immediate public request initially returned 404 during Pages propagation. A documentation command accidentally evaluated shell backticks, triggering the app-level deploy; the combined site was immediately republished through the root flow to restore the complete monorepo. Root staging and public gallery/app checks were rerun after correction.

Post-correction live GitHub Pages smoke passed: HTTP 200, local worker/WASM loaded, actual downloaded STL exactly matched the tested default model and passed independent mesh parsing; the combined gallery shows Collet Calm newest first with no runtime errors. See public-validation.json.
