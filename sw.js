/*
 
 npm run build
 npm run preview

 -> change the version of cache , every time you make changes in the sw file.Changes will be reflected immediately.
 -> store the API fetched data in localstorage , so in offline mode you will get the fetched cache data stored in LS.

 
 */

// const cacheName = "Cache_dev";
const cacheName = "Cache_production_v1";
const cacheData = [
  // Production
  "/",
  "assets/index-DL6mCWOX.js",
  "/assets/Home-DEMLpSe-.js",
  "/assets/About-d77-tQfg.js",
  "assets/User-dayQ2El_.js",
  "/assets/index-DH3hHT2X.css",
  "/vite.svg",
  // "https://jsonplaceholder.typicode.com/users",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(cacheData))
  );
});

// attach "activate" eventListener to the serviceWorker itself
self.addEventListener("activate", function (e) {
  console.log("Service worker activated");
  // Removing un-used Cache Logic
  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cache) {
          if (cache != cacheName) return caches.delete(cache);
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {

  // e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));

  if (!navigator.onLine) {
    e.respondWith(caches.match(e.request).then(res => {
      if(res) return res;

      let url = e.request.clone();
      return fetch(url);
    }))
  }
});

// Jaba internet cha , teti bela the browser should serve the files from internet.
// Jaba internet chaina , teti bela the browser should server the files from service workers.


