# Stereo & Scene — Binocular Kit-Card Studio

A browser-based parametric **five-part stereoscope viewing frame**: twin-aperture ocular panel, rear picture panel, opaque central separator, and two cross-lap feet. The real bed-flat carrier holds all five parts with **20 accessible breakaway tabs**. This is an original optical assembly, not an unchanged spacecraft, keycap, fidget mechanism reskin or loose print-plate arrangement.

**Supply two identical 25 mm positive magnifying lenses (approximately +10 D / 100 mm focal length), removable tape and a paper stereo pair.** Clearance-fit joints are gravity seated, not snap locks; adhesive is optional. Lenses are taped externally, not positively retained by the print. Never look at the sun or intense light through lenses; discontinue uncomfortable viewing. This is not a medical/vision-testing device.

**No physical printing, assembly, lens focus, image fusion or viewing-comfort test was performed.** Computational checks below do not establish those results. Assembled views show geometry, not optical simulation; supplied lenses/paper are omitted.

## Run

Node 22.12+: `npm install`, `npm run dev`, `npm test`, `npm run predeploy`.

React + Vite, Three.js/OrbitControls, Manifold WASM, fflate, locally bundled Fontsource Fredoka/Rubik (SIL OFL). Playwright is used for browser tests. No CDN imports, API, key, server-side modeling, paid service or user-file upload. All file decoding, geometry generation and export happen locally in the browser.

Base: `/daily-app2/20261031-13/`. App scripts: `predeploy: npm run build`; `deploy: gh-pages -d dist`. The publicly combined site uses the root monorepo `predeploy` / `deploy`, not a standalone app deployment.

## Reference-first evidence

Local STL candidates were discovered and inspected first, including Keycap Studio's template and Weave's interlocking link. Their READMEs and actual meshes were inspected read-only; neither provides suitable flat-sheet carrier/assembly dimensions. A publicly licensed reference was freshly downloaded and parsed before final geometry was constructed:

**White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. See [reference-analysis.json](reference-analysis.json), [reference-measurements.json](reference-measurements.json), [actual cross sections](evidence/reference-sections.png), REFERENCE-SOURCE.md and REFERENCE-LICENSE.txt.

- Binary STL, 30,616 triangles, SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Units assumed mm: **179.819997 × 178.019994 × 3.1899996 mm**; STL itself has no units.
- Actual mesh sections at Z .1/.5/1.59 mm; source sheet planes 0/1.6 mm. Four receiving loops measure **4.5 × 1.700012 mm**. Low runner vertices at .21/.22 mm.
- Original contains 27 edge-adjacent components/fragments and is not watertight. It was **not repaired or republished**; only its measured construction informs a new, valid parametric reconstruction.
- Default sheet **1.6 mm**, with **.10 mm total fit allowance** reconstructing the source's 1.7 mm receiving direction. Default **.15 mm allowance is proposed**, not measured or universal. The source's 4.5 mm slot length is **not reused**: complementary cross-laps span the separator/ocular thickness and engage at half panel height. Source low runners are redesigned to .4–.6 mm for FDM access.
- Optical geometry, paired lens apertures, center separator, feet and five-bay carrier are new. No raw third-party STL is bundled; no endorsement implied.

Primary visual/interaction reference `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` was kept read-only. Inspected README, styles, App, Viewer, worker, export, STL parser and imageTrace. Concrete adopted patterns: 374 px left control rail, sticky compact theme/brand header, collapsible sections, slider/numeric pairs, pressed pink keycap buttons, checkerboard import cutout, original mesh editor, worker/current-state export gating, saved dark theme and phone preview-first stack. Independently authored Daily Object Lab import/studio infrastructure reused; product geometry and assembly checks rewritten. No reference Git history or dependency tree copied wholesale. Both existing galleries inspected for previous products/mechanisms.

## Dimensions and real controls

All lengths are **millimeters**; lens rotation is in degrees. Three real silhouettes (square, soft-crown, clipped-crown), three mesh-thumbnail presets (**Pocket stereo**, **Wide window**, **Little theatre**) and mechanically bounded variations.

| Parameter | Supported range |
|---|---|
| Carrier width / height | 248–256 / 180–200 mm |
| Broad panel width / height | 100–108 / 42–48 mm |
| Panel midplane separation | 72–88 mm |
| Lens clear aperture | Ø18–22 mm |
| Lens center separation | 56–64 mm |
| Ocular thickness / other sheet | 3.6–4.2 / 1.6–2.0 mm |
| TOTAL cross-lap allowance | .10–.35 mm |
| Part spacing | 3.5–5 mm |
| Tab width / thickness | .8–1.4 / .4–.6 mm |
| Art footprint / engraving depth | 4–7 / .4–.6 mm |
| Art rotation / placement X/Y | ±180° / ±1.5 / ±2 mm |

Ocular/picture panels have bottom-open slots. Separator has top-open panel slots and bottom-open foot slots; feet have complementary top-open slots. Clearance applies to slot width and the complementary slot meeting plane. Source sheet thickness stays independent of ocular thickness, preserving both relevant fits. No force fit, spring, moving joint or retention claim is fabricated.

The displayed inward image distance is midplane separation minus half the ocular and rear sheet thicknesses (77.3 mm default). Eye axes are at 60% of panel height, 26.4 mm default. External 25 mm lenses overlap the rim by 1.5–3.5 mm radially. Actual lens focal length, eye relief, lens thickness, eyesight and stereo disparity affect comfortable fusion; there is no universal focus setting. Choose and calibrate your lenses/image first. Default synthetic stereo-pair.svg prints at **104 × 44 mm**, with nominal centers 60 mm apart; other dimensions need an appropriately aligned paper pair. Personalization imports do not automatically create stereo images.

