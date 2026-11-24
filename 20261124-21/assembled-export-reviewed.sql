-- Null Lantern: read-only scalar QA. PostgreSQL / SQLite compatible subset.
-- CHECK permits TRUE or UNKNOWN; WHERE requires TRUE. No DDL or database writes.

SELECT 'Backorder' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (12 <= 4) AS p) AS fixture;

SELECT 'Recipient' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT ('=new "name",
O''Brien; SELECT 0; --' IS NOT NULL) AS p) AS fixture;

SELECT 'Permission' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT ((NULL IS NOT NULL) AND (NULL = TRUE)) AS p) AS fixture;
