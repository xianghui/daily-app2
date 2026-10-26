# Validation — Halfstep Roll (20261027-8)

## Performed computational checks

- Production app build (`npm run predeploy`) passed.
- 68 default/preset/mixed-extreme cases and 35 image/STL-derived cases: independent serialized binary-STL checks, all separate parts, expected dimensions, closed welded edge incidence (1e-5 mm), outward winding, finite nondegenerate triangles and positive volume per connected component.
- Actual CSG intersection samples through full supported motion and vertical disassembly: no unwanted interpenetration, bounded end gaps, drum contact retained under sled, half-speed ideal translation, plate separation and protected import zone.
- 25 actual browser STL downloads checked against the exact preview fingerprint and regeneration from saved JSON; 10 malformed/unsupported file rejections exercised.
- 20 feature model checks: presets, bounded variations, silhouettes, text, icons, raised/engraved SVG, image and mesh portable round trips, up-axis reorientation, undo/redo, local named persistence, actual ZIP contents and per-part downloads.
- White hole versus dark ring checked by probing actual final raised/engraved boolean solids.
- Production worker aborted deliberately: error blocks exports; reload recovers. Delayed prior image normalization cannot replace newer import.
- Desktop 374 px left control panel/right preview; saved light/dark theme, tactile selections, keyboard focus, collapsibles; 320/390 px touch orbit/pinch and real imports/downloads; preview first, no horizontal overflow, reachable exports; reduced-motion CSS.
- Gallery: inline script compiled with `new Function`, new entry exactly once, area `stl`, all 192 prior entries preserved unchanged, category first, search and runtime-error checks.
- Root predeploy: 193 apps, zero failed/skipped; root index and app production assets verified byte-identical to tested build.

## Scope and limitations

These are computational mesh, geometric clearance and browser tests, not physical printing. Ideal no-slip rolling is a preview kinematic assumption. Traction, TPU compression, force, wear, fatigue and physical prints have NOT been tested. Pieces are intentionally loose, not captive. Calibrate guide gap and material friction on your printer; do not force the stroke. No universal tolerance claim. STL input deliberately supports only one verified outward-wound, convex, broad-flat-bottom closed solid; unsupported concavities and overhangs are rejected explicitly, never silently repaired.

Reproducible scripts and JSON reports live alongside the app. `README.md` documents import methods, bounds, dependencies, privacy and assembly. Public smoke validation is recorded separately after deployment. Root combined-site browser tests repeated the actual imports, geometry downloads and mobile checks successfully on the staged production files.
