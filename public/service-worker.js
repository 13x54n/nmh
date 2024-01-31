// Import the Workbox libraries
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.0/workbox-sw.js");

// Configure Workbox
workbox.setConfig({ debug: false });

// Cache the static assets
// workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// Cache the Google Fonts using the CacheFirst strategy
// workbox.routing.registerRoute(
//   ({ url }) => url.origin === "https://fonts.googleapis.com",
//   new workbox.strategies.CacheFirst()
// );

// Cache the API requests using the NetworkFirst strategy
// workbox.routing.registerRoute(
//   ({ url }) => url.pathname.startsWith("/api"),
//   new workbox.strategies.NetworkFirst()
// );

// Serve the offline page if the network request fails
workbox.routing.setCatchHandler(({ event }) => {
  return caches.match(workbox.precaching.getCacheKeyForURL("/offline.html"));
});