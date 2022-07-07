(function(){"use strict";var e={2722:function(e,t,o){var s=o(8935),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("body",[o("router-view")],1)},a=[],r=o(1001),i={},c=(0,r.Z)(i,n,a,!1,null,"187d130c",null),l=c.exports,d=o(2809),u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("todoHeader"),o("todoSearch"),o("todoInput"),o("todoList"),o("todoFooter")],1)},m=[],h={created(){this.createdPush()},methods:{createdPush(){this.$store.commit("createdPush")}}},p=h,f=(0,r.Z)(p,u,m,!1,null,null,null),v=f.exports,k=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"todo-input"},[o("div",{staticClass:"todo-input__box"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodoItem,expression:"newTodoItem"}],attrs:{type:"text",placeholder:"할 일을 입력해주세요!"},domProps:{value:e.newTodoItem},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo.apply(null,arguments)},input:function(t){t.target.composing||(e.newTodoItem=t.target.value)}}}),o("span",{staticClass:"todo-input__box__add",on:{click:e.addTodo}},[o("i",{staticClass:"icon-plus"})])]),o("ToastPop")],1)},_=[],x={data(){return{newTodoItem:""}},methods:{addTodo(){let e=this.newTodoItem;this.$store.commit("addTodo",e),this.newTodoItem=""}}},I=x,g=(0,r.Z)(I,k,_,!1,null,"4b225ead",null),w=g.exports,C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"list-wrap"},[o("transition-group",{attrs:{name:"list",tag:"ul"}},e._l(e.todoItems,(function(t,s){return o("li",{directives:[{name:"show",rawName:"v-show",value:t.search,expression:"todoItem.search"}],key:s},[o("span",{staticClass:"list__check-field"},[o("i",{directives:[{name:"show",rawName:"v-show",value:t.isChecked,expression:"todoItem.isChecked"}],staticClass:"icon-checkmark"})]),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.toFix||e.checked!==s,expression:"!toFix || checked !== index"}],staticClass:"list__text-field",on:{click:function(t){return e.checkShow(s)}}},[e._v(" "+e._s(t.id)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.$store.state.fixItem,expression:"$store.state.fixItem"},{name:"show",rawName:"v-show",value:e.toFix&&e.checked===s,expression:"toFix && checked === index"}],attrs:{type:"text",placeholder:"수정할 내용을 입력하세요"},domProps:{value:e.$store.state.fixItem},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.changeItem(s)},input:function(t){t.target.composing||e.$set(e.$store.state,"fixItem",t.target.value)}}}),o("div",{staticClass:"button-group"},[o("span",{staticClass:"button-group__fix",on:{click:function(t){return e.changeItem(s)}}},[o("i",{staticClass:"icon-wrench"})]),o("span",{staticClass:"button-group__remove",on:{click:function(t){return e.checkedItem(s)}}},[o("i",{staticClass:"icon-bin"})])]),e.modal&&e.checked===s?o("ModalPop"):e._e()],1)})),0)],1)},y=[];const $={computed:{todoItems(){return this.$store.state.todoItems},checked(){return this.$store.state.checked},modal(){return this.$store.state.modal},toFix(){return this.$store.state.toFix},search(){return this.$store.state.search}}};var O=$,S={mixins:[O],methods:{checkedItem(e){this.$store.state.modal=!0,this.$store.state.checked=e},changeItem(e){this.$store.state.checked=e,this.$store.commit("changeItem")},checkShow(e){this.$store.state.checked=e,this.$store.commit("checkShow")}}},T=S,b=(0,r.Z)(T,C,y,!1,null,"51bfd94c",null),P=b.exports,Z=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"clear"},[o("span",{staticClass:"clear-button",on:{click:e.clearTodo}},[e._v("Clear All")])])},N=[],E={methods:{clearTodo(){this.$store.commit("clearTodo")}}},J=E,F=(0,r.Z)(J,Z,N,!1,null,"421f75cc",null),j=F.exports,D=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},R=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",[o("h1",[e._v("Todo List!")])])}],L={},M=(0,r.Z)(L,D,R,!1,null,"0a96bcde",null),H=M.exports,A=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"todo-search"},[o("div",{staticClass:"todo-search__box"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.searchItem,expression:"searchItem"}],attrs:{type:"text",placeholder:"검색어를 입력해주세요."},domProps:{value:e.searchItem},on:{keyup:e.searchTodo,input:function(t){t.target.composing||(e.searchItem=t.target.value)}}})])])},q=[],z={data(){return{searchItem:""}},methods:{searchTodo(){let e=this.searchItem;this.$store.commit("searchTodo",e)}}},B=z,G=(0,r.Z)(B,A,q,!1,null,"cc42f51a",null),K=G.exports;s.ZP.use(d.Z);const Q=[{path:"/vuexTodo",name:"home",component:v},{path:"/",name:"header",component:H},{path:"/input",name:"input",component:w},{path:"/list",name:"list",component:P},{path:"/footer",name:"footer",component:j},{path:"/search",name:"search",component:K}],U=new d.Z({routes:Q,mode:"history"});var V=U,W=(o(6699),o(4665));s.ZP.use(W.ZP);const X=new W.ZP.Store({state:{todoItems:[],toast:!1,checked:0,modal:!1,toFix:!1,fixItem:""},getters:{},mutations:{searchTodo(e,t){let o=JSON.parse(JSON.stringify(e.todoItems));""!==t?o.forEach((s=>{if(!s.id.includes(t)){let t=o.indexOf(s);s.search=!1;let n=[];n.push(s),e.todoItems.splice(t,1,n[0])}})):o.forEach((t=>{let s=o.indexOf(t);t.search=!0;let n=[];n.push(t),e.todoItems.splice(s,1,n[0])}))},addTodo(e,t){if(""!==t){let o={id:t,time:new Date,isChecked:!1,search:!0};localStorage.setItem(JSON.stringify(o),JSON.stringify(o)),e.todoItems.push(o)}else e.toast=!0,setTimeout((()=>{e.toast=!1}),1e3)},clearTodo(e){localStorage.clear(),e.todoItems=[]},createdPush(e){if(localStorage.length>0)for(let t=0;t<localStorage.length;t++){let o=localStorage.key(t);"loglevel:webpack-dev-server"!==o&&e.todoItems.push(JSON.parse(o))}e.todoItems.sort((function(e,t){return new Date(e.time)-new Date(t.time)}))},changeItem(e){e.toFix=!e.toFix;let t=e.checked,o=JSON.parse(JSON.stringify(e.todoItems[t]));if(console.log(t),""!==e.fixItem){let s={id:e.fixItem,time:new Date,isChecked:!1,search:!0};localStorage.removeItem(JSON.stringify(o)),e.todoItems.splice(t,1),localStorage.setItem(JSON.stringify(s),JSON.stringify(s)),e.todoItems.push(s),e.fixItem=""}},checkShow(e){let t=[],o=e.checked,s=JSON.parse(JSON.stringify(e.todoItems[o]));0==s.isChecked?(s.isChecked=!0,t.push(s)):(s.isChecked=!1,t.push(s)),e.todoItems.splice(o,1,t[0])},modalClose(e){e.modal=!1},modalRemove(e){let t=e.checked,o=JSON.parse(JSON.stringify(e.todoItems[t]));localStorage.removeItem(JSON.stringify(o)),e.todoItems.splice(t,1),e.modal=!1}}});var Y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"pop",tag:"div"}},[e.toast?o("div",{staticClass:"toast"},[o("div",{staticClass:"toast__text"},[o("span",[e._v("할 일을 입력해주세요!!")])])]):e._e()])},ee=[],te={computed:{toast(){return this.$store.state.toast}}},oe=te,se=(0,r.Z)(oe,Y,ee,!1,null,"31e9021f",null),ne=se.exports,ae=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"modal"},[o("div",{staticClass:"modal-cont"},[o("div",{staticClass:"modal-cont__text"},[o("span",[e._v("데이터를 삭제하시겠습니까?")]),o("div",{staticClass:"modal-cont__yes",on:{click:e.modalRemove}},[o("i",{staticClass:"icon-checkmark"})]),o("div",{staticClass:"modal-cont__close",on:{click:e.modalClose}},[o("i",{staticClass:"icon-cross"})])])])])},re=[],ie={data(){return{}},methods:{modalClose(){this.$store.commit("modalClose")},modalRemove(){this.$store.commit("modalRemove")}}},ce=ie,le=(0,r.Z)(ce,ae,re,!1,null,"a3e8e068",null),de=le.exports;s.ZP.config.productionTip=!1,s.ZP.component("todoHeader",H),s.ZP.component("todoInput",w),s.ZP.component("todoList",P),s.ZP.component("todoFooter",j),s.ZP.component("ToastPop",ne),s.ZP.component("ModalPop",de),s.ZP.component("todoSearch",K),new s.ZP({render:e=>e(l),router:V,store:X}).$mount("#app")}},t={};function o(s){var n=t[s];if(void 0!==n)return n.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,s,n,a){if(!s){var r=1/0;for(d=0;d<e.length;d++){s=e[d][0],n=e[d][1],a=e[d][2];for(var i=!0,c=0;c<s.length;c++)(!1&a||r>=a)&&Object.keys(o.O).every((function(e){return o.O[e](s[c])}))?s.splice(c--,1):(i=!1,a<r&&(r=a));if(i){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[s,n,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,a,r=s[0],i=s[1],c=s[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(c)var d=c(o)}for(t&&t(s);l<r.length;l++)a=r[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},s=self["webpackChunkvuextodo"]=self["webpackChunkvuextodo"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(2722)}));s=o.O(s)})();
//# sourceMappingURL=app.97926923.js.map