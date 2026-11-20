# Load Ladder — reviewed observed-level lookup

Synthetic archive time-study summaries. Comparable workload, staffing and minutes per complete batch.
Unit: minutes; ceiling: 25

Monotonicity is a supplied planning assumption, not a discovered law. Weighted isotonic least squares smooths observed level means; zero fitted drops is by construction, not improved predictive accuracy. Count weights require comparable independent measurements and identical units/staffing. Pooled plateaus can hide real process changes. Ceilings are descriptive screens on fitted means, never guarantees, confidence bounds or safe capacities. No interpolation, extrapolation, causal claims or equipment control.

## Lookup
### scan — Scanning paper documents into digital electronic archives
Largest observed size with fitted mean ≤ ceiling: 30
- Size 10: raw 15, fitted 15, n=2, block 1; sources r1
- Size 20: raw 30, fitted 25, n=1, block 2; sources r2
- Size 30: raw 20, fitted 25, n=1, block 2; sources r3

### pack — Packing cardboard shipping boxes for parcel delivery
Largest observed size with fitted mean ≤ ceiling: 20
- Size 10: raw 8, fitted 8, n=1, block 1; sources r4
- Size 20: raw 16, fitted 16, n=2, block 2; sources r5
- Size 30: raw 28, fitted 28, n=1, block 3; sources r6

## All originals and reviews
### r1
Digitizing printed papers with a document scanner
Original: size 10, mean 15, n=2
Reviewed: scan, size 10, mean 15, n=2, approve


### r2
Scanning paper pages for the electronic archive
Original: size 20, mean 30, n=1
Reviewed: scan, size 20, mean 30, n=1, approve


### r3
Converting paper files into searchable digital documents
Original: size 30, mean 20, n=1
Reviewed: scan, size 30, mean 20, n=1, approve


### r4
Wrapping cardboard cartons for shipment
Original: size 10, mean 8, n=1
Reviewed: pack, size 10, mean 8, n=1, approve


### r5
Packing parcels in cardboard boxes
Original: size 20, mean 16, n=2
Reviewed: pack, size 20, mean 16, n=2, approve


### r6
Preparing boxed packages for courier collection
Original: size 30, mean 28, n=1
Reviewed: pack, size 30, mean 28, n=1, approve

