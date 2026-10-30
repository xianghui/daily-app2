# Ramp & Release

A local React + Vite maker studio for a **real four-part inclined-plane kit card**: one ramp with an outboard signature lug, two angled-tongue wedge supports, and a removable round, hex or oval test sled. A Boolean-unioned carrier holds all four parts through **sixteen real breakaway runners**. This is a new inclined-plane assembly, not a reskin of the gallery's reflector, optical screens or rotating fidgets.

**No physical print, assembly, strength or sliding test was performed.** The calculated `tan(angle)` is an ideal static-friction threshold, not a measured coefficient or a prediction that the printed sled will move. The sled is deliberately lift-out, can leave the open lower end, and is not claimed captive. Use on a desk inside a shallow tray; adhesive is required at the four fixed support seats.

## Run / dependencies

Node 22.12+; `npm install`, `npm run dev`. `npm test` runs the model/mesh/assembly checks. `npm run predeploy` builds `dist`; per-app `deploy` is `gh-pages -d dist`, but public monorepo publishing uses the **root** `predeploy` and `deploy` scripts. Base path `/daily-app2/20261031-2/`.

Locally bundled React, Vite, Three.js + OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik. Playwright is a development dependency. No CDN, API key, paid service, backend or remote file processing. Fonts are SIL OFL; Manifold Apache-2.0; original synthetic fixtures CC0. Browser data is processed locally; only deliberately named local saves use localStorage. Portable JSON includes bounded input payloads, not missing machine file paths.

## Reference-first evidence and attribution

Local STL candidates were inspected first, read-only: Keycap Studio's `clicker_template2.stl` (944 triangles, three switch-cut/stem components; 15.200 × 15.200 × 43.100 mm bounds) and Weave's `diamond-link.stl` (5,940 triangles, one 7.981 × 9.241 × 8 mm interlocking link). Their README/instructions and meshes describe switch/link interfaces, not flat sheet/card joints, so neither was substituted as a kit-card reference.

Selected public reference: **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Source README and actual LICENSE were fetched; license text is `reference-LICENSE.txt`. No endorsement implied. Download URL, units, component details and every source hash are in `reference-analysis.json` / `reference-measurements.json`. Raw third-party STL is **not redistributed**. This app is an original parametric reconstruction/adaptation of measured sheet/socket/carrier interfaces, not the spacecraft appearance.

The actual downloaded binary STL SHA-256 is `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`: 30,616 triangles, 179.819997 × 178.019994 × 3.1899996 mm, 27 edge-adjacent components including 25 isolated two-triangle fragments, **not watertight**. Source defects are disclosed; no source repair or source export is claimed. Millimeters are assumed from source sheet dimensions; STL itself contains no unit metadata.

Read-only parse and representative sections at Z=.10, .50, 1.59 mm are reproducible with `reference-inspect.py` (trimesh/numpy/matplotlib; raw mesh in `/tmp/ramp-release-reference.stl`). See `evidence/reference-sections.png`. Measured source sheet planes are Z=0/1.6 mm; four socket loops are **4.5 × 1.700012 mm**. A proposed 4.4 × 1.6 tongue with .10 **total**, not per-side, allowance reconstructs these dimensions. Default .15 and range .10–.35 are deliberate printer-dependent starting fits, not measured universal tolerances. Low carrier planes .21/.22 mm informed runners; this app redesigns them to .4–.6 mm high and .8–1.4 mm wide for handling.

### New geometry / measured-to-designed mapping

