# Validation — Arc & Caustic

Performed on the actual production Vite bundle under `/daily-app2/20261101-8/`; repeat against root `deploy/` before publication. No physical print, film-forming, optical, strength or assembly test performed.

## Geometry and assembly

`npm test` / `validation-report.json`: **44** default/preset/profile/parameter-extreme/import cases, **39** invalid parameter cases rejected. Independently parse float32 binary STL (not just the kernel mesh): exact byte count, finite coordinates, nondegenerate triangles, normalized stored normals matching winding, welded vertices at1e-5 mm, exactly two opposite-direction faces per edge, connected adjacency, positive volume for every component, Euler characteristic, expected millimeter bounds and bed Z=0. All four separately exported products checked: one connected card and three closed connected clean parts.

Kernel checks independently verify no pairwise assembled intersections;26 rib insertion positions clear; all four tongue volumes within slots; shoulders and underside clearance; no print-layout overlap; each part contained in connected card; twelve explicit snips yield four components (carrier plus three parts). Sample upper Z sections have no unsupported XY material beyond the bed footprint. Declared card envelope/thickness checked. Minimum engraving backing>=1.4mm. Both PNG-derived and imported-STL-derived outputs, including simultaneous min/max settings, pass these same checks.

34 parabola material probes per case verify solid below/empty above true quadratic edge, max chord error<.007mm.16 independent analytic specular-reflection calculations hit the ideal focal line; these are mathematical geometry tests, **NOT real optical simulation or measured film performance**. Real mirror film, tape and adhesive are external. Fixed adhesive seats are disclosed, not claimed positive latches.

Bright image hole tested by Boolean probes: center retains backing, dark ring produces actual recess. Every geometry field changes STL fingerprint. Bad dimensions/NaN, empty art, missing mm confirmation, truncated ASCII/binary files reject.

## Production browser

`browser-test.cjs` / `browser-validation.json`: actual file-picker PNG,JPEG,ASCII STL,binary STL; actual download bytes parsed; each download's signature matches the displayed mesh AND Node regeneration from portable JSON, then all part meshes and assembly checks rerun. Pixel/threshold/depth/grayscale/crop/scale differences alter exports. STL footprint,rotation,placement,depth survive export; center/reset and remove restore exact expected geometry. Minimum/maximum controls exercised in browser.

Reject/recover: malformed SVG, truncated STL, open/nonmanifold STL,>2MB, fake PNG, excessive image pixels, excessive triangles, excessive dimensions, concave STL, empty silhouette, nonfinite transform and protected-zone escape. All invalid edits block exports; reset/replace/remove recover. No external file requests or page errors.

Phone390/320px: preview-first layout, reachable controls/downloads,actual PNG/STL import/download, CDP touch orbit and pinch change canvas, no horizontal overflow. Independent `mobile-regression.cjs` checks all five sections,expanded long instructions and real JSON save against actual configured viewport,not a potentially widened layout viewport.

`studio-test.cjs`: all three presets through real STL downloads;three silhouettes;text/icon/SVG geometry;portable image and STL JSON round trips;named designs survive reload;missing asset payload rejects;undo/redo;all views/see-through/fit;ZIP unzipped and EACH contained STL parsed;numbered assembly notes;saved dark theme;keyboard focus;collapsible controls;reduced-motion;desktop374px left panel/right viewer. Intentionally blocked worker script disables export;reload recovers.

`icons-drop-test.cjs`: all six searchable marks affect solids;each generated part and assembly revalidated;actual dropped PNG accepted. `orientation-test.cjs`:Z/Y/−Z explicit unit confirmation and actual mesh dimensions/final solids. `rapid-test.cjs`:late worker cannot enable invalid edit;exact reset;background polarity changes geometry;all four prominent per-part buttons produce actual checked STLs.

## Reference / gallery / release

Reference downloaded and parsed afresh: 30,616 triangles,27 edge-connected source components,179.819997×178.019994×3.189999mm,nonwatertight. Exact hash/measurements/cross-sections in reference files;raw mesh not redistributed. Defective reference is a design reference,not silently repaired. Source/LICENSE independently retrieved. Default1.6mm sheet and4.5mm interface width map to actual generated sockets;proposed allowances/runners differentiated from measurements.

Gallery test compiles every inline script with `new Function`,requires at least one script,checks exactly one new STL entry at correct folder,newest first,STL Generators first,all338 preceding entries byte-preserved,total339.Browser gallery render/search checked without runtime errors. Root predeploy:339 copied,0 failed,0 skipped;all339 declared app pages exist in deploy;root/new app index bytes match sources. Combined production import/download regression recorded in `release-validation.json` before publication. Live release check additionally verifies published app/worker/default STL and339-entry gallery.

Computational success does not establish printer-specific fit,tape adhesion,film stiffness,focus quality,brightness or safety certification. Print a tongue/socket trial,then a small paper-film dry fit before committing mirror film. Never sunlight,lasers or heat.
