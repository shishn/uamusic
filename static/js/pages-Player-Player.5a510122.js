(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Player-Player"],{"0151":function(t,a,n){var i=n("6d45");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=n("4f06").default;e("31a291a8",i,!0,{sourceMap:!1,shadowMode:!1})},"09bd":function(t,a,n){"use strict";var i=n("0151"),e=n.n(i);e.a},"3f74":function(t,a,n){"use strict";(function(t){var i=n("4ea4");n("d3b7"),n("acd8"),n("ac1f"),n("3ca3"),n("5319"),n("1276"),n("ddb0"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i(n("ebb7")),r=n("4597"),o={data:function(){return{playingIndex:0,song:{id:"",name:"",artist:"",picUrl:"",url:"",lyric:""},lyricIndex:0,isplayrotate:!1}},components:{uamhead:e.default},computed:{playlist:function(){return this.$store.state.playingList}},onLoad:function(t){var a=this,n=t.songId;this.song.id=n,Promise.all([(0,r.songDetail)(n),(0,r.songLyric)(n),(0,r.songUrl)(n)]).then((function(t){if("200"==t[0][1].data.code){var n=t[0][1].data.songs[0];a.song.name=n.name,a.song.artist=n.ar[0].name,a.song.picUrl=n.al.picUrl}if("200"==t[1][1].data.code){var i=t[1][1].data.lrc.lyric,e=[],r=/\[([^\]]+)\]([^[]+)/g;i.replace(r,(function(t,n,i){e.push({time:a.formatTimeToSec(n),lyric:i})})),a.song.lyric=e}"200"==t[2][1].data.code&&(a.song.url=t[2][1].data.data[0].url)})),this.$store.commit("addSong",this.song),this.playingIndex=this.$store.state.playingList.length-1},methods:{playing:function(){this.$store.state.playingList.length>this.playingIndex&&this.play(this.$store.state.playingList[this.playingIndex].url)},playMusic:function(t){var a=this;(0,r.songUrl)(t).then((function(t){"200"==t[1].data.code&&a.play(t[1].data.data[0].url)}))},play:function(a){var n=this;this.isplayrotate=!0,this.innerAudioContext=uni.createInnerAudioContext(),this.innerAudioContext.autoplay=!0,this.innerAudioContext.src=a,this.innerAudioContext.onPlay((function(){t("log","开始播放"," at pages/Player/Player.vue:96"),n.listenLyricIndex()})),innerAudioContext.onError((function(a){t("log",a.errCode," at pages/Player/Player.vue:100")}))},formatTimeToSec:function(t){var a=t.split(":");return(60*parseFloat(a[0])+parseFloat(a[1])).toFixed(2)},listenLyricIndex:function(){var t=this;clearInterval(this.timer),this.timer=setInterval((function(){for(var a=0;a<t.song.lyric.length;a++){if(t.song.lyric[t.song.lyric.length-1].time<t.innerAudioContext.currentTime){t.lyricIndex=t.song.yric.length-1;break}t.song.lyric[a].time<t.innerAudioContext.currentTime&&t.song.lyric[a+1].time>t.innerAudioContext.currentTime&&(t.lyricIndex=a)}}))},cancelLyricIndex:function(){clearInterval(this.timer)}}};a.default=o}).call(this,n("0de9")["log"])},"47fd":function(t,a,n){"use strict";n.r(a);var i=n("f992"),e=n("599c");for(var r in e)"default"!==r&&function(t){n.d(a,t,(function(){return e[t]}))}(r);n("09bd");var o,s=n("f0c5"),l=Object(s["a"])(e["default"],i["b"],i["c"],!1,null,"9a740a38",null,!1,i["a"],o);a["default"]=l.exports},"599c":function(t,a,n){"use strict";n.r(a);var i=n("3f74"),e=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(a,t,(function(){return i[t]}))}(r);a["default"]=e.a},"6a89":function(t,a,n){t.exports=n.p+"static/img/needle.ba07ced1.png"},"6d45":function(t,a,n){var i=n("24fb"),e=n("1de5"),r=n("e994"),o=n("6a89");a=i(!1);var s=e(r),l=e(o);a.push([t.i,".player[data-v-9a740a38]{width:%?580?%;height:%?580?%;background:url("+s+");background-size:cover;margin:%?210?% auto %?44?% auto;position:relative}.player uni-image[data-v-9a740a38]{width:%?380?%;height:%?380?%;border-radius:50%;position:absolute;left:0;top:0;right:0;bottom:0;margin:auto;-webkit-animation:10s linear infinite move-data-v-9a740a38;animation:10s linear infinite move-data-v-9a740a38;-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes move-data-v-9a740a38{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes move-data-v-9a740a38{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.player uni-text[data-v-9a740a38]{width:%?100?%;height:%?100?%;font-size:%?100?%;position:absolute;left:0;top:0;right:0;bottom:0;margin:auto;color:#fff}.player uni-view[data-v-9a740a38]{position:absolute;width:%?170?%;height:%?266?%;position:absolute;left:%?60?%;right:0;margin:auto;top:%?-170?%;background:url("+l+");background-size:cover}.player .run[data-v-9a740a38]{-webkit-animation-play-state:running;animation-play-state:running}.lyric[data-v-9a740a38]{height:%?246?%;line-height:%?82?%;font-size:%?32?%;text-align:center;color:#949495;overflow:hidden}.active[data-v-9a740a38]{color:#fff}.lyric .wrap[data-v-9a740a38]{transition:.5s}.lyric .item[data-v-9a740a38]{height:%?82?%}",""]),t.exports=a},e994:function(t,a,n){t.exports=n.p+"static/img/disc.d3bdd108.png"},f992:function(t,a,n){"use strict";n.d(a,"b",(function(){return e})),n.d(a,"c",(function(){return r})),n.d(a,"a",(function(){return i}));var i={uamhead:n("ebb7").default},e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("uamhead",{attrs:{title:"播放器"}}),n("v-uni-view",{staticClass:"player"},[n("v-uni-image",{class:{run:t.isplayrotate},attrs:{src:t.song.picUrl,mode:""}}),n("v-uni-text",{staticClass:"iconfont iconbofang",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.playing.apply(void 0,arguments)}}}),n("v-uni-view")],1),n("v-uni-scroll-view",{staticClass:"lyric",attrs:{"scroll-y":"true"}},[t._v(t._s(t.song.name)),n("v-uni-view",{staticClass:"wrap",style:{transform:"translateY("+82*-(t.lyricIndex-1)+"rpx)"}},t._l(t.song.lyric,(function(a,i){return n("v-uni-view",{key:i,staticClass:"item",class:{active:t.lyricIndex==i}},[t._v(t._s(a.lyric))])})),1)],1),t._l(t.playlist,(function(a,i){return n("v-uni-view",{},[n("v-uni-text",[t._v(t._s(a.id))]),n("v-uni-text",[t._v(t._s(a.name))])],1)}))],2)},r=[]}}]);