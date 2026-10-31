# Rise & Meniscus

A local React + Vite studio generating an original **three-part capillary-gap jig kit card**: drained plinth and two paired-channel guides. Snip twelve real runners, seat/bond four guide tongues, then lower two external glass slides into the open channels. Compare the meniscus at different printed slide spacings. This is an educational assembly, not a fidget, calibrated instrument, pump, sealed vessel or fluid simulation.

**External supplies:** two matched smooth-edged 25 × 75 mm glass slides (.8–1.4 mm thick), broad shallow tray, room-temperature water and water-resistant filament-compatible adhesive. Glass/liquid/tray are explicitly omitted from the preview and STL. Do not force glass. No physical print, assembly or capillary experiment was performed.

## Run and deploy

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Vite base `/daily-app2/20261031-17/`. Per-app deploy script is `gh-pages -d dist`; the scheduled publication uses the **root monorepo** predeploy/deploy with `deploy/`, not per-app publication. Dependencies are installed independently, not copied wholesale. React, Three.js/OrbitControls, Manifold WASM, fflate, local Fontsource Fredoka/Rubik; Playwright for reproducible browser checks. No CDN, API, server or paid service is needed by the generated static app. Modern WebGL, Canvas and Web Worker support required.

## Reference-first construction

See [REFERENCE-SOURCE.md](REFERENCE-SOURCE.md), [reference-analysis.json](reference-analysis.json), [reference-measurements.json](reference-measurements.json) and the actual mesh sections in `evidence/reference-sections.png`. White Cat Kit Card / Mike Kasberg / CC BY 4.0 is the inspected public STL design reference after rejecting unsuitable measured local switch/link STLs. Sheet and pierced receiving dimensions map to live fit parameters; glass channels, dual combs and capillary application are original. Source has nonwatertight defects and is used only as measured reference, not repaired/re-exported. No raw reference mesh bundled.

## Real geometry controls (all dimensions mm)

| Parameter | Supported range |
| --- | --- |
| Carrier | 136–150 × 136–154 |
| Plinth | 34–42 × 58–70; thickness 2–2.6 |
| Guide rise above plinth | 18–26 |
| Guide thickness | 1.6–2 |
| Nominal inner glass gap | 1.2–2.4 |
| Glass thickness | .8–1.4 |
| Total receiving allowance | .10–.30 |
| Part spacing | 3.5–5 |
| Breakaway width / thickness | .8–1.4 / .4–.6 |
| Engraving footprint / depth | 4–7 / .4–.6 |
| Engraving X / Y / Z rotation | ±1.5 / ±2 / ±180 degrees |

Two guide planes are 16 mm apart; slide bottom ledges are 7 mm above the plinth. Two 4.5 mm tongues per guide use closed sockets; shoulder contact supports the guide but **adhesive** retains it. Glass channel width is glass thickness + allowance. Actual glass gap can vary nominal ± allowance. The central separator is nominal gap − allowance, >=.9 mm. This is not a universal press fit. Calibrate a small tongue/socket and slide-channel region in your slicer before a full print. Thin glass can be gently shimmed at the OUTER walls only. Three genuine silhouette profiles, three actual mesh presets/thumbnails, bounded randomization, and recessed 5 mm-spaced cheek ticks are printable geometry.

For ideal clean fully wetting glass/water, h≈14.68/gap mm; at 1.5 mm this is 9.8 mm. Actual contact angle, cleanliness, gap play and edge effects matter. The displayed estimate is not a measured result or validated simulation. Tick positions are measured from the shoulder, NOT from water zero. A complete current X/Y/Z print envelope is shown.

## Image / SVG → printable engraving

File picker and drag/drop accept PNG/JPEG/simple SVG. Limits: 16 bytes–2 MB; raster ≤12 MP, ≤6000 px per side; bounded normalization ≤500 px; SVG ≤2000 simple filled elements, no external/active resources/text/effects. PNG and JPEG signatures/dimensions are checked before decode. Synthetic downloadable samples are bundled.

