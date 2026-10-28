# Crown & Canopy

A browser-based **four-part miniature tree kit-card generator**. Two branching crowns cross-lap at right angles, with complementary open-top/open-bottom half-slots; two single-slot root feet support the main crown. Customize actual branch tiers, sweep, trunk, canopy edge and proportions. This is a stationary decorative assembly, not a browser game, moving fidget, load-bearing rack or unchanged STL re-export.

## Reference first

Searched local STL collections under `/Volumes/ExternalHD/3d_printing_apps/`, read the local kit-card project instructions, and checked the three kit-card public asset trees: no suitable local kit-card STL exists. Switch sockets, captive sliders and diamond links are inappropriate references for this construction. A public alternative was downloaded and parsed before final geometry implementation:

**White Cat Kit Card**, Mike Kasberg (mkasberg), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**. Repository README, LICENSE and OpenSCAD construction modules were inspected; attribution is also included in exported assembly instructions. No endorsement implied.

Binary STL SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. 30,616 triangles, 179.819997 × 178.019994 × 3.189999 mm, two edge-connected components at 1e-5 mm weld. STL is unitless; millimeters are corroborated by source construction. Source has nonmanifold/coplanar artifacts, so it is **inspection-only**, not repaired, redistributed or exported here.

Fresh mesh sections at Z=0.1, 0.5 and 1.59 mm appear in `reference-sections.svg` / PNG; measured Y=100 rail section spans X=0..1.6 mm. Histogram and source geometry show the 1.6 mm sheet and 0.21–0.22 mm low bridge levels. Full evidence and mapping: `reference-analysis.json`; reproducible parser: `reference-analysis.py /path/to/reference.stl`.

Measured **1.6 mm sheet** remains the default. The source's **1.6 mm carrier** is reinforced to **2.4 mm**. Low source bridges inform redesigned **0.4–0.6 mm snip runners**. The tree artwork, branches, half-laps, foot seats and **0.10–0.35 mm total fit allowance** are proposed original redesigns, not measured source joints. They are tested computationally, not physically. The source's spacecraft artwork is not used. No raw third-party mesh bundled.

