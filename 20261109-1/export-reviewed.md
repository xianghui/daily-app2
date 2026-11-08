# Coverage Loom — reviewed traceability

Semantic links are not proof of adequacy or test execution.

- [ ] R1 — Readers can renew borrowed books to extend the loan period. — GAP: write or find a suitable test
- [x] R2 — Readers can reserve a book that is currently checked out. — Reviewed tests: T2
- [x] R3 — Librarians can collect overdue fines for late books. — Reviewed tests: T3
- [ ] R4 — Readers can change their account email address. — GAP: write or find a suitable test

## Required scenario cells

- [ ] R1 / success — MISSING: add a success scenario and verify its assertions
- [ ] R1 / failure — MISSING: add a failure scenario and verify its assertions
- [ ] R2 / success — MISSING: add a success scenario and verify its assertions
- [x] R2 / failure — Reviewed tests: T2
- [x] R3 / success — Reviewed tests: T3
- [ ] R3 / failure — MISSING: add a failure scenario and verify its assertions
- [ ] R4 / success — MISSING: add a success scenario and verify its assertions
- [ ] R4 / failure — MISSING: add a failure scenario and verify its assertions

## All tests

- T1 [hold / success] Successfully renew a borrowed library book to extend its due date. → R1 — =1+1 Reviewed, "quoted"
- T2 [approve / failure] Successfully place a reservation on an unavailable library book. → R2
- T3 [approve / success] Attempt to pay overdue library fines with invalid card details; reject the payment and show an error. → R3
