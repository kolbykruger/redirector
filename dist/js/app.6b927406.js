(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1e1d4280","chunk-16246c2e":"dd7e8477","chunk-4f5fa3c7":"0be4abf9","chunk-648150d7":"171f5ebf","chunk-1e845e9f":"8656a151","chunk-306e2563":"3fac33f0","chunk-318f17e8":"9c5572f5","chunk-3d57b58e":"102e24ef"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-16246c2e":1,"chunk-4f5fa3c7":1,"chunk-306e2563":1,"chunk-318f17e8":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-16246c2e":"db02f404","chunk-4f5fa3c7":"e53ab745","chunk-648150d7":"31d6cfe0","chunk-1e845e9f":"31d6cfe0","chunk-306e2563":"b7726af8","chunk-318f17e8":"860d4791","chunk-3d57b58e":"31d6cfe0"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"18dc":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"pageheading"},[n("div",{staticClass:"container"},[n("h1",[e._v(e._s(e.title))]),n("p",[e._v(" "+e._s(e.summary)+" ")])])])},a=[],o={name:"PageHeading",props:{title:String,summary:String}},c=o,u=n("2877"),i=Object(u["a"])(c,r,a,!1,null,null,null);t["a"]=i.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",[n("div",{staticClass:"container"},[n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[n("span",{staticClass:"icon"},[e._v("->")]),e._v(" Redirector ")])],1),n("nav",[n("router-link",{staticClass:"button button-green",attrs:{to:"/stage-0"}},[e._v("Start")])],1)])]),n("main",[n("transition",{attrs:{name:"slide",mode:"out-in"}},[n("router-view")],1)],1),e._m(0)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("div",{staticClass:"container"},[n("a",{attrs:{href:"https://github.com/kolbykruger/redirector",target:"_blank"}},[e._v("Github")])])])}],c=(n("f870"),n("2877")),u={},i=Object(c["a"])(u,a,o,!1,null,"49ee0dc0",null),s=i.exports,l=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("PageHeading",{attrs:{title:"Welcome to Redirector!",summary:"The tool designed to help you bulk create 301 redirects."}}),e._m(0),n("section",{staticClass:"start-app"},[n("div",{staticClass:"container"},[n("br"),n("div",{staticClass:"group buttons"},[n("router-link",{staticClass:"button button-green button-large",attrs:{to:"/stage-0"}},[e._v("Start making redirects ->")])],1)])])],1)},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"container"},[n("p",[e._v("We currently offer "),n("strong",[e._v("Apache (.htaccess)")]),e._v(" and "),n("strong",[e._v("Nginx (nginx.conf)")]),e._v(" outputs.")])])])}],h=n("18dc"),p={name:"Home",components:{PageHeading:h["a"]}},m=p,g=Object(c["a"])(m,f,d,!1,null,null,null),v=g.exports;r["a"].use(l["a"]);var b=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/stage-0",name:"StageZero",component:function(){return Promise.all([n.e("chunk-648150d7"),n.e("chunk-318f17e8")]).then(n.bind(null,"e3df"))}},{path:"/stage-1",name:"StageOne",component:function(){return Promise.all([n.e("chunk-648150d7"),n.e("chunk-3d57b58e")]).then(n.bind(null,"84a3"))}},{path:"/stage-2",name:"StageTwo",component:function(){return Promise.all([n.e("chunk-648150d7"),n.e("chunk-1e845e9f")]).then(n.bind(null,"6c94"))}},{path:"/stage-3",name:"StageThree",component:function(){return n.e("chunk-16246c2e").then(n.bind(null,"e4c1"))}},{path:"/stage-4",name:"StageFour",component:function(){return n.e("chunk-4f5fa3c7").then(n.bind(null,"5001"))}},{path:"/stage-5",name:"StageFive",component:function(){return Promise.all([n.e("chunk-648150d7"),n.e("chunk-306e2563")]).then(n.bind(null,"ed45"))}}],k=new l["a"]({mode:"history",routes:b,scrollBehavior:function(){document.getElementById("app").scrollIntoView()}}),y=k,_=n("2f62");r["a"].use(_["a"]);var w=new _["a"].Store({state:{newUrl:"",devUrl:"",oldUrl:"",oldLinks:[],newLinks:[],automatching:!1,remaining:[],matches:[],redirects:[],test:"",stage0:!1,stage1:!1,stage2:!1,stage3:!1,stage4:!1,stage5:!1},mutations:{},actions:{},modules:{}});n("fce9");r["a"].config.productionTip=!1,new r["a"]({router:y,store:w,render:function(e){return e(s)}}).$mount("#app")},"94e5":function(e,t,n){},f870:function(e,t,n){"use strict";var r=n("94e5"),a=n.n(r);a.a},fce9:function(e,t,n){}});
//# sourceMappingURL=app.6b927406.js.map