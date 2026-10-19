import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), {
    name: 'offline-bindery',
    generateBundle(_, bundle) {
      const files = ['index.html', ...Object.keys(bundle).filter(f => !f.endsWith('.map'))]
      const version = Object.keys(bundle).filter(f => f.endsWith('.js')).join('-')
      this.emitFile({type:'asset',fileName:'sw.js',source:`
const CACHE = ${JSON.stringify('ribbon-bindery-'+version)};
const FILES = ${JSON.stringify(files)};
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('ribbon-bindery-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.registration.scope)) return;
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).catch(() => e.request.mode === 'navigate' ? caches.match(new URL('index.html',self.registration.scope)) : Response.error())));
});
`})
    },
  }],
  base: '/daily-app2/20261020-4/',
})
