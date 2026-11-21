# Service desk planning ranges

Finite-sample split-conformal ranks require independently fixed predictions, predetermined groups and exchangeable errors. Tiny observed evaluation counts are descriptive, not accuracy estimates. Review cannot establish those assumptions. No individual coverage guarantee, service promise or automatic scheduling.

Alpha: 0.2

## Calibration
- Access: n=4, k=4, radius=4 min; errors 1, 2, 3, 4; sources C00, C01, C02, C03
- Billing: n=4, k=4, radius=8 min; errors 3, 4, 6, 8; sources C10, C11, C12, C13

## Evaluation and plan
- E0 / Access / evaluation: 6–14 min; estimate 10; actual 14
- E1 / Billing / evaluation: 12–28 min; estimate 20; actual 33
- P0 / Access / plan: 11–19 min; estimate 15; actual unobserved
- P1 / Billing / plan: 17–33 min; estimate 25; actual unobserved

Finite evaluation hits: 1/2. Point exact hits: 0/2. Unbounded evaluation: 0.

## Every original and review
- C00 [approve] User cannot sign in after forgetting password
  Original: {"id":"C00","text":"User cannot sign in after forgetting password","partition":"calibration","predicted":10,"actual":11}
  Review: Access, calibration, estimate 10, actual 11
  Note: 
- C01 [approve] Unlock a locked login account
  Original: {"id":"C01","text":"Unlock a locked login account","partition":"calibration","predicted":10,"actual":8}
  Review: Access, calibration, estimate 10, actual 8
  Note: 
- C02 [approve] Reset the password to restore account access
  Original: {"id":"C02","text":"Reset the password to restore account access","partition":"calibration","predicted":10,"actual":13}
  Review: Access, calibration, estimate 10, actual 13
  Note: 
- C03 [approve] Account authentication password recovery
  Original: {"id":"C03","text":"Account authentication password recovery","partition":"calibration","predicted":10,"actual":14}
  Review: Access, calibration, estimate 10, actual 14
  Note: 
- C10 [approve] Correct a duplicate invoice payment
  Original: {"id":"C10","text":"Correct a duplicate invoice payment","partition":"calibration","predicted":20,"actual":23}
  Review: Billing, calibration, estimate 20, actual 23
  Note: 
- C11 [approve] Refund an overcharged customer invoice
  Original: {"id":"C11","text":"Refund an overcharged customer invoice","partition":"calibration","predicted":20,"actual":16}
  Review: Billing, calibration, estimate 20, actual 16
  Note: 
- C12 [approve] Investigate billing charge discrepancy
  Original: {"id":"C12","text":"Investigate billing charge discrepancy","partition":"calibration","predicted":20,"actual":26}
  Review: Billing, calibration, estimate 20, actual 26
  Note: 
- C13 [approve] Reverse a mistaken payment on the bill
  Original: {"id":"C13","text":"Reverse a mistaken payment on the bill","partition":"calibration","predicted":20,"actual":28}
  Review: Billing, calibration, estimate 20, actual 28
  Note: 
- E0 [approve] Help regain access to a locked account
  Original: {"id":"E0","text":"Help regain access to a locked account","partition":"evaluation","predicted":10,"actual":14}
  Review: Access, evaluation, estimate 10, actual 14
  Note: 
- E1 [approve] An incorrect invoice needs a payment refund
  Original: {"id":"E1","text":"An incorrect invoice needs a payment refund","partition":"evaluation","predicted":20,"actual":33}
  Review: Billing, evaluation, estimate 20, actual 33
  Note: 
- P0 [approve] A forgotten password prevents signing in
  Original: {"id":"P0","text":"A forgotten password prevents signing in","partition":"plan","predicted":15,"actual":null}
  Review: Access, plan, estimate 15, actual unobserved
  Note: 
- P1 [approve] Customer charged twice on the invoice
  Original: {"id":"P1","text":"Customer charged twice on the invoice","partition":"plan","predicted":25,"actual":null}
  Review: Billing, plan, estimate 25, actual unobserved
  Note: 
