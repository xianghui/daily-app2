# Replica Compass — reviewed quorum planning worksheet

Synthetic replica planning scenario. Quorum counts only; not a database configuration or consistency certification.

3 groups = 3 approved + 0 held. Status: ready

Workload 990 reads + 10 writes = 1000 operations.
All-node baseline R=W=N: 40 assumed ms/op, offline tolerance 0 (may fail target).
Selected R=2, W=4; 4.21 assumed ms/op; offline tolerance 1.

## Every quorum pair
- R=1 W=1: 2 assumed ms/op; read/write minimum overlap -3; write/write -3; offline tolerance 4; feasible false
- R=1 W=2: 2.02 assumed ms/op; read/write minimum overlap -2; write/write -1; offline tolerance 3; feasible false
- R=1 W=3: 2.1 assumed ms/op; read/write minimum overlap -1; write/write 1; offline tolerance 2; feasible false
- R=1 W=4: 2.23 assumed ms/op; read/write minimum overlap 0; write/write 3; offline tolerance 1; feasible false
- R=1 W=5: 2.38 assumed ms/op; read/write minimum overlap 1; write/write 5; offline tolerance 0; feasible false
- R=2 W=1: 3.98 assumed ms/op; read/write minimum overlap -2; write/write -3; offline tolerance 3; feasible false
- R=2 W=2: 4 assumed ms/op; read/write minimum overlap -1; write/write -1; offline tolerance 3; feasible false
- R=2 W=3: 4.08 assumed ms/op; read/write minimum overlap 0; write/write 1; offline tolerance 2; feasible false
- R=2 W=4: 4.21 assumed ms/op; read/write minimum overlap 1; write/write 3; offline tolerance 1; feasible true
- R=2 W=5: 4.36 assumed ms/op; read/write minimum overlap 2; write/write 5; offline tolerance 0; feasible false
- R=3 W=1: 11.9 assumed ms/op; read/write minimum overlap -1; write/write -3; offline tolerance 2; feasible false
- R=3 W=2: 11.92 assumed ms/op; read/write minimum overlap 0; write/write -1; offline tolerance 2; feasible false
- R=3 W=3: 12 assumed ms/op; read/write minimum overlap 1; write/write 1; offline tolerance 2; feasible true
- R=3 W=4: 12.13 assumed ms/op; read/write minimum overlap 2; write/write 3; offline tolerance 1; feasible true
- R=3 W=5: 12.28 assumed ms/op; read/write minimum overlap 3; write/write 5; offline tolerance 0; feasible false
- R=4 W=1: 24.77 assumed ms/op; read/write minimum overlap 0; write/write -3; offline tolerance 1; feasible false
- R=4 W=2: 24.79 assumed ms/op; read/write minimum overlap 1; write/write -1; offline tolerance 1; feasible false
- R=4 W=3: 24.87 assumed ms/op; read/write minimum overlap 2; write/write 1; offline tolerance 1; feasible true
- R=4 W=4: 25 assumed ms/op; read/write minimum overlap 3; write/write 3; offline tolerance 1; feasible true
- R=4 W=5: 25.15 assumed ms/op; read/write minimum overlap 4; write/write 5; offline tolerance 0; feasible false
- R=5 W=1: 39.62 assumed ms/op; read/write minimum overlap 1; write/write -3; offline tolerance 0; feasible false
- R=5 W=2: 39.64 assumed ms/op; read/write minimum overlap 2; write/write -1; offline tolerance 0; feasible false
- R=5 W=3: 39.72 assumed ms/op; read/write minimum overlap 3; write/write 1; offline tolerance 0; feasible false
- R=5 W=4: 39.85 assumed ms/op; read/write minimum overlap 4; write/write 3; offline tolerance 0; feasible false
- R=5 W=5: 40 assumed ms/op; read/write minimum overlap 5; write/write 5; offline tolerance 0; feasible false



## Every source and review
- r1: Fetch existing catalog records without changing anything; original 900; reviewed 900 read [approve]
  
- r2: Look up saved product information; original 90; reviewed 90 read [approve]
  
- w1: Update stored catalog records and save modifications; original 10; reviewed 10 write [approve]
  

## Node assumptions
- n1: 2 ms
- n2: 4 ms
- n3: 12 ms
- n4: 25 ms
- n5: 40 ms
Offline-node target: 1

## Before using
- [ ] Verify operation identities and full workload counts. Similarity is not correctness.
- [ ] Assumes fixed N replicas, any quorum, version-aware reads and intersecting writes. No sloppy quorums or membership changes.
- [ ] Latency is kth-fastest supplied acknowledgement, all nodes online in parallel. Offline tolerance is a count guarantee, not a failure-mode latency forecast.
- [ ] Quorum intersection alone does not certify linearizability, transactions or a real database implementation.
- [ ] No measured speedup, server connection or configuration changes.
