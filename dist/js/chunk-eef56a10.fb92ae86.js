(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eef56a10"],{"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),a=n("17c2"),c=n("9112");for(var i in o){var s=r[i],u=s&&s.prototype;if(u&&u.forEach!==a)try{c(u,"forEach",a)}catch(d){u.forEach=a}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),a=n("ae40"),c=o("forEach"),i=a("forEach");t.exports=c&&i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),a=n("2d00"),c=o("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),a=n("b622"),c=a("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},9704:function(t,e,n){},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("d039"),a=n("e8b5"),c=n("861d"),i=n("7b0b"),s=n("50c4"),u=n("8418"),d=n("65f0"),f=n("1dde"),l=n("b622"),p=n("2d00"),m=l("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",b=p>=51||!o((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),g=f("concat"),y=function(t){if(!c(t))return!1;var e=t[m];return void 0!==e?!!e:a(t)},x=!b||!g;r({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,r,o,a,c=i(this),f=d(c,0),l=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?c:arguments[e],y(a)){if(o=s(a.length),l+o>v)throw TypeError(h);for(n=0;n<o;n++,l++)n in a&&u(f,l,a[n])}else{if(l>=v)throw TypeError(h);u(f,l++,a)}return f.length=l,f}})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,n){var r=n("83ab"),o=n("d039"),a=n("5135"),c=Object.defineProperty,i={},s=function(t){throw t};t.exports=function(t,e){if(a(i,t))return i[t];e||(e={});var n=[][t],u=!!a(e,"ACCESSORS")&&e.ACCESSORS,d=a(e,0)?e[0]:s,f=a(e,1)?e[1]:void 0;return i[t]=!!n&&!o((function(){if(u&&!r)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:s}):t[1]=1,n.call(t,d,f)}))}},b727:function(t,e,n){var r=n("0366"),o=n("44ad"),a=n("7b0b"),c=n("50c4"),i=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,d=4==t,f=6==t,l=5==t||f;return function(p,m,v,h){for(var b,g,y=a(p),x=o(y),R=r(m,v,3),w=c(x.length),C=0,E=h||i,F=e?E(p,w):n?E(p,0):void 0;w>C;C++)if((l||C in x)&&(b=x[C],g=R(b,C,y),t))if(e)F[C]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return C;case 2:s.call(F,b)}else if(d)return!1;return f?-1:u||d?d:F}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},deca:function(t,e,n){"use strict";var r=n("9704"),o=n.n(r);o.a},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},ed45:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PageHeading",{attrs:{title:"The redirects",summary:"Below you'll find your created redirects in both Apache and Nginx formats."}}),n("section",{staticClass:"redirect-output"},[n("div",{staticClass:"container"},[n("h2",[t._v("Apache redirects")]),n("p",[t._v("Place these redirects in your .htacess file.")]),n("pre",t._l(t.redirects,(function(e,r){return n("code",{key:r},[t._v(t._s(t.createRedirect(e)))])})),0),n("br"),n("div",{staticClass:"textarea-copy"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.finalForm,expression:"finalForm"}],attrs:{name:"name",rows:"8",cols:"80"},domProps:{value:t.finalForm},on:{input:function(e){e.target.composing||(t.finalForm=e.target.value)}}})]),n("div",{staticClass:"buttons buttons-center"},[n("button",{staticClass:"button",attrs:{type:"button",name:"button"},on:{click:t.copyRedirects}},[t._v("Copy")])])]),n("div",{staticClass:"container"},[n("h2",[t._v("Nginx redirects")]),n("p",[t._v("Place these redirects in your nginx.conf file.")]),n("pre",t._l(t.redirects,(function(e,r){return n("code",{key:r},[t._v(t._s(t.createNginxRedirect(e)))])})),0),n("br"),n("div",{staticClass:"textarea-copy"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.nginxFinalForm,expression:"nginxFinalForm"}],attrs:{name:"name",rows:"8",cols:"80"},domProps:{value:t.nginxFinalForm},on:{input:function(e){e.target.composing||(t.nginxFinalForm=e.target.value)}}})]),n("div",{staticClass:"buttons buttons-center"},[n("button",{staticClass:"button",attrs:{type:"button",name:"button"},on:{click:t.copyRedirects}},[t._v("Copy")])])])]),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"stage-navigation buttons"},[n("div",{staticClass:"container"},[n("div",{staticClass:"group group-center buttons"})])])}],a=(n("99af"),n("4160"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),n("2b3d"),n("18dc")),c={name:"StageFive",components:{PageHeading:a["a"]},data:function(){return{redirects:[],finalForm:"",nginxFinalForm:""}},created:function(){this.redirects=this.$store.state.redirects},methods:{createRedirect:function(t){var e="",n=new URL(this.$store.state.newUrl);return t.fromRedirect.length>1?t.fromRedirect.forEach((function(r){e+="RewriteRule ^".concat(r.pathname.substring(1),"$ ").concat(n.protocol,"//").concat(n.hostname).concat(t.toRedirect.pathname," [R=301,L] \n")})):e+="RewriteRule ^".concat(t.fromRedirect[0].pathname.substring(1),"$ ").concat(n.protocol,"//").concat(n.hostname).concat(t.toRedirect.pathname," [R=301,L] \n"),this.finalForm=e,e},createNginxRedirect:function(t){var e="",n=new URL(this.$store.state.newUrl);return t.fromRedirect.length>1?t.fromRedirect.forEach((function(r){e+="rewrite ^".concat(r.pathname,"$ ").concat(n.protocol,"//").concat(n.hostname).concat(t.toRedirect.pathname," permanent \n")})):e+="rewrite ^".concat(t.fromRedirect[0].pathname,"$ ").concat(n.protocol,"//").concat(n.hostname).concat(t.toRedirect.pathname," permanent \n"),this.nginxFinalForm=e,e},copyRedirects:function(t){var e=t.target,n=t.target.parentNode.previousElementSibling.childNodes[0];e.innerText="Copied!",e.classList.add("button-green"),setTimeout((function(){e.innerText="Copy",e.classList.remove("button-green")}),2500),n.select(),document.execCommand("copy")}}},i=c,s=(n("deca"),n("2877")),u=Object(s["a"])(i,r,o,!1,null,"72e08671",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-eef56a10.fb92ae86.js.map