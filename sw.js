/*
*  Install
*/
const staticCacheName = 'rcrd-2018-03-31-05-55';

const filesToCache = ['index.html','assets/css/style.css','assets/js/index.min.js','assets/img/**/*'];

// Cache on install
this.addEventListener("install", event => {
  this.skipWaiting();

  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => {
        return cache.addAll(filesToCache);
    })
  )
});

/*
*  Activate
*/
// Clear cache on activate
this.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => (cacheName.startsWith('rcrd-')))
          .filter(cacheName => (cacheName !== staticCacheName))
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});


/*
*  Fetch
*/
// Serve from Cache
this.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
      .catch(() => {
        return caches.match('index.html');
      })
  )
});