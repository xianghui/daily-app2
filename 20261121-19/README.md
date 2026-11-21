# Swing Commons

**Weighted-vote rule-review workshop · React + Vite · no-key local AI.**

For small cooperatives reviewing whether a draft voting rule gives groups decisive power unlike their nominal vote-weight shares. This is a hypothetical governance worksheet, never an election system or authority check.

## Workflow

1. Paste/import source JSON, or use either synthetic example. Define a complete group dictionary by work/constituency descriptions, distinct voting-block notes and integer weights, and a pass quota.
2. Explicitly click **Load AI & reconcile**. Real learned MiniLM embeddings rank each block against the group dictionary; paraphrases can match without shared spelling. No regex, canned outputs or deterministic fake-AI path.
3. Inspect original note, neural cosine evidence (not confidence), group and weight. Edit, approve or hold every row. One-click undo restores the preceding review snapshot. Changing identity/weight resets that row to pending; all edits invalidate exports. Notes support multiline text.
4. **Apply reviewed rule**. Every row must be reviewed. A hold preserves all evidence but withholds the full power audit. Exact enumeration counts winning coalitions and pivotal additions. Compare normalized Banzhaf swing share with simple weight share. Inspect veto/dummy groups, minimal winners and every coalition witness.
5. Download current JSON, source Audit CSV, Power CSV, Coalition CSV and Markdown; or copy the worksheet. Reimporting an audit restores original inputs only, requiring fresh AI and review. No external actions.

## Data contract and bounds

JSON object: `title` (1–120 chars), `quota` (integer 1–32,000), `groups` (1–8 objects with `id`, `text`), `blocks` (1–32 objects with `id`, `description`, `weight`). IDs unique within each list, alphanumeric/underscore, 1–40 chars. Descriptions 1–300 chars. Weights integer 1–1,000. Paste ≤60,000 chars. `.json` file imports ≤2 MB (allows complete maximum-size audit envelopes); other types rejected. Review notes ≤2,000 chars. Quota cannot exceed reviewed total. Structured output schema `swing-commons/1`; vectors require exact text count, 384 finite dimensions and unit norm tolerance .04. No imported text can request tools, keys or network authority.

Each group acts as ONE binary voter; all assigned notes are **additive distinct voting blocks**, not duplicate evidence. Verify mandates are counted once. Zero-weight groups remain in the analysis. A winning coalition has weight ≥ quota. There is no abstention, turnout, proxy-chain, mandatory-alliance, attendance quorum or correlated-choice model.

## What is AI, what is deterministic?

AI: real feature extraction using [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8 ONNX, Apache-2.0. Mean-pooled normalized 384-dimensional embeddings drive nearest-group retrieval. Similarity is not identity verification or authorization. Out-of-domain and negated notes can still receive a nearest match; mandatory independent human review is essential. Short English descriptions are the intended input. Names alone are weak evidence.

Runtime: Transformers.js 4.3.2 and ONNX Runtime Web (MIT), single-thread WASM CPU; no WebGPU required. Shared byte-audited same-origin worker/factory from `20261115-6`, WASM from `20261107-2`. Preserve those published paths. See `runtime-dependency-audit.json` for hashes and inspected settings. Four texts per inference chunk, at most 40 texts / 10 chunks. Actual tokenizer ceiling is 512 tokens; this feature-extraction implementation ignores per-call max_length, so source descriptions are independently capped at 300 characters. Hugging Face `main` is unpinned; observed revision is recorded, not guaranteed stable.

Deterministic: source validation, dot-product ranking, mandatory review gates, additive group weights, and exhaustive enumeration of ≤256 subsets. For each group, count losing subsets without it that pass when it joins. Normalized Banzhaf = its swings / all group swings; absolute Banzhaf = its swings / 2^(n−1). Veto means all winning coalitions need that group; dummy means no swing. A minimal winner loses if any member is removed. Vote-weight share is a descriptive baseline, not an alternative power model. No invented performance gain or measured voting probability is claimed. There is no optimization/accuracy promise: this reduces manual alias reconciliation and exhaustive coalition bookkeeping.

## Download, privacy and offline scope

Before loading, the UI discloses ≈23 MB model plus ≈27 MB WASM CPU runtime (plus ≈0.6 MB worker/factory and small model configuration files). First use requires internet. Model/tokenizer/config downloads come from Hugging Face and its CDN; worker/factory/WASM are same-origin static assets. No API key, paid dependency, remote inference, telemetry or shared credentials. The app makes no model download before explicit loading. User content stays in memory and worker messages, never uploaded or persisted; Cache API stores model/runtime assets only. Downloads/copy are explicit user actions. Exported JSON contains source notes and should be handled accordingly.

Cache API is best effort, subject to browser storage restrictions/eviction. Tested: fully offline real inference using a fresh worker in an already-open warmed production page. Offline startup/navigation/reload is **not** claimed. HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB free RAM required. Desktop Chrome CPU tested with GPU disabled; emulated phone widths tested. Physical phones, alternate browsers, low-memory hardware and app-shell offline startup untested. No hidden WebGPU dependency.

Download and chunk progress, cancellation and 180-second timeout are visible. Worker construction/error, missing runtime, blocked model/worker downloads, malformed model envelopes/vectors and invalid input leave no fake output. Run IDs plus worker termination prevent old work from replacing new work; asynchronous file/source loading is also guarded. Retry uses the same explicit button.

## Artifacts

- JSON: all original input, every reviewed row, AI evidence, held status, exact group/coalition analysis or explicit withheld result.
- Audit CSV: one row per source block, original and reviewed weights, AI/reviewed group, decision and multiline note.
- Power CSV: every dictionary group including zero-weight dummies, weights, computed shares, swing counts and veto/dummy indicators; header-only if held.
- Coalition CSV: every subset, including empty, members, total, outcome, critical members and minimal-winning flag.
- Markdown: readable result/method/limits and complete source review, including notes.

CSV quotes commas/quotes/newlines and prefixes spreadsheet formula-leading text (`= + - @ tab CR`) with an apostrophe. Positive numeric weights remain numeric text. JSON preserves exact originals. This is CSV import hygiene, not a general spreadsheet security guarantee.

## Development and publication

`npm install`; `npm run dev`; `npm run predeploy` builds with base `/daily-app2/20261121-19/`. Per-app deploy exists by contract but do **not** use it to publish the collection. Root `npm run predeploy` then root `npm run deploy` publishes combined `deploy/`. The new build adds only ~268 KB by sharing already published immutable AI assets. Never edit the original daily_app tree.

## Observed validation and known limits

See [VALIDATION.md](VALIDATION.md) and machine-readable reports/test sources. Two tiny materially different known-answer fixtures matched all 8 block links with real browser neural inference. Maker weights [4,3,2], quota 6 yield swings [3,1,1]; community weights [5,1,1], quota 5 yield [4,0,0]. These easy fixtures are not general accuracy evidence. A negated mixed-topic probe matched its expected group in this run, but nearest-embedding matching does not reliably resolve negation or legal identity. Human verification remains mandatory. All indices assume a complete, correct roster and unrestricted binary coalitions; real politics and fairness cannot be inferred.
