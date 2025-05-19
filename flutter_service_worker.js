'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
".git/COMMIT_EDITMSG": "934f99c2e7051850d1830f67cf040f9b",
".git/FETCH_HEAD": "fd6135d0e3e25280e53a033416579622",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b7/ba811ff2ed3e2ab0d7b043f10f8661851b8c9c": "80925dceb025989a9508d21e87c75b6a",
".git/objects/b7/ab5afe7518ed56d668a88ff8026015bd64558f": "424e0e4a37c0a42d246ce6703780c1f1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/92/d594105e42ce0eed7639e60a2f6156dfe00bd5": "aa49adc63363662a8756d3156e467836",
".git/objects/82/02c829924eab8cb6bc32e7cc50f602047b9775": "b9bb6097076116dc2bec21092f729358",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/ec/8882c675426d9937f4fab14f69d6eca122ac81": "52b838770fc19567f947c92303cddea9",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/3c/5eb6d5cae82bd2ab851254269557dc54ee029c": "a18bd0065eb5624442b9b2caa8a33c97",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/01/fde51b4350be3020c91e3138a956077fbd15be": "eab8c5015a8f4cc2e053896ef6f8c0ae",
".git/objects/14/66bf2b2e275df770cd8c4b7e5c08ff456a0b34": "cc4ff06d4bdd4fb33df6ebb800975476",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/05/1115d279c0564ca3514cac248ca969a0939024": "733ea876eb60e361db0ee72dcec15a98",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/71/866dd2156c6ce463dee20bc7f25403028bd3f4": "3e8f02965b30b2e34dd8553ea6598593",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/b8/ea236e0498431697b70fae659db83b27c3f030": "02955b366c1ba338ba4202716a5ee0d2",
".git/objects/da/ba6f82d4fc27b1da87d7ee78a7c13add626589": "1b58a788e669f85f45726ea0482b393e",
".git/objects/5c/8a474311235b048c4d63e3a41c330d76e7186b": "a6c57b44728e21f7bc39e185c9337bcc",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/86/de951c42658dca9a0534070398cf0838a4a022": "9881f4528ad545cdc2eb79002613dab3",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/72/0347ba9ccf75dd80d34de07e4395d48ffdb0a3": "26365fe34d3e786bdbccf5cb9ae777e3",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/c5/760a5048b992fd95cd97a67013ddee20e4add3": "e0192d52d3d18b2b76f66370d99f491b",
".git/objects/f8/8bc394cf6f96075e0f2910a7fb87b7b3fe00e4": "0df0814d38100850b9a4b9bb4aef7690",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/a2/135e4737c1da3a28f01aadcb715a8cc397246a": "8ee411c1e44ae8d2ad1cbd4301ddc771",
".git/objects/e1/337f2a2f9f60309147bbba085135c32852bc5b": "016a4183b78cc30496322cfac3e9b9bb",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/6e/ccdb5b5f329a789e7ed216d3f4291136242061": "29d8fbe5934212ced00be2acd48830c6",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/93/64a51b1b192365ab559cdaf89d31f70dcb70b6": "f08096920ea89cb597214d06fef63aba",
".git/objects/dc/a1ee6acbcabdb3ba97a6708d10eb83ffb11487": "39a368201ff063a38981d03f7ba67b11",
".git/objects/8d/10869f70b7befa66b149199ea33e35121a431c": "064653824eed6970767fa420fb071d78",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/0d/1f7bc83330f8ae0fe77c4fc368484a9c5d3bda": "f089dda78e12da95a2ee963ce5be0732",
".git/objects/pack/pack-e973cec53587a2224b9f346166205477a51ee147.pack": "e81e96d7188492dc830b0587597ff6e1",
".git/objects/pack/pack-e973cec53587a2224b9f346166205477a51ee147.idx": "af84eb227f810fab553f4102350c312d",
".git/objects/47/faf70319afabfae4e41498b4a13357b291c385": "1817f55585243610d306f6cc6614731a",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/8b/1f5a47c1f841cdb4671fdedaa18e22346e82d4": "c41e5ea0aa63c0817e81da8920fd2d89",
".git/objects/fb/333d0e1e507ec01081d484b9f1b119157f46fb": "f1e8e16a7b1d228969062b68d8895933",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/refs/heads/gh-pages": "4e5ee45789c7c0e7fa4a166f2152cb9c",
".git/refs/remotes/origin/main": "1c87019ed18a47398669f5cbdbd9677f",
".git/refs/remotes/origin/gh-pages": "4e5ee45789c7c0e7fa4a166f2152cb9c",
".git/AUTO_MERGE": "61c751e8d681b4ddaa904d03aeab7be9",
".git/logs/HEAD": "73a9b685910fe349ad1aac89066abd50",
".git/logs/refs/heads/gh-pages": "c3e90127304b9142e3e6c4ea6ed8dab4",
".git/logs/refs/remotes/origin/main": "dde84079dac49fd496ad9e0e1fb86e0c",
".git/logs/refs/remotes/origin/gh-pages": "477e9195769d36464ea9a3f6f2288e1b",
".git/ORIG_HEAD": "f5deb6e8341e77b50fdac61e6ae51a5e",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "dfa4f1e37b62624294e285c57680589a",
".git/config": "a6aba341a1fe204b678cd41778b0c65b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "009c9e65172e010890f7f65fde438006",
"main.dart.js": "d13c334a5401689863d964d309e1b34a",
"assets/AssetManifest.bin.json": "6ce819b9e9cfc96385b39fa3d180e2e4",
"assets/AssetManifest.json": "0933fc7cbb41bf04452d4a407aebdc8e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a74672aed2eed43d8104b267c698a8f4",
"assets/NOTICES": "3634daf6938213b31c1b335cd9a182be",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/images/GOS2City.png": "6d460a13fcede3ca262cb381f4cfe2c3",
"assets/images/GOS2Town.png": "3fec18721162ca2936653fb6610538d7",
"assets/images/GOS2Forest.png": "673d02f3d46d264078c461ec4e3ed1f6",
"assets/images/GOS2Stream.png": "4f66d62052de4efdadae3bbf5325cc49",
"assets/images/BallGame.png": "5d64bc2c7b1776f0f481589f61b05f15",
"assets/images/DiveSim.jpg": "4ea854ca5ab886efc1965a0b2ce4b8a0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8991d512626f87e1d7ce9c3f4a8c046b",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"index.html": "80b7f3c2a7bb29c643595523dbc0fc2e",
"/": "80b7f3c2a7bb29c643595523dbc0fc2e",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c"};
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
