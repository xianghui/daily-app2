# Repair café learning afternoon

Planning worksheet, not an election or consent record. MiniLM suggests meaning links, not participant intent. Verify every approval; an unrelated or negated nomination can match incorrectly. Each listed participant counts equally and each topic at most once per person. Rejections stay in the audit but do not count. Exact proportional approval maximizes sum of harmonic topic coverage, not the number of represented people directly; it does not guarantee every person gets a topic. Pins constrain both methods. Equal optima use first numeric topic bitmask (catalog-order deterministic tie-break); all tied counts reported. No invitations or external changes.

## Reviewed topic shortlist
- bike: Bicycle maintenance: fix punctures and repair bicycle tires.
- web: Website accessibility: accessible web pages for screen readers.

## Computed comparison
PAV harmonic score: 12600/2520; represented: 5/5.
Top-approval baseline score: 11340/2520; represented: 3/5.
Feasible subsets: 3; equal optima: 2; repeated approvals ignored: 0.

## Every participant
{"person":"Ada","approvals":["bike","sew"],"selectedApprovals":["bike"]}
{"person":"Ben","approvals":["bike","sew"],"selectedApprovals":["bike"]}
{"person":"Cal","approvals":["bike","sew"],"selectedApprovals":["bike"]}
{"person":"Dee","approvals":["web"],"selectedApprovals":["web"]}
{"person":"Eli","approvals":["web"],"selectedApprovals":["web"]}

## Every original nomination and review
{"row":1,"person":"Ada","text":"Fixing a flat bicycle tire","topic":"bike","aiTopic":"bike","evidence":[{"id":"bike","score":0.6395585250255519},{"id":"sew","score":0.2383860050332669},{"id":"web","score":-0.02796564365407186}],"decision":"approve","note":""}
{"row":2,"person":"Ada","text":"Mending torn clothes with needle and thread","topic":"sew","aiTopic":"sew","evidence":[{"id":"sew","score":0.6683613373478484},{"id":"bike","score":0.22334392935751227},{"id":"web","score":-0.0683228733433954}],"decision":"approve","note":""}
{"row":3,"person":"Ben","text":"Repair a punctured bike tube","topic":"bike","aiTopic":"bike","evidence":[{"id":"bike","score":0.6062975580918153},{"id":"sew","score":0.2905090355687608},{"id":"web","score":-0.017120854468640024}],"decision":"approve","note":""}
{"row":4,"person":"Ben","text":"Sew a patch on ripped fabric","topic":"sew","aiTopic":"sew","evidence":[{"id":"sew","score":0.743162149146444},{"id":"bike","score":0.2623742683015132},{"id":"web","score":-0.04413229381322865}],"decision":"approve","note":""}
{"row":5,"person":"Cal","text":"Bicycle puncture repair","topic":"bike","aiTopic":"bike","evidence":[{"id":"bike","score":0.7841062157233275},{"id":"sew","score":0.406994638758748},{"id":"web","score":-0.026193767543120458}],"decision":"approve","note":""}
{"row":6,"person":"Cal","text":"Clothing repair and stitching","topic":"sew","aiTopic":"sew","evidence":[{"id":"sew","score":0.7997346788374834},{"id":"bike","score":0.3234225372283528},{"id":"web","score":-0.013601311218046502}],"decision":"approve","note":""}
{"row":7,"person":"Dee","text":"Make web pages accessible to screen readers","topic":"web","aiTopic":"web","evidence":[{"id":"web","score":0.8304565255902497},{"id":"bike","score":0.025814105109695513},{"id":"sew","score":-0.028908460051911077}],"decision":"approve","note":""}
{"row":8,"person":"Eli","text":"Website accessibility for blind visitors","topic":"web","aiTopic":"web","evidence":[{"id":"web","score":0.780239067987633},{"id":"sew","score":0.01840481812498402},{"id":"bike","score":-0.01152235916710332}],"decision":"approve","note":""}

## Preserved source
{
  "title": "Repair café learning afternoon",
  "slots": 2,
  "pinned": [],
  "topics": [
    {
      "id": "bike",
      "description": "Bicycle maintenance: fix punctures and repair bicycle tires."
    },
    {
      "id": "sew",
      "description": "Sewing repairs: mend torn clothing and sew fabric patches."
    },
    {
      "id": "web",
      "description": "Website accessibility: accessible web pages for screen readers."
    }
  ],
  "people": [
    "Ada",
    "Ben",
    "Cal",
    "Dee",
    "Eli"
  ],
  "nominations": [
    {
      "person": "Ada",
      "text": "Fixing a flat bicycle tire"
    },
    {
      "person": "Ada",
      "text": "Mending torn clothes with needle and thread"
    },
    {
      "person": "Ben",
      "text": "Repair a punctured bike tube"
    },
    {
      "person": "Ben",
      "text": "Sew a patch on ripped fabric"
    },
    {
      "person": "Cal",
      "text": "Bicycle puncture repair"
    },
    {
      "person": "Cal",
      "text": "Clothing repair and stitching"
    },
    {
      "person": "Dee",
      "text": "Make web pages accessible to screen readers"
    },
    {
      "person": "Eli",
      "text": "Website accessibility for blind visitors"
    }
  ]
}
