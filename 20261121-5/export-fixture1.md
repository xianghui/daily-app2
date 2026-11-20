# Cue Harbor — reviewed rehearsal worksheet

Synthetic tour rehearsal. Compare ordered cue coverage against independent nearest-cue retrieval.

Rehearsal worksheet only, not proof that a cue was spoken correctly or understood. Supplied text is manually segmented: at most one fragment per cue and one cue per fragment. Neural semantic similarity is not entailment or confidence; negation and repeated wording can mislink. Exact dynamic programming maximizes sum(cosine-floor) with optional skips and strict increasing cue positions; it may omit a semantically valid fragment to preserve order. Independent nearest-cue baseline uses the same approved fragments and original scores; its duplicates/reversals are pair counts, not accuracy. Holds remain in the audit and can conceal missing evidence. No audio transcription, sending or execution.

Approved 4; held 0; matched 4; unmatched 0; cues without approved evidence 0

Independent baseline: 0 duplicate pairs; 0 reversed pairs. Reviewed: 0 duplicate/reversed pairs.

## Ordered cue evidence & gaps
- [x] 1. entry: Welcome visitors at the museum entrance and introduce the guided tour. — m1 
- [x] 2. painting: Describe the landscape painting and the artist who painted it. — m2 
- [x] 3. sculpture: Explain the bronze sculpture and its casting technique. — m3 
- [x] 4. exit: End the tour by directing visitors to the gift shop and exit. — m4 

## Complete fragment review
### m1
Welcome to the museum! I will be your guide today.
approve; cue entry


### m2
This countryside canvas was painted by a local landscape artist.
approve; cue painting


### m3
The statue was made by pouring molten bronze into a mold.
approve; cue sculpture


### m4
Our visit is over. You can leave through the souvenir store on your right.
approve; cue exit
