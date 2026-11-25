-- Literal Loom: SQLite default LIKE semantics, ASCII case-insensitive.
-- Read-only fixtures; expected match columns are in the companion JSON.
-- Real applications should bind the exported pattern, never concatenate user SQL.
-- Request discount: contains
WITH data(id, value) AS (VALUES
('r1','Save 20% today'),
('r2','Save 200 today'),
('r3','20%'),
('r4','20X')
)
SELECT 'discount' AS request_id, id, value, value LIKE '%20\%%' ESCAPE '\' AS literal_match, value LIKE '%20%%' ESCAPE '\' AS unescaped_baseline
FROM data ORDER BY id;

-- Request sku: exact
WITH data(id, value) AS (VALUES
('r1','AB_1'),
('r2','ABX1'),
('r3','AB_12'),
('r4','ab_1')
)
SELECT 'sku' AS request_id, id, value, value LIKE 'AB\_1' ESCAPE '\' AS literal_match, value LIKE 'AB_1' ESCAPE '\' AS unescaped_baseline
FROM data ORDER BY id;

-- Request category: prefix
WITH data(id, value) AS (VALUES
('r1','A_tools'),
('r2','ABtools'),
('r3','xA_tools'),
('r4','a_parts')
)
SELECT 'category' AS request_id, id, value, value LIKE 'A\_%' ESCAPE '\' AS literal_match, value LIKE 'A_%' ESCAPE '\' AS unescaped_baseline
FROM data ORDER BY id;
