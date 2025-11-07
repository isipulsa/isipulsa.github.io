// file: sw.js
const CACHE_NAME = "data-cache-v113";
const urlsToCache = [
  "./",
  "./index.html",
  "./bundle.js",
  "./style.css",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// Install
self.addEventListener("install", (event) => {
  self.skipWaiting(); // ⬅️ langsung aktifkan SW baru
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    ).then(() => self.clients.claim()) // ⬅️ langsung kendalikan semua tab
  );
});

// Fetch (network first)
self.addEventListener("fetch", (event) => {
  // Skip non-GET requests (e.g. POST)
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Jika sukses, simpan ke cache
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request)) // fallback ke cache jika offline
  );
});
