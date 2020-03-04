(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],l=0,m=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f028717c"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var u=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("| "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},o=[],i=(n("034f"),n("2877")),c={},s=Object(i["a"])(c,a,o,!1,null,null,null),u=s.exports,l=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home container"},[n("h1",[t._v("Expense Tracker")]),n("h3",[t._v("Total Balance: "+t._s(t._f("currency")(t.balance)))]),n("div",{staticClass:"main"},[n("form",[n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.text,expression:"item.text"}],staticClass:"validate",attrs:{type:"text",id:"name"},domProps:{value:t.item.text},on:{input:function(e){e.target.composing||t.$set(t.item,"text",e.target.value)}}}),n("label",{attrs:{for:"name"}},[t._v("Expense Name")])]),n("div",{staticClass:"input-field col s6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.amount,expression:"item.amount"}],staticClass:"validate",attrs:{type:"text",id:"amount"},domProps:{value:t.item.amount},on:{input:function(e){e.target.composing||t.$set(t.item,"amount",e.target.value)}}}),n("label",{attrs:{for:"amount"}},[t._v("Amount")])])]),n("button",{staticClass:"waves-effect waves-light btn",on:{click:function(e){return e.preventDefault(),t.addTransaction()}}},[t._v("Add")])]),n("div",{staticClass:"list"},[n("h3",[t._v("History")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col s8 offset-s2"},[n("table",{staticClass:"centered"},[t._m(0),t._l(t.orderBy(t.items,"createdAt",-1),(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(t._f("capitalize")(e.text)))]),n("td",[t._v(t._s(t._f("currency")(e.amount)))])])}))],2)])])])])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Transacation Name")]),n("th",[t._v("Amount")])])}],f=(n("d81d"),n("13d5"),n("96cf"),n("1da1")),d=n("bc3a"),v=n.n(d),h=n("a7c6"),b=n.n(h);n("4d5c"),n("dc53");r["a"].use(b.a);var x={name:"Home",mixins:[b.a.mixin],data:function(){return{items:{text:"",amount:""},item:{text:"",amount:""},balance:0,expense:0,income:0,err:[]}},mounted:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getTransactions();case 2:t.totalBalance();case 3:case"end":return e.stop()}}),e)})))()},methods:{addTransaction:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("https://owlf-expense-tracker.herokuapp.com/api/v1/transactions",{text:t.item.text,amount:t.item.amount});case 3:return e.next=5,t.getTransactions();case 5:t.totalBalance(),t.item.text="",t.item.amount="",e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.error=e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},getTransactions:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://owlf-expense-tracker.herokuapp.com/api/v1/transactions");case 3:n=e.sent,t.items=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.error=e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},totalBalance:function(){var t=this.items,e=t.map((function(t){return t.amount}));this.balance=e.reduce((function(t,e){return t+e}),0)}}},g=x,w=(n("cccb"),Object(i["a"])(g,p,m,!1,null,null,null)),_=w.exports;r["a"].use(l["a"]);var y=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],k=new l["a"]({mode:"history",base:"/",routes:y}),j=k,O=n("2f62");r["a"].use(O["a"]);var C=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:j,store:C,render:function(t){return t(u)}}).$mount("#app")},"5ced":function(t,e,n){},"85ec":function(t,e,n){},cccb:function(t,e,n){"use strict";var r=n("5ced"),a=n.n(r);a.a}});
//# sourceMappingURL=app.2bd56bb9.js.map