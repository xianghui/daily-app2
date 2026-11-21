# Observed validation · Swing Commons

## Local production bundle

- `npm run predeploy`: passed. React + Vite, exact base and required per-app scripts. Root deployment only is used for publication.
- Real Chrome headless browser, GPU disabled; real shared WASM CPU / quantized MiniLM inference, not mocked success.
- Maker fixture: 4/4 group links matched; reviewed weights [4,3,2], quota 6, swings [3,1,1]. Normalized shares [.6,.2,.2] differ from weight shares [4/9,3/9,2/9].
- Community fixture: 4/4 matched; weights [5,1,1], quota 5, swings [4,0,0], showing one veto/dictator and two dummies. These eight easy synthetic links are not a population accuracy claim.
- Negated mixed-topic probe selected the expected woodworking group. This one success does not validate general negation handling, identity or mandate authority; nearest embeddings can always suggest an unsuitable dictionary entry.
- Maximum batch: 8 groups + 32 block notes = 40 texts / 10 actual model chunks; all 32 assignments, weights and source notes retained; 256 coalition witnesses and equal .125 shares checked. Complete maximum audit reimport restores originals without source-limit failure.
- Independent numeric checker: 1,641 weighted games (1–5 groups, weights 0–2, every reachable positive quota) match a separate winning-coalition critical-member counter. Normalized shares sum to one, veto checks and minimal-winner deletion invariants hold. No solver approximation.
- Apply with pending rows blocked. Human group/weight edits reset row review; all edits invalidate applied artifacts. Undo restores group, weight, decision and multiline note. Holds preserve all originals and withhold all power rows. Changed integer weight exported with original untouched; fractional weight and unreachable quota blocked.
- Actual browser JSON/CSV/Markdown downloads independently parsed with Python stdlib `json`/`csv`. All source records, all dictionary groups and every coalition survive; counts/totals/shares and subset uniqueness checked. Quoted comma/newline/formula-leading edited note survives JSON/Markdown and CSV with explicit apostrophe escaping. Clipboard matches current reviewed Markdown.
- Offline: successful online run, terminate worker, browser context fully offline, explicit run creates fresh worker and performs real inference from Cache API. Tested in warmed already-open page only; offline navigation/reload/startup NOT claimed.
- Input empty/malformed/oversized, wrong-format file, malformed source object, oversized file, fractional reviewed weight and unreachable quota fail visibly. Delayed file read cannot overwrite newer source.
- Defensive tests use fault injection only for failures: worker/model download aborts, worker-construction failure, no WASM, worker error, null envelope, malformed vector count/dimension/NaN, 180-second timeout accelerated. No fake result, exports locked. Network unblock → successful real retry.
- Cold download progress/cancel and real retry passed. Explicit cancellation/input edit ignore late old messages. A delayed cancelled fake failure arriving after a new real inference cannot replace that inference. Run IDs cover worker-source fetch and file reads.
- Network requests captured from startup: no model request before explicit load; external traffic consists only of documented static GET downloads with no body or input terms in URLs. Persisted report omits signed CDN query values. Built credential-pattern scan had no hits; source integrations inspected: no provider keys, analytics, remote inference or source-content persistence. This is an observed check, not exhaustive proof against arbitrary future dependency changes.
- Screenshots inspected at desktop 1440 and phone widths 320/390; no page horizontal overflow, legible cards, labels attached to every input/select/textarea, 44-pixel controls and visible keyboard focus. Emulation is not physical-device validation.

Reports: `browser-validation.json`, `defensive-validation.json`, `cold-cancel-validation.json`, `stale-validation.json`, `review-edge-validation.json`, `core-validation.json`, `artifact-validation.json`, `security-validation.json`, `runtime-dependency-audit.json`. Test scripts and synthetic artifacts are included for repeatability. Shared worker byte hashes verified; actual unpinned host revision rechecked.

## Combined collection

Root predeploy assembled 776 apps with 0 failures/skips; 999,792,080 bytes under unchanged conservative 1,000,000,000-byte guard. No new deduplication rule, removed older app or source-build alteration. All inline gallery scripts compile with Node `new Function`; new folder appears exactly once in AI Utilities, newest first. Every one of the prior 775 entries remains byte-equivalent as a parsed object, and older categories remain. Gallery browser rendering/search and phone widths passed.

The same real workflow/browser suite is rerun against assembled and then public bundles; see their reports and publication status for observed completion, not a branch-push assumption.

## Not tested / limitations

Physical phones, alternate browsers, low-memory hardware, offline app-shell startup, future model revisions and real legal mandates untested. No legal, fairness, mandate-authenticity or actual-behavior inference. All subsets equally weighted only for the index; correlated choices, abstention, turnout and restricted coalitions outside scope. Additive block notes must be distinct: duplicate mandates overcount. Human review is required even when synthetic fixtures match.


## Public release verification

Matching gh-pages/Pages commit `0f9c4981ae7d4fef5d2b09edd68e82787832d8d2`, workflow `44892957870`: built/success. Seven public gallery/app/worker/factory/WASM resources matched assembled bytes exactly. Both real MiniLM fixture runs, review/edit/undo, all artifact downloads, clipboard, maximum 40-text/10-chunk batch, phone layouts, local-only download traffic and fully offline fresh-worker inference passed at the public URL. Independently reparsed those final public downloads. Public gallery renders all 776 cards with earlier categories/search intact. Source commit deliberately excludes unrelated pre-existing recovery changes. No digest sent.
