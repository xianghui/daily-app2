# Counter Folio · reviewed consumption worksheet

REVIEWED

- l0 | "Passenger lift motor electric counter" | lift | hour 0 | counter 985 | normal | approve | "=SUM(1,2)\n\"quoted\", note"
- h0 | "Hot water radiator thermal energy" | heat | hour 0 | counter 200 | normal | approve | ""
- l1 | "Elevator electrical consumption register" | lift | hour 12 | counter 30 | rollover | approve | ""
- h1 | "Space heating hot water energy counter" | heat | hour 12 | counter 260 | normal | approve | ""
- l2 | "Electric power for passenger elevator" | lift | hour 24 | counter 78 | normal | approve | ""
- h2 | "Radiator heating thermal register" | heat | hour 24 | counter 320 | normal | approve | ""



Radiator heating energy meter: 12 MWh; last-minus-first baseline 12.
  h0 → h1: 6 MWh / 12 h; 0.5 MWh/h; above supplied target false
  h1 → h2: 6 MWh / 12 h; 0.5 MWh/h; above supplied target false

Elevator electricity meter: 93 kWh; last-minus-first baseline -907.
  l0 → l1: 45 kWh / 12 h; 3.75 kWh/h; above supplied target false
  l1 → l2: 48 kWh / 12 h; 4 kWh/h; above supplied target false

Single verified rollovers only. No reset reconstruction or missing wrap detection. Rates are interval averages, not peak demand or leak diagnoses. No billing or meter connections.
