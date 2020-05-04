(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5201538"],{2532:function(e,t,s){"use strict";var i=s("23e7"),a=s("5a34"),l=s("1d80"),r=s("ab13");i({target:"String",proto:!0,forced:!r("includes")},{includes:function(e){return!!~String(l(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},5001:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("PageHeading",{attrs:{title:"Manual Matching",summary:"Please create a match between the old and new links. Each pair you make can become a redirect if you add it."}}),e.checkNewLinksLength()?s("section",{staticClass:"matching"},[s("div",{staticClass:"container"},[s("div",{staticClass:"group matching-columns"},[s("section",{staticClass:"matching-link-block"},[s("h3",[e._v("Old Links")]),s("div",{staticClass:"link-search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchOldVal,expression:"searchOldVal"}],class:{"no-results":e.searchOldFalse},attrs:{type:"text",name:"search-old",value:"",placeholder:"Search..."},domProps:{value:e.searchOldVal},on:{keyup:e.searchHandler,input:function(t){t.target.composing||(e.searchOldVal=t.target.value)}}})]),s("div",{staticClass:"link-list"},[e.searchOld.length<1?s("div",e._l(e.oldLinks,(function(t,i){return s("div",{key:i,staticClass:"links links-old"},[s("Links",{attrs:{links:t},on:{childToParent:e.moveOldToCenter,linkData:e.openLink}})],1)})),0):s("div",e._l(e.searchOld,(function(t,i){return s("div",{key:i,staticClass:"links links-old"},[s("Links",{attrs:{links:t},on:{childToParent:e.moveOldToCenter}})],1)})),0)]),e.searchOld.length<1?s("p",{staticClass:"link-counter"},[e._v(e._s(e.oldLinks.length)+" link(s) left")]):e._e()]),s("section",{staticClass:"matching-center"},[s("h3",[e._v("Pairs")]),s("div",{staticClass:"matching-block"},[""!=e.selectedOld?s("div",{staticClass:"drop-old"},[e._l(e.selectedOld,(function(t,i){return s("div",{key:i,staticClass:"links links-new"},[s("Links",{attrs:{links:t},on:{childToParent:e.removeOldFromCenter}})],1)})),""!=e.selectedNew?s("svg",{staticClass:"dot-indicators",attrs:{width:"20",height:"30",viewBox:"0 0 20 30"}},[s("path",{staticClass:"dot-indicators-path",attrs:{d:"M10 40 L10 -10"}})]):e._e()],2):e._e(),""!=e.selectedNew?s("div",{staticClass:"drop-new"},[s("Links",{attrs:{links:e.selectedNew},on:{childToParent:e.removeNewFromCenter}})],1):e._e(),s("div",{staticClass:"drop-actions buttons buttons-center"},[s("button",{staticClass:"button button-green",attrs:{type:"button",name:"button",title:"Press enter to quickly add redirects."},on:{click:e.addRedirect}},[e._v("Create redirect")])])]),s("br"),e.stageInfo?s("p",{staticClass:"stage-info stage-info-small"},[e._v(" "+e._s(e.stageInfo)+" ")]):e._e(),e.stageError?s("p",{staticClass:"stage-error stage-error-small"},[e._v(" "+e._s(e.stageError)+" ")]):e._e()]),s("section",{staticClass:"matching-link-block"},[s("h3",[e._v("New Links")]),s("div",{staticClass:"link-search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchNewVal,expression:"searchNewVal"}],class:{"no-results":e.searchNewFalse},attrs:{type:"text",name:"search-new",value:"",placeholder:"Search..."},domProps:{value:e.searchNewVal},on:{keyup:e.searchHandler,input:function(t){t.target.composing||(e.searchNewVal=t.target.value)}}})]),s("div",{staticClass:"link-list"},[e.searchNew.length<1?s("div",e._l(e.newLinks,(function(t,i){return s("div",{key:i,staticClass:"links links-new"},[s("Links",{attrs:{links:t},on:{childToParent:e.moveNewToCenter}})],1)})),0):s("div",e._l(e.searchNew,(function(t,i){return s("div",{key:i,staticClass:"links links-new"},[s("Links",{attrs:{links:t},on:{childToParent:e.moveNewToCenter}})],1)})),0)]),e.searchNew.length<1?s("p",{staticClass:"link-counter"},[e._v(e._s(e.newLinks.length)+" links total")]):e._e()])])])]):e._e(),s("hr"),s("section",{staticClass:"step step-5 stage-stats"},[s("div",{staticClass:"container"},[s("h2",[e._v("Summary")]),s("div",{staticClass:"group"},[s("div",{staticClass:"stat-item"},[s("p",{staticClass:"value"},[e._v(e._s(e.redirectList.length))]),s("p",{staticClass:"label"},[e._v("Manual redirect(s)")])]),s("div",{staticClass:"stat-item"},[s("p",{staticClass:"value"},[e._v(e._s(this.$store.state.partialRedirects.length))]),s("p",{staticClass:"label"},[e._v("Partial redirect(s)")])]),s("div",{staticClass:"stat-item"},[s("p",{staticClass:"value"},[e._v(e._s(e.redirectList.length+this.$store.state.partialRedirects.length))]),s("p",{staticClass:"label"},[e._v("Total redirect(s)")])]),s("div",{staticClass:"stat-item"},[s("p",{staticClass:"value"},[e._v(e._s(e.oldLinks.length))]),s("p",{staticClass:"label"},[e._v("Link(s) left")])])])])]),s("section",{staticClass:"stage-navigation buttons"},[s("div",{staticClass:"container"},[s("div",{staticClass:"group group-center buttons"},[s("button",{staticClass:"button",attrs:{type:"button",name:"button"},on:{click:e.finalStage}},[e._v("Next ->")])])])]),s("StageIndicator"),s("section",{staticClass:"stage-settings"},[s("div",{staticClass:"container"},[s("div",{staticClass:"setting"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.linkSearchFields,expression:"linkSearchFields"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.linkSearchFields)?e._i(e.linkSearchFields,null)>-1:e.linkSearchFields},on:{change:function(t){var s=e.linkSearchFields,i=t.target,a=!!i.checked;if(Array.isArray(s)){var l=null,r=e._i(s,l);i.checked?r<0&&(e.linkSearchFields=s.concat([l])):r>-1&&(e.linkSearchFields=s.slice(0,r).concat(s.slice(r+1)))}else e.linkSearchFields=a}}}),s("label",{attrs:{for:"checkbox"}},[e._v("Search both")])]),s("div",{staticClass:"setting"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.lockScroll,expression:"lockScroll"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.lockScroll)?e._i(e.lockScroll,null)>-1:e.lockScroll},on:{change:[function(t){var s=e.lockScroll,i=t.target,a=!!i.checked;if(Array.isArray(s)){var l=null,r=e._i(s,l);i.checked?r<0&&(e.lockScroll=s.concat([l])):r>-1&&(e.lockScroll=s.slice(0,r).concat(s.slice(r+1)))}else e.lockScroll=a},e.scrollLock]}}),s("label",{attrs:{for:"checkbox"}},[e._v("Scroll lock")])])])]),e.lockScroll?s("section",{staticClass:"stage-warning"},[s("button",{staticClass:"button",attrs:{name:"scrollLockButton"},on:{click:e.lockScrollWarning}},[e._v(" scroll lock is on ")])]):e._e()],1)},a=[],l=(s("4de4"),s("caad"),s("b0c0"),s("ac1f"),s("2532"),s("1276"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{staticClass:"link link-draggable",on:{click:[function(t){return t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.$emit("childToParent",e.links)},function(t){return t.ctrlKey?t.shiftKey||t.altKey||t.metaKey?null:e.$emit("linkData",e.links):null}]}},[s("span",[e._v(e._s(e.links.pathname))])])}),r=[],n={name:"Links",props:["links"]},c=n,o=s("2877"),h=Object(o["a"])(c,l,r,!1,null,"db213810",null),d=h.exports,u=s("18dc"),k=s("f637"),v={name:"StageFour",components:{Links:d,PageHeading:u["a"],StageIndicator:k["a"]},data:function(){return{selectedNew:"",selectedOld:[],oldLinks:[],newLinks:[],searchOld:[],searchOldVal:"",searchOldFalse:!1,searchNew:[],searchNewVal:"",searchNewFalse:!1,linkSearchFields:!1,lockScroll:!1,redirectList:[],stageError:"",stageInfo:"Click on a link to add it to the center for pairing. You can select multiple old links, but only one new link."}},created:function(){this.$store.state.redirects=[],this.$store.state.automatching?this.oldLinks=this.$store.state.remaining:this.oldLinks=this.$store.state.oldLinks,this.newLinks=this.$store.state.newLinks},mounted:function(){var e=this;window.addEventListener("keydown",(function(t){var s=e.$el.querySelector(":focus");if(13==t.keyCode){if(s){if("INPUT"==s.tagName)return!1;s.blur()}e.addRedirect()}27==t.keyCode&&s&&"INPUT"==s.tagName&&s.blur()}))},methods:{checkNewLinksLength:function(){return!(this.$store.state.newLinks.length<1)},moveOldToCenter:function(e){this.stageInfo="",this.stageError="",this.selectedOld.push(e),this.oldLinks.includes(e)&&(this.oldLinks=this.oldLinks.filter((function(t){return t.url!==e.url}))),this.searchOld.length>=1&&this.searchOld.includes(e)&&(this.searchOld=this.searchOld.filter((function(t){return t.url!==e.url})))},moveNewToCenter:function(e){this.stageInfo="",this.stageError="",this.selectedNew=e},removeOldFromCenter:function(e){this.selectedOld.includes(e)&&(this.selectedOld=this.selectedOld.filter((function(t){return t.url!==e.url})),this.oldLinks.push(e),this.oldLinks=this.sortArray(this.oldLinks))},removeNewFromCenter:function(){this.selectedNew=""},searchOldLinks:function(e){var t=e.target.value;if(!t)return this.searchOld=[],this.searchOldVal="",this.searchOldFalse=!1,!1;if(this.linkSearchFields)return!1;var s=this.searchFilter(this.oldLinks,t);s.length<1?(this.searchOld=s,this.searchOldFalse=!0):(this.searchOld=s,this.searchOldFalse=!1)},searchNewLinks:function(e){var t=e.target.value;if(!t)return this.searchNew=[],this.searchNewVal="",this.searchNewFalse=!1,!1;if(this.linkSearchFields)return!1;var s=this.searchFilter(this.newLinks,t);s.length<1?(this.searchNew=s,this.searchNewFalse=!0):(this.searchNew=s,this.searchNewFalse=!1)},searchFilter:function(e,t){return e.filter((function(e){return e.pathname.includes(t)}))},linkedSearch:function(e){var t=e.target.value;if("search-old"==e.target.name&&(this.searchNewVal=t),"search-new"==e.target.name&&(this.searchOldVal=t),this.linkSearchFields){var s=this.searchFilter(this.oldLinks,t);s.length<1?(this.searchOld=s,this.searchOldFalse=!0):(this.searchOld=s,this.searchOldFalse=!1);var i=this.searchFilter(this.newLinks,t);i.length<1?(this.searchNew=i,this.searchNewFalse=!0):(this.searchNew=i,this.searchNewFalse=!1)}},searchHandler:function(e){this.linkSearchFields?this.linkedSearch(e):("search-new"==e.target.name&&this.searchNewLinks(e),"search-old"==e.target.name&&this.searchOldLinks(e))},openLink:function(e){var t=window.open(e.url,"_blank");t.focus()},scrollLock:function(){var e=this.$el;this.lockScroll?(document.body.style.overflow="hidden",e.style.height=e.scrollHeight+"px"):(document.body.style.overflow="auto",e.style.height=null)},lockScrollWarning:function(){var e=this.$el;this.lockScroll=!1,document.body.style.overflow="auto",e.style.height=null},sortArray:function(e){return e.sort((function(e,t){return e.pathname.split("/")[1]>t.pathname.split("/")[1]?1:-1}))},addRedirect:function(){var e=this.selectedNew,t=this.selectedOld;if(!e||!t||t.length<=0)return this.stageError="You must select links to add to the Pairs section before adding them.",!1;this.selectedNew="",this.selectedOld=[];var s={toRedirect:e,fromRedirect:t};if(this.redirectList.push(s),this.linkSearchFields||this.searchOldVal||this.searchNewVal){var i=this.$el.querySelectorAll('input[type="text"]');this.searchOldVal&&!this.linkSearchFields&&i[0].focus(),this.searchNewVal&&!this.linkSearchFields&&i[1].focus(),this.linkSearchFields&&i[0].focus()}this.searchOld=[],this.searchNew=[],this.searchOldVal="",this.searchNewVal="",this.searchOldFalse=!1,this.searchNewFalse=!1},finalStage:function(){this.$store.state.redirects=this.redirectList,this.$store.state.stage4=!0,this.$router.push({path:"/stage-5"})}}},g=v,f=(s("7d50"),Object(o["a"])(g,i,a,!1,null,"1e302954",null));t["default"]=f.exports},"5a34":function(e,t,s){var i=s("44e7");e.exports=function(e){if(i(e))throw TypeError("The method doesn't accept regular expressions");return e}},"7d50":function(e,t,s){"use strict";var i=s("c865"),a=s.n(i);a.a},ab13:function(e,t,s){var i=s("b622"),a=i("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(s){try{return t[a]=!1,"/./"[e](t)}catch(i){}}return!1}},c865:function(e,t,s){},caad:function(e,t,s){"use strict";var i=s("23e7"),a=s("4d64").includes,l=s("44d2"),r=s("ae40"),n=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!n},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),l("includes")}}]);
//# sourceMappingURL=chunk-b5201538.fda63681.js.map