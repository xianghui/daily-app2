# Maximum lock worksheet

Neural similarity is not mutex identity. Holds withhold the entire audit; originals are preserved. No code or system is changed.

## Reviewed lock-order audit

Potential lock-order inversion only. Assumes non-reentrant exclusive mutexes, acquired in listed order and all retained until trace end. A cycle is not proof of a reachable runtime deadlock; an acyclic graph covers only supplied notes. No source analysis, scheduling, code execution or automatic reordering.

TRACES RETAINED: 24 / ACQUISITIONS: 192

PAIRWISE-REVERSAL BASELINE: 0 opposite lock pairs. Does not find longer cycles.

FULL DIRECTED AUDIT: Acyclic supplied order. One compatible catalog ordering: r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7

Do not automatically reorder code. Review semantics and all missing execution paths.

REVIEWED ACQUISITIONS
=trace
"0": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"1": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"2": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"3": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"4": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"5": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"6": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"7": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"8": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"9": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"10": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"11": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"12": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"13": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"14": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"15": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"16": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"17": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"18": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"19": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"20": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"21": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"22": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7
=trace
"23": r0 → r1 → r2 → r3 → r4 → r5 → r6 → r7

ALL HELD-BEFORE-ACQUIRED EDGES
r0 → r1 | =trace
"0" [1 before 2]; =trace
"1" [1 before 2]; =trace
"2" [1 before 2]; =trace
"3" [1 before 2]; =trace
"4" [1 before 2]; =trace
"5" [1 before 2]; =trace
"6" [1 before 2]; =trace
"7" [1 before 2]; =trace
"8" [1 before 2]; =trace
"9" [1 before 2]; =trace
"10" [1 before 2]; =trace
"11" [1 before 2]; =trace
"12" [1 before 2]; =trace
"13" [1 before 2]; =trace
"14" [1 before 2]; =trace
"15" [1 before 2]; =trace
"16" [1 before 2]; =trace
"17" [1 before 2]; =trace
"18" [1 before 2]; =trace
"19" [1 before 2]; =trace
"20" [1 before 2]; =trace
"21" [1 before 2]; =trace
"22" [1 before 2]; =trace
"23" [1 before 2]
r0 → r2 | =trace
"0" [1 before 3]; =trace
"1" [1 before 3]; =trace
"2" [1 before 3]; =trace
"3" [1 before 3]; =trace
"4" [1 before 3]; =trace
"5" [1 before 3]; =trace
"6" [1 before 3]; =trace
"7" [1 before 3]; =trace
"8" [1 before 3]; =trace
"9" [1 before 3]; =trace
"10" [1 before 3]; =trace
"11" [1 before 3]; =trace
"12" [1 before 3]; =trace
"13" [1 before 3]; =trace
"14" [1 before 3]; =trace
"15" [1 before 3]; =trace
"16" [1 before 3]; =trace
"17" [1 before 3]; =trace
"18" [1 before 3]; =trace
"19" [1 before 3]; =trace
"20" [1 before 3]; =trace
"21" [1 before 3]; =trace
"22" [1 before 3]; =trace
"23" [1 before 3]
r0 → r3 | =trace
"0" [1 before 4]; =trace
"1" [1 before 4]; =trace
"2" [1 before 4]; =trace
"3" [1 before 4]; =trace
"4" [1 before 4]; =trace
"5" [1 before 4]; =trace
"6" [1 before 4]; =trace
"7" [1 before 4]; =trace
"8" [1 before 4]; =trace
"9" [1 before 4]; =trace
"10" [1 before 4]; =trace
"11" [1 before 4]; =trace
"12" [1 before 4]; =trace
"13" [1 before 4]; =trace
"14" [1 before 4]; =trace
"15" [1 before 4]; =trace
"16" [1 before 4]; =trace
"17" [1 before 4]; =trace
"18" [1 before 4]; =trace
"19" [1 before 4]; =trace
"20" [1 before 4]; =trace
"21" [1 before 4]; =trace
"22" [1 before 4]; =trace
"23" [1 before 4]
r0 → r4 | =trace
"0" [1 before 5]; =trace
"1" [1 before 5]; =trace
"2" [1 before 5]; =trace
"3" [1 before 5]; =trace
"4" [1 before 5]; =trace
"5" [1 before 5]; =trace
"6" [1 before 5]; =trace
"7" [1 before 5]; =trace
"8" [1 before 5]; =trace
"9" [1 before 5]; =trace
"10" [1 before 5]; =trace
"11" [1 before 5]; =trace
"12" [1 before 5]; =trace
"13" [1 before 5]; =trace
"14" [1 before 5]; =trace
"15" [1 before 5]; =trace
"16" [1 before 5]; =trace
"17" [1 before 5]; =trace
"18" [1 before 5]; =trace
"19" [1 before 5]; =trace
"20" [1 before 5]; =trace
"21" [1 before 5]; =trace
"22" [1 before 5]; =trace
"23" [1 before 5]
r0 → r5 | =trace
"0" [1 before 6]; =trace
"1" [1 before 6]; =trace
"2" [1 before 6]; =trace
"3" [1 before 6]; =trace
"4" [1 before 6]; =trace
"5" [1 before 6]; =trace
"6" [1 before 6]; =trace
"7" [1 before 6]; =trace
"8" [1 before 6]; =trace
"9" [1 before 6]; =trace
"10" [1 before 6]; =trace
"11" [1 before 6]; =trace
"12" [1 before 6]; =trace
"13" [1 before 6]; =trace
"14" [1 before 6]; =trace
"15" [1 before 6]; =trace
"16" [1 before 6]; =trace
"17" [1 before 6]; =trace
"18" [1 before 6]; =trace
"19" [1 before 6]; =trace
"20" [1 before 6]; =trace
"21" [1 before 6]; =trace
"22" [1 before 6]; =trace
"23" [1 before 6]
r0 → r6 | =trace
"0" [1 before 7]; =trace
"1" [1 before 7]; =trace
"2" [1 before 7]; =trace
"3" [1 before 7]; =trace
"4" [1 before 7]; =trace
"5" [1 before 7]; =trace
"6" [1 before 7]; =trace
"7" [1 before 7]; =trace
"8" [1 before 7]; =trace
"9" [1 before 7]; =trace
"10" [1 before 7]; =trace
"11" [1 before 7]; =trace
"12" [1 before 7]; =trace
"13" [1 before 7]; =trace
"14" [1 before 7]; =trace
"15" [1 before 7]; =trace
"16" [1 before 7]; =trace
"17" [1 before 7]; =trace
"18" [1 before 7]; =trace
"19" [1 before 7]; =trace
"20" [1 before 7]; =trace
"21" [1 before 7]; =trace
"22" [1 before 7]; =trace
"23" [1 before 7]
r0 → r7 | =trace
"0" [1 before 8]; =trace
"1" [1 before 8]; =trace
"2" [1 before 8]; =trace
"3" [1 before 8]; =trace
"4" [1 before 8]; =trace
"5" [1 before 8]; =trace
"6" [1 before 8]; =trace
"7" [1 before 8]; =trace
"8" [1 before 8]; =trace
"9" [1 before 8]; =trace
"10" [1 before 8]; =trace
"11" [1 before 8]; =trace
"12" [1 before 8]; =trace
"13" [1 before 8]; =trace
"14" [1 before 8]; =trace
"15" [1 before 8]; =trace
"16" [1 before 8]; =trace
"17" [1 before 8]; =trace
"18" [1 before 8]; =trace
"19" [1 before 8]; =trace
"20" [1 before 8]; =trace
"21" [1 before 8]; =trace
"22" [1 before 8]; =trace
"23" [1 before 8]
r1 → r2 | =trace
"0" [2 before 3]; =trace
"1" [2 before 3]; =trace
"2" [2 before 3]; =trace
"3" [2 before 3]; =trace
"4" [2 before 3]; =trace
"5" [2 before 3]; =trace
"6" [2 before 3]; =trace
"7" [2 before 3]; =trace
"8" [2 before 3]; =trace
"9" [2 before 3]; =trace
"10" [2 before 3]; =trace
"11" [2 before 3]; =trace
"12" [2 before 3]; =trace
"13" [2 before 3]; =trace
"14" [2 before 3]; =trace
"15" [2 before 3]; =trace
"16" [2 before 3]; =trace
"17" [2 before 3]; =trace
"18" [2 before 3]; =trace
"19" [2 before 3]; =trace
"20" [2 before 3]; =trace
"21" [2 before 3]; =trace
"22" [2 before 3]; =trace
"23" [2 before 3]
r1 → r3 | =trace
"0" [2 before 4]; =trace
"1" [2 before 4]; =trace
"2" [2 before 4]; =trace
"3" [2 before 4]; =trace
"4" [2 before 4]; =trace
"5" [2 before 4]; =trace
"6" [2 before 4]; =trace
"7" [2 before 4]; =trace
"8" [2 before 4]; =trace
"9" [2 before 4]; =trace
"10" [2 before 4]; =trace
"11" [2 before 4]; =trace
"12" [2 before 4]; =trace
"13" [2 before 4]; =trace
"14" [2 before 4]; =trace
"15" [2 before 4]; =trace
"16" [2 before 4]; =trace
"17" [2 before 4]; =trace
"18" [2 before 4]; =trace
"19" [2 before 4]; =trace
"20" [2 before 4]; =trace
"21" [2 before 4]; =trace
"22" [2 before 4]; =trace
"23" [2 before 4]
r1 → r4 | =trace
"0" [2 before 5]; =trace
"1" [2 before 5]; =trace
"2" [2 before 5]; =trace
"3" [2 before 5]; =trace
"4" [2 before 5]; =trace
"5" [2 before 5]; =trace
"6" [2 before 5]; =trace
"7" [2 before 5]; =trace
"8" [2 before 5]; =trace
"9" [2 before 5]; =trace
"10" [2 before 5]; =trace
"11" [2 before 5]; =trace
"12" [2 before 5]; =trace
"13" [2 before 5]; =trace
"14" [2 before 5]; =trace
"15" [2 before 5]; =trace
"16" [2 before 5]; =trace
"17" [2 before 5]; =trace
"18" [2 before 5]; =trace
"19" [2 before 5]; =trace
"20" [2 before 5]; =trace
"21" [2 before 5]; =trace
"22" [2 before 5]; =trace
"23" [2 before 5]
r1 → r5 | =trace
"0" [2 before 6]; =trace
"1" [2 before 6]; =trace
"2" [2 before 6]; =trace
"3" [2 before 6]; =trace
"4" [2 before 6]; =trace
"5" [2 before 6]; =trace
"6" [2 before 6]; =trace
"7" [2 before 6]; =trace
"8" [2 before 6]; =trace
"9" [2 before 6]; =trace
"10" [2 before 6]; =trace
"11" [2 before 6]; =trace
"12" [2 before 6]; =trace
"13" [2 before 6]; =trace
"14" [2 before 6]; =trace
"15" [2 before 6]; =trace
"16" [2 before 6]; =trace
"17" [2 before 6]; =trace
"18" [2 before 6]; =trace
"19" [2 before 6]; =trace
"20" [2 before 6]; =trace
"21" [2 before 6]; =trace
"22" [2 before 6]; =trace
"23" [2 before 6]
r1 → r6 | =trace
"0" [2 before 7]; =trace
"1" [2 before 7]; =trace
"2" [2 before 7]; =trace
"3" [2 before 7]; =trace
"4" [2 before 7]; =trace
"5" [2 before 7]; =trace
"6" [2 before 7]; =trace
"7" [2 before 7]; =trace
"8" [2 before 7]; =trace
"9" [2 before 7]; =trace
"10" [2 before 7]; =trace
"11" [2 before 7]; =trace
"12" [2 before 7]; =trace
"13" [2 before 7]; =trace
"14" [2 before 7]; =trace
"15" [2 before 7]; =trace
"16" [2 before 7]; =trace
"17" [2 before 7]; =trace
"18" [2 before 7]; =trace
"19" [2 before 7]; =trace
"20" [2 before 7]; =trace
"21" [2 before 7]; =trace
"22" [2 before 7]; =trace
"23" [2 before 7]
r1 → r7 | =trace
"0" [2 before 8]; =trace
"1" [2 before 8]; =trace
"2" [2 before 8]; =trace
"3" [2 before 8]; =trace
"4" [2 before 8]; =trace
"5" [2 before 8]; =trace
"6" [2 before 8]; =trace
"7" [2 before 8]; =trace
"8" [2 before 8]; =trace
"9" [2 before 8]; =trace
"10" [2 before 8]; =trace
"11" [2 before 8]; =trace
"12" [2 before 8]; =trace
"13" [2 before 8]; =trace
"14" [2 before 8]; =trace
"15" [2 before 8]; =trace
"16" [2 before 8]; =trace
"17" [2 before 8]; =trace
"18" [2 before 8]; =trace
"19" [2 before 8]; =trace
"20" [2 before 8]; =trace
"21" [2 before 8]; =trace
"22" [2 before 8]; =trace
"23" [2 before 8]
r2 → r3 | =trace
"0" [3 before 4]; =trace
"1" [3 before 4]; =trace
"2" [3 before 4]; =trace
"3" [3 before 4]; =trace
"4" [3 before 4]; =trace
"5" [3 before 4]; =trace
"6" [3 before 4]; =trace
"7" [3 before 4]; =trace
"8" [3 before 4]; =trace
"9" [3 before 4]; =trace
"10" [3 before 4]; =trace
"11" [3 before 4]; =trace
"12" [3 before 4]; =trace
"13" [3 before 4]; =trace
"14" [3 before 4]; =trace
"15" [3 before 4]; =trace
"16" [3 before 4]; =trace
"17" [3 before 4]; =trace
"18" [3 before 4]; =trace
"19" [3 before 4]; =trace
"20" [3 before 4]; =trace
"21" [3 before 4]; =trace
"22" [3 before 4]; =trace
"23" [3 before 4]
r2 → r4 | =trace
"0" [3 before 5]; =trace
"1" [3 before 5]; =trace
"2" [3 before 5]; =trace
"3" [3 before 5]; =trace
"4" [3 before 5]; =trace
"5" [3 before 5]; =trace
"6" [3 before 5]; =trace
"7" [3 before 5]; =trace
"8" [3 before 5]; =trace
"9" [3 before 5]; =trace
"10" [3 before 5]; =trace
"11" [3 before 5]; =trace
"12" [3 before 5]; =trace
"13" [3 before 5]; =trace
"14" [3 before 5]; =trace
"15" [3 before 5]; =trace
"16" [3 before 5]; =trace
"17" [3 before 5]; =trace
"18" [3 before 5]; =trace
"19" [3 before 5]; =trace
"20" [3 before 5]; =trace
"21" [3 before 5]; =trace
"22" [3 before 5]; =trace
"23" [3 before 5]
r2 → r5 | =trace
"0" [3 before 6]; =trace
"1" [3 before 6]; =trace
"2" [3 before 6]; =trace
"3" [3 before 6]; =trace
"4" [3 before 6]; =trace
"5" [3 before 6]; =trace
"6" [3 before 6]; =trace
"7" [3 before 6]; =trace
"8" [3 before 6]; =trace
"9" [3 before 6]; =trace
"10" [3 before 6]; =trace
"11" [3 before 6]; =trace
"12" [3 before 6]; =trace
"13" [3 before 6]; =trace
"14" [3 before 6]; =trace
"15" [3 before 6]; =trace
"16" [3 before 6]; =trace
"17" [3 before 6]; =trace
"18" [3 before 6]; =trace
"19" [3 before 6]; =trace
"20" [3 before 6]; =trace
"21" [3 before 6]; =trace
"22" [3 before 6]; =trace
"23" [3 before 6]
r2 → r6 | =trace
"0" [3 before 7]; =trace
"1" [3 before 7]; =trace
"2" [3 before 7]; =trace
"3" [3 before 7]; =trace
"4" [3 before 7]; =trace
"5" [3 before 7]; =trace
"6" [3 before 7]; =trace
"7" [3 before 7]; =trace
"8" [3 before 7]; =trace
"9" [3 before 7]; =trace
"10" [3 before 7]; =trace
"11" [3 before 7]; =trace
"12" [3 before 7]; =trace
"13" [3 before 7]; =trace
"14" [3 before 7]; =trace
"15" [3 before 7]; =trace
"16" [3 before 7]; =trace
"17" [3 before 7]; =trace
"18" [3 before 7]; =trace
"19" [3 before 7]; =trace
"20" [3 before 7]; =trace
"21" [3 before 7]; =trace
"22" [3 before 7]; =trace
"23" [3 before 7]
r2 → r7 | =trace
"0" [3 before 8]; =trace
"1" [3 before 8]; =trace
"2" [3 before 8]; =trace
"3" [3 before 8]; =trace
"4" [3 before 8]; =trace
"5" [3 before 8]; =trace
"6" [3 before 8]; =trace
"7" [3 before 8]; =trace
"8" [3 before 8]; =trace
"9" [3 before 8]; =trace
"10" [3 before 8]; =trace
"11" [3 before 8]; =trace
"12" [3 before 8]; =trace
"13" [3 before 8]; =trace
"14" [3 before 8]; =trace
"15" [3 before 8]; =trace
"16" [3 before 8]; =trace
"17" [3 before 8]; =trace
"18" [3 before 8]; =trace
"19" [3 before 8]; =trace
"20" [3 before 8]; =trace
"21" [3 before 8]; =trace
"22" [3 before 8]; =trace
"23" [3 before 8]
r3 → r4 | =trace
"0" [4 before 5]; =trace
"1" [4 before 5]; =trace
"2" [4 before 5]; =trace
"3" [4 before 5]; =trace
"4" [4 before 5]; =trace
"5" [4 before 5]; =trace
"6" [4 before 5]; =trace
"7" [4 before 5]; =trace
"8" [4 before 5]; =trace
"9" [4 before 5]; =trace
"10" [4 before 5]; =trace
"11" [4 before 5]; =trace
"12" [4 before 5]; =trace
"13" [4 before 5]; =trace
"14" [4 before 5]; =trace
"15" [4 before 5]; =trace
"16" [4 before 5]; =trace
"17" [4 before 5]; =trace
"18" [4 before 5]; =trace
"19" [4 before 5]; =trace
"20" [4 before 5]; =trace
"21" [4 before 5]; =trace
"22" [4 before 5]; =trace
"23" [4 before 5]
r3 → r5 | =trace
"0" [4 before 6]; =trace
"1" [4 before 6]; =trace
"2" [4 before 6]; =trace
"3" [4 before 6]; =trace
"4" [4 before 6]; =trace
"5" [4 before 6]; =trace
"6" [4 before 6]; =trace
"7" [4 before 6]; =trace
"8" [4 before 6]; =trace
"9" [4 before 6]; =trace
"10" [4 before 6]; =trace
"11" [4 before 6]; =trace
"12" [4 before 6]; =trace
"13" [4 before 6]; =trace
"14" [4 before 6]; =trace
"15" [4 before 6]; =trace
"16" [4 before 6]; =trace
"17" [4 before 6]; =trace
"18" [4 before 6]; =trace
"19" [4 before 6]; =trace
"20" [4 before 6]; =trace
"21" [4 before 6]; =trace
"22" [4 before 6]; =trace
"23" [4 before 6]
r3 → r6 | =trace
"0" [4 before 7]; =trace
"1" [4 before 7]; =trace
"2" [4 before 7]; =trace
"3" [4 before 7]; =trace
"4" [4 before 7]; =trace
"5" [4 before 7]; =trace
"6" [4 before 7]; =trace
"7" [4 before 7]; =trace
"8" [4 before 7]; =trace
"9" [4 before 7]; =trace
"10" [4 before 7]; =trace
"11" [4 before 7]; =trace
"12" [4 before 7]; =trace
"13" [4 before 7]; =trace
"14" [4 before 7]; =trace
"15" [4 before 7]; =trace
"16" [4 before 7]; =trace
"17" [4 before 7]; =trace
"18" [4 before 7]; =trace
"19" [4 before 7]; =trace
"20" [4 before 7]; =trace
"21" [4 before 7]; =trace
"22" [4 before 7]; =trace
"23" [4 before 7]
r3 → r7 | =trace
"0" [4 before 8]; =trace
"1" [4 before 8]; =trace
"2" [4 before 8]; =trace
"3" [4 before 8]; =trace
"4" [4 before 8]; =trace
"5" [4 before 8]; =trace
"6" [4 before 8]; =trace
"7" [4 before 8]; =trace
"8" [4 before 8]; =trace
"9" [4 before 8]; =trace
"10" [4 before 8]; =trace
"11" [4 before 8]; =trace
"12" [4 before 8]; =trace
"13" [4 before 8]; =trace
"14" [4 before 8]; =trace
"15" [4 before 8]; =trace
"16" [4 before 8]; =trace
"17" [4 before 8]; =trace
"18" [4 before 8]; =trace
"19" [4 before 8]; =trace
"20" [4 before 8]; =trace
"21" [4 before 8]; =trace
"22" [4 before 8]; =trace
"23" [4 before 8]
r4 → r5 | =trace
"0" [5 before 6]; =trace
"1" [5 before 6]; =trace
"2" [5 before 6]; =trace
"3" [5 before 6]; =trace
"4" [5 before 6]; =trace
"5" [5 before 6]; =trace
"6" [5 before 6]; =trace
"7" [5 before 6]; =trace
"8" [5 before 6]; =trace
"9" [5 before 6]; =trace
"10" [5 before 6]; =trace
"11" [5 before 6]; =trace
"12" [5 before 6]; =trace
"13" [5 before 6]; =trace
"14" [5 before 6]; =trace
"15" [5 before 6]; =trace
"16" [5 before 6]; =trace
"17" [5 before 6]; =trace
"18" [5 before 6]; =trace
"19" [5 before 6]; =trace
"20" [5 before 6]; =trace
"21" [5 before 6]; =trace
"22" [5 before 6]; =trace
"23" [5 before 6]
r4 → r6 | =trace
"0" [5 before 7]; =trace
"1" [5 before 7]; =trace
"2" [5 before 7]; =trace
"3" [5 before 7]; =trace
"4" [5 before 7]; =trace
"5" [5 before 7]; =trace
"6" [5 before 7]; =trace
"7" [5 before 7]; =trace
"8" [5 before 7]; =trace
"9" [5 before 7]; =trace
"10" [5 before 7]; =trace
"11" [5 before 7]; =trace
"12" [5 before 7]; =trace
"13" [5 before 7]; =trace
"14" [5 before 7]; =trace
"15" [5 before 7]; =trace
"16" [5 before 7]; =trace
"17" [5 before 7]; =trace
"18" [5 before 7]; =trace
"19" [5 before 7]; =trace
"20" [5 before 7]; =trace
"21" [5 before 7]; =trace
"22" [5 before 7]; =trace
"23" [5 before 7]
r4 → r7 | =trace
"0" [5 before 8]; =trace
"1" [5 before 8]; =trace
"2" [5 before 8]; =trace
"3" [5 before 8]; =trace
"4" [5 before 8]; =trace
"5" [5 before 8]; =trace
"6" [5 before 8]; =trace
"7" [5 before 8]; =trace
"8" [5 before 8]; =trace
"9" [5 before 8]; =trace
"10" [5 before 8]; =trace
"11" [5 before 8]; =trace
"12" [5 before 8]; =trace
"13" [5 before 8]; =trace
"14" [5 before 8]; =trace
"15" [5 before 8]; =trace
"16" [5 before 8]; =trace
"17" [5 before 8]; =trace
"18" [5 before 8]; =trace
"19" [5 before 8]; =trace
"20" [5 before 8]; =trace
"21" [5 before 8]; =trace
"22" [5 before 8]; =trace
"23" [5 before 8]
r5 → r6 | =trace
"0" [6 before 7]; =trace
"1" [6 before 7]; =trace
"2" [6 before 7]; =trace
"3" [6 before 7]; =trace
"4" [6 before 7]; =trace
"5" [6 before 7]; =trace
"6" [6 before 7]; =trace
"7" [6 before 7]; =trace
"8" [6 before 7]; =trace
"9" [6 before 7]; =trace
"10" [6 before 7]; =trace
"11" [6 before 7]; =trace
"12" [6 before 7]; =trace
"13" [6 before 7]; =trace
"14" [6 before 7]; =trace
"15" [6 before 7]; =trace
"16" [6 before 7]; =trace
"17" [6 before 7]; =trace
"18" [6 before 7]; =trace
"19" [6 before 7]; =trace
"20" [6 before 7]; =trace
"21" [6 before 7]; =trace
"22" [6 before 7]; =trace
"23" [6 before 7]
r5 → r7 | =trace
"0" [6 before 8]; =trace
"1" [6 before 8]; =trace
"2" [6 before 8]; =trace
"3" [6 before 8]; =trace
"4" [6 before 8]; =trace
"5" [6 before 8]; =trace
"6" [6 before 8]; =trace
"7" [6 before 8]; =trace
"8" [6 before 8]; =trace
"9" [6 before 8]; =trace
"10" [6 before 8]; =trace
"11" [6 before 8]; =trace
"12" [6 before 8]; =trace
"13" [6 before 8]; =trace
"14" [6 before 8]; =trace
"15" [6 before 8]; =trace
"16" [6 before 8]; =trace
"17" [6 before 8]; =trace
"18" [6 before 8]; =trace
"19" [6 before 8]; =trace
"20" [6 before 8]; =trace
"21" [6 before 8]; =trace
"22" [6 before 8]; =trace
"23" [6 before 8]
r6 → r7 | =trace
"0" [7 before 8]; =trace
"1" [7 before 8]; =trace
"2" [7 before 8]; =trace
"3" [7 before 8]; =trace
"4" [7 before 8]; =trace
"5" [7 before 8]; =trace
"6" [7 before 8]; =trace
"7" [7 before 8]; =trace
"8" [7 before 8]; =trace
"9" [7 before 8]; =trace
"10" [7 before 8]; =trace
"11" [7 before 8]; =trace
"12" [7 before 8]; =trace
"13" [7 before 8]; =trace
"14" [7 before 8]; =trace
"15" [7 before 8]; =trace
"16" [7 before 8]; =trace
"17" [7 before 8]; =trace
"18" [7 before 8]; =trace
"19" [7 before 8]; =trace
"20" [7 before 8]; =trace
"21" [7 before 8]; =trace
"22" [7 before 8]; =trace
"23" [7 before 8]

