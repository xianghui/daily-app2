# Observed validation — Cashpath Bridge (2026-11-26)

## Actual AI and accounting checks

Production Vite bundle served under the exact `/daily-app2/20261126-21/` base, not Vite development mode. Real desktop Chrome ran the actual default MiniLM q8 model on WASM CPU with GPU disabled.

- Two materially different synthetic closes: trading company receivables/payables/depreciation/disposal gain/capital purchase; loss-making studio inventory/accrued payroll/amortisation/unrealised gain/borrowing. **5/5 + 5/5** simple known-answer suggestions matched. The first-choice vectors and full evidence trail are recorded in `local-browser-validation.json` and the assembled/public counterparts. No mocked successful model output.
- Trading fixture: profit 1,000,000 minor units −180,000 +70,000 +80,000 −20,000 +0 = **950,000**. Profit-only baseline 1,000,000, signed adjustment −50,000.
- Studio fixture: loss −200,000 +170,000 −100,000 +60,000 −30,000 +0 = **−100,000**. Baseline −200,000, adjustment +100,000.
- Boundary/failure evidence: “This is not depreciation; cash was spent buying a new machine.” was wrongly classified **addback**. An irrelevant coffee-machine request was assigned **asset**. These are real semantic limitations, not waived tests or hidden canned results. The UI explains forced nearest-reference inference, and nothing applies without mandatory review and completeness attestation. No general accuracy claim follows from ten simple records.
- 24-record maximum plus five reference texts: **29 embeddings in eight four-text chunks**, original identity/count preserved. Exported maximum-batch audit reimport restores every original record and requires fresh review.
- 53 core assertions include positive/negative/zero effects, all five rules, losses, blocked incomplete/held registers, missing/pending/reordered records, malformed vectors, invalid reviewed values, and exact JSON original restoration. Python independently recomputes effects/totals and parses downloaded CSV, rather than trusting a JavaScript inverse.

## Review, artifacts and defensive behavior

- Pending records cannot apply; holds or missing completeness block total/worksheet CSV but retain all rows in audit JSON/CSV. Type, opening, closing, amount and multiline reviewer-note edits invalidate exports; undo restores the prior review. Current applied outputs match current reviewed values.
- All four artifact types downloaded through the browser. Python `csv.DictReader` and JSON parse independently verify original preservation, signed effect values, exact running identities and baseline gaps. Formula-like multiline notes with quotes/commas, `<script>` text and Unicode survive JSON/CSV; CSV applies the documented text-only apostrophe escape without corrupting negative numeric cells. Clipboard receives current Markdown.
- Cancellation/retry uses a real subsequent model run. Network-aborted worker and model host show errors without fabricated outputs. Separate defensive fault injection checks missing Worker/WebAssembly, constructor/worker errors, malformed vectors, timeout and stale delayed messages. These fakes are only defensive tests, never evidence of working inference.
- Empty/malformed/oversized JSON, unsupported/oversized imports, invalid IDs/counts/amounts/notes are rejected. Delayed imported-file reads cannot overwrite newer source changes; a newer real source/run wins over a terminated older run. Instruction-like and HTML-like notes remain inert text; invalid reviewed amounts cannot export.

## Privacy, caching, production assets and accessibility

- Request audit begins at navigation. No model-host requests precede explicit loading. Observed default-path requests are GET with no request body; external traffic is restricted to model-host/CDN file downloads. Synthetic note text is absent from outgoing URLs. Persisted audit strips signed URL query values. No optional provider or credential integration exists.
- Worker, MJS factory and WASM provenance hashes verified. Built app text assets scanned for common OpenAI/GitHub/Google credential patterns; none found. This is supplemented by code/integration inspection, not claimed to prove absence of arbitrary secrets in all possible input.
- After an online load, networking was disabled, the previous worker terminated and a fresh worker completed the same real inference in the open page. Only this warmed-open-page scope is claimed. Offline reload/navigation and cache eviction recovery without networking are not promised.
- Desktop 1440px and narrow 390px/320px screenshots: no horizontal overflow, labeled inputs/selects, keyboard tab movement, ≥44px ordinary controls, wrapped notes and stacked review/results. Phone screenshots are emulated desktop Chrome; physical mobile inference and Safari/Firefox/Edge engines are not tested. The mobile treatment labels were shortened after visual inspection to avoid truncation in narrow selects.

## Reproduction and publication evidence

Run commands and shared runtime paths are documented in README. Source, assembled and public audit files use separate prefixes. Root assembly passed with 897 app builds, zero failed/skipped, and 819,382,613 assembled bytes (below the unchanged 1,000,000,000-byte guard). `gallery-validation.json` compiles every inline script and verifies the new entry once with the correct area plus preservation of all older entries/categories. `assembled-assets.json` / `public-assets.json` compare all app and shared runtime bytes with the deploy tree. Publication is complete only after root deployment, a built Pages commit matching gh-pages, public real-model workflow tests, gallery checks and source push; final status is in `publication-status.json`.

Unverified: real business books, filing/legal/policy correctness, complete cash-flow statements, other browsers/physical devices, low-memory performance and offline app startup. A balanced computed identity does not establish source completeness.

## Completed public verification

Published via **root** `npm run deploy`. GitHub Pages workflow [45817121086](https://github.com/xianghui/daily-app2/actions/runs/45817121086) succeeded, and latest Pages build is `built` at gh-pages commit `6797e70f6f6f5cfebd2ac5dc92d7c74e78301d98`. The public app completed both real-model fixtures (10/10 simple suggestions), maximum batch, review/undo/edit/hold, invalid input, cancellation/retry, cached offline fresh-worker inference, current exports/clipboard and 1440/390/320 layouts. Public request audit again observed file-only GET traffic, no content uploads and no model request before explicit loading. All **nine** public root/app/runtime assets match the assembled bytes by SHA-256. Public gallery preserves all 896 earlier cards; total 897. Python independently parsed all 16 downloaded public audit snapshots and associated CSV artifacts with exact running/minor-unit identities. See `public-browser-validation.json`, `public-artifact-validation.json`, `public-assets.json`, `public-gallery-browser.json` and screenshots.
