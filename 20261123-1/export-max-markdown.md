# Maximum cutover worksheet

Neural similarity is not service identity. Verify the complete revision history and all assumptions. No DNS lookup, configuration or shutdown is performed.

## Reviewed cutover worksheet

Hypothetical positive-answer TTL upper bounds only. All authoritative changes are simultaneous, caches honor TTL, no refresh before second 0, no serve-stale, negative caches, CNAME chains, clock skew or connections outliving DNS. Each old revision can be fetched arbitrarily close to its next change; next-change + old TTL is a conservative expiry bound. Equality clears the bound. Final new answer is permanent. This is not proof of live propagation or permission to shut down a service.

LATEST-OLD-TTL BASELINE: 0 / 32 retirement plans fall before switch + last old TTL.

ALL-HISTORY BOUND: 0 / 32 fall before the old-answer expiry bound. 0 risk(s) missed by baseline. These are worksheet checks, not live measurements.

RECORD CHECKLIST (seconds relative to history start)
=record
"0" → g0 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"1" → g1 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"2" → g2 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"3" → g3 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"4" → g4 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"5" → g5 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"6" → g6 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"7" → g7 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"8" → g0 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"9" → g1 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"10" → g2 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"11" → g3 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"12" → g4 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"13" → g5 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"14" → g6 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"15" → g7 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"16" → g0 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"17" → g1 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"18" → g2 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"19" → g3 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"20" → g4 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"21" → g5 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"22" → g6 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"23" → g7 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"24" → g0 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"25" → g1 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"26" → g2 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"27" → g3 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"28" → g4 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"29" → g5 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"30" → g6 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound
=record
"31" → g7 | permanent switch 700 | baseline 820 | history safe-after 820 | planned retirement 1000 | meets modeled bound

OLD-ANSWER WITNESSES
=record
"0" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"0" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"0" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"0" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"0" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"0" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"0" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"1" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"1" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"1" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"1" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"1" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"1" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"1" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"2" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"2" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"2" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"2" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"2" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"2" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"2" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"3" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"3" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"3" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"3" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"3" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"3" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"3" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"4" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"4" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"4" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"4" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"4" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"4" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"4" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"5" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"5" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"5" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"5" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"5" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"5" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"5" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"6" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"6" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"6" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"6" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"6" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"6" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"6" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"7" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"7" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"7" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"7" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"7" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"7" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"7" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"8" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"8" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"8" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"8" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"8" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"8" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"8" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"9" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"9" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"9" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"9" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"9" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"9" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"9" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"10" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"10" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"10" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"10" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"10" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"10" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"10" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"11" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"11" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"11" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"11" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"11" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"11" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"11" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"12" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"12" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"12" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"12" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"12" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"12" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"12" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"13" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"13" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"13" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"13" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"13" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"13" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"13" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"14" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"14" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"14" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"14" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"14" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"14" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"14" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"15" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"15" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"15" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"15" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"15" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"15" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"15" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"16" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"16" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"16" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"16" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"16" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"16" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"16" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"17" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"17" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"17" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"17" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"17" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"17" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"17" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"18" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"18" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"18" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"18" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"18" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"18" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"18" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"19" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"19" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"19" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"19" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"19" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"19" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"19" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"20" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"20" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"20" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"20" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"20" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"20" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"20" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"21" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"21" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"21" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"21" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"21" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"21" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"21" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"22" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"22" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"22" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"22" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"22" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"22" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"22" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"23" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"23" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"23" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"23" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"23" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"23" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"23" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"24" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"24" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"24" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"24" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"24" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"24" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"24" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"25" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"25" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"25" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"25" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"25" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"25" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"25" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"26" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"26" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"26" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"26" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"26" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"26" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"26" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"27" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"27" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"27" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"27" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"27" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"27" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"27" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"28" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"28" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"28" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"28" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"28" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"28" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"28" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"29" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"29" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"29" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"29" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"29" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"29" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"29" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"30" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"30" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"30" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"30" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"30" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"30" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"30" revision 6: fetch in [600, 700); TTL 120; expiry bound 820
=record
"31" revision 0: fetch in [0, 100); TTL 120; expiry bound 220
=record
"31" revision 1: fetch in [100, 200); TTL 120; expiry bound 320
=record
"31" revision 2: fetch in [200, 300); TTL 120; expiry bound 420
=record
"31" revision 3: fetch in [300, 400); TTL 120; expiry bound 520
=record
"31" revision 4: fetch in [400, 500); TTL 120; expiry bound 620
=record
"31" revision 5: fetch in [500, 600); TTL 120; expiry bound 720
=record
"31" revision 6: fetch in [600, 700); TTL 120; expiry bound 820

