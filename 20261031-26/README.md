# Stitch & Stretch

A browser-only React + Vite **four-part lace-up fabric sampler frame** kit-card generator. Two pierced upright rails and two horizontal shouldered ties form a small, fixed-span craft frame. Lace reinforced fabric edges to the upper eyes with soft thread. This is neither a printed clamp nor a knitting/braiding loom.

**Physical printing, assembly, fabric tension and fatigue have not been tested.** Use light hand tension only. Fabric, soft thread, a blunt needle and filament-compatible adhesive are required; none is exported.

## Run

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
node browser-test.cjs
node studio-test.cjs
```

Production base: `/daily-app2/20261031-26/`. The production test server uses localhost:5627 under that prefix. Per-app scripts are exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`. Publish the combined site using the **parent monorepo** predeploy/deploy flow.

## Reference-first evidence

Inspected local candidates first, read-only: Keycap Studio README, styles, App, Viewer, worker, STL parser/serializer, image trace and export modules; Fabric Fidget Studio README and actual diamond-link STL. Switch cavities and interlocking links were unsuitable sheet-card references. Their measured dimensions, hashes and component counts are in `reference-measurements.json`.

Public reference: **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The source README, LICENSE and actual binary STL were downloaded and inspected. SHA-256:

```
5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff
```

The mesh has 30,616 triangles, measures approximately **179.820 × 178.020 × 3.190 mm**, and has 27 edge-adjacent components. It is not watertight. Units are assumed millimeters, consistent with source sheet dimensions; STL has no unit metadata. It was **not repaired or redistributed**.

`reference-inspect.py` parses that external mesh plus two local candidates. The measurements file records bounds, component counts, Z-plane populations and actual socket loops. `evidence/reference-sections.png` shows mesh sections at Z = 0.1, 0.5 and 1.59 mm. Measured source sheet: **1.6 mm**; socket: **4.5 × 1.700012 mm**; low runner planes: **0.21/0.22 mm**.

`reference-analysis.json` maps source measurements to the new design. The 4.5 mm interface width and 1.6 mm sheet inform four through-sockets and shouldered ties. **Proposed** 0.15 mm total fit allowance is adjustable 0.1–0.3 mm; it is not the measured source gap of approximately 0.100012 mm. Rails are redesigned at 2–2.6 mm and runners at 0.4–0.6 mm thick. Lacing rails, eye arrays, fixed fabric span, signature extensions, four-bay carrier and 16 removable runners are original geometry, not the source cat/artwork. No reference Git history, dependency tree or raw mesh is bundled.

## Parameters

All lengths are **millimeters**; eye count is dimensionless.

| Parameter | Supported range |
| --- | --- |
| Connected card | 120–136 × 132–148 |
| Working rail length; signature extension | 76–84; additional 14 |
| Rail height / thickness | 20–26 / 2–2.6 |
| Clear fabric span | 40–52 |
| Tie sheet / shoulder width | 1.6–2 / 12 |
| Tongue width / depth | 4.5 / current rail thickness |
| Total socket allowance | 0.1–0.3 |
| Part spacing | 3–4 |
| Runner width / thickness | 0.8–1.4 / 0.4–0.6 |
| Eyes per rail / diameter | 6–8 whole eyes / 2–2.6 |

Some mixed combinations require a taller card. Impossible packing is explicitly blocked. Three real presets, three ergonomic profiles and bounded variation change actual parts. Each preset thumbnail is generated from its own model. Minimum top eye ligament is 2.7 mm; socket floor ligament is at least 3.85 mm. The protected engraving keeps at least 1.4 mm backing and stays clear of all eyes and sockets. Ties have 12 mm shoulders; runners never attach to the 4.5 mm tongues.

## Image and SVG workflow

File picker works on desktop and phone; drag/drop accepts one source. PNG and JPEG content headers are checked before decode: **2 MB, 12 megapixels, 6,000 px per side** maximum. Images normalize to at most 500 px. Fit/cover, ±25% crop pan, light/transparent background removal or dark-background inversion, threshold 1–254 and grayscale relief are available.

The exact method is a **20 × 20 sampled luminance heightfield**, triangulated with closed sidewalls and bottom, then Boolean-subtracted from each rail signature extension. Engraving depth is 0.4–0.6 mm. Bright holes remain unengraved islands on continuous solid backing. A checkerboard displays the actual converted grid. This is sampled **2D-to-relief**, not exact contour tracing or full 3D reconstruction from one photograph.

Simple SVG filled paths/shapes rasterize locally before the same conversion. Scripts, external references, foreign elements and effects are rejected; text must be flattened. Text marks (up to eight characters) and six searchable bundled icons use this pipeline. Only engraving is offered: raised decoration is deliberately unsupported to preserve a flat print face and protected interfaces.

Synthetic sample files and attribution are in `public/samples/`. Try buttons fetch only the locally hosted bundled fixtures. No personal input files are stored in the repository.

## STL workflow

