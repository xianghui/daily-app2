const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const fs=require('fs');
(async()=>{
 const checks=await import('./validate.mjs');const {defaults}=await import('./src/geometry.js');
 const browser=await chromium.launch({headless:true});const page=await browser.newPage({viewport:{width:1440,height:1000},acceptDownloads:true});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5175/daily-app2/20261020-15/');await page.locator('canvas').waitFor();
 async function set(p){for(const [k,v] of Object.entries(p))if(k!=='holes')await page.locator('#'+k).fill(String(v));if('holes'in p)await page.getByRole('checkbox').setChecked(p.holes);}
 async function download(p,label){const event=page.waitForEvent('download');await page.getByRole('button',{name:'Download STL'}).click();const d=await event;const dest='/tmp/corner-keeper-'+label+'.stl';await d.saveAs(dest);return {...checks.checkSTL(fs.readFileSync(dest),p),file:d.suggestedFilename()};}
 const results={default:await download(defaults,'default')};
 const before=await page.locator('canvas').screenshot();
 await page.getByRole('button',{name:'Small frame',exact:true}).click();results.small=await download({...defaults,armX:60,armY:60,width:12,height:12,hole:3},'small');
 if(before.equals(await page.locator('canvas').screenshot()))throw Error('preview not updated');
 await page.getByRole('button',{name:'Large cabinet',exact:true}).click();results.large=await download({...defaults,armX:180,armY:150,width:28,height:32,hole:8,clearance:.6},'large');
 for(const p of [{...defaults,armX:40,armY:40,width:10,height:6,hole:3,clearance:0},{...defaults,armX:200,armY:200,width:32,height:40,hole:10,clearance:1}]){await set(p);results[p.armX===40?'minimum':'maximum']=await download(p,String(p.armX));}
 await page.getByRole('checkbox').uncheck();results.solid=await download({...defaults,armX:200,armY:200,width:32,height:40,hole:10,clearance:1,holes:false},'solid');
 await page.getByRole('checkbox').check();await page.locator('#armX').fill('40');if(!await page.getByRole('button',{name:'Download STL'}).isDisabled())throw Error('short arm allowed');results.invalidArm=await page.getByRole('status').innerText();
 await page.getByRole('button',{name:'Reset',exact:true}).click();await set({width:10,hole:10});if(!await page.getByRole('button',{name:'Download STL'}).isDisabled())throw Error('thin wall allowed');results.invalidWall=await page.getByRole('status').innerText();
 await page.getByRole('button',{name:'Reset',exact:true}).click();await page.locator('#height').fill('');if(!await page.getByRole('button',{name:'Download STL'}).isDisabled())throw Error('empty input allowed');
 await page.getByRole('button',{name:'Reset',exact:true}).click();await page.getByRole('slider',{name:'Jig height slider',exact:true}).fill('24');results.slider=await download({...defaults,height:24},'slider');await page.getByRole('button',{name:'Fit to view',exact:true}).click();await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:'desktop-validation.png',fullPage:true});
 await page.close();
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:1});const phone=await context.newPage();phone.on('pageerror',e=>errors.push(e.message));await phone.goto('http://127.0.0.1:5175/daily-app2/20261020-15/');await phone.locator('canvas').waitFor();
 if(await phone.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('mobile overflow');
 const client=await context.newCDPSession(phone),box=await phone.locator('canvas').boundingBox();const phoneBefore=await phone.locator('canvas').screenshot();const point=(x,y,id)=>({x:box.x+x,y:box.y+y,id});
 await client.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[point(120,130,0)]});
 for(let i=1;i<=8;i++)await client.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[point(120+i*10,130+i*3,0)]});
 await client.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await phone.waitForTimeout(500);
 const after=await phone.locator('canvas').screenshot();if(phoneBefore.equals(after))throw Error('touch orbit unchanged');
 await client.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[point(110,130,0),point(210,130,1)]});
 await client.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[point(75,130,0),point(245,130,1)]});await client.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await phone.waitForTimeout(500);
 if(after.equals(await phone.locator('canvas').screenshot()))throw Error('pinch zoom unchanged');
 await phone.locator('#armX').fill('110');await phone.getByRole('button',{name:'Download STL'}).scrollIntoViewIfNeeded();const pending=phone.waitForEvent('download');await phone.getByRole('button',{name:'Download STL'}).tap();const mobile=await pending;await mobile.saveAs('/tmp/corner-keeper-mobile.stl');results.mobile=checks.checkSTL(fs.readFileSync('/tmp/corner-keeper-mobile.stl'),{...defaults,armX:110});
 if(!await phone.getByText('110',{exact:false}).count())throw Error('preview dimensions missing');
 await phone.screenshot({path:'mobile-validation.png',fullPage:true});results.touchOrbit=true;results.touchZoom=true;results.errors=errors;if(errors.length)throw Error(errors.join('\n'));fs.writeFileSync('browser-validation.json',JSON.stringify(results,null,2));console.log(results);await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
