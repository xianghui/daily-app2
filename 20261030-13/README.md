# Loop & Horn

A **three-piece lucet braiding kit-card generator**: a two-horn fork, perpendicular socketed palm handle, and loose yarn-threading pick. Lift alternate figure-eight yarn loops over the horns to draw a square cord through the circular exit eye. Horn width/opening/length, eye, handle, connector, fit, sheet, carrier and runners are actual geometry parameters. This is a physical craft kit, not a game, switch clone or automatic knitting simulation.

**External consumables: smooth yarn and suitable craft adhesive.** The handle is shoulder-supported but NOT positively locked: adhesive is required after a calibrated dry fit. No physical print, yarn, adhesive-strength, fatigue or assembly-force tests were performed.

## Reference-first evidence

Local STLs were searched before geometry selection. Keycap Studio's three-component switch template and Fabric Studio's interlocking link were parsed and rejected as unsuitable flat-sheet references; their project README instructions were inspected. Fresh measurements/hashes are in `reference-measurements.json`.

Selected public reference: **White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. README/LICENSE were read and the actual binary STL downloaded and parsed this run. License retained in `reference-LICENSE.txt`; the raw STL is not redistributed.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; **179.820 × 178.020 × 3.190 mm**; 27 edge-adjacent components; source is not watertight. Used as a design reference, not silently repaired.
- Actual mesh sections at Z=.10/.50/1.59 mm are rendered in `evidence/reference-sections.png`. Source sheet planes are 0/1.6 mm; rectangular socket loops measure **4.5 × 1.700012 mm**. STL has no units: millimeters are assumed, corroborated by sheet/interface scale.
- Generator mapping: preserve a **1.6 mm tongue/pick thickness**, start tongue width at 4.4 mm, and form a socket `(tongueWidth + allowance) × (1.6 + allowance)`. At .10 mm total allowance it reproduces the measured 4.5 × 1.7 mm section. **Default .15 mm is a proposed FDM allowance**, not a measured source clearance or universal fit.
- Source low .21/.22 mm features informed bed-flat breakaways; these are redesigned as .4–.6 mm thick accessible side runners, away from joints and cord paths. Body/grip thickness deliberately increases to 2–2.8 mm. The bed-aligned thin tongue avoids a floating first layer; its offset is reflected in the assembled pose. The fork, horns, circular eye, shouldered tongue, palm engraving landing, pick and three-bay carrier are original reconstructions. No ship geometry or source defects are copied.

`reference-analysis.json` records the concrete mappings and deviations; `reference-inspect.py` reproduces measurements using trimesh/numpy/matplotlib with the separately downloaded source in `/tmp/lucet-reference.stl`.

