# Observed validation — 2026-11-19

- Production React/Vite build passes. Real default MiniLM CPU inference in desktop Chrome (GPU disabled) matched 5/5 garden and 6/6 pond group links across two fixtures; not a universal accuracy claim.
- Garden: unequal baseline 3 groups/20 individuals vs 2/10; at common draw 10, both expectations are 2. Pond: draw 5 yields differing expectations from reviewed abundance composition, not an AI-generated number. See browser-validation.json.
- 9,920 independent small finite-population cases checked against combinations, plus Python independent artifact recomputation. Every row/count preserved; maximum 16 tallies / 160,000 individuals / 24 real model texts exercised.
- Reviewed group/site/count edits, approve/hold, undo, pending-review blocking, missing/unsupported draw, snapshot invalidation, clipboard, actual downloaded JSON/CSV/Markdown parsing, quoted multiline/formula-like notes and maximum audit reimport passed.
- Real fresh-worker inference passed fully network-offline in an already-open warmed page. Offline app reload/navigation not claimed. No network traffic before explicit model load; observed requests only GET/HEAD without bodies or source text in URLs. Credential-pattern scan supplements, does not replace, source/integration inspection.
- Empty/malformed/oversized inputs, limits, duplicate IDs, unsupported formats, invalid counts/sites, cancel + real retry, input-change invalidation passed. Fault-injected malformed vectors/envelope, worker errors, timeout, unavailable WASM/module worker, worker/model network failures blocked output; real recovery after network unblocking passed. Fault-injection is defensive only, never used for successful AI checks.
- Delayed old worker result cannot replace a completed newer run; delayed file import cannot overwrite new input. These race checks deliberately use synthetic workers/slow reads, separate from real inference.
- Irrelevant instruction-like text still receives a nearest group: known limitation, requires human hold; imported text never changes authority or asks for credentials.
- Desktop 1440px and narrow 390/320px: no horizontal overflow, associated labels, visible focus and ≥44px controls. Normal viewport screenshots inspected. Physical phones, other browsers, biological identification/field accuracy and uncertainty intervals untested/not claimed.

Combined assembly and public release results are added only after observed success. Test source, actual downloaded synthetic artifacts, screenshot evidence and reports live alongside this file. No real personal/field datasets or credentials used.

## Combined production assembly

Root `npm run predeploy` staged all 724 gallery apps; all source entries/categories preserved, exactly one new ai-utility entry, every inline script compiled with Node `new Function`. Assembled root HTML byte-matches source. Combined deployment is 999,813,547 bytes under the conservative 1 GB guard. Existing deploy-only runtime reuse is unchanged; no older source app/runtime changes were needed. Nine served gallery/app/worker/factory/WASM files byte-matched assembly. The full real-AI workflow, all reviewed artifacts, privacy and fresh-worker offline suite also passed against the actual assembled deployment on port 6985. `assembled-browser-validation.json`, `assembly-validation.json` and `assembled-asset-audit.json` record outcomes.

Tokenizer audit: inspected installed FeatureExtractionPipeline `_call`, which tokenizes with padding/truncation but does not forward `max_length`; downloaded tokenizer_config.json reports actual `model_max_length:512`. Documentation intentionally does not claim a 256-token cap.

## Public release

Matching Pages commit `f5995eacb51997b0a331c6a688e786328af52ce1` reached **built**; workflow `44469960102` completed successfully. Nine public gallery/app/worker/factory/WASM files byte-match production assembly. The full public real-AI workflow passed both fixtures, all review/export/privacy/maximum-batch checks and fresh-worker network-offline inference. Public gallery preserves all 723 prior cards/categories, with 724 total and AI Utilities first. Actual public-run downloads were parsed and recomputed independently again. No digest sent. See public-asset-audit.json, public-browser-validation.json, public-gallery-validation.json and publication-status.json.
