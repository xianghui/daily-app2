# Finance capability workshop

Workshop blueprint only. Absence means no grant in this matrix, not proof of denial. Verify duties, segregation rules and real authorization semantics separately. No accounts are accessed or changed.

Role count: 2; baseline one role per nonempty person: 3.
Optimality: minimum role count proved within candidate enumeration.
Unique approved cells: 4; reconstructed: 4; extra: 0; missing: 0.
- R1: members [Dev, Fran]; capabilities [invoice]
- R2: members [Eli, Fran]; capabilities [refund]

## Source review
### F1 / Dev
prepare billing invoices for customers
AI: invoice; reviewed: invoice; approve
=SUM(1,2)
"reviewer", verify grant

### F2 / Eli
return customer payments as refunds
AI: refund; reviewed: refund; approve


### F3 / Fran
create customer invoices
AI: invoice; reviewed: invoice; approve


### F4 / Fran
issue refunds to customers
AI: refund; reviewed: refund; approve


## Method
Real MiniLM embeddings retrieve capability meanings. Similarity is not confidence, authorization or policy compliance. Human review is mandatory. Deterministic maximal safe rectangles and branch-and-bound set cover minimize role COUNT, not administrative assignments. Roles may overlap. Duplicate grant evidence is retained and counts once in the matrix. No permission beyond an approved matrix cell may appear.
Limits: 6 people, 6 capabilities, 36 grants; 200,000 search nodes. Bound reached means a feasible nonoptimal plan. No deny rules, hierarchies, temporal/contextual policy, segregation-of-duties inference or deployment.
