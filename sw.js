/* Service worker: permite usar las aplicaciones sin internet.
   Version 2 — incluye la pagina de inicio y las tres aplicaciones. */
var CACHE = "mcs-sistema-v2";
var ARCHIVOS = [
  "./", "index.html",
  "cotizador.html", "calculadora_materiales.html", "despiece_melamina.html",
  "manifest.webmanifest", "manifest-cotizador.webmanifest",
  "manifest-calculadora.webmanifest", "manifest-despiece.webmanifest",
  "icono-192.png", "icono-512.png",
  "icono-cotizador-192.png", "icono-cotizador-512.png",
  "icono-calculadora-192.png", "icono-calculadora-512.png",
  "icono-despiece-192.png", "icono-despiece-512.png"
];
self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){
    return Promise.all(ARCHIVOS.map(function(a){ return c.add(a).catch(function(){}); }));
  }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.map(function(k){ if(k!==CACHE) return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener("fetch", function(e){
  if(e.request.method!=="GET") return;
  e.respondWith(
    caches.match(e.request).then(function(r){
      return r || fetch(e.request).then(function(resp){
        var copia=resp.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request,copia); });
        return resp;
      }).catch(function(){ return caches.match("index.html"); });
    })
  );
});
