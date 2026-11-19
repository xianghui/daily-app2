# Gap Orchard — missing-answer follow-up worksheet

Synthetic community workshop ratings. All questions required for this worksheet; no missing-value imputation.

No answers are imputed. All listed questions are required and every absent/empty/held cell is missing. Follow-up requires the supplied permission flag, not inferred consent. Proposed complete cases assume every requested answer is returned; this is a capacity ceiling, not a forecast or bias correction. Pairwise counts show availability, not statistical validity. Optimize number of newly complete people, then fewer requested cells, then earliest subset in roster bit order. Baseline takes feasible whole people in roster order. Held records remain in audit but cannot populate cells. No messages sent.

## Computed capacity comparison
{
  "people": 4,
  "questions": 3,
  "observedCells": 5,
  "missingCells": 7,
  "completeCases": 0,
  "listwiseExcluded": 4,
  "proposedContacts": 2,
  "proposedCells": 2,
  "potentialCompleteCases": 2,
  "baselineContacts": [
    "E"
  ],
  "baselineCells": 2,
  "baselinePotentialCompleteCases": 1
}

## Complete roster and proposed checklist
### E · deferred by budget
Permission: true. Missing: teaching, booking
- Deferred: teaching: Clarity of instructor explanations and teaching demonstrations
- Deferred: booking: Ease of reserving a workshop session using the online booking system

### F · proposed follow-up
Permission: true. Missing: tools
- [ ] tools: Availability and condition of hand tools and workshop equipment

### G · proposed follow-up
Permission: true. Missing: booking
- [ ] booking: Ease of reserving a workshop session using the online booking system

### H · no follow-up permission
Permission: false. Missing: tools, teaching, booking
- Deferred: tools: Availability and condition of hand tools and workshop equipment
- Deferred: teaching: Clarity of instructor explanations and teaching demonstrations
- Deferred: booking: Ease of reserving a workshop session using the online booking system

## Complete original and reviewed record audit
### w1 / E
Working tools and machinery ready to use
Original 8; reviewed 8
approve; question tools; proposal tools


### w2 / F
Teacher explained each step clearly
Original 9; reviewed 9
approve; question teaching; proposal teaching


### w3 / F
Simple website reservation for class places
Original 7; reviewed 7
approve; question booking; proposal booking


### w4 / G
Well maintained workshop tools
Original 6; reviewed 6
approve; question tools; proposal tools


### w5 / G
Clear tutor demonstrations
Original 8; reviewed 8
approve; question teaching; proposal teaching


### w6 / H
Making a class reservation online
Original missing; reviewed missing
approve; question booking; proposal booking


## Pairwise availability counts
[
  {
    "question": "tools",
    "counts": [
      {
        "question": "tools",
        "n": 2
      },
      {
        "question": "teaching",
        "n": 1
      },
      {
        "question": "booking",
        "n": 0
      }
    ]
  },
  {
    "question": "teaching",
    "counts": [
      {
        "question": "tools",
        "n": 1
      },
      {
        "question": "teaching",
        "n": 2
      },
      {
        "question": "booking",
        "n": 1
      }
    ]
  },
  {
    "question": "booking",
    "counts": [
      {
        "question": "tools",
        "n": 0
      },
      {
        "question": "teaching",
        "n": 1
      },
      {
        "question": "booking",
        "n": 1
      }
    ]
  }
]