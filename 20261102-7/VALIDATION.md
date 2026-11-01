# Polar & Project — validation record

Validation is computational/browser-based only. **No physical print, fit, assembly, strength, adhesive or thread-tracking test performed.**

## Source evidence

Actual downloaded STL parsed with trimesh, SHA-256 recorded and actual Z sections viewed. Original source is nonwatertight; no repair/re-export claim. Local candidates also parsed; unsuitable interfaces documented. See reference-analysis.json, reference-measurements.json and evidence/reference-sections.png. Original reconstruction preserves measured sheet/socket dimensions and carrier topology; proposed fits and new projection geometry clearly separated.

## Geometry (`npm test`, geometry-validation.json)

44 successful cases: three presets, three silhouettes, every scalar endpoint, paired all-min/all-max settings, exact ASCII/binary import meshes with distinct transforms, threshold/grayscale images and imported outputs at combined extrema. Explicit impossible packing and out-of-range cases reject. All generated outputs are checked independently, not just kernel status.

- Parse actual binary STL float32 bytes: exact length/nonempty, finite vertices, normalized normals consistent with winding, nondegenerate faces,1e−5mm welded edges have exactly two opposite incident faces, every connected component positive signed volume, actual bounds and bed Z=0.
- Card one component; each clean part one; de-tabbed print plate exactly two. No unwanted assembled or print-layout intersections.
- Two actual sockets and tongues probed; shoulders stop overtravel; full downward insertion sampled every0.5mm. Flush tips finish on underside.
- Eight runner cuts avoid parts/interfaces and release exactly two parts plus carrier. All part volumes exist in the connected card. Declared card envelope and sampled bed support footprints verified.
- Independently recomputed sine/cosine/tangent projection positions and XZ collinearity at three marks. Actual ring/base eyes probed.123front-face ray probes avoid solid plastic. External cords/tape remain approximate physical aids, not exported geometry or proof of physical tracking.

`node personalization-check.mjs`: real solid probes verify image-ring center remains backing while dark annulus cuts a recess. Hole preservation is tested in the Boolean result, not inferred from a PNG.

## Real production-browser tests

Served actual dist/ under `/daily-app2/20261102-7/`; local worker/WASM paths verified.

- `node browser-test.cjs`: actual file-picker PNG/JPEG, ASCII/binary STL; real downloaded STL parsed and matched exactly to UI fingerprint and independently regenerated Node model from downloaded JSON. Each import model gets per-part mesh and assembly checks. Changed threshold/depth/crop/fit/grayscale/pixels and STL scale/rotation/placement alter exported bytes; remove/reset restores default. Explicit units gate STL integration. Minimum/maximum settings and all parts exported.
- Bad/truncated/open/nonmanifold/concave/excessive STL, fake/oversized image, bad dimensions, empty silhouettes, blank/unsafe transforms all block exports recoverably. No automatic repair/hull substitution.
- `node studio-test.cjs`: every preset and silhouette, text, searched icon, SVG, image depth, exact ZIP member meshes/guide, portable JSON for images and STL, named design+reload, missing payload/reattachment error, undo/redo, every view/ghost/fit, saved dark theme, keyboard focus, collapsible controls, reduced motion,374px desktop left rail and320px preview-first phone. Intentional worker asset abort blocks export; reload recovers.
- `node orientation-test.cjs`: Z/Y/−Z orientation, unit confirmation, exact dimensions and final signatures plus mesh/assembly validation.
- `node stale-test.cjs`: immediate export block during rapid parameter/image edits; only newest Node-matching result becomes exportable; invalid transforms recover.
- `node phone-views-test.cjs`:320px all tabs/views and expanded guide have no overflow, JSON reachable, JPEG/ASCII picker, background inversion changes actual geometry.
- `node icons-drop-test.cjs`: all six bundled marks alter final geometry; each receives independent mesh/assembly checks. Actual drag/drop PNG works.
- Touch-enabled390px browser: real CDP orbit and pinch change canvas images; PNG and STL imports/downloads work.320px exports remain reachable. No app remote resource requests or runtime errors recorded.

Reports: browser-validation.json, studio-validation.json, orientation-validation.json, stale-validation.json, phone-views-validation.json, icons-drop-validation.json and personalization-validation.json. Screenshots in evidence/ and desktop/mobile-validation.png.

## Gallery and deployment

`node gallery-test.cjs`: every inline script compiled with new Function, missing script fails, new entry exactly once with area stl and correct folder; all366previous entries unchanged. Gallery renders367entries, STL Generators first, search works, no runtime errors. Evidence captured. Root combined predeploy/deploy and live public smoke results recorded separately after publication.

Final revised flush-tongue model:44geometry cases passed again; assembled base/tongue minimum-Z explicitly checked.25actual browser STL downloads and10malformed/unsupported file rejections in each full import suite. The full suite also passed against ROOT deploy/ output (`TEST_BASE=http://127.0.0.1:5698 TEST_REPORT=combined-browser-validation.json node browser-test.cjs`). Root predeploy built/copied367apps,0failed,0skipped. All367paths exist; SHA-256 comparison confirms43new-app files and root gallery identical to validated builds (deploy-validation.json). Combined gallery syntax/render test passed with all366previous entries preserved. Initial combined-server port collision was resolved by using5698; existing app-test server at5697 was left running until checks completed.

## Published verification

Root `npm run deploy` completed with **Published** (gh-pages ref3abb9d2c190422acbb040aec8ba6c4857bc5fb0d). After normal Pages propagation, `node public-smoke.cjs` passed at https://xianghui.github.io/daily-app2/20261102-7/ : live heading, production worker/WASM, real PNG picker, real downloaded manifold STL, exact preview/export fingerprint,367gallery entries and zero runtime errors. See public-validation.json and evidence/public-app.png / public-gallery.png. This does not constitute physical printing.
