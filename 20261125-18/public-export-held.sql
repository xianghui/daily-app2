-- Count Orchard: SQLite QA only, no database connection.
-- typed_value is an encoded identity token, not the original raw field.
-- Run in a scratch database. Each query returns actual_count and expected_count.

-- observed-answers / present
WITH source(row_id, typed_value) AS (
VALUES ('r1', '["number",0]'),
('r2', '["number",0]'),
('r3', '["boolean",false]'),
('r4', '["string","0"]'),
('r5', '["string",""]'),
('r6', NULL)
) SELECT COUNT(typed_value) AS actual_count, 5 AS expected_count FROM source;

-- empty-panel / rows
WITH source(row_id, typed_value) AS (
SELECT NULL, NULL WHERE 0
) SELECT COUNT(*) AS actual_count, 0 AS expected_count FROM source;
