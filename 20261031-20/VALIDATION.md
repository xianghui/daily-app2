# Ray & Split — performed validation

## Passed before publication

- Actual source STL downloaded, SHA-256 matched, parsed and sectioned; independently retrieved CC BY 4.0 license. Local candidate meshes measured first. No raw reference mesh published.
- `npm test`: **36 built-in cases + 18 image/STL-derived cases**, including presets, silhouettes, combined min/max and individual extrema; **29 range rejections**. Every card and clean part independently parsed as float32 binary STL: finite triangles, normalized normals, nondegenerate geometry, expected dimensions, opposing two-face edge incidence after 1e−5 mm welding and positive volume per component.
- Every model checks assembled pairwise nonintersection; sampled vertical insertion/removal paths; four tongue/socket fits and minimum backing; diagonal frame window and clear straight/reflected optical channels; independent ideal reflection direction; bed support footprints. Twenty snips yield exactly five clean parts plus carrier. No accidental overlap on the flat layout.
- Real production-browser file-picker imports: PNG/JPEG and ASCII/binary STL. Downloaded geometry changes with image content, threshold/depth/crop and STL scale/rotation/placement. Source removal/reset restores exact builtin bytes. Browser preview signature equals downloaded bytes and independent Node regeneration of saved parameters.
- Malformed/truncated, open/nonmanifold/concave, excessive size/triangles/pixels/dimensions, empty image and invalid transforms reject recoverably with export disabled. Both Y-up and upside-down STL source imports preserve expected orientation, and changing axis explicitly detaches source.
- Actual per-part STL downloads and Everything ZIP meshes parsed. All three presets, three silhouettes, text, all six searchable icons and SVG checked. Actual Boolean probes confirm image holes/backing.
- Portable image/mesh JSON, local named designs after reload, missing-payload rejection, undo/redo, all views, dark theme persistence, visible keyboard focus, collapsible sections, reduced-motion mode, worker abort/recovery and rapid-edit stale-export gating passed.
- 374 px desktop rail/right viewer and 320/390 px phone preview-first layout checked. Phone orbit and pinch change canvas; imports and export remain reachable; no horizontal overflow.
- App `npm run predeploy` passed. Combined root `npm run predeploy` built/copied **324 apps, 0 failures, 0 skipped**. Gallery inline script compiled; **323 prior entries preserved exactly**, one newest `20261031-20` STL entry; browser search/runtime checks passed.

Production reports: `browser-validation.json`, `combined-browser-validation.json`, `final-production-validation.json`, `studio-validation.json`, `personalization-validation.json`, `orientation-validation.json`, `stale-validation.json`, `hole-validation.json`, `validation-report.json`. Deployment/public verification is recorded separately after publication.

## Explicit limits

**No physical print, physical assembly/fit or optical test was performed.** Closed meshes and modeled clearances do not prove filament strength, adhesive performance or film brightness. External thin transparent partially reflective film, tape, adhesive and a cool LED torch are required. No guaranteed optical split ratio, universal tolerance, snap retention or printed film is claimed. STL import is intentionally limited to the documented convex, closed, broad flat-footprint class; unsupported geometry is rejected, not hulled or repaired.

## Publication verified

Root `npm run deploy` returned **Published**, gh-pages commit `02d85924a9a7064a579bd831b04ed60dbd70d58d`. The public gallery renders 324 cards with Ray & Split newest. Public worker/WASM loaded, and an actual downloaded STL matched the default generator bytes and passed independent mesh checks. See `public-validation.json` and `pages-deployment.json`.
