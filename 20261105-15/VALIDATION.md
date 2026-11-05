# Validation — Catenoid & Neck

## Computational results

- `npm run predeploy`: production Vite build passed; worker, WASM, fonts and sample assets bundled locally.
- `npm test`: **41 cases** covering defaults, all three presets, all silhouettes, each field endpoint, combined endpoints and image/STL-derived variants. Every part, connected card and translated clean plate passes independent float32 STL parsing, closed-edge incidence (1e−5 mm weld), consistent stored normals, nondegenerate faces, each-component positive volume and mm bounds.
- Assembly: twelve cut corridors release **exactly three parts plus the carrier**, no detached debris, no clean-part volume damage. Exact card bounds and bed footprints pass. Four blind socket voids/floors and two complete ring apertures remain open in clean and connected geometry. Ring engagement is 3 mm, coaxial separation equals the selected parameter; **82 sampled vertical insertion checks** are collision-free. Ideal wide-neck roots satisfy the catenoid equation; above-limit presets remain explicitly labeled experiments.
- `browser-test.cjs`: real production file-picker PNG/JPEG/ASCII/binary STL imports; actual downloaded STL bytes checked against the preview's current fingerprint and regenerated saved JSON. Pixel content, threshold, depth, fit/crop, scale, rotation and placement changes survive export. Remove/reset reproduces baseline. Malformed/truncated/open/nonmanifold/concave/excessive/invalid-dimension and empty-image inputs block export and recover.
- `feature-test.cjs`: every preset and silhouette; text/icon/SVG geometry; portable image/STL round trips; undo/redo; named design persistence across reload; ZIP unpacking and all four enclosed STL checks; actual individual downloads; every view; dark-theme persistence; source up-axis; focus/sections; stale result/export gating.
- `hole-test.cjs`: sample SVG ring's bright center retains material and dark band cuts the final solid.
- `resilience-test.cjs`: aborting the actual production worker blocks exports; reload recovers; all six icons produce distinct geometry.
- `portable-errors-test.cjs`: missing imported image payload, invalid transform, wrong-app JSON and invalid dimensions are rejected recoverably.
- `stale-import-test.cjs`: delaying an older image conversion cannot overwrite a newer selected image.
- `mobile-layout.cjs`: 320, 390 and 480 px widths, every tab and expanded instructions; scroll/inner viewport do not exceed configured width, preview precedes controls, JSON download works, STL export remains reachable. Desktop left rail is 350–390 px and viewer is to its right. Browser suite also verifies touch orbit/pinch by actual canvas differences and real phone image/STL downloads.
- `gallery-test.cjs`: every inline root script compiles via `new Function`; one new `stl` entry, newest first, correct folder, all **461 previous entries unchanged**. Total **462**. Existing STL-first category and focus tagline preserved.

See machine-readable reports and screenshots beside this document. Production-combined and public smoke reports are recorded separately during deployment.

## Reference evidence

A fresh download of the actual public STL was parsed and measured before final model selection. Local candidates were parsed first. `reference-analysis.json` records identifiers, hashes, dimensions, components/anomalies, cross-sections and specific source-to-parameter decisions; `evidence/reference-sections.png` shows mesh sections. Upstream CC BY 4.0 licence was independently retrieved. Raw source meshes are not redistributed.

## Not physically tested

No physical printing, calibrated fit, strength, stability, wet handling, adhesive compatibility or soap film was tested. Neck readouts are ideal equal-ring geometry, not simulation or a measured collapse threshold. Rings are gravity-seated, not positively retained; adhesive is recommended for rigid wet handling. Bubble solution and a wide shallow tray are external. Printable/watertight geometry does not guarantee a connecting film forms.

Additional experiment checks: `experiment-test.cjs` verifies that see-through rendering and explanatory ring lift change the view without changing export geometry, reduced-motion CSS takes effect, and above-limit ideal geometry shows a warning without incorrectly blocking a printable kit. Four additional combined minimum/maximum **image- and STL-derived** configurations pass the same independent mesh, connected-card, translated-plate and assembly checks.

The full browser import/download suite also passed against the ROOT combined `deploy/` tree (`combined-browser-validation.json`), not only the individual app build. The combined gallery rendered all 462 entries without runtime errors and its newest link loaded valid worker geometry (`combined-gallery-validation.json`).

## Publication

ROOT `npm run predeploy`: **462 built, 0 failed, 0 skipped**. Root `npm run deploy` reported **Published**. `deployment-validation.json` records the Pages branch revision and source gallery hash. Public smoke testing passed at `https://xianghui.github.io/daily-app2/20261105-15/`: 462-entry gallery, newest link, production worker/WASM, actual PNG/STL file uploads and changed, manifold STL downloads. See `public-browser-validation.json` and `public-validation.png`.
