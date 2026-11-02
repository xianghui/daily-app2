# Prime & Screen

A **seven-part flat-pack kit-card generator**: two registration fins locate four removable composite masks above an engraved 1–49 board. Stack factors 2, 3, 5 and 7 to leave fifteen primes visible. This is a real arithmetic assembly kit, not a browser game, static STL or repeating rolling mechanism. Snips, file and adhesive required; optional high-contrast paint. **Physical printing, legibility, friction and adhesive strength have not been tested.**

## Run and architecture

Node 22.12+. `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. App base `/daily-app2/20261102-25/`. `node serve.mjs` serves production output at port 5725; `node browser-test.cjs`, `node studio-test.cjs` and `node presentation-test.cjs` test that output. Root monorepo predeploy/deploy publishes the combined gallery; the per-app deploy script exists but is not used for combined publication.

React/Vite, locally bundled Three.js, Manifold WASM, fflate and Fontsource Fredoka/Rubik. `src/geometry.js` builds real Boolean solids and serializes binary STL; `model.worker.js` owns WASM and STL validation. 100 ms debouncing, monotonically increasing request IDs and exact current-state keys gate export. Invalid/pending edits may retain a labelled last-valid preview but **cannot export it**. Browser imports never leave the device. No APIs, API keys, paid services, remote font/CDN dependencies or personal files in this repository. Samples are synthetic fixtures created for the studio.

## Reference-first evidence and attribution

First inspected local `keycap_generator2/public/templates/clicker_template2.stl` and `fidget_fabric_generator/public/templates/diamond-link.stl`, associated READMEs and actual meshes. Their hashes, dimensions, triangle/component counts and rejection reasons are recorded in `reference-measurements.json`. These are switch-cavity and interlocking-link models, not suitable sheet-kit sources. No STL files were found in the local kit_card_generator / animals / robot projects outside dependencies.

Selected **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Freshly downloaded and parsed the actual 30,616-triangle binary STL. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; bounds **179.820 × 178.020 × 3.190 mm**. STL has no units; mm is an explicit assumption corroborated by sheet features. 27 edge-adjacent components include degenerate slivers, so the overall source is not watertight; it is used as design evidence, **not claimed repaired**. Source README and licence are retained. No raw STL or spacecraft artwork is bundled.

`reference-measure.py` reproduces hashes, component bounds and Z=.10/.50/1.59 mm sections (requires trimesh, numpy, scipy/networkx, matplotlib). Actual views are in `evidence/reference-sections.png`. Measurements establish 1.60 mm sheet planes, four 4.50 × 1.700 mm narrow socket loops and .21/.22 mm low runner levels.

**Mapping to this original reconstruction:** preserve default sheet 1.60 and tongue width 4.50 mm. Proposed sockets use current sheet + user-specified .10–.35 mm TOTAL clearance; source 1.700 is measured, not a universal fit. Replace fragile low source runners with .4–.6 mm bed-aligned tabs. Original numbered board, two shoulder fins, four arithmetic masks, asymmetric registration and seven-bay connected carrier replace spacecraft parts. No hull replacement or unchanged source re-export. See `reference-analysis.json` for concrete measured-versus-redesigned decisions.

The visual/interaction reference is read-only **keycap_generator2**. Inspected README, styles, App, Viewer, worker, STL, export and imageTrace modules. Concrete patterns: 374 px left studio rail; compact sticky brand/theme header; labelled collapsibles; paired range/numeric controls; raised tactile controls with pink selection; lavender-grey #e7e9f1 desk, white panels, dark #1f2233 ink, coral #e2557a; rounded local fonts; large gradient viewer; preview-first stacked phone layout; source-mesh/checkerboard previews and current-result export gating. Generic local import/preview/editor utilities are adapted from earlier Daily Object Lab studios, but geometry, assembly, arithmetic and relevant checks are new. No reference Git history/dependency tree copied.

## Parameters — all physical lengths in millimeters

| Control | Range |
|---|---|
| Card X / Y | 170–220 / 200–260 |
| Grid pitch | 6–8 |
| Mask grid web | .9–1.4 |
| Guide shoulder height | 3–5 |
| Mask border | 3–5 |
| Sheet thickness | 1.6–2.4 |
| Total socket clearance | .10–.35 |
| Part spacing | 3–5 |
| Breakaway tab width / height | .8–1.2 / .4–.6 |
| Maker engraving depth | .4–.6, minimum 1 mm backing |

Three real presets and square/rounded/chamfered silhouettes. Bounded variation changes actual supported geometry. Card packing rejects combinations that do not fit; no out-of-envelope parts or silent clamping. All seven parts print bed-flat at the chosen sheet thickness; the frame and 28 tabs are genuinely Boolean-connected.

Grid numbers use real .4 mm-deep 3×5 pixel engravings; pitch scales glyph pixels (.075×pitch). Windows are pitch minus web. Four distinct masks cover multiples of their labelled factor, **excluding the factor itself**. The 2-mask additionally hides 1, which is not prime. Trials 2,3,5,7 suffice through 49. The remaining cells are 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47. View directly down to avoid stacked-window parallax. Printing small digits and their contrast remains unverified.

## Assembly and printable views

See `ASSEMBLY.txt` and the live print guide. Clip 28 accessible runners outside clean edges, file flush. Lower two 4.50 mm tongues into base sockets and bond upright. Fin shaft cross-sections are 4.50 × sheet; masks have matching clearance holes. Left/right fin Y positions are −6/+3 mm to prevent reversal. Widened roots support the first mask at sheet + shoulder height. Stack masks 2→3→5→7 face-to-face, labels at the back and upward. Lift off in reverse. No glue on masks, no fasteners/magnets and **no captive-retention claim**. Print board plus one fin first as a fit coupon; calibrate by printer/material before the full card.

Connected-card, de-tabbed plate, stacked assembly, exploded and every isolated-part view share the actual solids. See-through base aids inspection. The Lift masks slider shows **preview-only** separation, not a physical motion simulation; final assembly fit is zero lift. Three.js orbit/pinch, fit/top/zoom controls. Final printable dimensions are shown in mm. Export is always bed-flat, never the assembled overlap.

Per-part binary STLs, connected-card STL, loose-plate STL, and Everything ZIP (eight STLs, portable design JSON, numbered assembly guide). STL does not store colours; no fake 3MF. Preview and export use exactly the current valid geometry, with a visible geometry fingerprint for reproducible browser tests.

## Image / SVG / text / icon personalization

Desktop/phone picker and drag/drop. Actual PNG/JPEG <=2 MB, <=12 MP, <=6,000 px side; header/type/dimensions checked before decode, normalized to <=500 px. Simple SVG <=2,000 vector elements, no script/effects/external resources; rasterized locally to 256 px. Text up to eight characters and six searchable bundled SVG icons use the same conversion path. Source image and converted checkerboard shown; replace/remove, transform reset and image-settings reset are real.

Documented conversion: contain/cover plus ±25% crop shift; light/transparent removal or dark/invert; sample a **20×20 grayscale grid**. Threshold 1–254 yields silhouette heights; grayscale yields proportional depth. A closed triangulated height surface is Boolean-subtracted from a protected front apron, not applied as a texture. Bright holes retain uncut surface/backing; interpolation makes sloped boundary pixels, not exact vector outlines. **2D-to-relief, not full 3D reconstruction from one photo.** Empty images block export. Engraving-only avoids raising unsupported details; no decorative raised control.

Footprint 4–7 mm, rotation ±180°, X ±1.5 / Y ±2 mm, depth .4–.6 mm. Entire tool must fit a 6.5 mm-radius keep-in zone and leave >=1 mm backing; it cannot reach the number grid or guide seats. Pixel content, threshold, relief depth, crop and transforms change the actual final STL.

## STL integration and explicit unsupported input

ASCII and binary .stl, 40 bytes–2 MB, <=1,500 triangles, .2–250 mm per oriented source axis. Shows source dimensions, format, triangles, actual source 3D preview and scale factors. Select Z-up, Y-up or negative-Z **before attaching**, then explicitly confirm mm (STL has no units). Axis changes remove current source and request reattachment. XY scales proportionally to 4–7 mm footprint; Z independently fits .4–.6 mm engraving. Rotate/center/place/remove/replace are real.

Finite coordinates, nondegenerate faces, welded edge incidence/winding, one connected positive-volume component, dimensions, pairwise triangle intersections and broad-flat-bottom checks precede CSG. Supported contract: **one closed convex outward-wound flat-bottom solid with no overhang**. Concavities, cavities, branches, open/nonmanifold/disconnected/inward/self-intersecting or overhanging meshes are rejected with actionable guidance. Convexity is only validated; the user's actual triangles are the Boolean cutting tool, **never replaced by a hull or claimed repaired**. Imported shapes therefore measurably change a functional kit component instead of being unchanged re-exports. Source geometry never reaches assembly interfaces.

## Saved designs and recovery

Undo/redo, six local named designs, JSON save/open with bounded image or indexed-mesh payloads. Missing image payload explicitly requests reattachment; saved meshes are revalidated before restore. JSON <=2 MB; normalized image <=250k pixels. Named saves use this origin's localStorage. No missing-file restoration fiction. Invalid imports/settings, worker failure or conversion in progress disable all STL/ZIP export. Worker-failure recovery is a reload.

## Validation, not physical testing

`npm test`: three presets, individual numeric extrema and min/max across three silhouettes; every serialized part, connected card and translated loose plate checked independently for binary length, finite coordinates, mm bounds, nondegenerate triangles, normals consistent with winding, welded edges (1e-5 mm) with two opposite incident faces, positive volume **per connected component** and bed Z=0. Real Manifold intersections check assembly noninterference, vertical fin insertion, mask lift clearance, positive shoulder support, reversed-mask rejection, no plate overlap, card envelope, support-free slice footprints and 28-tab cutting into frame + seven pieces. Independent card/part simplification has .0001 mm tolerance; preserved clean-part intersection volumes use .01 mm³ numerical allowance. All 196 mask/cell intersections are compared to arithmetic decisions; resulting primes are independently trial-divided. These checks also run for image- and STL-derived outputs, with an actual bright-hole backing probe.

Production browser checks use real picker uploads and download bytes for PNG/JPEG/ASCII/binary STL, compare no-import and changed pixel/threshold/depth/crop/scale/placement outputs, regenerate saved JSON in Node and compare geometry fingerprints. Malformed/truncated/open/nonmanifold/concave/oversized input, empty silhouettes and invalid transforms must block export and recover. Studio tests exercise presets, silhouettes, text/icons/SVG holes, portable/named saves, missing-payload errors, undo/redo, every ZIP STL, worker abort/recovery, saved dark theme, focus, collapsibles, 320/390px preview-first layout and touch orbit/pinch. Reports and screenshots are retained beside this README.

None of these computational checks establishes real print quality, fit, bond strength, mask friction or number legibility. No physical printing has been performed.
