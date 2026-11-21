# Discordance Dock — Software rechecks

Approved pairs: 6. Improvements: 3. Regressions: 1. Unchanged: 2.

Paired net pass-rate change: 33.33 percentage points. All-original marginal baseline: 16.67 percentage points.

Exact two-sided McNemar p: 0.62500 (not effect size or confidence).

Exploratory paired QA audit. Similarity is not identity or confidence. Exact two-sided McNemar binomial p-value assumes independent case pairs with symmetric discordant outcomes under the null; no causal claim, repeated-peeking correction or uncertainty interval. Unmatched/held cases are excluded from paired statistics, not erased. Marginal baseline uses all original outcomes and may compare different case mixes.

## old1 → new3 · approve

Left: Password reset sends the recovery email.

Right: Forgotten password recovery message arrives in inbox.

Reviewed outcomes: fail → pass

=SUM(1,2)
"owner", recheck

## old2 → new6 · approve

Left: CSV export includes all spreadsheet rows.

Right: Exported comma separated file preserves all records.

Reviewed outcomes: pass → pass



## old3 → new1 · approve

Left: Keyboard navigation reaches every dialog control.

Right: Tab key can focus every button in the modal.

Reviewed outcomes: fail → pass



## old4 → new5 · approve

Left: Shopping cart tax calculation rounds correctly.

Right: Checkout sales tax cents are rounded as specified.

Reviewed outcomes: fail → pass



## old5 → new4 · approve

Left: Uploaded photograph keeps correct orientation.

Right: Photo upload preserves portrait rotation.

Reviewed outcomes: pass → fail



## old6 → new2 · approve

Left: Search finds words containing accented characters.

Right: Search query matches letters with diacritics.

Reviewed outcomes: fail → fail



## Unmatched right originals


