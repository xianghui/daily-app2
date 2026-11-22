# Editorial release gate audit

Graph-only process worksheet. All reviewed arrows are assumed feasible without guards. Missing routes, conditional logic or unmodeled entries can invalidate conclusions. Similarity is not confidence; mandatory source review required. No policy, security or real-world enforcement certification.

## Gate worksheet
Entry: s0 | Finish: s11
One completion route: s0 → s1 → s2 → s3 → s4 → s5 → s6 → s7 → s8 → s9 → s10 → s11

s1: UNAVOIDABLE
  No completion route remains with this stage removed.
s2: UNAVOIDABLE
  No completion route remains with this stage removed.
s3: UNAVOIDABLE
  No completion route remains with this stage removed.
s4: UNAVOIDABLE
  No completion route remains with this stage removed.
s5: UNAVOIDABLE
  No completion route remains with this stage removed.
s6: UNAVOIDABLE
  No completion route remains with this stage removed.
s7: UNAVOIDABLE
  No completion route remains with this stage removed.
s8: UNAVOIDABLE
  No completion route remains with this stage removed.
s9: UNAVOIDABLE
  No completion route remains with this stage removed.
s10: UNAVOIDABLE
  No completion route remains with this stage removed.

## Computed comparison
Appears on some completion walk: 10; unavoidable: 10; gates with bypass witnesses: 0. Graph counts, not measured time savings or enforcement accuracy.

