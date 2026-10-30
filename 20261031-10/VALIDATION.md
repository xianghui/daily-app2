# Cross & Lace — verification record

All results below are computational or browser checks. **No physical print, assembly, cord-friction, bow-tying, strength or durability test was performed.** Adhesive and a separate soft lace are required.

## Passed before publication

- `npm run predeploy`: React/Vite production build; local worker, WASM, fonts and imports bundled. Audit: 0 known vulnerabilities at install.
- `npm test`: **36 built-in cases**, **18 imported cases**, **28 rejected out-of-range values**. All presets/silhouettes; combined minima/maxima and every individual field endpoint. Imported threshold/grayscale and both STL formats at minimum/default/maximum with transforms.
- Per output: connected card and three clean part meshes; exact binary length, finite coordinates, nonzero faces, stored-normal/winding agreement, opposite-directed edge incidence two after 1e−5 mm weld, positive signed volume per component, bed Z=0 and declared mm bounds. Runtime worker independently gates invalid final solids.
- Original source independently downloaded, parsed and sectioned. SHA-256, source licence, local-candidate rejections, dimensions and measured sheet/socket decisions recorded. Source remained unmodified and is not redistributed.
- Assembly checks: three nonintersecting printed parts, **four true tongue/slot probes**, 18 sampled rail-lowering poses, eye and slack over-rim routes swept with cylinders at bore−1 mm diameter, minimum ligaments, safe engraving backing. Routes prove possible clearance, not a finished knot or force model.
- **12 real breakaway runners**: Boolean snip cutters miss all functional pieces; snipping releases exactly **4 components: three clean pieces plus carrier**. Card envelope exact; all parts/connected card pass bed-footprint section support checks.
- `browser-test.cjs`: **26 real downloaded STL checks**, all current fingerprints matched UI and Node reconstruction. PNG/JPEG/ASCII/binary imports change final solid vs default; pixel contents, threshold, depth, crop, scale, rotation and placement affect geometry. Full mesh/assembly checks run on each reconstructed downloaded state. Replace/remove/reset return deterministic output.
- Browser rejects truncated STL, open and nonmanifold STL, unsupported concavity, excessive bytes/triangles/dimensions/pixels, malformed SVG/PNG, empty silhouettes, nonfinite/out-of-zone transforms. Invalid exports disabled, recovery succeeds. Ten malformed upload cases recorded plus empty/settings checks.
- `studio-test.cjs`: real presets, silhouettes, text/icon/SVG, named image save/reload, portable image+STL JSON, explicit missing-payload error, undo/redo, every ZIP STL parsed, numbered assembly notes, all views, saved dark theme, visible keyboard focus, collapsible sections, reduced-motion context, 374px desktop-left rail and phone-first layout. Worker-script abort disables export; reload recovers.
- `personalization-test.cjs`: text, all six bundled icons and ring SVG pass full mesh/assembly checks. `hole-check.mjs`: actual Boolean volume probes confirm ring cut, preserved bright central hole and continuous backing.
- `axis-test.cjs`: Y-up and −Z-up source fixtures reproduce expected integrated solid bytes; changing axis clears attached source. `stale-test.cjs`: rapid parameter/image edits immediately block export; only newest current result enables it.
- Phone **320/390px**: no horizontal overflow, usable file pickers, reachable exports, touch orbit/pinch verified by changed canvas screenshots. Real image+STL phone downloads validated.
- Root gallery: one inline script compiled via `new Function`; one correct newest STL entry; **313 previous entries preserved unchanged**, 314 cards render with no runtime errors. STL category already first and tagline retained physical focus.
- Root `npm run predeploy`: **314 built, 0 failed, 0 skipped**. All 314 app index files exist in deploy; **43 new-app distribution files hash-match**. Combined gallery/new app routes load with real production worker/WASM. Every direct part STL download matches Node bytes; combined 320px touch checks pass.

## Reproduce

`npm test` → `npm run predeploy` → `node serve.mjs` (production dist, port5591).

In separate terminals: `node browser-test.cjs`, `node studio-test.cjs`, `node personalization-test.cjs`, `node axis-test.cjs`, `node hole-check.mjs`, `node stale-test.cjs`.

After root build: `node serve-combined.mjs` (combined deploy, port5592), then `node check-combined.cjs`, `node gallery-check.cjs`, `node gallery-browser-test.cjs`, `node final-production-test.cjs`. `gallery-update.cjs` is intentionally single-use and refuses duplicate insertion.

Publication/live evidence is recorded in deployment-validation.json and public-validation.json after authorized root deployment. Tests and screenshots are evidence, not claims of physical printability on every printer. Calibrate sole+one rail before the full card.
