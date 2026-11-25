-- Peerframe Desk: read-only SQLite-compatible expected-result queries.
-- Compare returned totals with the companion JSON result arrays.
-- Request event-log: rows
WITH data(id, partition_key, sort_key, amount) AS (VALUES
('z','bench',0,7),
('a','bench',0,3),
('m','bench',1,-2)
)
SELECT 'event-log' AS request_id, id, partition_key, sort_key, amount,
 SUM(amount) OVER (PARTITION BY partition_key ORDER BY sort_key, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total
FROM data ORDER BY partition_key, sort_key, id;

-- Request weekly-summary: peers
WITH data(id, partition_key, sort_key, amount) AS (VALUES
('a','trial',1,8),
('b','trial',1,2),
('c','trial',2,3),
('d','trial',2,-1)
)
SELECT 'weekly-summary' AS request_id, id, partition_key, sort_key, amount,
 SUM(amount) OVER (PARTITION BY partition_key ORDER BY sort_key RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total
FROM data ORDER BY partition_key, sort_key, id;

-- Request tube-ledger: rows
WITH data(id, partition_key, sort_key, amount) AS (VALUES
('a','tube-A',1,11),
('b','tube-A',1,-4),
('c','tube-B',1,6)
)
SELECT 'tube-ledger' AS request_id, id, partition_key, sort_key, amount,
 SUM(amount) OVER (PARTITION BY partition_key ORDER BY sort_key, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total
FROM data ORDER BY partition_key, sort_key, id;
