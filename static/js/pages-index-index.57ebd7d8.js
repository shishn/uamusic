(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0b3b":function(t,e,n){"use strict";n.r(e);var i=n("9af5"),a=n("506c");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("f8fa");var o,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"d729d0d2",null,!1,i["a"],o);e["default"]=u.exports},"19b2":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{class:[t.displayInfo,"skeleton"],attrs:{animation:t.animationData}},[t.avatar?n("div",{staticClass:"skeleton-avatar",style:{width:t.imgsize,height:t.imgsize,borderRadius:t.imgarc}}):t._e(),n("v-uni-view",{staticClass:"skeleton-content"},[t.title?n("v-uni-view",{staticClass:"skeleton-content-title",style:t.titleInfo}):t._e(),t._l(t.rowDataInfo,(function(e,i){return n("v-uni-view",{key:i,staticClass:"skeleton-content-row",style:{width:t.rowInfo(i)}})}))],2)],1):t._e()},r=[]},"2a42":function(t,e,n){var i=n("b859");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("458023be",i,!0,{sourceMap:!1,shadowMode:!1})},"4ba3":function(t,e,n){"use strict";var i=n("6f90"),a=n.n(i);a.a},"506c":function(t,e,n){"use strict";n.r(e);var i=n("799a"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"513d":function(t,e,n){"use strict";n.r(e);var i=n("a3a9"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"6f90":function(t,e,n){var i=n("d4e1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("4efd7ac3",i,!0,{sourceMap:!1,shadowMode:!1})},"799a":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("ddb1")),r=i(n("ebb7"));n("c303");var o=n("4597"),s={data:function(){return{topList:[],title:"UAMusic",loading:!0}},components:{uamhead:r.default,mForSkeleton:a.default},onLoad:function(){var t=this;(0,o.topList)().then((function(e){e.length&&setTimeout((function(){t.topList=e,t.loading=!1}),2e3)}))},methods:{navList:function(t){uni.navigateTo({url:"/pages/list/list?listId="+t})},navSearch:function(){uni.navigateTo({url:"/pages/Search/Search"})}}};e.default=s},"9af5":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uamhead:n("ebb7").default,mForSkeleton:n("ddb1").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("uamhead",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"index-search",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navSearch.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont iconsearch"}),n("v-uni-input",{attrs:{type:"text",value:"",placeholder:"搜索歌曲"}})],1),n("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},[n("v-uni-view",{staticClass:"skeleton"},t._l(4,(function(e,i){return n("m-for-skeleton",{key:i,attrs:{avatarSize:200,row:3,title:!1,loading:t.loading,isarc:"square",titleStyle:{}}})})),1),t._l(t.topList,(function(e,i){return 0==t.loading?n("v-uni-view",{key:i,staticClass:"index-list-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navList(e.id)}}},[n("v-uni-view",{staticClass:"index-list-img"},[n("v-uni-image",{attrs:{src:e.coverImgUrl,mode:""}}),n("v-uni-text",[t._v(t._s(e.updateFrequency))])],1),n("v-uni-view",{staticClass:"index-list-text"},t._l(e.tracks,(function(e,i){return n("v-uni-view",{key:i},[t._v(t._s(i+1)+"."+t._s(e.first)+" - "+t._s(e.second))])})),1)],1):t._e()}))],2)],1)},r=[]},a3a9:function(t,e,n){"use strict";(function(t){n("99af"),n("caad"),n("c975"),n("a9e3"),n("acd8"),n("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=uni.createAnimation({duration:1e3,timingFunction:"linear"}),a={data:function(){return{animationData:{},imgType:["circular","square"],displayType:["vertical","horizontal"],show:!0}},props:{loading:{type:Boolean,default:!0},title:{type:Boolean,default:!0},avatar:{type:Boolean,default:!0},avatarSize:{type:Number|String,default:100},isarc:{type:String,default:"square"},titleSize:{type:Number|String,default:"50%"},titleStyle:{type:Object,default:{}},row:{type:Number,default:1},rowData:{type:Array|String,default:"80%"},display:{type:String,default:"horizontal"}},created:function(){this.animationData=i},watch:{loading:function(t){var e=this;if(!t){i.opacity(0).step(),this.animationData=i.export();var n=setTimeout((function(){e.show=!1,clearTimeout(n)}),1e3)}}},computed:{rowDataInfo:function(){for(var t=[],e=0;e<this.row;e++)t.push(e);return t},titleInfo:function(){var t="";for(var e in this.titleStyle)t+="".concat(e,":").concat(this.titleStyle[e],";");return t},imgsize:function(){switch(typeof this.avatarSize){case"number":return"".concat(uni.upx2px(this.avatarSize),"px");default:return"".concat(uni.upx2px(parseFloat(this.avatarSize)),"px")}},titlwidth:function(){switch(typeof this.titleSize){case"number":return"".concat(uni.upx2px(this.titleSize),"px");default:return"".concat(uni.upx2px(parseFloat(this.titleSize)),"px")}},imgarc:function(){return this.imgType.includes(this.isarc)?"square"==this.isarc?"0%":"50%":(t("error","输入错误".concat(this.isarc)," at components/m-for-skeleton/m-for-skeleton.vue:148"),"0%")},displayInfo:function(){return this.displayType.includes(this.display)?this.display:(t("error","输入错误".concat(this.display)," at components/m-for-skeleton/m-for-skeleton.vue:156"),"horizontal")}},methods:{rowInfo:function(t){var e=typeof this.rowData;switch(e){case"string":return this.rowData;case"object":return this.rowData[0]?(this.rowData[t]||(t=0),this.rowData[t].indexOf("%")>-1?this.rowData[t]:"".concat(uni.upx2px(parseFloat(this.rowData[t])),"px")):"80%"}}}};e.default=a}).call(this,n("0de9")["log"])},b859:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".content[data-v-d729d0d2]{display:flex;flex-direction:column;align-items:center;justify-content:center}.index-search[data-v-d729d0d2]{display:flex;background:#f7f7f7;width:%?600?%;height:%?73?%;margin:%?70?% %?30?% %?30?% %?30?%;border-radius:%?50?%;margin-right:auto}.index-search uni-text[data-v-d729d0d2]{margin:0 %?27?%}.index-search uni-input[data-v-d729d0d2]{font-size:%?26?%;flex:1}.index-list[data-v-d729d0d2]{margin:0 %?30?%}.index-list-item[data-v-d729d0d2]{display:flex;margin-bottom:%?35?%}.index-list-img[data-v-d729d0d2]{width:%?212?%;height:%?212?%;margin-right:%?20?%;border-radius:%?15?%;overflow:hidden;position:relative}.index-list-img uni-image[data-v-d729d0d2]{width:100%;height:100%}.index-list-img uni-text[data-v-d729d0d2]{position:absolute;font-size:%?22?%;color:#fff;bottom:%?15?%;left:%?15?%}.index-list-text[data-v-d729d0d2]{flex:1;font-size:%?24?%;line-height:%?68?%}",""]),t.exports=e},d4e1:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.skeleton[data-v-44c9967e]{display:flex;padding:%?20?%;box-sizing:border-box}.skeleton.vertical[data-v-44c9967e]{flex-direction:column;align-items:center}.skeleton.vertical .skeleton-content[data-v-44c9967e]{width:100%;margin-left:0;margin-top:%?20?%}.skeleton-avatar[data-v-44c9967e]{background:#ddd;flex-shrink:0}.skeleton-content[data-v-44c9967e]{flex:1;display:flex;flex-direction:column;margin-left:%?20?%;overflow:hidden}.skeleton-content-title[data-v-44c9967e]{height:%?40?%;width:50%;background:#ddd}.skeleton-content-row[data-v-44c9967e]{width:80%;height:%?40?%;background:#ddd;margin-top:%?20?%}',""]),t.exports=e},ddb1:function(t,e,n){"use strict";n.r(e);var i=n("19b2"),a=n("513d");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("4ba3");var o,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"44c9967e",null,!1,i["a"],o);e["default"]=u.exports},f8fa:function(t,e,n){"use strict";var i=n("2a42"),a=n.n(i);a.a}}]);