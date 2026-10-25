# Divergent Drift

A local React/Vite studio for a two-part **double-cone rolling fidget**. Roll a truncated double cone across two rising, diverging rails: the contact moves toward its narrow ends while its axle descends. This differs from a faceted barrel on a flat runway: the conical contact radius and rail separation jointly determine the descending support envelope. Hand-roll gently and reverse; gravity-driven travel is experimental and depends on finish, material, infill and friction. The roller is deliberately lift-removable; catch it at the open ends.

## Run and export

Node 22.12+: `npm install`, `npm run dev`. `npm run predeploy` builds the production app. App base: `/daily-app2/20261025-28/`. Each part has a binary STL button; combined STL lays the two solids separately on the print bed. Everything ZIP contains the two actual STLs and assembly notes. STL contains no preview colours or unit metadata; use **millimeters** at 100% scale. Root monorepo deployment publishes the combined gallery; per-app deployment scripts are present but not used for publication.

## Mechanism and ranges (linear dimensions in mm)

- Palm diameter 22–28; round, hexagonal and oval ergonomic silhouettes.
- Runway length 40–60; floor 2.5–4; rail wall 1.6; rail height above floor 12, increasing by 1–2 along the runway.
- Maximum cone radius 10–12; truncated tip radius 3; each axial half has length `radius + 6`. The one-piece double cone prints upright on a tip with at most 26.6° outward slope from vertical.
- Rail inner half-separation is `4 + allowance + 8*x/length`; allowance 0.30–0.60 shifts the physical rail edges and contact location. It is not a captive bearing clearance. Palm dimple depth 0–0.6.
- At axle X=c, a conical lower surface has radius `r(x)=R-((R-3)/(R+6))*(4+allowance+8*x/L)` at the inner rail edge. Required axle Z is the maximum of `floor+12+rise*x/L+sqrt(r(x)^2-(x-c)^2)` over valid rail positions. A bounded 70-iteration ternary maximization calculates this convex support envelope. The actual polygonal cone lies within this circular envelope.
- The motion preview samples axle positions from 6 to L−6 and adds a fixed 0.20 mm illustrative contact separation. It translates without animating surface rotation and is explicitly not a force or friction simulation. The physical cone settles to contact.
- Mesh intersection tests independently check no unwanted overlap at 41 rolling positions, nominal rail contact and blocked deeper penetration at five positions, monotonic axle descent, vertical release, floor, overhang and palm isolation. Defaults descend approximately 1.7 mm. No claim of autonomous motion or physical testing.
- Palm personalization stays within a 6.5 mm safe radius, more than 15 mm outside the moving envelope. Parts remain separate in assembled, exploded and print views and exported print layout.

## Image-to-fidget

File picker and desktop drop support PNG, JPEG and simple self-contained SVG. Limit 2 MB, 12 megapixels, 6,000 px per side. Validate headers before decode; normalize to at most 500 px. SVG supports simple paths/shapes only (2,000 elements, no scripts, foreign objects, text, linked content or effects); rasterize locally to 256 px.

Conversion uses a **20 × 20 sampled luminance height field** triangulated over a continuous backing, unioned with or subtracted from the palm well. Threshold mode selects dark pixels; grayscale mode maps darkness to height. The checkerboard shows the sampled cutout, not a texture on the final mesh. Bright holes stay unraised/unengraved, as verified with final-solid probes. Edges are sampled/sloped, not exact vector outline tracing. Background inversion, contain/cover fit, crop offsets ±25%, threshold 1–254, raised depth 0.4–3 and engraved depth 0.4–0.6 change exported geometry. This is **2D-to-relief conversion, not full 3D reconstruction from a photograph**.

Physical footprint 4–7, rotation ±180°, X ±1.5 and Y ±2; the safe-zone check rejects out-of-bounds combinations. Text (8 characters) and six searchable built-in marks use the same real geometry path. Original image and exact conversion are previewed; replace, remove, reset image and reset transforms are available.

## STL-to-fidget

Accept ASCII and binary STL, 40 bytes–2 MB, at most 1,500 triangles. Source axis dimensions must each be 0.2–250 mm. Choose Z, Y or negative-Z up before import. Explicit confirmation that source coordinates are millimeters is required because STL has no units. Source 3D preview and dimensions are shown.

