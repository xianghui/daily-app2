# Quarter & Weft

A parametric **five-part single-tablet weaving kit card**. Snip twenty real breakaway runners, seat two pierced anchor panels in a personalized deck, thread four soft warp cords through a turning tablet, and pass weft with the separate hollow shuttle. Quarter-turn the tablet between passes; reverse after four turns to limit accumulated twist. This is a short, single-tablet narrow-band/cord demonstrator, not a full loom, automatic weaving machine, or simulated textile.

Requires four flexible **0.4–0.6 mm warp cords**, roughly250–350 mm long, matching weft, trial-tension tape, and adhesive for the stationary anchor tongues. No bearings, magnets or metal hardware. The tablet has no rigid axle: tied external cords suspend it, and untied cords release it. Physical printing, thread friction, weaving performance, strength and durability have **not** been tested.

## Run and dependencies

`npm install`, `npm run dev`; `npm run predeploy` builds the production bundle. Required per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Actual combined publication uses the parent monorepo deploy folder, **not** the individual deploy script. Base `/daily-app2/20261030-22/`.

React + Vite, Three.js/OrbitControls, Manifold WASM in a dedicated worker, fflate ZIP, bundled Fontsource Fredoka/Rubik fonts. No server, API key, paid service, CDN or remote runtime assets. Bounded mesh resolution,100ms debounce, request IDs and current-state keys keep edits responsive and exports current. Preview and STL use identical generated mesh arrays. Invalid/busy edits disable export rather than silently exporting a stale last-good mesh.

## Reference-first evidence and attribution

Read-only local candidates were searched before selecting geometry. Parsed `keycap_generator2/public/templates/clicker_template2.stl` and `fidget_fabric_generator/public/templates/diamond-link.stl`; their three-part switch tooling and interlinked thick rings do not supply a bed-flat sheet/socket carrier. Dimensions/hashes and rejection reasons are in `reference-measurements.json`. Their project README/instructions were inspected, alongside spring and slider candidates.

Downloaded and parsed **White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY4.0**. See `source-README.md`, `source-LICENSE.txt`, `reference-analysis.json`, `reference-measurements.json`, `reference-inspect.py`, and `evidence/reference-sections.png`.

- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Actual binary STL,30,616 triangles,179.819997 ×178.019994 ×3.1899996 mm. STL has no units; mm assumed and corroborated by source sheet dimensions.
-27 edge-adjacent components, **not watertight**. It is a design reference, not a repaired/re-exported base. No raw source mesh is redistributed.
- Inspected actual sections Z=.1,.5,1.59 mm: default sheet planes0/1.6 mm, socket loops4.5 ×1.700012 mm, low carrier levels.21/.22 mm.
- Default1.6 mm sheet is preserved. Tongue4.4 + total clearance.10 reconstructs a4.5 ×1.7 socket. Default.15/.10–.35 range are **proposed printer/material-dependent calibration**, not measured universal fit. Exposed1.8–2 mm sheet,2–2.8 mm deck, and.4–.6 mm runners are strengthened redesigns.
- New structure is an original four-cord single-tablet assembly: four source-fit sockets, two four-eyed anchor panels, a four-eyed rotating tablet and a hollow thread shuttle. No ship geometry or switch sockets. Conservative full-turn envelope remains above the deck and away from anchors. This differs from earlier rigid-heddle, loom, winding-bobbin and optical kits through the actual rotating warp tablet and changing shed.

