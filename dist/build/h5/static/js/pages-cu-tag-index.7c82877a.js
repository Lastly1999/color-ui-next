(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cu-tag-index"],{"00ce":function(t,e,n){"use strict";n.r(e);var a=n("b5bb"),u=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=u.a},"2e80":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-text",{class:["cuIcon-"+t.name,"text-"+t.color]})},r=[]},"359f":function(t,e,n){"use strict";n.r(e);var a=n("6116"),u=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=u.a},"535e":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".tagPage[data-v-446170fe]{padding:20 rpx;text-align:center}",""]),t.exports=e},"54ea":function(t,e,n){"use strict";n.r(e);var a=n("2e80"),u=n("e0d0");for(var r in u)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(r);var i,c=n("f0c5"),o=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=o.exports},6116:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("99af");var a={data:function(){return{StatusBar:"",CustomBar:""}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,e=this.CustomBar,n=this.bgImage,a="height:".concat(e,"px;padding-top:").concat(t,"px;");return this.bgImage&&(a="".concat(a,"background-image:url(").concat(n,");")),a}},created:function(){this.computeStatus()},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""},shadow:{type:Boolean,default:function(){return!1}}},methods:{computeStatus:function(){var t=this;uni.getSystemInfo({success:function(e){t.StatusBar=e.statusBarHeight,"android"==e.platform?t.CustomBar=e.statusBarHeight+50:t.CustomBar=e.statusBarHeight+45}})},BackPage:function(){if(getCurrentPages().length<2&&"undefined"!==typeof __wxConfig){var t="/"+__wxConfig.pages[0];return uni.redirectTo({url:t})}uni.navigateBack({delta:1})}}};e.default=a},"7c30":function(t,e,n){"use strict";n.r(e);var a=n("84f3"),u=n("b516");for(var r in u)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(r);var i,c=n("f0c5"),o=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=o.exports},"819c":function(t,e,n){var a=n("535e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var u=n("4f06").default;u("5151fb6e",a,!0,{sourceMap:!1,shadowMode:!1})},"84f3":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:["cu-tag",t.size?t.size:"",t.type?t.type:"",t.bg?t.line?"line-"+t.bg:"bg-"+t.bg:"",t.color?"text-"+t.color:"",t.badge?"badge":"",t.icon?"cuIcon-"+t.icon:""]},[t._t("default")],2)},r=[]},af08:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={cuNavbar:n("d0f9").default,cuTag:n("7c30").default,cuIcon:n("54ea").default},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tagPage"},[n("cu-navbar",{attrs:{shadow:!0,bgColor:"gradual-blue",isBack:!1}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("按钮组件")])],2),n("v-uni-view",{staticClass:"defaultTag margin"},[n("h3",{staticClass:"margin"},[t._v("普通徽章")]),n("cu-tag",{attrs:{bg:"blue"}},[t._v("默认")]),n("cu-tag",{attrs:{bg:"yellow",color:"white"}},[t._v("默认")]),n("cu-tag",{attrs:{bg:"green"}},[t._v("默认")]),n("cu-tag",{attrs:{bg:"red"}},[t._v("默认")])],1),n("v-uni-view",{staticClass:"radiusTag"},[n("h3",{staticClass:"margin"},[t._v("椭圆徽章")]),n("cu-tag",{attrs:{type:"round",bg:"blue"}},[t._v("椭圆")]),n("cu-tag",{attrs:{type:"round",bg:"yellow",color:"white"}},[t._v("椭圆")]),n("cu-tag",{attrs:{type:"round",bg:"green"}},[t._v("椭圆")]),n("cu-tag",{attrs:{type:"round",bg:"red"}},[t._v("椭圆")])],1),n("v-uni-view",{staticClass:"lineTag"},[n("h3",{staticClass:"margin"},[t._v("镂空徽章")]),n("cu-tag",{attrs:{line:!0,type:"round",bg:"blue"}},[t._v("镂空")]),n("cu-tag",{attrs:{line:!0,type:"round",bg:"yellow"}},[t._v("镂空")]),n("cu-tag",{attrs:{line:!0,type:"round",bg:"green"}},[t._v("镂空")]),n("cu-tag",{attrs:{line:!0,type:"round",bg:"red"}},[t._v("镂空")])],1),n("v-uni-view",{staticClass:"sizeTag"},[n("h3",{staticClass:"margin"},[t._v("徽章尺寸")]),n("cu-tag",{attrs:{bg:"blue",size:"sm",type:"round"}},[t._v("小尺寸")]),n("cu-tag",{attrs:{bg:"yellow",type:"round",color:"white"}},[t._v("默认尺寸")]),n("cu-tag",{attrs:{bg:"green",size:"lg",type:"round"}},[t._v("大尺寸")])],1),n("v-uni-view",{staticClass:"sizeTag"},[n("h3",{staticClass:"margin"},[t._v("图标徽章")]),n("cu-tag",{attrs:{bg:"green",size:"lg",type:"round"}},[n("cu-icon",{attrs:{name:"search"}}),n("v-uni-text",[t._v("搜索")])],1),n("cu-tag",{attrs:{bg:"blue",size:"lg",type:"round"}},[n("cu-icon",{attrs:{name:"check"}}),n("v-uni-text",[t._v("get")])],1),n("cu-tag",{attrs:{bg:"red",size:"lg",type:"round"}},[n("cu-icon",{attrs:{name:"edit"}}),n("v-uni-text",[t._v("修改")])],1),n("cu-tag",{attrs:{bg:"yellow",size:"lg",type:"round",color:"white"}},[n("cu-icon",{attrs:{name:"emoji"}}),n("v-uni-text",[t._v("哈哈")])],1)],1)],1)},r=[]},b1ee:function(t,e,n){"use strict";n.r(e);var a=n("af08"),u=n("00ce");for(var r in u)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(r);n("caee");var i,c=n("f0c5"),o=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,"446170fe",null,!1,a["a"],i);e["default"]=o.exports},b516:function(t,e,n){"use strict";n.r(e);var a=n("cf06"),u=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=u.a},b5bb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tag"};e.default=a},caee:function(t,e,n){"use strict";var a=n("819c"),u=n.n(a);u.a},cf06:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-tag",props:{size:{type:String,default:function(){return""}},type:{type:String,default:function(){return""}},bg:{type:String,default:function(){return"blue"}},line:{type:Boolean,default:function(){return!1}},color:{type:String,default:function(){return""}},badge:{type:Boolean,default:function(){return!1}},icon:{type:String,default:function(){return""}}}};e.default=a},d0f9:function(t,e,n){"use strict";n.r(e);var a=n("eb47"),u=n("359f");for(var r in u)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(r);var i,c=n("f0c5"),o=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,"36ac6f7d",null,!1,a["a"],i);e["default"]=o.exports},e0d0:function(t,e,n){"use strict";n.r(e);var a=n("e94d"),u=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=u.a},e94d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"cu-icon",props:{name:{type:String,default:function(){return""}},color:{type:String,default:function(){return""}}}};e.default=a},eb47:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cu-custom",style:[{height:t.CustomBar+"px"}]},[n("v-uni-view",{staticClass:"cu-bar fixed",class:[""!=t.bgImage?"none-bg text-white bg-img":"","bg-"+t.bgColor,t.shadow?"shadow-blur":""],style:t.style},[t.isBack?n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),n("v-uni-view",{staticClass:"content",style:[{top:t.StatusBar+"px"}]},[t._t("content")],2),t._t("right")],2)],1)},r=[]}}]);