# Observed validation — 2026-11-08

## Production bundle / actual AI

`npm run predeploy` passes. Installed Chrome on macOS ran production assets at `/daily-app2/20261108-16/`, q8 MiniLM WASM CPU. Successful inference is never mocked.

| Synthetic batch | Intended and observed purposes | Known-answer matches | First-policy baseline | Original boundary violations → approved plan |
|---|---|---|---|---|
| Research requests | scheduling, analysis, incentives | 3/3 | 1/3 | 4 → 0 |
| Store operations | delivery, returns, stock | 3/3 | 1/3 | 5 → 0 |

Research: 10 original field-usages → 8 planned; store: 11 → 8. Two retention windows shortened in each batch. These are tiny synthetic results, not population accuracy, legal compliance, measured productivity or privacy gains. Every request still requires human review.

**Adversarial semantic failure:** a request saying not to schedule interviews and instead sell the contact list matched scheduling at cosine 0.7233847. The model is not authorization or entailment reasoning. The UI/README disclose this, and a human should hold this request. Instruction-like input requesting credentials remained inert text; no credentials or external authority were requested.

## Checks

- Actual inference on both materially different fixtures, negation/instruction challenges and 24-request + 8-policy (32-text) full batch; candidate vector schema validated. All originals and ranked policies survive JSON.
- Pending decisions block apply. Empty/non-original/non-policy/duplicate fields and retention outside original or policy limits cannot be approved; holds remain in audit and out of manifest. All 24 held records exported with empty released CSV fields/days.
- Human purpose/field/day edits, approve/hold, restore original, trim, undo, export invalidation and original JSON reimport tested. Exported retention edit 90 → 20 preserved; original stays 90.
- Actual browser-download JSON/CSV/Markdown parsed independently in Python; all rows, original fields/days, approved subsets, held release blanks, multiline quoted formula-like notes and current edited values reconciled. Clipboard equals Markdown. 24-record JSON roundtrip checked. A separate maximum-length fixture ran all 32 descriptions at 500 characters and 12 fields per request; its 103,093-byte audit reimported and ran real inference again. Manual checkbox removal of every field blocked approval, and trim/review retry succeeded.
- Real first-use Hugging Face download abort produces visible failure and no fake output; online retry succeeds. Worker-download failure and retry tested separately.
- Empty/invalid/oversized JSON, duplicate IDs/fields, missing arrays, description length, batch limits, unsupported PDF and integer-day bounds handled without invented results.
- Model timeout, unavailable worker/WASM constructor, worker crash and malformed vectors exercised using defensive fault injection only.
- Cancel/retry, input mutation during run, delayed file read, late worker-fetch failure and late cancelled result both before and after newer real success cannot overwrite current state.
- After online inference, network disabled and a fresh worker ran actual offline inference on the open page. No offline reload claim.
- Requests captured from startup: only file GETs, no user bodies/URLs or model-host activity before explicit load. Built asset credential-pattern scan had no matches; not an exhaustive guarantee. Shared deployed WASM is byte-identical to installed runtime.
- Desktop and 320/390px widths checked: no horizontal overflow; field controls, review/edit/export and keyboard focus work. Screenshots visually inspected. Real mobile hardware, Firefox, Safari and screen readers untested.

Gallery scripts compile with Node `new Function`; 531 earlier entries remain unchanged, one new entry appears first and exactly once, and a real browser renders all 532 entries with AI Utilities before earlier categories and working search. Root combined build copied all 532 apps without failures, preserving the shared runtime.

Artifacts: `boundary-validation.json`, `browser-validation.json`, `extra-validation.json`, `core-validation.json`, `artifact-validation.json`, `asset-audit.json`, browser fixture exports, screenshots and test scripts.

## Publication

Only mark complete after gallery script/preservation checks, root combined build/deploy, matching built Pages commit, public runtime asset hash comparison and actual public model inference. Evidence will be recorded in deployment/public reports. Pre-existing unrelated `20261105-7/` work is excluded from this change.

Public verification passed: Pages commit `2c970105d19559af8d08dd24ee658b481d29b2f1` reached `built`. All eight public app assets and the shared WASM match local SHA-256 hashes, and the root gallery matches source byte-for-byte. The public URL passed all 13 real-browser workflow/defensive checks, including both real-model fixtures, manual field edits, 32-text batching, and offline fresh-worker inference, with zero uncaught page errors. Public gallery renders 532 entries, AI Utilities first, earlier categories intact. See `deployment-validation.json`, `public-assets-validation.json`, `public-browser-validation.json` and `public-gallery-validation.json`.
