// Optional QA: install Playwright or set PLAYWRIGHT_PATH. Requires Vite dev server on port 5174.
const {chromium}=require(process.env.PLAYWRIGHT_PATH || 'playwright');
const fs=require('fs');
(async()=>{
 const browser=await chromium.launch({headless:true});const page=await browser.newPage({viewport:{width:1440,height:1000},acceptDownloads:true});let errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5174/daily-app2/20261020-14/');await page.locator('canvas').waitFor();
 const checks=await import('./validate.mjs');
 async function download(p,label){const promise=page.waitForEvent('download');await page.getByRole('button',{name:'Download STL'}).click();const d=await promise;const dest='/tmp/pourform-'+label+'.stl';await d.saveAs(dest);return {...checks.checkSTL(fs.readFileSync(dest),p),file:d.suggestedFilename()};}
 const results={default:await download({inlet:64,bore:12,wall:2,rise:34,spout:22,clearance:.6},'default')};
 await page.getByRole('button',{name:'Small bottle',exact:true}).click();results.low=await download({inlet:36,bore:6,wall:1.8,rise:20,spout:18,clearance:.8},'low');
 await page.locator('#inlet').fill('120');await page.locator('#rise').fill('12');await page.getByRole('button',{name:'Download STL'}).isDisabled().then(x=>{if(!x)throw Error('invalid not blocked')});results.invalid=await page.getByRole('status').innerText();
 await page.getByRole('button',{name:'Reset',exact:true}).click();
 for(const [key,value] of Object.entries({inlet:24,bore:4,wall:1.8,rise:12,spout:8,clearance:0}))await page.locator('#'+key).fill(String(value));
 results.min=await download({inlet:24,bore:4,wall:1.8,rise:12,spout:8,clearance:0},'min');
 for(const [key,value] of Object.entries({inlet:120,bore:30,wall:4,rise:100,spout:45,clearance:2}))await page.locator('#'+key).fill(String(value));
 results.max=await download({inlet:120,bore:30,wall:4,rise:100,spout:45,clearance:2},'max');
 await page.getByRole('button',{name:'Fit to view',exact:true}).click();await page.screenshot({path:'desktop-validation.png',fullPage:true});
 await page.close();
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:1});const phone=await context.newPage();phone.on('pageerror',e=>errors.push(e.message));await phone.goto('http://127.0.0.1:5174/daily-app2/20261020-14/');await phone.locator('canvas').waitFor();
 if(await phone.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('mobile overflow');
 const client=await context.newCDPSession(phone),box=await phone.locator('canvas').boundingBox();
 const before=await phone.locator('canvas').screenshot();
 const point=(x,y,id)=>({x:box.x+x,y:box.y+y,id});
 await client.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[point(120,130,0)]});
 for(let i=1;i<=8;i++)await client.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[point(120+i*10,130+i*3,0)]});
 await client.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await phone.waitForTimeout(500);
 const after=await phone.locator('canvas').screenshot();if(before.equals(after))throw Error('touch orbit unchanged');
 await client.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[point(110,130,0),point(210,130,1)]});
 await client.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[point(75,130,0),point(245,130,1)]});await client.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await phone.waitForTimeout(500);
 if(after.equals(await phone.locator('canvas').screenshot()))throw Error('pinch zoom unchanged');
 await phone.locator('#inlet').fill('68');await phone.getByRole('button',{name:'Download STL'}).scrollIntoViewIfNeeded();const pending=phone.waitForEvent('download');await phone.getByRole('button',{name:'Download STL'}).tap();const mobile=await pending;await mobile.saveAs('/tmp/pourform-mobile.stl');results.mobile=checks.checkSTL(fs.readFileSync('/tmp/pourform-mobile.stl'),{inlet:68,bore:12,wall:2,rise:34,spout:22,clearance:.6});
 await phone.screenshot({path:'mobile-validation.png',fullPage:true});
 const data=await phone.evaluate(async()=>{const m=await import('/daily-app2/20261020-14/src/geometry.js');return m.dimensions({...m.defaults,inlet:68});});
 if(data.join(',')!=='72,72,56')throw Error('preview dimensions mismatch');
 results.touchOrbit=true;results.touchZoom=true;results.errors=errors;if(errors.length)throw Error(errors.join('\n'));fs.writeFileSync('browser-validation.json',JSON.stringify(results,null,2));console.log(results);await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
