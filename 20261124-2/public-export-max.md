# Query Quay

1. "=row \"0\"\nnext" · ready
   Source: {"id":"=row \"0\"\nnext","context":"Public marketing landing pages: discard only approved campaign attribution parameters; query field order is irrelevant, repeated-value order matters.","raw":"https://example.test/item/0?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"0\"\nnext","system":"campaign","raw":"https://example.test/item/0?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"campaign","similarity":0.9999994319368241},{"system":"catalog","similarity":0.4072215011651865},{"system":"signed","similarity":0.21111891612466605}]}
   Check: {"id":"=row \"0\"\nnext","system":"campaign","raw":"https://example.test/item/0?z=2&a=1&utm_source=test","canonical":"https://example.test/item/0?a=1&z=2","baseline":"https://example.test/item/0","changed":true,"removed":[["utm_source","test"]],"pairs":[["a","1"],["z","2"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

2. "=row \"1\"\nnext" · ready
   Source: {"id":"=row \"1\"\nnext","context":"Product catalog filters and search: preserve all query values and repeated filter order; query field names may be sorted.","raw":"https://example.test/item/1?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"1\"\nnext","system":"catalog","raw":"https://example.test/item/1?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"catalog","similarity":0.9999996425450381},{"system":"campaign","similarity":0.4072215011651865},{"system":"signed","similarity":0.06621622215093728}]}
   Check: {"id":"=row \"1\"\nnext","system":"catalog","raw":"https://example.test/item/1?z=2&a=1&utm_source=test","canonical":"https://example.test/item/1?a=1&utm_source=test&z=2","baseline":"https://example.test/item/1","changed":true,"removed":[],"pairs":[["a","1"],["utm_source","test"],["z","2"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

3. "=row \"2\"\nnext" · ready
   Source: {"id":"=row \"2\"\nnext","context":"Cryptographically signed download links: preserve the exact URL bytes, query order and percent encoding; changing any part can invalidate the signature.","raw":"https://example.test/item/2?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"2\"\nnext","system":"signed","raw":"https://example.test/item/2?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"signed","similarity":1.0000001464823272},{"system":"campaign","similarity":0.21111891612466605},{"system":"catalog","similarity":0.06621622215093728}]}
   Check: {"id":"=row \"2\"\nnext","system":"signed","raw":"https://example.test/item/2?z=2&a=1&utm_source=test","canonical":"https://example.test/item/2?z=2&a=1&utm_source=test","baseline":"https://example.test/item/2","changed":false,"removed":[],"pairs":[["z","2"],["a","1"],["utm_source","test"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

4. "=row \"3\"\nnext" · ready
   Source: {"id":"=row \"3\"\nnext","context":"Public marketing landing pages: discard only approved campaign attribution parameters; query field order is irrelevant, repeated-value order matters.","raw":"https://example.test/item/3?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"3\"\nnext","system":"campaign","raw":"https://example.test/item/3?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"campaign","similarity":0.9999994319368241},{"system":"catalog","similarity":0.4072215011651865},{"system":"signed","similarity":0.21111891612466605}]}
   Check: {"id":"=row \"3\"\nnext","system":"campaign","raw":"https://example.test/item/3?z=2&a=1&utm_source=test","canonical":"https://example.test/item/3?a=1&z=2","baseline":"https://example.test/item/3","changed":true,"removed":[["utm_source","test"]],"pairs":[["a","1"],["z","2"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

5. "=row \"4\"\nnext" · ready
   Source: {"id":"=row \"4\"\nnext","context":"Product catalog filters and search: preserve all query values and repeated filter order; query field names may be sorted.","raw":"https://example.test/item/4?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"4\"\nnext","system":"catalog","raw":"https://example.test/item/4?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"catalog","similarity":0.9999996425450381},{"system":"campaign","similarity":0.4072215011651865},{"system":"signed","similarity":0.06621622215093728}]}
   Check: {"id":"=row \"4\"\nnext","system":"catalog","raw":"https://example.test/item/4?z=2&a=1&utm_source=test","canonical":"https://example.test/item/4?a=1&utm_source=test&z=2","baseline":"https://example.test/item/4","changed":true,"removed":[],"pairs":[["a","1"],["utm_source","test"],["z","2"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

6. "=row \"5\"\nnext" · ready
   Source: {"id":"=row \"5\"\nnext","context":"Cryptographically signed download links: preserve the exact URL bytes, query order and percent encoding; changing any part can invalidate the signature.","raw":"https://example.test/item/5?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"5\"\nnext","system":"signed","raw":"https://example.test/item/5?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"signed","similarity":1.0000001464823272},{"system":"campaign","similarity":0.21111891612466605},{"system":"catalog","similarity":0.06621622215093728}]}
   Check: {"id":"=row \"5\"\nnext","system":"signed","raw":"https://example.test/item/5?z=2&a=1&utm_source=test","canonical":"https://example.test/item/5?z=2&a=1&utm_source=test","baseline":"https://example.test/item/5","changed":false,"removed":[],"pairs":[["z","2"],["a","1"],["utm_source","test"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

7. "=row \"6\"\nnext" · ready
   Source: {"id":"=row \"6\"\nnext","context":"Public marketing landing pages: discard only approved campaign attribution parameters; query field order is irrelevant, repeated-value order matters.","raw":"https://example.test/item/6?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"6\"\nnext","system":"campaign","raw":"https://example.test/item/6?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"campaign","similarity":0.9999994319368241},{"system":"catalog","similarity":0.4072215011651865},{"system":"signed","similarity":0.21111891612466605}]}
   Check: {"id":"=row \"6\"\nnext","system":"campaign","raw":"https://example.test/item/6?z=2&a=1&utm_source=test","canonical":"https://example.test/item/6?a=1&z=2","baseline":"https://example.test/item/6","changed":true,"removed":[["utm_source","test"]],"pairs":[["a","1"],["z","2"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

8. "=row \"7\"\nnext" · ready
   Source: {"id":"=row \"7\"\nnext","context":"Product catalog filters and search: preserve all query values and repeated filter order; query field names may be sorted.","raw":"https://example.test/item/7?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"7\"\nnext","system":"catalog","raw":"https://example.test/item/7?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"catalog","similarity":0.9999996425450381},{"system":"campaign","similarity":0.4072215011651865},{"system":"signed","similarity":0.06621622215093728}]}
   Check: {"id":"=row \"7\"\nnext","system":"catalog","raw":"https://example.test/item/7?z=2&a=1&utm_source=test","canonical":"https://example.test/item/7?a=1&utm_source=test&z=2","baseline":"https://example.test/item/7","changed":true,"removed":[],"pairs":[["a","1"],["utm_source","test"],["z","2"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

9. "=row \"8\"\nnext" · ready
   Source: {"id":"=row \"8\"\nnext","context":"Cryptographically signed download links: preserve the exact URL bytes, query order and percent encoding; changing any part can invalidate the signature.","raw":"https://example.test/item/8?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"8\"\nnext","system":"signed","raw":"https://example.test/item/8?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"signed","similarity":1.0000001464823272},{"system":"campaign","similarity":0.21111891612466605},{"system":"catalog","similarity":0.06621622215093728}]}
   Check: {"id":"=row \"8\"\nnext","system":"signed","raw":"https://example.test/item/8?z=2&a=1&utm_source=test","canonical":"https://example.test/item/8?z=2&a=1&utm_source=test","baseline":"https://example.test/item/8","changed":false,"removed":[],"pairs":[["z","2"],["a","1"],["utm_source","test"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

10. "=row \"9\"\nnext" · ready
   Source: {"id":"=row \"9\"\nnext","context":"Public marketing landing pages: discard only approved campaign attribution parameters; query field order is irrelevant, repeated-value order matters.","raw":"https://example.test/item/9?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"9\"\nnext","system":"campaign","raw":"https://example.test/item/9?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"campaign","similarity":0.9999994319368241},{"system":"catalog","similarity":0.4072215011651865},{"system":"signed","similarity":0.21111891612466605}]}
   Check: {"id":"=row \"9\"\nnext","system":"campaign","raw":"https://example.test/item/9?z=2&a=1&utm_source=test","canonical":"https://example.test/item/9?a=1&z=2","baseline":"https://example.test/item/9","changed":true,"removed":[["utm_source","test"]],"pairs":[["a","1"],["z","2"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

11. "=row \"10\"\nnext" · ready
   Source: {"id":"=row \"10\"\nnext","context":"Product catalog filters and search: preserve all query values and repeated filter order; query field names may be sorted.","raw":"https://example.test/item/10?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"10\"\nnext","system":"catalog","raw":"https://example.test/item/10?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"catalog","similarity":0.9999996425450381},{"system":"campaign","similarity":0.4072215011651865},{"system":"signed","similarity":0.06621622215093728}]}
   Check: {"id":"=row \"10\"\nnext","system":"catalog","raw":"https://example.test/item/10?z=2&a=1&utm_source=test","canonical":"https://example.test/item/10?a=1&utm_source=test&z=2","baseline":"https://example.test/item/10","changed":true,"removed":[],"pairs":[["a","1"],["utm_source","test"],["z","2"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

12. "=row \"11\"\nnext" · ready
   Source: {"id":"=row \"11\"\nnext","context":"Cryptographically signed download links: preserve the exact URL bytes, query order and percent encoding; changing any part can invalidate the signature.","raw":"https://example.test/item/11?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"11\"\nnext","system":"signed","raw":"https://example.test/item/11?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"signed","similarity":1.0000001464823272},{"system":"campaign","similarity":0.21111891612466605},{"system":"catalog","similarity":0.06621622215093728}]}
   Check: {"id":"=row \"11\"\nnext","system":"signed","raw":"https://example.test/item/11?z=2&a=1&utm_source=test","canonical":"https://example.test/item/11?z=2&a=1&utm_source=test","baseline":"https://example.test/item/11","changed":false,"removed":[],"pairs":[["z","2"],["a","1"],["utm_source","test"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

13. "=row \"12\"\nnext" · ready
   Source: {"id":"=row \"12\"\nnext","context":"Public marketing landing pages: discard only approved campaign attribution parameters; query field order is irrelevant, repeated-value order matters.","raw":"https://example.test/item/12?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"12\"\nnext","system":"campaign","raw":"https://example.test/item/12?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"campaign","similarity":0.9999994319368241},{"system":"catalog","similarity":0.4072215011651865},{"system":"signed","similarity":0.21111891612466605}]}
   Check: {"id":"=row \"12\"\nnext","system":"campaign","raw":"https://example.test/item/12?z=2&a=1&utm_source=test","canonical":"https://example.test/item/12?a=1&z=2","baseline":"https://example.test/item/12","changed":true,"removed":[["utm_source","test"]],"pairs":[["a","1"],["z","2"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

14. "=row \"13\"\nnext" · ready
   Source: {"id":"=row \"13\"\nnext","context":"Product catalog filters and search: preserve all query values and repeated filter order; query field names may be sorted.","raw":"https://example.test/item/13?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"13\"\nnext","system":"catalog","raw":"https://example.test/item/13?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"catalog","similarity":0.9999996425450381},{"system":"campaign","similarity":0.4072215011651865},{"system":"signed","similarity":0.06621622215093728}]}
   Check: {"id":"=row \"13\"\nnext","system":"catalog","raw":"https://example.test/item/13?z=2&a=1&utm_source=test","canonical":"https://example.test/item/13?a=1&utm_source=test&z=2","baseline":"https://example.test/item/13","changed":true,"removed":[],"pairs":[["a","1"],["utm_source","test"],["z","2"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

15. "=row \"14\"\nnext" · ready
   Source: {"id":"=row \"14\"\nnext","context":"Cryptographically signed download links: preserve the exact URL bytes, query order and percent encoding; changing any part can invalidate the signature.","raw":"https://example.test/item/14?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"14\"\nnext","system":"signed","raw":"https://example.test/item/14?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"signed","similarity":1.0000001464823272},{"system":"campaign","similarity":0.21111891612466605},{"system":"catalog","similarity":0.06621622215093728}]}
   Check: {"id":"=row \"14\"\nnext","system":"signed","raw":"https://example.test/item/14?z=2&a=1&utm_source=test","canonical":"https://example.test/item/14?z=2&a=1&utm_source=test","baseline":"https://example.test/item/14","changed":false,"removed":[],"pairs":[["z","2"],["a","1"],["utm_source","test"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

16. "=row \"15\"\nnext" · ready
   Source: {"id":"=row \"15\"\nnext","context":"Public marketing landing pages: discard only approved campaign attribution parameters; query field order is irrelevant, repeated-value order matters.","raw":"https://example.test/item/15?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"15\"\nnext","system":"campaign","raw":"https://example.test/item/15?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"campaign","similarity":0.9999994319368241},{"system":"catalog","similarity":0.4072215011651865},{"system":"signed","similarity":0.21111891612466605}]}
   Check: {"id":"=row \"15\"\nnext","system":"campaign","raw":"https://example.test/item/15?z=2&a=1&utm_source=test","canonical":"https://example.test/item/15?a=1&z=2","baseline":"https://example.test/item/15","changed":true,"removed":[["utm_source","test"]],"pairs":[["a","1"],["z","2"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

17. "=row \"16\"\nnext" · ready
   Source: {"id":"=row \"16\"\nnext","context":"Product catalog filters and search: preserve all query values and repeated filter order; query field names may be sorted.","raw":"https://example.test/item/16?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"16\"\nnext","system":"catalog","raw":"https://example.test/item/16?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"catalog","similarity":0.9999996425450381},{"system":"campaign","similarity":0.4072215011651865},{"system":"signed","similarity":0.06621622215093728}]}
   Check: {"id":"=row \"16\"\nnext","system":"catalog","raw":"https://example.test/item/16?z=2&a=1&utm_source=test","canonical":"https://example.test/item/16?a=1&utm_source=test&z=2","baseline":"https://example.test/item/16","changed":true,"removed":[],"pairs":[["a","1"],["utm_source","test"],["z","2"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

18. "=row \"17\"\nnext" · ready
   Source: {"id":"=row \"17\"\nnext","context":"Cryptographically signed download links: preserve the exact URL bytes, query order and percent encoding; changing any part can invalidate the signature.","raw":"https://example.test/item/17?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"17\"\nnext","system":"signed","raw":"https://example.test/item/17?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"signed","similarity":1.0000001464823272},{"system":"campaign","similarity":0.21111891612466605},{"system":"catalog","similarity":0.06621622215093728}]}
   Check: {"id":"=row \"17\"\nnext","system":"signed","raw":"https://example.test/item/17?z=2&a=1&utm_source=test","canonical":"https://example.test/item/17?z=2&a=1&utm_source=test","baseline":"https://example.test/item/17","changed":false,"removed":[],"pairs":[["z","2"],["a","1"],["utm_source","test"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

19. "=row \"18\"\nnext" · ready
   Source: {"id":"=row \"18\"\nnext","context":"Public marketing landing pages: discard only approved campaign attribution parameters; query field order is irrelevant, repeated-value order matters.","raw":"https://example.test/item/18?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"18\"\nnext","system":"campaign","raw":"https://example.test/item/18?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"campaign","similarity":0.9999994319368241},{"system":"catalog","similarity":0.4072215011651865},{"system":"signed","similarity":0.21111891612466605}]}
   Check: {"id":"=row \"18\"\nnext","system":"campaign","raw":"https://example.test/item/18?z=2&a=1&utm_source=test","canonical":"https://example.test/item/18?a=1&z=2","baseline":"https://example.test/item/18","changed":true,"removed":[["utm_source","test"]],"pairs":[["a","1"],["z","2"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

20. "=row \"19\"\nnext" · ready
   Source: {"id":"=row \"19\"\nnext","context":"Product catalog filters and search: preserve all query values and repeated filter order; query field names may be sorted.","raw":"https://example.test/item/19?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"19\"\nnext","system":"catalog","raw":"https://example.test/item/19?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"catalog","similarity":0.9999996425450381},{"system":"campaign","similarity":0.4072215011651865},{"system":"signed","similarity":0.06621622215093728}]}
   Check: {"id":"=row \"19\"\nnext","system":"catalog","raw":"https://example.test/item/19?z=2&a=1&utm_source=test","canonical":"https://example.test/item/19?a=1&utm_source=test&z=2","baseline":"https://example.test/item/19","changed":true,"removed":[],"pairs":[["a","1"],["utm_source","test"],["z","2"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

21. "=row \"20\"\nnext" · ready
   Source: {"id":"=row \"20\"\nnext","context":"Cryptographically signed download links: preserve the exact URL bytes, query order and percent encoding; changing any part can invalidate the signature.","raw":"https://example.test/item/20?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"20\"\nnext","system":"signed","raw":"https://example.test/item/20?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"signed","similarity":1.0000001464823272},{"system":"campaign","similarity":0.21111891612466605},{"system":"catalog","similarity":0.06621622215093728}]}
   Check: {"id":"=row \"20\"\nnext","system":"signed","raw":"https://example.test/item/20?z=2&a=1&utm_source=test","canonical":"https://example.test/item/20?z=2&a=1&utm_source=test","baseline":"https://example.test/item/20","changed":false,"removed":[],"pairs":[["z","2"],["a","1"],["utm_source","test"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

22. "=row \"21\"\nnext" · ready
   Source: {"id":"=row \"21\"\nnext","context":"Public marketing landing pages: discard only approved campaign attribution parameters; query field order is irrelevant, repeated-value order matters.","raw":"https://example.test/item/21?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"21\"\nnext","system":"campaign","raw":"https://example.test/item/21?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"campaign","similarity":0.9999994319368241},{"system":"catalog","similarity":0.4072215011651865},{"system":"signed","similarity":0.21111891612466605}]}
   Check: {"id":"=row \"21\"\nnext","system":"campaign","raw":"https://example.test/item/21?z=2&a=1&utm_source=test","canonical":"https://example.test/item/21?a=1&z=2","baseline":"https://example.test/item/21","changed":true,"removed":[["utm_source","test"]],"pairs":[["a","1"],["z","2"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

23. "=row \"22\"\nnext" · ready
   Source: {"id":"=row \"22\"\nnext","context":"Product catalog filters and search: preserve all query values and repeated filter order; query field names may be sorted.","raw":"https://example.test/item/22?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"22\"\nnext","system":"catalog","raw":"https://example.test/item/22?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"catalog","similarity":0.9999996425450381},{"system":"campaign","similarity":0.4072215011651865},{"system":"signed","similarity":0.06621622215093728}]}
   Check: {"id":"=row \"22\"\nnext","system":"catalog","raw":"https://example.test/item/22?z=2&a=1&utm_source=test","canonical":"https://example.test/item/22?a=1&utm_source=test&z=2","baseline":"https://example.test/item/22","changed":true,"removed":[],"pairs":[["a","1"],["utm_source","test"],["z","2"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

24. "=row \"23\"\nnext" · ready
   Source: {"id":"=row \"23\"\nnext","context":"Cryptographically signed download links: preserve the exact URL bytes, query order and percent encoding; changing any part can invalidate the signature.","raw":"https://example.test/item/23?z=2&a=1&utm_source=test"}
   Review: {"id":"=row \"23\"\nnext","system":"signed","raw":"https://example.test/item/23?z=2&a=1&utm_source=test","decision":"approve","note":"","evidence":[{"system":"signed","similarity":1.0000001464823272},{"system":"campaign","similarity":0.21111891612466605},{"system":"catalog","similarity":0.06621622215093728}]}
   Check: {"id":"=row \"23\"\nnext","system":"signed","raw":"https://example.test/item/23?z=2&a=1&utm_source=test","canonical":"https://example.test/item/23?z=2&a=1&utm_source=test","baseline":"https://example.test/item/23","changed":false,"removed":[],"pairs":[["z","2"],["a","1"],["utm_source","test"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

Computed counts: {"records":24,"ready":24,"held":0,"blocked":0,"collisionRows":0,"exactChecks":24,"changed":16,"lostDistinctions":0}

Baseline strips the entire query. Lost distinctions count pairs with equal baseline but different reviewed canonical URLs. Similarity is not confidence; canonical equality is not proof of server equivalence. No URLs fetched or site changed.