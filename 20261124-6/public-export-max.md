# Glyph Budget

1. "=row \"0\"\nnext" · ready
   Source: {"id":"=row \"0\"\nnext","context":"Backend database column import, UTF-8 encoded storage byte budget.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"0\"\nnext","system":"storage","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"storage","similarity":0.947623384558463},{"system":"legacy","similarity":0.2870969558140986},{"system":"editorial","similarity":0.1939611562021547}]}
   Check: {"id":"=row \"0\"\nnext","system":"storage","raw":"a, \"b\"\n","unit":"utf8","limit":16,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

2. "=row \"1\"\nnext" · ready
   Source: {"id":"=row \"1\"\nnext","context":"Legacy JavaScript form input uses HTML maxlength counting UTF-16 units.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"1\"\nnext","system":"legacy","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"legacy","similarity":0.8944684080019554},{"system":"storage","similarity":0.2990023938097291},{"system":"editorial","similarity":0.2585980802385985}]}
   Check: {"id":"=row \"1\"\nnext","system":"legacy","raw":"a, \"b\"\n","unit":"utf16","limit":12,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

3. "=row \"2\"\nnext" · ready
   Source: {"id":"=row \"2\"\nnext","context":"Editorial display label budget counts human readable grapheme characters.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"2\"\nnext","system":"editorial","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"editorial","similarity":0.8853952067421943},{"system":"storage","similarity":0.24715083096389362},{"system":"legacy","similarity":0.2125948941640408}]}
   Check: {"id":"=row \"2\"\nnext","system":"editorial","raw":"a, \"b\"\n","unit":"grapheme","limit":8,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

4. "=row \"3\"\nnext" · ready
   Source: {"id":"=row \"3\"\nnext","context":"Backend database column import, UTF-8 encoded storage byte budget.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"3\"\nnext","system":"storage","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"storage","similarity":0.953619426494828},{"system":"legacy","similarity":0.2826547602767078},{"system":"editorial","similarity":0.19556918350645763}]}
   Check: {"id":"=row \"3\"\nnext","system":"storage","raw":"a, \"b\"\n","unit":"utf8","limit":16,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

5. "=row \"4\"\nnext" · ready
   Source: {"id":"=row \"4\"\nnext","context":"Legacy JavaScript form input uses HTML maxlength counting UTF-16 units.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"4\"\nnext","system":"legacy","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"legacy","similarity":0.8944684080019554},{"system":"storage","similarity":0.2990023938097291},{"system":"editorial","similarity":0.2585980802385985}]}
   Check: {"id":"=row \"4\"\nnext","system":"legacy","raw":"a, \"b\"\n","unit":"utf16","limit":12,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

6. "=row \"5\"\nnext" · ready
   Source: {"id":"=row \"5\"\nnext","context":"Editorial display label budget counts human readable grapheme characters.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"5\"\nnext","system":"editorial","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"editorial","similarity":0.8853952067421943},{"system":"storage","similarity":0.24715083096389362},{"system":"legacy","similarity":0.2125948941640408}]}
   Check: {"id":"=row \"5\"\nnext","system":"editorial","raw":"a, \"b\"\n","unit":"grapheme","limit":8,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

7. "=row \"6\"\nnext" · ready
   Source: {"id":"=row \"6\"\nnext","context":"Backend database column import, UTF-8 encoded storage byte budget.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"6\"\nnext","system":"storage","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"storage","similarity":0.953619426494828},{"system":"legacy","similarity":0.2826547602767078},{"system":"editorial","similarity":0.19556918350645763}]}
   Check: {"id":"=row \"6\"\nnext","system":"storage","raw":"a, \"b\"\n","unit":"utf8","limit":16,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

8. "=row \"7\"\nnext" · ready
   Source: {"id":"=row \"7\"\nnext","context":"Legacy JavaScript form input uses HTML maxlength counting UTF-16 units.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"7\"\nnext","system":"legacy","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"legacy","similarity":0.8944684080019554},{"system":"storage","similarity":0.2990023938097291},{"system":"editorial","similarity":0.2585980802385985}]}
   Check: {"id":"=row \"7\"\nnext","system":"legacy","raw":"a, \"b\"\n","unit":"utf16","limit":12,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

9. "=row \"8\"\nnext" · ready
   Source: {"id":"=row \"8\"\nnext","context":"Editorial display label budget counts human readable grapheme characters.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"8\"\nnext","system":"editorial","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"editorial","similarity":0.8853952067421943},{"system":"storage","similarity":0.24715083096389362},{"system":"legacy","similarity":0.2125948941640408}]}
   Check: {"id":"=row \"8\"\nnext","system":"editorial","raw":"a, \"b\"\n","unit":"grapheme","limit":8,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

10. "=row \"9\"\nnext" · ready
   Source: {"id":"=row \"9\"\nnext","context":"Backend database column import, UTF-8 encoded storage byte budget.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"9\"\nnext","system":"storage","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"storage","similarity":0.953619426494828},{"system":"legacy","similarity":0.2826547602767078},{"system":"editorial","similarity":0.19556918350645763}]}
   Check: {"id":"=row \"9\"\nnext","system":"storage","raw":"a, \"b\"\n","unit":"utf8","limit":16,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

11. "=row \"10\"\nnext" · ready
   Source: {"id":"=row \"10\"\nnext","context":"Legacy JavaScript form input uses HTML maxlength counting UTF-16 units.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"10\"\nnext","system":"legacy","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"legacy","similarity":0.8944684080019554},{"system":"storage","similarity":0.2990023938097291},{"system":"editorial","similarity":0.2585980802385985}]}
   Check: {"id":"=row \"10\"\nnext","system":"legacy","raw":"a, \"b\"\n","unit":"utf16","limit":12,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

12. "=row \"11\"\nnext" · ready
   Source: {"id":"=row \"11\"\nnext","context":"Editorial display label budget counts human readable grapheme characters.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"11\"\nnext","system":"editorial","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"editorial","similarity":0.8853952067421943},{"system":"storage","similarity":0.24715083096389362},{"system":"legacy","similarity":0.2125948941640408}]}
   Check: {"id":"=row \"11\"\nnext","system":"editorial","raw":"a, \"b\"\n","unit":"grapheme","limit":8,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

13. "=row \"12\"\nnext" · ready
   Source: {"id":"=row \"12\"\nnext","context":"Backend database column import, UTF-8 encoded storage byte budget.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"12\"\nnext","system":"storage","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"storage","similarity":0.953619426494828},{"system":"legacy","similarity":0.2826547602767078},{"system":"editorial","similarity":0.19556918350645763}]}
   Check: {"id":"=row \"12\"\nnext","system":"storage","raw":"a, \"b\"\n","unit":"utf8","limit":16,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

14. "=row \"13\"\nnext" · ready
   Source: {"id":"=row \"13\"\nnext","context":"Legacy JavaScript form input uses HTML maxlength counting UTF-16 units.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"13\"\nnext","system":"legacy","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"legacy","similarity":0.8944684080019554},{"system":"storage","similarity":0.2990023938097291},{"system":"editorial","similarity":0.2585980802385985}]}
   Check: {"id":"=row \"13\"\nnext","system":"legacy","raw":"a, \"b\"\n","unit":"utf16","limit":12,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

15. "=row \"14\"\nnext" · ready
   Source: {"id":"=row \"14\"\nnext","context":"Editorial display label budget counts human readable grapheme characters.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"14\"\nnext","system":"editorial","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"editorial","similarity":0.8853952067421943},{"system":"storage","similarity":0.24715083096389362},{"system":"legacy","similarity":0.2125948941640408}]}
   Check: {"id":"=row \"14\"\nnext","system":"editorial","raw":"a, \"b\"\n","unit":"grapheme","limit":8,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

16. "=row \"15\"\nnext" · ready
   Source: {"id":"=row \"15\"\nnext","context":"Backend database column import, UTF-8 encoded storage byte budget.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"15\"\nnext","system":"storage","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"storage","similarity":0.953619426494828},{"system":"legacy","similarity":0.2826547602767078},{"system":"editorial","similarity":0.19556918350645763}]}
   Check: {"id":"=row \"15\"\nnext","system":"storage","raw":"a, \"b\"\n","unit":"utf8","limit":16,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

17. "=row \"16\"\nnext" · ready
   Source: {"id":"=row \"16\"\nnext","context":"Legacy JavaScript form input uses HTML maxlength counting UTF-16 units.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"16\"\nnext","system":"legacy","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"legacy","similarity":0.8944684080019554},{"system":"storage","similarity":0.2990023938097291},{"system":"editorial","similarity":0.2585980802385985}]}
   Check: {"id":"=row \"16\"\nnext","system":"legacy","raw":"a, \"b\"\n","unit":"utf16","limit":12,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

18. "=row \"17\"\nnext" · ready
   Source: {"id":"=row \"17\"\nnext","context":"Editorial display label budget counts human readable grapheme characters.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"17\"\nnext","system":"editorial","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"editorial","similarity":0.8853952067421943},{"system":"storage","similarity":0.24715083096389362},{"system":"legacy","similarity":0.2125948941640408}]}
   Check: {"id":"=row \"17\"\nnext","system":"editorial","raw":"a, \"b\"\n","unit":"grapheme","limit":8,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

19. "=row \"18\"\nnext" · ready
   Source: {"id":"=row \"18\"\nnext","context":"Backend database column import, UTF-8 encoded storage byte budget.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"18\"\nnext","system":"storage","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"storage","similarity":0.953619426494828},{"system":"legacy","similarity":0.2826547602767078},{"system":"editorial","similarity":0.19556918350645763}]}
   Check: {"id":"=row \"18\"\nnext","system":"storage","raw":"a, \"b\"\n","unit":"utf8","limit":16,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

20. "=row \"19\"\nnext" · ready
   Source: {"id":"=row \"19\"\nnext","context":"Legacy JavaScript form input uses HTML maxlength counting UTF-16 units.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"19\"\nnext","system":"legacy","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"legacy","similarity":0.8944684080019554},{"system":"storage","similarity":0.2990023938097291},{"system":"editorial","similarity":0.2585980802385985}]}
   Check: {"id":"=row \"19\"\nnext","system":"legacy","raw":"a, \"b\"\n","unit":"utf16","limit":12,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

21. "=row \"20\"\nnext" · ready
   Source: {"id":"=row \"20\"\nnext","context":"Editorial display label budget counts human readable grapheme characters.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"20\"\nnext","system":"editorial","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"editorial","similarity":0.8853952067421943},{"system":"storage","similarity":0.24715083096389362},{"system":"legacy","similarity":0.2125948941640408}]}
   Check: {"id":"=row \"20\"\nnext","system":"editorial","raw":"a, \"b\"\n","unit":"grapheme","limit":8,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

22. "=row \"21\"\nnext" · ready
   Source: {"id":"=row \"21\"\nnext","context":"Backend database column import, UTF-8 encoded storage byte budget.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"21\"\nnext","system":"storage","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"storage","similarity":0.953619426494828},{"system":"legacy","similarity":0.2826547602767078},{"system":"editorial","similarity":0.19556918350645763}]}
   Check: {"id":"=row \"21\"\nnext","system":"storage","raw":"a, \"b\"\n","unit":"utf8","limit":16,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

23. "=row \"22\"\nnext" · ready
   Source: {"id":"=row \"22\"\nnext","context":"Legacy JavaScript form input uses HTML maxlength counting UTF-16 units.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"22\"\nnext","system":"legacy","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"legacy","similarity":0.8944684080019554},{"system":"storage","similarity":0.2990023938097291},{"system":"editorial","similarity":0.2585980802385985}]}
   Check: {"id":"=row \"22\"\nnext","system":"legacy","raw":"a, \"b\"\n","unit":"utf16","limit":12,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

24. "=row \"23\"\nnext" · ready
   Source: {"id":"=row \"23\"\nnext","context":"Editorial display label budget counts human readable grapheme characters.","raw":"a, \"b\"\n"}
   Review: {"id":"=row \"23\"\nnext","system":"editorial","raw":"a, \"b\"\n","decision":"approve","note":"","evidence":[{"system":"editorial","similarity":0.8853952067421943},{"system":"storage","similarity":0.24715083096389362},{"system":"legacy","similarity":0.2125948941640408}]}
   Check: {"id":"=row \"23\"\nnext","system":"editorial","raw":"a, \"b\"\n","unit":"grapheme","limit":8,"length":7,"utf8":7,"utf16":7,"grapheme":7,"candidate":"a, \"b\"\n","removed":0,"baselinePass":true,"within":true,"reason":"","status":"ready"}

Computed counts: {"records":24,"ready":24,"held":0,"blocked":0,"compared":24,"baselineMismatch":0,"edited":0}

Baseline checks JavaScript string.length against the reviewed limit. Differences are accept/block disagreements, not AI accuracy or measured savings. Prefixes preserve whole grapheme clusters but may cut a word or change meaning. No ellipsis, normalization, upload or external write.