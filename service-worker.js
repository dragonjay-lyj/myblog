<<<<<<< HEAD
if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const c=e=>n(e,r),u={module:{uri:r},exports:t,require:c};i[r]=Promise.all(o.map((e=>u[e]||c(e)))).then((e=>(s(...e),t)))}}define(["./workbox-a69a5c93"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"848e26456c7bf59c34f47721f23e0cae"},{url:"css/index.css",revision:"983c4e474e0cf3a8c64255d6706eb877"},{url:"/",revision:"index-20240827021105691"},{url:"music/",revision:"music-20240827021105691"},{url:"about/",revision:"about-20240827021105691"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
=======
if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const c=e=>n(e,r),u={module:{uri:r},exports:t,require:c};i[r]=Promise.all(o.map((e=>u[e]||c(e)))).then((e=>(s(...e),t)))}}define(["./workbox-a69a5c93"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"06baf56166322b145342b9762a7cae63"},{url:"css/index.css",revision:"3fac244c69c9a5bf80a14974a62a9ef3"},{url:"/",revision:"index-20240827014412590"},{url:"music/",revision:"music-20240827014412590"},{url:"about/",revision:"about-20240827014412590"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
>>>>>>> 186ca9b9bb38884780a012ae83d601cee0b9d252
//# sourceMappingURL=service-worker.js.map
