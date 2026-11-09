# Synthetic workshop finishing queue

DRAFT single-machine run plan. Minutes relative to shift start; assumed estimates, not measured savings. Objective = setup minutes + weighted tardiness minutes. All jobs available at minute zero. No deadlines guaranteed.

## Run order
1. W2 · Linseed oil rubbed into a wooden cutting board → oil; setup 0–0, process 0–10, due 30, late 0, weight 3. 
2. W4 · Clear polyurethane varnish on a wooden table → varnish; setup 10–20, process 20–30, due 110, late 0, weight 1. 
3. W3 · Opaque white paint on timber shelf → paint; setup 30–50, process 50–65, due 110, late 0, weight 1. 

## Held jobs (not scheduled)
- W1 · Paint the wooden stool with opaque blue color; 15 process minutes, due 110, weight 1; =1+1 Reviewed, "held" 🪷

Computed objective 30 vs input-order 32; setup 30 vs 32 minutes. Exact search over 6 permutations on identical reviewed setups. Holds are excluded from both scenarios.
