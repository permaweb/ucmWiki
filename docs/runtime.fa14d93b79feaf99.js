(()=>{"use strict";var e,v={},h={};function r(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return v[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(n,t,o,f)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,o,f]=e[i],l=!0,s=0;s<t.length;s++)(!1&f||a>=f)&&Object.keys(r.O).every(b=>r.O[b](t[s]))?t.splice(s--,1):(l=!1,f<a&&(a=f));if(l){e.splice(i--,1);var d=o();void 0!==d&&(n=d)}}return n}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[t,o,f]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>e+"."+{121:"9fccf8e2e2e112e1",409:"2984ae5d8fdddbaf",783:"3e3e622f45e36a80"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="arwiki:";r.l=(t,o,f,i)=>{if(e[t])e[t].push(o);else{var a,l;if(void 0!==f)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==n+f){a=u;break}}a||(l=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+f),a.src=r.tu(t)),e[t]=[o];var c=(g,b)=>{a.onerror=a.onload=null,clearTimeout(p);var m=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),m&&m.forEach(y=>y(b)),g)return g(b)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),l&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(o,f)=>{var i=r.o(e,o)?e[o]:void 0;if(0!==i)if(i)f.push(i[2]);else if(666!=o){var a=new Promise((u,c)=>i=e[o]=[u,c]);f.push(i[2]=a);var l=r.p+r.u(o),s=new Error;r.l(l,u=>{if(r.o(e,o)&&(0!==(i=e[o])&&(e[o]=void 0),i)){var c=u&&("load"===u.type?"missing":u.type),p=u&&u.target&&u.target.src;s.message="Loading chunk "+o+" failed.\n("+c+": "+p+")",s.name="ChunkLoadError",s.type=c,s.request=p,i[1](s)}},"chunk-"+o,o)}else e[o]=0},r.O.j=o=>0===e[o];var n=(o,f)=>{var s,d,[i,a,l]=f,u=0;if(i.some(p=>0!==e[p])){for(s in a)r.o(a,s)&&(r.m[s]=a[s]);if(l)var c=l(r)}for(o&&o(f);u<i.length;u++)r.o(e,d=i[u])&&e[d]&&e[d][0](),e[d]=0;return r.O(c)},t=self.webpackChunkarwiki=self.webpackChunkarwiki||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();