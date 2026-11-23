# Maximum synthetic batch

=row
"0" [decoded] p3 / i16BE
"00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"1" [decoded] p1 / u32LE
"00 00 00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"2" [decoded] p2 / i16LE
"00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"3" [decoded] p3 / i16BE
"00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"4" [decoded] p1 / u32LE
"00 00 00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"5" [decoded] p2 / i16LE
"00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"6" [decoded] p3 / i16BE
"00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"7" [decoded] p1 / u32LE
"00 00 00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"8" [decoded] p2 / i16LE
"00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"9" [decoded] p3 / i16BE
"00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"10" [decoded] p1 / u32LE
"00 00 00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"11" [decoded] p2 / i16LE
"00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"12" [decoded] p3 / i16BE
"00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"13" [decoded] p1 / u32LE
"00 00 00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"14" [decoded] p2 / i16LE
"00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"15" [decoded] p3 / i16BE
"00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"16" [decoded] p1 / u32LE
"00 00 00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"17" [decoded] p2 / i16LE
"00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"18" [decoded] p3 / i16BE
"00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"19" [decoded] p1 / u32LE
"00 00 00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"20" [decoded] p2 / i16LE
"00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"21" [decoded] p3 / i16BE
"00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"22" [decoded] p1 / u32LE
"00 00 00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

=row
"23" [decoded] p2 / i16LE
"00 00" → 0
Reviewed layout; byte-exact re-encoding and supplied range checks pass.

## Complete source and review audit

