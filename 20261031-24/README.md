# Facet & Reveal

A local browser **parametric seven-part alternating-face display kit-card generator**. Snip 28 real runners, seat six ±45° panels on a signature deck, then tape two three-strip paper pictures onto alternate faces. Move your viewing side to favour one picture set. This is a real assembled open-slat craft kit, **not seamless lenticular optics**, not a digital game and not a re-export of the source. Paper, removable tape and filament-compatible adhesive required. Physical viewing effect untested.

## Reference-first provenance

Local STL collections were searched first and the actual `keycap_generator2/public/templates/clicker_template2.stl` and `fidget_fabric_generator/public/templates/diamond-link.stl` parsed. These contain switch interfaces and an 8 mm interlocking link rather than suitable sheet-card joints. Their measured dimensions, components and SHA-256 hashes are in `reference-measurements.json`. Their READMEs and local Kit Card Studio instructions were inspected. Reference trees and the old daily_app tree remain read-only.

The actual **White Cat Kit Card**, Mike Kasberg, [repository](https://github.com/mkasberg/white-cat-kit-card), Printables 865769, was downloaded, parsed and sectioned during this run. License **CC BY 4.0**, [terms](https://creativecommons.org/licenses/by/4.0/) in `REFERENCE-LICENSE.txt`. Download URL in `reference-analysis.json`. Binary STL SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles, **179.820 × 178.020 × 3.190 mm**, 27 edge-adjacent components, not watertight. STL contains no units; mm assumed from sheet scale and source instructions.

`reference-inspect.py` independently parses the actual reference with trimesh/numpy and plots Z=.1/.5/1.59 mm mesh sections, inspected in `evidence/reference-sections.png`. Measured **1.6 mm sheet, 4.5 × 1.700012 mm socket loops, low runners at .21/.22 mm**. Source README, license and `kit_frame.scad` were also retrieved and inspected. These map to six 4.5 mm tongues and receiving sockets `(4.5+fit) × (sheet+fit)`, rotated ±45° in the deck. Proposed .15 mm TOTAL allowance differs from the measured .10 mm sheet-side gap and requires printer/material calibration. Deck thickened to 2–2.6 mm, runners to .4–.6 mm, relative to source. No raw third-party mesh or cat artwork redistributed; source defects were not silently repaired. This is original CSG reconstruction, not claimed mechanical equivalence.

Original features: alternating oblique picture faces, three separated V ridges, six rotated through-sockets, signature deck and seven-part/28-runner carrier. The image needs paper strip fitting, not a texture pretending to be exported geometry. Deck personalization is separately real Boolean engraving. Reference dimensional mapping and deviations recorded in `reference-analysis.json`.

## Maker studio / run

Fresh React + Vite scaffold, individual npm installs, no copied Git history or dependency tree. Generic studio/import/export infrastructure adapted from sibling `20261031-23`; facet geometry, assembly transforms, carrier and fit probes are original. Read-only Keycap Studio README, styles, App, Viewer, worker, imageTrace, STL parser and export modules informed the concrete studio patterns: 374 px LEFT controls, sticky compact header, collapsible sections, paired mm sliders/numeric inputs, lavender-grey/white/coral palette, keycap-like raised/pressed buttons, locally bundled Fredoka/Rubik, checkerboard cutout, RIGHT orbit/zoom/fit viewer with export below. Phones show preview/export first, then stacked controls. Saved dark theme, visible focus, >=44 px touch targets, reduced-motion support.

Three model-thumbnail presets: **Pocket reveal, Wide panorama, Low facets**. Square/soft/clipped deck silhouettes, bounded variation, text and six searchable vector icons, local PNG/JPEG/SVG and ASCII/binary STL import. No APIs, paid services, keys, CDN generation or file uploads.

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
node browser-test.cjs
node studio-test.cjs
```

Production test URL `http://127.0.0.1:5625/daily-app2/20261031-24/`; `SERVE_ROOT` can select combined deploy output. Per-app scripts exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`; publication uses ROOT combined `deploy/` flow.

Dependencies: React, Three.js/OrbitControls, Manifold3D WASM (Apache 2.0), fflate, bundled Fontsource Fredoka/Rubik (SIL OFL); Vite, Playwright and gh-pages. All processing browser-local. Synthetic sample fixtures in `public/samples`; no personal files stored in repository.

## Parameters / assembly

All lengths in **millimeters**, rotations explicitly degrees.

| Control | Range |
|---|---|
| Connected carrier width × height |130–150 ×150–172|
| Ridge pitch / facet height / face width |26–30 /24–32 /12–14|
| Deck / facet sheet thickness |2–2.6 /1.6–2|
| Socket TOTAL allowance |.10–.30|
| Part spacing |3–4|
| Runner width / thickness |.8–1.4 /.4–.6|
| Art footprint / engraving depth |4–7 /.4–.6|
| Art rotation / X / Y |±180° /±1.5 /±2|

Deck width `3*pitch+8`, length 46 mm; default **92 ×46**. Connected card default **138 ×160 ×2.4**. One Boolean-unioned solid holds all seven parts. Flat de-tabbed individual STLs omit tabs, all start on Z=0. Panel tongues retain 4.5 mm source interface width and default 1.6 mm sheet. Shoulders are above a tongue of depth exactly deck thickness, ending flush underneath after seating. Facet faces are real solid 13 ×28 mm rectangles by default.

Three ridge centres X=−pitch/0/+pitch. Panel centres X=`ridge ± (facet*sqrt(.5)/2+1.8)`, Y=29. Angles +45/−45°. All six have independently clear insertion paths from above. Deliberate gaps prevent panel corner collision: worst supported inter-ridge gap >1.18 mm, paired apex gap remains >2 mm. These are fixed bonded seats, not moving joints or positive snaps. No switch sockets, fake motion or universal tolerance claim.

### Numbered print and assembly steps

Facet & Reveal — seven-part alternating-face display kit card.
1. Print bed-flat at 100% mm scale in PLA/PETG, .16–.20 mm layers, three walls. Seven parts and 28 accessible runners are real Boolean-connected geometry. No supports intended. Print one clean facet and deck first to calibrate. No physical print, assembly or optical testing has occurred.
2. Snip all 28 low runners 1.6 mm outside each part outline; trim nubs. Never cut tongues or deck sockets. Clean individual STLs omit runners. Small parts: adult craft assembly.
3. Seat facets 1–6 vertically in deck sockets from left to right. Alternate +45 / -45 degree faces. Each 4.5 mm tongue passes through the deck with its shoulder on top and tip flush underneath. Sockets (4.5+fit) × (sheet+fit); .15 mm TOTAL default allowance is a proposed printer/material-dependent starting value, not universal or snap retention. Bond all six FIXED seats with filament-compatible adhesive and cure fully.
4. Prepare two paper pictures, each THREE strips of width equal to Facet width and height equal to Panel height (defaults 13 × 28 mm). Cut each picture into thirds in left-to-right order. Tape picture A strips to facets 1,3,5 and picture B strips to 2,4,6, with TOP at the free panel edge. Paper, removable tape and adhesive REQUIRED. For a first trial use A letters on odd facets and B letters on even facets. Leave tongue and shoulder clear.
5. View from above deck level while moving your head left/right, approximately 45 degrees toward the two face-normal directions. Alternating faces favour one paper-strip set over the other; this is an open slat display, NOT seamless lenticular optics. Gaps and partial visibility remain. Three separated ridges intentionally avoid touching sheet corners; no printed motion or optical isolation guarantee. Use a handheld or tabletop viewing trial to adjust paper crops; no physical visual performance tested.
6. Protected front deck patch: PNG/JPEG/simple SVG -> 20 × 20 sampled silhouette/grayscale engraving; bright holes remain unengraved on continuous backing, depth .4–.6 mm and backing >=1.4 mm. This is 2D-to-relief, not full 3D reconstruction. Exact accepted ASCII/binary STL solid is Boolean-subtracted, never hulled. STL import supports one outward closed convex broad-flat-footprint solid <=1,500 triangles; unsupported concave/hollow/open/nonmanifold/overhanging input rejects. Confirm mm units. All processing local. STL stores neither units nor colours.
7. Design reference: White Cat Kit Card, Mike Kasberg, https://github.com/mkasberg/white-cat-kit-card , CC BY 4.0 https://creativecommons.org/licenses/by/4.0/ . Measured 1.6 mm sheet, 4.5 × 1.700012 mm sockets and low runners inform an original reconstruction. Six diagonal facets, staggered sockets, deck and 28-runner carrier are new geometry. No raw source or cat artwork redistributed. Computational geometry checks do not constitute physical print/assembly/optics testing.

## Image import → real printable engraving

Phone/desktop file picker and desktop drag/drop. PNG/JPEG header/content validation:16 bytes–2 MB, <=12 MP and6000 px side; normalize to <=500 px. Simple SVG supports <=2000 local shapes/paths with no external resources/scripts/effects/text, locally rasterized to256 px. Replace/remove/reset and synthetic samples provided. Original source plus actual cutout shown.

Exact method: raster fit-whole or fill/crop with ±25% pan; composite transparent pixels on selected light/dark background; sample **20 ×20 luminance grid** (`.2126R+.7152G+.0722B`). Threshold1–254 to binary depths, or inverse luminance to continuous .4–.6 mm depths. Triangulate a closed interpolated heightfield cutter and Boolean-subtract from the front-deck patch. Physical footprint, rotation, placement and depth change exported geometry. Bright holes remain **unengraved on a continuous backing**; ring-hole/backing probes verify actual solid. Fine detail is quantized, not exact vector tracing. This is **2D-to-relief, not full3D reconstruction from one photo**. Text/icons use the same real geometry pipeline. Raised styles are intentionally unsupported to keep this bed-flat protected surface.

## STL import → exact mesh integration

ASCII and binary STL <=2 MB /1500 triangles; explicit source mm confirmation (STL has no units). Show actual oriented source dimensions, format/count and source3D preview. Z-up, Y-up or upside down; changing up axis detaches the source and requests reattachment. XY scale proportional to physical footprint, separate Z fit to engraving depth, rotation, XY placement, centre/reset, replace/remove. Original accepted mesh is transformed and Boolean-subtracted into the deck, not merely shown or re-exported. Source0.2–250 mm per axis; bounded patch radius6.5 mm, >=1.4 mm backing and generous separation from all sockets. Invalid transforms block export.

Supported contract is intentionally **one convex broad-flat-footprint closed solid without overhangs**. Verify finite vertices, nondegenerate triangles, closed welded edge incidence, opposite winding, positive component volume, self-intersection and support/convexity constraints. Concave/hollow/open/nonmanifold/disconnected/overly complex/unsupported meshes reject with actionable errors. No hull substitution, discarded concavities or hidden repair. Reorient or simplify a source externally rather than expecting arbitrary STL repair. All selected files process locally; no personal files are committed.

## Live results, views, persistence and export

Heavy CSG and source checks run in a Web Worker with locally bundled WASM, bounded geometry,100 ms debounce, request IDs and current-state keys. Loading/build/success/error state; conversion/import/pending/invalid/worker errors disable ALL exports. Last-good preview may remain labelled, but cannot silently export when current edits are invalid. Binary STL uses the exact current preview solid; a mesh fingerprint is compared to actual downloads and Node regeneration.

Views: connected card, de-tabbed print layout, assembled kit, exploded and seven isolated parts, orbit/touch zoom/fit and see-through solids. All views use the same underlying geometry. Exploded spacing is explanatory only; no printed moving joint or optical simulation is implied. Export always uses actual bed-flat printable solids. STL has geometry, neither units nor preview colour. Per-part buttons and Everything ZIP include8 STLs (card + 7 clean parts) plus numbered assembly/print instructions; not mislabeled3MF.

Undo/redo35 states, reset, six locally named designs and portable JSON save/open. Bounded normalized PNG or exact accepted mesh payloads round-trip; missing assets explicitly request reattachment and block export. JSON <=2 MB, PNG portable <=500 px. Files stay in local browser memory unless user saves a design to localStorage or downloadsJSON; storage-full gives a JSON alternative.

## Validation / limits

`npm test`: independent binary STL length/finite/bounds/unit normals/nondegenerate faces, welded 1e−5 mm exactly two opposite-directed faces per undirected edge, adjacency and positive volume per component. All presets, silhouettes, combined min/max and every field endpoint; image/mesh imports get the same full tests. Manifold intersections independently test 21 assembled pairs, six upward insertion/removal paths, rotated empty sockets plus occupied tongues, intact paper-face rectangles, carrier bounds, 28 safe snips -> eight components, loose-part separation and bed-supported cross-sections.

Production-browser scripts exercise real PNG/JPEG/ASCII/binary file-picker imports and actual STL downloads. Actual bytes are fingerprint-compared to UI/current JSON and exact Node regeneration; geometry changes under changed pixels, threshold/depth, crop, source scale/rotation/placement. Recoverable malformed/truncated/open/nonmanifold/concave/excessive/bad dimensions/empty/invalid transforms; replace/remove/reset; all per-part STL and ZIP contents, text/six icons/SVG, white-hole and backing Boolean probes, both alternative STL up axes, saved designs/portable JSON, undo/redo, all views, dark/focus/collapsibles/reduced motion, aborted worker/recovery and immediate stale-export gating. 320/390 px touch orbit/pinch, no overflow and reachable exports. Reproducible scripts, reports and screenshots accompany app; `VALIDATION.md` records actual results.

**Computational and browser checks only. No physical print, assembly, paper-strip viewing, optical performance, adhesive strength or durability tests performed.** Printed tolerances, tape/paper thickness and real viewing crops require trial fabrication. The separated open faces can show both images in part; no seamless optical isolation, animation or resolution claim.