Visual/interaction reference: read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`. Inspected README, styles, App, Viewer, worker, export, imageTrace and STL parser. Adopted concrete maker patterns: **374 px scrollable left rail**, compact sticky theme/brand, lavender-grey desk, white panels, coral tactile key controls, paired numeric/slider mm fields, collapsible sections, checkerboard conversion, explicit STL units/source preview, saved designs, worker result gating, and preview-first phone stacking. Reused bounded local studio/import/export infrastructure from `20261030-12`; the entire kit, fit, construction, presets and mechanical checks are new. No reference Git history or dependency tree was copied.

## Run / reproducible validation

```sh
npm install
npm run dev
npm test
node hole-check.mjs
node import-extremes.mjs
npm run predeploy
node serve-production.cjs  # actual production base, port 5493
node browser-test.cjs
node studio-test.cjs
node axis-test.cjs
```

React + Vite, base `/daily-app2/20261030-13/`. Per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public hosting uses the ROOT monorepo deploy flow, not the individual script. Dependencies are locally bundled: React, Three.js, Manifold WASM, fflate, Fredoka/Rubik. No server, CDN, API key, paid service or network generation. React/Three/fflate MIT; Manifold Apache-2.0; fonts SIL OFL 1.1; six original SVG marks and synthetic sample fixtures.

A debounced worker performs Boolean solids and final mesh checks. Request IDs and an exact settings/source/transform key reject stale responses. Invalid edits, pending conversion/units, malformed files or worker errors disable every STL/ZIP action. Last-good previews are explicitly labelled, never silently exported. Preview/export use the same current mesh; the UI signature is checked against downloaded STL and a separate Node rebuild from the saved JSON.

## Parameters (all lengths mm)

| Control | Supported range |
|---|---|
| Card width / height | 140–180 / 100–130 |
| Fork width / height | 28–40 / 42–58 |
| Palm handle length | 48–64; width fixed 32 |
| Between-horn opening / horn length | 10–18 / 18–28 |
| Cord exit diameter | 5–8 |
| Tongue width / thickness | 4.4–6 / measured fixed 1.6 |
| Total socket allowance | .10–.35, not per-side |
| Body/grip thickness; insertion depth | 2–2.8; tongue ends flush beneath handle |
| Part spacing | 3.5–5 |
| Runner width / thickness | .8–1.4 / .4–.6 |

Each horn must remain ≥5 mm wide; the eye bridge must remain ≥5 mm; minimum backing is 1.4 mm at the smallest sheet/largest engraving. Invalid combined settings are blocked. All-minimum/all-maximum combinations and each independent extreme are checked, not assumed compatible. Three real presets have generated 3D thumbnails; three bevel silhouettes alter the printable fork and handle. Undo/redo, bounded variation, reset, six named local designs and versioned JSON are functional.

Default connected card: **160 × 115 × 2.4 mm**, one closed component containing frame, two carrier rails, **twelve real low runners and all three parts**. De-tabbed pieces are three independent closed solids. Cutting the twelve indicated runners releases three pieces plus carrier without cutting a functional interface. No loose-parts-only layout is called a kit card.

## Local image / legend workflow

Choose or drag/drop PNG/JPEG/simple SVG; file pickers work on phones. PNG/JPEG signatures/dimensions are checked before decode: **16 bytes–2 MB, ≤12 MP, ≤6,000 px/side**. Sources normalize to ≤500 px, then sample a **20 × 20 height grid**. SVG accepts only self-contained simple paths/shapes, ≤2,000 elements, rejects scripts/external references/effects/text, and rasterizes locally to 256 px. Six searchable icons and up to eight text characters use the same image pipeline.

Conversion composites transparency against a chosen light/dark background, samples luminance, optionally inverts dark backgrounds, and supports threshold 1–254 or grayscale relief. Fit/cover crop, ±25% crop shift, **4–7 mm footprint, .4–.6 mm depth, Z rotation ±180°, X±1.5/Y±2 mm** are real settings. A closed triangulated height-field tool is Boolean-subtracted from the palm handle. **2D-to-engraved relief, not full 3D reconstruction, exact vector tracing or a preview texture.** Bright holes stay uncut on continuous backing; actual solid probes verify this. Checkerboard shows the sampled foreground, not just a rectangular original. Art must remain inside a 6.5 mm-radius protected landing at handle Y=−length/4, remote from the socket/shoulders/yarn. Empty images, out-of-zone marks and invalid transforms block export. Fine details can blur with nozzle size. Raised marks deliberately unsupported to keep the palm smooth.

## Local STL integration

Accepts ASCII/binary `.stl`, **≤2 MB, ≤1,500 triangles, .2–250 mm per source axis**. Shows oriented dimensions, format, triangle count and source preview; the user explicitly confirms millimeter coordinates because STL has no unit metadata. Z/Y/−Z up rotates the real vertices; changing axis clears the source and explicitly requires reattachment. XY scales proportionally to a 4–7 mm footprint; independent Z scales to .4–.6 mm engraving depth. Center/reset, rotate, place, replace/remove and returning to defaults work.

The actual transformed/inverted triangles become a **Boolean cavity in the palm grip**, not an unchanged re-export or a convex-hull substitute. Deliberately bounded input contract: one outward-wound closed **convex** solid, broad flat bottom, no XY footprint overhang. Checks cover finite facets, complete content, limits, 1e-5 mm welded manifold edge incidence/winding, one connected component, positive volume, triangle self-intersections, convexity and bottom contact. Concave/hollow/disconnected/open/nonmanifold/unsupported meshes are explicitly rejected with guidance; no arbitrary repair claim. A bottom hull only validates footprint containment and never replaces source geometry. Final backing and assembly checks apply equally to image/STL-derived models.

## Privacy / saved designs

All personal file processing stays locally in the browser; no uploads or external services. Only synthetic fixtures are in the repository. JSON/named designs carry bounded normalized pixel/original mesh payloads; restored meshes are revalidated. Missing image payloads request reattachment rather than pretending to restore a file. JSON is limited to 2 MB; six local saves, 35 history states. Source files are not saved to the repository. Sample `mark.png`, `waves.jpg`, `ring.svg`, `wedge-ascii.stl` and `gem-binary.stl` are synthetic try-it fixtures.

## Views / print / assembly / export

Assembled, exploded, connected card, de-tabbed plate, isolated parts and see-through views share the same solids. Fork lift 0–20 mm illustrates axial insertion, not yarn mechanics. The pick is a loose tool offset alongside the assembly. Orbit/zoom/fit and touch/pinch work. Preview colours do not imply STL colour; no fake 3MF export.

Prominent binary STL downloads include connected card, each clean part, and Everything ZIP with **all four STLs plus numbered ASSEMBLY.txt/current fits**. Exports rest at Z=0, in print orientation. Check bed size, print flat at 100% mm in PLA/PETG, .16–.20 mm layers, three walls, no supports intended. Snip twelve low runners, trim nubs and sand yarn edges. Dry-fit fork/handle before applying a small amount of compatible adhesive in the tongue/socket only; cure fully. Yarn ≤1.5 mm is a starting point, not a universal specification. Thread tail through the round eye, wrap a loose figure-eight around both horns, lift lower loops alternately over upper strands/horns, and draw cord gently. The pick guides yarn but is not a structural retained part. Do not pull hard or lever thin horns; stop to smooth snags.

## Validation scope

`validation-report.json`: three presets, three silhouettes, coordinated min/max and every independent field extreme; image threshold/relief/depth and ASCII/binary mesh transforms; each final float32 binary STL has finite coordinates, nondegenerate faces, normalized winding-consistent normals, welded edges with exactly two opposite incidents, positive volume per intended component and expected millimeter dimensions. Manifold CSG builds real unions/differences, not overlapping shells. Independent kernel intersections check 21 axial insertion positions, nonintersecting parts, actual socket passage, shoulder support, flush tongue, open horn/eye paths, backing, card envelope and twelve safe snips. Thirty-two cross-section/bed-footprint checks per configuration guard against floating first layers. Additional actual rectangular-shaft probes verify that the pick passes the round cord eye at default/minimum/maximum. The snipped card has exactly four components (three parts + carrier).

Browser reports record **real file-picker imports and downloaded STL bytes**, comparing geometry changes against no-import output, threshold/depth/pixels, scale/rotation/placement and reset. Each downloaded import is rebuilt from JSON and gets the same mesh/assembly checks. Malformed/truncated/open/nonmanifold/concave/oversized/empty inputs and bad dimensions/transforms block exports and recover. Tests cover all presets, text/icons/SVG holes, named saves/reload, portable JSON and missing payloads, undo/redo, views, actual per-part/ZIP downloads, worker abort/recovery, saved dark theme/focus/collapse, desktop left rail, touch orbit/pinch and 320/390 px phones without horizontal overflow. Production-prefix tests cover worker/WASM paths; root gallery scripts and combined deployment are separately checked.

These are **computational geometry/assembly checks, not physical print, adhesive strength, yarn tension, braiding performance, fatigue or safety certification**. Print a calibration pair, smooth edges, and adjust to your printer/material before use.
