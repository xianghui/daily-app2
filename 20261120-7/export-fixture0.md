# Skip Ledger — conditional questionnaire audit

Synthetic library questionnaire. All answers are binary: 1=yes, 0=no. Gates use reviewed answers only.

Binary answers only. Gates use approved reviewed answers, never model guesses. A skipped ancestor deactivates its descendants even if an off-path answer exists. A missing/held/blank active gate blocks dependent decisions. Unexpected off-path answers are retained for verification, not erased. Rectangular blanks are a naive baseline, not an error count; blocked gates may create additional missing answers when resolved. Completeness is structural only, not truth, consent, access permission or eligibility. No messages or external changes.

## Computed comparison
{
  "people": 3,
  "questions": 3,
  "allCells": 9,
  "answered": 4,
  "missing": 2,
  "skipped": 1,
  "unexpected": 1,
  "blocked": 1,
  "rectangularBlanks": 3,
  "completePeople": 0
}

## Full question register and gates
[
  {
    "id": "borrow",
    "text": "Do you borrow printed library books?",
    "when": null
  },
  {
    "id": "reserve",
    "text": "Do you reserve books using the online catalog?",
    "when": {
      "question": "borrow",
      "equals": 1
    }
  },
  {
    "id": "alerts",
    "text": "Do you receive notifications when reserved books arrive?",
    "when": {
      "question": "reserve",
      "equals": 1
    }
  }
]

## Complete roster and verification checklist
### A · review needed
- borrow: answered; answer 0; Unconditional question
- reserve: intentional skip; answer missing; Gate borrow = 0; requires 1
- alerts: unexpected answer; answer 1; Ancestor gate reserve is inactive
- [ ] alerts: Verify off-path answer; do not delete

### B · review needed
- borrow: answered; answer 1; Unconditional question
- reserve: answered; answer 1; Gate borrow = 1
- alerts: missing; answer missing; Gate reserve = 1
- [ ] alerts: Request required answer

### C · review needed
- borrow: answered; answer 1; Unconditional question
- reserve: missing; answer missing; Gate borrow = 1
- alerts: blocked by gate; answer 1; Resolve gate reserve first
- [ ] reserve: Request required answer
- [ ] alerts: Resolve gate reserve first

## Complete original and reviewed record audit
### l1 / A
Borrowing physical books from the library
Original 0; reviewed 0
approve; question borrow; proposal borrow


### l2 / B
Taking printed books home on loan
Original 1; reviewed 1
approve; question borrow; proposal borrow


### l3 / B
Placing a book reservation on the website
Original 1; reviewed 1
approve; question reserve; proposal reserve


### l4 / C
Borrowing paper books
Original 1; reviewed 1
approve; question borrow; proposal borrow


### l5 / C
Getting a message that my reserved title is ready
Original 1; reviewed 1
approve; question alerts; proposal alerts


### l6 / A
Email notification when reserved books are ready to collect
Original 1; reviewed 1
approve; question alerts; proposal alerts

