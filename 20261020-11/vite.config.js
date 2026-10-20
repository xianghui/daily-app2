import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readdirSync, writeFileSync } from 'node:fs'
const base = '/daily-app2/20261020-11/'
export default defineConfig({
  base, plugins: [react(), {
    name: 'offline-shell',
    closeBundle() {
      const files = [base, base + 'index.html', ...readdirSync('dist/assets').map(f => base + 'assets/' + f)]
      const version = 'ferry-' + Date.now()
      writeFileSync('dist/sw.js', `const CACHE=${JSON.stringify(version)},FILES=${JSON.stringify(files)};
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('ferry-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||!e.request.url.startsWith(self.registration.scope))return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)))});`)
    },
  }],
})
