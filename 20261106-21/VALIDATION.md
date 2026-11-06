# Test Loom validation — 2026-11-06

## Local production bundle: passed

`npm run predeploy` built the actual `/daily-app2/20261106-21/` bundle. Real headless desktop Chrome loaded the real quantized MiniLM model on WASM CPU; successful model checks are not mocked. Evidence: `browser-validation.json`, `browser-test-output.txt`, `asset-audit.json`, screenshots and independent export parser.

### Known-answer fixtures and observed quality

Default threshold 0.45, budget 15 minutes. All examples are synthetic.

| Fixture | Intended links recovered | Selected tests | AI semantic coverage | Input-order baseline | Estimated minutes |
| --- | --- | --- | --- | --- | --- |
| Commerce | credit card→Visa purchase; reset password→recovery link; inventory reduction→order inventory check | T1, T2, T3 | 3/3 changes | 2/3 | 15/15 |
| Clinic | appointment→physician calendar; allergy warnings→drug reaction alerts; invoice→PDF export | K1, K2, K3 | 3/3 changes | 2/3 | 15/15 |

Commerce corresponding cosine scores approximately 0.487, 0.613, 0.616; clinic 0.735, 0.775, 0.702. Scores vary slightly with quantized batching. Unrelated visual/search tests were deferred. This is a six-positive-pair synthetic sanity set, not a general accuracy benchmark. No accuracy, saved-time or confidence percentages are claimed.

Exploratory findings before final default: at 0.35, a clinic appointment test falsely linked a billing change at 0.399, causing the PDF test to be omitted. Raising default to 0.45 rejected that observed false link. An initial vague stock-count test was missed at ~0.239; the synthetic description was clarified to explicitly name inventory reduction. This remains a documented model weakness, not evidence of universal quality. An unrelated hotel-vs-password fixture produced no selected tests. Maximum 20 changes + 30 tests processed in four-text worker batches; all 20 equivalent changes covered by one relevant test, no redundant test selection.

### Workflow and resilience

- Validated exact CSV schema, record preservation, 384 finite numbers per embedding, whole-number duration/priority/budget bounds, duplicate IDs, empty/invalid/oversized descriptions and inputs; both malformed file types and >30 KB files rejected.
- Selected an extra test to exceed budget: apply blocked. Empty reviewed duration: apply blocked. Undo restored a valid plan.
- Changed notes and rejected a suggested test; applied and downloaded JSON/CSV/Markdown. Independently parsed JSON/CSV with Python. Every test, rejected selection, reviewed duration and note survived; all changes remained, totals reconciled and budget held. Quoted commas, quotes, multiline imported text and formula-leading CSV text were verified. Clipboard Markdown matched downloaded Markdown. Any subsequent review edit hid old exports.
- Real cancellation/retry, initial model-download cancellation/retry, changed-input invalidation, late cancelled-response protection and delayed file-read protection passed.
- Actual model-host network block produced an actionable error and zero fabricated results; unblocking and retry completed real inference. Fault-injected unsupported Worker/WASM, worker construction/error, malformed output and accelerated 180-second timeout all produced errors and no fake plan. Fault injection is limited to defensive tests.
- Entire page lifetime network recorded: only GET/HEAD downloads to `huggingface.co` and `us.aws.cdn.hf.co`, no content bodies, no fixture content in URL; no model downloads before user invocation. App has no remote inference/provider configuration. Built text credential-pattern scan had no matches; source and network flow reviewed as well.
- After online inference, all network disabled and a **new worker** performed real inference in the already-open page using Cache API-backed worker/factory/WASM/model assets. Re-enabling network and reloading reused model cache without additional model-host requests. Offline app-shell navigation/startup is not claimed.
- Desktop 1440px and phone-width 390px/320px screenshots: no horizontal overflow, visible labeled forms, review/export controls and keyboard focus. Actual physical phone performance and non-Chrome browsers untested. No WebGPU used; tested default is WASM CPU.

`node core-test.mjs` exercises deterministic schema/budget/source preservation and CSV escaping with synthetic vectors only; these do not substitute for the real inference checks above.

## Gallery and publication

Gallery scripts compile via Node `new Function`, missing scripts fail validation, new entry appears once as `ai-utility`, existing entries are preserved and AI Utilities remains first. Combined root predeploy passed: 492 app builds copied, zero failures/skips, every gallery app index present and new app files matched. Root deploy published the combined site. GitHub Pages reached `built` at `fda908ce7c55da4e9d2c27f8bdc7745ad91017a3`, matching gh-pages head. The initial 180-second polling window was insufficient; the existing deployment completed normally without republishing or changing Pages configuration.

`verify-deployment.py` fetched and SHA-256 compared every new app production file, including worker, factory and WASM, byte-for-byte. The public gallery rendered all 492 cards with Test Loom exactly once and earlier categories intact. The entire browser suite then passed at https://xianghui.github.io/daily-app2/20261106-21/ : both real-model fixtures, 50-text batch, reviewed exports, offline fresh-worker inference, cache reuse, download cancellation/retry and defensive paths. Publicly downloaded CSV/JSON artifacts were independently reopened and reconciled again. Evidence: `deployment-validation.json`, `live-gallery-validation.json`, `live-browser-validation.json`, `live-browser-test-output.txt`, and root build/deploy output files. Physical phones, other browser engines and offline app-shell startup remain untested.
