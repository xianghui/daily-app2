-- Multiplicity Desk: standalone SQLite 3.25+ QA queries; exact BINARY text equality.
-- No writes, databases or content uploads are performed by the app.
-- unfulfilled: subtract
WITH data(side,idx,id,value) AS (VALUES ('left',0,'r1','Blue mug'),
('left',1,'r2','Blue mug'),
('left',2,'r3','Blue mug'),
('left',3,'r4','Tea tin'),
('left',4,'r5','Spoon'),
('right',0,'r1','Blue mug'),
('right',1,'r2','Tea tin'),
('right',2,'r3','Tea tin')),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'unfulfilled' request_id, n.side,n.id,n.value FROM numbered n WHERE n.side='left' AND NOT EXISTS (SELECT 1 FROM numbered r WHERE r.side='right' AND r.value=n.value COLLATE BINARY AND r.occurrence=n.occurrence) ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;

-- agreed: overlap
WITH data(side,idx,id,value) AS (VALUES ('left',0,'r1','Blue mug'),
('left',1,'r2','Blue mug'),
('left',2,'r3','Tea tin'),
('left',3,'r4','Tea tin'),
('right',0,'r1','Blue mug'),
('right',1,'r2','Blue mug'),
('right',2,'r3','Blue mug'),
('right',3,'r4','Tea tin')),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'agreed' request_id, n.side,n.id,n.value FROM numbered n WHERE n.side='left' AND EXISTS (SELECT 1 FROM numbered r WHERE r.side='right' AND r.value=n.value COLLATE BINARY AND r.occurrence=n.occurrence) ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;

-- all-scans: combine
WITH data(side,idx,id,value) AS (VALUES ('left',0,'r1','Spoon'),
('left',1,'r2','Spoon'),
('right',0,'r1','Spoon'),
('right',1,'r2','Tea tin')),
numbered AS (SELECT *,row_number() OVER (PARTITION BY side,value COLLATE BINARY ORDER BY idx) occurrence FROM data)
SELECT 'all-scans' request_id, n.side,n.id,n.value FROM numbered n WHERE 1 ORDER BY CASE n.side WHEN 'left' THEN 0 ELSE 1 END,n.idx;
