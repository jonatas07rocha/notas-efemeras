const CACHE_NAME = 'rico-dinheirinho-v5';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './icon-192x192.png',
  './icon-512x512.png',
  
  // Script Principal
  './src/main.js',
  
  // Core (Motores e Persistência)
  './src/core/auth.js',
  './src/core/engine.js',
  './src/core/storage.js',
  
  // UI (Interface e Componentes)
  './src/ui/ActionDrawer.js',
  './src/ui/TransactionForm.js',
  './src/ui/TransactionItem.js',
  
  // Utils (Dicionários e Validadores)
  './src/utils/categories.js',
  './src/utils/formatters.js',
  './src/utils/validators.js',
  
  // CDNs Externas (Necessárias para o PWA validar offline)
  'https://unpkg.com/lucide@latest',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'
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

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
