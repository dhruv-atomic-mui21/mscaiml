// MSc AIML PWA Service Worker - v2 (For Vercel & Offline Classroom Use)
const CACHE_NAME = 'mscaiml-v2';

const CORE_ASSETS = [
  './',
  './index.html',
  './css/styles.css',
  './js/data.js',
  './js/app.js',
  './manifest.json',
  './icons/icon.svg'
];

// Install: pre-cache all assets immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Cache each asset individually to prevent one failure from aborting all
      return Promise.all(
        CORE_ASSETS.map((url) => {
          return fetch(new Request(url, { cache: 'reload' }))
            .then((res) => {
              if (res.ok) {
                return cache.put(url, res);
              }
            })
            .catch((err) => {
              console.warn('[SW] Pre-cache fetch notice for:', url, err);
            });
        })
      );
    }).then(() => {
      // Notify active clients that caching is complete
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: 'CACHE_READY', cacheName: CACHE_NAME });
        });
      });
    })
  );
});

// Activate: clean up older caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Cache-First strategy with background revalidation when online
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached version immediately for 0ms offline latency
        if (navigator.onLine) {
          fetch(event.request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse);
              });
            }
          }).catch(() => {
            // Classroom offline: ignore network error
          });
        }
        return cachedResponse;
      }

      // Not in cache: fetch from network and store in cache
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // Fallback for navigation requests when offline
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html') || caches.match('/');
        }
      });
    })
  );
});
