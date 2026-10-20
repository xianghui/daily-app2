# Validation — 2026-10-20

- Production build (`npm run predeploy`) and lint passed.
- Chromium touch emulation at 320, 375, 390, and 430px: no horizontal overflow; every enabled button at least 44×44 CSS pixels.
- Visually inspected the 375px portrait screenshot for legibility, spacing, and reachable controls.
- Completed all six commissions; verified pip redistribution, budget gating, locked sealed designs, optional sound, restart confirmation/cancel, new editions, and saved best scores.
- Verified cold offline reload and sealing a design in mobile Chromium; no JavaScript runtime errors.
- Checked exhaustive solver output for all budgets 6–54 and compared with 50 random legal challenger designs per budget. Checked all-tie outcome arithmetic.
- Gallery: 10 distinct entries, newest first, zero missing commas, script parses.
- Combined root deploy includes gallery and all 10 game index pages.

Offline implementation note: static cache lookups ignore Vary, because Vite preview's Vary: Origin otherwise prevents mobile CORS asset requests from matching precached responses. This is safe for this app's same-origin public static files. Cache name is isolated to this game.
