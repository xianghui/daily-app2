# Validation — 2026-10-26

## Passed

- App `npm run predeploy` production build, locally bundled worker and Manifold WASM.
- 20 default/preset/extreme parameter cases and 35 image/STL-derived cases. Every individual part and separated float32 plate passes independent binary-STL validation: finite coordinates, nondegenerate faces, positive volume per component, outward consistent normals, two opposite-directed incident faces per welded edge (1e-5 mm), and expected millimeter bounds.
- Mechanism: full internal rolling orbit samples, no unintended kernel intersection volume, vertical disc release, separated print plate, 4 mm floor, 3–4 mm walls and isolated personalization. No captive retention is claimed or designed.
- Production browser real file pickers: PNG, JPEG, ASCII STL, binary STL. Actual downloads parsed; fingerprints agree with displayed geometry and Node regeneration of downloaded JSON. Changed pixels, thresholds, depths, crop, fit, scale, rotation, placement and height alter actual export geometry. Removal/reset returns original fingerprint.
- Invalid dimensions, empty silhouettes, truncated/open/nonmanifold/concave/excessive STL, bad image content, excessive pixel/triangle counts and unsafe placements block exports and recover through replacement/reset.
- All presets, palm shapes, representative bounded variations, text and all six original SVG marks; raised/engraved ring-hole solid probes.
- Undo/redo, local named designs, portable image and mesh JSON round trips, missing asset reattachment guidance, actual ZIP contents and every per-part download.
- Desktop 374 px left rail/right viewer, three model thumbnails, phone preview-first at 320/390 px without overflow, real touch orbit and pinch, reachable exports. Collapsible sections, visible keyboard focus, saved coherent dark theme and reduced-motion rules.
- Worker loading intentionally aborted: export blocked, reload recovers. Stale worker keys/rapid invalid edits and asynchronous image selection race tested.
- Gallery inline scripts compile; newest entry exactly once with area `stl`; all 183 earlier entries unchanged. STL category remains first; search/render have no runtime errors.
- Root predeploy: 184 apps staged, zero failed/skipped; staged root and app assets byte-identical to tested outputs. Real import/export browser suite rerun on root staging.

## Limits, not claims

No physical print, friction, durability, material-force or fatigue tests were performed. The disc is loose, not retained. Ideal no-slip rolling is explanatory only; real sliding is possible. The marker is inset 1.6 mm and guide allowance changes the exact 2:1 geometry, so its trace is only near a diameter. Convex flat-bottom input STL is an explicit supported subset; unsupported arbitrary meshes are rejected without claimed repair.

Machine-readable JSON reports and screenshots are checked in alongside reproducible scripts. No personal files were used.
