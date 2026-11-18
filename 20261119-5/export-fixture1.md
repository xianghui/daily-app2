# Link Commons — reviewed bandwidth worksheet

Synthetic studio transfers on fixed paths. A low-rate audio request frees capacity, but the shared trunk still limits the other routes.

Status: ready; 3 originals = 3 approved + 0 held.

## Proposed steady Mbps (not measured throughput)
- c via art: 7 Mbps versus static-share baseline 4; demand 20; weight 1; bottleneck trunk
- d via audio: 1 Mbps versus static-share baseline 1; demand 1; weight 1; demand reached
- e via film: 5 Mbps versus static-share baseline 4; demand 20; weight 2; bottleneck remote

## Shared links
- Studio trunk: 12 / 12 Mbps; baseline 8; spare 0
- Remote branch: 6 / 6 Mbps; baseline 5; spare 0

## Every source and review
- c: Designers copying vector drawings and digital artwork; original demand 20 / weight 1; reviewed art demand 20 / weight 1 [approve]
  
- d: Musicians sending recorded songs and microphone tracks; original demand 1 / weight 1; reviewed audio demand 1 / weight 1 [approve]
  
- e: Cinema editors transferring the finished movie footage; original demand 20 / weight 2; reviewed film demand 20 / weight 2 [approve]
  

## Before using the worksheet
- [ ] Verify AI route matches, capacities, concurrent demands and positive weights.
- [ ] Fixed paths only. Each flow consumes its allocated Mbps on every link in its route.
- [ ] Weighted max-min fairness is not maximum throughput or a latency guarantee.
- [ ] Steady fluid planning excludes overhead, packet loss, bursts, TCP dynamics and time-varying demand.
- [ ] No network measurements, configuration changes, transfers or external actions performed.
