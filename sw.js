if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),u={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-1504e367"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/About-CM7MPnCA.js",revision:null},{url:"assets/Home-Cl9cXFjx.js",revision:null},{url:"assets/index--bvG1fm2.js",revision:null},{url:"assets/index-BjeOz9Hf.css",revision:null},{url:"assets/User-ClhnrIvT.js",revision:null},{url:"index.html",revision:"d7b51aed87d647b5d36a4e80dd128e2d"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"27ba7c7844f817d7a9e78bc992e83004"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/jsonplaceholder\.typicode\.com\/users/,new e.NetworkFirst({cacheName:"api-cache",plugins:[]}),"GET")}));
