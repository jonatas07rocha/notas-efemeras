const CACHE_NAME = 'rico-dinheirinho-v4';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './config.js',
  './icon-192x192.png',
  './icon-512x512.png',
  /* Estrutura modular detectada no repositório */
  './src/main.js',
  './src/core/auth.js',
  './src/core/engine.js',
  './src/core/storage.js',
  './src/ui/ActionDrawer.js',
  './src/ui/TransactionForm.js',
  './src/ui/TransactionItem.js',
  './src/utils/categories.js',
  './src/utils/formatters.js',
  './src/utils/validators.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Usando addAll para garantir que todos os arquivos sejam baixados
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

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
