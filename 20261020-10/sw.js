const CACHE='odds-atelier-v1';
self.addEventListener('install',e=>{e.waitUntil((async()=>{const cache=await caches.open(CACHE);const base=new URL('./',self.location.href);const response=await fetch(base);await cache.put(base,response.clone());const html=await response.text();const assets=[...html.matchAll(/(?:src|href)="([^"]+\.(?:js|css))"/g)].map(m=>new URL(m[1],base).href);await cache.addAll(assets);await self.skipWaiting();})());});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method==='GET'&&new URL(e.request.url).origin===self.location.origin)e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)));});
