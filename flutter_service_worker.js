'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dc1c6398d42f8cdb4f4bdf5734941c23",
"assets/AssetManifest.bin.json": "a9078e8f1d44443e5a05c308b49c5c8f",
"assets/AssetManifest.json": "ee62dbde38a7365e2c601e28626120d1",
"assets/assets/animations/loading.json": "1bb60051d187911200aef5a73b2a0bce",
"assets/assets/editor/mp3/novella_song.mp3": "7c2a5ff3a31fdb63d5f9dc0de34176b8",
"assets/assets/google_fonts/Nunito-Black.ttf": "27ee28fd596c0bd4235fa792d0d8b1ce",
"assets/assets/google_fonts/Nunito-BlackItalic.ttf": "47e66b00cd98f1925da80dd6b7ff29a1",
"assets/assets/google_fonts/Nunito-Bold.ttf": "ba43cdecf9625c0dcec567ba29555e15",
"assets/assets/google_fonts/Nunito-BoldItalic.ttf": "dc69781f4856bdb711087d1ae07ca208",
"assets/assets/google_fonts/Nunito-ExtraBold.ttf": "5b5a206f5cd32fa496c93925d0caf609",
"assets/assets/google_fonts/Nunito-ExtraBoldItalic.ttf": "e01118312e526f062fc8ad8f3c64de0e",
"assets/assets/google_fonts/Nunito-ExtraLight.ttf": "ef7ff1b92707646c2e02a39067aab385",
"assets/assets/google_fonts/Nunito-ExtraLightItalic.ttf": "f9088a8e7dae2fc4e88975f6e1726c93",
"assets/assets/google_fonts/Nunito-Italic-VariableFont_wght.ttf": "14e83abff83f855acdf3bfd30da3ad79",
"assets/assets/google_fonts/Nunito-Italic.ttf": "fac5c8ffb51e06094affdbb7fff9000e",
"assets/assets/google_fonts/Nunito-Light.ttf": "7de99c591b88e33ceda578f9ee140263",
"assets/assets/google_fonts/Nunito-LightItalic.ttf": "cdf25a6c9cbb6def64afcc30d3e511b9",
"assets/assets/google_fonts/Nunito-Medium.ttf": "d26cecc95cdc8327b337357e6c5c1f5b",
"assets/assets/google_fonts/Nunito-MediumItalic.ttf": "bd282ec988480f875b2f7cb0465ff7fa",
"assets/assets/google_fonts/Nunito-Regular.ttf": "b83ce9c59c73ade26bb7871143fd76bb",
"assets/assets/google_fonts/Nunito-SemiBold.ttf": "38257ec36f55676f98fcdf1264adb69d",
"assets/assets/google_fonts/Nunito-SemiBoldItalic.ttf": "4c2772c15392fbfdb077342b7851f66c",
"assets/assets/google_fonts/Nunito-VariableFont_wght.ttf": "ea0ad4c72a135f9a43ec7bb83f2469aa",
"assets/assets/google_fonts/OFL.txt": "dd1b38b4e8da56044ee38a8dd1473188",
"assets/assets/google_fonts/README.txt": "bdf4517d0ee51fa0fd4af6fd7296b607",
"assets/assets/images/404.svg": "ce017a9082a1317267cf55c2916911fd",
"assets/assets/images/apple_logo.svg": "2eda0603a8c9ff2fa69171e6dada6532",
"assets/assets/images/avatar.webp": "917abcb1a50b3e200725fa784157731e",
"assets/assets/images/empty.svg": "a5b9417c15d541ddafccdcb1ff0653af",
"assets/assets/images/google_logo.svg": "01ab8f8ae66bc358f0722669a8b4678c",
"assets/assets/images/login.svg": "dfd3717bc8caa620c0440af8914c22b6",
"assets/assets/images/otp.svg": "c322969b05bcf7aa1955e1229a85bb33",
"assets/assets/images/welcome.svg": "350a8314faee749e2fa2f924712a1b5e",
"assets/assets/translations/en.json": "fa348820c26793bb7a8153034396d1f3",
"assets/assets/translations/ru.json": "f412c341861d49ede8f37fb9462f94dc",
"assets/assets/translations/vi.json": "adbd02303ae78972d3d20feec1f1b70c",
"assets/FontManifest.json": "bf806de9bf001d565ab530372f2172cf",
"assets/fonts/Inknut_Antiqua/InknutAntiqua-Regular.ttf": "174da21c80975e95f76065b06ffb402d",
"assets/fonts/MaterialIcons-Regular.otf": "0bb1954480359ec14d5a2fecd73718a6",
"assets/NOTICES": "716672d433dba345de4038ab3df71e21",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/hugeicons/lib/fonts/hugeicons-stroke-rounded.ttf": "85511f0673daae174f9e9f28a9e0c86e",
"assets/packages/ming_cute_icons/lib/fonts/MingCute.ttf": "a3c5e8010a49ee1eb7354e09e5bd2e1f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "e171c7f88b77f98d75bfe88b4e073850",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d15ead2a19c459db1fe39131027ad1fd",
"/": "d15ead2a19c459db1fe39131027ad1fd",
"main.dart.js": "3fd439cf45dae13400e1b2aa5257bafb",
"manifest.json": "f0f3d16fabb287409cc3eaad891e8720",
"sqflite_sw.js": "7695c1827b581ba64c7ef136d4cdb2c8",
"sqlite3.wasm": "fe0b5f7d20d0d900508725319188a9a8",
"version.json": "165a61f9ffccd222bd3e33d1242b3af8"};
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
