# Bend & Compare · beam-comparison kit-card studio

A React + Vite browser generator for a **six-part bed-flat kit card**: one signature base, two notched cradles and three equal-span test strips of different widths. Twenty-four real breakaway runners connect all six parts to a divided carrier. Snip, bond the two cradles into four sheet sockets, cure, then lower each strip into its width-matched lane. Gently compare midpoint response. Strips are **loose, removable and unclamped**, not captive springs. No force simulation, load rating, fatigue life or physical print test is claimed.

## Reference-first evidence

Searched `/Volumes/ExternalHD/3d_printing_apps/` before choosing the geometry; read the local Keycap and Fabric Fidget instructions and parsed their actual switch-template/link STL candidates. Their interfaces are inappropriate for a sheet kit, so used a public reference: **White Cat Kit Card**, Mike Kasberg, [GitHub source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Upstream LICENSE was fetched and retained as REFERENCE-LICENSE.txt. No raw third-party mesh is redistributed.

Freshly downloaded and parsed the actual binary STL before the final geometry design. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; 179.820×178.020×3.190 mm; 27 edge-adjacent components, **not watertight**. STL contains no units; mm is assumed and corroborated by source sheet/socket scale. Source defects are reported, not automatically repaired. Actual cross-sections at Z0.10,0.50,1.59 mm are in `evidence/reference-sections.png`; measured component bounds, planes and socket loops in `reference-measurements.json`; compact provenance/decisions in `reference-analysis.json`. Reproduce with `uv run --with trimesh --with numpy --with matplotlib --with networkx --with scipy python reference-measure.py /path/to/source.stl` (read-only input).

**Measured:** sheet planes Z0/1.60; socket loops 4.50×1.700012 mm; low carrier web levels0.21–0.22 mm. **Proposed reconstruction:** preserve4.50 mm socket length, use `(sheet+total allowance)×4.50` sockets and `(4.50-total allowance)×sheet` shoulder-supported tongues. Allowance0.10–0.30 mm TOTAL, not per side, requires printer/material calibration and adhesive. Proposed runners0.40–0.60 mm are thicker than source webs. All beam/cradle profiles, notches, socket locations, carrier layout and relative-stiffness demonstration are original redesigns, not copies of cat parts. No unchanged source asset export.

Keycap Studio was inspected read-only: README, styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts. Concrete patterns used:374 px scrollable left rail, sticky compact brand/theme header, labelled collapsible groups, raised tactile selected controls, paired mm range/number inputs, white/lavender-grey desk with coral accents, bundled Fredoka/Rubik fonts, saved dark theme, preview-first phone stacking, checkerboard source/cutout, explicit STL units/orientation and current-key worker export gating. Common maker-studio, import and export infrastructure adapted from Daily Object Lab; original assembly, placement, mechanical tests and documentation replaced. No reference project history/dependencies copied wholesale or reference deploy scripts run.

## Run and test

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
# separate terminal, production output at /daily-app2/20261102-3/
node browser-test.cjs
node studio-test.cjs
node orientation-test.cjs
node icons-drop-test.cjs
node phone-views-test.cjs
node stale-test.cjs
node personalization-check.mjs
```

Production test server uses127.0.0.1:5693. Standalone predeploy/build and gh-pages deploy scripts are included; public monorepo publication uses the ROOT deploy folder, not per-app deploy.

## Physical controls · all dimensions in millimeters

Card160–210×190–230; thickness1.6–2.4; support centre span64–82; support height16–24; narrow beam width3.6–5.4, other strips b+2 and b+4; total cradle allowance0.30–0.80; total socket allowance0.10–0.30; part spacing3–5; runner width0.8–1.4/height0.4–0.6. Base110×62; cradles42 mm wide; beam length=span+12, giving6 mm overhang from each support centre. Notches0.8 mm deep, lane centres Y18/30/42. Square, soft-rounded and clipped ergonomic profiles; three real presets with generated thumbnails, bounded variation and reset. Invalid or impossible settings disable exports. Actual export X/Y/Z and assembled height are shown.

Nominal small-deflection simply-supported rectangular-beam stiffness `k≈4 E b t³/L³`. These equal-material/span/thickness strips have nominal stiffness ratios b:(b+2):(b+4). Unknown real E, unequal hand forces, finite support contact, print anisotropy, creep and fatigue limit comparisons. This is **not a calibrated material test**. Begin with under0.5 mm hand displacement; `min(0.8,span/100)` mm is a cautious demonstration guide, NOT a strength guarantee. Stop at whitening, cracks or set. Never use weights or launch objects. PETG preferred; brittle PLA may break. No compliant motion is simulated in preview.

## Personalization and local imports

All user files stay in the browser: no upload, API, keys, external fonts/CDNs or services. Bundled samples are synthetic originals (CC0), not personal files. Desktop/phone file picker, desktop drop, replacement/removal/reset, source previews and final solid preview work. All artwork is confined to radius6.5 mm around base(0,9), separated from sockets; backing≥1 mm and strips/supports are unchanged.

**PNG/JPEG**: header/content verification before decode,16 bytes–2 MB,≤12MP and≤6000 px/side, normalize≤500 px. Simple SVG≤2000 elements,≤6000 px, no scripts/external references/effects/fonts; convert text to paths. Rasterized locally to256 px. Conversion uses a **20×20 sampled closed heightfield**, Boolean-subtracted into the base. Threshold1–254 or grayscale relief, fit/cover crop, ±25% pan, light/transparent background removal or dark inversion, depth0.4–0.6 mm, physical footprint4–7 mm, ±1.5/2 mm placement, rotation±180°. Actual checkerboard mask/height samples are shown. Bright holes remain uncut backing; sub-grid details can disappear and interpolation creates sloped walls. This is 2D-to-relief, **not automatic reconstruction of a full 3D object** or exact outline tracing. Text up to8 characters and six searchable bundled ISC Lucide-path icons use the same real engraving pipeline. Raised art deliberately unsupported to keep declared full-sheet thickness.

**ASCII/binary STL**:≤2MB,≤1500 triangles,source axis dimensions0.2–250 mm. Explicit millimeter confirmation (STL has no unit metadata); source dimensions and format, Z/Y/−Z up-axis before attachment, proportional XY scale to4–7 mm footprint and independent Z scale0.4–0.6 mm engraving depth, rotation/placement, centering/reset. Parse finite vertices, nondegenerate faces, welded edge incidence/opposite winding, one outward closed component, positive volume, self-intersections, convexity, broad flat bed contact and unsupported footprint. Concave/hollow/branched, open/nonmanifold, multiple-shell and unsupported overhang meshes **rejected with actionable guidance**, not silently repaired or substituted by a convex hull. The validation-only bottom footprint hull never replaces the actual mesh. Exact transformed input solid is Boolean-subtracted into the base, so shape/scale/rotation/placement survive into final STL. Return to defaults or replace to recover. No unchanged re-export pretending integration.

## Geometry, editing and export

Bundled Manifold WASM performs real CSG in a Web Worker. Bounded resolution,100 ms debounce, request IDs, settings keys and input-conversion pending states gate exports: a visible last-good preview cannot be exported after invalid/stale edits. UI reports building/ready/errors. Every final part must be one outward closed manifold solid; carrier one connected solid. Preview and export share exact current mesh data/signature. Assembly/exploded/card/de-tabbed/isolated views, see-through base, orbit/touch zoom and fit. Exploded positions illustrate assembly, never fabrication overlaps.

Undo/redo35 states, six named local designs, portable JSON save/open carry bounded image/mesh payloads. Missing payloads request reattachment rather than pretending restoration. Per-part binary STL, real connected card, de-tabbed plate, Everything ZIP (seven STLs + numbered ASSEMBLY.txt). Colours are preview-only; STL has no colour/units. No fake 3MF. React,Vite,Three.js,Manifold(Apache2),fflate,Fontsource Fredoka/Rubik(SIL OFL),Playwright. Dependencies bundled locally.

## Printing and assembly

1. Print bed-flat at100% mm scale, PETG preferred,0.16–0.20 mm layers,3 perimeters; identical strip settings. No supports intended. Print base+one cradle first to calibrate adhesive fits/elephant foot.
2. Snip24 accessible runners1.6 mm outside parts, file nubs without bending strips. Preserve tongues and notches.
3. Lower cradles into four sockets, narrow lanes aligned. Shoulders meet base. Bond square with suitable adhesive and cure.
4. Lower strips into matching notches from above. Strips remain loose/removable, never clamped. Level desk, keep upright. Gently compare and release at midpoint, following the displacement caveats above.

Adhesive required; no switches, magnets, bearings, fasteners or weights. Adult miniature craft, not structural or safety equipment. See ASSEMBLY.txt (same guide in app and ZIP). Computational mesh/fit/insertion checks are distinct from physical validation: **no physical print, assembly, force, deflection, fatigue or strength tests performed**. Actual validation results are in VALIDATION.md and generated JSON reports.
