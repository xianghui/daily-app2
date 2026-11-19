# Skip Ledger — conditional questionnaire audit

Synthetic workshop questionnaire. 1=yes, 0=no. No access is granted by this worksheet.

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
    "id": "tools",
    "text": "Do you use powered workshop tools and machinery?",
    "when": null
  },
  {
    "id": "training",
    "text": "Have you completed the workshop machine safety training?",
    "when": {
      "question": "tools",
      "equals": 1
    }
  },
  {
    "id": "refresher",
    "text": "Have you attended a refresher safety training course?",
    "when": {
      "question": "training",
      "equals": 1
    }
  }
]

## Complete roster and verification checklist
### D · review needed
- tools: answered; answer 0; Unconditional question
- training: intentional skip; answer missing; Gate tools = 0; requires 1
- refresher: unexpected answer; answer 1; Ancestor gate training is inactive
- [ ] refresher: Verify off-path answer; do not delete

### E · review needed
- tools: answered; answer 1; Unconditional question
- training: answered; answer 1; Gate tools = 1
- refresher: missing; answer missing; Gate training = 1
- [ ] refresher: Request required answer

### F · review needed
- tools: answered; answer 1; Unconditional question
- training: missing; answer missing; Gate tools = 1
- refresher: blocked by gate; answer 0; Resolve gate training first
- [ ] training: Request required answer
- [ ] refresher: Resolve gate training first

## Complete original and reviewed record audit
### w1 / D
Using electric workshop machinery
Original 0; reviewed 0
approve; question tools; proposal tools


### w2 / E
Operating powered workshop equipment
Original 1; reviewed 1
approve; question tools; proposal tools


### w3 / E
Finishing the initial machinery safety induction
Original 1; reviewed 1
approve; question training; proposal training


### w4 / F
Working with powered shop tools
Original 1; reviewed 1
approve; question tools; proposal tools


### w5 / F
Taking a safety refresher class
Original 0; reviewed 0
approve; question refresher; proposal refresher


### w6 / D
Attending a refresher course for safety
Original 1; reviewed 1
approve; question refresher; proposal refresher