The source image is fit/cropped/panned, light/dark background handled and sampled into an exact **20 × 20 luminance grid**. Threshold or grayscale sets per-vertex cut heights. A closed heightfield is Boolean-subtracted from the rear plinth. The checkerboard shows the actual sampled background removal; source preview is separate. This is 2D-to-relief/silhouette conversion, **not one-photo full-3D reconstruction or exact outline tracing**. White holes remain unengraved on a continuous backing; interpolation softens the coarse grid edges. Depth, threshold, pixel content, scale, XY position and rotation change exported geometry. Text and six searchable original bundled vector icons pass through this same local path. Engraved only: raised marks are intentionally excluded from this flat protected landing. Depth .4–.6 leaves >=1.4 mm backing; radial keep-out checks protect glass/assembly interfaces.

## STL → exact integrated cutter

ASCII and binary STL are parsed and welded at 1e-5 mm. ≤1500 triangles, 2 MB, .2–250 mm per axis. Validate finite coordinates, triangle content/count, topology, outward winding, per-component volume, broad flat bed contact and convex non-overhanging structure. Unsupported concave, hollow, disconnected, open/nonmanifold or overhanging sources are rejected with guidance; no auto-repair or hull substitution. Use a simple solid with a flat broad footprint. The restricted convex workflow is deliberate and clearly disclosed.

Choose Z/Y/−Z up, see original oriented dimensions/mesh, explicitly confirm millimeter units (STL has no unit metadata), set proportional XY footprint, independent Z cut depth, rotation and placement. Original triangles are transformed and robustly Boolean-subtracted from the plinth, not merely displayed/re-exported. Source preview is separate from final preview. Changing axis clears attachment and requests reattachment. Replace/remove/reset work locally; invalid sources block export until recovery. Reset restores the exact builtin output.

## Editing, privacy and exports

Worker-owned Manifold CSG, 100 ms debounce, monotonically checked generation IDs and exact current-state gating keep heavy edits responsive. Preview and export share the same current validated mesh; invalid or pending edits cannot export a last-good result. Final geometry fingerprint is exposed for tests. Worker loading failures are actionable.

Assembled, exploded, connected-card, de-tabbed and isolated views all use the same underlying parts. Orbit, touch pinch/zoom, fit buttons and see-through solids. View positioning never alters printable orientation. Saved light/dark theme, undo/redo, six local named designs and portable JSON roundtrips include bounded normalized image pixels/data or original mesh payloads. Missing image payloads request reattachment rather than pretending restoration. Browser storage can fill; use JSON backup.

All files are processed locally. No uploads or personal inputs are committed. Sources/portable payloads persist **only when you choose local save or JSON download**. Fonts/WASM/dependencies are bundled. STL stores no colour or unit metadata; preview swatches are not multi-colour STL.

Primary STL exports the real one-connected-component carrier, not a loose arrangement. Direct per-part buttons export one clean closed part each; Everything ZIP includes connected-card STL, three de-tabbed STLs and numbered current-fit assembly notes. No fake 3MF. Print all parts on the bed in exported orientation; dimensions and runner clearance are checked. See PRINTING.txt for complete eight-step print/assembly/calibration guidance.

## Verification

Reproducible Node check `npm test` covers defaults, all presets, profiles, all-low/all-high and each field extreme, image/STL-derived variants, rejection bounds, final binary STL size/normals/finite nondegenerate faces, outward winding, closed opposite-directed welded-edge incidence and positive volume for each component. Card bounds and connectivity, twelve accessible cuts, exactly three released parts + frame, bed-support sections, all part-pair intersections, guide assembly paths, external nominal glass insertion at left/center/right slot positions, separator/ledge presence and drain clearance are independently checked with Manifold.

Production-prefix browser scripts: `node browser-test.cjs`, `node studio-test.cjs`, `node axis-test.cjs`, `node personalization-test.cjs`, `node stale-test.cjs`, `node final-production-test.cjs`; run `node serve.mjs` first. Browser file pickers test PNG/JPEG/ASCII/binary sources, real downloaded geometry changes, transform/threshold/depth differences, remove/reset, malformed/nonmanifold/oversized/empty sources, current-preview fingerprint and regenerated portable JSON equality, actual ZIP contents, presets, icons/text/SVG, undo/redo, save/open, all views, saved themes, worker-failure recovery, focus and collapsible sections. Touch-enabled 320/390 px checks verify preview-first layout, no overflow, reachable exports, orbit and pinch. `node hole-check.mjs` probes actual engraved holes/backing. Reports/screenshots accompany source; see VALIDATION.md.

**Computational checks are not physical print, wetting, durability, capillary-rise or calibrated measurement tests.**
