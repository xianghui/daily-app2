
const CACHE = "ribbon-bindery-assets/index-kPn4t3uB.js";
const FILES = ["index.html","assets/index-kPn4t3uB.js","assets/index-7ftJ3s2z.css"];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('ribbon-bindery-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.registration.scope)) return;
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).catch(() => e.request.mode === 'navigate' ? caches.match(new URL('index.html',self.registration.scope)) : Response.error())));
});
