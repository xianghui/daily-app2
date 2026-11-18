# Link Commons — reviewed bandwidth worksheet

Synthetic concurrent transfers. Fixed routes and steady Mbps planning; each transfer is ready now. No network changes.

Status: ready; 2 originals = 2 approved + 0 held.

## Proposed steady Mbps (not measured throughput)
- a via photos: 2 Mbps versus static-share baseline 2; demand 2; weight 1; demand reached
- b via video: 8 Mbps versus static-share baseline 5; demand 10; weight 1; bottleneck uplink

## Shared links
- Shared office uplink: 10 / 10 Mbps; baseline 7; spare 0

## Every source and review
- a: Camera snapshots copied to the picture archive; original demand 2 / weight 1; reviewed photos demand 2 / weight 1 [approve]
  
- b: Finished film footage delivered to the editing server; original demand 10 / weight 1; reviewed video demand 10 / weight 1 [approve]
  

## Before using the worksheet
- [ ] Verify AI route matches, capacities, concurrent demands and positive weights.
- [ ] Fixed paths only. Each flow consumes its allocated Mbps on every link in its route.
- [ ] Weighted max-min fairness is not maximum throughput or a latency guarantee.
- [ ] Steady fluid planning excludes overhead, packet loss, bursts, TCP dynamics and time-varying demand.
- [ ] No network measurements, configuration changes, transfers or external actions performed.