```json

{
  "schema": "byte-loom/1",
  "appliedAt": "2026-11-23T04:04:36.820Z",
  "originalInput": {
    "title": "Maximum synthetic batch",
    "profiles": [
      {
        "id": "p0",
        "description": "Cold room temperature sensor signed two byte big endian reading layout 0",
        "bytes": 2,
        "endian": "BE",
        "signed": true,
        "min": -500,
        "max": 1000
      },
      {
        "id": "p1",
        "description": "Water meter cumulative pulse counter unsigned four byte little endian reading layout 1",
        "bytes": 4,
        "endian": "LE",
        "signed": false,
        "min": 0,
        "max": 10000000
      },
      {
        "id": "p2",
        "description": "Vibration accelerometer signed two byte little endian reading layout 2",
        "bytes": 2,
        "endian": "LE",
        "signed": true,
        "min": -30000,
        "max": 30000
      },
      {
        "id": "p3",
        "description": "Cold room temperature sensor signed two byte big endian reading layout 3",
        "bytes": 2,
        "endian": "BE",
        "signed": true,
        "min": -500,
        "max": 1000
      },
      {
        "id": "p4",
        "description": "Water meter cumulative pulse counter unsigned four byte little endian reading layout 4",
        "bytes": 4,
        "endian": "LE",
        "signed": false,
        "min": 0,
        "max": 10000000
      },
      {
        "id": "p5",
        "description": "Vibration accelerometer signed two byte little endian reading layout 5",
        "bytes": 2,
        "endian": "LE",
        "signed": true,
        "min": -30000,
        "max": 30000
      },
      {
        "id": "p6",
        "description": "Cold room temperature sensor signed two byte big endian reading layout 6",
        "bytes": 2,
        "endian": "BE",
        "signed": true,
        "min": -500,
        "max": 1000
      },
      {
        "id": "p7",
        "description": "Water meter cumulative pulse counter unsigned four byte little endian reading layout 7",
        "bytes": 4,
        "endian": "LE",
        "signed": false,
        "min": 0,
        "max": 10000000
      }
    ],
    "records": [
      {
        "id": "=row\n\"0\"",
        "note": "Cold room temperature sensor signed two byte big endian reading",
        "value": "00 00"
      },
      {
        "id": "=row\n\"1\"",
        "note": "Water meter cumulative pulse counter unsigned four byte little endian reading",
        "value": "00 00 00 00"
      },
      {
        "id": "=row\n\"2\"",
        "note": "Vibration accelerometer signed two byte little endian reading",
        "value": "00 00"
      },
      {
        "id": "=row\n\"3\"",
        "note": "Cold room temperature sensor signed two byte big endian reading",
        "value": "00 00"
      },
      {
        "id": "=row\n\"4\"",
        "note": "Water meter cumulative pulse counter unsigned four byte little endian reading",
        "value": "00 00 00 00"
      },
      {
        "id": "=row\n\"5\"",
        "note": "Vibration accelerometer signed two byte little endian reading",
        "value": "00 00"
      },
      {
        "id": "=row\n\"6\"",
        "note": "Cold room temperature sensor signed two byte big endian reading",
        "value": "00 00"
      },
      {
        "id": "=row\n\"7\"",
        "note": "Water meter cumulative pulse counter unsigned four byte little endian reading",
        "value": "00 00 00 00"
      },
      {
        "id": "=row\n\"8\"",
        "note": "Vibration accelerometer signed two byte little endian reading",
        "value": "00 00"
      },
      {
        "id": "=row\n\"9\"",
        "note": "Cold room temperature sensor signed two byte big endian reading",
        "value": "00 00"
      },
      {
        "id": "=row\n\"10\"",
        "note": "Water meter cumulative pulse counter unsigned four byte little endian reading",
        "value": "00 00 00 00"
      },
      {
        "id": "=row\n\"11\"",
        "note": "Vibration accelerometer signed two byte little endian reading",
        "value": "00 00"
      },
      {
        "id": "=row\n\"12\"",
        "note": "Cold room temperature sensor signed two byte big endian reading",
        "value": "00 00"
      },
      {
        "id": "=row\n\"13\"",
        "note": "Water meter cumulative pulse counter unsigned four byte little endian reading",
        "value": "00 00 00 00"
      },
      {
        "id": "=row\n\"14\"",
        "note": "Vibration accelerometer signed two byte little endian reading",
        "value": "00 00"
      },
      {
        "id": "=row\n\"15\"",
        "note": "Cold room temperature sensor signed two byte big endian reading",
        "value": "00 00"
      },
      {
        "id": "=row\n\"16\"",
        "note": "Water meter cumulative pulse counter unsigned four byte little endian reading",
        "value": "00 00 00 00"
      },
      {
        "id": "=row\n\"17\"",
        "note": "Vibration accelerometer signed two byte little endian reading",
        "value": "00 00"
      },
      {
        "id": "=row\n\"18\"",
        "note": "Cold room temperature sensor signed two byte big endian reading",
        "value": "00 00"
      },
      {
        "id": "=row\n\"19\"",
        "note": "Water meter cumulative pulse counter unsigned four byte little endian reading",
        "value": "00 00 00 00"
      },
      {
        "id": "=row\n\"20\"",
        "note": "Vibration accelerometer signed two byte little endian reading",
        "value": "00 00"
      },
      {
        "id": "=row\n\"21\"",
        "note": "Cold room temperature sensor signed two byte big endian reading",
        "value": "00 00"
      },
      {
        "id": "=row\n\"22\"",
        "note": "Water meter cumulative pulse counter unsigned four byte little endian reading",
        "value": "00 00 00 00"
      },
      {
        "id": "=row\n\"23\"",
        "note": "Vibration accelerometer signed two byte little endian reading",
        "value": "00 00"
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "text": "Cold room temperature sensor signed two byte big endian reading",
      "resource": "p3",
      "aiResource": "p3",
      "evidence": [
        {
          "resource": "p3",
          "score": 0.9569658593228876
        },
        {
          "resource": "p0",
          "score": 0.9555469360389609
        },
        {
          "resource": "p6",
          "score": 0.9530276256579642
        },
        {
          "resource": "p2",
          "score": 0.6115142018127646
        },
        {
          "resource": "p5",
          "score": 0.5909044934998355
        },
        {
          "resource": "p7",
          "score": 0.5212409918709358
        },
        {
          "resource": "p1",
          "score": 0.5186315599576626
        },
        {
          "resource": "p4",
          "score": 0.5155436720192714
        }
      ],
      "value": "00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "text": "Water meter cumulative pulse counter unsigned four byte little endian reading",
      "resource": "p1",
      "aiResource": "p1",
      "evidence": [
        {
          "resource": "p1",
          "score": 0.9710071143882163
        },
        {
          "resource": "p7",
          "score": 0.9693289068723191
        },
        {
          "resource": "p4",
          "score": 0.9659373779085635
        },
        {
          "resource": "p2",
          "score": 0.5390763979490562
        },
        {
          "resource": "p5",
          "score": 0.5172822602455248
        },
        {
          "resource": "p6",
          "score": 0.49995844630689834
        },
        {
          "resource": "p3",
          "score": 0.4954810851134383
        },
        {
          "resource": "p0",
          "score": 0.4751000717645435
        }
      ],
      "value": "00 00 00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "text": "Vibration accelerometer signed two byte little endian reading",
      "resource": "p2",
      "aiResource": "p2",
      "evidence": [
        {
          "resource": "p2",
          "score": 0.9492230505913923
        },
        {
          "resource": "p5",
          "score": 0.9379746919042765
        },
        {
          "resource": "p3",
          "score": 0.6426245530313606
        },
        {
          "resource": "p6",
          "score": 0.6419633732097936
        },
        {
          "resource": "p0",
          "score": 0.6412932090259981
        },
        {
          "resource": "p4",
          "score": 0.5997108410389842
        },
        {
          "resource": "p7",
          "score": 0.5949188840727453
        },
        {
          "resource": "p1",
          "score": 0.594508201117688
        }
      ],
      "value": "00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "text": "Cold room temperature sensor signed two byte big endian reading",
      "resource": "p3",
      "aiResource": "p3",
      "evidence": [
        {
          "resource": "p3",
          "score": 0.9569658593228876
        },
        {
          "resource": "p0",
          "score": 0.9555469360389609
        },
        {
          "resource": "p6",
          "score": 0.9530276256579642
        },
        {
          "resource": "p2",
          "score": 0.6115142018127646
        },
        {
          "resource": "p5",
          "score": 0.5909044934998355
        },
        {
          "resource": "p7",
          "score": 0.5212409918709358
        },
        {
          "resource": "p1",
          "score": 0.5186315599576626
        },
        {
          "resource": "p4",
          "score": 0.5155436720192714
        }
      ],
      "value": "00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "text": "Water meter cumulative pulse counter unsigned four byte little endian reading",
      "resource": "p1",
      "aiResource": "p1",
      "evidence": [
        {
          "resource": "p1",
          "score": 0.9710071143882163
        },
        {
          "resource": "p7",
          "score": 0.9693289068723191
        },
        {
          "resource": "p4",
          "score": 0.9659373779085635
        },
        {
          "resource": "p2",
          "score": 0.5390763979490562
        },
        {
          "resource": "p5",
          "score": 0.5172822602455248
        },
        {
          "resource": "p6",
          "score": 0.49995844630689834
        },
        {
          "resource": "p3",
          "score": 0.4954810851134383
        },
        {
          "resource": "p0",
          "score": 0.4751000717645435
        }
      ],
      "value": "00 00 00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "text": "Vibration accelerometer signed two byte little endian reading",
      "resource": "p2",
      "aiResource": "p2",
      "evidence": [
        {
          "resource": "p2",
          "score": 0.9492230505913923
        },
        {
          "resource": "p5",
          "score": 0.9379746919042765
        },
        {
          "resource": "p3",
          "score": 0.6426245530313606
        },
        {
          "resource": "p6",
          "score": 0.6419633732097936
        },
        {
          "resource": "p0",
          "score": 0.6412932090259981
        },
        {
          "resource": "p4",
          "score": 0.5997108410389842
        },
        {
          "resource": "p7",
          "score": 0.5949188840727453
        },
        {
          "resource": "p1",
          "score": 0.594508201117688
        }
      ],
      "value": "00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 6,
      "text": "Cold room temperature sensor signed two byte big endian reading",
      "resource": "p3",
      "aiResource": "p3",
      "evidence": [
        {
          "resource": "p3",
          "score": 0.9569658593228876
        },
        {
          "resource": "p0",
          "score": 0.9555469360389609
        },
        {
          "resource": "p6",
          "score": 0.9530276256579642
        },
        {
          "resource": "p2",
          "score": 0.6115142018127646
        },
        {
          "resource": "p5",
          "score": 0.5909044934998355
        },
        {
          "resource": "p7",
          "score": 0.5212409918709358
        },
        {
          "resource": "p1",
          "score": 0.5186315599576626
        },
        {
          "resource": "p4",
          "score": 0.5155436720192714
        }
      ],
      "value": "00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 7,
      "text": "Water meter cumulative pulse counter unsigned four byte little endian reading",
      "resource": "p1",
      "aiResource": "p1",
      "evidence": [
        {
          "resource": "p1",
          "score": 0.9710071143882163
        },
        {
          "resource": "p7",
          "score": 0.9693289068723191
        },
        {
          "resource": "p4",
          "score": 0.9659373779085635
        },
        {
          "resource": "p2",
          "score": 0.5390763979490562
        },
        {
          "resource": "p5",
          "score": 0.5172822602455248
        },
        {
          "resource": "p6",
          "score": 0.49995844630689834
        },
        {
          "resource": "p3",
          "score": 0.4954810851134383
        },
        {
          "resource": "p0",
          "score": 0.4751000717645435
        }
      ],
      "value": "00 00 00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 8,
      "text": "Vibration accelerometer signed two byte little endian reading",
      "resource": "p2",
      "aiResource": "p2",
      "evidence": [
        {
          "resource": "p2",
          "score": 0.9492230505913923
        },
        {
          "resource": "p5",
          "score": 0.9379746919042765
        },
        {
          "resource": "p3",
          "score": 0.6426245530313606
        },
        {
          "resource": "p6",
          "score": 0.6419633732097936
        },
        {
          "resource": "p0",
          "score": 0.6412932090259981
        },
        {
          "resource": "p4",
          "score": 0.5997108410389842
        },
        {
          "resource": "p7",
          "score": 0.5949188840727453
        },
        {
          "resource": "p1",
          "score": 0.594508201117688
        }
      ],
      "value": "00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 9,
      "text": "Cold room temperature sensor signed two byte big endian reading",
      "resource": "p3",
      "aiResource": "p3",
      "evidence": [
        {
          "resource": "p3",
          "score": 0.9569658593228876
        },
        {
          "resource": "p0",
          "score": 0.9555469360389609
        },
        {
          "resource": "p6",
          "score": 0.9530276256579642
        },
        {
          "resource": "p2",
          "score": 0.6115142018127646
        },
        {
          "resource": "p5",
          "score": 0.5909044934998355
        },
        {
          "resource": "p7",
          "score": 0.5212409918709358
        },
        {
          "resource": "p1",
          "score": 0.5186315599576626
        },
        {
          "resource": "p4",
          "score": 0.5155436720192714
        }
      ],
      "value": "00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 10,
      "text": "Water meter cumulative pulse counter unsigned four byte little endian reading",
      "resource": "p1",
      "aiResource": "p1",
      "evidence": [
        {
          "resource": "p1",
          "score": 0.9710071143882163
        },
        {
          "resource": "p7",
          "score": 0.9693289068723191
        },
        {
          "resource": "p4",
          "score": 0.9659373779085635
        },
        {
          "resource": "p2",
          "score": 0.5390763979490562
        },
        {
          "resource": "p5",
          "score": 0.5172822602455248
        },
        {
          "resource": "p6",
          "score": 0.49995844630689834
        },
        {
          "resource": "p3",
          "score": 0.4954810851134383
        },
        {
          "resource": "p0",
          "score": 0.4751000717645435
        }
      ],
      "value": "00 00 00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 11,
      "text": "Vibration accelerometer signed two byte little endian reading",
      "resource": "p2",
      "aiResource": "p2",
      "evidence": [
        {
          "resource": "p2",
          "score": 0.9492230505913923
        },
        {
          "resource": "p5",
          "score": 0.9379746919042765
        },
        {
          "resource": "p3",
          "score": 0.6426245530313606
        },
        {
          "resource": "p6",
          "score": 0.6419633732097936
        },
        {
          "resource": "p0",
          "score": 0.6412932090259981
        },
        {
          "resource": "p4",
          "score": 0.5997108410389842
        },
        {
          "resource": "p7",
          "score": 0.5949188840727453
        },
        {
          "resource": "p1",
          "score": 0.594508201117688
        }
      ],
      "value": "00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 12,
      "text": "Cold room temperature sensor signed two byte big endian reading",
      "resource": "p3",
      "aiResource": "p3",
      "evidence": [
        {
          "resource": "p3",
          "score": 0.9569658593228876
        },
        {
          "resource": "p0",
          "score": 0.9555469360389609
        },
        {
          "resource": "p6",
          "score": 0.9530276256579642
        },
        {
          "resource": "p2",
          "score": 0.6115142018127646
        },
        {
          "resource": "p5",
          "score": 0.5909044934998355
        },
        {
          "resource": "p7",
          "score": 0.5212409918709358
        },
        {
          "resource": "p1",
          "score": 0.5186315599576626
        },
        {
          "resource": "p4",
          "score": 0.5155436720192714
        }
      ],
      "value": "00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 13,
      "text": "Water meter cumulative pulse counter unsigned four byte little endian reading",
      "resource": "p1",
      "aiResource": "p1",
      "evidence": [
        {
          "resource": "p1",
          "score": 0.9710071143882163
        },
        {
          "resource": "p7",
          "score": 0.9693289068723191
        },
        {
          "resource": "p4",
          "score": 0.9659373779085635
        },
        {
          "resource": "p2",
          "score": 0.5390763979490562
        },
        {
          "resource": "p5",
          "score": 0.5172822602455248
        },
        {
          "resource": "p6",
          "score": 0.49995844630689834
        },
        {
          "resource": "p3",
          "score": 0.4954810851134383
        },
        {
          "resource": "p0",
          "score": 0.4751000717645435
        }
      ],
      "value": "00 00 00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 14,
      "text": "Vibration accelerometer signed two byte little endian reading",
      "resource": "p2",
      "aiResource": "p2",
      "evidence": [
        {
          "resource": "p2",
          "score": 0.9492230505913923
        },
        {
          "resource": "p5",
          "score": 0.9379746919042765
        },
        {
          "resource": "p3",
          "score": 0.6426245530313606
        },
        {
          "resource": "p6",
          "score": 0.6419633732097936
        },
        {
          "resource": "p0",
          "score": 0.6412932090259981
        },
        {
          "resource": "p4",
          "score": 0.5997108410389842
        },
        {
          "resource": "p7",
          "score": 0.5949188840727453
        },
        {
          "resource": "p1",
          "score": 0.594508201117688
        }
      ],
      "value": "00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 15,
      "text": "Cold room temperature sensor signed two byte big endian reading",
      "resource": "p3",
      "aiResource": "p3",
      "evidence": [
        {
          "resource": "p3",
          "score": 0.9569658593228876
        },
        {
          "resource": "p0",
          "score": 0.9555469360389609
        },
        {
          "resource": "p6",
          "score": 0.9530276256579642
        },
        {
          "resource": "p2",
          "score": 0.6115142018127646
        },
        {
          "resource": "p5",
          "score": 0.5909044934998355
        },
        {
          "resource": "p7",
          "score": 0.5212409918709358
        },
        {
          "resource": "p1",
          "score": 0.5186315599576626
        },
        {
          "resource": "p4",
          "score": 0.5155436720192714
        }
      ],
      "value": "00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 16,
      "text": "Water meter cumulative pulse counter unsigned four byte little endian reading",
      "resource": "p1",
      "aiResource": "p1",
      "evidence": [
        {
          "resource": "p1",
          "score": 0.9710071143882163
        },
        {
          "resource": "p7",
          "score": 0.9693289068723191
        },
        {
          "resource": "p4",
          "score": 0.9659373779085635
        },
        {
          "resource": "p2",
          "score": 0.5390763979490562
        },
        {
          "resource": "p5",
          "score": 0.5172822602455248
        },
        {
          "resource": "p6",
          "score": 0.49995844630689834
        },
        {
          "resource": "p3",
          "score": 0.4954810851134383
        },
        {
          "resource": "p0",
          "score": 0.4751000717645435
        }
      ],
      "value": "00 00 00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 17,
      "text": "Vibration accelerometer signed two byte little endian reading",
      "resource": "p2",
      "aiResource": "p2",
      "evidence": [
        {
          "resource": "p2",
          "score": 0.9492230505913923
        },
        {
          "resource": "p5",
          "score": 0.9379746919042765
        },
        {
          "resource": "p3",
          "score": 0.6426245530313606
        },
        {
          "resource": "p6",
          "score": 0.6419633732097936
        },
        {
          "resource": "p0",
          "score": 0.6412932090259981
        },
        {
          "resource": "p4",
          "score": 0.5997108410389842
        },
        {
          "resource": "p7",
          "score": 0.5949188840727453
        },
        {
          "resource": "p1",
          "score": 0.594508201117688
        }
      ],
      "value": "00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 18,
      "text": "Cold room temperature sensor signed two byte big endian reading",
      "resource": "p3",
      "aiResource": "p3",
      "evidence": [
        {
          "resource": "p3",
          "score": 0.9569658593228876
        },
        {
          "resource": "p0",
          "score": 0.9555469360389609
        },
        {
          "resource": "p6",
          "score": 0.9530276256579642
        },
        {
          "resource": "p2",
          "score": 0.6115142018127646
        },
        {
          "resource": "p5",
          "score": 0.5909044934998355
        },
        {
          "resource": "p7",
          "score": 0.5212409918709358
        },
        {
          "resource": "p1",
          "score": 0.5186315599576626
        },
        {
          "resource": "p4",
          "score": 0.5155436720192714
        }
      ],
      "value": "00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 19,
      "text": "Water meter cumulative pulse counter unsigned four byte little endian reading",
      "resource": "p1",
      "aiResource": "p1",
      "evidence": [
        {
          "resource": "p1",
          "score": 0.9710071143882163
        },
        {
          "resource": "p7",
          "score": 0.9693289068723191
        },
        {
          "resource": "p4",
          "score": 0.9659373779085635
        },
        {
          "resource": "p2",
          "score": 0.5390763979490562
        },
        {
          "resource": "p5",
          "score": 0.5172822602455248
        },
        {
          "resource": "p6",
          "score": 0.49995844630689834
        },
        {
          "resource": "p3",
          "score": 0.4954810851134383
        },
        {
          "resource": "p0",
          "score": 0.4751000717645435
        }
      ],
      "value": "00 00 00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 20,
      "text": "Vibration accelerometer signed two byte little endian reading",
      "resource": "p2",
      "aiResource": "p2",
      "evidence": [
        {
          "resource": "p2",
          "score": 0.9492230505913923
        },
        {
          "resource": "p5",
          "score": 0.9379746919042765
        },
        {
          "resource": "p3",
          "score": 0.6426245530313606
        },
        {
          "resource": "p6",
          "score": 0.6419633732097936
        },
        {
          "resource": "p0",
          "score": 0.6412932090259981
        },
        {
          "resource": "p4",
          "score": 0.5997108410389842
        },
        {
          "resource": "p7",
          "score": 0.5949188840727453
        },
        {
          "resource": "p1",
          "score": 0.594508201117688
        }
      ],
      "value": "00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 21,
      "text": "Cold room temperature sensor signed two byte big endian reading",
      "resource": "p3",
      "aiResource": "p3",
      "evidence": [
        {
          "resource": "p3",
          "score": 0.9569658593228876
        },
        {
          "resource": "p0",
          "score": 0.9555469360389609
        },
        {
          "resource": "p6",
          "score": 0.9530276256579642
        },
        {
          "resource": "p2",
          "score": 0.6115142018127646
        },
        {
          "resource": "p5",
          "score": 0.5909044934998355
        },
        {
          "resource": "p7",
          "score": 0.5212409918709358
        },
        {
          "resource": "p1",
          "score": 0.5186315599576626
        },
        {
          "resource": "p4",
          "score": 0.5155436720192714
        }
      ],
      "value": "00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 22,
      "text": "Water meter cumulative pulse counter unsigned four byte little endian reading",
      "resource": "p1",
      "aiResource": "p1",
      "evidence": [
        {
          "resource": "p1",
          "score": 0.9710071143882163
        },
        {
          "resource": "p7",
          "score": 0.9693289068723191
        },
        {
          "resource": "p4",
          "score": 0.9659373779085635
        },
        {
          "resource": "p2",
          "score": 0.5390763979490562
        },
        {
          "resource": "p5",
          "score": 0.5172822602455248
        },
        {
          "resource": "p6",
          "score": 0.49995844630689834
        },
        {
          "resource": "p3",
          "score": 0.4954810851134383
        },
        {
          "resource": "p0",
          "score": 0.4751000717645435
        }
      ],
      "value": "00 00 00 00",
      "decision": "approve",
      "note": ""
    },
    {
      "index": 23,
      "text": "Vibration accelerometer signed two byte little endian reading",
      "resource": "p2",
      "aiResource": "p2",
      "evidence": [
        {
          "resource": "p2",
          "score": 0.9492230505913923
        },
        {
          "resource": "p5",
          "score": 0.9379746919042765
        },
        {
          "resource": "p3",
          "score": 0.6426245530313606
        },
        {
          "resource": "p6",
          "score": 0.6419633732097936
        },
        {
          "resource": "p0",
          "score": 0.6412932090259981
        },
        {
          "resource": "p4",
          "score": 0.5997108410389842
        },
        {
          "resource": "p7",
          "score": 0.5949188840727453
        },
        {
          "resource": "p1",
          "score": 0.594508201117688
        }
      ],
      "value": "00 00",
      "decision": "approve",
      "note": ""
    }
  ],
  "analysis": {
    "checks": [
      {
        "index": 0,
        "id": "=row\n\"0\"",
        "profile": "p3",
        "layout": "i16BE",
        "hex": "00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": -500,
        "max": 1000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 1,
        "id": "=row\n\"1\"",
        "profile": "p1",
        "layout": "u32LE",
        "hex": "00 00 00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00 00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": 0,
        "max": 10000000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 2,
        "id": "=row\n\"2\"",
        "profile": "p2",
        "layout": "i16LE",
        "hex": "00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": -30000,
        "max": 30000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 3,
        "id": "=row\n\"3\"",
        "profile": "p3",
        "layout": "i16BE",
        "hex": "00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": -500,
        "max": 1000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 4,
        "id": "=row\n\"4\"",
        "profile": "p1",
        "layout": "u32LE",
        "hex": "00 00 00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00 00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": 0,
        "max": 10000000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 5,
        "id": "=row\n\"5\"",
        "profile": "p2",
        "layout": "i16LE",
        "hex": "00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": -30000,
        "max": 30000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 6,
        "id": "=row\n\"6\"",
        "profile": "p3",
        "layout": "i16BE",
        "hex": "00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": -500,
        "max": 1000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 7,
        "id": "=row\n\"7\"",
        "profile": "p1",
        "layout": "u32LE",
        "hex": "00 00 00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00 00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": 0,
        "max": 10000000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 8,
        "id": "=row\n\"8\"",
        "profile": "p2",
        "layout": "i16LE",
        "hex": "00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": -30000,
        "max": 30000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 9,
        "id": "=row\n\"9\"",
        "profile": "p3",
        "layout": "i16BE",
        "hex": "00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": -500,
        "max": 1000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 10,
        "id": "=row\n\"10\"",
        "profile": "p1",
        "layout": "u32LE",
        "hex": "00 00 00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00 00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": 0,
        "max": 10000000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 11,
        "id": "=row\n\"11\"",
        "profile": "p2",
        "layout": "i16LE",
        "hex": "00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": -30000,
        "max": 30000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 12,
        "id": "=row\n\"12\"",
        "profile": "p3",
        "layout": "i16BE",
        "hex": "00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": -500,
        "max": 1000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 13,
        "id": "=row\n\"13\"",
        "profile": "p1",
        "layout": "u32LE",
        "hex": "00 00 00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00 00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": 0,
        "max": 10000000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 14,
        "id": "=row\n\"14\"",
        "profile": "p2",
        "layout": "i16LE",
        "hex": "00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": -30000,
        "max": 30000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 15,
        "id": "=row\n\"15\"",
        "profile": "p3",
        "layout": "i16BE",
        "hex": "00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": -500,
        "max": 1000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 16,
        "id": "=row\n\"16\"",
        "profile": "p1",
        "layout": "u32LE",
        "hex": "00 00 00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00 00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": 0,
        "max": 10000000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 17,
        "id": "=row\n\"17\"",
        "profile": "p2",
        "layout": "i16LE",
        "hex": "00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": -30000,
        "max": 30000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 18,
        "id": "=row\n\"18\"",
        "profile": "p3",
        "layout": "i16BE",
        "hex": "00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": -500,
        "max": 1000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 19,
        "id": "=row\n\"19\"",
        "profile": "p1",
        "layout": "u32LE",
        "hex": "00 00 00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00 00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": 0,
        "max": 10000000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 20,
        "id": "=row\n\"20\"",
        "profile": "p2",
        "layout": "i16LE",
        "hex": "00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": -30000,
        "max": 30000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 21,
        "id": "=row\n\"21\"",
        "profile": "p3",
        "layout": "i16BE",
        "hex": "00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": -500,
        "max": 1000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 22,
        "id": "=row\n\"22\"",
        "profile": "p1",
        "layout": "u32LE",
        "hex": "00 00 00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00 00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": 0,
        "max": 10000000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      },
      {
        "index": 23,
        "id": "=row\n\"23\"",
        "profile": "p2",
        "layout": "i16LE",
        "hex": "00 00",
        "status": "decoded",
        "value": 0,
        "canonical": "00 00",
        "roundTrip": true,
        "baseline": 0,
        "different": false,
        "min": -30000,
        "max": 30000,
        "reason": "Reviewed layout; byte-exact re-encoding and supplied range checks pass."
      }
    ],
    "decoded": 24,
    "held": 0,
    "invalid": 0,
    "different": 0,
    "compared": 24
  }
}

```

