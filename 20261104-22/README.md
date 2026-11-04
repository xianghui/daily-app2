# Königsberg & Seven

A local React + Vite kit-card studio: snip 32 real runners and seat seven removable arch bridges in a four-region river-map deck. Eight printable parts reproduce the Königsberg seven-bridge graph, not an interactive browser game. Every dimensional control changes actual solids. No hardware is required; adhesive is optional for permanent retention.

## Reference-first design and attribution

Inspected local candidates first: the Keycap Studio `clicker_template2.stl` (944 triangles, three components, 15.20 × 15.20 × 43.10 mm assembled source envelope) and the fabric `diamond-link.stl` (5,940 triangles, one component, 7.98 × 9.24 × 8.00 mm). Their MX interface and interlocking fabric joint are not suitable flat-sheet kit references.

Selected **[White Cat Kit Card](https://github.com/mkasberg/white-cat-kit-card)** by **Mike Kasberg**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Upstream README and verified license are included as `REFERENCE-UPSTREAM.md` / `REFERENCE-LICENSE.txt`. Download URL and license hash are in `reference-analysis.json`; raw third-party meshes are not redistributed.

Actual downloaded binary STL SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Its 30,616 triangles occupy 179.820 × 178.020 × 3.190 mm. STL has no units: millimeters are inferred from source instructions and measured sheet/interface sizes. Analysis found 27 edge-adjacent components, including degenerate artifacts; the complete source is **not** claimed manifold or repaired. This is an original parametric reconstruction, not a modified or re-exported source mesh.

Measured cross-sections at Z=.10, .215 and 1.59 mm identify four **4.50 × 1.70 mm sockets**. Source sheet Z=1.60 mm and low runner tops around .21–.22 mm map to these generator decisions:

- Default sheet 1.60 mm; original **4.40 × 1.60 mm tongues** plus **.10 mm total** socket allowance reconstruct the measured 4.50 × 1.70 mm interface. The tongue width and allowance are proposed design decisions, not separately measured source fits.
- Sheet can expand to 2.40 mm; socket short axis follows sheet + clearance. All fourteen sockets are actual Boolean cuts.
- New blind sockets retain a .40 mm floor; tongues project sheet − .60 mm, leaving .20 mm tip clearance. These are original adaptations, not source measurements.
- Runners strengthened to .40–.60 mm thick and .80–1.20 mm wide for proposed FDM use. Four accessible runners per part join a genuine carrier grid; slicing them releases exactly eight parts plus carrier.
- Seven arch spans, paired placements, land labels, river recesses, apron personalization and graph topology are original. This is not a reskin of the source spacecraft or a previous linkage.

`reference-analysis.py` reparses all three actual reference files and creates `reference-analysis.json` plus [representative measured sections](evidence/reference-sections.png). Reference project trees and `/Volumes/ExternalHD/daily_app/` remain read-only.

Visual/interaction reference: read-only `keycap_generator2` README, App, Viewer, styles, worker, image/import and export modules. Concrete patterns adapted: lavender desk, white 374 px left rail, compact sticky brand, raised/pressed key buttons, paired numeric/slider inputs, local fonts, cutout checkerboard, imported source preview/unit gate, saved dark mode, collapsible sections, right viewer and preview-first phone flow. No reference dependencies, Git history, MX socket or switch-template asset was copied.

## Run and build

Node 22.12+ recommended.

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Production base is `/daily-app2/20261104-22/`. Per-app `predeploy` is exactly `npm run build`; `deploy` is exactly `gh-pages -d dist`. Publishing this monorepo uses the root predeploy/deploy flow instead, keeping all gallery entries accessible.

## Parameters (millimeters unless stated)

| Control | Supported range | Actual geometry |
|---|---|---|
| Map width / depth | 82–108 / 70–92 | Bank shapes, river channels, socket locations and arch spans |
| Bridge height | 12–24 | Arch elevation and opening; 3 mm top web, 7 mm legs |
| Part thickness | 1.60–2.40 | Deck, arches and mating socket short axis |
| Socket total clearance | .10–.30 | Both slot dimensions; allowance is total, not per side |
| Card width / height | 200–300 / 280–380 | Actual outside connected-card envelope |
| Part spacing | 3–5 | Carrier bays and accessible runner spans |
| Runner width / thickness | .80–1.20 / .40–.60 | Printable breakaway unions, not visual lines |
| Apron art footprint | 4–7 | Proportional XY footprint |
| Art depth | .40–.60 | Engraving leaves ≥1.00 mm backing |
| Art offset X / Y | ±1.50 / ±2.00 | Protected apron placement; radial keep-in additionally checked |
| Rotation | ±180 degrees | Source engraving orientation |

Three actual assembled-model-thumbnail presets: Classic river, Wide stone and High arches. Soft, angular and scalloped deck silhouettes differ in printable perimeter; river topology stays fixed. All four land regions have odd degree (3, 3, 5, 3): an Euler trail across each bridge once does not exist.

## Local image / SVG workflow

PNG and JPEG content headers are checked **before decoding**: 16 bytes–2 MB, ≤12 MP and ≤6,000 px per side. Normalize the image locally to ≤500 px. Simple SVG shapes/paths are locally rasterized at 256 px after rejecting script, external images, text, styles and unsupported nodes. Bundled text and six original searchable icons use the same bounded geometry path.

Fit/contain or cover/crop, pan ±25%, choose light/transparent or dark background, threshold 1–254 or grayscale relief. A 20 × 20 brightness grid forms a closed piecewise-linear height field with triangulated walls and floor. Threshold gives two levels; grayscale gives proportional depth. It is **2D-to-relief, not full 3D reconstruction from a photo**. Bright/transparent holes retain the full unengraved deck backing; source and actual cutout grid appear on a checkerboard. Fine SVG curves are sampled, not exact vector offsets. Use bold marks: small grid features can be finer than a .4 mm nozzle; inspect slicing or use a finer nozzle for crisp details.

The relief is Boolean-subtracted from the protected TOP apron (outside river and sockets). Placement, scale, rotation, threshold, pixels and depth affect the actual binary STL, never merely a texture. Engraved-only by design: raised marks would change the declared flat sheet envelope. Empty silhouettes and out-of-zone transforms block export; replace/remove/reset recover without reload.

## Local STL workflow

ASCII and binary .stl supported: 40 bytes–2 MB; 1–1,500 complete triangles; .20–250 mm per oriented axis; finite coordinates, positive volume, outward winding, one connected closed component, welded edge incidence, self-intersection and broad flat-bed contact checked. **Only verified convex, flat-bottom source solids are supported for this bounded engraving workflow.** Concave, hollow, disconnected, open, nonmanifold or overhanging input is rejected with guidance; no hull substitution or claimed automatic repair.

Choose Z, Y or −Z up before attachment. Source dimensions, triangle count, format and an interactive source-mesh preview are shown. Explicitly confirm that coordinates mean millimeters (STL contains no unit metadata). XY scales proportionally to the selected footprint, Z scales independently to engraving depth; both factors are displayed. Rotate, center, offset, replace or remove the mesh. The **original triangles** become a valid solid subtracted from river-deck, so source shape and transforms survive into final exports. Concavities are never silently discarded.

Synthetic CC0 fixtures for PNG, JPEG, SVG, ASCII STL and binary STL are in `public/samples/` with provenance. No private user files or raw reference STL are included. User assets stay in browser memory, localStorage or downloaded portable JSON; there are no uploads, API keys, CDNs or remote generation calls.

## State, preview and export

Heavy parsing/Manifold CSG runs in a bundled worker with bounded tessellation, 100 ms debounce, generation IDs and exact state keys. Worker failures show a recoverable reload instruction. Last-good previews are labelled when current state is invalid; every STL/ZIP button stays disabled until the exact current state is valid. Preview and exporter share checked mesh arrays; the UI geometry fingerprint is compared to downloaded float32 STL in tests.

Orbit/zoom/fit, assembled, exploded, flat connected card, clean print plate and isolated-part views use the same underlying parts and correct assembly transforms. Exploded separation is explanatory only. See-through mode and colours are preview-only; STL stores no colour. Export X/Y/Z always refers to the currently selected printable output, not the assembled display.

Undo/redo, up to six named local designs and JSON save/open carry bounded image and original mesh payloads. JSON revalidates source topology; missing image payload explicitly asks for reattachment. No invisible missing-path restoration. Named designs and themes persist locally. Files ≤2 MB; normalized saved image ≤250,000 px and encoded payload ≤1.8 MB.

Prominent binary STL, per-part STL and Everything ZIP include connected-card, deck, seven arches, portable design and numbered `ASSEMBLY.txt`. The connected card and clean eight-part set are alternate print choices. Not 3MF.

## Print, fit and assembly

All parts bed-flat Z=0, .16–.20 mm layers, .4 mm nozzle, PLA/PETG; no supports intended. Default connected card is 240 × 320 × 1.60 mm: use a sufficiently large bed or download clean parts. Socket floors are .40 mm; top engraving has ≥1.00 mm backing. Print river-deck and CD-link first to calibrate slot clearance and extrusion; no tolerance is universal.

Snip all 32 accessible low tabs; trim residual stubs on nonfunctional side edges, not tongue ends or sockets. Use the card map to identify the seven arches. Seat both tongues simultaneously from above, shoulders on deck. AC-west/east join A to C; BC-west/east join B to C; CD is transverse; AD/BD join the east island to the banks. All insert independently, with no trapped assembly order. Slip fits laterally locate but **do not positively capture** the bridges; optional small adhesive dabs provide permanent retention. No hardware or compliant spring elements. Not load-bearing or a toy for young children.

## Validation and dependencies

`validate.mjs` independently parses actual serialized float32 binary STL: length, finite vertices, nonzero triangles, stored unit normals, opposite edge winding after 1e-5 mm welding, exactly two incident triangles per edge, positive volume **per component**, dimensions, Euler characteristic and eight independent print solids. Kernel simplification tolerance is .001 mm, below proposed printable features. It also checks real socket voids/floors, connected-card mouths, backing, overlaps, 56 sampled vertical insertion positions, bed footprints and all 32 cuts yielding carrier + eight undamaged parts. Every preset, silhouette, field extrema, 48 combined dimension corners and image/STL variants pass these same checks; see `geometry-validation.json`.

Browser scripts exercise file pickers, actual downloads, PNG/JPEG pixel/threshold/depth differences, ASCII/binary transforms, rejected malformed inputs, empty art, stale edit gating, all six icons, SVG holes, portable JSON/named saves, undo/redo, ZIP contents, worker abort/recovery, saved dark theme, keyboard focus and 320/390 px touch orbit/pinch and exports. Production output is served under its actual base path, not just Vite dev mode. Reproducible scripts/reports/screenshots live beside the app. `VALIDATION.md` records results.

Dependencies bundled locally: React/ReactDOM (MIT), Vite/plugin (MIT), Three.js (MIT), Manifold WASM (Apache-2.0), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL). gh-pages handles deployment; Playwright is dev-only. Six SVG marks and synthetic fixtures are original reusable assets.

**No physical print, insertion-force, adhesion, strength or dimensional accuracy test has been performed.** Computational manifold/intersection checks are not physical testing.
