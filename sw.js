if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,n,r)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const a={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return c;case"module":return a;default:return e(s)}})).then(e=>{const s=r(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-6f0d2936"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"WFjhC_lqOjeRhcfNnslXu"},{url:"/_next/static/WFjhC_lqOjeRhcfNnslXu/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/WFjhC_lqOjeRhcfNnslXu/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/WFjhC_lqOjeRhcfNnslXu/pages/_app.js",revision:"917132a9a099ca01391beeac45193c22"},{url:"/_next/static/WFjhC_lqOjeRhcfNnslXu/pages/_error.js",revision:"46607851f40e196c19ebcb9514cd471b"},{url:"/_next/static/WFjhC_lqOjeRhcfNnslXu/pages/index.js",revision:"0dbef9dc969431ff904b7267f88f075a"},{url:"/_next/static/chunks/07b3bedc88d5602d0f74acc44296f684578c083c.69dfc3191da201f9e2e6.js",revision:"e03844ebd3724d17a7af5bcd403337c1"},{url:"/_next/static/chunks/framework.0f140d5eb2070c7e423d.js",revision:"a07dacbb502f5257565ceb7d460e71e6"},{url:"/_next/static/css/c2d46b144251ab498594.css",revision:"1ca1e28ff91b5d99a95f379a5cfbeddc"},{url:"/_next/static/runtime/main-30642b838fb823156c96.js",revision:"b78d22931c659fed0a4d72a1fc9abe5e"},{url:"/_next/static/runtime/polyfills-6f0326e3ea2ff008e462.js",revision:"9d341fca2b8674ee76f3dc2644d0a066"},{url:"/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/android-chrome-192x192.png",revision:"c87b3ef459c3d9e2ca89a7ce214ea64d"},{url:"/android-chrome-512x512.png",revision:"efa98c7406efc5721bade2c73ffb7ec5"},{url:"/apple-touch-icon.png",revision:"875608d0dc40d89e9b48b94e82489103"},{url:"/camera.png",revision:"43e5f9c38a4f3dfe491935c7834177ba"},{url:"/favicon-16x16.png",revision:"c86804fcb5629d4b5d5e8099439d9b7f"},{url:"/favicon-32x32.png",revision:"0cbcefe245f1bdfed30f1b48f8351ce6"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"},{url:"/mask.png",revision:"ffec62f1e75f878f02c6deb6635acbed"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));