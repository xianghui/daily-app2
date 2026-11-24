# Disposition Desk

DRY RUN ONLY — no endpoint requests.

1. "French receipt" · ready
   Source: {"id":"French receipt","context":"Customer payment receipt and invoice for billing.","raw":"{\"filename\":\"reçu novembre.pdf\",\"fallback\":\"receipt-november.pdf\"}"}
   Review: {"id":"French receipt","system":"billing","raw":"{\"filename\":\"reçu novembre.pdf\",\"fallback\":\"receipt-november.pdf\"}","decision":"approve","note":"","evidence":[{"system":"billing","similarity":0.729615250869249},{"system":"gallery","similarity":0.10708915419944787},{"system":"research","similarity":0.030158818893953096}]}
   Check: {"id":"French receipt","system":"billing","raw":"{\"filename\":\"reçu novembre.pdf\",\"fallback\":\"receipt-november.pdf\"}","filename":"reçu novembre.pdf","fallback":"receipt-november.pdf","header":"attachment; filename=\"receipt-november.pdf\"; filename*=UTF-8''re%C3%A7u%20novembre.pdf","selected":"attachment","utf8Bytes":18,"roundTrip":true,"extended":"re%C3%A7u%20novembre.pdf","baseline":"unsafe or lossy","disagreement":true,"reason":"Original Unicode name round-trips through filename*. ASCII fallback uses quoted-string escaping. Actual browser behavior must be integration-tested.","status":"ready"}

2. "Gallery preview" · ready
   Source: {"id":"Gallery preview","context":"Artwork photography preview in the online picture gallery.","raw":"{\"filename\":\"夕景.jpg\",\"fallback\":\"evening.jpg\"}"}
   Review: {"id":"Gallery preview","system":"gallery","raw":"{\"filename\":\"夕景.jpg\",\"fallback\":\"evening.jpg\"}","decision":"approve","note":"","evidence":[{"system":"gallery","similarity":0.7577129938519902},{"system":"research","similarity":0.2014694336340147},{"system":"billing","similarity":0.10811340088173658}]}
   Check: {"id":"Gallery preview","system":"gallery","raw":"{\"filename\":\"夕景.jpg\",\"fallback\":\"evening.jpg\"}","filename":"夕景.jpg","fallback":"evening.jpg","header":"inline; filename=\"evening.jpg\"; filename*=UTF-8''%E5%A4%95%E6%99%AF.jpg","selected":"inline","utf8Bytes":10,"roundTrip":true,"extended":"%E5%A4%95%E6%99%AF.jpg","baseline":"unsafe or lossy","disagreement":true,"reason":"Original Unicode name round-trips through filename*. ASCII fallback uses quoted-string escaping. Actual browser behavior must be integration-tested.","status":"ready"}

3. "Study draft" · ready
   Source: {"id":"Study draft","context":"Academic research paper and scientific publication.","raw":"{\"filename\":\"Study \\\"A\\\".pdf\",\"fallback\":\"Study \\\"A\\\".pdf\"}"}
   Review: {"id":"Study draft","system":"research","raw":"{\"filename\":\"Study \\\"A\\\".pdf\",\"fallback\":\"Study \\\"A\\\".pdf\"}","decision":"approve","note":"","evidence":[{"system":"research","similarity":0.6668594844973145},{"system":"gallery","similarity":0.1058064267840598},{"system":"billing","similarity":0.07873914624744838}]}
   Check: {"id":"Study draft","system":"research","raw":"{\"filename\":\"Study \\\"A\\\".pdf\",\"fallback\":\"Study \\\"A\\\".pdf\"}","filename":"Study \"A\".pdf","fallback":"Study \"A\".pdf","header":"attachment; filename=\"Study \\\"A\\\".pdf\"; filename*=UTF-8''Study%20%22A%22.pdf","selected":"attachment","utf8Bytes":13,"roundTrip":true,"extended":"Study%20%22A%22.pdf","baseline":"unsafe or lossy","disagreement":true,"reason":"Original Unicode name round-trips through filename*. ASCII fallback uses quoted-string escaping. Actual browser behavior must be integration-tested.","status":"ready"}

4. "Plain invoice" · ready
   Source: {"id":"Plain invoice","context":"Customer billing invoice and payment statement.","raw":"{\"filename\":\"invoice-42.pdf\",\"fallback\":\"invoice-42.pdf\"}"}
   Review: {"id":"Plain invoice","system":"billing","raw":"{\"filename\":\"invoice-42.pdf\",\"fallback\":\"invoice-42.pdf\"}","decision":"approve","note":"","evidence":[{"system":"billing","similarity":0.6614861653619092},{"system":"gallery","similarity":0.0889330560365835},{"system":"research","similarity":-0.0040160703367264315}]}
   Check: {"id":"Plain invoice","system":"billing","raw":"{\"filename\":\"invoice-42.pdf\",\"fallback\":\"invoice-42.pdf\"}","filename":"invoice-42.pdf","fallback":"invoice-42.pdf","header":"attachment; filename=\"invoice-42.pdf\"; filename*=UTF-8''invoice-42.pdf","selected":"attachment","utf8Bytes":14,"roundTrip":true,"extended":"invoice-42.pdf","baseline":"faithful ASCII","disagreement":false,"reason":"Original Unicode name round-trips through filename*. ASCII fallback uses quoted-string escaping. Actual browser behavior must be integration-tested.","status":"ready"}

Computed counts: {"records":4,"ready":4,"held":0,"blocked":0,"extended":2,"disagreements":3}

Baseline quotes original names without escaping or UTF-8 extended parameters. Differences are computed fixture outcomes, not accuracy, time saved or observed browser behavior.