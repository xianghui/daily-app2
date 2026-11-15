# Cache Orchard — trace replay worksheet

Complete reviewed trace.

Capacity: 5 KiB; approved accesses: 12; held: 0
LRU: 4 hits, 8 misses, 18 KiB fetched on misses.
FIFO: 3 hits, 9 misses, 21 KiB fetched on misses.
Observed target: 50%; minimum integer-KiB LRU capacity: 7

## Every original and review
- r0: Open the instructions for tending vegetable plots → garden [approve]
  
- r1: Consult the instructions for mending broken bikes → repair [approve]
  
- r2: Open the instructions for tending vegetable plots → garden [approve]
  
- r3: Fetch the instructions for preserving historical pictures → archive [approve]
  
- r4: Open the instructions for tending vegetable plots → garden [approve]
  
- r5: Consult the instructions for mending broken bikes → repair [approve]
  
- r6: Open the instructions for tending vegetable plots → garden [approve]
  
- r7: Fetch the instructions for preserving historical pictures → archive [approve]
  
- r8: Consult the instructions for mending broken bikes → repair [approve]
  
- r9: Open the instructions for tending vegetable plots → garden [approve]
  
- r10: Consult the instructions for mending broken bikes → repair [approve]
  
- r11: Fetch the instructions for preserving historical pictures → archive [approve]
  

## LRU replay
- r0 / garden: first access; evicted none; resident garden; 3 KiB
- r1 / repair: first access; evicted none; resident garden, repair; 5 KiB
- r2 / garden: hit; evicted none; resident repair, garden; 5 KiB
- r3 / archive: first access; evicted repair; resident garden, archive; 5 KiB
- r4 / garden: hit; evicted none; resident archive, garden; 5 KiB
- r5 / repair: repeat miss; evicted archive; resident garden, repair; 5 KiB
- r6 / garden: hit; evicted none; resident repair, garden; 5 KiB
- r7 / archive: repeat miss; evicted repair; resident garden, archive; 5 KiB
- r8 / repair: repeat miss; evicted garden; resident archive, repair; 4 KiB
- r9 / garden: repeat miss; evicted archive; resident repair, garden; 5 KiB
- r10 / repair: hit; evicted none; resident garden, repair; 5 KiB
- r11 / archive: repeat miss; evicted garden; resident repair, archive; 4 KiB

Cold-start sequential full-object cache, no TTL, invalidation, prefetch, concurrency or latency. No server settings changed. Observed trace only, not predicted performance. Similarity is not confidence.
