const CACHE='velvet-bids-v1';
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);const response=await fetch('./');const html=await response.clone().text();const assets=[...html.matchAll(/(?:src|href)="([^\"]+\.(?:js|css|svg))"/g)].map(m=>m[1]);await cache.put('./',response);await cache.addAll(assets);await self.skipWaiting()})()));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith(fetch(event.request).catch(async()=>await caches.match(event.request)|| (event.request.mode==='navigate'?caches.match('./'):Response.error())))})
