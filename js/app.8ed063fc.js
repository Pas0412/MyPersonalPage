(function(){var e={1993:function(){},2260:function(e,n,t){"use strict";var o=t(9242),r=t(3396);const i={id:"app"};function a(e,n,t,o,a,c){const s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(s)])}var c=t(1993),s=t.n(c),l=t(89);const u=(0,l.Z)(s(),[["render",a]]);var d=u,f=t(678),h=t.p+"img/logo.b723e181.png",v=t.p+"media/island.39f7ae34.mp4",m=t.p+"img/github-fill.e464a11f.svg",p=t.p+"img/linkedin-box-fill.124dcd49.svg",g=t.p+"img/yonghui.a322f21c.jpg";const y=(0,r.uE)('<section class="main-structure"><header><a href="#"><div class="logo">Personal Page</div></a><div class="menu"><img src="'+h+'" alt=""><span>click here -&gt;</span><div class="menu-logo"></div></div></header><div class="content"><video class="active" src="'+v+'" autoplay muted loop></video><div class="video-overlay"></div><section class="text-description"><h1>Yonghui HUANG</h1><h2>Software Developer</h2><p>Yonghui is currently studying Software Engineering in Université de Technologie de Belfort-Montbéliard for his Master degree(Diplôme d&#39;Ingénieur) in Belfort, France.</p><a href="#">CONTACT</a></section></div><footer><a href="https://github.com/Pas0412"><img src="'+m+'" alt=""></a><a href="https://www.linkedin.com/in/yonghui-huang-b2706a15b/"><img src="'+p+'" alt=""></a></footer></section>',1),w={class:"aside-menu"},b=(0,r._)("img",{src:g,alt:""},null,-1),x=(0,r._)("a",{href:"MyPersonalPage/static/resume.pdf",download:"简历-黄永辉.pdf"},[(0,r._)("span",null,"RESUME")],-1),O=(0,r._)("span",null,"MATRIX",-1);function _(e,n,t,o,i,a){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[y,(0,r._)("section",w,[b,x,(0,r.Wm)(c,{to:"/matrix",class:"matrix"},{default:(0,r.w5)((()=>[O])),_:1})])],64)}const k="active";var E={name:"home",mounted(){const e=document.querySelector(".main-structure"),n=document.querySelector("header .menu .menu-logo");n.addEventListener("click",(()=>{n.classList.toggle(k),e.classList.toggle(k)}));const t=document.querySelector(".content .text-description a");t.addEventListener("mouseenter",(()=>{t.textContent="Email: huangyh__123@163.com"})),t.addEventListener("mouseleave",(()=>{t.textContent="CONTACT"})),t.addEventListener("click",(()=>{t.textContent="Email: huangyh__123@163.com"}))}};const M=(0,l.Z)(E,[["render",_]]);var P=M;const C={class:"matrix-container"},R={ref:"canvasRef"};function S(e,n,t,o,i,a){return(0,r.wg)(),(0,r.iD)("div",C,[(0,r._)("canvas",R,null,512)])}var T=t(4870),j={name:"matrix",setup(){const e=(0,T.iH)(null);return(0,r.bv)((()=>{const e=document.querySelector("canvas"),n=e.getContext("2d");e.width=window.innerWidth*devicePixelRatio,e.height=window.innerHeight*devicePixelRatio;const t=10*devicePixelRatio;n.font=`normal ${t}px Roboto Mono`;const o=Math.floor(e.width/t),r=new Array(o).fill(0);function i(){const e="0123456789abcdefghijklmnopqrstuvwxyz";return e[Math.floor(Math.random()*e.length)]}function a(){n.fillStyle="rgba(0, 0, 0, 0.1)",n.fillRect(0,0,e.width,e.height),n.fillStyle="#6BE445",n.textBaseline="top";for(let a=0;a<o;a++){const o=i(),c=a*t,s=r[a]*t;n.fillText(o,c,s),s>e.height&&Math.random()>.99?r[a]=0:r[a]++}}setInterval(a,20)})),{canvasRef:e}}};const L=(0,l.Z)(j,[["render",S]]);var q=L;const A=(0,f.p7)({history:(0,f.r5)(),routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:P},{path:"/matrix",name:"matrix",component:q}]});var D=A;const B=(0,o.ri)(d);B.use(D),B.mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var c=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(u--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/MyPersonalPage/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],c=o[1],s=o[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(s)var u=s(t)}for(n&&n(o);l<a.length;l++)i=a[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},o=self["webpackChunkmypersonalpage"]=self["webpackChunkmypersonalpage"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(2260)}));o=t.O(o)})();
//# sourceMappingURL=app.8ed063fc.js.map