SERVICE CHECKPOINTS
g0: all listed record bounds cleared at 820 seconds | =record
"0", =record
"8", =record
"16", =record
"24"
g1: all listed record bounds cleared at 820 seconds | =record
"1", =record
"9", =record
"17", =record
"25"
g2: all listed record bounds cleared at 820 seconds | =record
"2", =record
"10", =record
"18", =record
"26"
g3: all listed record bounds cleared at 820 seconds | =record
"3", =record
"11", =record
"19", =record
"27"
g4: all listed record bounds cleared at 820 seconds | =record
"4", =record
"12", =record
"20", =record
"28"
g5: all listed record bounds cleared at 820 seconds | =record
"5", =record
"13", =record
"21", =record
"29"
g6: all listed record bounds cleared at 820 seconds | =record
"6", =record
"14", =record
"22", =record
"30"
g7: all listed record bounds cleared at 820 seconds | =record
"7", =record
"15", =record
"23", =record
"31"

## Complete original and review audit

{
  "schema": "ttl-harbor/1",
  "originalInput": {
    "title": "Maximum cutover worksheet",
    "services": [
      {
        "id": "g0",
        "description": "Synthetic service 0"
      },
      {
        "id": "g1",
        "description": "Synthetic service 1"
      },
      {
        "id": "g2",
        "description": "Synthetic service 2"
      },
      {
        "id": "g3",
        "description": "Synthetic service 3"
      },
      {
        "id": "g4",
        "description": "Synthetic service 4"
      },
      {
        "id": "g5",
        "description": "Synthetic service 5"
      },
      {
        "id": "g6",
        "description": "Synthetic service 6"
      },
      {
        "id": "g7",
        "description": "Synthetic service 7"
      }
    ],
    "records": [
      {
        "id": "=record\n\"0\"",
        "serviceNote": "Synthetic service 0",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"1\"",
        "serviceNote": "Synthetic service 1",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"2\"",
        "serviceNote": "Synthetic service 2",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"3\"",
        "serviceNote": "Synthetic service 3",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"4\"",
        "serviceNote": "Synthetic service 4",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"5\"",
        "serviceNote": "Synthetic service 5",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"6\"",
        "serviceNote": "Synthetic service 6",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"7\"",
        "serviceNote": "Synthetic service 7",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"8\"",
        "serviceNote": "Synthetic service 0",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"9\"",
        "serviceNote": "Synthetic service 1",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"10\"",
        "serviceNote": "Synthetic service 2",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"11\"",
        "serviceNote": "Synthetic service 3",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"12\"",
        "serviceNote": "Synthetic service 4",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"13\"",
        "serviceNote": "Synthetic service 5",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"14\"",
        "serviceNote": "Synthetic service 6",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"15\"",
        "serviceNote": "Synthetic service 7",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"16\"",
        "serviceNote": "Synthetic service 0",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"17\"",
        "serviceNote": "Synthetic service 1",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"18\"",
        "serviceNote": "Synthetic service 2",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"19\"",
        "serviceNote": "Synthetic service 3",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"20\"",
        "serviceNote": "Synthetic service 4",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"21\"",
        "serviceNote": "Synthetic service 5",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"22\"",
        "serviceNote": "Synthetic service 6",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"23\"",
        "serviceNote": "Synthetic service 7",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"24\"",
        "serviceNote": "Synthetic service 0",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"25\"",
        "serviceNote": "Synthetic service 1",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"26\"",
        "serviceNote": "Synthetic service 2",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"27\"",
        "serviceNote": "Synthetic service 3",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"28\"",
        "serviceNote": "Synthetic service 4",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"29\"",
        "serviceNote": "Synthetic service 5",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"30\"",
        "serviceNote": "Synthetic service 6",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      },
      {
        "id": "=record\n\"31\"",
        "serviceNote": "Synthetic service 7",
        "retireAt": 1000,
        "revisions": [
          {
            "at": 0,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 100,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 200,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 300,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 400,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 500,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 600,
            "ttl": 120,
            "target": "old"
          },
          {
            "at": 700,
            "ttl": 120,
            "target": "new"
          }
        ]
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Synthetic service 0",
      "resource": "g0",
      "aiResource": "g0",
      "evidence": [
        {
          "resource": "g0",
          "score": 1.0000000813742607
        },
        {
          "resource": "g1",
          "score": 0.8117642079807471
        },
        {
          "resource": "g4",
          "score": 0.7916498749389049
        },
        {
          "resource": "g2",
          "score": 0.7903536110618323
        },
        {
          "resource": "g6",
          "score": 0.7812235061759124
        },
        {
          "resource": "g5",
          "score": 0.7791142522075929
        },
        {
          "resource": "g3",
          "score": 0.7747207990102273
        },
        {
          "resource": "g7",
          "score": 0.7560068089474151
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "text": "Synthetic service 1",
      "resource": "g1",
      "aiResource": "g1",
      "evidence": [
        {
          "resource": "g1",
          "score": 0.9999998804713951
        },
        {
          "resource": "g2",
          "score": 0.9180736867370445
        },
        {
          "resource": "g3",
          "score": 0.9151973270574565
        },
        {
          "resource": "g4",
          "score": 0.8941990329267746
        },
        {
          "resource": "g5",
          "score": 0.8604840189877342
        },
        {
          "resource": "g7",
          "score": 0.8589786669284625
        },
        {
          "resource": "g6",
          "score": 0.8495630932283709
        },
        {
          "resource": "g0",
          "score": 0.8117642079807471
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Synthetic service 2",
      "resource": "g2",
      "aiResource": "g2",
      "evidence": [
        {
          "resource": "g2",
          "score": 1.0000002690571077
        },
        {
          "resource": "g3",
          "score": 0.9206897609092813
        },
        {
          "resource": "g1",
          "score": 0.9180736867370445
        },
        {
          "resource": "g4",
          "score": 0.9059481402244757
        },
        {
          "resource": "g7",
          "score": 0.8707836506385261
        },
        {
          "resource": "g6",
          "score": 0.8588791732284471
        },
        {
          "resource": "g5",
          "score": 0.8581678435059512
        },
        {
          "resource": "g0",
          "score": 0.7903536110618323
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "text": "Synthetic service 3",
      "resource": "g3",
      "aiResource": "g3",
      "evidence": [
        {
          "resource": "g3",
          "score": 1.000000117686045
        },
        {
          "resource": "g4",
          "score": 0.9232842584172053
        },
        {
          "resource": "g2",
          "score": 0.9206897609092813
        },
        {
          "resource": "g1",
          "score": 0.9151973270574565
        },
        {
          "resource": "g6",
          "score": 0.8809496732415856
        },
        {
          "resource": "g7",
          "score": 0.8800230301479692
        },
        {
          "resource": "g5",
          "score": 0.8752505179103346
        },
        {
          "resource": "g0",
          "score": 0.7747207990102273
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "text": "Synthetic service 4",
      "resource": "g4",
      "aiResource": "g4",
      "evidence": [
        {
          "resource": "g4",
          "score": 0.9999992321784655
        },
        {
          "resource": "g3",
          "score": 0.9232842584172053
        },
        {
          "resource": "g2",
          "score": 0.9059481402244757
        },
        {
          "resource": "g1",
          "score": 0.8941990329267746
        },
        {
          "resource": "g5",
          "score": 0.889715312563072
        },
        {
          "resource": "g6",
          "score": 0.8890150040342659
        },
        {
          "resource": "g7",
          "score": 0.8737547412166419
        },
        {
          "resource": "g0",
          "score": 0.7916498749389049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "text": "Synthetic service 5",
      "resource": "g5",
      "aiResource": "g5",
      "evidence": [
        {
          "resource": "g5",
          "score": 1.0000001237853486
        },
        {
          "resource": "g6",
          "score": 0.8985445008641003
        },
        {
          "resource": "g4",
          "score": 0.889715312563072
        },
        {
          "resource": "g7",
          "score": 0.8844299645279483
        },
        {
          "resource": "g3",
          "score": 0.8752505179103346
        },
        {
          "resource": "g1",
          "score": 0.8604840189877342
        },
        {
          "resource": "g2",
          "score": 0.8581678435059512
        },
        {
          "resource": "g0",
          "score": 0.7791142522075929
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 6,
      "text": "Synthetic service 6",
      "resource": "g6",
      "aiResource": "g6",
      "evidence": [
        {
          "resource": "g6",
          "score": 0.9999997249603723
        },
        {
          "resource": "g5",
          "score": 0.8985445008641003
        },
        {
          "resource": "g7",
          "score": 0.8926216658951315
        },
        {
          "resource": "g4",
          "score": 0.8890150040342659
        },
        {
          "resource": "g3",
          "score": 0.8809496732415856
        },
        {
          "resource": "g2",
          "score": 0.8588791732284471
        },
        {
          "resource": "g1",
          "score": 0.8495630932283709
        },
        {
          "resource": "g0",
          "score": 0.7812235061759124
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 7,
      "text": "Synthetic service 7",
      "resource": "g7",
      "aiResource": "g7",
      "evidence": [
        {
          "resource": "g7",
          "score": 1.0000003860539044
        },
        {
          "resource": "g6",
          "score": 0.8926216658951315
        },
        {
          "resource": "g5",
          "score": 0.8844299645279483
        },
        {
          "resource": "g3",
          "score": 0.8800230301479692
        },
        {
          "resource": "g4",
          "score": 0.8737547412166419
        },
        {
          "resource": "g2",
          "score": 0.8707836506385261
        },
        {
          "resource": "g1",
          "score": 0.8589786669284625
        },
        {
          "resource": "g0",
          "score": 0.7560068089474151
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 8,
      "text": "Synthetic service 0",
      "resource": "g0",
      "aiResource": "g0",
      "evidence": [
        {
          "resource": "g0",
          "score": 1.0000000813742607
        },
        {
          "resource": "g1",
          "score": 0.8117642079807471
        },
        {
          "resource": "g4",
          "score": 0.7916498749389049
        },
        {
          "resource": "g2",
          "score": 0.7903536110618323
        },
        {
          "resource": "g6",
          "score": 0.7812235061759124
        },
        {
          "resource": "g5",
          "score": 0.7791142522075929
        },
        {
          "resource": "g3",
          "score": 0.7747207990102273
        },
        {
          "resource": "g7",
          "score": 0.7560068089474151
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 9,
      "text": "Synthetic service 1",
      "resource": "g1",
      "aiResource": "g1",
      "evidence": [
        {
          "resource": "g1",
          "score": 0.9999998804713951
        },
        {
          "resource": "g2",
          "score": 0.9180736867370445
        },
        {
          "resource": "g3",
          "score": 0.9151973270574565
        },
        {
          "resource": "g4",
          "score": 0.8941990329267746
        },
        {
          "resource": "g5",
          "score": 0.8604840189877342
        },
        {
          "resource": "g7",
          "score": 0.8589786669284625
        },
        {
          "resource": "g6",
          "score": 0.8495630932283709
        },
        {
          "resource": "g0",
          "score": 0.8117642079807471
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 10,
      "text": "Synthetic service 2",
      "resource": "g2",
      "aiResource": "g2",
      "evidence": [
        {
          "resource": "g2",
          "score": 1.0000002690571077
        },
        {
          "resource": "g3",
          "score": 0.9206897609092813
        },
        {
          "resource": "g1",
          "score": 0.9180736867370445
        },
        {
          "resource": "g4",
          "score": 0.9059481402244757
        },
        {
          "resource": "g7",
          "score": 0.8707836506385261
        },
        {
          "resource": "g6",
          "score": 0.8588791732284471
        },
        {
          "resource": "g5",
          "score": 0.8581678435059512
        },
        {
          "resource": "g0",
          "score": 0.7903536110618323
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 11,
      "text": "Synthetic service 3",
      "resource": "g3",
      "aiResource": "g3",
      "evidence": [
        {
          "resource": "g3",
          "score": 1.000000117686045
        },
        {
          "resource": "g4",
          "score": 0.9232842584172053
        },
        {
          "resource": "g2",
          "score": 0.9206897609092813
        },
        {
          "resource": "g1",
          "score": 0.9151973270574565
        },
        {
          "resource": "g6",
          "score": 0.8809496732415856
        },
        {
          "resource": "g7",
          "score": 0.8800230301479692
        },
        {
          "resource": "g5",
          "score": 0.8752505179103346
        },
        {
          "resource": "g0",
          "score": 0.7747207990102273
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 12,
      "text": "Synthetic service 4",
      "resource": "g4",
      "aiResource": "g4",
      "evidence": [
        {
          "resource": "g4",
          "score": 0.9999992321784655
        },
        {
          "resource": "g3",
          "score": 0.9232842584172053
        },
        {
          "resource": "g2",
          "score": 0.9059481402244757
        },
        {
          "resource": "g1",
          "score": 0.8941990329267746
        },
        {
          "resource": "g5",
          "score": 0.889715312563072
        },
        {
          "resource": "g6",
          "score": 0.8890150040342659
        },
        {
          "resource": "g7",
          "score": 0.8737547412166419
        },
        {
          "resource": "g0",
          "score": 0.7916498749389049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 13,
      "text": "Synthetic service 5",
      "resource": "g5",
      "aiResource": "g5",
      "evidence": [
        {
          "resource": "g5",
          "score": 1.0000001237853486
        },
        {
          "resource": "g6",
          "score": 0.8985445008641003
        },
        {
          "resource": "g4",
          "score": 0.889715312563072
        },
        {
          "resource": "g7",
          "score": 0.8844299645279483
        },
        {
          "resource": "g3",
          "score": 0.8752505179103346
        },
        {
          "resource": "g1",
          "score": 0.8604840189877342
        },
        {
          "resource": "g2",
          "score": 0.8581678435059512
        },
        {
          "resource": "g0",
          "score": 0.7791142522075929
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 14,
      "text": "Synthetic service 6",
      "resource": "g6",
      "aiResource": "g6",
      "evidence": [
        {
          "resource": "g6",
          "score": 0.9999997249603723
        },
        {
          "resource": "g5",
          "score": 0.8985445008641003
        },
        {
          "resource": "g7",
          "score": 0.8926216658951315
        },
        {
          "resource": "g4",
          "score": 0.8890150040342659
        },
        {
          "resource": "g3",
          "score": 0.8809496732415856
        },
        {
          "resource": "g2",
          "score": 0.8588791732284471
        },
        {
          "resource": "g1",
          "score": 0.8495630932283709
        },
        {
          "resource": "g0",
          "score": 0.7812235061759124
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 15,
      "text": "Synthetic service 7",
      "resource": "g7",
      "aiResource": "g7",
      "evidence": [
        {
          "resource": "g7",
          "score": 1.0000003860539044
        },
        {
          "resource": "g6",
          "score": 0.8926216658951315
        },
        {
          "resource": "g5",
          "score": 0.8844299645279483
        },
        {
          "resource": "g3",
          "score": 0.8800230301479692
        },
        {
          "resource": "g4",
          "score": 0.8737547412166419
        },
        {
          "resource": "g2",
          "score": 0.8707836506385261
        },
        {
          "resource": "g1",
          "score": 0.8589786669284625
        },
        {
          "resource": "g0",
          "score": 0.7560068089474151
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 16,
      "text": "Synthetic service 0",
      "resource": "g0",
      "aiResource": "g0",
      "evidence": [
        {
          "resource": "g0",
          "score": 1.0000000813742607
        },
        {
          "resource": "g1",
          "score": 0.8117642079807471
        },
        {
          "resource": "g4",
          "score": 0.7916498749389049
        },
        {
          "resource": "g2",
          "score": 0.7903536110618323
        },
        {
          "resource": "g6",
          "score": 0.7812235061759124
        },
        {
          "resource": "g5",
          "score": 0.7791142522075929
        },
        {
          "resource": "g3",
          "score": 0.7747207990102273
        },
        {
          "resource": "g7",
          "score": 0.7560068089474151
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 17,
      "text": "Synthetic service 1",
      "resource": "g1",
      "aiResource": "g1",
      "evidence": [
        {
          "resource": "g1",
          "score": 0.9999998804713951
        },
        {
          "resource": "g2",
          "score": 0.9180736867370445
        },
        {
          "resource": "g3",
          "score": 0.9151973270574565
        },
        {
          "resource": "g4",
          "score": 0.8941990329267746
        },
        {
          "resource": "g5",
          "score": 0.8604840189877342
        },
        {
          "resource": "g7",
          "score": 0.8589786669284625
        },
        {
          "resource": "g6",
          "score": 0.8495630932283709
        },
        {
          "resource": "g0",
          "score": 0.8117642079807471
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 18,
      "text": "Synthetic service 2",
      "resource": "g2",
      "aiResource": "g2",
      "evidence": [
        {
          "resource": "g2",
          "score": 1.0000002690571077
        },
        {
          "resource": "g3",
          "score": 0.9206897609092813
        },
        {
          "resource": "g1",
          "score": 0.9180736867370445
        },
        {
          "resource": "g4",
          "score": 0.9059481402244757
        },
        {
          "resource": "g7",
          "score": 0.8707836506385261
        },
        {
          "resource": "g6",
          "score": 0.8588791732284471
        },
        {
          "resource": "g5",
          "score": 0.8581678435059512
        },
        {
          "resource": "g0",
          "score": 0.7903536110618323
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 19,
      "text": "Synthetic service 3",
      "resource": "g3",
      "aiResource": "g3",
      "evidence": [
        {
          "resource": "g3",
          "score": 1.000000117686045
        },
        {
          "resource": "g4",
          "score": 0.9232842584172053
        },
        {
          "resource": "g2",
          "score": 0.9206897609092813
        },
        {
          "resource": "g1",
          "score": 0.9151973270574565
        },
        {
          "resource": "g6",
          "score": 0.8809496732415856
        },
        {
          "resource": "g7",
          "score": 0.8800230301479692
        },
        {
          "resource": "g5",
          "score": 0.8752505179103346
        },
        {
          "resource": "g0",
          "score": 0.7747207990102273
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 20,
      "text": "Synthetic service 4",
      "resource": "g4",
      "aiResource": "g4",
      "evidence": [
        {
          "resource": "g4",
          "score": 0.9999992321784655
        },
        {
          "resource": "g3",
          "score": 0.9232842584172053
        },
        {
          "resource": "g2",
          "score": 0.9059481402244757
        },
        {
          "resource": "g1",
          "score": 0.8941990329267746
        },
        {
          "resource": "g5",
          "score": 0.889715312563072
        },
        {
          "resource": "g6",
          "score": 0.8890150040342659
        },
        {
          "resource": "g7",
          "score": 0.8737547412166419
        },
        {
          "resource": "g0",
          "score": 0.7916498749389049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 21,
      "text": "Synthetic service 5",
      "resource": "g5",
      "aiResource": "g5",
      "evidence": [
        {
          "resource": "g5",
          "score": 1.0000001237853486
        },
        {
          "resource": "g6",
          "score": 0.8985445008641003
        },
        {
          "resource": "g4",
          "score": 0.889715312563072
        },
        {
          "resource": "g7",
          "score": 0.8844299645279483
        },
        {
          "resource": "g3",
          "score": 0.8752505179103346
        },
        {
          "resource": "g1",
          "score": 0.8604840189877342
        },
        {
          "resource": "g2",
          "score": 0.8581678435059512
        },
        {
          "resource": "g0",
          "score": 0.7791142522075929
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 22,
      "text": "Synthetic service 6",
      "resource": "g6",
      "aiResource": "g6",
      "evidence": [
        {
          "resource": "g6",
          "score": 0.9999997249603723
        },
        {
          "resource": "g5",
          "score": 0.8985445008641003
        },
        {
          "resource": "g7",
          "score": 0.8926216658951315
        },
        {
          "resource": "g4",
          "score": 0.8890150040342659
        },
        {
          "resource": "g3",
          "score": 0.8809496732415856
        },
        {
          "resource": "g2",
          "score": 0.8588791732284471
        },
        {
          "resource": "g1",
          "score": 0.8495630932283709
        },
        {
          "resource": "g0",
          "score": 0.7812235061759124
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 23,
      "text": "Synthetic service 7",
      "resource": "g7",
      "aiResource": "g7",
      "evidence": [
        {
          "resource": "g7",
          "score": 1.0000003860539044
        },
        {
          "resource": "g6",
          "score": 0.8926216658951315
        },
        {
          "resource": "g5",
          "score": 0.8844299645279483
        },
        {
          "resource": "g3",
          "score": 0.8800230301479692
        },
        {
          "resource": "g4",
          "score": 0.8737547412166419
        },
        {
          "resource": "g2",
          "score": 0.8707836506385261
        },
        {
          "resource": "g1",
          "score": 0.8589786669284625
        },
        {
          "resource": "g0",
          "score": 0.7560068089474151
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 24,
      "text": "Synthetic service 0",
      "resource": "g0",
      "aiResource": "g0",
      "evidence": [
        {
          "resource": "g0",
          "score": 1.0000000813742607
        },
        {
          "resource": "g1",
          "score": 0.8117642079807471
        },
        {
          "resource": "g4",
          "score": 0.7916498749389049
        },
        {
          "resource": "g2",
          "score": 0.7903536110618323
        },
        {
          "resource": "g6",
          "score": 0.7812235061759124
        },
        {
          "resource": "g5",
          "score": 0.7791142522075929
        },
        {
          "resource": "g3",
          "score": 0.7747207990102273
        },
        {
          "resource": "g7",
          "score": 0.7560068089474151
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 25,
      "text": "Synthetic service 1",
      "resource": "g1",
      "aiResource": "g1",
      "evidence": [
        {
          "resource": "g1",
          "score": 0.9999998804713951
        },
        {
          "resource": "g2",
          "score": 0.9180736867370445
        },
        {
          "resource": "g3",
          "score": 0.9151973270574565
        },
        {
          "resource": "g4",
          "score": 0.8941990329267746
        },
        {
          "resource": "g5",
          "score": 0.8604840189877342
        },
        {
          "resource": "g7",
          "score": 0.8589786669284625
        },
        {
          "resource": "g6",
          "score": 0.8495630932283709
        },
        {
          "resource": "g0",
          "score": 0.8117642079807471
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 26,
      "text": "Synthetic service 2",
      "resource": "g2",
      "aiResource": "g2",
      "evidence": [
        {
          "resource": "g2",
          "score": 1.0000002690571077
        },
        {
          "resource": "g3",
          "score": 0.9206897609092813
        },
        {
          "resource": "g1",
          "score": 0.9180736867370445
        },
        {
          "resource": "g4",
          "score": 0.9059481402244757
        },
        {
          "resource": "g7",
          "score": 0.8707836506385261
        },
        {
          "resource": "g6",
          "score": 0.8588791732284471
        },
        {
          "resource": "g5",
          "score": 0.8581678435059512
        },
        {
          "resource": "g0",
          "score": 0.7903536110618323
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 27,
      "text": "Synthetic service 3",
      "resource": "g3",
      "aiResource": "g3",
      "evidence": [
        {
          "resource": "g3",
          "score": 1.000000117686045
        },
        {
          "resource": "g4",
          "score": 0.9232842584172053
        },
        {
          "resource": "g2",
          "score": 0.9206897609092813
        },
        {
          "resource": "g1",
          "score": 0.9151973270574565
        },
        {
          "resource": "g6",
          "score": 0.8809496732415856
        },
        {
          "resource": "g7",
          "score": 0.8800230301479692
        },
        {
          "resource": "g5",
          "score": 0.8752505179103346
        },
        {
          "resource": "g0",
          "score": 0.7747207990102273
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 28,
      "text": "Synthetic service 4",
      "resource": "g4",
      "aiResource": "g4",
      "evidence": [
        {
          "resource": "g4",
          "score": 0.9999992321784655
        },
        {
          "resource": "g3",
          "score": 0.9232842584172053
        },
        {
          "resource": "g2",
          "score": 0.9059481402244757
        },
        {
          "resource": "g1",
          "score": 0.8941990329267746
        },
        {
          "resource": "g5",
          "score": 0.889715312563072
        },
        {
          "resource": "g6",
          "score": 0.8890150040342659
        },
        {
          "resource": "g7",
          "score": 0.8737547412166419
        },
        {
          "resource": "g0",
          "score": 0.7916498749389049
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 29,
      "text": "Synthetic service 5",
      "resource": "g5",
      "aiResource": "g5",
      "evidence": [
        {
          "resource": "g5",
          "score": 1.0000001237853486
        },
        {
          "resource": "g6",
          "score": 0.8985445008641003
        },
        {
          "resource": "g4",
          "score": 0.889715312563072
        },
        {
          "resource": "g7",
          "score": 0.8844299645279483
        },
        {
          "resource": "g3",
          "score": 0.8752505179103346
        },
        {
          "resource": "g1",
          "score": 0.8604840189877342
        },
        {
          "resource": "g2",
          "score": 0.8581678435059512
        },
        {
          "resource": "g0",
          "score": 0.7791142522075929
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 30,
      "text": "Synthetic service 6",
      "resource": "g6",
      "aiResource": "g6",
      "evidence": [
        {
          "resource": "g6",
          "score": 0.9999997249603723
        },
        {
          "resource": "g5",
          "score": 0.8985445008641003
        },
        {
          "resource": "g7",
          "score": 0.8926216658951315
        },
        {
          "resource": "g4",
          "score": 0.8890150040342659
        },
        {
          "resource": "g3",
          "score": 0.8809496732415856
        },
        {
          "resource": "g2",
          "score": 0.8588791732284471
        },
        {
          "resource": "g1",
          "score": 0.8495630932283709
        },
        {
          "resource": "g0",
          "score": 0.7812235061759124
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "index": 31,
      "text": "Synthetic service 7",
      "resource": "g7",
      "aiResource": "g7",
      "evidence": [
        {
          "resource": "g7",
          "score": 1.0000003860539044
        },
        {
          "resource": "g6",
          "score": 0.8926216658951315
        },
        {
          "resource": "g5",
          "score": 0.8844299645279483
        },
        {
          "resource": "g3",
          "score": 0.8800230301479692
        },
        {
          "resource": "g4",
          "score": 0.8737547412166419
        },
        {
          "resource": "g2",
          "score": 0.8707836506385261
        },
        {
          "resource": "g1",
          "score": 0.8589786669284625
        },
        {
          "resource": "g0",
          "score": 0.7560068089474151
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Neural similarity is not service identity. Verify the complete revision history and all assumptions. No DNS lookup, configuration or shutdown is performed.",
  "analysis": {
    "status": "ready",
    "records": [
      {
        "id": "=record\n\"0\"",
        "service": "g0",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"1\"",
        "service": "g1",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"2\"",
        "service": "g2",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"3\"",
        "service": "g3",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"4\"",
        "service": "g4",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"5\"",
        "service": "g5",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"6\"",
        "service": "g6",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"7\"",
        "service": "g7",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"8\"",
        "service": "g0",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"9\"",
        "service": "g1",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"10\"",
        "service": "g2",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"11\"",
        "service": "g3",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"12\"",
        "service": "g4",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"13\"",
        "service": "g5",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"14\"",
        "service": "g6",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"15\"",
        "service": "g7",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"16\"",
        "service": "g0",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"17\"",
        "service": "g1",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"18\"",
        "service": "g2",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"19\"",
        "service": "g3",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"20\"",
        "service": "g4",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"21\"",
        "service": "g5",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"22\"",
        "service": "g6",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"23\"",
        "service": "g7",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"24\"",
        "service": "g0",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"25\"",
        "service": "g1",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"26\"",
        "service": "g2",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"27\"",
        "service": "g3",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"28\"",
        "service": "g4",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"29\"",
        "service": "g5",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"30\"",
        "service": "g6",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      },
      {
        "id": "=record\n\"31\"",
        "service": "g7",
        "retireAt": 1000,
        "switchAt": 700,
        "baselineAfter": 820,
        "safeAfter": 820,
        "extraWait": 0,
        "deadlineGap": 0,
        "baselinePass": true,
        "historyPass": true,
        "witnesses": [
          {
            "revision": 0,
            "from": 0,
            "until": 100,
            "ttl": 120,
            "expiryBound": 220
          },
          {
            "revision": 1,
            "from": 100,
            "until": 200,
            "ttl": 120,
            "expiryBound": 320
          },
          {
            "revision": 2,
            "from": 200,
            "until": 300,
            "ttl": 120,
            "expiryBound": 420
          },
          {
            "revision": 3,
            "from": 300,
            "until": 400,
            "ttl": 120,
            "expiryBound": 520
          },
          {
            "revision": 4,
            "from": 400,
            "until": 500,
            "ttl": 120,
            "expiryBound": 620
          },
          {
            "revision": 5,
            "from": 500,
            "until": 600,
            "ttl": 120,
            "expiryBound": 720
          },
          {
            "revision": 6,
            "from": 600,
            "until": 700,
            "ttl": 120,
            "expiryBound": 820
          }
        ]
      }
    ],
    "services": [
      {
        "id": "g0",
        "recordIds": [
          "=record\n\"0\"",
          "=record\n\"8\"",
          "=record\n\"16\"",
          "=record\n\"24\""
        ],
        "safeAfter": 820
      },
      {
        "id": "g1",
        "recordIds": [
          "=record\n\"1\"",
          "=record\n\"9\"",
          "=record\n\"17\"",
          "=record\n\"25\""
        ],
        "safeAfter": 820
      },
      {
        "id": "g2",
        "recordIds": [
          "=record\n\"2\"",
          "=record\n\"10\"",
          "=record\n\"18\"",
          "=record\n\"26\""
        ],
        "safeAfter": 820
      },
      {
        "id": "g3",
        "recordIds": [
          "=record\n\"3\"",
          "=record\n\"11\"",
          "=record\n\"19\"",
          "=record\n\"27\""
        ],
        "safeAfter": 820
      },
      {
        "id": "g4",
        "recordIds": [
          "=record\n\"4\"",
          "=record\n\"12\"",
          "=record\n\"20\"",
          "=record\n\"28\""
        ],
        "safeAfter": 820
      },
      {
        "id": "g5",
        "recordIds": [
          "=record\n\"5\"",
          "=record\n\"13\"",
          "=record\n\"21\"",
          "=record\n\"29\""
        ],
        "safeAfter": 820
      },
      {
        "id": "g6",
        "recordIds": [
          "=record\n\"6\"",
          "=record\n\"14\"",
          "=record\n\"22\"",
          "=record\n\"30\""
        ],
        "safeAfter": 820
      },
      {
        "id": "g7",
        "recordIds": [
          "=record\n\"7\"",
          "=record\n\"15\"",
          "=record\n\"23\"",
          "=record\n\"31\""
        ],
        "safeAfter": 820
      }
    ],
    "baselineRisk": 0,
    "historyRisk": 0,
    "missedByBaseline": 0,
    "maxExtraWait": 0,
    "scope": "Hypothetical positive-answer TTL upper bounds only. All authoritative changes are simultaneous, caches honor TTL, no refresh before second 0, no serve-stale, negative caches, CNAME chains, clock skew or connections outliving DNS. Each old revision can be fetched arbitrarily close to its next change; next-change + old TTL is a conservative expiry bound. Equality clears the bound. Final new answer is permanent. This is not proof of live propagation or permission to shut down a service."
  }
}

