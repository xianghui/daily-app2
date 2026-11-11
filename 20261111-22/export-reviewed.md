# Uptime Mosaic — reviewed stoppage worksheet

Community laundry · 09:00–18:00

Logged availability is descriptive only: remaining scheduled minutes / scheduled minutes. Missing logs are not evidence of uptime. Holds suppress availability for the assigned asset; unrelated held records can affect other assets. Verify the complete register. No MTBF, reliability or future uptime prediction.

## Equipment summary

| Equipment | State | Naive sum min | Union downtime min | Overlap removed min | Logged availability |
|---|---|---|---|---|---|
| Washing machine | reviewed-logs-only | 80 | 60 | 20 | 88.89% |
| Tumble dryer | reviewed-logs-only | 90 | 80 | 10 | 85.19% |
| Steam ironing station | reviewed-logs-only | 20 | 20 | 0 | 96.30% |

## Merged downtime intervals

### Washing machine

- 10:00–11:00 · sources L1, L2

### Tumble dryer

- 13:20–14:40 · sources L3, L4

### Steam ironing station

- 17:40–18:00 · sources L5

## Every source record

| ID | Original | Equipment | Reviewed interval | Decision | Note |
|---|---|---|---|---|---|
| L1 | The wash drum stopped during the rinse cycle. | washer | 10:00–11:00 | approve | =1+1, "review"<br>second line |
| L2 | Detergent dispenser blocked the washing machine. | washer | 10:20–10:40 | approve |  |
| L3 | Hot air stopped flowing in the tumble dryer. | dryer | 13:20–14:00 | approve |  |
| L4 | Dryer lint filter blocked while tumbling clothes. | dryer | 13:50–14:40 | approve |  |
| L5 | The steam iron soleplate would not heat. | iron | 17:40–18:30 | approve |  |
| L6 | The ironing board steam supply failed. | iron | 08:20–08:50 | approve |  |
