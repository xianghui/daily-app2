# Rake & Ritual — validation record

## Performed computational checks

- Source STL freshly downloaded outside the repository, SHA-256 recorded, 30,616 facets parsed, bounds/components measured, three actual mesh cross-sections inspected. Source facet defects disclosed; no raw source mesh distributed or claimed repaired.
- `npm test`: **26 valid built-in cases + 35 imported-output cases**, each checking the connected card and both individual printable parts. Includes all presets, default/minimum/maximum settings and representative mixed extremes. Four overfull card configurations are explicitly rejected.
- Independent exported binary-STL parser verifies exact byte length, finite coordinates, nonzero face area, normalized stored normals and winding, positive volume of each component, welded edge incidence exactly two with opposite direction, Z=0 print orientation and expected millimeter bounds.
- Kernel checks: one connected card; nonoverlapping card parts; eight cutter paths avoid functional solids; snipping leaves exactly two parts plus carrier; mortise and hanger eye open; tooth count/pitch/spacing real; shoulder stop and flush tongue bottom verified; sampled 0–25 mm straight insertion has zero unintended intersection. Every imported-output case receives the same checks.
- Production browser: **25 downloaded output cases**, real file-picker PNG/JPEG/ASCII-STL/binary-STL imports, source and transform changes, threshold/depth/crop changes, no-import comparison, reset byte-signature recovery. Export bytes equal preview fingerprint and portable JSON regeneration. Ten malformed/excessive/open/nonmanifold/concave fixtures rejected; empty silhouette and invalid settings block export and recover.
- Feature suite: **20 checked feature models** covering every preset, bounded variants, silhouettes, text, icons, SVG, engraved ring, inverted JPEG, portable asset roundtrips and up-axis import. Every actual per-part download and all three ZIP STLs reparsed; assembly instructions present.
- Supplemental suites: six distinct icons change geometry; raised and engraved SVG holes probed in actual final solids; worker-script abort disables export and reload recovers; named image/STL designs restore after reload; missing portable payloads and invalid JSON/transform/dimensions fail recoverably; delayed first image cannot overwrite a newer import.
- Desktop 374 px left rail/right viewer; isolated/exploded/assembled/card/loose views; insertion lift demonstrably changes pose but not printable export; selected/tactile states, focus, collapsible sections, dark-theme persistence and reduced motion verified.
- Phone **320 / 390 px**: preview first, no horizontal overflow, touch orbit/pinch changes canvas, reachable STL exports, real image and STL file imports/downloads. No browser runtime errors or external asset/file-upload requests in app suite.

## Deployment checks

- Individual `npm run predeploy` passes; WASM and worker bundled at real `/daily-app2/20261028-30/` base path.
- Gallery inline script compilation, exact single new STL entry/newest-first, all **240 prior entries** preserved. Browser checks retain all **241 cards**, STL category first, search and recovery without runtime errors.
- Root monorepo `npm run predeploy`: **241 built/copied, 0 failed, 0 skipped**. Combined production-tree import/download suite is run before publication; its results are recorded separately in `combined-browser-validation.json`.

## Not performed / limitations

No physical print, hand force, sand contact, wear, adhesive bond or fatigue test. FDM fit is material/printer-dependent. The fixed joint requires suitable adhesive; it is not a snap or positive lock. No hardware required; sand/tray are not included. Adult craft miniature, not a tool/toy or load-bearing object. Thin relief details are bounded sampled height fields, not full 3D photo reconstruction; bright holes retain solid backing. STL imports deliberately support only one verified convex, flat-bottom, support-free grip; unsupported concavities are rejected, never replaced by hulls. Source meshes stay read-only and user files stay browser-local.
