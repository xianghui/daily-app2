# Prefix Press — reviewed event codebook

Synthetic shop telemetry; counts from one complete observation window. Only event identities are coded.

4 originals = 4 approved + 0 held. Status: ready.

view: 1; count 70
cart: 01; count 20
purchase: 001; count 8
refund: 000; count 2

Weighted Huffman payload 140 bits; fixed-width baseline 200 bits; dictionary/header/padding excluded.

Sample bits: 11010011000
Decoded: view, view, cart, purchase, view, refund
Round-trip: true

## Every source and review
- a: Looking at merchandise details on the item page; original count 70; reviewed view count 70 [approve]
  
- b: Putting goods into the shopping basket; original count 20; reviewed cart count 20 [approve]
  
- c: Finishing checkout and paying for an order; original count 8; reviewed purchase count 8 [approve]
  
- d: Money reimbursed to the buyer after a return; original count 2; reviewed refund count 2 [approve]
  

## Follow-up
- [ ] Verify meanings and observation window; do not confuse similarity with identity.
- [ ] Validate future traffic and include dictionary, framing and padding costs before adoption.
- [ ] Preserve this codebook alongside its bitstream; this worksheet is not a production codec.
