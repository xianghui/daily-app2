# Synthetic department expense sections

7 source rows retained; 3 ready details; 1 orphans. 1 groups differ from global forward-fill. Not AI accuracy.

## h1 / structural

Department section heading: Marketing expenses

Original: {"group":"Marketing","value":null}

Role: heading; reviewed group: Marketing; result: unassigned; source: none; global baseline: unassigned

Reviewer: 

## a / ready

Individual expense item: printed campaign posters

Original: {"group":null,"value":120}

Role: item; reviewed group: ; result: Marketing; source: h1; global baseline: Marketing

Reviewer: 

## b / ready

Individual expense item: social media advertising

Original: {"group":null,"value":80}

Role: item; reviewed group: ; result: Marketing; source: h1; global baseline: Marketing

Reviewer: 

## t / structural

Subtotal summary: total for this section

Original: {"group":null,"value":200}

Role: boundary; reviewed group: ; result: unassigned; source: none; global baseline: unassigned

Reviewer: 

## orphan / orphan

Individual expense item: uncategorized taxi receipt

Original: {"group":null,"value":15}

Role: item; reviewed group: ; result: unassigned; source: none; global baseline: Marketing

Reviewer: 

## h2 / structural

Department section heading: Engineering expenses

Original: {"group":"Engineering","value":null}

Role: heading; reviewed group: Engineering; result: unassigned; source: none; global baseline: unassigned

Reviewer: 

## c / ready

Individual expense item: test equipment rental

Original: {"group":null,"value":60}

Role: item; reviewed group: ; result: Engineering; source: h2; global baseline: Engineering

Reviewer: 
