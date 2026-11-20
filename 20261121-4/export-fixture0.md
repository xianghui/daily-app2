# Facet Ledger — reviewed topic worksheet

Synthetic shop feedback. Each segment contains one concern; code all concerns, not only the first.

Descriptive coding worksheet, not calibrated classification or population prevalence. One nearest topic per supplied segment above a cosine floor; a segment may contain missed secondary issues. Similarity can fail on negation, sarcasm, overlap and unfamiliar language. Review every label. Counts include approved comments only, each at most once per topic or pair. Topic counts can sum above approved comments. Baseline keeps only the highest-scoring segment winner per approved comment; extra assignments are coverage counts, not proven accuracy or improvement. Holds are excluded and originals preserved. No external actions.

Approved 3; held 0; uncoded 0; labels 5; single-label baseline 3

## Topic coverage
- shipping: 2 comments (baseline 1); sources c1, c2
- packaging: 2 comments (baseline 1); sources c1, c3
- support: 1 comments (baseline 1); sources c2

## Co-occurrence
- shipping + packaging: 1; sources c1
- shipping + support: 1; sources c2
- packaging + support: 0; sources 

## Complete source review
### c1
Segment 1: My parcel arrived three days late.
Segment 2: The cardboard box was crushed and the wrapping torn.
approve; topics ["shipping","packaging"]


### c2
Segment 1: The support agent answered my question politely and was very helpful.
Segment 2: Delivery arrived right on schedule.
approve; topics ["support","shipping"]


### c3
Segment 1: The packaging protected everything with thick bubble wrap.
approve; topics ["packaging"]
