(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42456830"],{"0356":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{padding:"24px",margin:"auto auto auto 15vw"}},[i("Form",{attrs:{"label-colon":"","label-width":120}},[i("FormItem",{attrs:{label:"会议名"}},[i("Input",{staticStyle:{width:"150px"},attrs:{type:"text"}})],1),i("FormItem",{attrs:{label:"会议简介"}},[i("Input",{staticClass:"input_size",attrs:{type:"textarea"},model:{value:t.formItem.introduction,callback:function(e){t.$set(t.formItem,"introduction",e)},expression:"formItem.introduction"}})],1),i("FormItem",{attrs:{label:"会议地点"}},[i("Input",{staticClass:"input_size",attrs:{type:"textarea"},model:{value:t.formItem.address,callback:function(e){t.$set(t.formItem,"address",e)},expression:"formItem.address"}})],1),i("FormItem",{attrs:{label:"会议时间"}},[i("DatePicker",{model:{value:t.formItem.startTime,callback:function(e){t.$set(t.formItem,"startTime",e)},expression:"formItem.startTime"}}),t._v(" 至 "),i("DatePicker",{model:{value:t.formItem.endTime,callback:function(e){t.$set(t.formItem,"endTime",e)},expression:"formItem.endTime"}})],1),i("FormItem",{attrs:{label:"报名截止时间"}},[i("DatePicker",{model:{value:t.formItem.startTime,callback:function(e){t.$set(t.formItem,"startTime",e)},expression:"formItem.startTime"}})],1),i("FormItem",{attrs:{label:"使用邀请码"}},[i("i-switch",{model:{value:t.invitationSwitch,callback:function(e){t.invitationSwitch=e},expression:"invitationSwitch"}})],1),i("div",{staticStyle:{height:"60px"}},[i("transition",{attrs:{name:"fade"}},[t.invitationSwitch?i("FormItem",[i("Input",{staticStyle:{width:"150px"},attrs:{type:"text"},model:{value:t.formItem.invitationCode,callback:function(e){t.$set(t.formItem,"invitationCode",e)},expression:"formItem.invitationCode"}})],1):t._e()],1)],1),i("FormItem",[i("Button",{staticStyle:{"margin-left":"15%"}},[t._v("取消")]),i("Button",{staticStyle:{"margin-left":"15%"},attrs:{type:"primary"}},[t._v("创建")])],1)],1)],1)},n=[],o={name:"create",data:function(){return{invitationSwitch:!1,formItem:{name:"xxx",introduction:"...",address:"xxx",startTime:"2020-10-11",endTime:"2020-12-11",deadline:"2020-11-11",invitationCode:"111123"}}},methods:{changeSwitch:function(){this.invitationSwitch=!this.invitationSwitch}}},r=o,m=(i("135f"),i("0c7c")),s=Object(m["a"])(r,a,n,!1,null,"029d432e",null);e["default"]=s.exports},"135f":function(t,e,i){"use strict";i("d428")},d428:function(t,e,i){}}]);
//# sourceMappingURL=chunk-42456830.757fa635.js.map