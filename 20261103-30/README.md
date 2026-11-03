# Routh & Cross

A browser-only, parametric **nine-part kit-card** for exploring Routh’s theorem with three physically separate, layered pivot arms. Snip the real carrier runners, glue two calibrated feet to the upright triangle board, and fasten the arms using external M3 hardware. This is a new assembly, not a keycap clone, general-purpose mesh viewer or unchanged STL re-export.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite; Three.js OrbitControls; Manifold-3D WASM solid booleans in a module Web Worker; fflate ZIP; locally bundled Fredoka/Rubik fonts. No runtime CDN, API key, account, backend or paid service. `vite.config.js` uses `/daily-app2/20261103-30/`. Individual scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`; public monorepo publication uses the ROOT deploy flow, not this individual deploy command.

## Actual reference and design decisions

Local candidates were found and parsed FIRST, read-only: Keycap Studio’s `clicker_template2.stl` (three switch parts, 15.2×15.2×43.1 mm) and Fidget Fabric’s `diamond-link.stl` (one 7.98×9.24×8-mm link). Neither is a suitable flat sheet-and-socket kit reference. We then downloaded and parsed **White Cat Kit Card**, Mike Kasberg, Printables 865769, https://github.com/mkasberg/white-cat-kit-card . Its upstream license is **CC BY 4.0**, https://creativecommons.org/licenses/by/4.0/ ; see REFERENCE-LICENSE.txt and REFERENCE-UPSTREAM.md. No endorsement or source mesh redistribution.

Source SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Binary STL, 30,616 triangles, 179.820×178.020×3.190 mm. STL has no units; millimeters are inferred and corroborated by upstream `thickness=1.6`. There are 27 edge-adjacent components and nonwatertight artifacts; this is not presented as a repaired or directly printable source. Read-only measurements and three measured mesh cross-sections are in `reference-measurements.json`, `reference-analysis.json`, `evidence/reference-sections.png`; reproduce with `reference-measure.py` (Python trimesh/numpy/scipy/networkx/matplotlib).

**Measured:** sheet planes 0/1.60 mm, rectangular socket loops 4.50×1.700 mm, thin runner tops 0.21/0.22 mm. **Adapted:** sheet defaults and two board/foot joints retain the measured 4.50-mm tongue axis; new slots add 0.10–0.30 mm TOTAL printer-dependent clearance to 4.50 and actual sheet thickness. The original cat model’s clips/art are not copied. The carrier and thicker 0.4–0.6-mm runners are redesigned. The new triangle, three cevians, layered M3 pivots, spacers and target rings are an original parametric reconstruction, using real Manifold unions/subtractions, never a source convex hull. Reference defects do not propagate into this independent geometry.

The visual/interaction reference was inspected read-only at `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: README.md, styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts. Concrete patterns: 374px scrollable left rail, sticky small brand, tactile raised selections, paired numeric/sliders, collapsible sections, checkerboard cutout, saved dark theme, large right viewer, phone preview-first stack, worker/current-result gated export. Shared studio import/export infrastructure was adapted from an existing local Daily App studio; the model and assembly validation are newly implemented. No dependency tree or Git history was copied from the reference.

## Parametric model and supported units

All physical dimensions are **mm**. Card width 180–240; height 300–380. Triangle baseline 80–110; altitude 60–85. Cyclic division ratio r=0.4–2.5 (dimensionless). Sheet 1.6–2.4; independent arm-plane gap 0.8–1.2; M3 bore allowance 0.2–0.5 TOTAL diameter; card part spacing 3–5; breakaway width 0.8–1.2, thickness 0.4–0.6; foot socket clearance 0.10–0.30 TOTAL each axis. Source-derived tongue width remains 4.50. Unsupported combinations or card envelopes are rejected.

Targets obey BD/DC=CE/EA=AF/FB=r. The three arm lengths and target ring positions are recomputed from actual vertex/target coordinates. The central centerline triangle’s area fraction is `(r−1)^2/(r²+r+1)`: zero at r=1, 1/7 at r=2. Finite arm widths and layered parallax are disclosed; look normal to the face through centerline windows. This is not an accuracy-rated measuring instrument. Three model-preview presets, multiple real apron chamfers, bounded variations, undo/redo, six named local saves and portable JSON are implemented.

## Image / SVG / text workflow

File picker on desktop/phone or one-file drag/drop accepts **actual PNG/JPEG** content; simple local SVG shapes are sanitized and rasterized. Six searchable bundled original icons and up-to-eight-character text use the same conversion workflow. Source and actual checkerboard conversion are shown. This is **2D-to-heightfield relief**, not reconstruction of a complete 3D object from a single photo, nor an exact vector trace.

Files ≤2MB; PNG/JPEG ≤12MP and 6000px side; header checked before decoding, normalized to ≤500px. The local 20×20 luminance grid supports contain/cover crop, X/Y pan ±25%, light/transparent-background removal or dark inversion, threshold 1–254 and continuous grayscale. Threshold foreground heights or grayscale heights form a closed triangulated volume. We Boolean-subtract it from the board apron, 0.4–0.6-mm deep over ≥1-mm backing. Bright holes stay unengraved, not filled into the foreground. UI explicitly offers engraving only: raised features would defeat the protected sheet envelope. Source pixel changes, threshold, relief depth, crop, physical footprint, placement and rotation alter real exported geometry.

