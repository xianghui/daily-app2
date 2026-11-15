# Cache Orchard — trace replay worksheet

Complete reviewed trace.

Capacity: 6 KiB; approved accesses: 12; held: 0
LRU: 4 hits, 8 misses, 22 KiB fetched on misses.
FIFO: 3 hits, 9 misses, 24 KiB fetched on misses.
Observed target: 60%; minimum integer-KiB LRU capacity: 11

## Every original and review
- r0: Read the guide for preparing hot lunches → kitchen [approve]
  =SUM(1,2)
"quoted", discuss
- r1: Look up the guide for counting birds in nature → wildlife [approve]
  
- r2: Fetch the guide for producing spoken audio programmes → radio [approve]
  
- r3: Look up the guide for counting birds in nature → wildlife [approve]
  
- r4: Consult the guide for teaching people to write software → coding [approve]
  
- r5: Look up the guide for counting birds in nature → wildlife [approve]
  
- r6: Fetch the guide for producing spoken audio programmes → radio [approve]
  
- r7: Read the guide for preparing hot lunches → kitchen [approve]
  
- r8: Consult the guide for teaching people to write software → coding [approve]
  
- r9: Look up the guide for counting birds in nature → wildlife [approve]
  
- r10: Consult the guide for teaching people to write software → coding [approve]
  
- r11: Look up the guide for counting birds in nature → wildlife [approve]
  

## LRU replay
- r0 / kitchen: first access; evicted none; resident kitchen; 4 KiB
- r1 / wildlife: first access; evicted none; resident kitchen, wildlife; 6 KiB
- r2 / radio: first access; evicted kitchen; resident wildlife, radio; 5 KiB
- r3 / wildlife: hit; evicted none; resident radio, wildlife; 5 KiB
- r4 / coding: first access; evicted radio; resident wildlife, coding; 4 KiB
- r5 / wildlife: hit; evicted none; resident coding, wildlife; 4 KiB
- r6 / radio: repeat miss; evicted coding; resident wildlife, radio; 5 KiB
- r7 / kitchen: repeat miss; evicted wildlife, radio; resident kitchen; 4 KiB
- r8 / coding: repeat miss; evicted none; resident kitchen, coding; 6 KiB
- r9 / wildlife: repeat miss; evicted kitchen; resident coding, wildlife; 4 KiB
- r10 / coding: hit; evicted none; resident wildlife, coding; 4 KiB
- r11 / wildlife: hit; evicted none; resident coding, wildlife; 4 KiB

Cold-start sequential full-object cache, no TTL, invalidation, prefetch, concurrency or latency. No server settings changed. Observed trace only, not predicted performance. Similarity is not confidence.
