# Form Parcel — observed validation

## Local production build and workflow

- React + Vite `npm run predeploy` passed. Tests serve the production bundle at its real `/daily-app2/20261125-5/` base, not the Vite development server. Shared CPU worker/factory/WASM are preserved immutable assets; SHA-256 provenance checked.
- Real Chrome, headless, `--disable-gpu`, real q8 MiniLM/WASM inference. Two materially different, paraphrased synthetic batches: registration/catalog/feedback and museum/recipe/bicycle repair. **6/6 intended contracts matched**. This tiny fixture result is not general accuracy. First-contract baseline would match 2/6. A context-only intervention changed the same ordered fields from POST registration to GET catalog, changing actual URL/body outputs. A negation probe selected its intended catalog contract in this instance; no general negation competence is claimed.
- Each three-record fixture retained five fields per record and avoided one duplicate occurrence loss per record against object conversion. Both had 3/3 payload differences. Counts are computed, not productivity estimates.
- 24-record batch completed through four-text inference chunks; every intended profile and every record survived. Real fresh-worker inference passed with browser context fully offline after warming, on the already-open page. **Cold offline navigation/reload was not tested and is not supported.**
- Review pending blocks apply; approval, changed destination/entry JSON, multiline note, export invalidation, hold, undo and malformed approved-entry blocking passed. Cancel during run/download, retry, source edits and delayed file-read stale guards passed. Clipboard and actual browser downloads passed.
- A dense Unicode audit envelope (246,251 bytes, 24 originals plus notes) reimported all originals; >4 MB rejected.

## Independent serialization and artifact checks

- **96 real Chrome HTML form oracle cases passed**, with all synthetic HTTPS destinations intercepted before network. GET/POST methods, queries, plus/space, ampersands/equals, Unicode/emoji, NUL, tabs, repeated fields, integer-like names, empty values, names containing line breaks and all CR/LF forms checked. Browser successful-control rules omit empty-name controls, whereas this tool accepts completed entry lists with empty names; oracle comparison explicitly accounts for this documented boundary. No assertion that DOM control selection is implemented.
- Python `urllib.parse.urlencode/parse_qsl` independently checked actual JSON/CSV/Markdown/Fixtures downloads: **687 assertions**, **33 request fixtures reopened**, all audit records, original/reviewed text, notes, normalized pairs, encoded payloads, duplicate-loss counts, byte counts and GET/POST URL/body behavior survived. HTML's percent-escaped tilde and unescaped star handled explicitly in the independent oracle.
- Reviewed note beginning `=SUM(1,2)` with line break/quotes/commas survived exact JSON and guarded CSV. Edited multiline field survived as CRLF in exported expected entries. Held/blocked records remain in complete audits, omitted from approved fixtures.
- 22 schema/limit checks passed: malformed pair shapes/types, 41 pairs, oversized strings/source/batches, unpaired Unicode, unsafe action schemes/credentials/fragments, unsupported method, malformed vectors and pending reviews rejected. 40-pair limit passed; an inert `__proto__` field name preserved.

## Failures, privacy and layout

- Ten defensive browser cases passed: actual worker download abort; model-host abort; unsupported Worker/WebAssembly; construction failure; worker error; malformed vectors; accelerated timeout; late stale response; cancellation during delayed worker fetch. Fault injection is confined to defensive tests; successful inference uses the real model.
- Request capture began before page navigation: no Hugging Face request before explicit load. All observed local-path requests were GET with no request bodies and no fixture contexts in URLs, to same-origin assets, blob modules, Hugging Face and its CDN only. Signed CDN query values are not persisted in reports. No form destinations were fetched by the app. Source review finds no provider integration/key fields; credential-pattern scan on built text assets passed. Pattern scans alone are not a guarantee against all secrets.
- Desktop 1440 and narrow 390/320 CSS-pixel layouts passed no-document-overflow, labels and ≥44-pixel button/select controls. Normal viewport hero/review/results screenshots saved and inspected. Browser console/page errors: none. Physical phones, other engines, screen-reader sessions, full DOM successful-control extraction, multipart/file inputs, real endpoint acceptance and cold offline startup remain untested.

## Collection and publication

Gallery scripts compile with Node `new Function`, new entry exactly once with correct area/folder; 856 prior entries and categories preserved; AI Utilities remains first. Root predeploy assembled 857 apps with zero failures/skips, **999,911,269 bytes**, below unchanged 1,000,000,000-byte guard. No runtime sharing rules changed and no legacy source modified. Assembled/public reruns and exact asset byte reports are recorded beside this document. Publication status is recorded separately after Pages confirms the matching commit and public real inference passes.

No digest sent. Original collection remains read-only; unrelated existing source/recovery work is preserved and excluded from this job's source staging.

## Verified public release

Pages commit `9f8e5f989675b152dd9572dead1747f4a4127cdb` is built and workflow `45477699043` completed successfully. All seven public app/CSS/worker/factory/WASM/gallery assets match assembled bytes. Public real inference matched both paraphrased fixtures (6/6), the context-only intervention, 24-record chunked batch, reviewed/held/blocked/undo/download/clipboard workflow, warmed fresh-worker offline inference and responsive/privacy checks. Public downloads passed 687 independent assertions and reopened 33 fixtures; 246,251-byte dense Unicode audit reimport and all 857 gallery cards passed. See `public-*.json` and `publication-status.json`. No claim of cold offline or physical-phone validation.
