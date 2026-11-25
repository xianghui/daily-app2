# Synthetic workshop inventory sections

6 source rows retained; 3 ready details; 0 orphans. 2 groups differ from global forward-fill. Not AI accuracy.

## s1 / structural

Category section heading: Woodworking supplies

Original: {"group":"Wood shop","value":null}

Role: heading; reviewed group: =team,"A"
second line; result: unassigned; source: none; global baseline: unassigned

Reviewer: 

## w1 / ready

Individual purchase item: oak boards

Original: {"group":null,"value":30}

Role: item; reviewed group: ; result: =team,"A"
second line; source: s1; global baseline: Wood shop

Reviewer: =SUM(1,2)
Reviewed "labels", <script> & 🧾

## end / structural

End of section separator: stop the previous category

Original: {"group":null,"value":null}

Role: boundary; reviewed group: ; result: unassigned; source: none; global baseline: unassigned

Reviewer: 

## loose / ready

Individual purchase item: assorted spare screws

Original: {"group":null,"value":5}

Role: item; reviewed group: Unallocated; result: Unallocated; source: loose; global baseline: Wood shop

Reviewer: 

## s2 / structural

Category section heading: Sewing supplies

Original: {"group":"Textile room","value":null}

Role: heading; reviewed group: Textile room; result: unassigned; source: none; global baseline: unassigned

Reviewer: 

## w2 / ready

Individual purchase item: linen fabric

Original: {"group":null,"value":40}

Role: item; reviewed group: ; result: Textile room; source: s2; global baseline: Textile room

Reviewer: 
