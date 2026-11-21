# Editorial access review

Workshop blueprint only. Absence means no grant in this matrix, not proof of denial. Verify duties, segregation rules and real authorization semantics separately. No accounts are accessed or changed.

Role count: 2; baseline one role per nonempty person: 3.
Optimality: minimum role count proved within candidate enumeration.
Unique approved cells: 7; reconstructed: 7; extra: 0; missing: 0.
- R1: members [Ada, Cleo]; capabilities [read, edit]
- R2: members [Ben, Cleo]; capabilities [read, publish]

## Source review
### G1 / Ada
view articles and drafts
AI: read; reviewed: read; approve


### G2 / Ada
revise the article wording
AI: edit; reviewed: edit; approve


### G3 / Ben
read editorial drafts
AI: read; reviewed: read; approve


### G4 / Ben
release approved articles online
AI: publish; reviewed: publish; approve


### G5 / Cleo
read the article drafts
AI: read; reviewed: read; approve


### G6 / Cleo
edit draft article text
AI: edit; reviewed: edit; approve


### G7 / Cleo
publish approved website articles
AI: publish; reviewed: publish; approve


## Method
Real MiniLM embeddings retrieve capability meanings. Similarity is not confidence, authorization or policy compliance. Human review is mandatory. Deterministic maximal safe rectangles and branch-and-bound set cover minimize role COUNT, not administrative assignments. Roles may overlap. Duplicate grant evidence is retained and counts once in the matrix. No permission beyond an approved matrix cell may appear.
Limits: 6 people, 6 capabilities, 36 grants; 200,000 search nodes. Bound reached means a feasible nonoptimal plan. No deny rules, hierarchies, temporal/contextual policy, segregation-of-duties inference or deployment.
