(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d72615c"],{"007b":function(t,e,a){},"20ca":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("Navbar"),a("DriverSidebar"),a("Content",[a("RouterView",{style:{padding:"24px",margin:"auto auto auto 15vw"}})],1)],1)},r=[],i=a("7106"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Sider",{style:{background:"#fff",position:"fixed",height:"100vh",left:0,overflow:"auto"},attrs:{width:"15vw"}},[a("Menu",{attrs:{"active-name":t.activeItem,width:"15vw"}},[a("MenuItem",{attrs:{name:"conference",to:"/driver/reservation"}},[a("Icon",{attrs:{type:"ios-paper"}}),a("span",[t._v("订单管理")])],1),a("MenuItem",{attrs:{name:"profile",to:"/driver/profile"}},[a("Icon",{attrs:{type:"ios-keypad"}}),a("span",[t._v("账户信息")])],1),a("MenuItem",{attrs:{name:"message",to:"/driver/message"}},[a("Icon",{attrs:{type:"ios-mail"}}),a("span",[t._v("站内信息")])],1)],1)],1)],1)},o=[],c={name:"DriverSiderbar",data:function(){return{activeItem:"home"}},created:function(){this.switchItem()},methods:{switchItem:function(){var t=this.$route.path;"/driver/profile"===t?this.activeItem="profile":"/driver/reservation"===t?this.activeItem="reservation":"/driver/message"===t&&(this.activeItem="message")}}},l=c,u=(a("795e"),a("0c7c")),v=Object(u["a"])(l,s,o,!1,null,"4da5fc6e",null),m=v.exports,d={name:"Index",components:{Navbar:i["a"],DriverSidebar:m}},f=d,p=(a("c78e"),Object(u["a"])(f,n,r,!1,null,"eace3150",null));e["default"]=p.exports},"62f8":function(t,e,a){},7106:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("Menu",{attrs:{mode:"horizontal","active-name":"1"}},[a("img",{staticClass:"control-layout",staticStyle:{"pointer-events":"none",float:"left"},attrs:{src:"http://tvax4.sinaimg.cn/large/007YSV3xgy1gl45wx0lx7j30a00a0mxd.jpg"}}),a("MenuItem",{attrs:{name:"home"}},[a("Icon",{attrs:{type:"ios-people"}}),t._v(" 欢迎使用CMS ")],1),a("Poptip",{staticClass:"control-layout",attrs:{trigger:"hover"}},[a("MenuItem",{attrs:{name:"introduction"}},[t._v(" 产品介绍 ")]),a("div",{attrs:{slot:"content"},slot:"content"},[t._v(" 该描述点啥就该找项目经理了 ")])],1),a("Poptip",{staticClass:"control-layout",attrs:{trigger:"hover"}},[a("MenuItem",{attrs:{name:"designTeam"}},[t._v(" 设计团队 ")]),a("div",{attrs:{slot:"content"},slot:"content"},[t._v(" 该描述点啥还得看项目经理啊 ")])],1),a("div",{staticStyle:{float:"right"}})],1)],1)},r=[],i={name:"Navbar",data:function(){return{}},methods:{}},s=i,o=(a("b46d"),a("0c7c")),c=Object(o["a"])(s,n,r,!1,null,null,null);e["a"]=c.exports},"72fe":function(t,e,a){},"795e":function(t,e,a){"use strict";a("007b")},b46d:function(t,e,a){"use strict";a("72fe")},c78e:function(t,e,a){"use strict";a("62f8")}}]);
//# sourceMappingURL=chunk-9d72615c.1a331229.js.map