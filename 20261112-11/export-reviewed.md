# Share Tapestry — reviewed settlement worksheet

Ready for manual verification. No payments sent.

Currency USD. All amounts below are integer cents. Gross per-expense reimbursements: 11; net transfers: 3. Deterministic greedy netting, NOT a guaranteed minimum transfer count.

## Proposed manual transfers

- [ ] p0 → p1: 1168 cents
- [ ] p0 → p3: 45 cents
- [ ] p2 → p3: 321 cents

## Participant balances

| Person | Paid cents | Share cents | Net cents |
|---|---|---|---|
| p0 Ada · pottery | 17 | 1230 | -1213 |
| p1 Ben · music | 2400 | 1232 | 1168 |
| p2 Cleo · photography | 905 | 1226 | -321 |
| p3 Dion · software | 1600 | 1234 | 366 |

## Every expense

| ID | Original note | Payer | Cents | Weights | Decision | Note |
|---|---|---|---|---|---|---|
| E0 | The ceramic pottery artist paid for the shared taxi | p0 | 17 | {"p0":1,"p1":2,"p2":0,"p3":3} | approve | =1+1, "review"<br>second line \| &lt;check&gt; |
| E1 | Our guitar musician covered dinner for the group | p1 | 2400 | {"p0":1,"p1":1,"p2":1,"p3":1} | approve |  |
| E2 | The portrait camera photographer paid for shared room supplies | p2 | 905 | {"p0":1,"p1":1,"p2":1,"p3":1} | approve |  |
| E3 | The computer software programmer covered our group admission | p3 | 1600 | {"p0":1,"p1":1,"p2":1,"p3":1} | approve |  |
