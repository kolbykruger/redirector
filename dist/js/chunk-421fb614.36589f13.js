(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-421fb614"],{"1dde":function(t,e,n){var s=n("d039"),r=n("b622"),i=n("2d00"),a=r("species");t.exports=function(t){return i>=51||!s((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"45fc":function(t,e,n){"use strict";var s=n("23e7"),r=n("b727").some,i=n("a640"),a=n("ae40"),o=i("some"),c=a("some");s({target:"Array",proto:!0,forced:!o||!c},{some:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"4de4":function(t,e,n){"use strict";var s=n("23e7"),r=n("b727").filter,i=n("1dde"),a=n("ae40"),o=i("filter"),c=a("filter");s({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,n){var s=n("861d"),r=n("e8b5"),i=n("b622"),a=i("species");t.exports=function(t,e){var n;return r(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?s(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},a640:function(t,e,n){"use strict";var s=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&s((function(){n.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,n){var s=n("83ab"),r=n("d039"),i=n("5135"),a=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,e){if(i(o,t))return o[t];e||(e={});var n=[][t],u=!!i(e,"ACCESSORS")&&e.ACCESSORS,l=i(e,0)?e[0]:c,h=i(e,1)?e[1]:void 0;return o[t]=!!n&&!r((function(){if(u&&!s)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,l,h)}))}},b727:function(t,e,n){var s=n("0366"),r=n("44ad"),i=n("7b0b"),a=n("50c4"),o=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,h=6==t,f=5==t||h;return function(d,m,v,p){for(var g,b,_=i(d),k=r(_),y=s(m,v,3),C=a(k.length),w=0,x=p||o,L=e?x(d,C):n?x(d,0):void 0;C>w;w++)if((f||w in k)&&(g=k[w],b=y(g,w,_),t))if(e)L[w]=b;else if(b)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:c.call(L,g)}else if(l)return!1;return h?-1:u||l?l:L}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},e4c1:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PageHeading",{attrs:{title:"Auto-matching",summary:"We'll try and find exact matches to save you time."}}),t.optionSelected?n("section",{staticClass:"stage-options"},[n("div",{staticClass:"container"},[n("p",[t._v("Would you like us to try and find exact matches?")]),n("br"),n("div",{staticClass:"group buttons"},[n("button",{staticClass:"button",attrs:{type:"button",name:"button"},on:{click:t.checkForMatches}},[t._v("Yes")]),n("router-link",{staticClass:"button",attrs:{to:"/stage-4"}},[t._v("No")])],1)])]):t._e(),t.matchesRun?n("section",[n("div",{staticClass:"container"},[t.matches.length>0?n("div",[n("h2",[t._v("We found "),n("strong",[t._v(t._s(t.matches.length))]),t._v(" "+t._s(t.matches.length>1?"matches":"match")+"!")]),n("br"),n("p",[t._v("Here "+t._s(t.matches.length>1?"is a list of the ones":" is the one")+" we found:")]),t.matches.length>=1?n("div",{staticClass:"stage-matches"},t._l(t.matches,(function(t){return n("div",{key:t.index},[n("MatchLinks",{attrs:{links:t}})],1)})),0):t._e(),n("br"),n("br"),n("p",[t._v("We'll remove them from the list so you don't have to!")]),t.remaining.length>0?n("p",{staticClass:"stage-info"},[n("strong",[t._v(t._s(t.remaining.length)+" left...")]),n("br"),t._v(" We could not find a match for "+t._s(t.remaining.length>1?"these links":"this link")+", unfortunately. ")]):t._e()]):n("div",[n("h3",[t._v("Unfortunately, no exact matches were found.")])]),n("br"),n("div",{staticClass:"buttons"},[n("router-link",{staticClass:"button",attrs:{to:"/stage-4"}},[t._v("Next ->")])],1)])]):t._e(),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"stage-navigation buttons"},[n("div",{staticClass:"container"},[n("div",{staticClass:"group group-center buttons"})])])}],i=(n("4de4"),n("45fc"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link link-match",attrs:{tooltip:t.links.url}},[n("p",[t._v(t._s(t.links.protocol)+"//"+t._s(t.links.hostname)+"/"),n("strong",[t._v(t._s(t.links.pathname.substring(1)))])])])}),a=[],o={name:"MatchLinks",props:["links"]},c=o,u=n("2877"),l=Object(u["a"])(c,i,a,!1,null,null,null),h=l.exports,f=n("18dc"),d={name:"StageThree",components:{MatchLinks:h,PageHeading:f["a"]},data:function(){return{newLinks:null,oldLinks:null,matches:[],remaining:[],matchesRun:!1,optionSelected:!0}},created:function(){this.newLinks=this.$store.state.newLinks,this.oldLinks=this.$store.state.oldLinks},methods:{checkForMatches:function(){this.optionSelected=!1;var t=this.newLinks,e=this.oldLinks,n=e.filter((function(e){return!t.some((function(t){return e.pathname===t.pathname}))})),s=e.filter((function(e){return t.some((function(t){return e.pathname===t.pathname}))}));this.matches=s,this.remaining=n,this.matchesRun=!0,this.$store.state.automatching=!0,this.$store.state.remaining=n,this.$store.state.matches=s},skipStage:function(){this.$router.push({path:"/stage-4"})}}},m=d,v=Object(u["a"])(m,s,r,!1,null,"735c8b73",null);e["default"]=v.exports},e8b5:function(t,e,n){var s=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==s(t)}}}]);
//# sourceMappingURL=chunk-421fb614.36589f13.js.map