## Complete original and reviewed audit
{
  "schema": "gate-atlas/1",
  "originalInput": {
    "title": "Editorial release gate audit",
    "start": "s0",
    "finish": "s11",
    "gates": [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5",
      "s6",
      "s7",
      "s8",
      "s9",
      "s10"
    ],
    "stages": [
      {
        "id": "s0",
        "description": "Workflow stage 0"
      },
      {
        "id": "s1",
        "description": "Workflow stage 1"
      },
      {
        "id": "s2",
        "description": "Workflow stage 2"
      },
      {
        "id": "s3",
        "description": "Workflow stage 3"
      },
      {
        "id": "s4",
        "description": "Workflow stage 4"
      },
      {
        "id": "s5",
        "description": "Workflow stage 5"
      },
      {
        "id": "s6",
        "description": "Workflow stage 6"
      },
      {
        "id": "s7",
        "description": "Workflow stage 7"
      },
      {
        "id": "s8",
        "description": "Workflow stage 8"
      },
      {
        "id": "s9",
        "description": "Workflow stage 9"
      },
      {
        "id": "s10",
        "description": "Workflow stage 10"
      },
      {
        "id": "s11",
        "description": "Workflow stage 11"
      }
    ],
    "handoffs": [
      {
        "id": "=SUM(1,2)\n\"handoff 0\"",
        "from": "Workflow stage 0",
        "to": "Workflow stage 1"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 1\"",
        "from": "Workflow stage 1",
        "to": "Workflow stage 2"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 2\"",
        "from": "Workflow stage 2",
        "to": "Workflow stage 3"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 3\"",
        "from": "Workflow stage 3",
        "to": "Workflow stage 4"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 4\"",
        "from": "Workflow stage 4",
        "to": "Workflow stage 5"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 5\"",
        "from": "Workflow stage 5",
        "to": "Workflow stage 6"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 6\"",
        "from": "Workflow stage 6",
        "to": "Workflow stage 7"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 7\"",
        "from": "Workflow stage 7",
        "to": "Workflow stage 8"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 8\"",
        "from": "Workflow stage 8",
        "to": "Workflow stage 9"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 9\"",
        "from": "Workflow stage 9",
        "to": "Workflow stage 10"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 10\"",
        "from": "Workflow stage 10",
        "to": "Workflow stage 11"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 11\"",
        "from": "Workflow stage 0",
        "to": "Workflow stage 1"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 12\"",
        "from": "Workflow stage 1",
        "to": "Workflow stage 2"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 13\"",
        "from": "Workflow stage 2",
        "to": "Workflow stage 3"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 14\"",
        "from": "Workflow stage 3",
        "to": "Workflow stage 4"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 15\"",
        "from": "Workflow stage 4",
        "to": "Workflow stage 5"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 16\"",
        "from": "Workflow stage 5",
        "to": "Workflow stage 6"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 17\"",
        "from": "Workflow stage 6",
        "to": "Workflow stage 7"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 18\"",
        "from": "Workflow stage 7",
        "to": "Workflow stage 8"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 19\"",
        "from": "Workflow stage 8",
        "to": "Workflow stage 9"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 20\"",
        "from": "Workflow stage 9",
        "to": "Workflow stage 10"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 21\"",
        "from": "Workflow stage 10",
        "to": "Workflow stage 11"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 22\"",
        "from": "Workflow stage 0",
        "to": "Workflow stage 1"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 23\"",
        "from": "Workflow stage 1",
        "to": "Workflow stage 2"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 24\"",
        "from": "Workflow stage 2",
        "to": "Workflow stage 3"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 25\"",
        "from": "Workflow stage 3",
        "to": "Workflow stage 4"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 26\"",
        "from": "Workflow stage 4",
        "to": "Workflow stage 5"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 27\"",
        "from": "Workflow stage 5",
        "to": "Workflow stage 6"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 28\"",
        "from": "Workflow stage 6",
        "to": "Workflow stage 7"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 29\"",
        "from": "Workflow stage 7",
        "to": "Workflow stage 8"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 30\"",
        "from": "Workflow stage 8",
        "to": "Workflow stage 9"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 31\"",
        "from": "Workflow stage 9",
        "to": "Workflow stage 10"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 32\"",
        "from": "Workflow stage 10",
        "to": "Workflow stage 11"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 33\"",
        "from": "Workflow stage 0",
        "to": "Workflow stage 1"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 34\"",
        "from": "Workflow stage 1",
        "to": "Workflow stage 2"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 35\"",
        "from": "Workflow stage 2",
        "to": "Workflow stage 3"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 36\"",
        "from": "Workflow stage 3",
        "to": "Workflow stage 4"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 37\"",
        "from": "Workflow stage 4",
        "to": "Workflow stage 5"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 38\"",
        "from": "Workflow stage 5",
        "to": "Workflow stage 6"
      },
      {
        "id": "=SUM(1,2)\n\"handoff 39\"",
        "from": "Workflow stage 6",
        "to": "Workflow stage 7"
      }
    ]
  },
  "reviews": [
    {
      "index": 0,
      "handoff": "=SUM(1,2)\n\"handoff 0\"",
      "from": "s0",
      "to": "s1",
      "aiFrom": "s0",
      "aiTo": "s1",
      "evidence": {
        "from": [
          {
            "stage": "s0",
            "score": 0.9903431490738062
          },
          {
            "stage": "s10",
            "score": 0.8262225260157542
          },
          {
            "stage": "s1",
            "score": 0.8204729983179047
          },
          {
            "stage": "s11",
            "score": 0.8074140941929899
          },
          {
            "stage": "s5",
            "score": 0.8022059178935181
          },
          {
            "stage": "s4",
            "score": 0.7970844349856463
          },
          {
            "stage": "s2",
            "score": 0.7961013252970048
          },
          {
            "stage": "s9",
            "score": 0.7856510832975732
          },
          {
            "stage": "s6",
            "score": 0.7812591834291817
          },
          {
            "stage": "s3",
            "score": 0.7687800978262553
          },
          {
            "stage": "s7",
            "score": 0.7668657670869088
          },
          {
            "stage": "s8",
            "score": 0.7598577630077296
          }
        ],
        "to": [
          {
            "stage": "s1",
            "score": 0.9925398704489826
          },
          {
            "stage": "s3",
            "score": 0.960313549363061
          },
          {
            "stage": "s2",
            "score": 0.9601645989950637
          },
          {
            "stage": "s5",
            "score": 0.946150301805891
          },
          {
            "stage": "s4",
            "score": 0.9442886631740903
          },
          {
            "stage": "s7",
            "score": 0.9242489136733592
          },
          {
            "stage": "s10",
            "score": 0.9150179398828823
          },
          {
            "stage": "s11",
            "score": 0.9007301435365295
          },
          {
            "stage": "s6",
            "score": 0.89756606866804
          },
          {
            "stage": "s9",
            "score": 0.8773060164485884
          },
          {
            "stage": "s8",
            "score": 0.8726203997825759
          },
          {
            "stage": "s0",
            "score": 0.8069205972397628
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 1,
      "handoff": "=SUM(1,2)\n\"handoff 1\"",
      "from": "s1",
      "to": "s2",
      "aiFrom": "s1",
      "aiTo": "s2",
      "evidence": {
        "from": [
          {
            "stage": "s1",
            "score": 0.9925398704489826
          },
          {
            "stage": "s3",
            "score": 0.960313549363061
          },
          {
            "stage": "s2",
            "score": 0.9601645989950637
          },
          {
            "stage": "s5",
            "score": 0.946150301805891
          },
          {
            "stage": "s4",
            "score": 0.9442886631740903
          },
          {
            "stage": "s7",
            "score": 0.9242489136733592
          },
          {
            "stage": "s10",
            "score": 0.9150179398828823
          },
          {
            "stage": "s11",
            "score": 0.9007301435365295
          },
          {
            "stage": "s6",
            "score": 0.89756606866804
          },
          {
            "stage": "s9",
            "score": 0.8773060164485884
          },
          {
            "stage": "s8",
            "score": 0.8726203997825759
          },
          {
            "stage": "s0",
            "score": 0.8069205972397628
          }
        ],
        "to": [
          {
            "stage": "s2",
            "score": 0.9873663871854147
          },
          {
            "stage": "s1",
            "score": 0.9591880053694806
          },
          {
            "stage": "s3",
            "score": 0.9516592439233744
          },
          {
            "stage": "s4",
            "score": 0.9325202541430643
          },
          {
            "stage": "s5",
            "score": 0.925647150147337
          },
          {
            "stage": "s10",
            "score": 0.8915634303267903
          },
          {
            "stage": "s7",
            "score": 0.8870289670301094
          },
          {
            "stage": "s11",
            "score": 0.8792863698529574
          },
          {
            "stage": "s6",
            "score": 0.8657329753882735
          },
          {
            "stage": "s8",
            "score": 0.8537679346517788
          },
          {
            "stage": "s9",
            "score": 0.8495511988567688
          },
          {
            "stage": "s0",
            "score": 0.764828215116008
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 2,
      "handoff": "=SUM(1,2)\n\"handoff 2\"",
      "from": "s2",
      "to": "s3",
      "aiFrom": "s2",
      "aiTo": "s3",
      "evidence": {
        "from": [
          {
            "stage": "s2",
            "score": 0.9894015842193999
          },
          {
            "stage": "s1",
            "score": 0.9590796532100473
          },
          {
            "stage": "s3",
            "score": 0.9516765067436602
          },
          {
            "stage": "s4",
            "score": 0.9414566005200621
          },
          {
            "stage": "s5",
            "score": 0.9273048559730852
          },
          {
            "stage": "s7",
            "score": 0.8972994254775204
          },
          {
            "stage": "s10",
            "score": 0.8959214362539034
          },
          {
            "stage": "s11",
            "score": 0.8866908790298007
          },
          {
            "stage": "s6",
            "score": 0.8789386999313087
          },
          {
            "stage": "s8",
            "score": 0.866339842833548
          },
          {
            "stage": "s9",
            "score": 0.8502146741630581
          },
          {
            "stage": "s0",
            "score": 0.7838875575773672
          }
        ],
        "to": [
          {
            "stage": "s3",
            "score": 0.9917731932202595
          },
          {
            "stage": "s1",
            "score": 0.9582922695106874
          },
          {
            "stage": "s2",
            "score": 0.9542361899013719
          },
          {
            "stage": "s4",
            "score": 0.9445565045508351
          },
          {
            "stage": "s5",
            "score": 0.9407576964215998
          },
          {
            "stage": "s7",
            "score": 0.9137831590658032
          },
          {
            "stage": "s10",
            "score": 0.8995810284909094
          },
          {
            "stage": "s6",
            "score": 0.898477999890851
          },
          {
            "stage": "s11",
            "score": 0.8936329919829321
          },
          {
            "stage": "s9",
            "score": 0.8749741582075927
          },
          {
            "stage": "s8",
            "score": 0.8714111142915093
          },
          {
            "stage": "s0",
            "score": 0.7568214589389322
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 3,
      "handoff": "=SUM(1,2)\n\"handoff 3\"",
      "from": "s3",
      "to": "s4",
      "aiFrom": "s3",
      "aiTo": "s4",
      "evidence": {
        "from": [
          {
            "stage": "s3",
            "score": 0.9917731932202595
          },
          {
            "stage": "s1",
            "score": 0.9582922695106874
          },
          {
            "stage": "s2",
            "score": 0.9542361899013719
          },
          {
            "stage": "s4",
            "score": 0.9445565045508351
          },
          {
            "stage": "s5",
            "score": 0.9407576964215998
          },
          {
            "stage": "s7",
            "score": 0.9137831590658032
          },
          {
            "stage": "s10",
            "score": 0.8995810284909094
          },
          {
            "stage": "s6",
            "score": 0.898477999890851
          },
          {
            "stage": "s11",
            "score": 0.8936329919829321
          },
          {
            "stage": "s9",
            "score": 0.8749741582075927
          },
          {
            "stage": "s8",
            "score": 0.8714111142915093
          },
          {
            "stage": "s0",
            "score": 0.7568214589389322
          }
        ],
        "to": [
          {
            "stage": "s4",
            "score": 0.9914347310051935
          },
          {
            "stage": "s3",
            "score": 0.9467618735705841
          },
          {
            "stage": "s5",
            "score": 0.9451481781050048
          },
          {
            "stage": "s1",
            "score": 0.942333459641255
          },
          {
            "stage": "s2",
            "score": 0.9394061915836395
          },
          {
            "stage": "s7",
            "score": 0.9124982953100834
          },
          {
            "stage": "s6",
            "score": 0.9078397454559657
          },
          {
            "stage": "s10",
            "score": 0.8996271973216333
          },
          {
            "stage": "s11",
            "score": 0.8855839390512394
          },
          {
            "stage": "s8",
            "score": 0.8761797777224516
          },
          {
            "stage": "s9",
            "score": 0.8687844037204916
          },
          {
            "stage": "s0",
            "score": 0.7780270479693565
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 4,
      "handoff": "=SUM(1,2)\n\"handoff 4\"",
      "from": "s4",
      "to": "s5",
      "aiFrom": "s4",
      "aiTo": "s5",
      "evidence": {
        "from": [
          {
            "stage": "s4",
            "score": 0.993806063360419
          },
          {
            "stage": "s3",
            "score": 0.9447850853148914
          },
          {
            "stage": "s5",
            "score": 0.9429332642675154
          },
          {
            "stage": "s2",
            "score": 0.9424324286077969
          },
          {
            "stage": "s1",
            "score": 0.9411013958218342
          },
          {
            "stage": "s7",
            "score": 0.9100014840060456
          },
          {
            "stage": "s6",
            "score": 0.9056208788515077
          },
          {
            "stage": "s10",
            "score": 0.9051933024072019
          },
          {
            "stage": "s11",
            "score": 0.8889052327874216
          },
          {
            "stage": "s8",
            "score": 0.8781849825167743
          },
          {
            "stage": "s9",
            "score": 0.8756087853095148
          },
          {
            "stage": "s0",
            "score": 0.7990107906548229
          }
        ],
        "to": [
          {
            "stage": "s5",
            "score": 0.9909688337492745
          },
          {
            "stage": "s1",
            "score": 0.9361265646807301
          },
          {
            "stage": "s4",
            "score": 0.935287715968682
          },
          {
            "stage": "s3",
            "score": 0.9317768287464219
          },
          {
            "stage": "s10",
            "score": 0.9290538532014503
          },
          {
            "stage": "s2",
            "score": 0.9270947805849846
          },
          {
            "stage": "s6",
            "score": 0.9212601330982577
          },
          {
            "stage": "s7",
            "score": 0.9207417444746043
          },
          {
            "stage": "s11",
            "score": 0.9109426501381611
          },
          {
            "stage": "s9",
            "score": 0.8822663709647725
          },
          {
            "stage": "s8",
            "score": 0.8715255386945221
          },
          {
            "stage": "s0",
            "score": 0.8057602615843209
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 5,
      "handoff": "=SUM(1,2)\n\"handoff 5\"",
      "from": "s5",
      "to": "s6",
      "aiFrom": "s5",
      "aiTo": "s6",
      "evidence": {
        "from": [
          {
            "stage": "s5",
            "score": 0.9909688337492745
          },
          {
            "stage": "s1",
            "score": 0.9361265646807301
          },
          {
            "stage": "s4",
            "score": 0.935287715968682
          },
          {
            "stage": "s3",
            "score": 0.9317768287464219
          },
          {
            "stage": "s10",
            "score": 0.9290538532014503
          },
          {
            "stage": "s2",
            "score": 0.9270947805849846
          },
          {
            "stage": "s6",
            "score": 0.9212601330982577
          },
          {
            "stage": "s7",
            "score": 0.9207417444746043
          },
          {
            "stage": "s11",
            "score": 0.9109426501381611
          },
          {
            "stage": "s9",
            "score": 0.8822663709647725
          },
          {
            "stage": "s8",
            "score": 0.8715255386945221
          },
          {
            "stage": "s0",
            "score": 0.8057602615843209
          }
        ],
        "to": [
          {
            "stage": "s6",
            "score": 0.9925903741232751
          },
          {
            "stage": "s5",
            "score": 0.9159679780144553
          },
          {
            "stage": "s7",
            "score": 0.9077218696004086
          },
          {
            "stage": "s4",
            "score": 0.8972855151222726
          },
          {
            "stage": "s10",
            "score": 0.8948828781343202
          },
          {
            "stage": "s3",
            "score": 0.8831429501730178
          },
          {
            "stage": "s1",
            "score": 0.8831303907188923
          },
          {
            "stage": "s11",
            "score": 0.8831038104889668
          },
          {
            "stage": "s2",
            "score": 0.875259230556413
          },
          {
            "stage": "s9",
            "score": 0.8597344945543655
          },
          {
            "stage": "s8",
            "score": 0.8534199915371172
          },
          {
            "stage": "s0",
            "score": 0.7908188072797235
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 6,
      "handoff": "=SUM(1,2)\n\"handoff 6\"",
      "from": "s6",
      "to": "s7",
      "aiFrom": "s6",
      "aiTo": "s7",
      "evidence": {
        "from": [
          {
            "stage": "s6",
            "score": 0.9917266438313421
          },
          {
            "stage": "s5",
            "score": 0.9372959372657444
          },
          {
            "stage": "s4",
            "score": 0.9207924812930606
          },
          {
            "stage": "s7",
            "score": 0.9206373497464201
          },
          {
            "stage": "s1",
            "score": 0.9110397943854383
          },
          {
            "stage": "s10",
            "score": 0.9107746206282222
          },
          {
            "stage": "s3",
            "score": 0.9095395404535448
          },
          {
            "stage": "s2",
            "score": 0.9038458456853075
          },
          {
            "stage": "s11",
            "score": 0.8999354142688338
          },
          {
            "stage": "s9",
            "score": 0.8798108332290389
          },
          {
            "stage": "s8",
            "score": 0.8668406989108699
          },
          {
            "stage": "s0",
            "score": 0.8026592612250111
          }
        ],
        "to": [
          {
            "stage": "s7",
            "score": 0.9909514789443312
          },
          {
            "stage": "s5",
            "score": 0.9329169456760912
          },
          {
            "stage": "s1",
            "score": 0.9207031484984954
          },
          {
            "stage": "s4",
            "score": 0.9154079578268612
          },
          {
            "stage": "s6",
            "score": 0.9152777392564275
          },
          {
            "stage": "s3",
            "score": 0.9117129833727786
          },
          {
            "stage": "s2",
            "score": 0.9055231946937731
          },
          {
            "stage": "s10",
            "score": 0.8995549584238263
          },
          {
            "stage": "s11",
            "score": 0.8969831807540505
          },
          {
            "stage": "s8",
            "score": 0.8837860963646572
          },
          {
            "stage": "s9",
            "score": 0.8801431896108197
          },
          {
            "stage": "s0",
            "score": 0.7631587723448288
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 7,
      "handoff": "=SUM(1,2)\n\"handoff 7\"",
      "from": "s7",
      "to": "s8",
      "aiFrom": "s7",
      "aiTo": "s8",
      "evidence": {
        "from": [
          {
            "stage": "s7",
            "score": 0.9909514789443312
          },
          {
            "stage": "s5",
            "score": 0.9329169456760912
          },
          {
            "stage": "s1",
            "score": 0.9207031484984954
          },
          {
            "stage": "s4",
            "score": 0.9154079578268612
          },
          {
            "stage": "s6",
            "score": 0.9152777392564275
          },
          {
            "stage": "s3",
            "score": 0.9117129833727786
          },
          {
            "stage": "s2",
            "score": 0.9055231946937731
          },
          {
            "stage": "s10",
            "score": 0.8995549584238263
          },
          {
            "stage": "s11",
            "score": 0.8969831807540505
          },
          {
            "stage": "s8",
            "score": 0.8837860963646572
          },
          {
            "stage": "s9",
            "score": 0.8801431896108197
          },
          {
            "stage": "s0",
            "score": 0.7631587723448288
          }
        ],
        "to": [
          {
            "stage": "s8",
            "score": 0.9906296024937248
          },
          {
            "stage": "s7",
            "score": 0.868789236219343
          },
          {
            "stage": "s4",
            "score": 0.8659496007796741
          },
          {
            "stage": "s9",
            "score": 0.8658561733205229
          },
          {
            "stage": "s11",
            "score": 0.8617071121360531
          },
          {
            "stage": "s5",
            "score": 0.8612814286101459
          },
          {
            "stage": "s10",
            "score": 0.8604315954434678
          },
          {
            "stage": "s1",
            "score": 0.8573758727502685
          },
          {
            "stage": "s6",
            "score": 0.8516475170538762
          },
          {
            "stage": "s3",
            "score": 0.8506471477432742
          },
          {
            "stage": "s2",
            "score": 0.8505138286220566
          },
          {
            "stage": "s0",
            "score": 0.7596606289121342
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 8,
      "handoff": "=SUM(1,2)\n\"handoff 8\"",
      "from": "s8",
      "to": "s9",
      "aiFrom": "s8",
      "aiTo": "s9",
      "evidence": {
        "from": [
          {
            "stage": "s8",
            "score": 0.9953103546043008
          },
          {
            "stage": "s7",
            "score": 0.8813039885803741
          },
          {
            "stage": "s5",
            "score": 0.8810366665431967
          },
          {
            "stage": "s10",
            "score": 0.8801210839737321
          },
          {
            "stage": "s11",
            "score": 0.8797944248371729
          },
          {
            "stage": "s4",
            "score": 0.8797637666372604
          },
          {
            "stage": "s9",
            "score": 0.8787879484457064
          },
          {
            "stage": "s1",
            "score": 0.8739375978295956
          },
          {
            "stage": "s2",
            "score": 0.8733589874382821
          },
          {
            "stage": "s3",
            "score": 0.8719397583787399
          },
          {
            "stage": "s6",
            "score": 0.8704006281845597
          },
          {
            "stage": "s0",
            "score": 0.7649145266527988
          }
        ],
        "to": [
          {
            "stage": "s9",
            "score": 0.9944887478951141
          },
          {
            "stage": "s10",
            "score": 0.9392818523358739
          },
          {
            "stage": "s11",
            "score": 0.9175675347918777
          },
          {
            "stage": "s5",
            "score": 0.8939442320160844
          },
          {
            "stage": "s7",
            "score": 0.8875974934694452
          },
          {
            "stage": "s8",
            "score": 0.884852060776548
          },
          {
            "stage": "s4",
            "score": 0.8789768911806203
          },
          {
            "stage": "s1",
            "score": 0.8785802740735931
          },
          {
            "stage": "s3",
            "score": 0.8765432633969158
          },
          {
            "stage": "s6",
            "score": 0.8735168760677693
          },
          {
            "stage": "s2",
            "score": 0.8697000597121582
          },
          {
            "stage": "s0",
            "score": 0.78193136986723
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 9,
      "handoff": "=SUM(1,2)\n\"handoff 9\"",
      "from": "s9",
      "to": "s10",
      "aiFrom": "s9",
      "aiTo": "s10",
      "evidence": {
        "from": [
          {
            "stage": "s9",
            "score": 0.9944887478951141
          },
          {
            "stage": "s10",
            "score": 0.9392818523358739
          },
          {
            "stage": "s11",
            "score": 0.9175675347918777
          },
          {
            "stage": "s5",
            "score": 0.8939442320160844
          },
          {
            "stage": "s7",
            "score": 0.8875974934694452
          },
          {
            "stage": "s8",
            "score": 0.884852060776548
          },
          {
            "stage": "s4",
            "score": 0.8789768911806203
          },
          {
            "stage": "s1",
            "score": 0.8785802740735931
          },
          {
            "stage": "s3",
            "score": 0.8765432633969158
          },
          {
            "stage": "s6",
            "score": 0.8735168760677693
          },
          {
            "stage": "s2",
            "score": 0.8697000597121582
          },
          {
            "stage": "s0",
            "score": 0.78193136986723
          }
        ],
        "to": [
          {
            "stage": "s10",
            "score": 0.9935105461734766
          },
          {
            "stage": "s9",
            "score": 0.9416796938865468
          },
          {
            "stage": "s11",
            "score": 0.9413554405231059
          },
          {
            "stage": "s5",
            "score": 0.9309189152863117
          },
          {
            "stage": "s1",
            "score": 0.9126030324893958
          },
          {
            "stage": "s2",
            "score": 0.9021756415555529
          },
          {
            "stage": "s4",
            "score": 0.9005956871495471
          },
          {
            "stage": "s6",
            "score": 0.8956356614602118
          },
          {
            "stage": "s3",
            "score": 0.8915794656334284
          },
          {
            "stage": "s7",
            "score": 0.8871932053717859
          },
          {
            "stage": "s8",
            "score": 0.8696467486957823
          },
          {
            "stage": "s0",
            "score": 0.8272951944028334
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 10,
      "handoff": "=SUM(1,2)\n\"handoff 10\"",
      "from": "s10",
      "to": "s11",
      "aiFrom": "s10",
      "aiTo": "s11",
      "evidence": {
        "from": [
          {
            "stage": "s10",
            "score": 0.9930809276297937
          },
          {
            "stage": "s11",
            "score": 0.943922334383611
          },
          {
            "stage": "s9",
            "score": 0.9416467644745027
          },
          {
            "stage": "s5",
            "score": 0.9371241193102364
          },
          {
            "stage": "s1",
            "score": 0.9169639445347502
          },
          {
            "stage": "s4",
            "score": 0.9094668120540972
          },
          {
            "stage": "s2",
            "score": 0.9066293241384432
          },
          {
            "stage": "s6",
            "score": 0.9065046536462186
          },
          {
            "stage": "s7",
            "score": 0.896835352995505
          },
          {
            "stage": "s3",
            "score": 0.8961667343003927
          },
          {
            "stage": "s8",
            "score": 0.8781671030051196
          },
          {
            "stage": "s0",
            "score": 0.8315999723521457
          }
        ],
        "to": [
          {
            "stage": "s11",
            "score": 0.9907574946758712
          },
          {
            "stage": "s10",
            "score": 0.9421375287438876
          },
          {
            "stage": "s5",
            "score": 0.9239520970439338
          },
          {
            "stage": "s9",
            "score": 0.9176298048444788
          },
          {
            "stage": "s1",
            "score": 0.912099440606451
          },
          {
            "stage": "s4",
            "score": 0.904670216366769
          },
          {
            "stage": "s2",
            "score": 0.9032459438310942
          },
          {
            "stage": "s7",
            "score": 0.90193478713141
          },
          {
            "stage": "s6",
            "score": 0.9006209098759596
          },
          {
            "stage": "s3",
            "score": 0.900006096667302
          },
          {
            "stage": "s8",
            "score": 0.8823934110565654
          },
          {
            "stage": "s0",
            "score": 0.8182680158876466
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 11,
      "handoff": "=SUM(1,2)\n\"handoff 11\"",
      "from": "s0",
      "to": "s1",
      "aiFrom": "s0",
      "aiTo": "s1",
      "evidence": {
        "from": [
          {
            "stage": "s0",
            "score": 0.989365739002616
          },
          {
            "stage": "s10",
            "score": 0.8058648271611321
          },
          {
            "stage": "s11",
            "score": 0.7929614795503885
          },
          {
            "stage": "s1",
            "score": 0.7923694064151539
          },
          {
            "stage": "s5",
            "score": 0.7773616468548995
          },
          {
            "stage": "s4",
            "score": 0.7759076633474049
          },
          {
            "stage": "s9",
            "score": 0.7707656267706762
          },
          {
            "stage": "s2",
            "score": 0.7681753316307868
          },
          {
            "stage": "s6",
            "score": 0.7592835651194065
          },
          {
            "stage": "s7",
            "score": 0.7499688891294952
          },
          {
            "stage": "s3",
            "score": 0.7406726893767888
          },
          {
            "stage": "s8",
            "score": 0.7406426075198624
          }
        ],
        "to": [
          {
            "stage": "s1",
            "score": 0.9896921217836094
          },
          {
            "stage": "s2",
            "score": 0.9620329693956882
          },
          {
            "stage": "s3",
            "score": 0.9519661705352045
          },
          {
            "stage": "s5",
            "score": 0.9431536253318978
          },
          {
            "stage": "s4",
            "score": 0.9420869732417969
          },
          {
            "stage": "s10",
            "score": 0.9198578894842729
          },
          {
            "stage": "s7",
            "score": 0.9183079516580929
          },
          {
            "stage": "s11",
            "score": 0.9064779364381031
          },
          {
            "stage": "s6",
            "score": 0.8947254758828036
          },
          {
            "stage": "s9",
            "score": 0.8790967322396883
          },
          {
            "stage": "s8",
            "score": 0.8728385928220372
          },
          {
            "stage": "s0",
            "score": 0.8310225633676845
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 12,
      "handoff": "=SUM(1,2)\n\"handoff 12\"",
      "from": "s1",
      "to": "s2",
      "aiFrom": "s1",
      "aiTo": "s2",
      "evidence": {
        "from": [
          {
            "stage": "s1",
            "score": 0.9931022846471943
          },
          {
            "stage": "s3",
            "score": 0.9580423167344139
          },
          {
            "stage": "s2",
            "score": 0.9579034467965347
          },
          {
            "stage": "s5",
            "score": 0.9447271266379346
          },
          {
            "stage": "s4",
            "score": 0.9438466683424167
          },
          {
            "stage": "s7",
            "score": 0.9242428387464522
          },
          {
            "stage": "s10",
            "score": 0.9138924690570975
          },
          {
            "stage": "s11",
            "score": 0.8996018638559014
          },
          {
            "stage": "s6",
            "score": 0.8980549811192153
          },
          {
            "stage": "s9",
            "score": 0.8758415446198498
          },
          {
            "stage": "s8",
            "score": 0.8722818100131068
          },
          {
            "stage": "s0",
            "score": 0.8061864219557165
          }
        ],
        "to": [
          {
            "stage": "s2",
            "score": 0.9922257211056376
          },
          {
            "stage": "s1",
            "score": 0.9627282211869221
          },
          {
            "stage": "s3",
            "score": 0.9561063305732268
          },
          {
            "stage": "s4",
            "score": 0.9394261248873005
          },
          {
            "stage": "s5",
            "score": 0.9318417714544251
          },
          {
            "stage": "s7",
            "score": 0.907235091344687
          },
          {
            "stage": "s10",
            "score": 0.9026198342851207
          },
          {
            "stage": "s11",
            "score": 0.8943520022092389
          },
          {
            "stage": "s6",
            "score": 0.8890444870753943
          },
          {
            "stage": "s8",
            "score": 0.8697982947854828
          },
          {
            "stage": "s9",
            "score": 0.8630981316568568
          },
          {
            "stage": "s0",
            "score": 0.7874752979846026
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 13,
      "handoff": "=SUM(1,2)\n\"handoff 13\"",
      "from": "s2",
      "to": "s3",
      "aiFrom": "s2",
      "aiTo": "s3",
      "evidence": {
        "from": [
          {
            "stage": "s2",
            "score": 0.9922257211056376
          },
          {
            "stage": "s1",
            "score": 0.9627282211869221
          },
          {
            "stage": "s3",
            "score": 0.9561063305732268
          },
          {
            "stage": "s4",
            "score": 0.9394261248873005
          },
          {
            "stage": "s5",
            "score": 0.9318417714544251
          },
          {
            "stage": "s7",
            "score": 0.907235091344687
          },
          {
            "stage": "s10",
            "score": 0.9026198342851207
          },
          {
            "stage": "s11",
            "score": 0.8943520022092389
          },
          {
            "stage": "s6",
            "score": 0.8890444870753943
          },
          {
            "stage": "s8",
            "score": 0.8697982947854828
          },
          {
            "stage": "s9",
            "score": 0.8630981316568568
          },
          {
            "stage": "s0",
            "score": 0.7874752979846026
          }
        ],
        "to": [
          {
            "stage": "s3",
            "score": 0.9919428243582973
          },
          {
            "stage": "s2",
            "score": 0.949652412571433
          },
          {
            "stage": "s1",
            "score": 0.9493205524298485
          },
          {
            "stage": "s4",
            "score": 0.9403148046201796
          },
          {
            "stage": "s5",
            "score": 0.9346435114013342
          },
          {
            "stage": "s7",
            "score": 0.9008980466083688
          },
          {
            "stage": "s10",
            "score": 0.8931159172019315
          },
          {
            "stage": "s11",
            "score": 0.8917367494926621
          },
          {
            "stage": "s6",
            "score": 0.8904160256715902
          },
          {
            "stage": "s9",
            "score": 0.8675780446710313
          },
          {
            "stage": "s8",
            "score": 0.8639306004787934
          },
          {
            "stage": "s0",
            "score": 0.7551730939696647
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 14,
      "handoff": "=SUM(1,2)\n\"handoff 14\"",
      "from": "s3",
      "to": "s4",
      "aiFrom": "s3",
      "aiTo": "s4",
      "evidence": {
        "from": [
          {
            "stage": "s3",
            "score": 0.9923993900979294
          },
          {
            "stage": "s1",
            "score": 0.960851560503131
          },
          {
            "stage": "s2",
            "score": 0.9575269486132099
          },
          {
            "stage": "s4",
            "score": 0.9492903193167654
          },
          {
            "stage": "s5",
            "score": 0.9409301103813098
          },
          {
            "stage": "s7",
            "score": 0.9107259775757892
          },
          {
            "stage": "s10",
            "score": 0.9013665478063566
          },
          {
            "stage": "s6",
            "score": 0.8976852009691473
          },
          {
            "stage": "s11",
            "score": 0.8942212330317612
          },
          {
            "stage": "s9",
            "score": 0.874515122443381
          },
          {
            "stage": "s8",
            "score": 0.8716470101460208
          },
          {
            "stage": "s0",
            "score": 0.762869218701895
          }
        ],
        "to": [
          {
            "stage": "s4",
            "score": 0.9905376243027499
          },
          {
            "stage": "s5",
            "score": 0.9425702969307393
          },
          {
            "stage": "s3",
            "score": 0.9421581684734908
          },
          {
            "stage": "s2",
            "score": 0.9377355481475543
          },
          {
            "stage": "s1",
            "score": 0.9363653703358573
          },
          {
            "stage": "s7",
            "score": 0.9062740570045024
          },
          {
            "stage": "s6",
            "score": 0.9041726649001557
          },
          {
            "stage": "s10",
            "score": 0.8974167569552017
          },
          {
            "stage": "s11",
            "score": 0.8811037126469473
          },
          {
            "stage": "s8",
            "score": 0.8751112071219226
          },
          {
            "stage": "s9",
            "score": 0.8632845613955231
          },
          {
            "stage": "s0",
            "score": 0.7772386505358565
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 15,
      "handoff": "=SUM(1,2)\n\"handoff 15\"",
      "from": "s4",
      "to": "s5",
      "aiFrom": "s4",
      "aiTo": "s5",
      "evidence": {
        "from": [
          {
            "stage": "s4",
            "score": 0.9905376243027499
          },
          {
            "stage": "s5",
            "score": 0.9425702969307393
          },
          {
            "stage": "s3",
            "score": 0.9421581684734908
          },
          {
            "stage": "s2",
            "score": 0.9377355481475543
          },
          {
            "stage": "s1",
            "score": 0.9363653703358573
          },
          {
            "stage": "s7",
            "score": 0.9062740570045024
          },
          {
            "stage": "s6",
            "score": 0.9041726649001557
          },
          {
            "stage": "s10",
            "score": 0.8974167569552017
          },
          {
            "stage": "s11",
            "score": 0.8811037126469473
          },
          {
            "stage": "s8",
            "score": 0.8751112071219226
          },
          {
            "stage": "s9",
            "score": 0.8632845613955231
          },
          {
            "stage": "s0",
            "score": 0.7772386505358565
          }
        ],
        "to": [
          {
            "stage": "s5",
            "score": 0.9923282833865004
          },
          {
            "stage": "s1",
            "score": 0.9395285453911245
          },
          {
            "stage": "s4",
            "score": 0.9391098612639371
          },
          {
            "stage": "s3",
            "score": 0.935885487695986
          },
          {
            "stage": "s2",
            "score": 0.9312399381722762
          },
          {
            "stage": "s10",
            "score": 0.9291740813409866
          },
          {
            "stage": "s6",
            "score": 0.9241542743120065
          },
          {
            "stage": "s7",
            "score": 0.9234438258023172
          },
          {
            "stage": "s11",
            "score": 0.9113690090841674
          },
          {
            "stage": "s9",
            "score": 0.8805544093905565
          },
          {
            "stage": "s8",
            "score": 0.8745226908899966
          },
          {
            "stage": "s0",
            "score": 0.7979848936830032
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 16,
      "handoff": "=SUM(1,2)\n\"handoff 16\"",
      "from": "s5",
      "to": "s6",
      "aiFrom": "s5",
      "aiTo": "s6",
      "evidence": {
        "from": [
          {
            "stage": "s5",
            "score": 0.9928683297212124
          },
          {
            "stage": "s4",
            "score": 0.9346925175009841
          },
          {
            "stage": "s1",
            "score": 0.9346137898485993
          },
          {
            "stage": "s3",
            "score": 0.9340164766112085
          },
          {
            "stage": "s10",
            "score": 0.9261957387751057
          },
          {
            "stage": "s2",
            "score": 0.926167584598145
          },
          {
            "stage": "s6",
            "score": 0.9216086838538273
          },
          {
            "stage": "s7",
            "score": 0.9212599457110519
          },
          {
            "stage": "s11",
            "score": 0.9088052461892412
          },
          {
            "stage": "s9",
            "score": 0.8799755060503455
          },
          {
            "stage": "s8",
            "score": 0.8671301104784984
          },
          {
            "stage": "s0",
            "score": 0.7937173490943548
          }
        ],
        "to": [
          {
            "stage": "s6",
            "score": 0.9950072616050415
          },
          {
            "stage": "s5",
            "score": 0.9312351357357199
          },
          {
            "stage": "s7",
            "score": 0.9212811263174014
          },
          {
            "stage": "s4",
            "score": 0.9166360161699237
          },
          {
            "stage": "s3",
            "score": 0.9035907097322183
          },
          {
            "stage": "s10",
            "score": 0.9027459704127309
          },
          {
            "stage": "s1",
            "score": 0.9021329688030275
          },
          {
            "stage": "s2",
            "score": 0.8953608123919741
          },
          {
            "stage": "s11",
            "score": 0.8920516395520858
          },
          {
            "stage": "s9",
            "score": 0.8721129434076653
          },
          {
            "stage": "s8",
            "score": 0.8678177931385094
          },
          {
            "stage": "s0",
            "score": 0.7860558431566579
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 17,
      "handoff": "=SUM(1,2)\n\"handoff 17\"",
      "from": "s6",
      "to": "s7",
      "aiFrom": "s6",
      "aiTo": "s7",
      "evidence": {
        "from": [
          {
            "stage": "s6",
            "score": 0.9950072616050415
          },
          {
            "stage": "s5",
            "score": 0.9312351357357199
          },
          {
            "stage": "s7",
            "score": 0.9212811263174014
          },
          {
            "stage": "s4",
            "score": 0.9166360161699237
          },
          {
            "stage": "s3",
            "score": 0.9035907097322183
          },
          {
            "stage": "s10",
            "score": 0.9027459704127309
          },
          {
            "stage": "s1",
            "score": 0.9021329688030275
          },
          {
            "stage": "s2",
            "score": 0.8953608123919741
          },
          {
            "stage": "s11",
            "score": 0.8920516395520858
          },
          {
            "stage": "s9",
            "score": 0.8721129434076653
          },
          {
            "stage": "s8",
            "score": 0.8678177931385094
          },
          {
            "stage": "s0",
            "score": 0.7860558431566579
          }
        ],
        "to": [
          {
            "stage": "s7",
            "score": 0.9927936153204684
          },
          {
            "stage": "s5",
            "score": 0.9360794634146149
          },
          {
            "stage": "s1",
            "score": 0.9334790512753719
          },
          {
            "stage": "s3",
            "score": 0.9238988355549428
          },
          {
            "stage": "s4",
            "score": 0.92308153090757
          },
          {
            "stage": "s6",
            "score": 0.9160577688274991
          },
          {
            "stage": "s2",
            "score": 0.9140748167630477
          },
          {
            "stage": "s10",
            "score": 0.9009972075937964
          },
          {
            "stage": "s11",
            "score": 0.8970473020183563
          },
          {
            "stage": "s8",
            "score": 0.8858182234984128
          },
          {
            "stage": "s9",
            "score": 0.8821303093946551
          },
          {
            "stage": "s0",
            "score": 0.771057357365176
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 18,
      "handoff": "=SUM(1,2)\n\"handoff 18\"",
      "from": "s7",
      "to": "s8",
      "aiFrom": "s7",
      "aiTo": "s8",
      "evidence": {
        "from": [
          {
            "stage": "s7",
            "score": 0.990532733222512
          },
          {
            "stage": "s5",
            "score": 0.925182703685118
          },
          {
            "stage": "s1",
            "score": 0.9189043195945769
          },
          {
            "stage": "s3",
            "score": 0.9097079005066078
          },
          {
            "stage": "s4",
            "score": 0.908610964350244
          },
          {
            "stage": "s6",
            "score": 0.9066701141331729
          },
          {
            "stage": "s2",
            "score": 0.9005512496623509
          },
          {
            "stage": "s10",
            "score": 0.8932869677159265
          },
          {
            "stage": "s11",
            "score": 0.8874678746313251
          },
          {
            "stage": "s8",
            "score": 0.885790050558887
          },
          {
            "stage": "s9",
            "score": 0.8781239961909132
          },
          {
            "stage": "s0",
            "score": 0.761222321012291
          }
        ],
        "to": [
          {
            "stage": "s8",
            "score": 0.9906678992844944
          },
          {
            "stage": "s7",
            "score": 0.8674675541249172
          },
          {
            "stage": "s11",
            "score": 0.8627499545682075
          },
          {
            "stage": "s9",
            "score": 0.8623142614979328
          },
          {
            "stage": "s4",
            "score": 0.8606218381283963
          },
          {
            "stage": "s10",
            "score": 0.859136238518267
          },
          {
            "stage": "s5",
            "score": 0.8582532592705095
          },
          {
            "stage": "s1",
            "score": 0.8525867651857659
          },
          {
            "stage": "s2",
            "score": 0.8515623051828314
          },
          {
            "stage": "s6",
            "score": 0.8507976810001798
          },
          {
            "stage": "s3",
            "score": 0.8501858441276599
          },
          {
            "stage": "s0",
            "score": 0.7468801125348749
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 19,
      "handoff": "=SUM(1,2)\n\"handoff 19\"",
      "from": "s8",
      "to": "s9",
      "aiFrom": "s8",
      "aiTo": "s9",
      "evidence": {
        "from": [
          {
            "stage": "s8",
            "score": 0.9906678992844944
          },
          {
            "stage": "s7",
            "score": 0.8674675541249172
          },
          {
            "stage": "s11",
            "score": 0.8627499545682075
          },
          {
            "stage": "s9",
            "score": 0.8623142614979328
          },
          {
            "stage": "s4",
            "score": 0.8606218381283963
          },
          {
            "stage": "s10",
            "score": 0.859136238518267
          },
          {
            "stage": "s5",
            "score": 0.8582532592705095
          },
          {
            "stage": "s1",
            "score": 0.8525867651857659
          },
          {
            "stage": "s2",
            "score": 0.8515623051828314
          },
          {
            "stage": "s6",
            "score": 0.8507976810001798
          },
          {
            "stage": "s3",
            "score": 0.8501858441276599
          },
          {
            "stage": "s0",
            "score": 0.7468801125348749
          }
        ],
        "to": [
          {
            "stage": "s9",
            "score": 0.990247952419784
          },
          {
            "stage": "s10",
            "score": 0.9346521853162721
          },
          {
            "stage": "s11",
            "score": 0.9156650118407
          },
          {
            "stage": "s5",
            "score": 0.886029458783079
          },
          {
            "stage": "s8",
            "score": 0.8801998771940097
          },
          {
            "stage": "s7",
            "score": 0.8793996459433926
          },
          {
            "stage": "s4",
            "score": 0.8728881536533571
          },
          {
            "stage": "s6",
            "score": 0.8703953578680081
          },
          {
            "stage": "s1",
            "score": 0.8688376127706279
          },
          {
            "stage": "s3",
            "score": 0.8649438018591127
          },
          {
            "stage": "s2",
            "score": 0.857431959794413
          },
          {
            "stage": "s0",
            "score": 0.778642009065043
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 20,
      "handoff": "=SUM(1,2)\n\"handoff 20\"",
      "from": "s9",
      "to": "s10",
      "aiFrom": "s9",
      "aiTo": "s10",
      "evidence": {
        "from": [
          {
            "stage": "s9",
            "score": 0.9927239970847268
          },
          {
            "stage": "s10",
            "score": 0.9391346926827582
          },
          {
            "stage": "s11",
            "score": 0.9202976296158765
          },
          {
            "stage": "s5",
            "score": 0.8926886721894044
          },
          {
            "stage": "s7",
            "score": 0.8817902633940522
          },
          {
            "stage": "s8",
            "score": 0.881671876742342
          },
          {
            "stage": "s4",
            "score": 0.8773823385310145
          },
          {
            "stage": "s6",
            "score": 0.8749996631299263
          },
          {
            "stage": "s1",
            "score": 0.8739877538618024
          },
          {
            "stage": "s3",
            "score": 0.8698770048217987
          },
          {
            "stage": "s2",
            "score": 0.8652044488270054
          },
          {
            "stage": "s0",
            "score": 0.7882030600955142
          }
        ],
        "to": [
          {
            "stage": "s10",
            "score": 0.9928595324439866
          },
          {
            "stage": "s11",
            "score": 0.9376703313922786
          },
          {
            "stage": "s9",
            "score": 0.9342423007101534
          },
          {
            "stage": "s5",
            "score": 0.9275788453181029
          },
          {
            "stage": "s1",
            "score": 0.907374821028067
          },
          {
            "stage": "s6",
            "score": 0.8958056446071363
          },
          {
            "stage": "s2",
            "score": 0.8953544456700703
          },
          {
            "stage": "s4",
            "score": 0.8951888674653177
          },
          {
            "stage": "s7",
            "score": 0.8889792948129821
          },
          {
            "stage": "s3",
            "score": 0.8856428064772188
          },
          {
            "stage": "s8",
            "score": 0.8714396996872076
          },
          {
            "stage": "s0",
            "score": 0.8185839550513268
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 21,
      "handoff": "=SUM(1,2)\n\"handoff 21\"",
      "from": "s10",
      "to": "s11",
      "aiFrom": "s10",
      "aiTo": "s11",
      "evidence": {
        "from": [
          {
            "stage": "s10",
            "score": 0.9928595324439866
          },
          {
            "stage": "s11",
            "score": 0.9376703313922786
          },
          {
            "stage": "s9",
            "score": 0.9342423007101534
          },
          {
            "stage": "s5",
            "score": 0.9275788453181029
          },
          {
            "stage": "s1",
            "score": 0.907374821028067
          },
          {
            "stage": "s6",
            "score": 0.8958056446071363
          },
          {
            "stage": "s2",
            "score": 0.8953544456700703
          },
          {
            "stage": "s4",
            "score": 0.8951888674653177
          },
          {
            "stage": "s7",
            "score": 0.8889792948129821
          },
          {
            "stage": "s3",
            "score": 0.8856428064772188
          },
          {
            "stage": "s8",
            "score": 0.8714396996872076
          },
          {
            "stage": "s0",
            "score": 0.8185839550513268
          }
        ],
        "to": [
          {
            "stage": "s11",
            "score": 0.9927102757355737
          },
          {
            "stage": "s10",
            "score": 0.9445527009356276
          },
          {
            "stage": "s5",
            "score": 0.9192124837033948
          },
          {
            "stage": "s9",
            "score": 0.9173992425018725
          },
          {
            "stage": "s1",
            "score": 0.9063578378537994
          },
          {
            "stage": "s2",
            "score": 0.8991201304487475
          },
          {
            "stage": "s3",
            "score": 0.8965460631995982
          },
          {
            "stage": "s4",
            "score": 0.8945659851244728
          },
          {
            "stage": "s6",
            "score": 0.8927361576452307
          },
          {
            "stage": "s7",
            "score": 0.8921126466298283
          },
          {
            "stage": "s8",
            "score": 0.8772663328233427
          },
          {
            "stage": "s0",
            "score": 0.8149410718927708
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 22,
      "handoff": "=SUM(1,2)\n\"handoff 22\"",
      "from": "s0",
      "to": "s1",
      "aiFrom": "s0",
      "aiTo": "s1",
      "evidence": {
        "from": [
          {
            "stage": "s0",
            "score": 0.9903431490738062
          },
          {
            "stage": "s10",
            "score": 0.8262225260157542
          },
          {
            "stage": "s1",
            "score": 0.8204729983179047
          },
          {
            "stage": "s11",
            "score": 0.8074140941929899
          },
          {
            "stage": "s5",
            "score": 0.8022059178935181
          },
          {
            "stage": "s4",
            "score": 0.7970844349856463
          },
          {
            "stage": "s2",
            "score": 0.7961013252970048
          },
          {
            "stage": "s9",
            "score": 0.7856510832975732
          },
          {
            "stage": "s6",
            "score": 0.7812591834291817
          },
          {
            "stage": "s3",
            "score": 0.7687800978262553
          },
          {
            "stage": "s7",
            "score": 0.7668657670869088
          },
          {
            "stage": "s8",
            "score": 0.7598577630077296
          }
        ],
        "to": [
          {
            "stage": "s1",
            "score": 0.9925398704489826
          },
          {
            "stage": "s3",
            "score": 0.960313549363061
          },
          {
            "stage": "s2",
            "score": 0.9601645989950637
          },
          {
            "stage": "s5",
            "score": 0.946150301805891
          },
          {
            "stage": "s4",
            "score": 0.9442886631740903
          },
          {
            "stage": "s7",
            "score": 0.9242489136733592
          },
          {
            "stage": "s10",
            "score": 0.9150179398828823
          },
          {
            "stage": "s11",
            "score": 0.9007301435365295
          },
          {
            "stage": "s6",
            "score": 0.89756606866804
          },
          {
            "stage": "s9",
            "score": 0.8773060164485884
          },
          {
            "stage": "s8",
            "score": 0.8726203997825759
          },
          {
            "stage": "s0",
            "score": 0.8069205972397628
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 23,
      "handoff": "=SUM(1,2)\n\"handoff 23\"",
      "from": "s1",
      "to": "s2",
      "aiFrom": "s1",
      "aiTo": "s2",
      "evidence": {
        "from": [
          {
            "stage": "s1",
            "score": 0.9925398704489826
          },
          {
            "stage": "s3",
            "score": 0.960313549363061
          },
          {
            "stage": "s2",
            "score": 0.9601645989950637
          },
          {
            "stage": "s5",
            "score": 0.946150301805891
          },
          {
            "stage": "s4",
            "score": 0.9442886631740903
          },
          {
            "stage": "s7",
            "score": 0.9242489136733592
          },
          {
            "stage": "s10",
            "score": 0.9150179398828823
          },
          {
            "stage": "s11",
            "score": 0.9007301435365295
          },
          {
            "stage": "s6",
            "score": 0.89756606866804
          },
          {
            "stage": "s9",
            "score": 0.8773060164485884
          },
          {
            "stage": "s8",
            "score": 0.8726203997825759
          },
          {
            "stage": "s0",
            "score": 0.8069205972397628
          }
        ],
        "to": [
          {
            "stage": "s2",
            "score": 0.9873663871854147
          },
          {
            "stage": "s1",
            "score": 0.9591880053694806
          },
          {
            "stage": "s3",
            "score": 0.9516592439233744
          },
          {
            "stage": "s4",
            "score": 0.9325202541430643
          },
          {
            "stage": "s5",
            "score": 0.925647150147337
          },
          {
            "stage": "s10",
            "score": 0.8915634303267903
          },
          {
            "stage": "s7",
            "score": 0.8870289670301094
          },
          {
            "stage": "s11",
            "score": 0.8792863698529574
          },
          {
            "stage": "s6",
            "score": 0.8657329753882735
          },
          {
            "stage": "s8",
            "score": 0.8537679346517788
          },
          {
            "stage": "s9",
            "score": 0.8495511988567688
          },
          {
            "stage": "s0",
            "score": 0.764828215116008
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 24,
      "handoff": "=SUM(1,2)\n\"handoff 24\"",
      "from": "s2",
      "to": "s3",
      "aiFrom": "s2",
      "aiTo": "s3",
      "evidence": {
        "from": [
          {
            "stage": "s2",
            "score": 0.9894015842193999
          },
          {
            "stage": "s1",
            "score": 0.9590796532100473
          },
          {
            "stage": "s3",
            "score": 0.9516765067436602
          },
          {
            "stage": "s4",
            "score": 0.9414566005200621
          },
          {
            "stage": "s5",
            "score": 0.9273048559730852
          },
          {
            "stage": "s7",
            "score": 0.8972994254775204
          },
          {
            "stage": "s10",
            "score": 0.8959214362539034
          },
          {
            "stage": "s11",
            "score": 0.8866908790298007
          },
          {
            "stage": "s6",
            "score": 0.8789386999313087
          },
          {
            "stage": "s8",
            "score": 0.866339842833548
          },
          {
            "stage": "s9",
            "score": 0.8502146741630581
          },
          {
            "stage": "s0",
            "score": 0.7838875575773672
          }
        ],
        "to": [
          {
            "stage": "s3",
            "score": 0.9917731932202595
          },
          {
            "stage": "s1",
            "score": 0.9582922695106874
          },
          {
            "stage": "s2",
            "score": 0.9542361899013719
          },
          {
            "stage": "s4",
            "score": 0.9445565045508351
          },
          {
            "stage": "s5",
            "score": 0.9407576964215998
          },
          {
            "stage": "s7",
            "score": 0.9137831590658032
          },
          {
            "stage": "s10",
            "score": 0.8995810284909094
          },
          {
            "stage": "s6",
            "score": 0.898477999890851
          },
          {
            "stage": "s11",
            "score": 0.8936329919829321
          },
          {
            "stage": "s9",
            "score": 0.8749741582075927
          },
          {
            "stage": "s8",
            "score": 0.8714111142915093
          },
          {
            "stage": "s0",
            "score": 0.7568214589389322
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 25,
      "handoff": "=SUM(1,2)\n\"handoff 25\"",
      "from": "s3",
      "to": "s4",
      "aiFrom": "s3",
      "aiTo": "s4",
      "evidence": {
        "from": [
          {
            "stage": "s3",
            "score": 0.9917731932202595
          },
          {
            "stage": "s1",
            "score": 0.9582922695106874
          },
          {
            "stage": "s2",
            "score": 0.9542361899013719
          },
          {
            "stage": "s4",
            "score": 0.9445565045508351
          },
          {
            "stage": "s5",
            "score": 0.9407576964215998
          },
          {
            "stage": "s7",
            "score": 0.9137831590658032
          },
          {
            "stage": "s10",
            "score": 0.8995810284909094
          },
          {
            "stage": "s6",
            "score": 0.898477999890851
          },
          {
            "stage": "s11",
            "score": 0.8936329919829321
          },
          {
            "stage": "s9",
            "score": 0.8749741582075927
          },
          {
            "stage": "s8",
            "score": 0.8714111142915093
          },
          {
            "stage": "s0",
            "score": 0.7568214589389322
          }
        ],
        "to": [
          {
            "stage": "s4",
            "score": 0.9914347310051935
          },
          {
            "stage": "s3",
            "score": 0.9467618735705841
          },
          {
            "stage": "s5",
            "score": 0.9451481781050048
          },
          {
            "stage": "s1",
            "score": 0.942333459641255
          },
          {
            "stage": "s2",
            "score": 0.9394061915836395
          },
          {
            "stage": "s7",
            "score": 0.9124982953100834
          },
          {
            "stage": "s6",
            "score": 0.9078397454559657
          },
          {
            "stage": "s10",
            "score": 0.8996271973216333
          },
          {
            "stage": "s11",
            "score": 0.8855839390512394
          },
          {
            "stage": "s8",
            "score": 0.8761797777224516
          },
          {
            "stage": "s9",
            "score": 0.8687844037204916
          },
          {
            "stage": "s0",
            "score": 0.7780270479693565
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 26,
      "handoff": "=SUM(1,2)\n\"handoff 26\"",
      "from": "s4",
      "to": "s5",
      "aiFrom": "s4",
      "aiTo": "s5",
      "evidence": {
        "from": [
          {
            "stage": "s4",
            "score": 0.993806063360419
          },
          {
            "stage": "s3",
            "score": 0.9447850853148914
          },
          {
            "stage": "s5",
            "score": 0.9429332642675154
          },
          {
            "stage": "s2",
            "score": 0.9424324286077969
          },
          {
            "stage": "s1",
            "score": 0.9411013958218342
          },
          {
            "stage": "s7",
            "score": 0.9100014840060456
          },
          {
            "stage": "s6",
            "score": 0.9056208788515077
          },
          {
            "stage": "s10",
            "score": 0.9051933024072019
          },
          {
            "stage": "s11",
            "score": 0.8889052327874216
          },
          {
            "stage": "s8",
            "score": 0.8781849825167743
          },
          {
            "stage": "s9",
            "score": 0.8756087853095148
          },
          {
            "stage": "s0",
            "score": 0.7990107906548229
          }
        ],
        "to": [
          {
            "stage": "s5",
            "score": 0.9909688337492745
          },
          {
            "stage": "s1",
            "score": 0.9361265646807301
          },
          {
            "stage": "s4",
            "score": 0.935287715968682
          },
          {
            "stage": "s3",
            "score": 0.9317768287464219
          },
          {
            "stage": "s10",
            "score": 0.9290538532014503
          },
          {
            "stage": "s2",
            "score": 0.9270947805849846
          },
          {
            "stage": "s6",
            "score": 0.9212601330982577
          },
          {
            "stage": "s7",
            "score": 0.9207417444746043
          },
          {
            "stage": "s11",
            "score": 0.9109426501381611
          },
          {
            "stage": "s9",
            "score": 0.8822663709647725
          },
          {
            "stage": "s8",
            "score": 0.8715255386945221
          },
          {
            "stage": "s0",
            "score": 0.8057602615843209
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 27,
      "handoff": "=SUM(1,2)\n\"handoff 27\"",
      "from": "s5",
      "to": "s6",
      "aiFrom": "s5",
      "aiTo": "s6",
      "evidence": {
        "from": [
          {
            "stage": "s5",
            "score": 0.9909688337492745
          },
          {
            "stage": "s1",
            "score": 0.9361265646807301
          },
          {
            "stage": "s4",
            "score": 0.935287715968682
          },
          {
            "stage": "s3",
            "score": 0.9317768287464219
          },
          {
            "stage": "s10",
            "score": 0.9290538532014503
          },
          {
            "stage": "s2",
            "score": 0.9270947805849846
          },
          {
            "stage": "s6",
            "score": 0.9212601330982577
          },
          {
            "stage": "s7",
            "score": 0.9207417444746043
          },
          {
            "stage": "s11",
            "score": 0.9109426501381611
          },
          {
            "stage": "s9",
            "score": 0.8822663709647725
          },
          {
            "stage": "s8",
            "score": 0.8715255386945221
          },
          {
            "stage": "s0",
            "score": 0.8057602615843209
          }
        ],
        "to": [
          {
            "stage": "s6",
            "score": 0.9925903741232751
          },
          {
            "stage": "s5",
            "score": 0.9159679780144553
          },
          {
            "stage": "s7",
            "score": 0.9077218696004086
          },
          {
            "stage": "s4",
            "score": 0.8972855151222726
          },
          {
            "stage": "s10",
            "score": 0.8948828781343202
          },
          {
            "stage": "s3",
            "score": 0.8831429501730178
          },
          {
            "stage": "s1",
            "score": 0.8831303907188923
          },
          {
            "stage": "s11",
            "score": 0.8831038104889668
          },
          {
            "stage": "s2",
            "score": 0.875259230556413
          },
          {
            "stage": "s9",
            "score": 0.8597344945543655
          },
          {
            "stage": "s8",
            "score": 0.8534199915371172
          },
          {
            "stage": "s0",
            "score": 0.7908188072797235
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 28,
      "handoff": "=SUM(1,2)\n\"handoff 28\"",
      "from": "s6",
      "to": "s7",
      "aiFrom": "s6",
      "aiTo": "s7",
      "evidence": {
        "from": [
          {
            "stage": "s6",
            "score": 0.9917266438313421
          },
          {
            "stage": "s5",
            "score": 0.9372959372657444
          },
          {
            "stage": "s4",
            "score": 0.9207924812930606
          },
          {
            "stage": "s7",
            "score": 0.9206373497464201
          },
          {
            "stage": "s1",
            "score": 0.9110397943854383
          },
          {
            "stage": "s10",
            "score": 0.9107746206282222
          },
          {
            "stage": "s3",
            "score": 0.9095395404535448
          },
          {
            "stage": "s2",
            "score": 0.9038458456853075
          },
          {
            "stage": "s11",
            "score": 0.8999354142688338
          },
          {
            "stage": "s9",
            "score": 0.8798108332290389
          },
          {
            "stage": "s8",
            "score": 0.8668406989108699
          },
          {
            "stage": "s0",
            "score": 0.8026592612250111
          }
        ],
        "to": [
          {
            "stage": "s7",
            "score": 0.9909514789443312
          },
          {
            "stage": "s5",
            "score": 0.9329169456760912
          },
          {
            "stage": "s1",
            "score": 0.9207031484984954
          },
          {
            "stage": "s4",
            "score": 0.9154079578268612
          },
          {
            "stage": "s6",
            "score": 0.9152777392564275
          },
          {
            "stage": "s3",
            "score": 0.9117129833727786
          },
          {
            "stage": "s2",
            "score": 0.9055231946937731
          },
          {
            "stage": "s10",
            "score": 0.8995549584238263
          },
          {
            "stage": "s11",
            "score": 0.8969831807540505
          },
          {
            "stage": "s8",
            "score": 0.8837860963646572
          },
          {
            "stage": "s9",
            "score": 0.8801431896108197
          },
          {
            "stage": "s0",
            "score": 0.7631587723448288
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 29,
      "handoff": "=SUM(1,2)\n\"handoff 29\"",
      "from": "s7",
      "to": "s8",
      "aiFrom": "s7",
      "aiTo": "s8",
      "evidence": {
        "from": [
          {
            "stage": "s7",
            "score": 0.9909514789443312
          },
          {
            "stage": "s5",
            "score": 0.9329169456760912
          },
          {
            "stage": "s1",
            "score": 0.9207031484984954
          },
          {
            "stage": "s4",
            "score": 0.9154079578268612
          },
          {
            "stage": "s6",
            "score": 0.9152777392564275
          },
          {
            "stage": "s3",
            "score": 0.9117129833727786
          },
          {
            "stage": "s2",
            "score": 0.9055231946937731
          },
          {
            "stage": "s10",
            "score": 0.8995549584238263
          },
          {
            "stage": "s11",
            "score": 0.8969831807540505
          },
          {
            "stage": "s8",
            "score": 0.8837860963646572
          },
          {
            "stage": "s9",
            "score": 0.8801431896108197
          },
          {
            "stage": "s0",
            "score": 0.7631587723448288
          }
        ],
        "to": [
          {
            "stage": "s8",
            "score": 0.9906296024937248
          },
          {
            "stage": "s7",
            "score": 0.868789236219343
          },
          {
            "stage": "s4",
            "score": 0.8659496007796741
          },
          {
            "stage": "s9",
            "score": 0.8658561733205229
          },
          {
            "stage": "s11",
            "score": 0.8617071121360531
          },
          {
            "stage": "s5",
            "score": 0.8612814286101459
          },
          {
            "stage": "s10",
            "score": 0.8604315954434678
          },
          {
            "stage": "s1",
            "score": 0.8573758727502685
          },
          {
            "stage": "s6",
            "score": 0.8516475170538762
          },
          {
            "stage": "s3",
            "score": 0.8506471477432742
          },
          {
            "stage": "s2",
            "score": 0.8505138286220566
          },
          {
            "stage": "s0",
            "score": 0.7596606289121342
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 30,
      "handoff": "=SUM(1,2)\n\"handoff 30\"",
      "from": "s8",
      "to": "s9",
      "aiFrom": "s8",
      "aiTo": "s9",
      "evidence": {
        "from": [
          {
            "stage": "s8",
            "score": 0.9953103546043008
          },
          {
            "stage": "s7",
            "score": 0.8813039885803741
          },
          {
            "stage": "s5",
            "score": 0.8810366665431967
          },
          {
            "stage": "s10",
            "score": 0.8801210839737321
          },
          {
            "stage": "s11",
            "score": 0.8797944248371729
          },
          {
            "stage": "s4",
            "score": 0.8797637666372604
          },
          {
            "stage": "s9",
            "score": 0.8787879484457064
          },
          {
            "stage": "s1",
            "score": 0.8739375978295956
          },
          {
            "stage": "s2",
            "score": 0.8733589874382821
          },
          {
            "stage": "s3",
            "score": 0.8719397583787399
          },
          {
            "stage": "s6",
            "score": 0.8704006281845597
          },
          {
            "stage": "s0",
            "score": 0.7649145266527988
          }
        ],
        "to": [
          {
            "stage": "s9",
            "score": 0.9944887478951141
          },
          {
            "stage": "s10",
            "score": 0.9392818523358739
          },
          {
            "stage": "s11",
            "score": 0.9175675347918777
          },
          {
            "stage": "s5",
            "score": 0.8939442320160844
          },
          {
            "stage": "s7",
            "score": 0.8875974934694452
          },
          {
            "stage": "s8",
            "score": 0.884852060776548
          },
          {
            "stage": "s4",
            "score": 0.8789768911806203
          },
          {
            "stage": "s1",
            "score": 0.8785802740735931
          },
          {
            "stage": "s3",
            "score": 0.8765432633969158
          },
          {
            "stage": "s6",
            "score": 0.8735168760677693
          },
          {
            "stage": "s2",
            "score": 0.8697000597121582
          },
          {
            "stage": "s0",
            "score": 0.78193136986723
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 31,
      "handoff": "=SUM(1,2)\n\"handoff 31\"",
      "from": "s9",
      "to": "s10",
      "aiFrom": "s9",
      "aiTo": "s10",
      "evidence": {
        "from": [
          {
            "stage": "s9",
            "score": 0.9944887478951141
          },
          {
            "stage": "s10",
            "score": 0.9392818523358739
          },
          {
            "stage": "s11",
            "score": 0.9175675347918777
          },
          {
            "stage": "s5",
            "score": 0.8939442320160844
          },
          {
            "stage": "s7",
            "score": 0.8875974934694452
          },
          {
            "stage": "s8",
            "score": 0.884852060776548
          },
          {
            "stage": "s4",
            "score": 0.8789768911806203
          },
          {
            "stage": "s1",
            "score": 0.8785802740735931
          },
          {
            "stage": "s3",
            "score": 0.8765432633969158
          },
          {
            "stage": "s6",
            "score": 0.8735168760677693
          },
          {
            "stage": "s2",
            "score": 0.8697000597121582
          },
          {
            "stage": "s0",
            "score": 0.78193136986723
          }
        ],
        "to": [
          {
            "stage": "s10",
            "score": 0.9935105461734766
          },
          {
            "stage": "s9",
            "score": 0.9416796938865468
          },
          {
            "stage": "s11",
            "score": 0.9413554405231059
          },
          {
            "stage": "s5",
            "score": 0.9309189152863117
          },
          {
            "stage": "s1",
            "score": 0.9126030324893958
          },
          {
            "stage": "s2",
            "score": 0.9021756415555529
          },
          {
            "stage": "s4",
            "score": 0.9005956871495471
          },
          {
            "stage": "s6",
            "score": 0.8956356614602118
          },
          {
            "stage": "s3",
            "score": 0.8915794656334284
          },
          {
            "stage": "s7",
            "score": 0.8871932053717859
          },
          {
            "stage": "s8",
            "score": 0.8696467486957823
          },
          {
            "stage": "s0",
            "score": 0.8272951944028334
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 32,
      "handoff": "=SUM(1,2)\n\"handoff 32\"",
      "from": "s10",
      "to": "s11",
      "aiFrom": "s10",
      "aiTo": "s11",
      "evidence": {
        "from": [
          {
            "stage": "s10",
            "score": 0.9930809276297937
          },
          {
            "stage": "s11",
            "score": 0.943922334383611
          },
          {
            "stage": "s9",
            "score": 0.9416467644745027
          },
          {
            "stage": "s5",
            "score": 0.9371241193102364
          },
          {
            "stage": "s1",
            "score": 0.9169639445347502
          },
          {
            "stage": "s4",
            "score": 0.9094668120540972
          },
          {
            "stage": "s2",
            "score": 0.9066293241384432
          },
          {
            "stage": "s6",
            "score": 0.9065046536462186
          },
          {
            "stage": "s7",
            "score": 0.896835352995505
          },
          {
            "stage": "s3",
            "score": 0.8961667343003927
          },
          {
            "stage": "s8",
            "score": 0.8781671030051196
          },
          {
            "stage": "s0",
            "score": 0.8315999723521457
          }
        ],
        "to": [
          {
            "stage": "s11",
            "score": 0.9907574946758712
          },
          {
            "stage": "s10",
            "score": 0.9421375287438876
          },
          {
            "stage": "s5",
            "score": 0.9239520970439338
          },
          {
            "stage": "s9",
            "score": 0.9176298048444788
          },
          {
            "stage": "s1",
            "score": 0.912099440606451
          },
          {
            "stage": "s4",
            "score": 0.904670216366769
          },
          {
            "stage": "s2",
            "score": 0.9032459438310942
          },
          {
            "stage": "s7",
            "score": 0.90193478713141
          },
          {
            "stage": "s6",
            "score": 0.9006209098759596
          },
          {
            "stage": "s3",
            "score": 0.900006096667302
          },
          {
            "stage": "s8",
            "score": 0.8823934110565654
          },
          {
            "stage": "s0",
            "score": 0.8182680158876466
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 33,
      "handoff": "=SUM(1,2)\n\"handoff 33\"",
      "from": "s0",
      "to": "s1",
      "aiFrom": "s0",
      "aiTo": "s1",
      "evidence": {
        "from": [
          {
            "stage": "s0",
            "score": 0.989365739002616
          },
          {
            "stage": "s10",
            "score": 0.8058648271611321
          },
          {
            "stage": "s11",
            "score": 0.7929614795503885
          },
          {
            "stage": "s1",
            "score": 0.7923694064151539
          },
          {
            "stage": "s5",
            "score": 0.7773616468548995
          },
          {
            "stage": "s4",
            "score": 0.7759076633474049
          },
          {
            "stage": "s9",
            "score": 0.7707656267706762
          },
          {
            "stage": "s2",
            "score": 0.7681753316307868
          },
          {
            "stage": "s6",
            "score": 0.7592835651194065
          },
          {
            "stage": "s7",
            "score": 0.7499688891294952
          },
          {
            "stage": "s3",
            "score": 0.7406726893767888
          },
          {
            "stage": "s8",
            "score": 0.7406426075198624
          }
        ],
        "to": [
          {
            "stage": "s1",
            "score": 0.9896921217836094
          },
          {
            "stage": "s2",
            "score": 0.9620329693956882
          },
          {
            "stage": "s3",
            "score": 0.9519661705352045
          },
          {
            "stage": "s5",
            "score": 0.9431536253318978
          },
          {
            "stage": "s4",
            "score": 0.9420869732417969
          },
          {
            "stage": "s10",
            "score": 0.9198578894842729
          },
          {
            "stage": "s7",
            "score": 0.9183079516580929
          },
          {
            "stage": "s11",
            "score": 0.9064779364381031
          },
          {
            "stage": "s6",
            "score": 0.8947254758828036
          },
          {
            "stage": "s9",
            "score": 0.8790967322396883
          },
          {
            "stage": "s8",
            "score": 0.8728385928220372
          },
          {
            "stage": "s0",
            "score": 0.8310225633676845
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 34,
      "handoff": "=SUM(1,2)\n\"handoff 34\"",
      "from": "s1",
      "to": "s2",
      "aiFrom": "s1",
      "aiTo": "s2",
      "evidence": {
        "from": [
          {
            "stage": "s1",
            "score": 0.9931022846471943
          },
          {
            "stage": "s3",
            "score": 0.9580423167344139
          },
          {
            "stage": "s2",
            "score": 0.9579034467965347
          },
          {
            "stage": "s5",
            "score": 0.9447271266379346
          },
          {
            "stage": "s4",
            "score": 0.9438466683424167
          },
          {
            "stage": "s7",
            "score": 0.9242428387464522
          },
          {
            "stage": "s10",
            "score": 0.9138924690570975
          },
          {
            "stage": "s11",
            "score": 0.8996018638559014
          },
          {
            "stage": "s6",
            "score": 0.8980549811192153
          },
          {
            "stage": "s9",
            "score": 0.8758415446198498
          },
          {
            "stage": "s8",
            "score": 0.8722818100131068
          },
          {
            "stage": "s0",
            "score": 0.8061864219557165
          }
        ],
        "to": [
          {
            "stage": "s2",
            "score": 0.9922257211056376
          },
          {
            "stage": "s1",
            "score": 0.9627282211869221
          },
          {
            "stage": "s3",
            "score": 0.9561063305732268
          },
          {
            "stage": "s4",
            "score": 0.9394261248873005
          },
          {
            "stage": "s5",
            "score": 0.9318417714544251
          },
          {
            "stage": "s7",
            "score": 0.907235091344687
          },
          {
            "stage": "s10",
            "score": 0.9026198342851207
          },
          {
            "stage": "s11",
            "score": 0.8943520022092389
          },
          {
            "stage": "s6",
            "score": 0.8890444870753943
          },
          {
            "stage": "s8",
            "score": 0.8697982947854828
          },
          {
            "stage": "s9",
            "score": 0.8630981316568568
          },
          {
            "stage": "s0",
            "score": 0.7874752979846026
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 35,
      "handoff": "=SUM(1,2)\n\"handoff 35\"",
      "from": "s2",
      "to": "s3",
      "aiFrom": "s2",
      "aiTo": "s3",
      "evidence": {
        "from": [
          {
            "stage": "s2",
            "score": 0.9922257211056376
          },
          {
            "stage": "s1",
            "score": 0.9627282211869221
          },
          {
            "stage": "s3",
            "score": 0.9561063305732268
          },
          {
            "stage": "s4",
            "score": 0.9394261248873005
          },
          {
            "stage": "s5",
            "score": 0.9318417714544251
          },
          {
            "stage": "s7",
            "score": 0.907235091344687
          },
          {
            "stage": "s10",
            "score": 0.9026198342851207
          },
          {
            "stage": "s11",
            "score": 0.8943520022092389
          },
          {
            "stage": "s6",
            "score": 0.8890444870753943
          },
          {
            "stage": "s8",
            "score": 0.8697982947854828
          },
          {
            "stage": "s9",
            "score": 0.8630981316568568
          },
          {
            "stage": "s0",
            "score": 0.7874752979846026
          }
        ],
        "to": [
          {
            "stage": "s3",
            "score": 0.9919428243582973
          },
          {
            "stage": "s2",
            "score": 0.949652412571433
          },
          {
            "stage": "s1",
            "score": 0.9493205524298485
          },
          {
            "stage": "s4",
            "score": 0.9403148046201796
          },
          {
            "stage": "s5",
            "score": 0.9346435114013342
          },
          {
            "stage": "s7",
            "score": 0.9008980466083688
          },
          {
            "stage": "s10",
            "score": 0.8931159172019315
          },
          {
            "stage": "s11",
            "score": 0.8917367494926621
          },
          {
            "stage": "s6",
            "score": 0.8904160256715902
          },
          {
            "stage": "s9",
            "score": 0.8675780446710313
          },
          {
            "stage": "s8",
            "score": 0.8639306004787934
          },
          {
            "stage": "s0",
            "score": 0.7551730939696647
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 36,
      "handoff": "=SUM(1,2)\n\"handoff 36\"",
      "from": "s3",
      "to": "s4",
      "aiFrom": "s3",
      "aiTo": "s4",
      "evidence": {
        "from": [
          {
            "stage": "s3",
            "score": 0.9923993900979294
          },
          {
            "stage": "s1",
            "score": 0.960851560503131
          },
          {
            "stage": "s2",
            "score": 0.9575269486132099
          },
          {
            "stage": "s4",
            "score": 0.9492903193167654
          },
          {
            "stage": "s5",
            "score": 0.9409301103813098
          },
          {
            "stage": "s7",
            "score": 0.9107259775757892
          },
          {
            "stage": "s10",
            "score": 0.9013665478063566
          },
          {
            "stage": "s6",
            "score": 0.8976852009691473
          },
          {
            "stage": "s11",
            "score": 0.8942212330317612
          },
          {
            "stage": "s9",
            "score": 0.874515122443381
          },
          {
            "stage": "s8",
            "score": 0.8716470101460208
          },
          {
            "stage": "s0",
            "score": 0.762869218701895
          }
        ],
        "to": [
          {
            "stage": "s4",
            "score": 0.9905376243027499
          },
          {
            "stage": "s5",
            "score": 0.9425702969307393
          },
          {
            "stage": "s3",
            "score": 0.9421581684734908
          },
          {
            "stage": "s2",
            "score": 0.9377355481475543
          },
          {
            "stage": "s1",
            "score": 0.9363653703358573
          },
          {
            "stage": "s7",
            "score": 0.9062740570045024
          },
          {
            "stage": "s6",
            "score": 0.9041726649001557
          },
          {
            "stage": "s10",
            "score": 0.8974167569552017
          },
          {
            "stage": "s11",
            "score": 0.8811037126469473
          },
          {
            "stage": "s8",
            "score": 0.8751112071219226
          },
          {
            "stage": "s9",
            "score": 0.8632845613955231
          },
          {
            "stage": "s0",
            "score": 0.7772386505358565
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 37,
      "handoff": "=SUM(1,2)\n\"handoff 37\"",
      "from": "s4",
      "to": "s5",
      "aiFrom": "s4",
      "aiTo": "s5",
      "evidence": {
        "from": [
          {
            "stage": "s4",
            "score": 0.9905376243027499
          },
          {
            "stage": "s5",
            "score": 0.9425702969307393
          },
          {
            "stage": "s3",
            "score": 0.9421581684734908
          },
          {
            "stage": "s2",
            "score": 0.9377355481475543
          },
          {
            "stage": "s1",
            "score": 0.9363653703358573
          },
          {
            "stage": "s7",
            "score": 0.9062740570045024
          },
          {
            "stage": "s6",
            "score": 0.9041726649001557
          },
          {
            "stage": "s10",
            "score": 0.8974167569552017
          },
          {
            "stage": "s11",
            "score": 0.8811037126469473
          },
          {
            "stage": "s8",
            "score": 0.8751112071219226
          },
          {
            "stage": "s9",
            "score": 0.8632845613955231
          },
          {
            "stage": "s0",
            "score": 0.7772386505358565
          }
        ],
        "to": [
          {
            "stage": "s5",
            "score": 0.9923282833865004
          },
          {
            "stage": "s1",
            "score": 0.9395285453911245
          },
          {
            "stage": "s4",
            "score": 0.9391098612639371
          },
          {
            "stage": "s3",
            "score": 0.935885487695986
          },
          {
            "stage": "s2",
            "score": 0.9312399381722762
          },
          {
            "stage": "s10",
            "score": 0.9291740813409866
          },
          {
            "stage": "s6",
            "score": 0.9241542743120065
          },
          {
            "stage": "s7",
            "score": 0.9234438258023172
          },
          {
            "stage": "s11",
            "score": 0.9113690090841674
          },
          {
            "stage": "s9",
            "score": 0.8805544093905565
          },
          {
            "stage": "s8",
            "score": 0.8745226908899966
          },
          {
            "stage": "s0",
            "score": 0.7979848936830032
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 38,
      "handoff": "=SUM(1,2)\n\"handoff 38\"",
      "from": "s5",
      "to": "s6",
      "aiFrom": "s5",
      "aiTo": "s6",
      "evidence": {
        "from": [
          {
            "stage": "s5",
            "score": 0.9928683297212124
          },
          {
            "stage": "s4",
            "score": 0.9346925175009841
          },
          {
            "stage": "s1",
            "score": 0.9346137898485993
          },
          {
            "stage": "s3",
            "score": 0.9340164766112085
          },
          {
            "stage": "s10",
            "score": 0.9261957387751057
          },
          {
            "stage": "s2",
            "score": 0.926167584598145
          },
          {
            "stage": "s6",
            "score": 0.9216086838538273
          },
          {
            "stage": "s7",
            "score": 0.9212599457110519
          },
          {
            "stage": "s11",
            "score": 0.9088052461892412
          },
          {
            "stage": "s9",
            "score": 0.8799755060503455
          },
          {
            "stage": "s8",
            "score": 0.8671301104784984
          },
          {
            "stage": "s0",
            "score": 0.7937173490943548
          }
        ],
        "to": [
          {
            "stage": "s6",
            "score": 0.9950072616050415
          },
          {
            "stage": "s5",
            "score": 0.9312351357357199
          },
          {
            "stage": "s7",
            "score": 0.9212811263174014
          },
          {
            "stage": "s4",
            "score": 0.9166360161699237
          },
          {
            "stage": "s3",
            "score": 0.9035907097322183
          },
          {
            "stage": "s10",
            "score": 0.9027459704127309
          },
          {
            "stage": "s1",
            "score": 0.9021329688030275
          },
          {
            "stage": "s2",
            "score": 0.8953608123919741
          },
          {
            "stage": "s11",
            "score": 0.8920516395520858
          },
          {
            "stage": "s9",
            "score": 0.8721129434076653
          },
          {
            "stage": "s8",
            "score": 0.8678177931385094
          },
          {
            "stage": "s0",
            "score": 0.7860558431566579
          }
        ]
      },
      "decision": "approve",
      "note": ""
    },
    {
      "index": 39,
      "handoff": "=SUM(1,2)\n\"handoff 39\"",
      "from": "s6",
      "to": "s7",
      "aiFrom": "s6",
      "aiTo": "s7",
      "evidence": {
        "from": [
          {
            "stage": "s6",
            "score": 0.9950072616050415
          },
          {
            "stage": "s5",
            "score": 0.9312351357357199
          },
          {
            "stage": "s7",
            "score": 0.9212811263174014
          },
          {
            "stage": "s4",
            "score": 0.9166360161699237
          },
          {
            "stage": "s3",
            "score": 0.9035907097322183
          },
          {
            "stage": "s10",
            "score": 0.9027459704127309
          },
          {
            "stage": "s1",
            "score": 0.9021329688030275
          },
          {
            "stage": "s2",
            "score": 0.8953608123919741
          },
          {
            "stage": "s11",
            "score": 0.8920516395520858
          },
          {
            "stage": "s9",
            "score": 0.8721129434076653
          },
          {
            "stage": "s8",
            "score": 0.8678177931385094
          },
          {
            "stage": "s0",
            "score": 0.7860558431566579
          }
        ],
        "to": [
          {
            "stage": "s7",
            "score": 0.9927936153204684
          },
          {
            "stage": "s5",
            "score": 0.9360794634146149
          },
          {
            "stage": "s1",
            "score": 0.9334790512753719
          },
          {
            "stage": "s3",
            "score": 0.9238988355549428
          },
          {
            "stage": "s4",
            "score": 0.92308153090757
          },
          {
            "stage": "s6",
            "score": 0.9160577688274991
          },
          {
            "stage": "s2",
            "score": 0.9140748167630477
          },
          {
            "stage": "s10",
            "score": 0.9009972075937964
          },
          {
            "stage": "s11",
            "score": 0.8970473020183563
          },
          {
            "stage": "s8",
            "score": 0.8858182234984128
          },
          {
            "stage": "s9",
            "score": 0.8821303093946551
          },
          {
            "stage": "s0",
            "score": 0.771057357365176
          }
        ]
      },
      "decision": "approve",
      "note": ""
    }
  ],
  "warning": "Graph-only process worksheet. All reviewed arrows are assumed feasible without guards. Missing routes, conditional logic or unmodeled entries can invalidate conclusions. Similarity is not confidence; mandatory source review required. No policy, security or real-world enforcement certification.",
  "analysis": {
    "status": "ready",
    "completion": {
      "stages": [
        "s0",
        "s1",
        "s2",
        "s3",
        "s4",
        "s5",
        "s6",
        "s7",
        "s8",
        "s9",
        "s10",
        "s11"
      ],
      "handoffs": [
        "=SUM(1,2)\n\"handoff 0\"",
        "=SUM(1,2)\n\"handoff 1\"",
        "=SUM(1,2)\n\"handoff 2\"",
        "=SUM(1,2)\n\"handoff 3\"",
        "=SUM(1,2)\n\"handoff 4\"",
        "=SUM(1,2)\n\"handoff 5\"",
        "=SUM(1,2)\n\"handoff 6\"",
        "=SUM(1,2)\n\"handoff 7\"",
        "=SUM(1,2)\n\"handoff 8\"",
        "=SUM(1,2)\n\"handoff 9\"",
        "=SUM(1,2)\n\"handoff 10\""
      ]
    },
    "gates": [
      {
        "id": "s1",
        "onWalk": true,
        "kind": "unavoidable",
        "bypass": null
      },
      {
        "id": "s2",
        "onWalk": true,
        "kind": "unavoidable",
        "bypass": null
      },
      {
        "id": "s3",
        "onWalk": true,
        "kind": "unavoidable",
        "bypass": null
      },
      {
        "id": "s4",
        "onWalk": true,
        "kind": "unavoidable",
        "bypass": null
      },
      {
        "id": "s5",
        "onWalk": true,
        "kind": "unavoidable",
        "bypass": null
      },
      {
        "id": "s6",
        "onWalk": true,
        "kind": "unavoidable",
        "bypass": null
      },
      {
        "id": "s7",
        "onWalk": true,
        "kind": "unavoidable",
        "bypass": null
      },
      {
        "id": "s8",
        "onWalk": true,
        "kind": "unavoidable",
        "bypass": null
      },
      {
        "id": "s9",
        "onWalk": true,
        "kind": "unavoidable",
        "bypass": null
      },
      {
        "id": "s10",
        "onWalk": true,
        "kind": "unavoidable",
        "bypass": null
      }
    ],
    "baselineCount": 10,
    "mandatoryCount": 10,
    "bypassCount": 0,
    "unreachable": [],
    "literalMatches": 0
  }
}