ASCII and binary STL: **2 MB, 1,500 triangles, 0.2–250 mm per axis** maximum. The parser checks finite coordinates, nondegenerate triangles, welded edge incidence at 0.00001 mm, opposite winding, one closed connected positive-volume solid and triangle-pair self-intersections.

This deliberately bounded integration supports **outward convex solids with broad flat bottoms and no overhanging footprint**. Concave, hollow, multibody, open, nonmanifold, self-intersecting and unsupported meshes are rejected with guidance. A bottom convex hull is used only for a rejection test, **never to replace input geometry**. No automatic repair is claimed.

Select Z-up, Y-up or upside-down before attaching. Changing axis detaches the source and requests reattachment. Source preview, dimensions, format, triangle count and explicit **millimeter confirmation** are shown: STL stores no units. The exact mesh becomes a Boolean engraving cutter, not an unchanged re-export. Proportional XY footprint is 4–7 mm, independent Z depth 0.4–0.6 mm, rotation ±180°, X offset ±1.5 mm and Y offset ±2 mm. Scale factors are displayed. Safe-zone violations block export. Replace/remove/reset return to working defaults.

## Saved designs, privacy and responsiveness

All file processing stays on this device. No uploads, backend, API key, paid service or CDN dependency. Fonts, JavaScript and WASM are locally bundled. Portable JSON includes bounded normalized PNG and mesh payloads; missing/invalid assets request reattachment, never pretend restoration. JSON limit: 2 MB; normalized PNG data URL limit: 1.8 million characters; mesh limit: 1,500 triangles. Six named local designs and 35 history snapshots support undo/redo.

Heavy generation and STL validation run in a bundled Manifold Web Worker. Edits debounce 100 ms; request IDs and a current-state key block stale exports. Invalid edits, pending conversion, unconfirmed units, import errors and worker failures disable every STL/ZIP button. Last-good previews are clearly labelled when current geometry is invalid. Light/dark theme persists locally.

The maker studio uses concrete Keycap Studio patterns: 374 px left rail, compact sticky brand header, collapsible sections, paired sliders/numeric millimeter inputs, tactile pressed controls, checkerboard import previews, large right gradient viewer, current-result status and preview-first stacked phone layout. Keyboard focus, reduced motion, touch orbit/pinch and reachable exports are checked.

## Views and export

Connected card, assembled, exploded, de-tabbed print layout and individual-part views share the same underlying meshes. Translucent cloth/thread guides and exploded displacement explain assembly only; they are **not exported**. All STL exports use real bed-flat print orientation.

Binary STL buttons export the card or each of four clean parts. Everything ZIP contains all five STLs plus numbered assembly/print notes. Print the card **or** clean parts, not duplicate copies of both. STL contains neither colors nor unit metadata. No 3MF option is claimed.

Preview and export share the exact current indexed meshes. The UI exposes the fingerprint of the selected STL; browser tests compare actual downloaded bytes against that fingerprint, displayed dimensions and regeneration from the same saved JSON.

## Print and assemble

1. Print PLA/PETG, 0.16–0.20 mm layers, three walls, 100% millimeter scale, bed-flat. No supports intended. Trial-print a rail and tie to calibrate fit first.
2. Snip all 16 runners at least 1.6 mm outside part edges. Trim nubs without damaging tongues or eyes.
3. Stand rails with eyes up. Thread both ties through one rail until shoulders meet its inner face. Slide the second rail onto the two opposite free tongues. No trapped or elastic assembly is required.
4. Check rail parallelism, bond all four fixed clearance seats with compatible adhesive, and cure. These are **not snaps** and the span is not adjustable after bonding.
5. Reinforce fabric edges, drape across the upper rail edges and lace center-out, alternating sides, with soft thread and a blunt needle. Use only gentle hand tension. Stop if rails bow, joints loosen or fabric tears.

Small parts; supervise needle use. This is a light craft frame, not load-bearing or certified embroidery equipment.

## Validation and dependencies

`validate.mjs` independently parses actual binary STL: finite triangles, stored normals, nondegeneracy, welded closed edges, per-component positive volume, winding and millimeter bounds. It checks the card, every part, presets, profiles, parameter extremes and imports. Kernel tests verify assembly pair separation, insertion paths, containment in the connected carrier, release into four parts after 16 cuts, through-eyes, declared card bounds and upper sections supported by the bed footprint. A 0.002 mm³ containment tolerance accounts for float32 reconstruction, not intentional clearance.

Playwright exercises real PNG/JPEG/ASCII-STL/binary-STL file picks and downloads, thresholds, transforms, invalid files, ZIP contents, text/icons/SVG, portable assets, missing payloads, themes, undo/redo, stale-result gating, worker failure recovery and 320/390 px touch layouts. See `VALIDATION.md` and machine-readable reports for actual results.

These are **computational geometry and browser checks**, not tests of physical printing, glue strength, fabric tension, fatigue or craft quality.

Dependencies: React, Vite, Three.js/OrbitControls, Manifold 3D WASM, fflate, Fontsource Fredoka/Rubik, gh-pages; Playwright for verification. Refer to package licenses and `REFERENCE-LICENSE.txt`.
