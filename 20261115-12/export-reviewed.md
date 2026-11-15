# Cutset Lantern — Both archive rooms inaccessible this month
3 records retained; 3 approved; 0 held.
Exact unique-event probability: 0.069. Naive repeated-leaf baseline: 0.034800000000000005. Difference: 0.0342. Enumerated states: 8.
Assumptions: all probabilities concern the same horizon; distinct named basic events are independent. Repeated leaves are one shared event. No probability estimated by AI. No certification or equipment action. Cutsets are structural, not mutually exclusive: never add their probabilities.

## Minimal cut sets
- lock
- water + heat

## Pivotal sensitivity (conditional difference, not confidence)
- lock: 0.98
- water: 0.19
- heat: 0.09500000000000001

## Supplied tree
```json
{
  "op": "AND",
  "children": [
    {
      "op": "OR",
      "children": [
        "lock",
        "water"
      ]
    },
    {
      "op": "OR",
      "children": [
        "lock",
        "heat"
      ]
    }
  ]
}
```

## Complete source audit
- entry1: Staff keycard door controller outage → lock / p=0.05 / approve

  =SUM(1,2)
  "quoted", recheck
- entry2: Flood water prevents entering first archive → water / p=0.1 / approve

  
- entry3: Second archive too hot to enter → heat / p=0.2 / approve

  