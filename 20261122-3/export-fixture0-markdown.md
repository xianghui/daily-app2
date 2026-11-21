# Orders and customer branches

Reviewed sample join, not a database migration. AI links field descriptions, never proves key identity or compatibility. Verify IDs, units and composite components. Exact typed equality preserves case and whitespace; null/empty components never match. First-match baseline hides extra matches; this audit preserves all of them and all unused right records in the complete JSON. No deduplication, fuzzy value matching or external changes. Observed uniqueness is limited to this sample. Expectation violations do not block this explicitly reviewed draft export.

## Reviewed join contract
[{"left":"buyer","right":"client"},{"left":"branch","right":"district"}]

Observed one-to-many; expected many-to-one.
Right key is not unique: lookup expectation violated.
Exact left join: 6 rows; first-match baseline: 5; extra: 1.
Unmatched left: 4, 5; unused right: 5, 6.

## Source lineage
{"leftRow":1,"rightRows":[1],"nullKey":false}
{"leftRow":2,"rightRows":[2],"nullKey":false}
{"leftRow":3,"rightRows":[3,4],"nullKey":false}
{"leftRow":4,"rightRows":[],"nullKey":false}
{"leftRow":5,"rightRows":[],"nullKey":true}

## Complete reviews
{"left":"buyer","right":"client","aiRight":"client","evidence":[{"id":"client","score":0.7327954018489492},{"id":"district","score":0.4702356177299664},{"id":"memo","score":0.25367785181205094}],"decision":"approve","note":""}
{"left":"note","right":"memo","aiRight":"memo","evidence":[{"id":"memo","score":0.5053661207501111},{"id":"client","score":0.22981124279443743},{"id":"district","score":0.22257729930372805}],"decision":"reject","note":""}
{"left":"branch","right":"district","aiRight":"district","evidence":[{"id":"district","score":0.6269415995352697},{"id":"client","score":0.27634150661257745},{"id":"memo","score":0.27283160375617277}],"decision":"approve","note":""}

## Both original tables
{
  "title": "Orders and customer branches",
  "expectation": "many-to-one",
  "left": {
    "fields": [
      {
        "id": "buyer",
        "description": "Customer account identifier for the buyer."
      },
      {
        "id": "note",
        "description": "Free text delivery instructions and delivery notes."
      },
      {
        "id": "branch",
        "description": "Regional branch office location code."
      }
    ],
    "rows": [
      [
        "C1",
        "Leave at reception",
        "N"
      ],
      [
        "C1",
        "Ring bell",
        "S"
      ],
      [
        "C2",
        "Fragile",
        "N"
      ],
      [
        "C3",
        "Call ahead",
        "N"
      ],
      [
        null,
        "Unknown buyer",
        "N"
      ]
    ]
  },
  "right": {
    "fields": [
      {
        "id": "district",
        "description": "Geographic identifier of the local company office."
      },
      {
        "id": "client",
        "description": "Purchasing client account number used to identify a customer."
      },
      {
        "id": "memo",
        "description": "Written directions for the courier dropping off a parcel."
      }
    ],
    "rows": [
      [
        "N",
        "C1",
        "Main"
      ],
      [
        "S",
        "C1",
        "South"
      ],
      [
        "N",
        "C2",
        "First"
      ],
      [
        "N",
        "C2",
        "Duplicate"
      ],
      [
        "N",
        null,
        "Unassigned"
      ],
      [
        "N",
        "C9",
        "Unused"
      ]
    ]
  }
}
