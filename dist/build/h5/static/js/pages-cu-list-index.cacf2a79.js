(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cu-list-index"],{"159e":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"cu-list",props:{data:{type:Array,default:function(){return[]}},card:{type:Boolean,default:function(){return!1}}},methods:{colClick:function(t){this.$emit("click",t)}}};n.default=e},"226c":function(t,n,a){"use strict";var e=a("fe82"),i=a.n(e);i.a},"359f":function(t,n,a){"use strict";a.r(n);var e=a("6116"),i=a.n(e);for(var c in e)["default"].indexOf(c)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(c);n["default"]=i.a},"57d6":function(t,n,a){"use strict";a.r(n);var e=a("b689"),i=a("8722");for(var c in i)["default"].indexOf(c)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(c);a("226c");var r,u=a("f0c5"),o=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,"274fd940",null,!1,e["a"],r);n["default"]=o.exports},6116:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,a("99af");var e={data:function(){return{StatusBar:"",CustomBar:""}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,n=this.CustomBar,a=this.bgImage,e="height:".concat(n,"px;padding-top:").concat(t,"px;");return this.bgImage&&(e="".concat(e,"background-image:url(").concat(a,");")),e}},created:function(){this.computeStatus()},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""},shadow:{type:Boolean,default:function(){return!1}}},methods:{computeStatus:function(){var t=this;uni.getSystemInfo({success:function(n){t.StatusBar=n.statusBarHeight,"android"==n.platform?t.CustomBar=n.statusBarHeight+50:t.CustomBar=n.statusBarHeight+45}})},BackPage:function(){if(getCurrentPages().length<2&&"undefined"!==typeof __wxConfig){var t="/"+__wxConfig.pages[0];return uni.redirectTo({url:t})}uni.navigateBack({delta:1})}}};n.default=e},"7cf0":function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,"uni-page-body[data-v-274fd940]{background:#eee}.title[data-v-274fd940]{text-align:center}body.?%PAGE?%[data-v-274fd940]{background:#eee}",""]),t.exports=n},8722:function(t,n,a){"use strict";a.r(n);var e=a("d476"),i=a.n(e);for(var c in e)["default"].indexOf(c)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(c);n["default"]=i.a},9659:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return c})),a.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"cu-list menu",class:[t.card?"card-menu margin-top":""]},[t._l(t.data,(function(n){return[a("v-uni-view",{staticClass:"cu-item",class:n.arrow?"arrow":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.colClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"content"},[n.src?a("v-uni-image",{staticClass:"png",attrs:{src:n.src,mode:"aspectFit"}}):a("v-uni-text",{class:["cuIcon-"+n.icon,"text-"+n.color]}),a("v-uni-text",{class:["text-"+n.color]},[t._v(t._s(n.name))])],1),a("v-uni-view",{staticClass:"action"},[t._v(t._s(n.action))])],1)]}))],2)},c=[]},"9ed9":function(t,n,a){"use strict";a.r(n);var e=a("9659"),i=a("af58");for(var c in i)["default"].indexOf(c)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(c);var r,u=a("f0c5"),o=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);n["default"]=o.exports},af58:function(t,n,a){"use strict";a.r(n);var e=a("159e"),i=a.n(e);for(var c in e)["default"].indexOf(c)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(c);n["default"]=i.a},b689:function(t,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return c})),a.d(n,"a",(function(){return e}));var e={cuNavbar:a("d0f9").default,cuList:a("9ed9").default},i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("cu-navbar",{attrs:{shadow:!0,bgColor:"gradual-red",isBack:!1}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("列表")])],2),a("h3",{staticClass:"margin title"},[t._v("普通列表")]),a("cu-list",{attrs:{data:t.data}}),a("h3",{staticClass:"margin title"},[t._v("卡片式列表")]),a("cu-list",{attrs:{data:t.data,card:!0},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.colClick.apply(void 0,arguments)}}})],1)},c=[]},d0f9:function(t,n,a){"use strict";a.r(n);var e=a("eb47"),i=a("359f");for(var c in i)["default"].indexOf(c)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(c);var r,u=a("f0c5"),o=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,"36ac6f7d",null,!1,e["a"],r);n["default"]=o.exports},d476:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"list",data:function(){return{data:[{name:"图片+文字",arrow:!0,icon:"time",src:"http://159.75.22.114:8080/photoServer/more.png",action:""},{name:"带箭头的list",arrow:!0,icon:"right",src:"http://159.75.22.114:8080/photoServer/more.png",action:"背后标题"},{name:"带箭头的list",arrow:!0,icon:"pic",action:"后面"},{name:"测试5",arrow:!0,icon:"home",action:"后面"},{name:"测试6",arrow:!0,icon:"right",action:"后面"},{name:"测试7",arrow:!0,icon:"home",action:"后面"}]}},methods:{colClick:function(n){t.log(n)}}};n.default=a}).call(this,a("5a52")["default"])},eb47:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return c})),a.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"cu-custom",style:[{height:t.CustomBar+"px"}]},[a("v-uni-view",{staticClass:"cu-bar fixed",class:[""!=t.bgImage?"none-bg text-white bg-img":"","bg-"+t.bgColor,t.shadow?"shadow-blur":""],style:t.style},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),a("v-uni-view",{staticClass:"content",style:[{top:t.StatusBar+"px"}]},[t._t("content")],2),t._t("right")],2)],1)},c=[]},fe82:function(t,n,a){var e=a("7cf0");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("72948290",e,!0,{sourceMap:!1,shadowMode:!1})}}]);