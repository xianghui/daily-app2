# Variability Harbor — reviewed queue study

Synthetic workshop queues. One server per queue, steady independent arrivals and service, FIFO, no abandonment. Compare variability-aware waiting estimates; not a forecast guarantee.

Kingman is an approximate steady-state G/G/1 FIFO mean queue wait, not total turnaround, tail latency, staffing advice or a guarantee. Assumes one always-available server, independent representative stationary arrivals/service, unlimited buffer, no abandonment or priority. Sample variance uses n−1. Zero sample variation is not proof of zero future variation. Holds reduce evidence; do not release a partial study as complete. Mean-only baseline sets both squared coefficients of variation to 1 (M/M/1); its result may be larger or smaller. Target-rate ceilings are scenarios conditional on unchanged mean service and CV², not measured throughput or safety limits. No external actions occur.

4 batches preserved; 4 approved; 0 held. 24 approved duration samples.

## Approximate planning worksheet
### bike: Bicycle repair desk: patching punctured tyres and replacing inner tubes
within approximate target
Batches: r1, r3
Mean gap 4 min; service 2 min. Ca² 0; Cs² 0; utilization 0.5.
Approximate queue wait 0 min; M/M/1 baseline 2 min.
Conditional target-rate ceiling 30 arrivals/hour; mean-only baseline 25. Target 10 min.

### sew: Sewing repair station: stitching jacket zippers and mending clothing
within approximate target
Batches: r2, r4
Mean gap 4 min; service 2 min. Ca² 1.35; Cs² 1.35; utilization 0.5.
Approximate queue wait 2.7 min; M/M/1 baseline 2 min.
Conditional target-rate ceiling 23.62204724409449 arrivals/hour; mean-only baseline 25. Target 10 min.

## Complete observation audit
### r1
Flat bike tyre fixes and fitting new tubes
Original gaps 4, 4, 4; service 2, 2, 2
approve; queue bike; proposal bike
Reviewed gaps 4, 4, 4; service 2, 2, 2


### r2
Mending coats and replacing broken zips
Original gaps 1, 1, 10; service 0.5, 0.5, 5
approve; queue sew; proposal sew
Reviewed gaps 1, 1, 10; service 0.5, 0.5, 5


### r3
Patching bicycle punctures at the cycle repair bench
Original gaps 4, 4, 4; service 2, 2, 2
approve; queue bike; proposal bike
Reviewed gaps 4, 4, 4; service 2, 2, 2


### r4
Stitching new jacket fasteners at the sewing table
Original gaps 1, 1, 10; service 0.5, 0.5, 5
approve; queue sew; proposal sew
Reviewed gaps 1, 1, 10; service 0.5, 0.5, 5

