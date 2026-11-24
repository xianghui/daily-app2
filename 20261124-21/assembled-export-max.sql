-- Null Lantern: read-only scalar QA. PostgreSQL / SQLite compatible subset.
-- CHECK permits TRUE or UNKNOWN; WHERE requires TRUE. No DDL or database writes.

SELECT '=row "0"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL >= 18) AS p) AS fixture;

SELECT '=row "1"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL <= 500) AS p) AS fixture;

SELECT '=row "2"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL IS NOT NULL) AS p) AS fixture;

SELECT '=row "3"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL >= 18) AS p) AS fixture;

SELECT '=row "4"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL <= 500) AS p) AS fixture;

SELECT '=row "5"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL IS NOT NULL) AS p) AS fixture;

SELECT '=row "6"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL >= 18) AS p) AS fixture;

SELECT '=row "7"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL <= 500) AS p) AS fixture;

SELECT '=row "8"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL IS NOT NULL) AS p) AS fixture;

SELECT '=row "9"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL >= 18) AS p) AS fixture;

SELECT '=row "10"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL <= 500) AS p) AS fixture;

SELECT '=row "11"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL IS NOT NULL) AS p) AS fixture;

SELECT '=row "12"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL >= 18) AS p) AS fixture;

SELECT '=row "13"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL <= 500) AS p) AS fixture;

SELECT '=row "14"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL IS NOT NULL) AS p) AS fixture;

SELECT '=row "15"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL >= 18) AS p) AS fixture;

SELECT '=row "16"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL <= 500) AS p) AS fixture;

SELECT '=row "17"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL IS NOT NULL) AS p) AS fixture;

SELECT '=row "18"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL >= 18) AS p) AS fixture;

SELECT '=row "19"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL <= 500) AS p) AS fixture;

SELECT '=row "20"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL IS NOT NULL) AS p) AS fixture;

SELECT '=row "21"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL >= 18) AS p) AS fixture;

SELECT '=row "22"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL <= 500) AS p) AS fixture;

SELECT '=row "23"
O''Brien; SELECT 2; --' AS case_id, p AS predicate_value, (p IS NOT FALSE) AS check_pass, (p IS TRUE) AS where_pass
FROM (SELECT (NULL IS NOT NULL) AS p) AS fixture;