- Four parallel ramp slots preserve the reference's rectangular sheet interface. Two source-fit tongues on each support are oriented **normal to the new slope**, not vertically through an inclined slot. Their shoulders match the ramp underside; tips stop .05 mm below its top face.
- New ramp inclination12–24°, along-slope length48–60 mm, lane34–42 mm. Low underside is8 mm above the desk; high underside is `8 + slopeLength*sin(angle)`. Support sheets1.6–2 mm; ramp/sled2.4–3.2 mm. Tongue width4.4–5.2 mm.
- New removable sled nominal diameter12–16 mm with round, six-sided or oval planforms and a shallow top dimple identifying the non-running face. The oval is1.15× nominal in its transverse direction. No equal-mass claim. Center-lane clearance excludes all four sockets. Smooth/deburr the sled's bed-contact underside.
- Four-bay200–230 × 175–200 mm connected carrier,2.4 mm frame,3.5–4 mm part spacing. Sixteen bed-level runners land on nonfunctional flanks. Snip planes1.6 mm outside each part leave four independent usable parts plus the discarded carrier.
- Signature lug at `(slopeLength/2, laneWidth+14)` in flat ramp coordinates is outside the running lane. The accepted import's exact mesh is used as a Boolean engraving cutter; no convex hull modeling substitution, no overlapping shells passed off as a union.

## Studio patterns and controls

Primary visual/interaction reference was read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: README, App.tsx, styles.css, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts inspected. Concrete patterns:374 px scrollable LEFT controls, compact sticky brand/theme header, collapsible labeled sections, paired ranges/mm number fields, tactile raised keys and pink selected states, checkerboard source/cutout, bundled rounded fonts, local saved light/dark theme. Phone preview/view toolbar first, then dimensions/warnings/export and stacked controls; no right parameter rail.

Reusable local maker-studio UI/import/export plumbing was adapted from earlier daily-app2 studios; the mechanism geometry, placements, constraints and assembly checks are newly implemented for this ramp. Three real mesh-thumbnail presets, mechanically bounded variations, six searchable icon marks, text, undo/redo, up to six local named designs and JSON save/open. Text/icon/SVG art uses the image-to-relief path below. All relevant edits alter printable geometry. Preview-only color and sled position are labeled; **STL has no color metadata**.

Heavy Manifold builds and strict STL parsing run in a Web Worker.100 ms debounce, request IDs and exact current-state keys guard stale builds. Invalid values/imports or pending conversion disable every STL/ZIP action; last-good preview is explicitly labeled and cannot be silently exported. Assembled/exploded/individual/connected-card/de-tabbed print layouts use the same current printable parts. Sled position only places the preview along a checked lane, never simulates physics. All export geometry remains bed-flat. Orbit, zoom, fit and touch pinch are supported.

## Image → actual solid engraving

Picker and drag/drop: actual **PNG, JPEG**, or simple SVG. Limits2 MB, raster≤12 MP,≤6,000 px per side; normalize to≤500 px. SVG≤2,000 simple filled shape elements; text/effects/external resources/scripts rejected; rasterized locally to256 px. The UI supplies source preview and checkerboard converted20×20 grid.

Image fit/cover cropping, ±25% pan, light/transparent background removal or dark-background inversion, threshold1–254 or grayscale mode. Grayscale luminance `.2126R+.7152G+.0722B` gives depth proportional to darkness. Threshold sets dark samples to full depth. A closed triangulated sampled height field is Boolean-subtracted from the outboard lug, with .4–.6 mm depth. White/transparent holes remain unengraved with continuous backing; actual Boolean probes verify this. This is **sampled 2D-to-relief, not exact outline tracing and not automatic full 3D reconstruction from one photo**.

Footprint4–7 mm, rotation±180°, X±1.5/Y±2 mm. All cutter vertices must remain within radius6.5 mm, leaving≥1.8 mm solid backing. Empty art, invalid settings and off-zone transforms block exports with actionable recovery. Replace/remove/reset and return to built-in defaults. Raised/cut-through modes are intentionally unsupported on this thin bed-flat part.

## STL → exact Boolean engraving

Picker supports **ASCII and binary** STL,40 bytes–2 MB,≤1,500 triangles; each dimension.2–250 mm. Select Z/Y/negative-Z up before attaching; inspect source dimensions/3D preview and explicitly confirm **mm**. STL contains no units. Changing up axis clears the source and requests reattachment. XY aspect retained, independent Z fitting to.4–.6 mm engraving depth; scale factors, rotation and placement are shown.

