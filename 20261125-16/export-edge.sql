-- Multiplicity Desk: standalone SQLite 3.25+ QA queries; exact BINARY text equality.
-- No writes, databases or content uploads are performed by the app.
-- case-0: combine
WITH data(side,idx,id,value) AS (SELECT NULL,NULL,NULL,NULL WHERE 0),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'case-0' request_id, n.side,n.id,n.value FROM numbered n WHERE 1 ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;

-- case-1: combine
WITH data(side,idx,id,value) AS (VALUES ('left',0,'l','')),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'case-1' request_id, n.side,n.id,n.value FROM numbered n WHERE 1 ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;

-- case-2: combine
WITH data(side,idx,id,value) AS (VALUES ('right',0,'r','')),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'case-2' request_id, n.side,n.id,n.value FROM numbered n WHERE 1 ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;

-- case-3: combine
WITH data(side,idx,id,value) AS (VALUES ('left',0,'a','é'),
('left',1,'b','é'),
('left',2,'c','A'),
('left',3,'d','a'),
('left',4,'e','O''Brien
🍞'),
('right',0,'r','é')),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'case-3' request_id, n.side,n.id,n.value FROM numbered n WHERE 1 ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;

-- case-4: overlap
WITH data(side,idx,id,value) AS (SELECT NULL,NULL,NULL,NULL WHERE 0),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'case-4' request_id, n.side,n.id,n.value FROM numbered n WHERE n.side='left' AND EXISTS (SELECT 1 FROM numbered r WHERE r.side='right' AND r.value=n.value COLLATE BINARY AND r.occurrence=n.occurrence) ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;

-- case-5: overlap
WITH data(side,idx,id,value) AS (VALUES ('left',0,'l','')),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'case-5' request_id, n.side,n.id,n.value FROM numbered n WHERE n.side='left' AND EXISTS (SELECT 1 FROM numbered r WHERE r.side='right' AND r.value=n.value COLLATE BINARY AND r.occurrence=n.occurrence) ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;

-- case-6: overlap
WITH data(side,idx,id,value) AS (VALUES ('right',0,'r','')),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'case-6' request_id, n.side,n.id,n.value FROM numbered n WHERE n.side='left' AND EXISTS (SELECT 1 FROM numbered r WHERE r.side='right' AND r.value=n.value COLLATE BINARY AND r.occurrence=n.occurrence) ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;

-- case-7: overlap
WITH data(side,idx,id,value) AS (VALUES ('left',0,'a','é'),
('left',1,'b','é'),
('left',2,'c','A'),
('left',3,'d','a'),
('left',4,'e','O''Brien
🍞'),
('right',0,'r','é')),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'case-7' request_id, n.side,n.id,n.value FROM numbered n WHERE n.side='left' AND EXISTS (SELECT 1 FROM numbered r WHERE r.side='right' AND r.value=n.value COLLATE BINARY AND r.occurrence=n.occurrence) ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;

-- case-8: subtract
WITH data(side,idx,id,value) AS (SELECT NULL,NULL,NULL,NULL WHERE 0),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'case-8' request_id, n.side,n.id,n.value FROM numbered n WHERE n.side='left' AND NOT EXISTS (SELECT 1 FROM numbered r WHERE r.side='right' AND r.value=n.value COLLATE BINARY AND r.occurrence=n.occurrence) ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;

-- case-9: subtract
WITH data(side,idx,id,value) AS (VALUES ('left',0,'l','')),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'case-9' request_id, n.side,n.id,n.value FROM numbered n WHERE n.side='left' AND NOT EXISTS (SELECT 1 FROM numbered r WHERE r.side='right' AND r.value=n.value COLLATE BINARY AND r.occurrence=n.occurrence) ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;

-- case-10: subtract
WITH data(side,idx,id,value) AS (VALUES ('right',0,'r','')),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'case-10' request_id, n.side,n.id,n.value FROM numbered n WHERE n.side='left' AND NOT EXISTS (SELECT 1 FROM numbered r WHERE r.side='right' AND r.value=n.value COLLATE BINARY AND r.occurrence=n.occurrence) ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;

-- case-11: subtract
WITH data(side,idx,id,value) AS (VALUES ('left',0,'a','é'),
('left',1,'b','é'),
('left',2,'c','A'),
('left',3,'d','a'),
('left',4,'e','O''Brien
🍞'),
('right',0,'r','é')),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'case-11' request_id, n.side,n.id,n.value FROM numbered n WHERE n.side='left' AND NOT EXISTS (SELECT 1 FROM numbered r WHERE r.side='right' AND r.value=n.value COLLATE BINARY AND r.occurrence=n.occurrence) ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;
