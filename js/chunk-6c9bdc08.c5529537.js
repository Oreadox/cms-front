(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c9bdc08"],{"159b":function(e,t,n){var a=n("da84"),o=n("fdbc"),s=n("17c2"),r=n("9112");for(var i in o){var c=a[i],l=c&&c.prototype;if(l&&l.forEach!==s)try{r(l,"forEach",s)}catch(d){l.forEach=s}}},"17c2":function(e,t,n){"use strict";var a=n("b727").forEach,o=n("a640"),s=n("ae40"),r=o("forEach"),i=s("forEach");e.exports=r&&i?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"25bc":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CommonMail")},o=[],s=n("38fb"),r={name:"HotelMail",components:{CommonMail:s["a"]}},i=r,c=n("0c7c"),l=Object(c["a"])(i,a,o,!1,null,"3e013559",null);t["default"]=l.exports},"38fb":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Card",{attrs:{"dis-hover":"",bordered:!1}},[n("div",{staticStyle:{"margin-bottom":"2vw"}},[n("Button",{attrs:{size:"large",type:"primary"},on:{click:function(t){e.openWriteMail=!0}}},[e._v("写信")])],1),n("div",[n("Collapse",{attrs:{simple:""},model:{value:e.showingAll,callback:function(t){e.showingAll=t},expression:"showingAll"}},[n("Panel",{attrs:{name:"receive"}},[e._v(" 收信箱 "),n("div",{attrs:{slot:"content"},slot:"content"},[n("Table",{attrs:{columns:this.columns,data:this.receiveBox,stripe:!0,"highlight-row":""},on:{"on-row-click":e.openReceiveDetail},scopedSlots:e._u([{key:"ifRead",fn:function(t){var a=t.row;return[a.read?a.read?n("Tag",{staticStyle:{"margin-right":"5px"},attrs:{color:"success"}},[e._v("已读")]):e._e():n("Tag",{staticStyle:{"margin-right":"5px"},attrs:{color:"primary"}},[e._v("未读")])]}}])})],1)]),n("Panel",{attrs:{name:"send"}},[e._v(" 发信箱 "),n("div",{attrs:{slot:"content"},slot:"content"},[n("Table",{staticStyle:{"overflow-y":"auto"},attrs:{columns:this.columns2,data:this.sendBox,stripe:!0,"highlight-row":"","max-height":"500px"},on:{"on-row-click":e.openSendDetail},scopedSlots:e._u([{key:"ifRead",fn:function(t){var a=t.row;return[a.read?a.read?n("Tag",{staticStyle:{"margin-right":"5px"},attrs:{color:"success"}},[e._v("已读")]):e._e():n("Tag",{staticStyle:{"margin-right":"5px"},attrs:{color:"primary"}},[e._v("未读")])]}}])})],1)])],1)],1)]),n("Modal",{staticStyle:{"padding-top":"20px"},attrs:{"footer-hide":""},model:{value:e.openModal,callback:function(t){e.openModal=t},expression:"openModal"}},[n("div",[n("Form",[n("FormItem",{attrs:{label:"内容详情"}},[n("Input",{attrs:{rows:4,type:"textarea",readonly:""},model:{value:e.contentDetail,callback:function(t){e.contentDetail=t},expression:"contentDetail"}})],1)],1)],1)]),n("Modal",{staticStyle:{padding:"20px"},attrs:{"footer-hide":""},model:{value:e.openWriteMail,callback:function(t){e.openWriteMail=t},expression:"openWriteMail"}},[n("div",{staticStyle:{padding:"5%"}},[n("WriteMail",{on:{closeSendModal:e.closeSendModal}})],1)])],1)},o=[],s=(n("4160"),n("159b"),n("59ca")),r={name:"CommonMail",components:{WriteMail:s["a"]},data:function(){return{columns:[{key:"username",title:"用户名",maxWidth:200},{key:"content",title:"内容",ellipsis:!0},{title:"状态",slot:"ifRead",ellipsis:!0,maxWidth:100}],columns2:[{key:"username",title:"用户名",maxWidth:200},{key:"content",title:"内容",ellipsis:!0},{title:"状态",slot:"ifRead",ellipsis:!0,maxWidth:100}],receiveBox:[{id:1,senderId:1e3,content:"asd",sendTime:"2020-10-22",read:!1}],sendBox:[],showingAll:["receive","send"],contentDetail:"xxx",openModal:!1,openWriteMail:!1}},created:function(){this.initData()},methods:{initData:function(){var e=this;this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/message/unread")}).then((function(t){e.receiveBox=[],t["data"].forEach((function(t){var n={id:t["id"],senderId:t["senderId"],content:t["content"],sendTime:t["sendTime"],read:t["read"],username:t[""]},a={accountId:n.senderId};e.$axios({method:"post",url:"".concat(e.$baseURI,"/api/message/getAccount"),data:a}).then((function(t){n.username=t["data"]["username"],e.receiveBox.push(n)}))}))})).then((function(){e.$axios({method:"post",url:"".concat(e.$baseURI,"/api/message/read")}).then((function(t){t["data"].forEach((function(t){var n={id:t["id"],senderId:t["senderId"],content:t["content"],sendTime:t["sendTime"],read:t["read"],username:t[""]},a={accountId:n.senderId};e.$axios({method:"post",url:"".concat(e.$baseURI,"/api/message/getAccount"),data:a}).then((function(t){n.username=t["data"]["username"],e.receiveBox.push(n)}))}))}))})),this.$axios({method:"post",url:"".concat(e.$baseURI,"/api/message/sent")}).then((function(t){e.sendBox=[],t["data"].forEach((function(t){var n={id:t["id"],recipient:t["recipientId"],content:t["content"],sendTime:t["sendTime"],read:t["read"],username:t[""]},a={accountId:n.recipient};e.$axios({method:"post",url:"".concat(e.$baseURI,"/api/message/getAccount"),data:a}).then((function(t){n.username=t["data"]["username"],e.sendBox.push(n)}))}))}))},openReceiveDetail:function(e){var t=this;if(this.contentDetail=e.content,this.openModal=!0,!0!==e.read){var n={id:e.id};console.log(n.id),t.$axios({method:"post",url:"".concat(t.$baseURI,"/api/message/setRead"),data:n}).then((function(e){var n={success:e["data"]["success"],message:e["data"]["massage"]};!0!==Boolean(n["success"])&&t.$Message.error(n["message"])}))}},openSendDetail:function(e){this.contentDetail=e.content,this.openModal=!0},closeSendModal:function(e){this.openWriteMail=e}}},i=r,c=(n("81f0"),n("0c7c")),l=Object(c["a"])(i,a,o,!1,null,"e3140cc2",null);t["a"]=l.exports},4160:function(e,t,n){"use strict";var a=n("23e7"),o=n("17c2");a({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4a67":function(e,t,n){},"59ca":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Form",{staticStyle:{"margin-top":"5%"},attrs:{model:e.formItem,"label-colon":"","label-width":80}},[n("FormItem",{attrs:{"show-message":"",label:"收件人"}},[n("Input",{attrs:{type:"text"},model:{value:e.formItem.senderAccount,callback:function(t){e.$set(e.formItem,"senderAccount",t)},expression:"formItem.senderAccount"}})],1),n("FormItem",{attrs:{"show-message":"",label:"内容"}},[n("Input",{attrs:{rows:4,type:"textarea"},model:{value:e.formItem.content,callback:function(t){e.$set(e.formItem,"content",t)},expression:"formItem.content"}})],1),n("FormItem",{attrs:{"show-message":""}},[n("Button",{attrs:{type:"primary"},on:{click:e.clickForCheck}},[e._v("确认")]),n("Button",{staticStyle:{"margin-left":"15%"},on:{click:e.closeFatherModal}},[e._v("取消")])],1)],1),n("Modal",{staticStyle:{padding:"20px"},attrs:{"footer-hide":""},model:{value:e.openModal,callback:function(t){e.openModal=t},expression:"openModal"}},[n("Form",{staticStyle:{"margin-top":"5%"},attrs:{model:e.formItem,"label-colon":"","label-width":120}},[n("FormItem",{attrs:{"show-message":"",label:"收件人账号"}},[n("Input",{attrs:{type:"text"},model:{value:e.formItem.senderAccount,callback:function(t){e.$set(e.formItem,"senderAccount",t)},expression:"formItem.senderAccount"}})],1),n("FormItem",{attrs:{"show-message":""}},[n("Button",{attrs:{type:"primary"},on:{click:e.sendMessage}},[e._v("确认")]),n("Button",{staticStyle:{"margin-left":"15%"},on:{click:function(t){e.openModal=!1}}},[e._v("取消")])],1)],1)],1)],1)},o=[],s={name:"WriteMail",props:["sendId"],data:function(){return{formItem:{senderAccount:"",content:""},openModal:!1}},methods:{autoFillAccount:function(){var e=this,t={accountId:e.sendId.account};this.$axios({method:"post",url:"".concat(e.$baseURI,"/api/message/getAccount"),data:t}).then((function(t){e.formItem.senderAccount=t["data"]["username"]}))},clickForCheck:function(){this.openModal=!0},sendMessage:function(){var e=this,t={username:e.formItem.senderAccount,content:e.formItem.content};e.$axios({method:"post",url:"".concat(e.$baseURI,"/api/message/sendByUsername"),data:t}).then((function(t){!0===t["data"]["success"]?(e.$Message.success("发送成功"),e.openModal=!1,e.$emit("closeSendModal",!1)):e.$Message.error(t["data"]["message"])}))},closeFatherModal:function(){this.$emit("closeSendModal",!1)}}},r=s,i=n("0c7c"),c=Object(i["a"])(r,a,o,!1,null,"20d29675",null);t["a"]=c.exports},"65f0":function(e,t,n){var a=n("861d"),o=n("e8b5"),s=n("b622"),r=s("species");e.exports=function(e,t){var n;return o(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?a(n)&&(n=n[r],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"81f0":function(e,t,n){"use strict";n("4a67")},a640:function(e,t,n){"use strict";var a=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&a((function(){n.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,n){var a=n("83ab"),o=n("d039"),s=n("5135"),r=Object.defineProperty,i={},c=function(e){throw e};e.exports=function(e,t){if(s(i,e))return i[e];t||(t={});var n=[][e],l=!!s(t,"ACCESSORS")&&t.ACCESSORS,d=s(t,0)?t[0]:c,u=s(t,1)?t[1]:void 0;return i[e]=!!n&&!o((function(){if(l&&!a)return!0;var e={length:-1};l?r(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,d,u)}))}},b727:function(e,t,n){var a=n("0366"),o=n("44ad"),s=n("7b0b"),r=n("50c4"),i=n("65f0"),c=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,d=4==e,u=6==e,m=5==e||u;return function(f,p,h,v){for(var g,x,b=s(f),y=o(b),M=a(p,h,3),I=r(y.length),S=0,k=v||i,w=t?k(f,I):n?k(f,0):void 0;I>S;S++)if((m||S in y)&&(g=y[S],x=M(g,S,b),e))if(t)w[S]=x;else if(x)switch(e){case 3:return!0;case 5:return g;case 6:return S;case 2:c.call(w,g)}else if(d)return!1;return u?-1:l||d?d:w}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},e8b5:function(e,t,n){var a=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-6c9bdc08.c5529537.js.map