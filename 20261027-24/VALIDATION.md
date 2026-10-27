# Verification — 2026-10-27

- Actual public reference downloaded, parsed, hashed and sectioned; evidence in reference-analysis.json and reference-sections.svg/png. Source defects disclosed; source not republished.
- `npm run predeploy`: passed; locally bundled worker/WASM/fonts.
- `npm test`: 12 parameter/preset/extreme cases + 30 image/STL cases; connected card and each six de-tabbed parts passed binary-STL, welded-edge manifold, winding, volume, dimension and flat-bed checks.
- Independent solid checks:15 assembled pairs collision-free; each upper divider tested at9 vertical insertion positions; sideways constraint probe passed.24 tab cuts release exactly7 solids (carrier +6). Every case checks exact card envelope, print-layout separation and coplanar feet.
- Production browser PNG/JPEG/ASCII/binary imports and downloads: passed. Changed image content, threshold, depth/crop and mesh shape/scale/rotation/placement measurably change geometry; exact downloaded signatures match current preview and Node regeneration from saved JSON.
- Malformed/truncated/open/nonmanifold/concave/excessive files, invalid dimensions/transforms, empty silhouettes, missing JSON image data and stale asynchronous imports blocked exports and recovered by reset/replacement.
- Presets, three silhouettes, text and all six searchable icons, raised/engraved SVG ring holes, undo/redo, local named designs, bounded JSON roundtrips, per-part STL and actual Everything ZIP payloads checked.
- Worker script abort disables export; reload recovers. Latest request/current-state gating verified.
- Desktop374px left rail/right viewer;320/390px phone preview-first/no overflow, reachable exports, phone file inputs and actual touch orbit/pinch passed. Saved theme, focus, collapsible sections and reduced motion checked. Screenshots retained.
- Gallery inline scripts compile;207 old entries unchanged;208 after addition, new STL entry exactly once and newest. Browser renders all entries and search recovers without runtime errors.
- Root predeploy:208 built/copied,0 failed,0 skipped. All gallery folders staged; new app production files byte-identical to dist.

JSON reports and reproducible scripts accompany this file. Tests are computational and browser-only: no physical print, physical assembly, strength, load or friction testing was performed. Calibrate one lower/upper joint pair with your actual printer and material first.

- The full real-import/download/phone browser suite was repeated against the root combined deploy/ tree and passed (`combined-browser-validation.json`). A directory-index routing defect in the temporary test server was corrected before that rerun; staged app files did not require changes.
