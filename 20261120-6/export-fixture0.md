# Gap Orchard — missing-answer follow-up worksheet

Synthetic library visitor feedback, 1–5 ratings. Follow-up flags are supplied permissions, not inferred consent.

No answers are imputed. All listed questions are required and every absent/empty/held cell is missing. Follow-up requires the supplied permission flag, not inferred consent. Proposed complete cases assume every requested answer is returned; this is a capacity ceiling, not a forecast or bias correction. Pairwise counts show availability, not statistical validity. Optimize number of newly complete people, then fewer requested cells, then earliest subset in roster bit order. Baseline takes feasible whole people in roster order. Held records remain in audit but cannot populate cells. No messages sent.

## Computed capacity comparison
{
  "people": 4,
  "questions": 3,
  "observedCells": 6,
  "missingCells": 6,
  "completeCases": 0,
  "listwiseExcluded": 4,
  "proposedContacts": 2,
  "proposedCells": 2,
  "potentialCompleteCases": 2,
  "baselineContacts": [
    "A"
  ],
  "baselineCells": 2,
  "baselinePotentialCompleteCases": 1
}

## Complete roster and proposed checklist
### A · deferred by budget
Permission: true. Missing: staff, quiet
- Deferred: staff: Helpfulness of librarians answering questions at the service desk
- Deferred: quiet: Quiet study spaces free from noise and distractions

### B · proposed follow-up
Permission: true. Missing: books
- [ ] books: Availability of books and reading material on library shelves

### C · proposed follow-up
Permission: true. Missing: quiet
- [ ] quiet: Quiet study spaces free from noise and distractions

### D · no follow-up permission
Permission: false. Missing: books, staff
- Deferred: books: Availability of books and reading material on library shelves
- Deferred: staff: Helpfulness of librarians answering questions at the service desk

## Complete original and reviewed record audit
### r1 / A
Selection of novels and nonfiction titles
Original 4; reviewed 4
approve; question books; proposal books


### r2 / B
Useful help from the librarian
Original 5; reviewed 5
approve; question staff; proposal staff


### r3 / B
Peaceful places to study without loud noise
Original 3; reviewed 3
approve; question quiet; proposal quiet


### r4 / C
Range of books available to borrow
Original 2; reviewed 2
approve; question books; proposal books


### r5 / C
Staff assistance at the information counter
Original 4; reviewed 4
approve; question staff; proposal staff


### r6 / D
Silent reading and study rooms
Original 5; reviewed 5
approve; question quiet; proposal quiet


## Pairwise availability counts
[
  {
    "question": "books",
    "counts": [
      {
        "question": "books",
        "n": 2
      },
      {
        "question": "staff",
        "n": 1
      },
      {
        "question": "quiet",
        "n": 0
      }
    ]
  },
  {
    "question": "staff",
    "counts": [
      {
        "question": "books",
        "n": 1
      },
      {
        "question": "staff",
        "n": 2
      },
      {
        "question": "quiet",
        "n": 1
      }
    ]
  },
  {
    "question": "quiet",
    "counts": [
      {
        "question": "books",
        "n": 0
      },
      {
        "question": "staff",
        "n": 1
      },
      {
        "question": "quiet",
        "n": 2
      }
    ]
  }
]