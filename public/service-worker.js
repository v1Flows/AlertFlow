if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>a(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-e9849328"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"b4402e4047ef5948c48a33e2d8630aa5"},{url:"/_next/static/T8REYVg7OCzl-HTov9xNb/_buildManifest.js",revision:"dd7ea1711d826cef91b8d1cd21418e8d"},{url:"/_next/static/T8REYVg7OCzl-HTov9xNb/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1059-813c818ee51c45d4.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/1206-7aea4320f85cc7f5.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/1251-72f92590d2f2b0c5.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/1265-7cad29317b8ef856.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/1388-95192220905136b2.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/1648-226d9ba67f0363c0.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/1835-4aad496e18a6c79e.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/1849-c9f4b01c2e8fc07d.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/1855-d4e3d75b5cff86b1.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/191-80768d6253ff4ee4.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/1930-b630aa42f7840d36.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/2314-37a21106563a32b4.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/2329-38e39061fc7fa9e1.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/2570-e21af88b918365ce.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/2632-de5a7d154957c938.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/2784-ac25342e13be45cc.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/3011-263905d45fa6d1ac.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/3084-cda9e428d3dbe7d5.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/317-731dd0b60bd5d6b5.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/3283-fbb4f2324adab144.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/343c49c2-4a70a2be4f5f1ea5.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/3523-2ceaf751b960b309.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/3560-2c6d1396dae0834f.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/3698-91ba9eedd4fa1655.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/3925-46068eec3baff91e.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/3940-0adfd8b47da9ee23.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/3942-09c8a700856b43df.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/4298-69fdad9bd27f76ef.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/4432-8272cf8d4252e5ab.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/4546-fa511ba341a01dba.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/5112-727e17f0a5826d15.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/5540-c54cec707860c265.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/5798-f5624cae47dbe840.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/5922-0d4c1e8082348495.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/6-ef5ec4ae9cc36ac1.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/6421-673d19c5c1fe84c7.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/6683-193c0fb526ffea20.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/6757-9b580f6b7fd8d932.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/7086-a5cf5ee00d6c513d.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/7375-67a1b11bce446cf3.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/7664-65d80a7857e7ce39.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/7942-f0dd0c08cd411537.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/867-da0a08c22b4c1c3e.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/9000-18c603b1e05428c4.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/9343-649c23affe899503.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/9362-b8a51ec933f9343f.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/9503-1d5a2055502db810.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/9618-4c0b8c2668fdb051.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/9851-87e454e50c86e8b2.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/9932-519f77227aa0bb50.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/_not-found/page-8c4d5f08fb94c9d0.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/admin/executions/page-c898034dcbf55078.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/admin/flows/page-9616ea0ee2e8e603.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/admin/layout-f3192b92b784fddb.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/admin/payloads/page-fc3cee87cabaaeda.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/admin/plans/page-4f2fbbe9b1203b70.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/admin/projects/page-e4953bec68512619.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/admin/runners/page-4a9bd05e480111e1.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/admin/settings/page-e55c6e557ee41316.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/admin/tokens/page-02609dac6d60043a.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/admin/users/page-e117710719c430f6.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/auth/layout-f4de182792b2748d.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/auth/signup/page-ab8d9cbdd68b54f5.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/dashboard/flows/%5Bid%5D/execution/%5BexecutionID%5D/page-d7ca0185263a36d0.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/dashboard/flows/%5Bid%5D/page-971bc501cdb39602.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/dashboard/flows/page-3cfec90e3ca6b307.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/dashboard/layout-af252bc2ea75c720.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/dashboard/page-b5c925b6aa79ba29.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/dashboard/projects/%5Bid%5D/page-3605165cec511c3c.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/dashboard/projects/page-e93ac148e68f17af.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/error-6bc29ee908ab32a2.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/layout-5e6ed2ee1eb60e51.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/maintenance/layout-14820fa721fc5967.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/maintenance/page-d9ef8077702634f5.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/page-1a04a50e80a394fc.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/user/%5Bid%5D/layout-ec15fd6312b33c54.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/app/user/%5Bid%5D/page-30e2ace7c450a681.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/eadb0846-810a25fbabb1fed1.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/framework-20afca218c33ed8b.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/main-03a31f417a9ee6fa.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/main-app-d8a99339a44c2462.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/pages/_app-ea03efd57607456c.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/pages/_error-d5b466dd8f76c347.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-c7da189a1beed5f5.js",revision:"T8REYVg7OCzl-HTov9xNb"},{url:"/_next/static/css/3b5ffe9dec63e438.css",revision:"3b5ffe9dec63e438"},{url:"/_next/static/css/e15f5910d5a67ba3.css",revision:"e15f5910d5a67ba3"},{url:"/_next/static/media/122c360d7fe6d395-s.p.woff2",revision:"9b2795fb691d8f8a83312a4436f5a453"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/9bbb7f84f3601865-s.woff2",revision:"d8134b7ae9ca2232a397ef9afa6c8d30"},{url:"/_next/static/media/9f05b6a2725a7318-s.woff2",revision:"afbfd524bdefea1003f0ee71b617e50e"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/a8eac78432f0a60b-s.woff2",revision:"be605f007472cc947fe6b6bb493228a5"},{url:"/_next/static/media/c740c1d45290834f-s.woff2",revision:"bff99a4bbc4740c49b75b52f290be90e"},{url:"/_next/static/media/d0697bdd3fb49a78-s.woff2",revision:"50b29fea20cba8e522c34a1413592253"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/favicon.ico",revision:"eea0b0d7e5ae945fdda67c142cbb12b3"},{url:"/icons/af_logo_500x500.png",revision:"a7eb084c87a190ebea9b4cd55856933b"},{url:"/icons/android-icon-192x192.png",revision:"55726d0ef4dd7f43e0f4065f76a10a1c"},{url:"/icons/mstile-310x310.png",revision:"963a0c90af00a3fa87a2c1505795e1b6"},{url:"/images/af_logo_black.png",revision:"c22dbb2d41aa9b82654e14da84012ce0"},{url:"/images/af_logo_white.png",revision:"bae9986d40a2580e927b929231c41647"},{url:"/images/dashboard.png",revision:"73b7e6041fadd52f999febb1945fcd7f"},{url:"/images/dashboard_plan.png",revision:"d4282783d8eeae60a11ec3bd88fde906"},{url:"/images/featureBackground.svg",revision:"c847a655615d10c16ba77e4f5a92b6d5"},{url:"/images/project_page.png",revision:"05889c974bf32a08a197382df60c7837"},{url:"/manifest.json",revision:"356403aebe2c2781e2f724840f80f256"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/static/images/dashboard_project_full.png",revision:"73b7e6041fadd52f999febb1945fcd7f"},{url:"/sw.js",revision:"1521d2cef6fddc7a484ee4b9582ee051"},{url:"/sw.js.map",revision:"7d68104f5a7d68065c0781a5d118a218"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
