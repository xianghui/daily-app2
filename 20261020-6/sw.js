const CACHE='dewdrop-v1';
self.addEventListener('install',event=>event.waitUntil((async()=>{const root=new URL('./',self.location).href;const response=await fetch(root);const html=await response.clone().text();const files=[...html.matchAll(/(?:src|href)="([^\"]+\.(?:js|css))"/g)].map(m=>new URL(m[1],root).href);const cache=await caches.open(CACHE);await cache.put(root,response);await cache.addAll(files);self.skipWaiting();})()));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||!event.request.url.startsWith(self.registration.scope))return;event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request)));});
