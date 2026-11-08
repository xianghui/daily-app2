# Observed validation — Recall Calendar

2026-11-09. Actual production Vite bundle in desktop Chrome, real MiniLM quantized inference via WASM CPU. Successful inference checks use the real model; fault-injected workers are limited to defensive tests. Evidence: browser-validation.json, network-validation.json, artifact-validation.json, calendar-validation.json, asset-audit.json and accompanying test scripts.

## Known-answer checks

- Science recall: expected and observed **good / again / good**. Reference-vs-misconception cosines approximately 0.775/0.365, 0.435/0.872, 0.869/0.432. Human-approved initial grades 4/1/4 yielded dates November 10 / November 10 / November 24 from a November 9 attempt.
- Digital safety recall: expected and observed **good / again / good**. Human-approved initial grades 4/1/4 yielded November 15 / November 10 / November 10. Previous repetition state materially changes intervals.
- Both fixtures: exact-answer baseline 0, AI good proposals 2, approved passing grades 2 of 3. This is mechanically counted on a tiny synthetic set, not general accuracy/time saved or measured retention improvement. Six simple proposal labels matched; not a validated grader.
- **Negation failure:** “Plant roots do not take up water or mineral nutrients from soil.” was suggested good (reference cosine 0.787, misconception 0.360). This is wrong. AI similarity cannot certify correctness; human grade approval is mandatory and the UI/README warn explicitly.

## Workflow and invariants

- All 16 cards / 48 passages processed with real four-passage batching; every original survived JSON; 16 unique approved calendar events. JSON reimport restored exact inputs, reran real inference, did not retain approvals silently.
- Pending review blocks apply. Holds preserve cards with null next state, excluded from ICS. Grade changes invalidate approval and export snapshots; undo restores edits. Multiline formula-like note with comma, quotes and emoji survives JSON and escaped CSV.
- Actual browser JSON, CSV, Markdown and ICS downloads saved. Independent Python CSV parser compared every source/grade/state/date/hold field, including current reviewer notes and spreadsheet protection. Independent ical.js parsed 2-event reviewed and 16-event max exports: matching summaries/descriptions, unique UIDs, source references/notes, dates, exclusive next-day ends and <=75 UTF-8 octets per physical line. Clipboard equals downloaded Markdown.
- Scheduler tests independently assert expected new/second/mature/failure intervals, leap/year boundaries, interval/ease caps and 54 grade/repetition combinations. Schema, conservation, incomplete review and malformed-vector guards checked. Unicode line folding tested with long multibyte content. This is a bounded SM-2 variant, not a clinical learning evaluation.

## Runtime, privacy and defenses

- No model-host traffic before the explicit load click. All recorded requests GET with null request bodies; source inspected for no content uploads, remote inference/provider integrations or analytics. Built asset credential-pattern scan found none. The default path passes answer text only into the local worker.
- Fully offline **fresh-worker** real inference passed after online caching in the already-open production page. Offline reload/app-shell startup not promised or tested. Runtime/worker/factory explicitly cached; model cache managed by Transformers.js. Cache eviction can break this scope.
- Fresh-context model-host abort produced Failed to fetch and zero suggestions; removing block allowed real inference on retry. Worker errors, malformed output, unsupported WASM error, accelerated timeout, cancellation/retry, input-change invalidation and callbacks arriving after cancellation/newer success were tested. Unsupported runtime/timeout/malformed cases use fault injection, not claims of physical device tests.
- Empty/null/invalid JSON, bad dates, duplicate IDs, >16 cards, >300-character passage and unsupported CSV file rejected. Whole input and browser import sizes are bounded. No silent deterministic grade fallback.
- Desktop and 390px/320px views: no horizontal overflow, input focus/labels and review/export actions exercised; screenshots inspected. Touch minimum buttons 44px. Physical mobile hardware, assistive technology and non-Chrome engines untested.

## Publishing

Per-app predeploy passed after fixing a JSX text-escaping error. Root predeploy assembled all **544 apps**, with root index/new app assets byte-identical and shared WASM present (combined-build-validation.json). Root deploy published the combined site. Gallery inline scripts compiled, the new AI utility entry appears exactly once, all 543 earlier entries remained unchanged, existing AI Utilities/STL Generators/Mini Games categories rendered in the same order and desktop/phone gallery checks passed.

Pages build **5ae585d963f42622510e173def0869ca2d44a815** reached built status with no error, matching remote gh-pages HEAD. The associated build/deploy workflow succeeded. Public app: https://xianghui.github.io/daily-app2/20261109-5/ . Every production asset, including worker/runtime factory and shared WASM, was fetched publicly and SHA-256 compared to the validated build. Public gallery matched source exactly.

The entire browser suite was then repeated at that public URL: both real inference fixtures, max-batch and JSON roundtrip, real offline fresh-worker inference, review/hold/undo/copy/download, layouts and defensive cases all passed. See public-evidence/browser-validation.json. Independent CSV/ICS parsing was repeated on public browser downloads, including current reviewer notes and holds. The same negation failure was recorded publicly; it remains a documented model limitation, not a silently corrected model result. Only Chrome was tested; no universal accuracy, retention or device support claim. No digest was sent.