Parser checks finite coordinates, nonzero faces, welded edges/opposite winding, one connected component, positive volume, triangle intersections and dimension/complexity limits. Deliberately bounded acceptance: **one convex outward-wound closed solid**, broad flat base≥25% footprint, no XY overhang outside its bottom. Concave, hollow, branched, open/nonmanifold, self-intersecting and unsupported inputs are rejected with guidance; no automatic repair is claimed. Convexity is an acceptance condition, **not hull replacement**. Original accepted triangles are the exact subtraction cutter, measurably changing the generated ramp lug. No raw third-party source model or personal uploads are in the repository. Synthetic PNG/JPEG/SVG/wedge ASCII/gem binary fixtures make every workflow testable offline after loading.

## Print and numbered assembly

Detailed nine-step instructions are in `PRINTING.txt`, visible in the studio and inside Everything ZIP. PLA/PETG, .16–.20 mm layers,three perimeters,100% mm, no supports intended. Print a ramp + one support as your fit trial and compensate elephant foot. Snip16 runners away from functional joints; stand supports parallel, high ends aligned, then lower ramp **normal to slope** into four seats. Dry-fit then bond suitable adhesive; cure fully. No additional hardware needed. Sled intentionally lift-out, not retained: catch it in a tray and keep small parts away from children. Different regenerated inclinations/materials/surface finishes enable friction comparisons; tan(angle) is only the ideal threshold. No physical fit or force guarantee.

Prominent binary STL download, all five per-part/card buttons, Everything ZIP with STLs + numbered instructions/current fit values. Individual parts preserve flat print orientation; a connected-card STL really contains unioned tabs, not loose parts beside a decorative rectangle. No mislabeled3MF or color claims.

## Reproducible validation

- `npm test`:34 built-in cases (presets, silhouettes, combined and individual parameter extrema) plus8 image/STL-derived cases. Independently parses actual float32 binary STL length, finite coordinates, nondegenerate triangles, stored normalized normals/winding, welded edge incidence at1e−5 mm, exactly two opposite incidents, positive volume for each component, mm bounds/bed alignment and per-part connectivity.
- `validate.mjs` separately checks assembly pairs, normal-direction ramp insertion, four socket probes, sled travel and lift-out, lane/edge clearances, packed-part nonintersection,16 safe snips releasing five components, declared card bounds, and40 sampled upper-section/bed-footprint support checks. Clearances are geometrically checked; adhesion, friction and strength are not measured.
- `import-extremes.mjs`:image/STL outputs at combined parameter minima/maxima pass the same full checks. `hole-check.mjs`:actual Boolean hole/engraving/backing probes. `variation-test.cjs`:four real UI variations undergo full model checks.
- `browser-test.cjs`:production PNG/JPEG/ASCII/binary picker imports, actual downloaded bytes, comparison with no-import and setting changes, transform/reset/remove, invalid/truncated/open/nonmanifold/concave/excessive files, empty art, recoverable blocked export, per-part STLs, exact preview/JSON/export signatures,320/390 px overflow and real touch orbit/pinch/import/downloads.
- `studio-test.cjs`:all real presets/silhouettes, text/icons/SVG, ZIP contents independently parsed, portable image/mesh JSON and named-save reload, missing-payload errors, undo/redo, every view, saved dark theme/focus/collapsible sections, worker abort/reload recovery. `axis-test.cjs`:Y-up and −Z reorientation and reattachment.
- Gallery checks compile **every inline script** using `new Function`, retain previous entries exactly and verify one correct newest STL entry; combined output hashes and browser tests verify root deployment layout.

See executed JSON reports, `VALIDATION.md` and screenshots. Computational mesh/assembly checks must not be read as physical-print testing.
