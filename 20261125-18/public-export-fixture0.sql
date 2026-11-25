-- Count Orchard: SQLite QA only, no database connection.
-- typed_value is an encoded identity token, not the original raw field.
-- Run in a scratch database. Each query returns actual_count and expected_count.

-- registrations / rows
WITH source(row_id, typed_value) AS (
VALUES ('r1', '["string","Design"]'),
('r2', NULL),
('r3', '["string","Design"]'),
('r4', '["string",""]'),
('r5', '["number",0]'),
('r6', '["boolean",false]')
) SELECT COUNT(*) AS actual_count, 6 AS expected_count FROM source;

-- filled-departments / present
WITH source(row_id, typed_value) AS (
VALUES ('r1', '["string","Design"]'),
('r2', NULL),
('r3', '["string","Design"]'),
('r4', '["string",""]'),
('r5', '["number",0]'),
('r6', '["boolean",false]')
) SELECT COUNT(typed_value) AS actual_count, 5 AS expected_count FROM source;

-- distinct-departments / distinct
WITH source(row_id, typed_value) AS (
VALUES ('r1', '["string","Design"]'),
('r2', NULL),
('r3', '["string","Design"]'),
('r4', '["string",""]'),
('r5', '["number",0]'),
('r6', '["boolean",false]')
) SELECT COUNT(DISTINCT typed_value) AS actual_count, 4 AS expected_count FROM source;