## Run and studio design

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
```

Node 22.12+ recommended. React + Vite; base `/daily-app2/20261029-5/`. Per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public combined publication uses the **root monorepo** deploy flow, not the app deploy script. Independently scaffolded with Vite and installed dependencies. First-party import/export/persistence plumbing adapted from prior local studios, with new tree geometry, cross-lap interfaces, foot seats, runner safety and assembly tests. No copied history, dependency tree or reference source files.

Read-only `keycap_generator2` README, styles.css, App.tsx, Viewer.tsx, worker, engine, STL, image tracing and export modules informed concrete maker patterns: 374 px scrollable left control panel, compact sticky header, collapsible sections, paired slider/numeric inputs, tactile pressed buttons, source/cutout previews, imported-model editor, large gradient right viewer and exports below. Phone puts preview/export first, then stacked controls. Fredoka/Rubik fonts and all dependencies/WASM are bundled locally. Saved dark theme, visible keyboard focus, reduced-motion support, touch orbit/pinch and explicit zoom/fit controls.

## Parameters and assembly

All physical lengths are **mm**. Three real mesh-thumbnail presets: Orchard, Broad Oak, Alpine; rounded/chamfered/stepped canopy silhouettes; bounded variation, reset and 35-snapshot undo/redo.

| Parameter | Supported range |
| --- | --- |
| Card width / height | 200–240 / 110–140 |
| Crown spread / tree height | 84–100 / 54–68 |
| Branch tiers / trunk width | integer 2–4 / 16–22 |
| Lower branch taper / rise | 10–20% / 4–12° |
| Foot length / height | 36–48 / fixed 12 |
| Sheet / carrier rail | 1.6–2.4 / fixed 2.4 |
| Total joint allowance | 0.10–0.35, default 0.20 |
| Part spacing | 4–7 |
| Runner width / height | 0.8–1.4 / 0.4–0.6 |
| Dimple depth | 0–0.4 |

Impossible card packing is blocked, not silently scaled. Two crown bays and two root bays connect through sixteen real solid-unioned runners to the carrier. Snip positions account for the whole cutter-width band around sloping branches, not just a center ray. Trim residual nubs flush. De-tabbed meshes exclude runners. Every part and carrier is a closed connected solid. Main root bar is 70% of crown spread; feet are spaced at 50% of spread. Each foot has a 6 mm-high slot floor and 6 mm engagement. Cross-lap cuts extend half tree height with 0.10 mm combined vertical end relief.

1. Print bed-flat, relief upward; PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, three walls. No supports intended. Check card envelope against bed.
2. Adult: snip sixteen runners; trim nubs/elephant foot without damaging branches or slots.
3. Stand root feet parallel, slots upward and separated by half crown spread. Lower main crown into both foot slots to their 6 mm floors.
4. Lower cross crown from above. Its bottom half-slot straddles the main; the main top half-slot receives it. Align root bars at 6 mm above table; use a flat scrap spacer beneath cross crown while fixing.
5. Dry-fit first, then **adhesive-fix all three joints** and cure. No hardware besides adhesive. Slots are open, not captive; stationary decorative miniature only. Do not hang items from it or treat it as structural.
6. Calibrate a foot and crown-bottom strip first. Start with 0.20 mm total allowance; tune by 0.05 mm for printer/material. These are not universal tolerances. Adult craft with small parts, cutters and adhesive; keep from children/pets.

Views share actual part meshes: connected card, de-tabbed flat layout, assembled, exploded, all isolated parts and see-through cross crown. Cross-crown insertion pose moves the actual mesh, but does not change bed-flat exports. There is no fake motion, dynamics or physical simulation.

## Images, SVG, text and icons → real solids

Local PNG/JPEG content signatures and header dimensions checked before decode: ≤2 MB, ≤12 MP, ≤6,000 px side; normalize to ≤500 px. Simple SVG ≤2,000 elements, ≤6,000 px declared side: scripts, external references/resources, text and effects rejected. Supported SVG fills rasterized locally; even-odd holes retained in relief sampling. Synthetic bundled sample fixtures are CC0.

Images are sampled onto an exact **20 × 20 height grid** with contain/cover, ±25% crop shift, light/transparent background removal or dark inversion, threshold 1–254 and grayscale modes. Threshold sets selected samples to depth, others zero; grayscale uses depth × (1−luminance/255). The triangulated closed height surface is **boolean-unioned** into the main crown's recessed 13 mm medallion, or subtracted for engraving. The checkerboard displays the actual converted grid; source and final previews are separate. Bright holes remain unraised/unengraved inside a solid backing: this is **2D-to-relief conversion**, not exact outline tracing, through-hole conversion or automatic 3D reconstruction from a photo.

Text ≤8 characters and six searchable bundled SVG marks use the same conversion path. Raised depth 0.4–3 mm; engraving 0.4–0.6 mm, preserving ≥0.8 mm floor. Footprint 4–7 mm, rotation ±180°, X ±1.5 mm, Y ±2 mm; radial safe-zone guard rejects protrusion. The landing is on the upper-right main canopy, away from all joints. Replace/remove/reset and file-picker imports work on desktop/phone; desktop drag/drop also supported. Pixel content, threshold, depth, scale and placement alter real exported geometry.

## STL → integrated crown grip

ASCII and binary STL ≤2 MB, ≤1,500 triangles, each axis 0.2–250 mm. Explicit confirmation of **millimeter coordinates** required; STL carries no unit metadata. Select Z-up, Y-up or inverted-Z before attaching. Source dimensions, triangle count and a separate 3D source preview are shown. XY scales proportionally into a 4–7 mm footprint; Z independently fits 0.6–3 mm height. Rotation, center/reset and X/Y placement change the fused grip. Original parsed mesh is solid-unioned into the medallion, **never replaced by a convex hull**. A bottom contact hull is used only for validation, not final geometry.

Supported inputs are one outward-facing closed **convex, broad flat-bottom solid with no XY overhangs**. Open, nonmanifold, degenerate, self-intersecting/touching, disconnected, inward, concave, hollow, slender or unsupported meshes are explicitly rejected with corrective guidance; no arbitrary repair claimed. Checks include finite data, content, bounds, welded incidence, face intersections, positive volume, convexity, bottom contact and scaled minimum XY width 1.2 mm. Changing up-axis clears the source and requests reattachment. Unsupported concavities are rejected, never discarded.

## State, privacy, worker and exports

Everything runs locally in browser; no uploads, backend, API/key, external CDN, paid service or personal assets stored in repository. Bounded portable JSON ≤2 MB and six named local designs include image/mesh payloads; restored mesh is revalidated, missing image payload asks for reattachment. Undo/redo retains imported data.

Heavy CSG and mesh validation run in a locally bundled Manifold WASM worker. Debounce and request IDs discard stale responses; exports require the exact current state key. Invalid settings, pending imports, unconfirmed units, conversion errors and worker failure disable export. Last-good preview is labelled; no silent stale export. Preview and export share the current exact valid meshes; UI mesh fingerprint is compared with real downloaded STL bytes and JSON regeneration.

Prominent per-part binary STL buttons and **Everything ZIP** containing connected card, all four parts and numbered `ASSEMBLY.txt`. Useful filenames, millimeter bounds and orientation guidance. STL has geometry only, not preview colours. No fake 3MF. Export does not use assembled overlaps or screenshots.

## Validation and limits

See `VALIDATION.md` and reproducible tests/reports. Independent float32 STL parser checks finite nondegenerate triangles, normalized normals matching winding, expected millimeter bounds, positive volume **per component**, and every edge exactly twice in opposite directions at 1e-5 mm weld. Computational assembly checks cover pairwise collisions, vertical insertion, root floors, lap end stop, lateral guide walls, flat part separation, carrier envelope and sixteen safe snips leaving five components (four parts + carrier). Presets, representative extremes and both image/STL outputs are checked.

**No physical print, strength, friction, stability or adhesive tests performed.** Mesh validity and geometric fit do not establish physical performance. Fine sampled relief may be below printer resolution; use bold marks and calibrate.

Dependencies: React/MIT, Vite/MIT, Three.js/MIT, Manifold/Apache-2.0, fflate/MIT, Fredoka/Rubik/SIL OFL, Playwright/Apache-2.0. Reference attribution above; original synthetic samples CC0.
