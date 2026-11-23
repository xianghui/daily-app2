# Frame Harbor — Synthetic campaign crop handoff

Center clips 3 of 5 eligible approved sources; shifted 3; withheld 1. Not image quality or AI accuracy.

## mobile-a

Source: {"id":"mobile-a","note":"Portrait mobile story cover for a full screen vertical campaign","width":3000,"height":4000,"box":{"x":2000,"y":1000,"width":400,"height":1000}}

Review: {"index":0,"text":"Portrait mobile story cover for a full screen vertical campaign","resource":"story","aiResource":"story","evidence":[{"resource":"story","score":0.8415155052964634},{"resource":"banner","score":0.5121452838502497},{"resource":"square","score":0.26811240401748077}],"width":3000,"height":4000,"box":{"x":2000,"y":1000,"width":400,"height":1000},"decision":"approve","note":""}

Plan: {"id":"mobile-a","resource":"story","status":"ready","reason":"Centered crop already retains the subject.","crop":{"x":375,"y":0,"width":2250,"height":4000},"target":{"width":1080,"height":1920},"baseline":{"x":375,"y":0,"width":2250,"height":4000,"retainsSubject":true},"retainedPixels":9000000,"sourcePixels":12000000,"shift":0}

## catalog-a

Source: {"id":"catalog-a","note":"Square product catalog thumbnail for the shop","width":4000,"height":3000,"box":{"x":100,"y":700,"width":900,"height":1000}}

Review: {"index":1,"text":"Square product catalog thumbnail for the shop","resource":"square","aiResource":"square","evidence":[{"resource":"square","score":0.9280854101749638},{"resource":"banner","score":0.2708331979149429},{"resource":"story","score":0.2152056040125354}],"width":4000,"height":3000,"box":{"x":100,"y":700,"width":900,"height":1000},"decision":"approve","note":""}

Plan: {"id":"catalog-a","resource":"square","status":"ready","reason":"Crop shifted to retain the complete reviewed subject box.","crop":{"x":100,"y":0,"width":3000,"height":3000},"target":{"width":1000,"height":1000},"baseline":{"x":500,"y":0,"width":3000,"height":3000,"retainsSubject":false},"retainedPixels":9000000,"sourcePixels":12000000,"shift":400}

## web-a

Source: {"id":"web-a","note":"Wide landscape banner photograph for the website masthead","width":3000,"height":4000,"box":{"x":800,"y":100,"width":1000,"height":700}}

Review: {"index":2,"text":"Wide landscape banner photograph for the website masthead","resource":"banner","aiResource":"banner","evidence":[{"resource":"banner","score":0.9227594206647077},{"resource":"story","score":0.4212647433448119},{"resource":"square","score":0.3200371678064385}],"width":3000,"height":4000,"box":{"x":800,"y":100,"width":1000,"height":700},"decision":"approve","note":""}

Plan: {"id":"web-a","resource":"banner","status":"ready","reason":"Crop shifted to retain the complete reviewed subject box.","crop":{"x":4,"y":100,"width":2992,"height":1683},"target":{"width":1600,"height":900},"baseline":{"x":4,"y":1158,"width":2992,"height":1683,"retainsSubject":false},"retainedPixels":5035536,"sourcePixels":12000000,"shift":1058}

## mobile-b

Source: {"id":"mobile-b","note":"Vertical story video cover on mobile","width":3000,"height":4000,"box":{"x":100,"y":500,"width":500,"height":800}}

Review: {"index":3,"text":"Vertical story video cover on mobile","resource":"story","aiResource":"story","evidence":[{"resource":"story","score":0.8690720834100966},{"resource":"banner","score":0.3727337795293759},{"resource":"square","score":0.21070087564624687}],"width":3000,"height":4000,"box":{"x":100,"y":500,"width":500,"height":800},"decision":"approve","note":""}

Plan: {"id":"mobile-b","resource":"story","status":"ready","reason":"Crop shifted to retain the complete reviewed subject box.","crop":{"x":100,"y":0,"width":2250,"height":4000},"target":{"width":1080,"height":1920},"baseline":{"x":375,"y":0,"width":2250,"height":4000,"retainsSubject":false},"retainedPixels":9000000,"sourcePixels":12000000,"shift":275}

## catalog-b

Source: {"id":"catalog-b","note":"Product shop square catalog photo","width":2000,"height":2000,"box":{"x":300,"y":500,"width":700,"height":900}}

Review: {"index":4,"text":"Product shop square catalog photo","resource":"square","aiResource":"square","evidence":[{"resource":"square","score":0.8693502279758764},{"resource":"banner","score":0.32999638420149935},{"resource":"story","score":0.2523814441784007}],"width":2000,"height":2000,"box":{"x":300,"y":500,"width":700,"height":900},"decision":"approve","note":""}

Plan: {"id":"catalog-b","resource":"square","status":"ready","reason":"Centered crop already retains the subject.","crop":{"x":0,"y":0,"width":2000,"height":2000},"target":{"width":1000,"height":1000},"baseline":{"x":0,"y":0,"width":2000,"height":2000,"retainsSubject":true},"retainedPixels":4000000,"sourcePixels":4000000,"shift":0}

## web-b

Source: {"id":"web-b","note":"Website wide hero masthead landscape photograph","width":1200,"height":800,"box":{"x":100,"y":100,"width":500,"height":400}}

Review: {"index":5,"text":"Website wide hero masthead landscape photograph","resource":"banner","aiResource":"banner","evidence":[{"resource":"banner","score":0.9193229468646842},{"resource":"story","score":0.4624735728819376},{"resource":"square","score":0.37124552901384755}],"width":1200,"height":800,"box":{"x":100,"y":100,"width":500,"height":400},"decision":"approve","note":""}

Plan: {"id":"web-b","resource":"banner","status":"blocked","reason":"Target requires upscaling. Supply a larger source or reduce the target preset.","target":{"width":1600,"height":900}}
