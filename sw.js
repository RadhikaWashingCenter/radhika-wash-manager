/* Radhika Wash Manager v3.3.20 - minimal offline shell cache. */
const CACHE = 'radhika-wash-manager-shell-v3.3.20';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(names=>Promise.all(names.filter(name=>name.startsWith('radhika-wash-manager-shell-')&&name!==CACHE).map(name=>caches.delete(name)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
  if(req.mode==='navigate'){
    event.respondWith(fetch(req).then(response=>{
      if(response&&response.ok){const copy=response.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy)).catch(()=>{});}return response;
    }).catch(()=>caches.match('./index.html')));
  } else {
    event.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(response=>{
      if(response&&response.ok&&['index.html','manifest.webmanifest','icon-192.png','icon-512.png'].some(name=>url.pathname.endsWith(name))){const copy=response.clone();caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{});}return response;
    })));
  }
});
