
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => {
  e.waitUntil((async()=>{
    const keys = await caches.keys();
    await Promise.all(keys.map(k=>caches.delete(k)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({type:"window"});
    for(const c of clients) c.navigate(c.url);
  })());
});
self.addEventListener("fetch", e => e.respondWith(fetch(e.request)));
