# Synthetic archive search handoff

3 approved / 0 held. 3 sample decisions differ from the same-mode unescaped LIKE shortcut. Snapshot comparison, not AI accuracy or a performance claim.

## path — approve

Source: The field must begin with the search term as its opening prefix, with any extra text only after it.

Reviewer: =SUM(1,2)
Reviewed "term", <script> & 🍞

Term: "=new_%\n\"🍞"

Mode: prefix / pattern: "=new\\_\\%\n\"🍞%"

- r1: "C:\\docs" → NO MATCH (unescaped: false)
- r2: "C:docs" → NO MATCH (unescaped: false)
- r3: "xC:\\docs" → NO MATCH (unescaped: false)
- r4: "c:\\" → NO MATCH (unescaped: false)

## tag — approve

Source: Look for the search term as a substring anywhere within the title, including when surrounded by other words.

Reviewer: 

Term: "_draft"

Mode: contains / pattern: "%\\_draft%"

- r1: "file_draft_final" → MATCH (unescaped: true)
- r2: "fileXdraft_final" → NO MATCH (unescaped: true)
- r3: "_draft" → MATCH (unescaped: true)
- r4: "draft" → NO MATCH (unescaped: false)

## code — approve

Source: Whole-field equality: accept only fields exactly equal to the full search term, without a prefix or suffix.

Reviewer: 

Term: "O'Brien%"

Mode: exact / pattern: "O'Brien\\%"

- r1: "O'Brien%" → MATCH (unescaped: true)
- r2: "O'BrienX" → NO MATCH (unescaped: true)
- r3: "O'Brien%copy" → NO MATCH (unescaped: true)
- r4: "o'brien%" → MATCH (unescaped: true)
