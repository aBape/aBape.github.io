(function(t){function e(e){for(var n,i,l=e[0],u=e[1],c=e[2],s=0,d=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},a={app:0},o=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ce264fc5"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(t);var c=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(s);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,r[1](c)}a[t]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var p=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",dark:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),r("v-toolbar-title",[t._v(" placeholder here ")]),r("v-spacer"),r("v-btn-toggle",{attrs:{mandatory:""},model:{value:t.$store.toggle_ln,callback:function(e){t.$set(t.$store,"toggle_ln",e)},expression:"$store.toggle_ln"}},[r("v-btn",[r("v-icon",[t._v("EN")])],1),r("v-btn",[r("v-icon",[t._v("CN")])],1)],1)],1),r("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",[r("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"}},t._l(t.menuItems,(function(e,n){return r("v-list-item",{key:n,attrs:{link:"",to:e.route}},[r("v-list-item-title",[t._v(t._s(t.$store.toggle_ln?e.en:e.cn))])],1)})),1)],1)],1),r("v-main",[r("router-view")],1)],1)},o=[],i=[{en:"Youtube",cn:"有土",route:"/youtube"},{en:"Church",cn:"教会",route:"/church"}],l={name:"App",data:function(){return{drawer:!1,group:null,toggle_ln:1,menuItems:i}}},u=l,c=r("2877"),s=r("6544"),p=r.n(s),d=r("7496"),f=r("40dc"),v=r("5bc1"),m=r("8336"),h=r("a609"),b=r("132d"),g=r("8860"),y=r("da13"),w=r("1baa"),_=r("5d23"),x=r("f6c4"),V=r("f774"),A=r("2fa4"),C=r("2a7f"),E=Object(c["a"])(u,a,o,!1,null,null,null),j=E.exports;p()(E,{VApp:d["a"],VAppBar:f["a"],VAppBarNavIcon:v["a"],VBtn:m["a"],VBtnToggle:h["a"],VIcon:b["a"],VList:g["a"],VListItem:y["a"],VListItemGroup:w["a"],VListItemTitle:_["a"],VMain:x["a"],VNavigationDrawer:V["a"],VSpacer:A["a"],VToolbarTitle:C["a"]});r("d3b7"),r("3ca3"),r("ddb0");var O=r("8c4f"),P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("h1",{staticClass:"v-heading text-h3 text-sm-h3 mb-4"},[t._v(t._s(t.$store.toggle_ln?"有土 视频链接":"Youtube links"))]),r("v-row",{attrs:{dense:""}},t._l(t.items,(function(e,n){return r("v-col",{key:n,attrs:{"xs-12":"",sm:"6",md:"4",lg:"3"}},[r("v-card",{attrs:{href:e.playlistSrc}},[r("v-img",{staticClass:"white--text align-end",attrs:{contain:"",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:e.src}},[r("v-card-title",[t._v(" "+t._s(e.title)+" ")])],1),r("v-card-text",{staticClass:"text--primary"},[r("div",[r("h2",[t._v(" "+t._s(e.title))])])])],1)],1)})),1)],1)},L=[],k={name:"Youtube",data:function(){return{items:[{playlistSrc:"https://www.youtube.com/playlist?list=PLjjPL6UFQG6pIOm8Xnpi3lxPT3uBRYD5E",src:"https://i.ytimg.com/vi/bHNpHUxedJo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBlDhEyfwouqpAH1KEONV_G_Lo_Bg",title:"青岛往事",artist:"Foster the People"},{playlistSrc:"https://www.youtube.com/playlist?list=PLjjPL6UFQG6pIOm8Xnpi3lxPT3uBRYD5E",src:"https://i.ytimg.com/vi/bHNpHUxedJo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBlDhEyfwouqpAH1KEONV_G_Lo_Bg",title:"Halcyon Days",artist:"Ellie Goulding"}]}}},I=k,T=r("b0af"),$=r("99d9"),B=r("62ad"),S=r("a523"),q=r("adda"),N=r("0fd9"),G=Object(c["a"])(I,P,L,!1,null,null,null),H=G.exports;p()(G,{VCard:T["a"],VCardText:$["a"],VCardTitle:$["b"],VCol:B["a"],VContainer:S["a"],VImg:q["a"],VRow:N["a"]});var D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("iframe",{staticStyle:{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%"},attrs:{width:"100%",height:"100%",src:"https://player.twitch.tv/?autoplay=false&channel=transfigurationnyc&parent=github.com",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"}},[r("small",[t._v("Twitch embedding powered by "),r("a",{attrs:{href:"https://embed.tube"}},[t._v("embed.tube")])])])])}],F={name:"Church"},M=F,R=Object(c["a"])(M,D,U,!1,null,null,null),Y=R.exports;n["a"].use(O["a"]);var J=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/youtube",name:"youtube",component:H},{path:"/church",name:"church",component:Y}],X=new O["a"]({mode:"history",base:"/",routes:J}),K=X,Q=r("f309");n["a"].use(Q["a"]);var z=new Q["a"]({}),W=n["a"].observable({toggle_ln:1}),Z={setln:function(t){W.toggle_ln=t}};n["a"].prototype.$store=W,n["a"].prototype.$actions=Z,n["a"].config.productionTip=!1,new n["a"]({router:K,vuetify:z,render:function(t){return t(j)}}).$mount("#app")}});
//# sourceMappingURL=app.55cd6d03.js.map