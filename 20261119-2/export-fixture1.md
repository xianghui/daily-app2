# Tail Atlas — reviewed latency histogram worksheet

Synthetic independent batches. Noncumulative elapsed milliseconds, no overlapping samples.

Status: ready; 4 originals = 4 approved + 0 held.

Edges (ms): 1000, 5000, 10000; quantile 0.9.

- index: 110 observations; pooled percentile (5000, 10000] ms; unweighted window-upper-bound average unknown (overflow) (NOT aggregate percentile); 96/110 at or below 5000 ms; goal 0.9: missed. Bucket counts: 80, 16, 5, 9.
- video: 110 observations; pooled percentile (10000, ∞) ms; unweighted window-upper-bound average unknown (overflow) (NOT aggregate percentile); 30/110 at or below 5000 ms; goal 0.9: missed. Bucket counts: 5, 25, 65, 15.

## Every source and review
- e: Searchable text document ingestion and index building job timings; original [80,15,5,0]; reviewed index [80,15,5,0] [approve]
  
- f: Document full text search index generation elapsed times; original [0,1,0,9]; reviewed index [0,1,0,9] [approve]
  
- g: Movie clip encoding and video format conversion timings; original [5,25,60,10]; reviewed video [5,25,60,10] [approve]
  
- h: Video reencoding and transcoding job elapsed durations; original [0,0,5,5]; reviewed video [0,0,5,5] [approve]
  

## Before using this worksheet
- [ ] Verify disjoint samples, same sampling definition, milliseconds and identical bucket edges.
- [ ] Convert cumulative counters into noncumulative bucket counts and disjoint windows first.
- [ ] Review AI mappings; semantic similarity is not identity or confidence.
- [ ] Investigate overflow separately; raw timings and exact within-bucket percentiles are unknown.
- [ ] No service configuration, automated alerts or external actions were performed.
