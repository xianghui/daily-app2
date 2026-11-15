# Observed validation — Offer Orchard

## Real inference and process quality

Production Vite bundle, desktop Chrome with GPU disabled, real default MiniLM q8 WASM CPU. No successful AI check used a mock or deterministic substitute.

- Neighborhood placements: **6/6** paraphrased program links matched the tiny known-answer fixture. Stable plan: Ari→Repair, Bo→Gardens, Cy→Archive. Both plans match 3/3; FIFO has **1 blocking pair**, deferred acceptance **0**.
- Volunteer rotations: **9/9** links matched the second fixture. Stable plan: Ari and Bo→Wildlife, Cy→Kitchen, Dee→Coding. Capacity-zero Radio unused. Both plans match 4/4; FIFO has **1 blocking pair**, stable plan **0**.
- Literal exact-program-name baseline matched **0/15** notes (coverage, not a general accuracy estimate).
- Unrelated instruction-like challenge still selected Coding. This demonstrates nearest-neighbor irrelevance risk, not successful instruction following; human hold retained the original and produced no placements from that note. Negation and ambiguous language are not reliably resolved.
- Independent Python enumeration checked **360** random incomplete-priority/capacity cases, **5,562** possible assignments: returned matches were stable and applicant-optimal among all independently enumerated stable matches. Capacity, eligibility, unique assignments and bounded proposal termination checked.

## Full workflow and defensive checks

Mandatory per-note review; applicant/program/rank editing; duplicate program/rank blocking; fractional/out-of-range ranks; holds/all-held; undo; current-result export invalidation; multiline review comments; clipboard; source and audit import; maximum **48 notes + 8 programs / 12 applicants**, including four unmatched applicants and 56 texts batched by four. Maximum audit reimport restored every original.

Empty/invalid/oversized JSON; invalid capacities and eligibility IDs; unsupported/oversized/malformed files; cancellation and real retry; source changes; delayed imports and worker downloads; deliberately late older-run result after a newer run. No stale overwrite.

Fresh contexts tested model network abortion followed by successful real retry, WASM unavailable, worker download abortion, unsupported Worker construction, worker error, malformed vector result/envelope and accelerated timeout. Fault injection is used only for defenses, never evidence of successful inference. No failure fabricated results.

## Artifacts, privacy and offline

Actual browser downloads: 8 JSON snapshots independently reopened, source-row CSV and separate every-applicant placement CSV parsed by Python csv, Markdown reopened. Original rows, holds, reviewed ranks, unmatched people, quoted comma/newline comments and formula-like multiline text retained with CSV escaping. Current edited comments verified in clipboard and all reviewed outputs.

Network audit from startup through real inference: GET-only public file downloads, no request bodies or synthetic user content in URLs; no model-host request before explicit loading. URL queries sanitized to key names in persisted reports. Built text credential-pattern scan passed; no remote provider integration exists. Dependency byte hashes documented.

After online inference, all network blocked, prior worker terminated, **fresh worker real inference passed inside the already-open warmed page**. Offline app startup/reload, permanent caches and private browsing persistence are NOT claimed.

## Layout and scope

1440, 390 and 320 CSS-pixel layouts passed no-horizontal-overflow, explicit form labels, ≥44px button heights, focus and working exports. Normal viewport input/review/results screenshots inspected. Physical phones, low-memory hardware, Safari/Firefox and assistive-technology user testing not performed. Synthetic fixture outcomes are not universal accuracy claims. Stability is conditional on human-supplied strict priorities and reviewed preferences, not fairness certification or maximum placements.

## Publication checks

Combined and public production-bundle verification, immutable worker/factory/WASM byte audits, preserved gallery and Pages build commit are recorded in the corresponding machine reports and publication-status.json once complete. Root deployment uses its unchanged conservative 1 GB guard.

Additional hard-constraint regression: prototype-like applicant/program IDs (`__proto__`, `constructor`) preserve both assignments, empty eligibility lists leave all unmatched, capacity-zero programs have no blocking pairs, duplicate priorities and pending reviews block. A baseline object-key edge case was fixed and independently retested before the final production build.

Assembled deployment passed the full real-AI/workflow suite again, immutable runtime byte comparison and a working 692-entry gallery (691 earlier entries preserved; AI Utilities first; earlier categories/search intact). The guard initially failed after the new app was added; the existing deploy-only byte-identical geometry-sharing list was extended to `20261030-20`. Its source build stayed untouched; actual geometry worker, image import and valid 2,954-triangle binary STL export passed against the shared runtime. Combined site: **999,644,074 bytes**, below unchanged 1,000,000,000-byte guard. Revised legacy JS/HTML retain compatibility URLs with query-versioned entry references.

Public release **2d52042f0ce8aac228586e27988bad136596d7cf** reached built and passed all public asset hashes, both real-model fixtures, full workflow/offline/artifact suite, 49 GET-only requests, working 692-entry gallery and affected older geometry app. See public-* reports.