## Image → real engraving

PNG/JPEG/simple SVG via file picker (desktop/phone) or drag/drop. Maximum 2 MB, PNG/JPEG ≤12 MP and 6000 px per side, normalized ≤500 px. Actual image header checked before decode. SVG supports simple self-contained paths/shapes, ≤2000 elements; scripts, external resources, text and effects are rejected. SVG rasterizes locally to 256 px.

Documented conversion: light/dark background selection → contain/cover fit and ±25% pan → **20 × 20 grayscale sampling** → threshold silhouette or grayscale depth → triangulated **closed heightfield** → genuine Manifold Boolean subtraction. Source and exact cutout-grid previews are shown on checkerboard. Bright holes remain unengraved on continuous backing; actual Boolean probes verify this. This is bounded **2D-to-relief engraving**, not exact SVG contour tracing or automatic full-3D reconstruction from a photo. Features are sampling-limited.

Engraving is restricted to the central ocular brow, above the joint and between lens bores, within a 6.5 mm safety radius. Maximum .6 mm depth leaves ≥3 mm backing. Text (up to eight characters) and six searchable bundled icons use this same physical conversion. Transform/depth changes affect the exported triangles. Raised art is explicitly unsupported to keep pieces bed-flat, rather than offering a fake selector.

## STL → exact solid integration

Both binary and ASCII STL, ≤1500 triangles / 2 MB; source dimensions .2–250 mm per oriented axis. Source dimensions/format/count and original mesh preview are shown. Explicit mm confirmation required because STL carries no unit metadata. Choose Z, Y or −Z up before attaching; changing axis clears the source and asks for reattachment. XY scale fits a proportional physical footprint; Z separately fits bounded engraving depth. Scale factors are displayed. Rotate/center/place/replace/remove/reset all alter actual output.

Supported input is intentionally bounded: **one outward-wound, closed convex solid with broad flat bed contact and no overhanging XY footprint**. Parser validates content/completeness, finite coordinates, degeneracies, dimensions, welded manifold edges with opposite winding, connectedness, positive volume, triangle intersections, convexity and bed footprint before integration. Open, nonmanifold, concave, hollow, disconnected, inverted, overhanging or excessive inputs are rejected with actionable errors. **No convex-hull replacement and no automatic repair claim.** Use image/SVG for concave marks or simplify your mesh in a local modeler.

The validated original mesh triangles become the exact Boolean engraving cutter, not an unchanged re-export or overlapping shell. Protected-zone and floor checks prevent optical/joint obstruction. Source transforms, depth and shape survive real exports and portable JSON.

## Studio and exports

Debounced worker owns bundled WASM and CSG; input sizes, grid and tessellation are bounded. Increasing request IDs reject stale results; full parameter/source/transform keys gate export. Pending conversion, invalid values, file errors, stale builds and worker failures disable export; last-good preview is explicitly labelled. Preview/export share the exact current mesh fingerprint.

Assembled, exploded, connected-card, de-tabbed and each isolated-part view, see-through, orbit/zoom/fit and touch pinch. No fake motion or optical ray simulation. Phone preview first, then status/exports and stacked controls; no tiny sidebar rail. Saved light/dark toggle, focus indicators, large touch targets and reduced-motion handling.

Undo/redo; up to six local named designs; portable JSON save/open including bounded normalized images and validated mesh payloads. Missing image payload explicitly requests reattachment. Nothing is uploaded or saved into the repository from user input. Bundled examples are synthetic CC0 fixtures only.

Prominent binary STL export for connected card and every clean part; Everything ZIP contains all six STLs plus numbered assembly/current-fit notes. Not a 3MF. All exports bed-flat at Z=0. STL contains no colors or units; use 100% mm import in your slicer. Displayed X/Y/Z reflects the selected actual export, independent of assembly pose.

## Print and assembly

See [PRINTING.txt](PRINTING.txt). Default card 250 × 190 × 3.8 mm; many small printers need the five individual parts. Print PLA/PETG at .16–.20 mm layers, three walls; inspect slicer. Calibrate separator/foot clearance first. Snip twenty low tabs, seat feet from below, lower ocular and rear panel from above, attach two lenses externally, then tape the paper pair to the inward rear face. Slots are gravity-seated and may need optional adhesive; no snap retention promised. Lens/paper/tape are required external supplies. **Physical printability, strength, viewing result and actual assembly fit remain untested.**

## Verification

`npm test` independently parses exported binary STL, checks exact byte count, finite coordinates, normals, nonzero faces, welded opposite edge incidence at **1e−5 mm**, positive enclosed volume per component and expected mm bounds. All parts and connected card, every preset/profile, individual/combined extrema, image threshold/grayscale and transformed ASCII/binary sources. Boolean checks: all ten assembled part pairs, 52 insertion/removal poses, optical bores and center-separator clearance, real-tab connectivity, 20 safe snips releasing exactly five parts plus carrier, separate flat parts and upper sections supported by their bed footprints. Invalid bounds/empty images are blocked.

Reproducible production-browser scripts cover actual file pickers/downloads for PNG/JPEG/ASCII/binary STL; changed pixels, thresholds, relief, crop, scale and placement; malformed/empty/excessive/unsupported inputs; resets; exact mesh fingerprints and Node regeneration from saved JSON; every direct part button and parsed ZIP. Additional scripts cover presets/profiles, text/all icons/SVG, holes, unit/up-axis controls, stale edit guards, undo/redo, local/JSON saves, missing payload, views, theme/focus/collapse/reduced motion, worker failure/recovery and 320/390 px touch orbit/pinch. See VALIDATION.md and generated reports for completed checks. Geometry verification is not physical or optical testing.
