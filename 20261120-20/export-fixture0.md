# Bundle Orchard — reviewed receipt draft

Café supervisor reconciling shorthand items before drafting a bundle-discount receipt.

Assumptions: Synthetic one-receipt basket. Each record is one indivisible unit; every listed promotion is single-use and may coexist only on disjoint items. Prices and discounts are pre-tax cents.

AI retrieves category meaning, not legal promotion eligibility; cosine is not confidence. Verify every item, price, rule and tax basis. Each listed promotion may be used at most once; no unit can participate twice. Held units stay in subtotal at reviewed full price and cannot earn discounts. Only fixed-amount, pre-tax, disjoint-item promotions are modeled: no percentage, stacking, tax, loyalty, shipping or minimum-order rules. Savings compare exact solver with deterministic largest-discount-first greedy on this same reviewed basket, not real-world savings or accuracy. This is a draft, not a till integration or payment.

## Computed comparison (integer cents, USD)
Subtotal 1850; exact discount 600; greedy discount 500; extra 100; payable 1250.

## Applied bundles
left: u0, u2 → −300 cents
right: u1, u3 → −300 cents

## Every original and review
### u0
Double espresso coffee
Original 450 cents; reviewed 450 cents; category c0; approve


### u1
Buttery baked croissant
Original 350 cents; reviewed 350 cents; category c1; approve


### u2
Pressed orange fruit juice
Original 400 cents; reviewed 400 cents; category c2; approve


### u3
Chicken salad lunch sandwich
Original 650 cents; reviewed 650 cents; category c3; approve
