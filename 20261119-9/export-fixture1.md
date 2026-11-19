# Replica Compass — reviewed quorum planning worksheet

Synthetic replica planning scenario. Each supplied value is an assumed round-trip acknowledgement latency in milliseconds.

3 groups = 3 approved + 0 held. Status: ready

Workload 50 reads + 950 writes = 1000 operations.
All-node baseline R=W=N: 55 assumed ms/op, offline tolerance 0 (may fail target).
Selected R=3, W=3; 14 assumed ms/op; offline tolerance 2.

## Every quorum pair
- R=1 W=1: 3 assumed ms/op; read/write minimum overlap -3; write/write -3; offline tolerance 4; feasible false
- R=1 W=2: 7.75 assumed ms/op; read/write minimum overlap -2; write/write -1; offline tolerance 3; feasible false
- R=1 W=3: 13.45 assumed ms/op; read/write minimum overlap -1; write/write 1; offline tolerance 2; feasible false
- R=1 W=4: 28.65 assumed ms/op; read/write minimum overlap 0; write/write 3; offline tolerance 1; feasible false
- R=1 W=5: 52.4 assumed ms/op; read/write minimum overlap 1; write/write 5; offline tolerance 0; feasible false
- R=2 W=1: 3.25 assumed ms/op; read/write minimum overlap -2; write/write -3; offline tolerance 3; feasible false
- R=2 W=2: 8 assumed ms/op; read/write minimum overlap -1; write/write -1; offline tolerance 3; feasible false
- R=2 W=3: 13.7 assumed ms/op; read/write minimum overlap 0; write/write 1; offline tolerance 2; feasible false
- R=2 W=4: 28.9 assumed ms/op; read/write minimum overlap 1; write/write 3; offline tolerance 1; feasible true
- R=2 W=5: 52.65 assumed ms/op; read/write minimum overlap 2; write/write 5; offline tolerance 0; feasible false
- R=3 W=1: 3.55 assumed ms/op; read/write minimum overlap -1; write/write -3; offline tolerance 2; feasible false
- R=3 W=2: 8.3 assumed ms/op; read/write minimum overlap 0; write/write -1; offline tolerance 2; feasible false
- R=3 W=3: 14 assumed ms/op; read/write minimum overlap 1; write/write 1; offline tolerance 2; feasible true
- R=3 W=4: 29.2 assumed ms/op; read/write minimum overlap 2; write/write 3; offline tolerance 1; feasible true
- R=3 W=5: 52.95 assumed ms/op; read/write minimum overlap 3; write/write 5; offline tolerance 0; feasible false
- R=4 W=1: 4.35 assumed ms/op; read/write minimum overlap 0; write/write -3; offline tolerance 1; feasible false
- R=4 W=2: 9.1 assumed ms/op; read/write minimum overlap 1; write/write -1; offline tolerance 1; feasible false
- R=4 W=3: 14.8 assumed ms/op; read/write minimum overlap 2; write/write 1; offline tolerance 1; feasible true
- R=4 W=4: 30 assumed ms/op; read/write minimum overlap 3; write/write 3; offline tolerance 1; feasible true
- R=4 W=5: 53.75 assumed ms/op; read/write minimum overlap 4; write/write 5; offline tolerance 0; feasible false
- R=5 W=1: 5.6 assumed ms/op; read/write minimum overlap 1; write/write -3; offline tolerance 0; feasible false
- R=5 W=2: 10.35 assumed ms/op; read/write minimum overlap 2; write/write -1; offline tolerance 0; feasible false
- R=5 W=3: 16.05 assumed ms/op; read/write minimum overlap 3; write/write 1; offline tolerance 0; feasible false
- R=5 W=4: 31.25 assumed ms/op; read/write minimum overlap 4; write/write 3; offline tolerance 0; feasible false
- R=5 W=5: 55 assumed ms/op; read/write minimum overlap 5; write/write 5; offline tolerance 0; feasible false



## Every source and review
- w1: Insert and save new journal records into storage; original 650; reviewed 650 write [approve]
  
- w2: Modify existing records and persist updated data; original 300; reviewed 300 write [approve]
  
- r1: Retrieve existing saved journal entries without modifications; original 50; reviewed 50 read [approve]
  

## Node assumptions
- east: 3 ms
- west: 8 ms
- north: 14 ms
- south: 30 ms
- central: 55 ms
Offline-node target: 1

## Before using
- [ ] Verify operation identities and full workload counts. Similarity is not correctness.
- [ ] Assumes fixed N replicas, any quorum, version-aware reads and intersecting writes. No sloppy quorums or membership changes.
- [ ] Latency is kth-fastest supplied acknowledgement, all nodes online in parallel. Offline tolerance is a count guarantee, not a failure-mode latency forecast.
- [ ] Quorum intersection alone does not certify linearizability, transactions or a real database implementation.
- [ ] No measured speedup, server connection or configuration changes.