Visual reference: read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` README, styles, App, Viewer, worker, export, imageTrace and STL modules. Concrete adapted studio patterns:374px scrollable left rail, sticky compact brand/theme header, paired sliders/numbers, labelled collapsible sections, raised tactile coral selections, cutout/source comparisons, exact-result export gating, saved dark theme, bundled rounded fonts, preview-first phone stack. Reused local studio/import/export/test infrastructure from earlier generated apps; all weaving-kit solids, placements and mechanism tests are new.

## Parameters (millimeters)

| Parameter | Supported range |
|---|---|
| Card width / height |240–260 each; large bed |
| Deck length / width |104–112 /44 |
| Tablet width |26–34 |
| Tablet axis above deck |30–36 |
| Four-eye square pitch |14–20 |
| Thread eye diameter |2.4–3.2 |
| Sheet thickness |1.6–2 |
| Deck thickness |2–2.8 |
| Tongue width / total socket allowance |4.4–6 /.10–.35 |
| Carrier spacing |3.5–5 |
| Runner width / thickness |.8–1.4 /.4–.6 |
| Badge footprint / engraving depth |4–7 /.4–.6 |
| Art X / Y / Z rotation |±1.5 /±2 /±180°; additional safe-zone check |

Socket = tongue width + total allowance by sheet thickness + total allowance. Shoulder stops prevent panels passing through. Minimum tablet eye wall1.2 mm is enforced. Conservative deck/sweep clearance = axis rise−sqrt(2)×tablet width/2, at least5.95 mm over supported mixed extremes. Actual rigid-part intersections are checked across360°. This does not establish strength, friction or cord tension.

Three real presets with generated thumbnails, three deck silhouettes, mechanically bounded variation, undo/redo, six named local designs and portable JSON save/open. Both image and mesh payloads survive supported round trips. Missing image payloads explicitly require file reattachment; unsupported/corrupt payloads block export. Reset returns to original built-in geometry. STL contains no preview colors.

## Local image / SVG workflow

Native file picker works on desktop/phones; desktop drag/drop also supported. Actual PNG/JPEG files16 bytes–2 MB, up to12 megapixels and6000px side; header checked before decoding, then normalized to500px maximum. Restricted simple SVG accepts up to2000 shapes, rejects external resources/scripts/effects/text, rasterizes locally to256px. Original synthetic public fixtures in `public/samples/` exercise PNG, JPEG, ring SVG with a hole, ASCII STL and binary STL. No personal inputs are stored in the repository.

Image conversion is **sampled 2D-to-relief/silhouette engraving**, not exact vector tracing or automatic full3D reconstruction from a photo. Fit/contain or fill/crop, crop shift±25%, remove light/transparent background or dark inversion, threshold1–254 or grayscale height, physical scale, rotation, placement and.4–.6 mm depth. A20×20 height grid becomes a closed triangulated cutter, then robustly Boolean-subtracts from the isolated near-end deck badge. Bright holes remain unengraved on continuous backing; actual Boolean probes test this. Source image and exact sampled cutout appear on checkerboards. Image pixels, threshold and depth measurably change exported geometry. Text and six searchable bundled icons use the same real geometry pipeline. Raised art is intentionally unsupported to maintain the flat-card print contract.

## Local STL workflow

Both ASCII/binary STL ≤2 MB and1500 triangles; each oriented axis.2–250 mm. Explicit mm confirmation is required because STL stores no unit metadata. Z/Y/−Z up, proportional XY footprint scale, independent Z engraving-depth normalization, Z rotation, centering and XY placement. Source dimensions, format, triangles, transform scales and original3D mesh are visible. Axis changes deliberately clear the source and request reattachment.

Input checks: exact binary length/complete ASCII facets, finite coordinates, nondegenerate faces, opposite-directed welded edges, single connected positive-volume solid, self-intersection, convexity and broad supported bottom footprint. Open/nonmanifold/concave/hollow/overhung/branched/complex meshes are rejected with recoverable guidance; no automatic repair is claimed. Convexity is a **supported-input restriction, not a convex-hull replacement**. Accepted exact vertices/faces become a Manifold Boolean cutter in the deck. Scale/rotation/placement changes survive into real downloads. Safe-zone and backing checks keep imported geometry away from sockets and cords; cuts cannot pass through the deck. Minimum backing1.4 mm. Source and final previews remain distinct.

All user-file processing is local; no uploads or external services. Normalized bounded image/mesh payloads are included in JSON/local storage, not file paths. Keep originals independently.

## Assembly and printing

Print at100% mm, broad faces on Z=0, PLA/PETG, .16–.20 mm layers, three walls as starting guidance, not tested profiles. No supports intended; inspect slicer first layers and thin runners. Use per-part exports on small beds. Print deck and one anchor as a fit calibration pair before the full card. Do not globally rescale assembled fits in the slicer.

1. Snip20 accessible runners1.6 mm outside part edges; trim nubs without harming sockets/eyes/tongues.
2. Dry-fit both shouldered anchor panels into the paired deck sockets. Calibrate allowance by.05 mm steps; then bond only fixed tongues.
3. Pass each warp cord through corresponding near-anchor/tablet/far-anchor corner eyes at zero turn. Tie near ends outside panel. Tape or loosely tie far ends and hand-adjust tension so strands and tablet move freely. No rigid axle or hidden printed cord.
4. Hold tablet midspan, making two high/two low warp strands. Wind a small weft supply around the shuttle window. Pass shuttle through the shed by hand, turn tablet90°, return the weft and snug the braid using fingers. Guide loose strands and tablet by hand; this small kit has no tension control, beat comb or hands-free shed guarantee.
5. After four turns, reverse four to reduce accumulated twist. Untie/re-tension far ends as needed. Deck length limits the short sample braid. Thread friction, shed stability, pattern quality and textile output are untested.
6. Tablet pose preview is illustrative; drawn curved cord centerlines show estimated routing only and are **not exported plastic or a cloth/tension/collision simulation**. Tablet may translate/lift on real flexible cords. Shuttle is parked outside the warp field in assembly view and is manually passed through the shed. Untie cords to remove tablet.

Full numbered instructions and current fits are embedded in-app and `ASSEMBLY.txt` inside Everything ZIP. Connected card, de-tabbed parts, assembled/exploded kit and isolated views share the same geometry. Every export is bed-flat: connected-card STL plus five individual STLs; ZIP has all six STLs and assembly notes. No false3MF or stored STL-color claims.

## Reproducible checks

`npm test` → `validate.mjs`: independent binary-STL size, finite normal/vertices, nondegenerate faces, consistent winding, positive volume **per connected component**,1e-5mm welded edge incidence, millimeter bounds and expected components. Every worker result additionally validates final mesh closure and winding.

`collisionCheck` uses the modeling kernel to check every assembled rigid pair through360°, four socket gauges, shoulder stops, vertical anchor insertion, tablet loading, twelve clear thread eyes, disjoint flat parts, declared card envelope,20 safe cuts releasing five parts+frame, and upper slices inside the first-layer footprint. Tests are geometric, not physical weaving/stress/friction/printing tests.

`import-extremes.mjs` repeats mesh and mechanism checks for PNG-style threshold/grayscale and exact imported-STL outputs through presets, shapes and parameter limits. `hole-check.mjs` checks actual Boolean image-hole preservation. `browser-test.cjs` uses production-base-path file pickers and actual downloads for PNG/JPEG/ASCII/binary imports, malformed/truncated/open/nonmanifold/unsupported/overlarge/empty inputs, reset/replace/remove and transforms. Downloads are hashed against preview geometry and regenerated JSON state. It also validates phone uploads/downloads,320/390px overflow, touch orbit and pinch.

`studio-test.cjs`: presets, shapes, text/icons/SVG, portable image/mesh JSON, named reload, undo/redo, parsed ZIP contents, every view, theme/focus/collapsible sections,374px desktop rail, preview-first320px phone, reduced motion, aborted worker and recovery. `axis-test.cjs` verifies actual oriented file imports. Saved JSON reports/screenshots document executed checks; no physical print testing is implied.
