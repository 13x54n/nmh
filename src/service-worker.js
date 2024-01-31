self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("your-app-name").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        // Add other static assets like CSS, JS, images, etc.
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
