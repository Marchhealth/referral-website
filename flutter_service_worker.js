'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "386c73a7d167cad9836db5f5e629dc68",
"version.json": "1ea2234bcf9ef06489490ed1afc22fd1",
"index.html": "6f5e7ba4d0fedc70e33bb5e9269330cf",
"/": "6f5e7ba4d0fedc70e33bb5e9269330cf",
"main.dart.js": "4a10f1da17687d5b5d33ae1b1899cb47",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "6e376fbd99e68cb114139bf56d654947",
"icons/favicon-16x16.png": "7dedbf21914281fce45f1e4a9503027c",
"icons/favicon.ico": "6e376fbd99e68cb114139bf56d654947",
"icons/apple-touch-icon.png": "4d373388173121f2adf4e2c3c4ff5661",
"icons/Icon-192.png": "f6c96d2060f456b74127f555dab2c659",
"icons/Icon-maskable-192.png": "f6c96d2060f456b74127f555dab2c659",
"icons/Icon-maskable-512.png": "c167dd4f8ba048c890c2eb44e84c32e8",
"icons/Icon-512.png": "c167dd4f8ba048c890c2eb44e84c32e8",
"icons/favicon-32x32.png": "efe78dba86097eebf0553558a6ca90b1",
"manifest.json": "22b2b9bd52c12e67a46dc5a5df98d1b8",
"assets/AssetManifest.json": "2e991005e3e6ebdea40144f1810fcb4d",
"assets/NOTICES": "bcae222d32f1672ab80b5b7986c69233",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "09101d28d3383a8cb9096a2277b0b5f1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f69ce602124b41e79c81889b0ddbecbc",
"assets/fonts/MaterialIcons-Regular.otf": "2a4114fcffb6a3b158406b64a88b40f7",
"assets/assets/Rectangle%252010240@2x.png": "bdfd25ca6dbb394e32c48b155a0a1ac6",
"assets/assets/lock@2x.png": "2378c5bc1f6b734184f3485eb149688d",
"assets/assets/Image%252035@2x.png": "85cbd4135e49f4916e933d7c5b249c99",
"assets/assets/Image%252037@2x.png": "89cb83f5c414976fa5ad14bf5a899cf5",
"assets/assets/app-store-ios.svg": "c425d41c571a615550f59dead6074e99",
"assets/assets/Rectangle%252010242@2x.png": "4f10ab75f2f0a2ae5b3dbb3d685c3dd6",
"assets/assets/Image%252033@2x.png": "6cb2cce6487cbfa7434448b258ea3b8a",
"assets/assets/Image%252050@2x.png": "7dc9634a7a6a6dd8eabfb01ec4327bbd",
"assets/assets/Rectangle%252010239@2x.png": "7bfc17afb7c2f784e3ce39d8d7fed764",
"assets/assets/Group%25207.svg": "6e7424e58944f3802934eda3a0b39e97",
"assets/assets/telegram.svg": "88fed894674cd2db60b91cb3a4140cab",
"assets/assets/Image%252023@2x.png": "f2733a4125ef04a0592cd74a811b0e6a",
"assets/assets/Image%252031@2x.png": "1a441f9287f77eac7cfad57daf35f041",
"assets/assets/Image%252026@2x.png": "a1ae55bfd8c1fd2570cc0b833be9d379",
"assets/assets/Image%252045@2x.png": "fb9d78584e096d509177732c678fe1e0",
"assets/assets/Rectangle%252010241@2x.png": "31d767edab2f8502bd3c47257dea9c69",
"assets/assets/signin_bg.png": "5f942a2258f9eb42cd455b9bc2e70537",
"assets/assets/facebook.svg": "7c539af72c9bc471402e73e7962c0cdf",
"assets/assets/march.png": "ddd3b88df423013c9a436d6a445972fd",
"assets/assets/whatsapp.svg": "c66b598c0f16e0e93ed8db18ba020938",
"assets/assets/logo-google-playstore.svg": "95b1f69bb8c5ac6805e1674280b1e7fa",
"assets/assets/Mask%2520Group%25203@2x.png": "23e6edb0a2379367960bf8e81739807e",
"assets/assets/Instagram%2520Story%2520Share.png": "82e988c1d9181e28aa515b15576b0fd6",
"assets/assets/user_icon.svg": "c615c6f27f455bb04f1f31466e53fc9f",
"assets/assets/Image%252051@2x.png": "73ef420d068d873a07e7b4832e3acc9f",
"assets/assets/Image%252020@2x.png": "698f4939de6db4c461915f9376cea6ec",
"assets/assets/user@2x.png": "2dd5acc1c748dec8bee3209dfdf23ac0",
"assets/assets/Image%252030@2x.png": "b58756bb9a71e2661184db19768ce7c7",
"assets/assets/linkedin-rect.svg": "063ad32f09d701c28bcc930107fadefb",
"assets/assets/Path%252025825.svg": "03f547983dcf226d236fd2ba56541d52",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
