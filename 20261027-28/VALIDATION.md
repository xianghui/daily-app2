# Validation — 2026-10-27

{
  "geometryParameterCases": 12,
  "geometryImportCases": 30,
  "browserDownloadedMeshes": 29,
  "browserInvalidFilesRejected": 10,
  "additionalFeatureModels": 20,
  "retainedGalleryEntries": 211,
  "physicalPrintTested": false
}

- App predeploy passed; bundled production WASM and worker loaded under the real base path.
- Twelve built-in parameter cases plus 30 image/STL-derived cases: every connected card and individual part passed independent binary-STL checks and kernel fit/assembly tests.
- Fifteen assembled component pairs: no unintended intersection. Wall seating and full lid travel checked at 13 sampled positions per stage (9 in repeated browser model checks). Roof, lateral and rear-stop probes confirm functional guide restraint.
- Twenty-four cuts yield exactly seven pieces: carrier plus six panels. No flat part overlaps; all six parts are included exactly in the connected card.
- Browser file-picker PNG/JPEG and binary/ASCII STL imports, transforms, source replacement/removal/reset, actual STL and ZIP downloads, and UI/Node/export geometry signatures passed.
- Invalid/truncated/empty/oversized/open/nonmanifold/concave inputs and missing JSON assets block exports and recover.
- All presets and floor shapes, six bundled icons, text, SVG ring holes (raised and engraved final-solid probes), JSON/named saves, undo/redo, view modes, theme persistence, stale-worker/import handling and worker abort/reload passed.
- 374 px left control rail/right viewer verified; 320/390 px phones have preview-first layout, no horizontal overflow, accessible exports and tested orbit/pinch. Reduced motion, collapsible sections and keyboard focus checked.
- Reference downloaded anew, SHA-256 and sections measured; source defects disclosed, source mesh not bundled.
- Root gallery inline JavaScript compiles; 211 original entries preserved exactly, one newest STL entry added; live gallery render/search has no runtime errors.

Reports and scripts in this folder reproduce checks. These are computational and browser tests only; no physical print, force, fit, strength, capacity or durability test was performed.

Root `npm run predeploy` and `npm run deploy` passed: 212 apps built/copied, zero failures/skips; gh-pages reported Published. Combined-root gallery and full browser import/download tests also passed (`combined-browser-validation.json`). Initial immediate public URL check returned 404 during Pages propagation; public readiness checked separately before completion.

Public readiness subsequently passed: HTTP 200, production worker/WASM, real PNG file-picker import and STL download with matching geometry signature, and gallery showing 212 entries with Slide & Stow first (`public-validation.json`). GitHub Pages reports the gh-pages commit built without error.
