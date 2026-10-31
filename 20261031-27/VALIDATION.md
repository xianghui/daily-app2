# Ridge & Rasp — validation record

## Passed computational checks

- Reference: freshly downloaded actual White Cat kit-card STL parsed and SHA-256 recorded; local switch/link candidates parsed. Three actual cross sections plotted and inspected. Source README/license downloaded. Measured 1.6 mm sheet and4.5×1.700012mm sockets mapped to real foot/deck interfaces; source nonwatertightness documented, not repaired or redistributed.
- `npm test`:42 final mesh/assembly cases including all three presets/profiles, combined min/max settings, every field endpoint, threshold/grayscale image models and ASCII/binary imported-model transforms;40 invalid parameter cases rejected. Each case checks connected card plus four clean parts and matching current export.
- Independent binary-STL byte parsing checks nonempty exact length, finite triangles, nondegeneracy, unit normals consistent with winding,0.00001mm welded opposite-directed two-face edges, one positive-volume component per exported solid, expected millimeter bounds and Z=0 print orientation.
- Kernel checks: all four assembled solids pairwise nonintersecting; full deck lowering path over two foot tongues; free scraper clear stroke above crests and real lower contact confined to ridge layer; safe through-sockets; all parts contained in connected card;16 cuts release exactly four parts plus carrier; declared envelope and raised-rib Z extent; upper cross sections through4mm do not extend beyond first-layer footprint.
- Geometry remains responsive in a bundled worker. Production build and real WASM/worker loading passed.

## Passed production-browser checks

`browser-test.cjs` exercised file pickers and27 actual downloaded outputs, parsed their bytes, compared displayed dimensions and UI fingerprints, regenerated the same saved JSON in Node, then ran per-part manifold and assembly checks. PNG/JPEG pixel/threshold/depth/fit changes and ASCII/binary STL shape/scale/rotation/placement changes alter exported geometry versus defaults. Replace/remove/reset and transform resets recover correctly. Unit confirmation gates STL use.

Ten malformed/unsupported file cases rejected: invalid SVG, truncated STL, open STL, nonmanifold STL, excessive file size, fake PNG, excessive pixels, excessive triangle count, excessive dimensions and concave solid. Empty silhouettes, invalid dimensions, empty transforms, unsafe artwork and missing portable payloads also block export and recover.

`studio-test.cjs`: all presets, silhouettes, text/icons/SVG, portable image/mesh JSON and named local storage reload, undo/redo, real ZIP and all five contained STLs, numbered instructions, every view, dark-theme persistence, focus, reduced motion, collapsible sections,374px left rail, preview-first320px layout, worker-script failure/reload recovery.

Additional scripts checked all six icon outputs plus text/SVG through full geometry/assembly tests; light/dark image background conversion; Y-up/upside-down STL reorientation and reattachment; immediate stale-export blocking for rapid parameter/image edits; actual Boolean probes proving a bright central hole stays unengraved, a dark ring removes material and continuous backing remains.

390px and320px phone checks passed: no horizontal overflow, reachable exports, actual PNG/STL uploads/downloads, touch orbit and pinch with changed canvas captures. No browser runtime errors or remote generation requests. Screenshots inspected in `evidence/` include assembled desktop and preview-first phone views.

## Gallery and combined site

Root inline script compiled with Node `new Function`; missing scripts fail. Exactly one newest20261031-27 STL entry; all330 preceding entries compared for exact preservation; STL Generators first; gallery renders/searches without runtime errors. Root predeploy produced331 app directories with0 failed/0 skipped, root gallery and current app assets.

See `*-validation.json`, `validation-report.json`, `reference-analysis.json` and `reference-measurements.json` for reproducible evidence. The full real-import/download browser suite was repeated against the combined deploy folder and passed, with no runtime errors or remote generation requests. All331 entrypoints exist, the deployed gallery matches root index byte-for-byte and current app assets match dist exactly. Public-site checks are recorded separately.

## Explicitly not tested

No physical printing, glue strength, practical assembly, sound, friction, hand force, wear or fatigue testing. Computational geometry does not establish those results. Two fixed seats require adhesive; free scraper is not captive. Calibrate the printer/material-specific socket fit before use. This is a light tactile craft instrument, not a tuned musical instrument or abrasive tool.
