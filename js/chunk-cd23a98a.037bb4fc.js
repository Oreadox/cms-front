(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd23a98a"],{"0356":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Form",{attrs:{"label-colon":"","label-width":120}},[i("FormItem",{attrs:{label:"会议名"}},[i("Input",{staticStyle:{width:"150px"},attrs:{type:"text"}})],1),i("FormItem",{attrs:{label:"会议简介"}},[i("Input",{staticClass:"input_size",attrs:{type:"textarea"},model:{value:e.formItem.introduction,callback:function(t){e.$set(e.formItem,"introduction",t)},expression:"formItem.introduction"}})],1),i("FormItem",{attrs:{label:"会议地点"}},[i("Input",{staticClass:"input_size",attrs:{type:"textarea"},model:{value:e.formItem.address,callback:function(t){e.$set(e.formItem,"address",t)},expression:"formItem.address"}})],1),i("FormItem",{attrs:{label:"会议时间"}},[i("DatePicker",{model:{value:e.formItem.startTime,callback:function(t){e.$set(e.formItem,"startTime",t)},expression:"formItem.startTime"}}),e._v(" 至 "),i("DatePicker",{model:{value:e.formItem.endTime,callback:function(t){e.$set(e.formItem,"endTime",t)},expression:"formItem.endTime"}})],1),i("FormItem",{attrs:{label:"报名截止时间"}},[i("DatePicker",{model:{value:e.formItem.enrollTime,callback:function(t){e.$set(e.formItem,"enrollTime",t)},expression:"formItem.enrollTime"}})],1),i("FormItem",{attrs:{label:"使用邀请码"}},[i("i-switch",{model:{value:e.useInviteCode,callback:function(t){e.useInviteCode=t},expression:"useInviteCode"}})],1),i("div",{staticStyle:{height:"60px"}},[i("transition",{attrs:{name:"fade"}},[e.useInviteCode?i("FormItem",[i("Input",{staticStyle:{width:"150px"},attrs:{type:"text"},model:{value:e.formItem.inviteCode,callback:function(t){e.$set(e.formItem,"inviteCode",t)},expression:"formItem.inviteCode"}})],1):e._e()],1)],1),i("FormItem",[i("Button",{staticStyle:{"margin-left":"15%"}},[e._v("取消")]),i("Button",{staticStyle:{"margin-left":"15%"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("创建")])],1)],1)],1)},o=[],r=(i("b0c0"),{name:"create",data:function(){return{useInviteCode:!1,formItem:{name:"xxx",introduction:"...",address:"xxx",startTime:"2020-10-11",endTime:"2020-12-11",enrollTime:"2020-11-11",inviteCode:"111123"}}},methods:{changeSwitch:function(){this.useInviteCode=!this.useInviteCode},submitForm:function(){var e=this,t={name:this.formItem.name,detail:this.formItem.introduction,address:this.formItem.address,startTime:this.formItem.startTime.getTime(),endTime:this.formItem.endTime.getTime(),enrollTime:this.formItem.enrollTime.getTime(),inviteCode:this.useInviteCode?this.formItem.inviteCode:null};this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/user/conference/create"),data:t}).then((function(t){!0===t["data"]["success"]?(e.$Message.success("创建成功"),setTimeout((function(){e.$router.push("/conference/list")}),1500)):e.$Message.error(t["data"]["message"])}))}}}),s=r,a=(i("e9bc"),i("0c7c")),m=Object(a["a"])(s,n,o,!1,null,"115f6c77",null);t["default"]=m.exports},b0c0:function(e,t,i){var n=i("83ab"),o=i("9bf2").f,r=Function.prototype,s=r.toString,a=/^\s*function ([^ (]*)/,m="name";n&&!(m in r)&&o(r,m,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(e){return""}}})},c0e1:function(e,t,i){},e9bc:function(e,t,i){"use strict";i("c0e1")}}]);
//# sourceMappingURL=chunk-cd23a98a.037bb4fc.js.map