## Complete original and review audit

{
  "schema": "lock-orchard/1",
  "originalInput": {
    "title": "Maximum lock worksheet",
    "locks": [
      {
        "id": "r0",
        "description": "Synthetic lock 0"
      },
      {
        "id": "r1",
        "description": "Synthetic lock 1"
      },
      {
        "id": "r2",
        "description": "Synthetic lock 2"
      },
      {
        "id": "r3",
        "description": "Synthetic lock 3"
      },
      {
        "id": "r4",
        "description": "Synthetic lock 4"
      },
      {
        "id": "r5",
        "description": "Synthetic lock 5"
      },
      {
        "id": "r6",
        "description": "Synthetic lock 6"
      },
      {
        "id": "r7",
        "description": "Synthetic lock 7"
      }
    ],
    "traces": [
      {
        "id": "=trace\n\"0\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"1\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"2\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"3\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"4\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"5\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"6\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"7\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"8\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"9\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"10\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"11\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"12\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"13\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"14\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"15\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"16\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"17\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"18\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"19\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"20\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"21\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"22\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      },
      {
        "id": "=trace\n\"23\"",
        "acquire": [
          "Synthetic lock 0",
          "Synthetic lock 1",
          "Synthetic lock 2",
          "Synthetic lock 3",
          "Synthetic lock 4",
          "Synthetic lock 5",
          "Synthetic lock 6",
          "Synthetic lock 7"
        ]
      }
    ]
  },
  "reviews": [
    {
      "rule": 0,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 0,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 0,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 1,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 0,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 2,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 0,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 3,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 0,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 4,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 0,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 5,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 0,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 6,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 0,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 7,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 8,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 9,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 10,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 11,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 12,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 13,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 14,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 1,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 15,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 16,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 17,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 18,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 19,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 20,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 21,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 22,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 2,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 23,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 24,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 25,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 26,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 27,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 28,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 29,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 30,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 3,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 31,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 4,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 32,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 4,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 33,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 4,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 34,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 4,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 35,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 4,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 36,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 4,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 37,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 4,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 38,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 4,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 39,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 5,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 40,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 5,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 41,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 5,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 42,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 5,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 43,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 5,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 44,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 5,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 45,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 5,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 46,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 5,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 47,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 6,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 48,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 6,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 49,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 6,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 50,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 6,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 51,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 6,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 52,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 6,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 53,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 6,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 54,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 6,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 55,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 7,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 56,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 7,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 57,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 7,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 58,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 7,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 59,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 7,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 60,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 7,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 61,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 7,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 62,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 7,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 63,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 8,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 64,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 8,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 65,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 8,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 66,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 8,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 67,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 8,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 68,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 8,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 69,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 8,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 70,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 8,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 71,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 9,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 72,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 9,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 73,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 9,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 74,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 9,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 75,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 9,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 76,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 9,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 77,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 9,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 78,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 9,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 79,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 10,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 80,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 10,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 81,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 10,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 82,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 10,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 83,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 10,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 84,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 10,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 85,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 10,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 86,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 10,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 87,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 11,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 88,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 11,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 89,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 11,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 90,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 11,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 91,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 11,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 92,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 11,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 93,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 11,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 94,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 11,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 95,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 12,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 96,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 12,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 97,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 12,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 98,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 12,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 99,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 12,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 100,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 12,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 101,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 12,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 102,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 12,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 103,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 13,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 104,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 13,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 105,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 13,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 106,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 13,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 107,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 13,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 108,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 13,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 109,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 13,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 110,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 13,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 111,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 14,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 112,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 14,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 113,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 14,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 114,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 14,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 115,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 14,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 116,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 14,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 117,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 14,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 118,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 14,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 119,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 15,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 120,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 15,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 121,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 15,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 122,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 15,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 123,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 15,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 124,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 15,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 125,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 15,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 126,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 15,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 127,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 16,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 128,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 16,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 129,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 16,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 130,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 16,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 131,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 16,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 132,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 16,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 133,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 16,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 134,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 16,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 135,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 17,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 136,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 17,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 137,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 17,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 138,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 17,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 139,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 17,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 140,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 17,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 141,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 17,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 142,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 17,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 143,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 18,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 144,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 18,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 145,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 18,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 146,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 18,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 147,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 18,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 148,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 18,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 149,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 18,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 150,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 18,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 151,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 19,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 152,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 19,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 153,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 19,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 154,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 19,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 155,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 19,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 156,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 19,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 157,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 19,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 158,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 19,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 159,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 20,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 160,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 20,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 161,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 20,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 162,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 20,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 163,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 20,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 164,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 20,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 165,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 20,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 166,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 20,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 167,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 21,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 168,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 21,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 169,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 21,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 170,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 21,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 171,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 21,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 172,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 21,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 173,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 21,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 174,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 21,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 175,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 22,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 176,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 22,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 177,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 22,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 178,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 22,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 179,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 22,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 180,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 22,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 181,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 22,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 182,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 22,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 183,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 23,
      "position": 0,
      "text": "Synthetic lock 0",
      "index": 184,
      "resource": "r0",
      "aiResource": "r0",
      "evidence": [
        {
          "resource": "r0",
          "score": 0.9999998763285441
        },
        {
          "resource": "r1",
          "score": 0.8926067734977028
        },
        {
          "resource": "r2",
          "score": 0.8559823409010078
        },
        {
          "resource": "r3",
          "score": 0.8446288852774818
        },
        {
          "resource": "r4",
          "score": 0.8436718951722058
        },
        {
          "resource": "r5",
          "score": 0.8427436660420912
        },
        {
          "resource": "r6",
          "score": 0.841376895780917
        },
        {
          "resource": "r7",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 23,
      "position": 1,
      "text": "Synthetic lock 1",
      "index": 185,
      "resource": "r1",
      "aiResource": "r1",
      "evidence": [
        {
          "resource": "r1",
          "score": 0.9999995732536417
        },
        {
          "resource": "r2",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9204006761610654
        },
        {
          "resource": "r4",
          "score": 0.8959989843635804
        },
        {
          "resource": "r0",
          "score": 0.8926067734977028
        },
        {
          "resource": "r6",
          "score": 0.8911152258537327
        },
        {
          "resource": "r5",
          "score": 0.8868886491988586
        },
        {
          "resource": "r7",
          "score": 0.8847674131294023
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 23,
      "position": 2,
      "text": "Synthetic lock 2",
      "index": 186,
      "resource": "r2",
      "aiResource": "r2",
      "evidence": [
        {
          "resource": "r2",
          "score": 1.0000000199148014
        },
        {
          "resource": "r1",
          "score": 0.9271275820020357
        },
        {
          "resource": "r3",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.8980546764165013
        },
        {
          "resource": "r6",
          "score": 0.8757448714950884
        },
        {
          "resource": "r5",
          "score": 0.8752653847713117
        },
        {
          "resource": "r7",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8559823409010078
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 23,
      "position": 3,
      "text": "Synthetic lock 3",
      "index": 187,
      "resource": "r3",
      "aiResource": "r3",
      "evidence": [
        {
          "resource": "r3",
          "score": 1.0000003250779221
        },
        {
          "resource": "r1",
          "score": 0.9204006761610654
        },
        {
          "resource": "r2",
          "score": 0.9189437785204885
        },
        {
          "resource": "r4",
          "score": 0.9140455835449882
        },
        {
          "resource": "r6",
          "score": 0.8994931578873612
        },
        {
          "resource": "r5",
          "score": 0.8872596674572591
        },
        {
          "resource": "r7",
          "score": 0.8769899343729111
        },
        {
          "resource": "r0",
          "score": 0.8446288852774818
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 23,
      "position": 4,
      "text": "Synthetic lock 4",
      "index": 188,
      "resource": "r4",
      "aiResource": "r4",
      "evidence": [
        {
          "resource": "r4",
          "score": 1.000000030306916
        },
        {
          "resource": "r3",
          "score": 0.9140455835449882
        },
        {
          "resource": "r2",
          "score": 0.8980546764165013
        },
        {
          "resource": "r1",
          "score": 0.8959989843635804
        },
        {
          "resource": "r5",
          "score": 0.8950423536773261
        },
        {
          "resource": "r6",
          "score": 0.8934238296857773
        },
        {
          "resource": "r7",
          "score": 0.8754419185470937
        },
        {
          "resource": "r0",
          "score": 0.8436718951722058
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 23,
      "position": 5,
      "text": "Synthetic lock 5",
      "index": 189,
      "resource": "r5",
      "aiResource": "r5",
      "evidence": [
        {
          "resource": "r5",
          "score": 0.999999365871144
        },
        {
          "resource": "r6",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.8959938757241063
        },
        {
          "resource": "r4",
          "score": 0.8950423536773261
        },
        {
          "resource": "r3",
          "score": 0.8872596674572591
        },
        {
          "resource": "r1",
          "score": 0.8868886491988586
        },
        {
          "resource": "r2",
          "score": 0.8752653847713117
        },
        {
          "resource": "r0",
          "score": 0.8427436660420912
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 23,
      "position": 6,
      "text": "Synthetic lock 6",
      "index": 190,
      "resource": "r6",
      "aiResource": "r6",
      "evidence": [
        {
          "resource": "r6",
          "score": 1.000000529044047
        },
        {
          "resource": "r5",
          "score": 0.9116557583660029
        },
        {
          "resource": "r7",
          "score": 0.9084202800083928
        },
        {
          "resource": "r3",
          "score": 0.8994931578873612
        },
        {
          "resource": "r4",
          "score": 0.8934238296857773
        },
        {
          "resource": "r1",
          "score": 0.8911152258537327
        },
        {
          "resource": "r2",
          "score": 0.8757448714950884
        },
        {
          "resource": "r0",
          "score": 0.841376895780917
        }
      ],
      "decision": "approve",
      "note": ""
    },
    {
      "rule": 23,
      "position": 7,
      "text": "Synthetic lock 7",
      "index": 191,
      "resource": "r7",
      "aiResource": "r7",
      "evidence": [
        {
          "resource": "r7",
          "score": 0.9999999094211808
        },
        {
          "resource": "r6",
          "score": 0.9084202800083928
        },
        {
          "resource": "r5",
          "score": 0.8959938757241063
        },
        {
          "resource": "r1",
          "score": 0.8847674131294023
        },
        {
          "resource": "r3",
          "score": 0.8769899343729111
        },
        {
          "resource": "r4",
          "score": 0.8754419185470937
        },
        {
          "resource": "r2",
          "score": 0.860674470253921
        },
        {
          "resource": "r0",
          "score": 0.8235069906817836
        }
      ],
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Neural similarity is not mutex identity. Holds withhold the entire audit; originals are preserved. No code or system is changed.",
  "analysis": {
    "status": "ready",
    "traces": [
      {
        "id": "=trace\n\"0\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"1\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"2\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"3\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"4\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"5\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"6\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"7\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"8\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"9\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"10\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"11\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"12\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"13\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"14\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"15\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"16\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"17\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"18\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"19\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"20\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"21\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"22\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      },
      {
        "id": "=trace\n\"23\"",
        "acquire": [
          "r0",
          "r1",
          "r2",
          "r3",
          "r4",
          "r5",
          "r6",
          "r7"
        ]
      }
    ],
    "edges": [
      {
        "from": "r0",
        "to": "r1",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 1,
            "toPosition": 2
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 1,
            "toPosition": 2
          }
        ]
      },
      {
        "from": "r0",
        "to": "r2",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 1,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 1,
            "toPosition": 3
          }
        ]
      },
      {
        "from": "r0",
        "to": "r3",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 1,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 1,
            "toPosition": 4
          }
        ]
      },
      {
        "from": "r0",
        "to": "r4",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 1,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 1,
            "toPosition": 5
          }
        ]
      },
      {
        "from": "r0",
        "to": "r5",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 1,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 1,
            "toPosition": 6
          }
        ]
      },
      {
        "from": "r0",
        "to": "r6",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 1,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 1,
            "toPosition": 7
          }
        ]
      },
      {
        "from": "r0",
        "to": "r7",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 1,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 1,
            "toPosition": 8
          }
        ]
      },
      {
        "from": "r1",
        "to": "r2",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 2,
            "toPosition": 3
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 2,
            "toPosition": 3
          }
        ]
      },
      {
        "from": "r1",
        "to": "r3",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 2,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 2,
            "toPosition": 4
          }
        ]
      },
      {
        "from": "r1",
        "to": "r4",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 2,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 2,
            "toPosition": 5
          }
        ]
      },
      {
        "from": "r1",
        "to": "r5",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 2,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 2,
            "toPosition": 6
          }
        ]
      },
      {
        "from": "r1",
        "to": "r6",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 2,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 2,
            "toPosition": 7
          }
        ]
      },
      {
        "from": "r1",
        "to": "r7",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 2,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 2,
            "toPosition": 8
          }
        ]
      },
      {
        "from": "r2",
        "to": "r3",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 3,
            "toPosition": 4
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 3,
            "toPosition": 4
          }
        ]
      },
      {
        "from": "r2",
        "to": "r4",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 3,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 3,
            "toPosition": 5
          }
        ]
      },
      {
        "from": "r2",
        "to": "r5",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 3,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 3,
            "toPosition": 6
          }
        ]
      },
      {
        "from": "r2",
        "to": "r6",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 3,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 3,
            "toPosition": 7
          }
        ]
      },
      {
        "from": "r2",
        "to": "r7",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 3,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 3,
            "toPosition": 8
          }
        ]
      },
      {
        "from": "r3",
        "to": "r4",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 4,
            "toPosition": 5
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 4,
            "toPosition": 5
          }
        ]
      },
      {
        "from": "r3",
        "to": "r5",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 4,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 4,
            "toPosition": 6
          }
        ]
      },
      {
        "from": "r3",
        "to": "r6",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 4,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 4,
            "toPosition": 7
          }
        ]
      },
      {
        "from": "r3",
        "to": "r7",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 4,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 4,
            "toPosition": 8
          }
        ]
      },
      {
        "from": "r4",
        "to": "r5",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 5,
            "toPosition": 6
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 5,
            "toPosition": 6
          }
        ]
      },
      {
        "from": "r4",
        "to": "r6",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 5,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 5,
            "toPosition": 7
          }
        ]
      },
      {
        "from": "r4",
        "to": "r7",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 5,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 5,
            "toPosition": 8
          }
        ]
      },
      {
        "from": "r5",
        "to": "r6",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 6,
            "toPosition": 7
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 6,
            "toPosition": 7
          }
        ]
      },
      {
        "from": "r5",
        "to": "r7",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 6,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 6,
            "toPosition": 8
          }
        ]
      },
      {
        "from": "r6",
        "to": "r7",
        "witnesses": [
          {
            "trace": "=trace\n\"0\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"1\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"2\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"3\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"4\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"5\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"6\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"7\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"8\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"9\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"10\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"11\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"12\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"13\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"14\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"15\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"16\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"17\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"18\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"19\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"20\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"21\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"22\"",
            "fromPosition": 7,
            "toPosition": 8
          },
          {
            "trace": "=trace\n\"23\"",
            "fromPosition": 7,
            "toPosition": 8
          }
        ]
      }
    ],
    "reversedPairs": [],
    "cycle": null,
    "order": [
      "r0",
      "r1",
      "r2",
      "r3",
      "r4",
      "r5",
      "r6",
      "r7"
    ],
    "cycleEdges": [],
    "traceCount": 24,
    "acquisitionCount": 192,
    "scope": "Potential lock-order inversion only. Assumes non-reentrant exclusive mutexes, acquired in listed order and all retained until trace end. A cycle is not proof of a reachable runtime deadlock; an acyclic graph covers only supplied notes. No source analysis, scheduling, code execution or automatic reordering."
  }
}

