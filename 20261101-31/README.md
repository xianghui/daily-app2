# Sway & Share

A reference-grounded React + Vite **coupled-pendulum kit-card generator**. Snip sixteen real runners, seat a two-tongue portal, and hang two matched, non-contacting bobs from a **shared flexible support cord** carried in front of the portal on two external dowels. Start one bob gently forward/back; yielding support can transfer energy to the other. This is a physical flat-pack assembly, not a browser game or dynamics simulation.

**External supplies:** two Ø2 ×20 mm bamboo dowels, one coupling cord, two matched bob cords, compatible adhesive and removable fixing tape. All other assembly parts print from the connected card or clean-part STL exports. Adult craft model; small parts and cords. No physical printing, energy-transfer, durability, tipping or cord-friction tests were performed. Matching effective cord lengths, knot security, damping and support tension are maker-calibrated; visible transfer is not guaranteed.

## Run and reproduce

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
node browser-test.cjs
node studio-test.cjs
node personalization-check.mjs
node orientation-test.cjs
node icons-drop-test.cjs
node phone-views-test.cjs
```

Production server: http://127.0.0.1:5691/daily-app2/20261101-31/ . Per-app `predeploy` is exactly `npm run build`, `deploy` exactly `gh-pages -d dist`. Public publishing uses the parent monorepo deployment, not the per-app deployment. React, Vite, Three.js/OrbitControls, Manifold WASM, fflate and Fredoka/Rubik Fontsource fonts are installed locally; no CDN, API, key or server is needed for modeling/export. Playwright is a development-only test dependency.

## Reference evidence and design mapping

Local candidate trees were checked **first**, including actual clicker_template2 and diamond-link meshes and their project documentation. Their switch cavities/8 mm interlocked links do not supply a suitable sheet-kit/carrier interface. The selected public reference is **Mike Kasberg, White Cat Kit Card / Printables 865769**, https://github.com/mkasberg/white-cat-kit-card, **CC BY 4.0**. See REFERENCE-LICENSE.txt. Its upstream README and LICENSE were read and its actual binary STL downloaded and measured read-only, not inferred from a listing image.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; 179.819997 ×178.019994 ×3.1899996 mm overall. STL has no unit metadata; millimeters inferred from documented sheet scale.
- 27 edge-adjacent components including non-solid artifacts; source is not globally watertight. It is **not repaired, imported as final geometry or redistributed**.
- Cross-sections at Z .10, .50 and1.59 mm inspected in `evidence/reference-sections.png`. Measured sheet planes0/1.60 mm, socket loops4.50 ×1.700012 mm and low webs at.21/.22 mm.
- Preserve4.50 mm socket length. New slots4.50 ×(sheet+allowance); new tongues(4.50−allowance) ×sheet. Proposed default.20 mm TOTAL allowance—not the source's measured.10 mm gap and not a tested/universal tolerance. Two loose seats require adhesive after calibration.
- Reconstruct the carrier with actual Boolean-unioned bed-level runners. Proposed.4–.6 mm runners replace the source's thinner low webs.
- Entirely new paired-bob/cord interaction and eye geometry; no fan-art outlines or source STL asset bundled. New bob eyesØ2.2 mm, dowel eyesØ2.4 mm; support eye span is spacing+10 mm and changes real portal geometry.

`reference-measure.py` reproduces read-only source measurements (Python trimesh/numpy/matplotlib required). Detailed measurements/source URL in `reference-measurements.json`; concise source-to-parameter mapping in `reference-analysis.json`. Earlier-app common studio/import infrastructure is reused, but its mechanism and validations were replaced. This is not a cosmetic rewrite of a centroid suspension or Newton cradle: two bobs interact through a yielding support, not impacts, rehangings or curved cheeks.

The current visual/interaction reference `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` was inspected read-only: README, styles, App, Viewer, worker, image tracing, STL parser, geometry engine and exporter. Concrete patterns:374px scrollable left editor, sticky compact brand/theme, collapsible labelled controls, paired ranges/numeric inputs, actual preset thumbnails, tactile selected buttons, source/checkerboard preview, imported-source dimensions/unit confirmation, asynchronous current-result-gated export, phone preview-first flow. No reference history/dependencies copied wholesale, source edits or deploy scripts run. No irrelevant keycap/switch sockets included.

## Parameters and interfaces — millimeters

| Parameter | Supported range |
|---|---|
| Card width / height |160–210 /170–220|
| Bob spacing / support-eye span |28–40 / spacing+10|
| Portal height |72–92|
| Bob radius |5–9|
| External bob-cord drop |30–42; assembly-preview plan only, not STL geometry|
| Total socket allowance |.10–.30|
| Sheet thickness |1.6–2.4|
| Part spacing |3–5|
| Runner width / height |.8–1.4 /.4–.6|
| Artwork footprint / engraving depth |4–7 /.4–.6|
| Artwork rotation / XY shifts |±180° / X±1.5,Y±2|

Round, square and chamfered presets change real base/portal/bob contours. Bob spacing changes the real support-eye positions as well as assembly layout. The constant sheet envelope leaves≥1 mm backing under engravings. Unsupported values, nonfinite transforms, empty artwork and features outside the safe artwork radius6.5 mm are errors; exports stay disabled. The last valid preview is clearly labelled when invalid edits are pending. Debounced worker request IDs and exact current-state keys prevent stale exports. Preview and downloads share the same final meshes, with a visible data signature tested against actual downloads.

## Local image-to-model workflow

Desktop/phone picker and drag/drop: **PNG, JPEG, simple SVG**,≤2 MB. PNG/JPEG must be≤12 megapixels,≤6000 px/side, content-checked before decode and normalized≤500 px. SVG≤2000 simple path/shape elements,≤6000 px dimensions; scripts, external resources, text/effects/references rejected. Synthetic CC0 fixtures included; no personal uploads committed.

Fit/cover, crop shifts, light/dark background, threshold or grayscale options feed a20×20 sampled luminance height field. Adjacent samples form a triangulated top over a closed bottom; Manifold Boolean-subtracts it into the protected base patch. White/transparent holes stay uncut with sampled/sloping interpolation, tested with actual solid probes. A checkerboard shows the converted cutout beside the source. This is **2D-to-relief**, not single-photo full3D reconstruction or exact vector tracing. Text (up to8 characters) and six searchable bundled SVG icons use the same real engraving path. Raised decoration is deliberately unsupported to preserve the constant sheet envelope.

## Local STL-to-model workflow

ASCII and binary `.stl`,≤2 MB/1500 triangles, each source axis.2–250 mm. Select Z/Y/−Z up **before import**, inspect source preview/dimensions and explicitly confirm millimeters, since STL stores no units. XY scales proportionally to4–7 mm footprint; Z independently to.4–.6 mm engraving depth. Scale, Z rotation and XY placement change the **exact imported mesh's Boolean cut** in the fixed base. Reset/replace/remove returns to built-ins. It is not an unchanged re-export, viewer-only texture or convex-hull replacement.

Supported contract: one outward-wound, finite, closed convex solid with a broad flat bottom and no projected overhang. Open, nonmanifold, self-intersecting, concave, hollow, multibody, slender or unsupported meshes are **rejected with guidance**, not silently repaired/hulled. This intentional bounded contract makes cut-through/wall validation tractable. Imports never enter portal sockets or moving-bob interfaces. All processing stays in-browser; no uploads/network services. JSON and local named designs carry bounded normalized image/mesh payloads; missing payloads explicitly request reattachment. Undo/redo, six local named saves and JSON save/open are working workflows.

## Print, assemble and export

See ASSEMBLY.txt and the in-app numbered guide (also included in Everything ZIP). Connected card is one true solid including frame, dividers, sixteen runners and all four parts. De-tabbed mode has four distinct printable components; card and clean parts share geometry. Assembled/exploded and isolated views are explanatory proper rotations, not overlapping-shell exports. Dashed cords/ghost dowels are external, not exported, and their sag/knots are illustrative rather than simulated dynamics.

Print bed-flat at100% mm scale; PLA/PETG,.16–.20 mm layers,3 perimeters, matched solid bob infill. Snip1.6 mm outside contours and file nubs, never eyes/tongues. Print base/portal clean parts first as a full-size calibration pair, adjust allowance/file elephant foot, then dry-fit and bond both seats. Glue dowels through top eyes with front tips12 mm ahead of portal; secure a flexible coupling string between their tips. Tie equal-drop bob cords to that string at chosen spacing; tie through bob eyes. Tape base down; inspect clearances and start one bob≤5° forward/back. Do not tie bob cords straight to the rigid beam; no guaranteed friction/press fit or physics performance.

Binary STL per part, connected card, de-tabbed print plate and actual Everything ZIP with five STLs plus numbered instructions. Explicit final X/Y/Z dimensions shown in mm. STL stores no preview color; no fake3MF export. Manifold solids are genuinely unioned/subtracted; moving bodies remain separate, with no interpenetrating-shell exports.

## Validation evidence

- `npm test`:44 cases including three presets, three silhouettes, per-field endpoints, combined min/max, PNG-like height fields, threshold/grayscale settings, ASCII/binary meshes, transforms and import extrema. Independent float32 STL parsing: file size/triangle counts, finite/nondegenerate triangles, normals/winding, welded1e−5 mm edge incidence exactly2, per-component positive volume and mm bounds.
- Eight additional mixed portal-height/bob-radius/cord-drop extremes at minimum bob spacing passed the same full mesh/assembly checks (`mixed-extremes-validation.json`).
- Every case includes each part, combined card and translated clean-part plate. Kernel checks:6 assembled pair collisions,36 downward portal insertions,2 socket/shoulder probes,42 independent bob sweep poses across±5°,16 accessible snips releasing4 parts+carrier, part inclusion/disjointness, card envelope and sampled support-free footprints.
- Real production browser tests: PNG/JPEG/SVG/ASCII/binary picker and drag/drop; actual changed STL downloads after pixels/threshold/depth/scale/rotation/placement changes; byte-signature preview/export agreement and Node regeneration from downloaded JSON; all ZIP members parsed. Invalid/truncated/open/nonmanifold/concave/oversized/empty and bad-transform inputs block export and recover.
- Three presets, real text/six icons, SVG holes, source orientations and explicit unit confirmation, reset/replace/remove, undo/redo, named-save reload, portable JSON, missing-payload feedback, worker-abort recovery and no external generation requests checked.
- Desktop left-editor/right-viewer, dark-theme persistence, keyboard focus, collapsible sections, reduced motion,320/390px preview-first phone layout/all tabs/instructions/exports without overflow, actual touch orbit/pinch and phone file uploads/downloads checked. Screenshots and JSON reports included.

Computational fit, topology and collision checks are **not physical print, force, cord-friction, fatigue, stability or energy-transfer tests**. None of those physical tests was performed.
