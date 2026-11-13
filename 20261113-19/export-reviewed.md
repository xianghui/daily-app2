# Reliability Grove — Synthetic exhibit kiosk

Independent identical parallel units, required series stages, one common observation horizon. Scenario only, not reliability certification. Costs use one supplied unit/currency and horizon.

Budget 280.

Single-unit baseline 74.3213%; budgeted scenario 92.3070%; extra cost 240; feasible allocations evaluated 19.

## Procurement-review checklist (no orders placed)

- [ ] power: assess 0 extra units, cost 0; verify independent failure domains and evidence with Service planner
- [ ] network: assess 0 extra units, cost 0; verify independent failure domains and evidence with Service planner
- [ ] compute: assess 1 extra units, cost 100; verify independent failure domains and evidence with Service planner
- [ ] storage: assess 1 extra units, cost 140; verify independent failure domains and evidence with =Owner
"second", line

## Complete source-linked reviews

### e / approve

Source: Disk volume keeping the saved database records.

Reviewed storage / success basis points 8500 / =Owner
"second", line

=SUM(1,2)
"quoted", verify common horizon

### f / approve

Source: UPS battery and electrical power supply.

Reviewed power / success basis points 9900 / Service planner



### g / approve

Source: Compute worker running the kiosk application.

Reviewed compute / success basis points 9200 / Service planner



### h / approve

Source: Router uplink providing internet connectivity.

Reviewed network / success basis points 9600 / Service planner

