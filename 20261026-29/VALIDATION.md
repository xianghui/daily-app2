# Twin Gate Ritual — computational validation

No physical prints, force measurements, fatigue, friction or wear tests were performed. These results validate digital geometry and browser behavior, not universal printer fit or security-lock performance. Moving parts deliberately release vertically.

- `npm run predeploy`: production React/Vite build succeeded with local worker/WASM/fonts.
- `npm test`: 20 default/preset/representative-extreme cases and 35 image/ASCII-STL/binary-STL-derived cases. Every part and float32 combined plate is nonempty, finite, outward-wound, positive-volume and closed-manifold after 1e-5 mm welding. Independent assertions check key span/finger reach and dial X/Z dimensions plus notch-bounded Y dimensions.
- Manifold intersections: aligned full-stroke motion has no unwanted pairwise collision; either dial independently blocks an inserted key at 90°; withdrawn key permits 360° dial rotation; vertical removal and separated print layout are clear. Walls, post collar, root allowance and palm import isolation are bounded. Actual floor contact is gravity-seated; preview lifts moving parts 0.1 mm for legibility.
- Production browser real file pickers: PNG, JPEG, ASCII and binary STL. Actual downloaded binary STLs match the current preview fingerprint and regenerate identically from saved JSON. Image pixels/threshold/depth/crop/scale and mesh shape/scale/rotation/placement affect final geometry. Reset returns the baseline signature.
- Recoverable rejections: malformed/truncated/open/nonmanifold/concave STL, excessive triangles/dimensions/file size/pixels, fake images, empty silhouettes and unsafe/missing transforms. Export remains disabled for invalid or stale states.
- Every preset, shape, representative variation, text, all six icons, SVG, engraving and image background handling exercised. Solid probes confirm ring relief retains its unraised/unengraved hole.
- Undo/redo; named saves; portable image/mesh JSON round trips; missing-payload reattachment message; real four-part ZIP and individual STL downloads; all views and ghost view; persisted dark theme; focus and collapsible sections; reduced motion.
- Explicit gate-sequence test: scrambling withdraws the key; travel aligns the gates; reset restores both; left/right/key/palm isolated views and motion do not change export geometry.
- Worker loading failure blocks export and reload recovers. Delayed older image normalization cannot replace a newer file selection.
- Desktop 374 px left panel/right viewer and 320/390 px phone preview-first layout, no horizontal overflow, actual touch orbit/pinch and reachable phone file imports/STL downloads.
- Gallery inline script compilation and exactly-one new STL entry; 184 prior entries unchanged. Browser gallery renders all 185 cards with STL category first and functioning search.
- Root `npm run predeploy`: 185 built/copied, zero failed/skipped. All staged app entrypoints present; root index and new-app assets are byte-identical to tested production output. Browser import/export suite also runs against root staging under the real base path before publication.

Reproducible scripts and machine-readable reports accompany the source. README documents parameter ranges, supported STL subset, relief sampling, privacy, print orientation and assembly/calibration guidance.

## Publication verification

Root `npm run deploy` published the combined `deploy/` directory. [Pages deployment](https://github.com/xianghui/daily-app2/actions/runs/40346546794) completed successfully. `node public-smoke.cjs` verified HTTP 200, production worker/WASM generation, a real downloaded STL matching the tested default model, and the new entry first in the public combined gallery. See `public-validation.json`.
