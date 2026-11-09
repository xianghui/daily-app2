

## Index Folio — 20261110-7

Real local MiniLM matches paginated excerpts to controlled subject headings for a mandatory human-reviewed back-of-book index. Edit multi-subject links and page spans, hold unsuitable excerpts, deduplicate overlapping page references and export complete JSON/CSV/Markdown. Both tiny fixtures matched 12/12 intended single subjects versus no literal-title hits; negated/unrelated text still needs holds. Fresh-worker offline inference tested inside an already-open cached page, not reload. Reuses immutable WASM from `20261107-2`; preserve it. See [workflow/privacy](20261110-7/README.md) and [observed validation](20261110-7/VALIDATION.md).

### Combined-site size guard

The combined site reached 1,270,905,714 bytes, exceeding GitHub Pages’ documented 1 GB published-site limit. Root `deploy.sh` now runs `scripts/dedupe-runtime.py`: it verifies byte-identical ONNX WASM copies, reuses the immutable `20261107-2` asset for 14 earlier apps, cache-busts changed workers and entry shells, retains compatibility JS URLs and leaves every source/dist build untouched. The generated `deploy/runtime-deduplication.json` records exact sizes and paths; the build fails above a conservative 1,000,000,000-byte budget. Real inference was verified on every affected legacy worker locally and publicly; the optimized Pages deployment succeeded. Old open sessions may need a reload after cache migration. Do not remove the shared asset or bypass the root size guard.