Import footprint 4–7mm; rotation ±180°; X ±1.5mm; Y ±2mm; all must stay within the 6.5-mm-radius protected zone centered at board (0,10). Out-of-bounds transforms block export. Replace/remove/reset and return to built-in defaults are real operations. The raw public reference STL is never bundled.

## STL workflow

ASCII and binary `.stl`, ≤2MB, ≤1500 triangles, one closed, outward-wound connected solid; source axes each 0.2–250mm. Select Z/Y/−Z up before attaching. Source preview, triangle count, format and oriented dimensions shown; explicitly confirm millimeters because STL has no unit metadata. The actual mesh is proportionally scaled in XY to a 4–7mm footprint, independently in Z to a bounded engraving depth; center, rotate, position, reset or replace. It is Boolean-subtracted from the printable board, not merely displayed or re-exported.

Bounded support contract: **convex, broad flat bottom, no overhang footprint**, minimum resulting XY span 1.2mm. Concave/hollow/open/nonmanifold/multi-body/self-intersecting/inward/degenerate/oversized meshes are explicitly rejected with actionable errors; no claimed repair or hidden hull substitution. Rejecting unsupported geometry is deliberate. Original accepted vertices/faces survive as the exact boolean tool. File parsing/topology and solid construction run in the worker.

## Privacy, state and exports

All processing is on-device. Files are never uploaded or sent to services. No personal files are saved into this repository. Only synthetic CC0 fixtures are bundled in `public/samples`. Bounded image/mesh payloads survive JSON and named designs; missing image payloads explicitly request reattachment, never pretend restoration. JSON limit 2MB, normalized image ≤250000 pixels/1.8M data-URL characters, ≤1500-triangle mesh. Do not publish your personal saved JSON unknowingly.

Debounced worker builds use sequence IDs and an exact state key. Preview and export consume the same checked model. Invalid current edits show last-good preview with warning but disable export; no silent stale download. Worker load failure is recoverable by reload. Per-part binary STLs, connected-card STL, de-tabbed layout and Everything ZIP (all ten STL files including carrier + nine clean parts, design JSON and numbered assembly/current fits) are local downloads. Every STL is bed-flat at Z=0; multi-body loose plate intentionally has nine separately closed components. STL cannot store preview colour. Card is one connected boolean solid with **36 real removable runners**, not a loose print plate near a frame. Different spacer heights determine maximum Z, displayed for the selected export.

Assembled/exploded/connected-card/de-tabbed and nine isolated-part views share the same actual solids. Assembled transforms are exact; exploded gaps illustrative. Optional arm offset is preview-only hand-guided ±8° around the target, with no physical hard stops or full-turn clearance claim. External bolt/washer/nut geometry is omitted and not part of exports. Mouse/touch orbit, pinch, zoom and fit are supported.

## Printing, assembly and limitations

Default card 210×330mm: use clean parts on smaller beds. PLA/PETG, 0.4mm nozzle, 0.16–0.20mm layers, ≥3 walls, print flat at 100% scale. No supports intended. Spacer A/B/C heights are `gap`, `sheet+2gap`, `2sheet+3gap`; these are not interchangeable. Snip each runner 1.8mm outside its part, smooth stubs, protect functional sockets/bores/tongues. Dry-fit/calibrate a foot/board tongue and spacer/arm bore pair first. Fits depend on printer/material; no universal tolerance claim.

Glue board tongues into two feet, hold square until cured. Hardware: **3 M3×20mm bolts, 3 M3 locknuts, 6 M3 flat washers**, plus plastic-compatible adhesive for feet. Assume each washer ≤0.6mm, locknut ≤4mm; measure actual stack and ensure thread engagement. Bolts enter from rear; corresponding spacer A/B/C, arm A/B/C, washer and locknut fit from front. Install low arm A first, then B, then C. Lightly snug nuts for manual pivot adjustment; no glue in pivots. Avoid force/pinch points and full-turn moves beyond the checked local neighborhood. No hardware-free retained alternative is claimed; loose unfastened parts can demonstrate geometry only. Small parts are not suitable for children.

Full numbered instructions and current fit data are in the app and ZIP. Mesh/geometry/assembly computations are NOT physical printing, friction, strength, stability or accuracy tests. **No physical print has been performed.**

## Reproducible validation

`npm test` parses float32 binary exports independently: file size, finite vertices/normals, nondegenerate faces, 1e-5-mm welding, exactly two oppositely-directed triangles per edge, every connected component positive volume, dimensions and Z=0. Covers defaults/presets, each parameter endpoint, aggregate min/max, three silhouettes, image threshold/grayscale with holes, exact ASCII/binary imported meshes and transformed imports; every clean STL, connected carrier and nine-component loose plate is checked.

Independent Manifold checks: declared card envelope, bed support footprint, no flat overlaps, one connected card, 36 accessible snips yielding ten components (carrier + nine unharmed parts), assembled pairwise intersections, two source-fit tongue/socket centers, three coaxial pivots/target reaches, five representative arm sweep poses, straight assembly approach paths and mathematical Routh area identity. Browser scripts exercise actual file pickers and downloaded STLs, source changes/transforms/reset, malformed files/empty art, invalid export gating, presets, JSON/named saves, undo/redo, all views, local fonts/theme/focus, worker failure, 320/390px phone overflow and real CDP touch orbit/pinch. See the generated validation JSON and VALIDATION.md for **actually completed** results; this README describes methods, not a claim of physical testing.
