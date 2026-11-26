# Maple studio leap-year capital handoff

Shareline Desk · reviewed planning worksheet (not filing advice)

{"id":"M1","source":"Proportionate free bonus shares distributed to existing holders without any cash payment.","type":"bonus","date":"2024-02-29","decision":"approve","reviewerNote":"=SUM(1,2)\nReviewed \"shares\", <script> & 🌿"}
{"id":"M2","source":"Outside investors subscribed and paid cash for newly issued ordinary shares.","type":"issue","date":"2024-05-01","decision":"approve","reviewerNote":""}
{"id":"M3","source":"A two-for-one stock split gave every shareholder free additional ordinary shares.","type":"bonus","date":"2024-08-01","decision":"approve","reviewerNote":""}
{"id":"M4","source":"Treasury share repurchase: company bought and cancelled its own ordinary shares.","type":"buyback","date":"2024-11-01","decision":"approve","reviewerNote":""}

## Daily weighted shares
{
  "days": 366,
  "closingShares": "40000",
  "weightedShares": {
    "numerator": "7262000",
    "denominator": "183"
  },
  "weightedSharesDisplay": "39683.060109",
  "closingDifference": {
    "numerator": "-58000",
    "denominator": "183"
  },
  "eps": {
    "numerator": "-5856",
    "denominator": "3631"
  },
  "epsDisplay": "-1.612779",
  "closingEPS": {
    "numerator": "-8",
    "denominator": "5"
  },
  "closingEPSDisplay": "-1.600000",
  "coveredDays": 366,
  "intervals": [
    {
      "from": "2024-01-01",
      "toExclusive": "2024-02-29",
      "days": 59,
      "actualShares": "12000",
      "bonusFactor": {
        "numerator": "3",
        "denominator": "1"
      },
      "restatedShares": {
        "numerator": "36000",
        "denominator": "1"
      },
      "weightedContribution": {
        "numerator": "354000",
        "denominator": "61"
      }
    },
    {
      "from": "2024-02-29",
      "toExclusive": "2024-05-01",
      "days": 62,
      "actualShares": "18000",
      "bonusFactor": {
        "numerator": "2",
        "denominator": "1"
      },
      "restatedShares": {
        "numerator": "36000",
        "denominator": "1"
      },
      "weightedContribution": {
        "numerator": "372000",
        "denominator": "61"
      }
    },
    {
      "from": "2024-05-01",
      "toExclusive": "2024-08-01",
      "days": 92,
      "actualShares": "21000",
      "bonusFactor": {
        "numerator": "2",
        "denominator": "1"
      },
      "restatedShares": {
        "numerator": "42000",
        "denominator": "1"
      },
      "weightedContribution": {
        "numerator": "644000",
        "denominator": "61"
      }
    },
    {
      "from": "2024-08-01",
      "toExclusive": "2024-11-01",
      "days": 92,
      "actualShares": "42000",
      "bonusFactor": {
        "numerator": "1",
        "denominator": "1"
      },
      "restatedShares": {
        "numerator": "42000",
        "denominator": "1"
      },
      "weightedContribution": {
        "numerator": "644000",
        "denominator": "61"
      }
    },
    {
      "from": "2024-11-01",
      "toExclusive": "2025-01-01",
      "days": 61,
      "actualShares": "40000",
      "bonusFactor": {
        "numerator": "1",
        "denominator": "1"
      },
      "restatedShares": {
        "numerator": "40000",
        "denominator": "1"
      },
      "weightedContribution": {
        "numerator": "20000",
        "denominator": "3"
      }
    }
  ],
  "trail": [
    {
      "id": "M1",
      "date": "2024-02-29",
      "type": "bonus",
      "before": "12000",
      "after": "18000",
      "quantity": 1,
      "numerator": 3,
      "denominator": 2
    },
    {
      "id": "M2",
      "date": "2024-05-01",
      "type": "issue",
      "before": "18000",
      "after": "21000",
      "quantity": 3000,
      "numerator": 1,
      "denominator": 1
    },
    {
      "id": "M3",
      "date": "2024-08-01",
      "type": "bonus",
      "before": "21000",
      "after": "42000",
      "quantity": 1,
      "numerator": 2,
      "denominator": 1
    },
    {
      "id": "M4",
      "date": "2024-11-01",
      "type": "buyback",
      "before": "42000",
      "after": "40000",
      "quantity": 2000,
      "numerator": 1,
      "denominator": 1
    }
  ]
}

AI only proposes action types. Exact day weighting and retrospective split factors are deterministic.