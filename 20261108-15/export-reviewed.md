# Rubric Relay — moderation handoff

Prompt: "Explain a database index and its trade-off."

Criterion: "0: unrelated or no answer; 1: explains faster row lookup only; 2: faster lookup plus storage and write-maintenance trade-off."

Similarity is not factual correctness or rubric mastery. Human review is mandatory. Totals compare the same approved subset; holds have no released mark.

- [x] "D-B" — 1/2 (original 1, AI anchor D2: 2)
  Source: "Indexes speed searches, but require extra disk space and add maintenance work on insert and update operations."
  Review: ""

- [x] "D-A" — 1/2 (original 2, AI anchor D1: 1)
  Source: "An index helps you locate matching database records quickly instead of reading every row."
  Review: "=1+1\nReviewed, \"quoted\""

- [x] "D-D" — 2/2 (original 2, AI anchor D1: 1)
  Source: "Index structures allow quick queries that avoid a full table scan."
  Review: ""

- [x] "D-C" — 0/2 (original 0, AI anchor D0: 0)
  Source: "I have no idea. I enjoy cooking pasta."
  Review: ""
