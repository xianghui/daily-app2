-- Null Lantern: read-only scalar QA. PostgreSQL / SQLite compatible subset.
-- CHECK permits TRUE or UNKNOWN; WHERE requires TRUE. No DDL or database writes.

SELECT 'Unknown birthday' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL >= 18) AS p) AS fixture;

SELECT 'Missing balance' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL <= 500) AS p) AS fixture;

SELECT 'Absent address' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL IS NOT NULL) AS p) AS fixture;
