(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cu-progress-index"],{3238:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var r={cuNavbar:n("d0f9").default,cuProgress:n("7649").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-navbar",{attrs:{shadow:!0,bgColor:"gradual-green",isBack:!1}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("进度条组件")])],2),n("v-uni-view",{staticClass:"progressPage"},[n("h3",{staticClass:"title margin"},[t._v("进度条形状")]),n("cu-progress",{attrs:{bg:"red",width:"70%"}},[t._v("default")]),n("cu-progress",{attrs:{bg:"red",width:"60%",radius:!0}},[t._v("radius")]),n("cu-progress",{attrs:{bg:"red",width:"80%",round:!0}},[t._v("round")]),n("h3",{staticClass:"title margin"},[t._v("进度条尺寸")]),n("cu-progress",{attrs:{bg:"red",width:"70%"}}),n("cu-progress",{attrs:{bg:"red",width:"60%",size:"sm"}}),n("cu-progress",{attrs:{bg:"red",width:"80%",size:"xs"}}),n("h3",{staticClass:"title margin"},[t._v("进度条条纹")]),n("cu-progress",{attrs:{round:!0,bg:"green",width:"80%",striped:!0}}),n("cu-progress",{attrs:{round:!0,bg:"green",width:"80%",striped:!0}}),n("cu-progress",{attrs:{round:!0,bg:"green",width:"80%",striped:!0}})],1)],1)},u=[]},3549:function(t,e,n){"use strict";n.r(e);var r=n("78f1"),a=n.n(r);for(var u in r)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=a.a},"359f":function(t,e,n){"use strict";n.r(e);var r=n("6116"),a=n.n(r);for(var u in r)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=a.a},6116:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("99af");var r={data:function(){return{StatusBar:"",CustomBar:""}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,e=this.CustomBar,n=this.bgImage,r="height:".concat(e,"px;padding-top:").concat(t,"px;");return this.bgImage&&(r="".concat(r,"background-image:url(").concat(n,");")),r}},created:function(){this.computeStatus()},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""},shadow:{type:Boolean,default:function(){return!1}}},methods:{computeStatus:function(){var t=this;uni.getSystemInfo({success:function(e){t.StatusBar=e.statusBarHeight,"android"==e.platform?t.CustomBar=e.statusBarHeight+50:t.CustomBar=e.statusBarHeight+45}})},BackPage:function(){if(getCurrentPages().length<2&&"undefined"!==typeof __wxConfig){var t="/"+__wxConfig.pages[0];return uni.redirectTo({url:t})}uni.navigateBack({delta:1})}}};e.default=r},"6a4e":function(t,e,n){"use strict";n.r(e);var r=n("3238"),a=n("856d");for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("a8bb");var i,s=n("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"25849ecb",null,!1,r["a"],i);e["default"]=o.exports},"6aef":function(t,e,n){var r=n("f413");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("22bce33d",r,!0,{sourceMap:!1,shadowMode:!1})},7649:function(t,e,n){"use strict";n.r(e);var r=n("c215"),a=n("3549");for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);var i,s=n("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=o.exports},"78f1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"cu-progress",props:{radius:{type:Boolean,default:function(){return!1}},round:{type:Boolean,default:function(){return!1}},bg:{type:String,default:function(){return"blue"}},loading:{type:Boolean,default:function(){return!0}},width:{type:String,default:function(){return"0%"}},size:{type:String,default:function(){return""}},striped:{type:Boolean,default:function(){return!1}}}};e.default=r},"856d":function(t,e,n){"use strict";n.r(e);var r=n("d6b2"),a=n.n(r);for(var u in r)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=a.a},a8bb:function(t,e,n){"use strict";var r=n("6aef"),a=n.n(r);a.a},c215:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:["cu-progress",t.radius?"radius":"",t.round?"round":"",t.size?t.size:"",t.striped?"striped":"",t.striped?"active":""]},[n("v-uni-view",{class:["bg-"+t.bg],style:[{width:t.loading?t.width:""}]},[t._t("default")],2)],1)},u=[]},d0f9:function(t,e,n){"use strict";n.r(e);var r=n("eb47"),a=n("359f");for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);var i,s=n("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"36ac6f7d",null,!1,r["a"],i);e["default"]=o.exports},d6b2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"index"};e.default=r},eb47:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cu-custom",style:[{height:t.CustomBar+"px"}]},[n("v-uni-view",{staticClass:"cu-bar fixed",class:[""!=t.bgImage?"none-bg text-white bg-img":"","bg-"+t.bgColor,t.shadow?"shadow-blur":""],style:t.style},[t.isBack?n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),n("v-uni-view",{staticClass:"content",style:[{top:t.StatusBar+"px"}]},[t._t("content")],2),t._t("right")],2)],1)},u=[]},f413:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,"uni-page-body[data-v-25849ecb]{background:#fff}.progressPage[data-v-25849ecb]{padding:%?20?%;background-color:#fff}.title[data-v-25849ecb]{text-align:center}body.?%PAGE?%[data-v-25849ecb]{background:#fff}",""]),t.exports=e}}]);