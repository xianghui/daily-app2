# Bundle Orchard — reviewed receipt draft

Art-shop assistant reviewing handwritten basket notes and compatible classroom bundles.

Assumptions: Synthetic one-receipt basket. Each record is one indivisible unit; every listed promotion is single-use and may coexist only on disjoint items. Prices and discounts are pre-tax cents.

AI retrieves category meaning, not legal promotion eligibility; cosine is not confidence. Verify every item, price, rule and tax basis. Each listed promotion may be used at most once; no unit can participate twice. Held units stay in subtotal at reviewed full price and cannot earn discounts. Only fixed-amount, pre-tax, disjoint-item promotions are modeled: no percentage, stacking, tax, loyalty, shipping or minimum-order rules. Savings compare exact solver with deterministic largest-discount-first greedy on this same reviewed basket, not real-world savings or accuracy. This is a draft, not a till integration or payment.

## Computed comparison (integer cents, USD)
Subtotal 3100; exact discount 600; greedy discount 500; extra 100; payable 2500.

## Applied bundles
left: u0, u2 → −300 cents
right: u1, u3 → −300 cents

## Every original and review
### u0
Graphite drawing pencils
Original 600 cents; reviewed 600 cents; category c0; approve


### u1
Spiral bound sketching pad
Original 800 cents; reviewed 800 cents; category c1; approve


### u2
Watercolour painting colors
Original 1200 cents; reviewed 1200 cents; category c2; approve


### u3
Fine painting brush
Original 500 cents; reviewed 500 cents; category c3; approve
