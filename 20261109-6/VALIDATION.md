# Observed validation — Privilege Quilt, 2026-11-09

## Production-bundle local checks

- React/Vite predeploy passed. Browser used installed Chrome, real WASM CPU inference with quantized MiniLM; no mocked successful AI paths.
- Support fixture: read / reply / export, cosine 0.447 / 0.533 / 0.627; selected responder + finance, no extra permissions.
- Publishing fixture: draft / publish / stats, cosine 0.611 / 0.703 / 0.738; selected editor + analyst, no extra permissions.
- 6/6 simple expected permission links, exact-text baseline 0/6. This tiny synthetic set is not an accuracy estimate.
- Negation challenge “Do not permanently delete any customer accounts.” wrongly proposed delete. Forbidden permission constraint prevented an applied bundle. Human hold yielded no roles. No automatic grant or negation guarantee.
- Human link edit resets approval; apply blocks unreviewed duties; hold, note, undo and export invalidation passed. Browser downloads and clipboard checked.
- Fresh worker with all network blocked performed real inference after online caching in an already-open page. Offline app-shell startup/reload not claimed.
- 16-need batch conservation and audit JSON reimport preserved originals. Full 16 needs / 12 permissions / 12 roles also checked (28 text passages, seven batches).
- Empty, malformed, oversized, duplicate-ID, unknown-role-permission and unsupported-format inputs rejected. Cancel/retry and input replacement did not retain prior results. Injected stale callbacks could not overwrite a new result.
- Fault injection: malformed embedding vectors, unsupported runtime response, timeout, worker constructor error, worker download abort. These test defensive behavior only, not successful inference. Real model-host abort returned an error with no suggestions; unblocking allowed real retry.
- Desktop and 390/320px screens had no horizontal overflow; labels/focus, reviews and exports worked. Phone screenshot visually inspected. Physical devices and screen readers untested.
- Network capture from startup through processing: no model-host request before explicit loading, GET-only static asset traffic, no request bodies/content uploads. Model and runtime cache contents are assets, not duties. No provider integration. Built JS credential-pattern scan had no matches; not an exhaustive security audit.
- Independent Python CSV parser verified every duty/source/reviewed mapping/hold/note/top score, multiline formula text, quotes, comma and emoji. JSON round-trip and current edited export checked. Markdown download equals clipboard.
- Core checks: exact known role bundles, extras-first objective (two narrow roles preferred to one broad role), forbidden block, cap block, permitted extra, empty bundle, schema and review guards.

Machine-readable browser/network/edge/artifact/asset reports and synthetic downloaded fixtures accompany source. Public checks are appended after collection publication.

## Public verification

Combined root predeploy assembled 545 apps, zero failures/skips. Root deploy published gh-pages commit `a7d1e2d8840220afc5ab3f153085ae84fdd28935`; Pages build reported built at that same commit and workflow 42523511900 completed successfully.

Public gallery, app HTML/CSS/JS, worker, runtime factory and shared WASM were HTTP-accessible and byte-identical to local production assets (`public-asset-validation.json`). The complete browser suite reran at https://xianghui.github.io/daily-app2/20261109-6/ with both real model fixtures, offline fresh worker, 16-need batching, review/undo, downloads/clipboard, error/stale defenses and phone layouts passing (`public-browser-validation.json`). Public gallery rendered all 545 entries, AI Utilities first, legacy categories and search intact (`public-gallery-validation.json`). CSV artifacts from this public suite were independently parsed again.
