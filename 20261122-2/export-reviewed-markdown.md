# Community archive skill exchange

Planning worksheet, not an election or consent record. MiniLM suggests meaning links, not participant intent. Verify every approval; an unrelated or negated nomination can match incorrectly. Each listed participant counts equally and each topic at most once per person. Rejections stay in the audit but do not count. Exact proportional approval maximizes sum of harmonic topic coverage, not the number of represented people directly; it does not guarantee every person gets a topic. Pins constrain both methods. Equal optima use first numeric topic bitmask (catalog-order deterministic tie-break); all tied counts reported. No invitations or external changes.

## Reviewed topic shortlist
- photo: Digitize old photographs: scan photographic prints and preserve digital images.
- audio: Oral history recording: record spoken interviews with microphones and edit sound.

## Computed comparison
PAV harmonic score: 15120/2520; represented: 6/6.
Top-approval baseline score: 11340/2520; represented: 3/6.
Feasible subsets: 6; equal optima: 2; repeated approvals ignored: 0.

## Every participant
{"person":"Fin","approvals":["photo","paper"],"selectedApprovals":["photo"]}
{"person":"Gia","approvals":["photo","paper"],"selectedApprovals":["photo"]}
{"person":"Hal","approvals":["photo","paper"],"selectedApprovals":["photo"]}
{"person":"Ian","approvals":["audio"],"selectedApprovals":["audio"]}
{"person":"Jo","approvals":["audio"],"selectedApprovals":["audio"]}
{"person":"Kai","approvals":["audio"],"selectedApprovals":["audio"]}

## Every original nomination and review
{"row":1,"person":"Fin","text":"Scanning old family photographs","topic":"photo","aiTopic":"photo","evidence":[{"id":"photo","score":0.7019120486104372},{"id":"paper","score":0.3407517307618618},{"id":"audio","score":0.20907596442244097},{"id":"map","score":0.19041810950143268}],"decision":"approve","note":"=SUM(1,2)\nReviewed \"source\", preserved."}
{"row":2,"person":"Fin","text":"Protect fragile paper records in archival folders","topic":"paper","aiTopic":"paper","evidence":[{"id":"paper","score":0.8654115019082218},{"id":"photo","score":0.37651955015806027},{"id":"audio","score":0.21451393622557655},{"id":"map","score":0.027055926177523115}],"decision":"approve","note":""}
{"row":3,"person":"Gia","text":"Digitizing photographic prints","topic":"photo","aiTopic":"photo","evidence":[{"id":"photo","score":0.8065617527878484},{"id":"paper","score":0.3130956311344146},{"id":"map","score":0.2883200888849464},{"id":"audio","score":0.2556361763384471}],"decision":"approve","note":""}
{"row":4,"person":"Gia","text":"Safe storage for delicate paper documents","topic":"paper","aiTopic":"paper","evidence":[{"id":"paper","score":0.7861807498463985},{"id":"photo","score":0.346437776576662},{"id":"audio","score":0.11314366329974847},{"id":"map","score":0.03608289644830308}],"decision":"approve","note":""}
{"row":5,"person":"Hal","text":"Preserving photographs with a scanner","topic":"photo","aiTopic":"photo","evidence":[{"id":"photo","score":0.7847071321138556},{"id":"paper","score":0.3897283595888715},{"id":"map","score":0.2755488918820968},{"id":"audio","score":0.16707915699083023}],"decision":"approve","note":""}
{"row":6,"person":"Hal","text":"Paper conservation and archival document storage","topic":"paper","aiTopic":"paper","evidence":[{"id":"paper","score":0.8610312787701228},{"id":"photo","score":0.42468066865751586},{"id":"audio","score":0.21385035385681136},{"id":"map","score":0.10229246005041659}],"decision":"approve","note":""}
{"row":7,"person":"Ian","text":"Recording oral history interviews with a microphone","topic":"audio","aiTopic":"audio","evidence":[{"id":"audio","score":0.9056038447005047},{"id":"photo","score":0.1927314138364095},{"id":"paper","score":0.1628947224855161},{"id":"map","score":-0.034707590791935576}],"decision":"approve","note":""}
{"row":8,"person":"Jo","text":"Editing the sound of spoken interviews","topic":"audio","aiTopic":"audio","evidence":[{"id":"audio","score":0.700116637385967},{"id":"photo","score":0.050554952172496656},{"id":"paper","score":0.030880707522082704},{"id":"map","score":-0.01861269735291418}],"decision":"approve","note":""}
{"row":9,"person":"Kai","text":"Audio recording for oral histories","topic":"audio","aiTopic":"audio","evidence":[{"id":"audio","score":0.8339725746385674},{"id":"paper","score":0.2634228573594907},{"id":"photo","score":0.22640919601753862},{"id":"map","score":0.06881662373111647}],"decision":"approve","note":""}

## Preserved source
{
  "title": "Community archive skill exchange",
  "slots": 2,
  "pinned": [],
  "topics": [
    {
      "id": "photo",
      "description": "Digitize old photographs: scan photographic prints and preserve digital images."
    },
    {
      "id": "paper",
      "description": "Paper conservation: safely store fragile paper documents in archival folders."
    },
    {
      "id": "audio",
      "description": "Oral history recording: record spoken interviews with microphones and edit sound."
    },
    {
      "id": "map",
      "description": "Geographic mapping: create digital maps and plot coordinates."
    }
  ],
  "people": [
    "Fin",
    "Gia",
    "Hal",
    "Ian",
    "Jo",
    "Kai"
  ],
  "nominations": [
    {
      "person": "Fin",
      "text": "Scanning old family photographs"
    },
    {
      "person": "Fin",
      "text": "Protect fragile paper records in archival folders"
    },
    {
      "person": "Gia",
      "text": "Digitizing photographic prints"
    },
    {
      "person": "Gia",
      "text": "Safe storage for delicate paper documents"
    },
    {
      "person": "Hal",
      "text": "Preserving photographs with a scanner"
    },
    {
      "person": "Hal",
      "text": "Paper conservation and archival document storage"
    },
    {
      "person": "Ian",
      "text": "Recording oral history interviews with a microphone"
    },
    {
      "person": "Jo",
      "text": "Editing the sound of spoken interviews"
    },
    {
      "person": "Kai",
      "text": "Audio recording for oral histories"
    }
  ]
}
