(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f023064"],{"159b":function(e,t,n){var o=n("da84"),a=n("fdbc"),i=n("17c2"),s=n("9112");for(var r in a){var c=o[r],l=c&&c.prototype;if(l&&l.forEach!==i)try{s(l,"forEach",i)}catch(d){l.forEach=i}}},"17c2":function(e,t,n){"use strict";var o=n("b727").forEach,a=n("a640"),i=n("ae40"),s=a("forEach"),r=i("forEach");e.exports=s&&r?[].forEach:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}},"38fb":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Card",{attrs:{"dis-hover":"",bordered:!1}},[n("div",{staticStyle:{"margin-bottom":"2vw"}},[n("Button",{attrs:{size:"large",type:"primary"},on:{click:function(t){e.openWriteMail=!0}}},[e._v("写信")])],1),n("div",[n("Collapse",{attrs:{simple:""},model:{value:e.showingAll,callback:function(t){e.showingAll=t},expression:"showingAll"}},[n("Panel",{attrs:{name:"receive"}},[e._v(" 收信箱 "),n("div",{attrs:{slot:"content"},slot:"content"},[n("Table",{attrs:{columns:this.columns,data:this.receiveBox,stripe:!0,"highlight-row":""},on:{"on-row-click":e.openReceiveDetail}})],1)]),n("Panel",{attrs:{name:"send"}},[e._v(" 发信箱 "),n("div",{attrs:{slot:"content"},slot:"content"},[n("Table",{staticStyle:{"overflow-y":"auto"},attrs:{columns:this.columns2,data:this.sendBox,stripe:!0,"highlight-row":"","max-height":"500px"},on:{"on-row-click":e.openSendDetail},scopedSlots:e._u([{key:"ifRead",fn:function(t){var o=t.row;return[o.read?o.read?n("Tag",{staticStyle:{"margin-right":"5px"},attrs:{color:"success"}},[e._v("已读")]):e._e():n("Tag",{staticStyle:{"margin-right":"5px"},attrs:{color:"primary"}},[e._v("未读")])]}}])})],1)])],1)],1)]),n("Modal",{staticStyle:{"padding-top":"20px"},attrs:{"footer-hide":""},model:{value:e.openModal,callback:function(t){e.openModal=t},expression:"openModal"}},[n("div",[n("Form",[n("FormItem",{attrs:{label:"内容详情"}},[n("Input",{attrs:{rows:4,type:"textarea",readonly:""},model:{value:e.contentDetail,callback:function(t){e.contentDetail=t},expression:"contentDetail"}})],1)],1)],1)]),n("Modal",{staticStyle:{padding:"20px"},attrs:{"footer-hide":""},model:{value:e.openWriteMail,callback:function(t){e.openWriteMail=t},expression:"openWriteMail"}},[n("div",{staticStyle:{padding:"5%"}},[n("WriteMail",{on:{closeSendModal:e.closeSendModal}})],1)])],1)},a=[],i=(n("4160"),n("159b"),n("59ca")),s={name:"CommonMail",components:{WriteMail:i["a"]},data:function(){return{columns:[{key:"senderId",title:"用户编号",maxWidth:200},{key:"content",title:"内容",ellipsis:!0}],columns2:[{key:"recipient",title:"用户编号",maxWidth:200},{key:"content",title:"内容",ellipsis:!0},{title:"状态",slot:"ifRead",ellipsis:!0,maxWidth:100}],receiveBox:[{id:1,senderId:1e3,content:"asd",sendTime:"2020-10-22",read:!1},{id:2,senderId:1001,content:"asd",sendTime:"2020-10-22",read:!1},{id:3,senderId:1002,content:"asd",sendTime:"2020-10-22",read:!1}],sendBox:[{id:1,recipient:2e3,sendTime:"2020-10-10",content:"1231111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111122222222222222222222222222222222222222223",read:!1}],showingAll:["receive","send"],contentDetail:"xxx",openModal:!1,openWriteMail:!1}},created:function(){this.initData()},methods:{initData:function(){var e=this;this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/message/unread")}).then((function(t){e.receiveBox=[],t["data"].forEach((function(t){var n={id:t["id"],sender:t["senderId"],content:t["content"],sendTime:t["sendTime"],read:t["read"]};e.receiveBox.push(n)}))})),this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/message/sent")}).then((function(t){e.sendBox=[],t["data"].forEach((function(t){var n={id:t["id"],recipient:t["recipientId"],content:t["content"],sendTime:t["sendTime"],read:t["read"]};e.sendBox.push(n)}))}))},openReceiveDetail:function(e){var t=this;if(this.contentDetail=e.content,this.openModal=!0,!0!==e.read){var n={id:e.id};this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/message/setRead"),data:n}).then((function(e){e["data"].forEach((function(e){var n={success:e["success"],message:e["massage"]};!0===Boolean(n["success"])?t.$Message.success(n["message"]):t.$Message.error(n["message"])}))}))}},openSendDetail:function(e){this.contentDetail=e.content,this.openModal=!0},closeSendModal:function(e){this.openWriteMail=e}}},r=s,c=(n("8dfe"),n("0c7c")),l=Object(c["a"])(r,o,a,!1,null,"0319e3c6",null);t["a"]=l.exports},4160:function(e,t,n){"use strict";var o=n("23e7"),a=n("17c2");o({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"59ca":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Form",{staticStyle:{"margin-top":"5%"},attrs:{model:e.formItem,"label-colon":"","label-width":80}},[n("FormItem",{attrs:{"show-message":"",label:"收件人"}},[n("Input",{attrs:{type:"text"},model:{value:e.formItem.senderAccount,callback:function(t){e.$set(e.formItem,"senderAccount",t)},expression:"formItem.senderAccount"}})],1),n("FormItem",{attrs:{"show-message":"",label:"内容"}},[n("Input",{attrs:{rows:4,type:"textarea"},model:{value:e.formItem.content,callback:function(t){e.$set(e.formItem,"content",t)},expression:"formItem.content"}})],1),n("FormItem",{attrs:{"show-message":""}},[n("Button",{attrs:{type:"primary"},on:{click:e.clickForCheck}},[e._v("确认")]),n("Button",{staticStyle:{"margin-left":"15%"},on:{click:e.closeFatherModal}},[e._v("取消")])],1)],1),n("Modal",{staticStyle:{padding:"20px"},attrs:{"footer-hide":""},model:{value:e.openModal,callback:function(t){e.openModal=t},expression:"openModal"}},[n("Form",{staticStyle:{"margin-top":"5%"},attrs:{model:e.formItem,"label-colon":"","label-width":120}},[n("FormItem",{attrs:{"show-message":"",label:"收件人账号"}},[n("Input",{attrs:{type:"text"},model:{value:e.formItem.senderAccount,callback:function(t){e.$set(e.formItem,"senderAccount",t)},expression:"formItem.senderAccount"}})],1),n("FormItem",{attrs:{"show-message":""}},[n("Button",{attrs:{type:"primary"},on:{click:e.sendMessage}},[e._v("确认")]),n("Button",{staticStyle:{"margin-left":"15%"},on:{click:function(t){e.openModal=!1}}},[e._v("取消")])],1)],1)],1)],1)},a=[],i={name:"WriteMail",props:["sendId"],data:function(){return{formItem:{senderAccount:"",content:""},openModal:!1}},methods:{autoFillAccount:function(){this.formItem.senderAccount=this.sendId.account},clickForCheck:function(){this.openModal=!0},sendMessage:function(){var e=this,t={account:e.formItem.senderAccount,content:e.formItem.content};this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/message/sendByAccountId"),data:t}).then((function(t){!0===t["data"]["success"]?(e.$Message.success("修改成功"),this.openModal=!1,this.$emit("closeSendModal",!1)):e.$Message.error(t["data"]["message"])}))},closeFatherModal:function(){this.$emit("closeSendModal",!1)}}},s=i,r=n("0c7c"),c=Object(r["a"])(s,o,a,!1,null,"2fa2487d",null);t["a"]=c.exports},"65f0":function(e,t,n){var o=n("861d"),a=n("e8b5"),i=n("b622"),s=i("species");e.exports=function(e,t){var n;return a(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?o(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"6fff":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("CommonMail")],1)},a=[],i=n("38fb"),s={name:"message",components:{CommonMail:i["a"]}},r=s,c=n("0c7c"),l=Object(c["a"])(r,o,a,!1,null,"33a5b866",null);t["default"]=l.exports},"8dfe":function(e,t,n){"use strict";n("b2ee")},a640:function(e,t,n){"use strict";var o=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&o((function(){n.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,n){var o=n("83ab"),a=n("d039"),i=n("5135"),s=Object.defineProperty,r={},c=function(e){throw e};e.exports=function(e,t){if(i(r,e))return r[e];t||(t={});var n=[][e],l=!!i(t,"ACCESSORS")&&t.ACCESSORS,d=i(t,0)?t[0]:c,u=i(t,1)?t[1]:void 0;return r[e]=!!n&&!a((function(){if(l&&!o)return!0;var e={length:-1};l?s(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,d,u)}))}},b2ee:function(e,t,n){},b727:function(e,t,n){var o=n("0366"),a=n("44ad"),i=n("7b0b"),s=n("50c4"),r=n("65f0"),c=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,d=4==e,u=6==e,m=5==e||u;return function(f,p,h,v){for(var g,M,b=i(f),x=a(b),y=o(p,h,3),S=s(x.length),I=0,k=v||r,w=t?k(f,S):n?k(f,0):void 0;S>I;I++)if((m||I in x)&&(g=x[I],M=y(g,I,b),e))if(t)w[I]=M;else if(M)switch(e){case 3:return!0;case 5:return g;case 6:return I;case 2:c.call(w,g)}else if(d)return!1;return u?-1:l||d?d:w}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},e8b5:function(e,t,n){var o=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==o(e)}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-7f023064.373ff88b.js.map