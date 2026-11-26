# Cedar workshop capital handoff

Shareline Desk · reviewed planning worksheet (not filing advice)

{"id":"C1","source":"New investors paid cash to subscribe for additional ordinary equity shares.","type":"issue","date":"2026-04-01","decision":"approve","reviewerNote":""}
{"id":"C2","source":"The company bought back and cancelled ordinary shares held by shareholders.","type":"buyback","date":"2026-07-01","decision":"approve","reviewerNote":""}
{"id":"C3","source":"Existing holders received a free stock split with no cash subscription.","type":"bonus","date":"2026-10-01","decision":"approve","reviewerNote":""}
{"id":"C4","source":"Additional ordinary shares were issued for cash to new subscribers.","type":"issue","date":"2026-12-01","decision":"approve","reviewerNote":""}

## Daily weighted shares
{
  "days": 365,
  "closingShares": "24000",
  "weightedShares": {
    "numerator": "1618800",
    "denominator": "73"
  },
  "weightedSharesDisplay": "22175.342466",
  "closingDifference": {
    "numerator": "-133200",
    "denominator": "73"
  },
  "eps": {
    "numerator": "45625",
    "denominator": "8094"
  },
  "epsDisplay": "5.636892",
  "closingEPS": {
    "numerator": "125",
    "denominator": "24"
  },
  "closingEPSDisplay": "5.208333",
  "coveredDays": 365,
  "intervals": [
    {
      "from": "2026-01-01",
      "toExclusive": "2026-04-01",
      "days": 90,
      "actualShares": "10000",
      "bonusFactor": {
        "numerator": "2",
        "denominator": "1"
      },
      "restatedShares": {
        "numerator": "20000",
        "denominator": "1"
      },
      "weightedContribution": {
        "numerator": "360000",
        "denominator": "73"
      }
    },
    {
      "from": "2026-04-01",
      "toExclusive": "2026-07-01",
      "days": 91,
      "actualShares": "12000",
      "bonusFactor": {
        "numerator": "2",
        "denominator": "1"
      },
      "restatedShares": {
        "numerator": "24000",
        "denominator": "1"
      },
      "weightedContribution": {
        "numerator": "436800",
        "denominator": "73"
      }
    },
    {
      "from": "2026-07-01",
      "toExclusive": "2026-10-01",
      "days": 92,
      "actualShares": "11000",
      "bonusFactor": {
        "numerator": "2",
        "denominator": "1"
      },
      "restatedShares": {
        "numerator": "22000",
        "denominator": "1"
      },
      "weightedContribution": {
        "numerator": "404800",
        "denominator": "73"
      }
    },
    {
      "from": "2026-10-01",
      "toExclusive": "2026-12-01",
      "days": 61,
      "actualShares": "22000",
      "bonusFactor": {
        "numerator": "1",
        "denominator": "1"
      },
      "restatedShares": {
        "numerator": "22000",
        "denominator": "1"
      },
      "weightedContribution": {
        "numerator": "268400",
        "denominator": "73"
      }
    },
    {
      "from": "2026-12-01",
      "toExclusive": "2027-01-01",
      "days": 31,
      "actualShares": "24000",
      "bonusFactor": {
        "numerator": "1",
        "denominator": "1"
      },
      "restatedShares": {
        "numerator": "24000",
        "denominator": "1"
      },
      "weightedContribution": {
        "numerator": "148800",
        "denominator": "73"
      }
    }
  ],
  "trail": [
    {
      "id": "C1",
      "date": "2026-04-01",
      "type": "issue",
      "before": "10000",
      "after": "12000",
      "quantity": 2000,
      "numerator": 1,
      "denominator": 1
    },
    {
      "id": "C2",
      "date": "2026-07-01",
      "type": "buyback",
      "before": "12000",
      "after": "11000",
      "quantity": 1000,
      "numerator": 1,
      "denominator": 1
    },
    {
      "id": "C3",
      "date": "2026-10-01",
      "type": "bonus",
      "before": "11000",
      "after": "22000",
      "quantity": 1,
      "numerator": 2,
      "denominator": 1
    },
    {
      "id": "C4",
      "date": "2026-12-01",
      "type": "issue",
      "before": "22000",
      "after": "24000",
      "quantity": 2000,
      "numerator": 1,
      "denominator": 1
    }
  ]
}

AI only proposes action types. Exact day weighting and retrospective split factors are deterministic.