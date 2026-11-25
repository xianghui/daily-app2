-- Multiplicity Desk: standalone SQLite 3.25+ QA queries; exact BINARY text equality.
-- No writes, databases or content uploads are performed by the app.
-- merged-queue: combine
WITH data(side,idx,id,value) AS (VALUES ('left',0,'r1','Map'),
('left',1,'r2','Map'),
('left',2,'r3','Guide'),
('right',0,'r1','Map'),
('right',1,'r2','Guide'),
('right',2,'r3','Guide')),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'merged-queue' request_id, n.side,n.id,n.value FROM numbered n WHERE 1 ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;

-- not-printed: subtract
WITH data(side,idx,id,value) AS (VALUES ('left',0,'r1','Map'),
('left',1,'r2','Map'),
('left',2,'r3','Guide'),
('left',3,'r4','Guide'),
('left',4,'r5','Guide'),
('right',0,'r1','Map'),
('right',1,'r2','Guide')),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'not-printed' request_id, n.side,n.id,n.value FROM numbered n WHERE n.side='left' AND NOT EXISTS (SELECT 1 FROM numbered r WHERE r.side='right' AND r.value=n.value COLLATE BINARY AND r.occurrence=n.occurrence) ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;

-- agreed-copies: overlap
WITH data(side,idx,id,value) AS (VALUES ('left',0,'r1','Map'),
('left',1,'r2','Map'),
('left',2,'r3','Guide'),
('right',0,'r1','Map'),
('right',1,'r2','Guide'),
('right',2,'r3','Guide')),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'agreed-copies' request_id, n.side,n.id,n.value FROM numbered n WHERE n.side='left' AND EXISTS (SELECT 1 FROM numbered r WHERE r.side='right' AND r.value=n.value COLLATE BINARY AND r.occurrence=n.occurrence) ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;
