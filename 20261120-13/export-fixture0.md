# Distribution Dock — reviewed distribution recheck worksheet

Synthetic comparable document service durations. Two observations per period and queue.
Unit: minutes; recheck tolerance: 2

Empirical one-dimensional Wasserstein distance is the area between two normalized CDFs, in the stated duration unit. Counts are frequencies of exact values, not histogram bins or confidence weights. Means/quantiles and distances describe only supplied observations; no statistical significance, causal diagnosis or future reliability. A shape change may be harmless. Verify comparable windows, units, workload and complete logs. Tolerance is your recheck policy, not a learned safety limit. Holds can change representativeness; incomplete queues are not zero-change evidence.

## Queue comparisons
### scan — Scanning paper documents into digital electronic archives
Wasserstein distance: 8; absolute mean shift: 0; tolerance exceeded: true
Reference count 2, mean 10, p50 10, p90 10
Current count 2, mean 10, p50 2, p90 18
Sources: r1, r2, r3, r4

### pack — Packing cardboard shipping boxes for parcel delivery
Wasserstein distance: 2; absolute mean shift: 2; tolerance exceeded: false
Reference count 2, mean 6, p50 4, p90 8
Current count 2, mean 8, p50 6, p90 10
Sources: r5, r6, r7, r8

## All originals and reviews
### r1
Digitizing printed papers with a document scanner
Original: reference, value 10, n=1
Reviewed: scan, reference, value 10, n=1, approve


### r2
Scanning paper pages for the electronic archive
Original: reference, value 10, n=1
Reviewed: scan, reference, value 10, n=1, approve


### r3
Converting paper files into searchable digital documents
Original: current, value 2, n=1
Reviewed: scan, current, value 2, n=1, approve


### r4
Scanning printed documents into digital archives
Original: current, value 18, n=1
Reviewed: scan, current, value 18, n=1, approve


### r5
Wrapping cardboard cartons for shipment
Original: reference, value 4, n=1
Reviewed: pack, reference, value 4, n=1, approve


### r6
Packing parcels in cardboard boxes
Original: reference, value 8, n=1
Reviewed: pack, reference, value 8, n=1, approve


### r7
Preparing boxed packages for courier collection
Original: current, value 6, n=1
Reviewed: pack, current, value 6, n=1, approve


### r8
Packing cardboard shipping cartons
Original: current, value 10, n=1
Reviewed: pack, current, value 10, n=1, approve

