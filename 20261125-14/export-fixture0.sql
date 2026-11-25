-- Peerframe Desk: read-only SQLite-compatible expected-result queries.
-- Compare returned totals with the companion JSON result arrays.
-- Request daily-close: peers
WITH data(id, partition_key, sort_key, amount) AS (VALUES
('a','shop',1,10),
('b','shop',1,25),
('c','shop',2,-5),
('d','shop',3,20)
)
SELECT 'daily-close' AS request_id, id, partition_key, sort_key, amount,
 SUM(amount) OVER (PARTITION BY partition_key ORDER BY sort_key RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total
FROM data ORDER BY partition_key, sort_key, id;

-- Request cashbook: rows
WITH data(id, partition_key, sort_key, amount) AS (VALUES
('b','cash',1,-3),
('a','cash',1,12),
('c','cash',2,4)
)
SELECT 'cashbook' AS request_id, id, partition_key, sort_key, amount,
 SUM(amount) OVER (PARTITION BY partition_key ORDER BY sort_key, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total
FROM data ORDER BY partition_key, sort_key, id;

-- Request branch-close: peers
WITH data(id, partition_key, sort_key, amount) AS (VALUES
('a','north',1,5),
('b','north',1,7),
('c','south',1,90),
('d','south',2,-10)
)
SELECT 'branch-close' AS request_id, id, partition_key, sort_key, amount,
 SUM(amount) OVER (PARTITION BY partition_key ORDER BY sort_key RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total
FROM data ORDER BY partition_key, sort_key, id;
