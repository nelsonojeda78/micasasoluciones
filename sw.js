/* Service worker: permite usar las aplicaciones sin internet Y que se actualicen solas.
   Version 6 — estrategia "red primero" para las paginas: cuando hay internet siempre
   carga la version mas reciente; sin internet usa la copia guardada. */
var CACHE = "mcs-sistema-v6";
var ARCHIVOS = [
  "./", "index.html",
  "cotizador.html", "calculadora_materiales.html", "despiece_melamina.html",
  "encuesta_precios.html",
  "manifest.webmanifest", "manifest-cotizador.webmanifest",
  "manifest-calculadora.webmanifest", "manifest-despiece.webmanifest",
  "manifest-precios.webmanifest",
  "icono-192.png", "icono-512.png",
  "icono-cotizador-192.png", "icono-cotizador-512.png",
  "icono-calculadora-192.png", "icono-calculadora-512.png",
  "icono-despiece-192.png", "icono-despiece-512.png",
  "icono-precios-192.png", "icono-precios-512.png"
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
  var url = e.request.url;
  var esPagina = e.request.mode==="navigate" || /\.html($|\?)/.test(url) || /\/$/.test(url);
  if(esPagina){
    /* RED PRIMERO: asi una actualizacion se ve apenas hay internet */
    e.respondWith(
      fetch(e.request).then(function(resp){
        var copia = resp.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copia); });
        return resp;
      }).catch(function(){
        return caches.match(e.request).then(function(r){
          return r || caches.match("index.html") || caches.match("calculadora_materiales.html");
        });
      })
    );
  } else {
    /* CACHE PRIMERO para iconos y manifiestos: son fijos y cargan mas rapido */
    e.respondWith(
      caches.match(e.request).then(function(r){
        return r || fetch(e.request).then(function(resp){
          var copia = resp.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, copia); });
          return resp;
        }).catch(function(){});
      })
    );
  }
});
