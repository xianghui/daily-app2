-- Literal Loom: SQLite default LIKE semantics, ASCII case-insensitive.
-- Read-only fixtures; expected match columns are in the companion JSON.
-- Real applications should bind the exported pattern, never concatenate user SQL.
-- Request tag: contains
WITH data(id, value) AS (VALUES
('r1','file_draft_final'),
('r2','fileXdraft_final'),
('r3','_draft'),
('r4','draft')
)
SELECT 'tag' AS request_id, id, value, value LIKE '%\_draft%' ESCAPE '\' AS literal_match, value LIKE '%_draft%' ESCAPE '\' AS unescaped_baseline
FROM data ORDER BY id;

-- Request code: exact
WITH data(id, value) AS (VALUES
('r1','O''Brien%'),
('r2','O''BrienX'),
('r3','O''Brien%copy'),
('r4','o''brien%')
)
SELECT 'code' AS request_id, id, value, value LIKE 'O''Brien\%' ESCAPE '\' AS literal_match, value LIKE 'O''Brien%' ESCAPE '\' AS unescaped_baseline
FROM data ORDER BY id;
