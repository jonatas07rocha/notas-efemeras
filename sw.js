const CACHE_NAME = 'rico-dinheirinho-v5';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192x192.png',
  './icon-512x512.png'
  // CDNs externas serão cacheadas dinamicamente no fetch
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) return caches.delete(cache);
        })
      );
    })
  );
});

// Estratégia: Cache first com fallback para network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) return response; // Cache hit
        
        // Busca na rede e cacheia dinamicamente
        return fetch(event.request).then((networkResponse) => {
          // Só cacheia GET requests
          if (event.request.method === 'GET' && networkResponse.status === 200) {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          }
          return networkResponse;
        });
      })
      .catch(() => {
        // Fallback caso esteja offline e não tenha cache
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      })
  );
});
