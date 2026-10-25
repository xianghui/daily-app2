# Latest scheduled builder validation

20261024-7 — **Afterglide**

App build, 270 parameter geometry cases and 24 image/STL integration cases passed. Real PNG/JPEG/ASCII/binary STL browser imports and downloaded geometry, malformed-file recovery, all presets, variations, portable save/open, undo/redo, drag/drop, joint-pose previews, individual parts and ZIP exports passed. Mobile touch orbit/pinch and 320/390 px tab/sheet/export checks passed. Production deploy-tree browser suite passed.

Root gallery: inline scripts compile, exactly one newest `stl` entry, all 110 previous entries preserved, 111 cards render, STL Generators first. Root predeploy: 111 apps, zero failures/skips; exact root gallery and every app page verified. Combined root deploy command completed successfully. Public HTTPS app, image-to-STL browser download and newest gallery entry verified without runtime or asset errors.

See `20261024-7/VALIDATION.md` and JSON reports for details. No physical print, friction, retention-force or wear testing was performed.

## Published-site verification

Root monorepo `npm run predeploy` / `npm run deploy` completed successfully: 158 app folders, zero failures/skips, and all 43 new app production files copied byte-for-byte. Public URL: https://xianghui.github.io/daily-app2/20261026-2/

`node publication-test.cjs` passed against GitHub Pages: live app heading, worker/WASM loading, exact default signature, all four PNG/JPEG/ASCII-STL/binary-STL browser imports, independently parsed actual STL downloads matched current saved/preview geometry, motion/mesh checks, actual seven-part ZIP and current assembly notes, reset, public gallery entry and no runtime errors. Evidence: `publication-validation.json`. The publication check does not constitute a physical print test.
