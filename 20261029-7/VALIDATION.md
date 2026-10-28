# Validation — Turn & Tier, 20261029-7

- App `npm run predeploy`: passed. Root `npm run predeploy`: 248 apps built/copied, zero failed/skipped.
- **30 built-in** and **35 imported-output** configurations passed independent binary STL and assembly checks. Includes all presets, min/max, mixed extremes, image threshold/grayscale/engraving and ASCII/binary STL. Side-wall/card packing violations are recoverably blocked.
- Weld tolerance 0.00001 mm; nonempty finite nondegenerate triangles, outward normalized normals, consistent winding, exactly two opposite directed faces per welded edge, positive individual-component volumes, expected millimeter dimensions. Connected card is one solid; each loose part is one solid.
- Assembly: all-pairs intersections below 0.001 mm³ numeric tolerance; vertical wall paths without later parts, radial tread insertion and final crown lowering sampled through 25 mm separation; real shoulder stops/slot guides. Forty accessible virtual snips do not intersect parts and leave **eleven components**: ten parts plus one connected carrier. Every imported output repeats these checks.
- `extra-validation.mjs`: actual ring relief hole preserved by solid probes; concave STL rejected rather than hulled; sloping imported mesh union and assembly verified.
- Development **and actual base-prefixed production bundle**: **39** real downloaded-model cases, **16** workflow checks, runtime errors []. Actual PNG/JPEG/SVG/ASCII/binary uploads; pixel content/threshold/depth/crop/scale/rotation/placement modify exports; reset/remove/replace; undo/redo, portable JSON and named saves; invalid/truncated/open/oversized files and empty silhouettes; units confirmation and worker failure/reload recovery. Download hashes match preview geometry and Node regeneration from saved current state.
- All eleven individual browser-downloaded STLs and actual Everything ZIP members parsed and validated; numbered assembly instructions included. Automated download bursts paced by 350 ms to avoid Chromium throttling repeated individual downloads; ZIP remains the single-download route.
- Desktop 374 px left panel/right viewer, all views, collapsed sections, keyboard focus, saved dark theme and reduced motion checked. **320/390 px** phone contexts: preview first, no horizontal overflow, reachable downloads, picker imports; synthetic CDP touch orbit and pinch visibly alter canvas. Screenshots saved in `evidence/`.
- Gallery: 1 inline script compiled with `new Function`; all 247 prior entries retained, 248 total; new entry once with `area:stl`, category first, every deploy folder present; no gallery runtime errors.
- Reference freshly downloaded and parsed; SHA/dimensions/component defects/sections and proposed vs measured design mapping in `reference-analysis.json`. No source mesh redistributed.

## Corrections discovered during checks

- Chamfered tread rear edges initially offered insufficient full-width shoulder contact in a mixed extreme. Added a genuine 2 mm deep full-width back strip and reran all geometry/assembly cases successfully.
- Exploded mode separates treads radially and crown vertically in addition to expanded wall positions. It is preview-only; printable meshes remain bed-flat.

## Not tested physically

No print, material force/fatigue, adhesive strength, long-term creep, stability or load test was performed. This is an adhesive-fixed decorative miniature, not load-bearing or captive. Calibrate one wall/tread pair first. Full card may exceed your bed; separate part files are provided.
