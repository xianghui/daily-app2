# Purpose Fence — reviewed data-use plan

Human-reviewed planning only. Similarity is not consent, legal authority, necessity or compliance. Policy limits are user supplied, not independently verified. Baseline counts forbidden fields plus over-limit retention against the SAME reviewed purpose assignments across all original requests; reviewed counts approved subset only, holds excluded.

- [x] "S1" — APPROVED PLAN
  Purpose: "delivery"
  Source: "Prepare parcel labels with the destination and send tracking updates."
  Fields: order_id, address, email · 20 days (original 90)
  Review: "=1+1\nReviewed, \"quoted\""

- [x] "S2" — APPROVED PLAN
  Purpose: "returns"
  Source: "Reimburse shoppers after returned items have been received."
  Fields: order_id, refund_reference, email · 60 days (original 60)
  Review: ""

- [x] "S3" — APPROVED PLAN
  Purpose: "stock"
  Source: "Predict replenishment needs using product sales totals."
  Fields: sku, daily_units · 180 days (original 365)
  Review: ""
