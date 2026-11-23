# Epoch Ledger — observed validation

## Production-bundle checks (local / assembled collection)

- `npm run predeploy`: React + Vite production build passed; no mocked default AI path.
- Real Chrome WASM CPU inference, no WebGPU: Workbook migration → excel1900 / excel1904 / excel1900; Telemetry handoff → unixSeconds / unixMillis / excel1904. **6/6 tiny known-answer source-system matches**, not general accuracy. Excel fictitious day 60 blocked; fixture release counts 2/3 and 3/3. Against all-1900 assumptions, one and three valid results differ respectively, counting baseline range failures explicitly.
- Note-only impact probe held the numeric string `45292` constant: changing Windows-1900 context to Macintosh-1904 context changed the actual inferred system and computed date from 2024-01-01 to 2028-01-02. This establishes material AI influence, not just numeric heuristics.
- A negation/instruction-like source probe still matched the intended 1904 system without any credential request or external action. One probe does not establish reliable negation handling.
- 2,866 core date checks against independently constructed UTC dates plus epoch/leap-bug fixtures; malformed input/vector/review schemas rejected. Dates tested span 2000–2027 plus boundary fixtures, not every possible serial.
- Maximum 4 profiles + 24 records → 28 real embeddings, seven four-text chunks; all 24 originals/reviews survive the audit, all valid approved releases survive JSON reimport. Reimport requires renewed inference/review.
- Real online inference followed by a terminated/new worker with all context network disabled passed. **Only fresh-worker inference in an already-open warmed page** is verified offline. Cold offline navigation/reload is not claimed.
- Empty/invalid/oversized JSON, 25-record overflow, unsupported file and oversized file handled. No fake results. Worker-network abort and real model-host abort fail closed; real model retry succeeds.
- Explicit cancellation during inference and during delayed worker fetch; late worker error, delayed file read, unsupported runtime, constructor failure, worker failure, malformed vector output and timeout branches pass. Defensive failures use fault injection; successful AI checks use the actual model.
- Human approval required before applying. System/value changes reset approval. Multiline reviewer note, undo, hold, input invalidation, clipboard and current export downloads pass.
- Python stdlib CSV parser independently parses downloaded complete/release artifacts; `datetime` independently checks UTC conversion values. 5 scenarios cover both fixtures, edited values/quoted comma/newline/formula-like notes, holds and maximum batch. All rows and required records survive, ready-only release contains no held/blocked record.
- 1440/390/320 viewport overflow, form labels, ≥44px controls, keyboard-focus styling, input/review/results screenshots inspected. Fresh-page hero captures avoid repeated viewport compositor artifacts. Physical phones and other browser engines untested.
- Production-startup-through-inference network observation: static GET requests only, no request bodies or source contexts in URLs; model host not requested before explicit loading. Full request query values are not persisted. Built text credential-pattern scan found no matches (not exhaustive secret detection).
- Worker/factory/WASM hashes and protocol inspected; tokenizer config `model_max_length=512` verified directly. Pipeline `max_length` is not assumed to impose a stricter cap.
- All gallery inline scripts compile with `new Function`; all 820 previous entries retained, new ai-utility entry exactly once; assembled gallery renders 821 cards with categories and narrow layout intact.

## Collection size and legacy preservation

First assembled attempt with this app: **1,000,246,333 bytes**, correctly rejected by the unchanged conservative 1 GB guard. The existing deploy-only byte-identical geometry reuse list was extended to `20261029-25` → `20261028-24`, removing 541,470 duplicated WASM bytes, preserving source builds and compatibility JS URLs. Revised assembled size: **999,705,068 bytes**. No limit increase or app removal.

Affected older maker app regression: actual shared WASM worker, initial STL, image import, ASCII STL import, parsed downloads, preview/export mesh fingerprints and portable JSON restore all pass. This regression does not change the new utility's direction or claim physical printability.

Seven assembled app/gallery/runtime assets byte-match served files. Publication evidence is recorded separately after the root combined-site deployment. No digest sent.

## Known limitations

Semantic similarity cannot recover missing metadata or guarantee source identity, negation, timezone or temporal correctness. Excel source wall times explicitly assume UTC. No cold-offline startup, physical-device testing, universal accuracy, payroll/legal deadline suitability or downstream spreadsheet importer compatibility claim. Only four specified date systems, numeric precision bounds and 1900–2100 output range are supported. CSV formula protection intentionally modifies formula-leading text; exact strings remain in JSON.

Public release verified: Pages commit `08ece338bdd0f58192e21b623df215d674ffbab0` built successfully; seven public gallery/app/runtime byte matches, both real-model fixtures, note-only AI-impact check, complete reviewed/export/max-batch/offline/privacy suite, independently parsed public artifacts, all 821 gallery cards and the affected legacy worker/import/export regression passed. Site **999,705,068 bytes** remains below the unchanged guard. Pre-existing unrelated recovery work is preserved and excluded from this source commit. Physical phones, other engines, cold offline startup and downstream importers remain untested. No digest sent.
