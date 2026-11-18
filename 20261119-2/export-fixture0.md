# Tail Atlas — reviewed latency histogram worksheet

Synthetic disjoint request windows; durations in ms, same noncumulative buckets and sampling definition.

Status: ready; 4 originals = 4 approved + 0 held.

Edges (ms): 100, 300, 1000; quantile 0.95.

- checkout: 1100 observations; pooled percentile (300, 1000] ms; unweighted window-upper-bound average 650 ms (NOT aggregate percentile); 990/1100 at or below 300 ms; goal 0.95: missed. Bucket counts: 900, 90, 110, 0.
- image: 200 observations; pooled percentile (300, 1000] ms; unweighted window-upper-bound average 650 ms (NOT aggregate percentile); 185/200 at or below 300 ms; goal 0.95: missed. Bucket counts: 120, 65, 15, 0.

## Every source and review
- a: Payment checkout endpoint response times during morning traffic; original [900,90,10,0]; reviewed checkout [900,90,10,0] [approve]
  
- b: Evening store payment checkout response durations; original [0,0,100,0]; reviewed checkout [0,0,100,0] [approve]
  
- c: Catalog photo thumbnail rendering time morning batch; original [70,25,5,0]; reviewed image [70,25,5,0] [approve]
  
- d: Product photograph thumbnail rendering time evening batch; original [50,40,10,0]; reviewed image [50,40,10,0] [approve]
  

## Before using this worksheet
- [ ] Verify disjoint samples, same sampling definition, milliseconds and identical bucket edges.
- [ ] Convert cumulative counters into noncumulative bucket counts and disjoint windows first.
- [ ] Review AI mappings; semantic similarity is not identity or confidence.
- [ ] Investigate overflow separately; raw timings and exact within-bucket percentiles are unknown.
- [ ] No service configuration, automated alerts or external actions were performed.
