# Null Lantern — observed validation

## Local production bundle and combined site

- React + Vite `npm run predeploy`: passed. Required per-app scripts and base checked. Shared worker/factory/WASM hashes match runtime-provenance.json; current model tokenizer configuration reports a 512-token cap.
- Real no-key CPU inference in headless desktop Chrome, GPU disabled: customer batch `age, credit, contact`, dispatch batch `stock, delivery, consent`; all 6 tiny known-answer links matched. Customer truth outcomes UNKNOWN/UNKNOWN/FALSE; dispatch FALSE/TRUE/FALSE. This is fixture performance, not general accuracy.
- Same binding object, context changed from age to credit: real AI changed selected rule and output from UNKNOWN to TRUE. The model materially affects the workflow; there is no canned response path.
- Competing-negation challenge chose `age`, intended `contact`. Mandatory review and documented limitation retained; no universal semantic correctness claim.
- Independent SQLite oracle matched all 34 supported truth cases, including full binary ternary AND/OR tables, NOT, precedence, explicit presence guards, NULL comparisons, numeric and quoted-string comparisons. Core rejected 21 invalid/unsupported predicate or binding cases. No PostgreSQL process or full SQL-dialect conformance was tested.
- Maximum 24-row chunked inference preserved all records and expected rule links. Maximum audit reimport restored exact originals. Review/edit/hold/undo, mandatory approval, refreshed approval after target/binding edits, invalid approved cases blocked, fresh export snapshots, clipboard and JSON/CSV/Markdown/SQL downloads passed.
- Independent Python parsers checked 9 downloaded audit sets per workflow run. CSV preserves every row, quoted commas/newlines and formula-leading reviewer notes/IDs with documented apostrophe protection. JSON preserves exact originals and reviewed multiline bindings. SQLite executed actual downloaded SQL SELECT statements and checked case IDs, predicate values, CHECK and WHERE results. Apostrophes, semicolons, comment-like text and line breaks remain data, not extra statements. Held/blocked cases stay in audit, not SQL.
- Network capture from startup through inference: no model-host request before explicit load; requests were GET downloads with no bodies, no synthetic user content in URLs and no database hosts. Only code/model/runtime traffic; logs persist host/path and query-key names, not signed CDN values. Built text credential-pattern scan passed; source has no optional remote provider/credential integration.
- All-network-disabled real inference passed with a new worker in an already-open warmed page. Cold offline navigation/reload is explicitly not supported/promised.
- Actual worker-fetch abort and model-host abort show errors/no fabricated results. Unblocking host and retry performs real inference. Fault injection checks unsupported Worker/WASM, constructor failure, worker error, malformed vectors, timeout, stale error and cancellation during delayed fetch. Delayed file reads cannot replace new source; a late valid-looking cancelled result cannot replace a newer **real** inference. Keyboard target→bindings Tab order and focus checked.
- Desktop 1440 and narrow 390/320 layouts passed no-horizontal-overflow, labels and ≥44 px interactive controls. Normal viewport hero/review/results screenshots inspected. UNKNOWN was initially awkwardly wrapped at 320; adjusted narrow truth cards to span the first row, rebuilt and reran assembled workflow. Actual physical phones and non-Chrome engines remain untested.
- Empty/invalid/null/oversized source, 25-row excess, malformed rule syntax/types, unsupported import format and >1 MB import rejected. No fake fallback.

## Assembly and gallery

All inline gallery scripts compiled with Node `new Function`; new entry occurs once as `ai-utility` and newest first. All 848 start-of-run entries and categories preserved in working gallery; 849 cards render, including old categories, with no phone overflow. Shared public runtime paths preserved. Root predeploy built/copied all 849 apps with zero failures/skips; unchanged conservative size guard passed at **999,945,421 bytes**. Local served assembly verified 13 exact asset hashes, including new app, shared AI assets and existing legacy assets. No additional deploy-only sharing rules were needed.

The repository began with unrelated README/gallery edits and four untracked draft directories. They are left unchanged and excluded from this run's source commit. Preservation checks use the actual start-of-run gallery snapshot. No changes made to the original read-only daily_app collection; no digest sent.

## Public release

Public deployment/asset/inference verification is recorded in publication-status.json and public-prefixed reports once complete. A gh-pages push alone is not counted as a successful release.

Public release verified: Pages commit `18795479965cec802322a7a0654eda6e13efeea1`, workflow `45391021152` completed successfully. Public app passed both real-AI fixtures, context-only impact, 24-row chunking, fresh-worker offline inference, review/undo/edit/hold, invalid-input, privacy, clipboard and downloaded-artifact checks. Independent parsers/SQLite validated public downloads. All 13 public asset byte comparisons and 849 gallery-card checks passed. Public normal viewport desktop/phone screenshots inspected. See public-prefixed reports and publication-status.json.
