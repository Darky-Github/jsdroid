self.addEventListener('install', e => {
  console.log('[SW] Installed');
  e.waitUntil(
    caches.open('jsdroid-cache').then(cache =>
      cache.addAll(['/', '/index.html', '/css/main.css', '/js/core.js'])
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