This deliberately bounded importer accepts **one closed, consistently outward-wound convex solid with a broad flat bottom**: bottom contact at least 25% of its bounding footprint and all XY projections inside that footprint. Concave, hollow, disconnected, open, nonmanifold, degenerate, inverted, touching/self-intersecting and unsupported overhanging sources are rejected with guidance. It never silently repairs or substitutes a convex hull. Export a simpler flat-bottom solid from your modeler to resolve an unsupported source.

The original accepted mesh is translated to its minimum, scaled proportionally in XY to 4–7 mm footprint and independently in Z to 0.6–5 mm grip height, rotated/placed, then solid-unioned into the palm well. Thin XY profiles below 1.2 mm and disconnected or unsafe unions are blocked. Scale, placement and rotation measurably change the actual exported model. Axis changes request reattachment; reset/remove returns to the useful built-in grip.

## Studio and privacy

Light lavender desktop, white 374 px left controls, pink tactile buttons, local Fredoka/Rubik fonts and saved dark theme follow the read-only Keycap Studio reference. Phone layout puts preview, dimensions and exports before stacked controls. Orbit, pinch zoom, fit, assembled cycle, exploded, isolated parts and actual print layout are included. Three real presets have generated model thumbnails; variations stay within supported bounds.

Generation and STL parsing run in a Web Worker. Debounce, generation IDs and exact current-state keys prevent stale results from being exported. Invalid files/settings disable export while allowing recovery. Preview and downloads use the same checked geometry; a fingerprint is exposed for reproducible verification.

Undo/redo, six named local designs and JSON save/open keep bounded portable mesh/image payloads. Missing image payloads explicitly request reattachment; invalid or oversized designs are rejected. Files are processed **entirely locally in the browser**, never uploaded. Only synthetic fixtures are bundled in `public/samples`; no personal input files are stored in the repository. No API key, cloud service, remote font or CDN is needed.

Dependencies: React, React DOM, Vite, Three.js/OrbitControls, Manifold-3D, fflate, Fontsource Fredoka/Rubik; gh-pages for deployment. Playwright is a development-only browser test dependency. Fonts are SIL OFL, Manifold Apache-2.0, Three.js/React MIT, fflate MIT.

## Print and use

PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, 100% scale; at least three walls and symmetric infill. Runway bed-flat. Cone upright on its truncated 6 mm diameter tip, with a 5 mm brim: maximum growing overhang is under 27° from vertical, so no supports are expected. Verify tip adhesion and inspect the equator; remove strings without changing the rail tops unevenly. No hardware or joining is required.

Place the cone sideways across both rails with the widest equator in the center gap. Roll from narrow to wide end and reverse by hand; lift straight off to reset. Keep the runway horizontal. It is open-ended and not captive; catch the roller before it leaves. Print **Pocket Run** first as a full-size surface/calibration trial. Rail allowance moves contact away from the equator; physical behavior is printer/material dependent. No universal tolerance or guaranteed self-rolling claim. Small loose parts are unsuitable for children.

## Reproducible verification

`npm test` runs independent binary-STL checks (finite triangles, normals, degeneracy, welded edge incidence/direction, positive volume per component, topology, bounding dimensions), parameter corners, presets, both mesh fixtures and image-derived outputs, and 41-position solid-intersection checks of the rolling envelope. Print layout is checked separately after float32 serialization. Cone/rail contact geometry, monotonic axle descent, floor thickness, release and protected import isolation have independent checks.

Serve actual production output with `node serve-test.cjs`, then run `node browser-test.cjs`, `node feature-test.cjs`, `node resilience-test.cjs` and `node hole-test.cjs`. These exercise real file selection, downloaded STL/ZIP bytes, geometry changes, malformed inputs, portable designs, undo/redo, theme/focus/sections, worker failure recovery, 320/390 px phone layouts and real touch orbit/pinch. Reports and screenshots accompany source. See `VALIDATION.md` for observed results.

**No physical print, friction/feel, precision repeatability, wear, fatigue or contact-force test has been performed.** Computational collision and manifold checks do not prove physical print performance.
