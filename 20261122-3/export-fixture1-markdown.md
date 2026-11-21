# Archive items and language-specific rights

Reviewed sample join, not a database migration. AI links field descriptions, never proves key identity or compatibility. Verify IDs, units and composite components. Exact typed equality preserves case and whitespace; null/empty components never match. First-match baseline hides extra matches; this audit preserves all of them and all unused right records in the complete JSON. No deduplication, fuzzy value matching or external changes. Observed uniqueness is limited to this sample. Expectation violations do not block this explicitly reviewed draft export.

## Reviewed join contract
[{"left":"item","right":"asset"},{"left":"language","right":"locale"}]

Observed one-to-many; expected one-to-one.
Right key is not unique: lookup expectation violated.
Exact left join: 5 rows; first-match baseline: 4; extra: 1.
Unmatched left: 4; unused right: 5.

## Source lineage
{"leftRow":1,"rightRows":[1],"nullKey":false}
{"leftRow":2,"rightRows":[2],"nullKey":false}
{"leftRow":3,"rightRows":[3,4],"nullKey":false}
{"leftRow":4,"rightRows":[],"nullKey":false}

## Complete reviews
{"left":"item","right":"asset","aiRight":"asset","evidence":[{"id":"asset","score":0.6575708223134048},{"id":"rights","score":0.4972930387172433},{"id":"locale","score":0.24236692518246894},{"id":"memo","score":0.2230863473806758}],"decision":"approve","note":""}
{"left":"license","right":"rights","aiRight":"rights","evidence":[{"id":"rights","score":0.5953473046740578},{"id":"asset","score":0.4255359183154208},{"id":"locale","score":0.21437803085422938},{"id":"memo","score":0.17135503330991914}],"decision":"reject","note":""}
{"left":"language","right":"locale","aiRight":"locale","evidence":[{"id":"locale","score":0.7055376500630969},{"id":"asset","score":0.17928559565370952},{"id":"memo","score":0.09655481539030898},{"id":"rights","score":0.08694532090759718}],"decision":"approve","note":""}
{"left":"comment","right":"memo","aiRight":"memo","evidence":[{"id":"memo","score":0.5194698134693407},{"id":"asset","score":0.12006322490033774},{"id":"rights","score":0.09313870725734746},{"id":"locale","score":0.030045213317742292}],"decision":"reject","note":""}

## Both original tables
{
  "title": "Archive items and language-specific rights",
  "expectation": "one-to-one",
  "left": {
    "fields": [
      {
        "id": "item",
        "description": "Unique identifier of a digital archive photograph asset."
      },
      {
        "id": "license",
        "description": "Copyright license and permission to reproduce the image."
      },
      {
        "id": "language",
        "description": "Language code for translated text and captions."
      },
      {
        "id": "comment",
        "description": "Internal staff processing notes and comments."
      }
    ],
    "rows": [
      [
        "P1",
        "CC0",
        "en",
        "Check crop"
      ],
      [
        "P1",
        "CC0",
        "fr",
        "Check caption"
      ],
      [
        "P2",
        "CC-BY",
        "en",
        "Credit author"
      ],
      [
        "P4",
        null,
        "en",
        "Await release"
      ]
    ]
  },
  "right": {
    "fields": [
      {
        "id": "rights",
        "description": "Legal authorization for reuse and publication of copyrighted pictures."
      },
      {
        "id": "locale",
        "description": "Translation locale identifying the language of the caption."
      },
      {
        "id": "memo",
        "description": "Private working remarks written by archive employees."
      },
      {
        "id": "asset",
        "description": "Reference number identifying a digitized photograph in the collection."
      }
    ],
    "rows": [
      [
        "CC0",
        "en",
        "Public",
        "P1"
      ],
      [
        "CC0",
        "fr",
        "Public",
        "P1"
      ],
      [
        "CC-BY",
        "en",
        "Signed",
        "P2"
      ],
      [
        "CC-BY",
        "en",
        "Revised",
        "P2"
      ],
      [
        "CC0",
        "es",
        "Unused",
        "P8"
      ]
    ]
  }
}
