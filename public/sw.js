if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let o={};const d=e=>n(e,a),t={module:{uri:a},exports:o,require:d};s[a]=Promise.all(c.map((e=>t[e]||d(e)))).then((e=>(i(...e),o)))}}define(["./workbox-3d9e5b44"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Convo.yaml",revision:"3fceac54c0afac6426e6b491808fa495"},{url:"/ConvoxDecentraland.mp4",revision:"688a7c5603e79fbb0d3ff60aacb24c75"},{url:"/Telegram-Convo.mp4",revision:"d5b90c625938f6d14cab49c161094171"},{url:"/_next/static/chunks/124-e7e54e8d017ed804.js",revision:"e7e54e8d017ed804"},{url:"/_next/static/chunks/165-ff8e982dd2185252.js",revision:"ff8e982dd2185252"},{url:"/_next/static/chunks/787-59d56f90ae9ec28e.js",revision:"59d56f90ae9ec28e"},{url:"/_next/static/chunks/978-d458e2579afe9c98.js",revision:"d458e2579afe9c98"},{url:"/_next/static/chunks/main-af2a2439b1485944.js",revision:"af2a2439b1485944"},{url:"/_next/static/chunks/pages/_app-2f1d8de60155a0bb.js",revision:"2f1d8de60155a0bb"},{url:"/_next/static/chunks/pages/_error-76f5fa2f2ec525a1.js",revision:"76f5fa2f2ec525a1"},{url:"/_next/static/chunks/pages/docs/Convo-API/api-docs-b309e2117dfed9a9.js",revision:"b309e2117dfed9a9"},{url:"/_next/static/chunks/pages/docs/Convo-API/node-tests-bee95e7e4cce5f63.js",revision:"bee95e7e4cce5f63"},{url:"/_next/static/chunks/pages/docs/Convo-API/omnid-24fc87b47169d495.js",revision:"24fc87b47169d495"},{url:"/_next/static/chunks/pages/docs/Convo-API/standards-6ed120468b07df80.js",revision:"6ed120468b07df80"},{url:"/_next/static/chunks/pages/docs/Convo-API/websocket-c1b6483001aad30f.js",revision:"c1b6483001aad30f"},{url:"/_next/static/chunks/pages/docs/Convo-Bridge/bridge-83ed911440f574fe.js",revision:"83ed911440f574fe"},{url:"/_next/static/chunks/pages/docs/Convo-Embeds/dynamic-embeddable-convo-39f792bd671d9f1f.js",revision:"39f792bd671d9f1f"},{url:"/_next/static/chunks/pages/docs/Convo-Embeds/embed-a-comment-207b3ddc76f9c595.js",revision:"207b3ddc76f9c595"},{url:"/_next/static/chunks/pages/docs/Convo-SDK/auth-5f770fdf17e942a2.js",revision:"5f770fdf17e942a2"},{url:"/_next/static/chunks/pages/docs/Convo-SDK/changelog-573b7b805243f10c.js",revision:"573b7b805243f10c"},{url:"/_next/static/chunks/pages/docs/Convo-SDK/comments-e2c4289f5ce77c80.js",revision:"e2c4289f5ce77c80"},{url:"/_next/static/chunks/pages/docs/Convo-SDK/installation-8236585ee233aa84.js",revision:"8236585ee233aa84"},{url:"/_next/static/chunks/pages/docs/Convo-SDK/omnid-3331376fddcfb25b.js",revision:"3331376fddcfb25b"},{url:"/_next/static/chunks/pages/docs/Convo-SDK/threads-217e20f7ae0973c4.js",revision:"217e20f7ae0973c4"},{url:"/_next/static/chunks/pages/docs/Convo-SDK/utils-e6bf827f5e73de88.js",revision:"e6bf827f5e73de88"},{url:"/_next/static/chunks/pages/docs/ConvoX/brightid-8c26c31773b7bcf9.js",revision:"8c26c31773b7bcf9"},{url:"/_next/static/chunks/pages/docs/ConvoX/browser-extension-5261541f945d0ea9.js",revision:"5261541f945d0ea9"},{url:"/_next/static/chunks/pages/docs/ConvoX/convo-figma-c9f12239bf0765ed.js",revision:"c9f12239bf0765ed"},{url:"/_next/static/chunks/pages/docs/ConvoX/convo-on-decentraland-6a7f79e0348a3d62.js",revision:"6a7f79e0348a3d62"},{url:"/_next/static/chunks/pages/docs/ConvoX/omnid-forta-2384e01b81a71adb.js",revision:"2384e01b81a71adb"},{url:"/_next/static/chunks/pages/docs/ConvoX/omnid-metamask-03407d1eab3f7162.js",revision:"03407d1eab3f7162"},{url:"/_next/static/chunks/pages/docs/Tutorials/coming-soon-795195cdd0ba17ad.js",revision:"795195cdd0ba17ad"},{url:"/_next/static/chunks/pages/examples/browser-e3b1acd5afc431ed.js",revision:"e3b1acd5afc431ed"},{url:"/_next/static/chunks/pages/examples/decentraland-ef7a64774ca07520.js",revision:"ef7a64774ca07520"},{url:"/_next/static/chunks/pages/examples/nextjs-6b296ba4b7dab42a.js",revision:"6b296ba4b7dab42a"},{url:"/_next/static/chunks/pages/examples/snap-fc67c8e69aeb746d.js",revision:"fc67c8e69aeb746d"},{url:"/_next/static/chunks/pages/index-982cb8c4e64c4ce7.js",revision:"982cb8c4e64c4ce7"},{url:"/_next/static/chunks/pages/learn/conviction-voting-2d176451906b14cf.js",revision:"2d176451906b14cf"},{url:"/_next/static/chunks/pages/learn/read-about-convo-a3079e3ebdbd9b1a.js",revision:"a3079e3ebdbd9b1a"},{url:"/_next/static/chunks/pages/learn/web3-glossary-cabb96996c2c308f.js",revision:"cabb96996c2c308f"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-87be80862a7ca928.js",revision:"87be80862a7ca928"},{url:"/_next/static/css/40189741cd681967.css",revision:"40189741cd681967"},{url:"/_next/static/css/cbe0d6ee4dd5617e.css",revision:"cbe0d6ee4dd5617e"},{url:"/_next/static/ww0eva03JjKgTJSYBqnhj/_buildManifest.js",revision:"f669d801eb53f579d65480274a1e6857"},{url:"/_next/static/ww0eva03JjKgTJSYBqnhj/_middlewareManifest.js",revision:"468e9a0ecca0c65bcb0ee673b762445d"},{url:"/_next/static/ww0eva03JjKgTJSYBqnhj/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/addtom.png",revision:"596bed2b29cc46fda4f9feea147ac3e2"},{url:"/android-icon-192x192.png",revision:"5cefa2531350cd9433a746a5e697366d"},{url:"/apple-icon-180x180.png",revision:"f614488962f62a02d2ec06418ac970bb"},{url:"/apple-icon.png",revision:"e8b7fa13ab70841568fcd15d4132efff"},{url:"/conviction-voting.jpeg",revision:"8fd3f7df42e2fdc9b018168782a4d3fa"},{url:"/dark.png",revision:"e8b7fa13ab70841568fcd15d4132efff"},{url:"/ecosystem.webp",revision:"b5b18cad0c4116f2f7d73571bbfbca94"},{url:"/ecosystem/convo/api/ceramic.png",revision:"b6ed10cb29f34e73f303930db410fc2f"},{url:"/ecosystem/convo/api/filecoin.png",revision:"8c83a0a54234741f8debc52b0561b68d"},{url:"/ecosystem/convo/api/ipfs.png",revision:"808e6416dfb1fed3fadd89cebd9b2251"},{url:"/ecosystem/convo/api/textile.png",revision:"dfebba5889afaca7df3d7e7a46696c12"},{url:"/ecosystem/convo/bridge/discord.png",revision:"10add2a72af9e2648ec63f3de84d3dd5"},{url:"/ecosystem/convo/bridge/slack.png",revision:"8497cbbe06b50fc02e9ac6287472b621"},{url:"/ecosystem/convo/bridge/telegram.png",revision:"567b27c1901d0d16fa95e8ec17c99919"},{url:"/ecosystem/convo/bridge/twitch.png",revision:"69ad5e09a6556701895b9f1d9d5a8c7c"},{url:"/ecosystem/convo/bridge/zoom.png",revision:"320d03240630db04e8c5ceadf31a5a05"},{url:"/ecosystem/convo/chains/celo.png",revision:"e1489cd6260ae47262c81f4539a9b297"},{url:"/ecosystem/convo/chains/cosmos.png",revision:"d8ab215bf24f43bbf1d025379aa9c368"},{url:"/ecosystem/convo/chains/ethereum.png",revision:"22f357403c4bb3e019829c8f5991e15d"},{url:"/ecosystem/convo/chains/flow.png",revision:"db85ecebbd452b6ee50b0e0b9dd73070"},{url:"/ecosystem/convo/chains/near.png",revision:"b2599d78f6e23895ea9f1803ff281a35"},{url:"/ecosystem/convo/chains/solana.png",revision:"504e136a07ee95462398835d55dc379b"},{url:"/ecosystem/convo/convox/chrome.png",revision:"a3b9ddfd72db4b7fda6ce3a88f8f373c"},{url:"/ecosystem/convo/convox/decentraland.png",revision:"fa0765fc5c70729164265792fdac5aad"},{url:"/ecosystem/convo/convox/figma.png",revision:"9c65331070ba46958ff5630555f442d4"},{url:"/ecosystem/convo/convox/forta.png",revision:"8ce57377e76a95da1444f47cec445ea5"},{url:"/ecosystem/convo/convox/metamask.png",revision:"d799bb4ccc5937b160ad3ed1cfee8188"},{url:"/ecosystem/convo/convox/snapshot.png",revision:"2251c1a098b587f81f0821d8cf01f7d5"},{url:"/ecosystem/omnid/dao/boardroom.png",revision:"4f12b4156425964da559e5aaa86ea4ba"},{url:"/ecosystem/omnid/dao/coordinape.png",revision:"72be05074a3fdb3c46d532e659c0ca63"},{url:"/ecosystem/omnid/dao/deepdao.png",revision:"60a06f0ab1cda39a6a227ef9c8a8e1ac"},{url:"/ecosystem/omnid/dao/metagame.png",revision:"adc931d5c5bd45f1759f1ea6490687a4"},{url:"/ecosystem/omnid/defi/aave.png",revision:"f0a960398f12c36bc84be5de6f5afdc7"},{url:"/ecosystem/omnid/defi/arcx.png",revision:"69b31456dc23fedb21b600a0b50c6b0e"},{url:"/ecosystem/omnid/defi/debank.svg",revision:"4e465a4e5259fa550fa2a032351a4648"},{url:"/ecosystem/omnid/defi/polygon.png",revision:"8150cfcf2b1c7aca2d816116b87d1cfe"},{url:"/ecosystem/omnid/defi/sybil.png",revision:"14db3e4c15d0a650d5a8532bcf8fab46"},{url:"/ecosystem/omnid/eco/celo.png",revision:"d4c0f73ce344238707baf3c1cb4f3e08"},{url:"/ecosystem/omnid/eco/dapplist.png",revision:"be14570b25c9cb0acb151bf6452a6f52"},{url:"/ecosystem/omnid/eco/ens.png",revision:"8abdd6f22a35d4457bd50a14c05089db"},{url:"/ecosystem/omnid/eco/forta.png",revision:"9873e148e9c77e5dfb2bec12d2a89b52"},{url:"/ecosystem/omnid/eco/gitcoin.png",revision:"7cd3b183702053b93502d71fafd92df9"},{url:"/ecosystem/omnid/eco/mirror.png",revision:"1b7dc5672eabc5c40347dc4b5cdd1df1"},{url:"/ecosystem/omnid/eco/rabbithole.png",revision:"4bf5d405dbd51c4a43af00f04cf78df2"},{url:"/ecosystem/omnid/eco/unstoppable.png",revision:"2daa85f1ae5c590c05b469f7b85e6989"},{url:"/ecosystem/omnid/identity/brightid.png",revision:"40e5e869f23b35eb3645d2d4f38d7339"},{url:"/ecosystem/omnid/identity/cyberconnect.png",revision:"cde0e423e6d4e783cdbf99d36ac00469"},{url:"/ecosystem/omnid/identity/hiveone.png",revision:"790bae0516a29b19a1015796daac9f65"},{url:"/ecosystem/omnid/identity/idena.png",revision:"0331c05375884b2523eb0b262df46d9e"},{url:"/ecosystem/omnid/identity/idx.png",revision:"beb8fc089bc02b91c301b1e6ef743a29"},{url:"/ecosystem/omnid/identity/poh.png",revision:"ece5e230843b324b51a88920754720cd"},{url:"/ecosystem/omnid/identity/popp.png",revision:"aa89a92d533a83a0fcf4e3f64c4e1878"},{url:"/ecosystem/omnid/identity/projectgalaxy.png",revision:"44094bf623f4a71fc5d13f34b701dd68"},{url:"/ecosystem/omnid/identity/rss3.png",revision:"0a8850ff48a204f19cc1c364f4b0727c"},{url:"/ecosystem/omnid/nfts/asyncart.png",revision:"ce4750f444185bca13ca994b64ce5729"},{url:"/ecosystem/omnid/nfts/coinvise.png",revision:"f9447c100b698a0edfdcaab736873e8b"},{url:"/ecosystem/omnid/nfts/context.png",revision:"184b0c95846c78df8497dba16e8985d9"},{url:"/ecosystem/omnid/nfts/foundation.png",revision:"1267e14626d2f46e8535b68da5f77981"},{url:"/ecosystem/omnid/nfts/knownorigin.png",revision:"81820d032186d16154c06f4c807ab4fa"},{url:"/ecosystem/omnid/nfts/rarible.png",revision:"a422927a473af65d8f224188f21925c7"},{url:"/ecosystem/omnid/nfts/showtime.png",revision:"1f09e7f4ef515e172e35e6d31e12d290"},{url:"/ecosystem/omnid/nfts/superrare.png",revision:"a7e9833ba63bc89298df679213d8081d"},{url:"/ecosystem/omnid/nfts/zora.png",revision:"9a5ae7f51c92f63adae071bed7e2137e"},{url:"/ecosystem/omnid/phishing/cryptoscamdb.png",revision:"da2dbd894ae6faf64f797830730c47e1"},{url:"/ecosystem/omnid/phishing/etherscan.png",revision:"542518895c230a03df4cef0e20ecc6f5"},{url:"/ecosystem/omnid/phishing/mew.png",revision:"c7f13fa26347a80756f3ac0578d9b8fc"},{url:"/favicon-16x16.png",revision:"2adc41bb2862f4e0c23c3a4040c64987"},{url:"/favicon-32x32.png",revision:"fff8b9ad53c697fe7872224ff56fa9e6"},{url:"/favicon-96x96.png",revision:"b7182cb4b1f9d7c32985ee73916f439b"},{url:"/favicon.ico",revision:"f95458920f3a8709e671c49e8eb2f975"},{url:"/flow.png",revision:"c8f29a57187c250bf5d1f2d25a09ca17"},{url:"/glossary/glossary.json",revision:"a121d3d03289de518f6938f783278b6d"},{url:"/manifest.json",revision:"49e7e15f71032dd6f29a975de7e292e0"},{url:"/ms-icon-144x144.png",revision:"0062837a3ca3058c0b14a45570df912c"},{url:"/omnid.png",revision:"0a0d3dd7df367885a0b1e512ec0611dc"},{url:"/poster.png",revision:"413963fc325dab332233499af93a7c9c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
