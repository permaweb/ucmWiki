(()=>{"use strict";var e,v={},h={};function r(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return v[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=v,r.amdO={},e=[],r.O=(n,t,f,o)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,f,o]=e[i],l=!0,d=0;d<t.length;d++)(!1&o||a>=o)&&Object.keys(r.O).every(b=>r.O[b](t[d]))?t.splice(d--,1):(l=!1,o<a&&(a=o));if(l){e.splice(i--,1);var u=f();void 0!==u&&(n=u)}}return n}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[t,f,o]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>e+"."+{121:"25efbeec36ea1aa3",168:"8b16d93dbd71ea57",350:"ab161cb962a64f89",792:"ba030d574f0a4ef2",841:"10688dbe41d99f34"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="arwiki:";r.l=(t,f,o,i)=>{if(e[t])e[t].push(f);else{var a,l;if(void 0!==o)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var s=d[u];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==n+o){a=s;break}}a||(l=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+o),a.src=r.tu(t)),e[t]=[f];var c=(g,b)=>{a.onerror=a.onload=null,clearTimeout(p);var m=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),m&&m.forEach(y=>y(b)),g)return g(b)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),l&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(f,o)=>{var i=r.o(e,f)?e[f]:void 0;if(0!==i)if(i)o.push(i[2]);else if(666!=f){var a=new Promise((s,c)=>i=e[f]=[s,c]);o.push(i[2]=a);var l=r.p+r.u(f),d=new Error;r.l(l,s=>{if(r.o(e,f)&&(0!==(i=e[f])&&(e[f]=void 0),i)){var c=s&&("load"===s.type?"missing":s.type),p=s&&s.target&&s.target.src;d.message="Loading chunk "+f+" failed.\n("+c+": "+p+")",d.name="ChunkLoadError",d.type=c,d.request=p,i[1](d)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var n=(f,o)=>{var d,u,[i,a,l]=o,s=0;if(i.some(p=>0!==e[p])){for(d in a)r.o(a,d)&&(r.m[d]=a[d]);if(l)var c=l(r)}for(f&&f(o);s<i.length;s++)r.o(e,u=i[s])&&e[u]&&e[u][0](),e[u]=0;return r.O(c)},t=self.webpackChunkarwiki=self.webpackChunkarwiki||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();