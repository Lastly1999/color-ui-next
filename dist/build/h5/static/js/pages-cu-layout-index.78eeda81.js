(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cu-layout-index"],{"0ea5":function(t,a,s){var n=s("48f6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=s("4f06").default;e("43f1f2d0",n,!0,{sourceMap:!1,shadowMode:!1})},1459:function(t,a,s){"use strict";s.r(a);var n=s("e52a7"),e=s("4ccc");for(var r in e)["default"].indexOf(r)<0&&function(t){s.d(a,t,(function(){return e[t]}))}(r);var i,c=s("f0c5"),u=Object(c["a"])(e["default"],n["b"],n["c"],!1,null,"49ef3894",null,!1,n["a"],i);a["default"]=u.exports},"184e":function(t,a,s){"use strict";s.r(a);var n=s("fc86"),e=s("8c18");for(var r in e)["default"].indexOf(r)<0&&function(t){s.d(a,t,(function(){return e[t]}))}(r);var i,c=s("f0c5"),u=Object(c["a"])(e["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);a["default"]=u.exports},"2dd8":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"cu-span",inject:["row"],data:function(){return{layoutType:""}},props:{span:{type:String,default:function(){return"df"}},margin:{type:String,default:function(){return""}},padding:{type:String,default:function(){return""}},center:{type:Boolean,default:function(){return!1}}},created:function(){this.row.type&&(this.layoutType=this.row.type)}};a.default=n},"359f":function(t,a,s){"use strict";s.r(a);var n=s("6116"),e=s.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){s.d(a,t,(function(){return n[t]}))}(r);a["default"]=e.a},"48f6":function(t,a,s){var n=s("24fb");a=n(!1),a.push([t.i,"uni-page-body[data-v-6f33d38e]{background:#fff}.layoutPage[data-v-6f33d38e]{padding:%?20?%}.titleCenter[data-v-6f33d38e]{text-align:center}body.?%PAGE?%[data-v-6f33d38e]{background:#fff}",""]),t.exports=a},"4ccc":function(t,a,s){"use strict";s.r(a);var n=s("bb0c"),e=s.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){s.d(a,t,(function(){return n[t]}))}(r);a["default"]=e.a},"4e16":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"layout"};a.default=n},6116:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,s("99af");var n={data:function(){return{StatusBar:"",CustomBar:""}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,a=this.CustomBar,s=this.bgImage,n="height:".concat(a,"px;padding-top:").concat(t,"px;");return this.bgImage&&(n="".concat(n,"background-image:url(").concat(s,");")),n}},created:function(){this.computeStatus()},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""},shadow:{type:Boolean,default:function(){return!1}}},methods:{computeStatus:function(){var t=this;uni.getSystemInfo({success:function(a){t.StatusBar=a.statusBarHeight,"android"==a.platform?t.CustomBar=a.statusBarHeight+50:t.CustomBar=a.statusBarHeight+45}})},BackPage:function(){if(getCurrentPages().length<2&&"undefined"!==typeof __wxConfig){var t="/"+__wxConfig.pages[0];return uni.redirectTo({url:t})}uni.navigateBack({delta:1})}}};a.default=n},"8c18":function(t,a,s){"use strict";s.r(a);var n=s("2dd8"),e=s.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){s.d(a,t,(function(){return n[t]}))}(r);a["default"]=e.a},"8c79":function(t,a,s){"use strict";s.d(a,"b",(function(){return e})),s.d(a,"c",(function(){return r})),s.d(a,"a",(function(){return n}));var n={cuNavbar:s("d0f9").default,cuRow:s("1459").default,cuSpan:s("184e").default},e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-uni-view",[s("cu-navbar",{attrs:{shadow:!0,bgColor:"gradual-red",isBack:!1}},[s("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),s("template",{attrs:{slot:"content"},slot:"content"},[t._v("常用布局")])],2),s("v-uni-view",{staticClass:"layoutPage"},[s("v-uni-view",{staticClass:"defaultLayout"},[s("h3",{staticClass:"titleCenter margin-bottom-sm margin-top-sm"},[t._v("默认布局")]),s("cu-row",[s("cu-span",{staticClass:"bg-grey",attrs:{span:"df",center:!0}},[t._v('span="df"')]),s("cu-span",{staticClass:"bg-grey",attrs:{margin:"left-sm",span:"df",center:!0}},[t._v('span="df"')])],1)],1),s("v-uni-view",{staticClass:"sizeLayout"},[s("h3",{staticClass:"titleCenter margin-bottom-sm margin-top-sm"},[t._v("不同大小布局")]),s("cu-row",[s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0}},[t._v('span="sm"')]),s("cu-span",{staticClass:"bg-grey",attrs:{margin:"left-sm",span:"sm",center:!0}},[t._v('span="sm"')]),s("cu-span",{staticClass:"bg-grey",attrs:{margin:"left-sm",span:"sm",center:!0}},[t._v('span="sm"')])],1),s("cu-row",{attrs:{margin:"top-sm"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0}},[t._v('span="sm"')]),s("cu-span",{staticClass:"bg-grey",attrs:{margin:"left-sm",span:"xl",center:!0}},[t._v('span="xl"')]),s("cu-span",{staticClass:"bg-grey",attrs:{margin:"left-sm",span:"xl",center:!0}},[t._v('span="xl"')])],1)],1),s("v-uni-view",{staticClass:"flexWrapLayout"},[s("h3",{staticClass:"titleCenter margin-bottom-sm margin-top-sm"},[t._v("自动适应")]),s("cu-row",{attrs:{flexWrap:!0}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0}},[t._v('span="sm" center')]),s("cu-span",{staticClass:"bg-grey",attrs:{margin:"left-sm",span:"sm",center:!0}},[t._v('span="sm" center')]),s("cu-span",{staticClass:"bg-grey",attrs:{margin:"left-sm",span:"sm",center:!0}},[t._v('span="sm" center')])],1),s("cu-row",{attrs:{margin:"top-sm"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"lg",center:!0}},[t._v('span="lg" center')]),s("cu-span",{staticClass:"bg-grey",attrs:{margin:"left-sm",span:"lg",center:!0}},[t._v('span="lg" center')]),s("cu-span",{staticClass:"bg-grey",attrs:{margin:"left-sm",span:"lg",center:!0}},[t._v('span="lg" center')])],1)],1),s("v-uni-view",{staticClass:"staticSizeLayout"},[s("h3",{staticClass:"titleCenter margin-bottom-sm margin-top-sm"},[t._v("固定尺寸")]),s("cu-row",{attrs:{flexWrap:!0,margin:"bottom-sm"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0}},[t._v('span="sm" center')])],1),s("cu-row",{attrs:{flexWrap:!0,margin:"bottom-sm"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"df",center:!0}},[t._v('span="df" center')])],1),s("cu-row",{attrs:{flexWrap:!0,margin:"bottom-sm"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"lg",center:!0}},[t._v('span="lg" center')])],1),s("cu-row",{attrs:{flexWrap:!0,margin:"bottom-sm"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"xl",center:!0}},[t._v('span="xl" center')])],1)],1),s("v-uni-view",{staticClass:"containerLayout"},[s("h3",{staticClass:"titleCenter margin-bottom-sm margin-top-sm"},[t._v("比例布局")]),s("cu-row",{attrs:{margin:"bottom-sm",type:"flex"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"sub",center:!0}},[t._v('span="sub" center')]),s("cu-span",{staticClass:"bg-grey",attrs:{span:"sub",center:!0,margin:"left-sm"}},[t._v('span="sub" center')])],1),s("cu-row",{attrs:{margin:"bottom-sm",type:"flex"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"sub",center:!0}},[t._v('span="sub" center')]),s("cu-span",{staticClass:"bg-grey",attrs:{span:"twice",center:!0,margin:"left-sm"}},[t._v('span="twice" center')])],1),s("cu-row",{attrs:{margin:"bottom-sm",type:"flex"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"sub",center:!0}},[t._v('span="sub"')]),s("cu-span",{staticClass:"bg-grey",attrs:{span:"twice",center:!0,margin:"left-sm"}},[t._v('span="twice"')]),s("cu-span",{staticClass:"bg-grey",attrs:{span:"treble",center:!0,margin:"left-sm"}},[t._v('span="treble"')])],1)],1),s("v-uni-view",{staticClass:"paddingLayout"},[s("h3",{staticClass:"titleCenter margin-bottom-sm margin-top-sm"},[t._v("布局内边距")]),s("cu-row",{attrs:{margin:"bottom-sm",type:"flex"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"sub",center:!0,padding:"xl"}},[t._v('span="sub" padding="sm"')]),s("cu-span",{staticClass:"bg-grey",attrs:{span:"sub",center:!0,padding:"xl",margin:"left-sm"}},[t._v('span="sub" padding="xl"')])],1)],1),s("v-uni-view",{staticClass:"marginLayout"},[s("h3",{staticClass:"titleCenter margin-bottom-sm margin-top-sm"},[t._v("布局内边距")]),s("cu-row",{attrs:{margin:"bottom-sm",type:"flex"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"sub",center:!0,margin:"xl"}},[t._v('span="sub" padding="sm"')]),s("cu-span",{staticClass:"bg-grey",attrs:{span:"sub",center:!0,margin:"xl"}},[t._v('span="sub" padding="xl"')])],1)],1),s("v-uni-view",{staticClass:"justifyLayout"},[s("h3",{staticClass:"titleCenter margin-bottom-sm margin-top-sm"},[t._v("水平对齐")]),s("cu-row",{attrs:{margin:"bottom-sm",flexWrap:!0,type:"flex",justify:"start"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0,margin:"sm",padding:"sm"}},[t._v('justify="start"')]),s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0,margin:"sm",padding:"sm"}},[t._v('justify="start"')])],1),s("cu-row",{attrs:{margin:"bottom-sm",type:"flex",justify:"center"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0,margin:"sm",padding:"sm"}},[t._v('justify="center"')]),s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0,margin:"sm",padding:"sm"}},[t._v('justify="center"')])],1),s("cu-row",{attrs:{margin:"bottom-sm",type:"flex",justify:"end"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0,margin:"sm",padding:"sm"}},[t._v('justify="end"')]),s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0,margin:"sm",padding:"sm"}},[t._v('justify="end"')])],1),s("cu-row",{attrs:{margin:"bottom-sm",type:"flex",justify:"between"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0,margin:"sm",padding:"sm"}},[t._v('justify="between"')]),s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0,margin:"sm",padding:"sm"}},[t._v('justify="between"')])],1),s("cu-row",{attrs:{margin:"bottom-sm",type:"flex",justify:"between"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0,margin:"sm",padding:"sm"}},[t._v('justify="between"')]),s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0,margin:"sm",padding:"sm"}},[t._v('justify="between"')])],1)],1),s("v-uni-view",{staticClass:"alignLayout"},[s("h3",{staticClass:"titleCenter margin-bottom-sm margin-top-sm"},[t._v("水平对齐")]),s("cu-row",{attrs:{margin:"bottom-sm",flexWrap:!0,type:"flex",align:"start"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0,margin:"sm",padding:"sm"}},[t._v('align="start"')]),s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0,margin:"sm",padding:"xl"}},[t._v('align="start"')])],1),s("cu-row",{attrs:{margin:"bottom-sm",flexWrap:!0,type:"flex",align:"center"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0,margin:"sm",padding:"sm"}},[t._v('align="center"')]),s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0,margin:"sm",padding:"xl"}},[t._v('align="center"')])],1),s("cu-row",{attrs:{margin:"bottom-sm",flexWrap:!0,type:"flex",align:"end"}},[s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0,margin:"sm",padding:"sm"}},[t._v('align="end"')]),s("cu-span",{staticClass:"bg-grey",attrs:{span:"sm",center:!0,margin:"sm",padding:"xl"}},[t._v('align="end"')])],1)],1)],1)],1)},r=[]},9714:function(t,a,s){"use strict";s.r(a);var n=s("8c79"),e=s("f604");for(var r in e)["default"].indexOf(r)<0&&function(t){s.d(a,t,(function(){return e[t]}))}(r);s("b895");var i,c=s("f0c5"),u=Object(c["a"])(e["default"],n["b"],n["c"],!1,null,"6f33d38e",null,!1,n["a"],i);a["default"]=u.exports},b895:function(t,a,s){"use strict";var n=s("0ea5"),e=s.n(n);e.a},bb0c:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"cu-row",provide:function(){return{row:this}},props:{flexWrap:{type:Boolean,default:function(){return!1}},margin:{type:String,default:function(){return""}},padding:{type:String,default:function(){return""}},type:{type:String,default:function(){return"basis"}},justify:{type:String,default:function(){return"start"}},align:{type:String,default:function(){return"start"}}}};a.default=n},d0f9:function(t,a,s){"use strict";s.r(a);var n=s("eb47"),e=s("359f");for(var r in e)["default"].indexOf(r)<0&&function(t){s.d(a,t,(function(){return e[t]}))}(r);var i,c=s("f0c5"),u=Object(c["a"])(e["default"],n["b"],n["c"],!1,null,"36ac6f7d",null,!1,n["a"],i);a["default"]=u.exports},e52a7:function(t,a,s){"use strict";var n;s.d(a,"b",(function(){return e})),s.d(a,"c",(function(){return r})),s.d(a,"a",(function(){return n}));var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-uni-view",{class:["flex",t.flexWrap?"flexWrap":"",t.margin?"margin-"+t.margin:"",t.padding?"padding-"+t.padding:"","justify-"+t.justify,"align-"+t.align]},[t._t("default")],2)},r=[]},eb47:function(t,a,s){"use strict";var n;s.d(a,"b",(function(){return e})),s.d(a,"c",(function(){return r})),s.d(a,"a",(function(){return n}));var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-uni-view",{staticClass:"cu-custom",style:[{height:t.CustomBar+"px"}]},[s("v-uni-view",{staticClass:"cu-bar fixed",class:[""!=t.bgImage?"none-bg text-white bg-img":"","bg-"+t.bgColor,t.shadow?"shadow-blur":""],style:t.style},[t.isBack?s("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[s("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),s("v-uni-view",{staticClass:"content",style:[{top:t.StatusBar+"px"}]},[t._t("content")],2),t._t("right")],2)],1)},r=[]},f604:function(t,a,s){"use strict";s.r(a);var n=s("4e16"),e=s.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){s.d(a,t,(function(){return n[t]}))}(r);a["default"]=e.a},fc86:function(t,a,s){"use strict";var n;s.d(a,"b",(function(){return e})),s.d(a,"c",(function(){return r})),s.d(a,"a",(function(){return n}));var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-uni-view",{class:[t.layoutType?t.layoutType+"-"+t.span:"",t.margin?"margin-"+t.margin:"",t.padding?"padding-"+t.padding:""],style:{"text-align":t.center?"center":""}},[t._t("default")],2)},r=[]}}]);