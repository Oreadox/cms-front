(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36c5f3a2"],{"159b":function(e,t,a){var r=a("da84"),n=a("fdbc"),o=a("17c2"),s=a("9112");for(var i in n){var c=r[i],l=c&&c.prototype;if(l&&l.forEach!==o)try{s(l,"forEach",o)}catch(d){l.forEach=o}}},1759:function(e,t,a){"use strict";a("8d0a")},"17c2":function(e,t,a){"use strict";var r=a("b727").forEach,n=a("a640"),o=a("ae40"),s=n("forEach"),i=o("forEach");e.exports=s&&i?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},3240:function(e,t,a){},4160:function(e,t,a){"use strict";var r=a("23e7"),n=a("17c2");r({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"4a6c":function(e,t,a){"use strict";a("3240")},"59ca":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Form",{staticStyle:{"margin-top":"5%"},attrs:{model:e.formItem,"label-colon":"","label-width":80}},[a("FormItem",{attrs:{"show-message":"",label:"收件人"}},[a("Input",{attrs:{type:"text"},model:{value:e.formItem.senderAccount,callback:function(t){e.$set(e.formItem,"senderAccount",t)},expression:"formItem.senderAccount"}})],1),a("FormItem",{attrs:{"show-message":"",label:"内容"}},[a("Input",{attrs:{rows:4,type:"textarea"},model:{value:e.formItem.content,callback:function(t){e.$set(e.formItem,"content",t)},expression:"formItem.content"}})],1),a("FormItem",{attrs:{"show-message":""}},[a("Button",{attrs:{type:"primary"},on:{click:e.clickForCheck}},[e._v("确认")]),a("Button",{staticStyle:{"margin-left":"15%"},on:{click:e.closeFatherModal}},[e._v("取消")])],1)],1),a("Modal",{staticStyle:{padding:"20px"},attrs:{"footer-hide":""},model:{value:e.openModal,callback:function(t){e.openModal=t},expression:"openModal"}},[a("Form",{staticStyle:{"margin-top":"5%"},attrs:{model:e.formItem,"label-colon":"","label-width":120}},[a("FormItem",{attrs:{"show-message":"",label:"收件人账号"}},[a("Input",{attrs:{type:"text"},model:{value:e.formItem.senderAccount,callback:function(t){e.$set(e.formItem,"senderAccount",t)},expression:"formItem.senderAccount"}})],1),a("FormItem",{attrs:{"show-message":""}},[a("Button",{attrs:{type:"primary"},on:{click:e.sendMessage}},[e._v("确认")]),a("Button",{staticStyle:{"margin-left":"15%"},on:{click:function(t){e.openModal=!1}}},[e._v("取消")])],1)],1)],1)],1)},n=[],o={name:"WriteMail",props:["sendId"],data:function(){return{formItem:{senderAccount:"",content:""},openModal:!1}},methods:{autoFillAccount:function(){this.formItem.senderAccount=this.sendId.account},clickForCheck:function(){this.openModal=!0},sendMessage:function(){var e=this,t={account:e.formItem.senderAccount,content:e.formItem.content};this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/message/sendByAccountId"),data:t}).then((function(t){!0===t["data"]["success"]?(e.$Message.success("修改成功"),this.openModal=!1,this.$emit("closeSendModal",!1)):e.$Message.error(t["data"]["message"])}))},closeFatherModal:function(){this.$emit("closeSendModal",!1)}}},s=o,i=a("0c7c"),c=Object(i["a"])(s,r,n,!1,null,"2fa2487d",null);t["a"]=c.exports},"65f0":function(e,t,a){var r=a("861d"),n=a("e8b5"),o=a("b622"),s=o("species");e.exports=function(e,t){var a;return n(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?r(a)&&(a=a[s],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},"72b0":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.isCreator?a("CreatorDetail",{attrs:{conferenceId:e.id}}):e.isCreator?e._e():a("ParticipantDetail",{attrs:{conferenceId:e.id}})],1)},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Button",{staticStyle:{margin:"0 0 1vw 0"},attrs:{size:"small",icon:"ios-arrow-back"},on:{click:function(t){return e.$router.push("/conference/list")}}},[e._v("返回 ")]),a("br"),a("p",{staticStyle:{"text-indent":"2em","font-weight":"bold"}},[e._v("会议阶段")]),a("Divider"),a("Steps",{attrs:{current:e.currentProgress}},[a("Step",{attrs:{content:"报名阶段"}}),a("Step",{attrs:{content:"报名确认"}}),a("Step",{attrs:{content:"车队，酒店确认"}}),a("Step",{attrs:{content:"会议进行"}}),a("Step",{attrs:{content:"会议结束"}})],1),a("Button",{staticStyle:{margin:"2vw 1vw 1vw 0"},attrs:{type:"primary"}},[e._v("确认信息")]),a("Divider"),a("Form",{attrs:{"label-colon":"","label-width":120}},[a("FormItem",{attrs:{label:"会议名"}},[a("Input",{staticStyle:{width:"150px"},attrs:{type:"text",readonly:!0}})],1),a("FormItem",{attrs:{label:"会议简介"}},[a("Input",{staticClass:"input_size",attrs:{type:"textarea",readonly:!0},model:{value:e.formItem.detail,callback:function(t){e.$set(e.formItem,"detail",t)},expression:"formItem.detail"}})],1),a("FormItem",{attrs:{label:"会议地点"}},[a("Input",{staticClass:"input_size",attrs:{type:"textarea",readonly:!0},model:{value:e.formItem.address,callback:function(t){e.$set(e.formItem,"address",t)},expression:"formItem.address"}})],1),a("FormItem",{attrs:{label:"会议时间"}},[a("DatePicker",{attrs:{readonly:!0},model:{value:e.formItem.startTime,callback:function(t){e.$set(e.formItem,"startTime",t)},expression:"formItem.startTime"}}),e._v(" 至 "),a("DatePicker",{attrs:{readonly:!0},model:{value:e.formItem.endTime,callback:function(t){e.$set(e.formItem,"endTime",t)},expression:"formItem.endTime"}})],1),a("FormItem",{attrs:{label:"报名人数"}},[a("InputNumber",{attrs:{readonly:!0},model:{value:e.formItem.applicants,callback:function(t){e.$set(e.formItem,"applicants",t)},expression:"formItem.applicants"}}),a("Button",{staticStyle:{"margin-left":"1vw"},attrs:{type:"primary"},on:{click:function(t){e.checkParticipants=!0}}},[e._v("详情")])],1),a("FormItem",{attrs:{label:"酒店管理"}},[a("Select",{staticClass:"input_size",model:{value:e.formItem.hotelId,callback:function(t){e.$set(e.formItem,"hotelId",t)},expression:"formItem.hotelId"}},e._l(e.hotelList,(function(t,r){return a("Option",{key:r,attrs:{value:r}},[e._v(e._s(t.name))])})),1),a("Button",{staticStyle:{"margin-left":"1vw"},attrs:{type:"primary"},on:{click:function(t){e.checkHotel=!0}}},[e._v("详情")])],1),a("FormItem",{attrs:{label:"车队管理"}},[a("Select",{staticClass:"input_size",model:{value:e.formItem.fleetId,callback:function(t){e.$set(e.formItem,"fleetId",t)},expression:"formItem.fleetId"}},e._l(e.fleetList,(function(t,r){return a("Option",{key:r,attrs:{value:r}},[e._v(e._s(t.name))])})),1),a("Button",{staticStyle:{"margin-left":"1vw"},attrs:{type:"primary"},on:{click:function(t){e.checkFleet=!0}}},[e._v("详情")])],1)],1),a("Modal",{staticStyle:{padding:"20px"},attrs:{"footer-hide":"",width:"85",scrollable:"","mask-closable":!1},model:{value:e.checkParticipants,callback:function(t){e.checkParticipants=t},expression:"checkParticipants"}},[a("Participants",{staticStyle:{height:"40vw","overflow-y":"auto","overflow-x":"hidden"},attrs:{participantsInfo:e.participantsInfo,conferenceId:e.conferenceId},on:{setCheckParticipants:e.setCheckParticipants}})],1),a("Modal",{staticStyle:{padding:"20px"},attrs:{width:"45","footer-hide":"","mask-closable":!1},model:{value:e.checkHotel,callback:function(t){e.checkHotel=t},expression:"checkHotel"}},[a("HotelDetail",{staticStyle:{height:"30vw"},attrs:{hotelId:e.formItem.hotelId,hotelData:e.hotelList[e.formItem.hotelId]},on:{setCheckHotel:e.setCheckHotel}})],1),a("Modal",{staticStyle:{padding:"20px"},attrs:{width:"45","footer-hide":"","mask-closable":!1},model:{value:e.checkFleet,callback:function(t){e.checkFleet=t},expression:"checkFleet"}},[a("FleetDetail",{staticStyle:{height:"30vw"},attrs:{fleetId:e.formItem.fleetId,fleetData:e.fleetList[e.formItem.fleetId]},on:{setCheckFleet:e.setCheckFleet}})],1)],1)},s=[],i=(a("4160"),a("b0c0"),a("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a",{staticStyle:{"text-indent":"2em"},on:{click:e.arrowBack}},[a("Icon",{attrs:{type:"ios-arrow-back"}}),e._v(" 返回")],1),a("Table",{attrs:{columns:this.columns,data:this.participantsInfo,stripe:!0}}),a("Modal",{staticStyle:{padding:"20px"},attrs:{"footer-hide":""},model:{value:e.openWriteMail,callback:function(t){e.openWriteMail=t},expression:"openWriteMail"}},[a("div",{staticStyle:{padding:"5%"}},[a("WriteMail",{ref:"fillAccount",attrs:{"send-id":e.sendMailAccount},on:{closeSendModal:e.closeSendModal}})],1)])],1)}),c=[],l=a("59ca"),d={name:"Participants",components:{WriteMail:l["a"]},data:function(){var e=this;return{columns:[{title:"姓名",key:"name",align:"center"},{title:"手机号",key:"phone",align:"center"},{title:"工作单位",key:"workUnit",align:"center"},{title:"酒店订单",key:"hotelProgress",align:"center",render:function(e,t){return 2===t.row.hotelProgress?e("div",[e("Tag",{props:{color:"success"},style:{marginRight:"5px"}},"完成")]):1===t.row.hotelProgress?e("div",[e("Tag",{props:{color:"#c5c8ce"},style:{marginRight:"5px"}},"待用户确认")]):e("div",[e("Tag",{props:{color:"#c5c8ce"},style:{marginRight:"5px"}},"待酒店接单")])}},{title:"接车订单",key:"driverProgress",align:"center",render:function(e,t){return 2===t.row.driverProgress?e("div",[e("Tag",{props:{color:"success"},style:{marginRight:"5px"}},"完成")]):1===t.row.driverProgress?e("div",[e("Tag",{props:{color:"#c5c8ce"},style:{marginRight:"5px"}},"待用户确认")]):e("div",[e("Tag",{props:{color:"#c5c8ce"},style:{marginRight:"5px"}},"待司机接单")])}},{title:"账号",key:"account",align:"center"},{title:"发信息",key:"send",width:100,align:"center",render:function(t,a){return t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.sendMail(a.row.account)}}},"发信息")])}},{title:"删除人员",key:"deleteMember",width:100,align:"center",render:function(t,a){return t("div",[t("Button",{props:{type:"error",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.deleteParticipant(a.row.id)}}},"删除")])}}],conference:[{name:"one",phone:"1231231241",workUnit:"xxx",hotel:"xxx",driveFinish:!0,account:"xxx"}],sendMailAccount:{account:"1233"},openWriteMail:!1}},props:["participantsInfo","conferenceId"],methods:{deleteParticipant:function(e){var t=this;this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/conference/enrollment/remove"),data:{id:t.conferenceId,userId:e}}).then((function(e){!0===e["data"]["success"]?t.$Message.success("删除成功"):t.$Message.error(e["data"]["message"])}))},arrowBack:function(){this.$emit("setCheckParticipants",!1)},closeSendModal:function(e){this.openWriteMail=e},sendMail:function(e){this.sendMailAccount.account=e,this.$refs.fillAccount.autoFillAccount(),console.log("传前"+this.sendMailAccount),this.openWriteMail=!0}}},f=d,m=a("0c7c"),u=Object(m["a"])(f,i,c,!1,null,"7031d7c1",null),h=u.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a",{staticStyle:{"text-indent":"2em"},on:{click:e.arrowBack}},[a("Icon",{attrs:{type:"ios-arrow-back"}}),e._v(" 返回")],1),a("Form",{staticStyle:{"margin-top":"5%"},attrs:{model:e.formItem,"label-colon":"","label-width":120}},[a("FormItem",{attrs:{label:"名称"}},[a("label",[a("Input",{staticStyle:{width:"80%"},attrs:{type:"text",readonly:!0},model:{value:e.hotelData.name,callback:function(t){e.$set(e.hotelData,"name",t)},expression:"hotelData.name"}})],1)]),a("FormItem",{attrs:{label:"账号"}},[a("label",[a("Input",{staticStyle:{width:"80%"},attrs:{type:"text",readonly:!0},model:{value:e.hotelData.account,callback:function(t){e.$set(e.hotelData,"account",t)},expression:"hotelData.account"}})],1)]),a("FormItem",{attrs:{label:"联系方式"}},[a("label",[a("Input",{staticStyle:{width:"60%"},attrs:{type:"text",readonly:!0},model:{value:e.hotelData.phone,callback:function(t){e.$set(e.hotelData,"phone",t)},expression:"hotelData.phone"}}),a("Button",{staticStyle:{"margin-left":"1vw"},attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/conference/list")}}},[a("Icon",{attrs:{size:"24",type:"ios-mail"}})],1)],1)]),a("FormItem",{attrs:{label:"地址"}},[a("label",[a("Input",{staticStyle:{width:"80%"},attrs:{type:"textarea",readonly:!0},model:{value:e.hotelData.address,callback:function(t){e.$set(e.hotelData,"address",t)},expression:"hotelData.address"}})],1)]),a("FormItem",{attrs:{label:"简介"}},[a("label",[a("Input",{staticStyle:{width:"80%"},attrs:{type:"textarea",readonly:!0},model:{value:e.hotelData.detail,callback:function(t){e.$set(e.hotelData,"detail",t)},expression:"hotelData.detail"}})],1)])],1)],1)},I=[],v={name:"HotelDetail",data:function(){return{formItem:{}}},props:["hotelData","hotelId"],methods:{arrowBack:function(){this.$emit("setCheckHotel",!1)}}},b=v,y=Object(m["a"])(b,p,I,!1,null,"88a4e5bc",null),g=y.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a",{staticStyle:{"text-indent":"2em"},on:{click:e.arrowBack}},[a("Icon",{attrs:{type:"ios-arrow-back"}}),e._v(" 返回")],1),a("Form",{staticStyle:{"margin-top":"5%"},attrs:{model:e.formItem,"label-colon":"","label-width":120}},[a("FormItem",{attrs:{label:"车队名"}},[a("label",[a("Input",{staticStyle:{width:"60%"},attrs:{type:"text",readonly:!0},model:{value:e.fleetData.name,callback:function(t){e.$set(e.fleetData,"name",t)},expression:"fleetData.name"}})],1)]),a("FormItem",{attrs:{label:"联系方式"}},[a("label",[a("Input",{staticStyle:{width:"60%"},attrs:{type:"text",readonly:!0},model:{value:e.fleetData.phone,callback:function(t){e.$set(e.fleetData,"phone",t)},expression:"fleetData.phone"}})],1)]),a("FormItem",{attrs:{label:"司机人数"}},[a("label",[a("Input",{staticStyle:{width:"80px"},attrs:{type:"number",readonly:!0},model:{value:e.fleetData.driverAmount,callback:function(t){e.$set(e.fleetData,"driverAmount",t)},expression:"fleetData.driverAmount"}})],1)]),a("FormItem",{attrs:{label:"简介"}},[a("label",[a("Input",{staticStyle:{width:"80%"},attrs:{type:"textarea",readonly:!0},model:{value:e.fleetData.detail,callback:function(t){e.$set(e.fleetData,"detail",t)},expression:"fleetData.detail"}})],1)])],1)],1)},x=[],S={name:"DriveDetail",data:function(){return{formItem:{}}},props:["fleetData","fleetId"],methods:{arrowBack:function(){this.$emit("setCheckFleet",!1)}}},w=S,$=Object(m["a"])(w,k,x,!1,null,"4a6d1c15",null),D=$.exports,T={name:"CreatorDetail",components:{Participants:h,HotelDetail:g,FleetDetail:D},data:function(){return{currentProgress:0,formItem:{name:"xxx",detail:"...",startTime:"2020-10-11",endTime:"2020-12-11",address:"xxx",applicants:10,hotelId:0,fleetId:0},hotelList:{0:{id:"123",account:"",name:"帆船酒店",address:"address",detail:"detail",phone:""}},fleetList:{0:{name:"测试车队",address:"address",detail:"detail",phone:"",driverAmount:0}},participantsInfo:[{id:0,name:"name",phone:"phone",workUnit:"workUnit",hotelProgress:2,driverProgress:1,account:"account"}],checkParticipants:!1,checkHotel:!1,checkFleet:!1}},props:["conferenceId"],created:function(){this.loadConferenceInfo(),this.loadHotelInfo(),this.loadDriverInfo(),this.loadParticipantsInfo()},methods:{loadConferenceInfo:function(){var e=this;this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/conference/getById"),data:{id:e.conferenceId}}).then((function(t){var a=t["data"];switch(e.formItem={name:a["name"],detail:a["resData"],startTime:new Date(a["startTime"]),endTime:new Date(a["endTime"]),address:a["address"],hotelId:a["hotelId"],fleetId:a["fleetId"]},a["progress"]){case"ENROLLMENT":e.currentProgress=0;break;case"OWNER_CONFIRM":e.currentProgress=1;break;case"RESERVATION_CONFIRM":e.currentProgress=2;break;case"READY":e.currentProgress=3;break;case"ENDED":e.currentProgress=4;break}e.$axios({method:"post",url:"".concat(this.$baseURI,"/api/conference/participant/count"),data:{id:e.conferenceId}}).then((function(t){e.formItem.applicants=t["data"]["amount"]}))}))},loadHotelInfo:function(){var e=this;this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/hotel/getAll")}).then((function(t){e.hotelList=[],t["data"].forEach((function(t){e.hotelList[t["id"]]={account:t["accountId"],name:t["name"],address:t["address"],detail:t["detail"],phone:t["telephone"]}}))}))},loadDriverInfo:function(){var e=this;this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/fleet/getAll")}).then((function(t){e.fleetList=[],t["data"].forEach((function(t){e.fleetList[t["id"]]={name:t["name"],address:t["address"],detail:t["detail"],phone:t["telephone"],driverAmount:t["driverAmount"]}}))}))},loadParticipantsInfo:function(){var e=this;this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/conference/participant/get"),data:{id:e.conferenceId}}).then((function(t){var a=this;e.fleetList=[],t["data"].forEach((function(t){e.participantsInfo={},console.log(t);var r={id:t["id"],name:t["name"],phone:t["telephone"],workUnit:t["workplace"],hotelProgress:"",driverProgress:"",account:t["accountId"]};e.$axios({method:"post",url:"".concat(a.$baseURI,"/api/conference/hotelReservation/get"),data:{id:e.conferenceId,userId:r.id}}).then((function(e){!0===e["data"]["hotelCheck"]?!0===e["data"]["userCheck"]?r.hotelProgress=2:r.hotelProgress=1:r.hotelProgress=0})),e.$axios({method:"post",url:"".concat(a.$baseURI,"/api/conference/driverReservation/get"),data:{id:e.conferenceId,userId:r.id}}).then((function(e){!0===e["data"]["driverCheck"]?!0===e["data"]["userCheck"]?r.driverProgress=2:r.driverProgress=1:r.driverProgress=0})),e.participantsInfo.push(r)}))}))},setCheckParticipants:function(e){this.checkParticipants=e},setCheckHotel:function(e){this.checkHotel=e},setCheckFleet:function(e){this.checkFleet=e}}},M=T,P=(a("4a6c"),Object(m["a"])(M,o,s,!1,null,"3ddbb24a",null)),_=P.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Button",{staticStyle:{margin:"0 0 1vw 0"},attrs:{size:"small",icon:"ios-arrow-back"},on:{click:function(t){return e.$router.push("/conference/list")}}},[e._v("返回 ")]),a("br"),a("p",{staticStyle:{"text-indent":"2em","font-weight":"bold"}},[e._v("会议阶段")]),a("Divider"),a("Steps",{attrs:{current:e.currentProgress}},[a("Step",{attrs:{content:"报名阶段"}}),a("Step",{attrs:{content:"报名确认"}}),a("Step",{attrs:{content:"车队，酒店确认"}}),a("Step",{attrs:{content:"会议进行"}}),a("Step",{attrs:{content:"会议结束"}})],1),a("Divider"),a("div",[a("Form",{attrs:{model:e.conferenceInfo,"label-colon":"","label-width":120}},[a("Form",{attrs:{inline:"","label-colon":"","label-width":120}},[a("FormItem",{attrs:{label:"会议名"}},[a("Input",{staticStyle:{width:"150px"},attrs:{type:"text",readonly:!0},model:{value:e.conferenceInfo.name,callback:function(t){e.$set(e.conferenceInfo,"name",t)},expression:"conferenceInfo.name"}})],1),a("FormItem",{attrs:{label:"会议号"}},[a("Input",{staticStyle:{width:"150px"},attrs:{type:"text",readonly:!0},model:{value:e.conferenceId,callback:function(t){e.conferenceId=t},expression:"conferenceId"}})],1)],1),a("FormItem",{attrs:{label:"创建人"}},[a("Input",{staticStyle:{width:"150px"},attrs:{type:"text",readonly:!0},model:{value:e.conferenceInfo.creatorName,callback:function(t){e.$set(e.conferenceInfo,"creatorName",t)},expression:"conferenceInfo.creatorName"}}),a("Poptip",{attrs:{trigger:"hover"}},[a("Tag",{staticStyle:{"margin-left":"1vw"},attrs:{size:"large",color:"primary"}},[e._v("详情")]),a("div",{staticStyle:{overflow:"hidden"},attrs:{slot:"content"},slot:"content"},[e._v(" 手机号: "+e._s(e.conferenceInfo.creatorPhone)+" "),a("Divider",{staticStyle:{margin:"10px"}}),e._v(" 邮箱："+e._s(e.conferenceInfo.creatorEmail)+" ")],1)],1),a("Button",{staticStyle:{"margin-left":"1vw"},attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/conference/list")}}},[a("Icon",{attrs:{size:"24",type:"ios-mail"}})],1)],1),a("FormItem",{attrs:{label:"会议简介"}},[a("Input",{staticClass:"input_size",attrs:{type:"textarea",readonly:!0},model:{value:e.conferenceInfo.detail,callback:function(t){e.$set(e.conferenceInfo,"detail",t)},expression:"conferenceInfo.detail"}})],1),a("FormItem",{attrs:{label:"会议时间"}},[a("DatePicker",{attrs:{readonly:!0},model:{value:e.conferenceInfo.startTime,callback:function(t){e.$set(e.conferenceInfo,"startTime",t)},expression:"conferenceInfo.startTime"}}),e._v(" 至 "),a("DatePicker",{attrs:{readonly:!0},model:{value:e.conferenceInfo.endTime,callback:function(t){e.$set(e.conferenceInfo,"endTime",t)},expression:"conferenceInfo.endTime"}})],1),a("FormItem",{attrs:{label:"会议地点"}},[a("Input",{staticClass:"input_size",attrs:{type:"textarea",readonly:!0},model:{value:e.conferenceInfo.address,callback:function(t){e.$set(e.conferenceInfo,"address",t)},expression:"conferenceInfo.address"}})],1),a("FormItem",{attrs:{label:"报名截止时间"}},[a("DatePicker",{attrs:{readonly:!0},model:{value:e.conferenceInfo.enrollTime,callback:function(t){e.$set(e.conferenceInfo,"enrollTime",t)},expression:"conferenceInfo.enrollTime"}}),1===e.conferenceInfo.enrollStatus?a("Tag",{staticStyle:{"margin-left":"1vw"},attrs:{size:"large",color:"primary"}},[e._v(" 进行中 ")]):a("Tag",{staticStyle:{"margin-left":"1vw"},attrs:{size:"large"}},[e._v(" 已结束 ")])],1),a("FormItem",{attrs:{label:"行程信息"}},[a("div",[e._v(e._s(e.conferenceInfo.statusMessage))])])],1),a("Card",{staticClass:"card_size",attrs:{"dis-hover":"",title:e.driverInfo.statusMessage}},[a("Form",{attrs:{"label-colon":"","label-width":120}},[a("FormItem",{attrs:{label:"我的车次/航班"}},[a("Input",{attrs:{type:"text",readonly:!0},model:{value:e.driverInfo.tripNumber,callback:function(t){e.$set(e.driverInfo,"tripNumber",t)},expression:"driverInfo.tripNumber"}})],1),a("FormItem",{attrs:{label:"我的到达时间","label-width":120}},[a("DatePicker",{attrs:{type:"datetime",readonly:!0},model:{value:e.driverInfo.arriveTime,callback:function(t){e.$set(e.driverInfo,"arriveTime",t)},expression:"driverInfo.arriveTime"}})],1),e.driverInfo.status>=1?a("div",[a("FormItem",{attrs:{label:"接车司机","label-width":120}},[a("Input",{staticStyle:{width:"80px"},attrs:{type:"text",readonly:!0},model:{value:e.driverInfo.driverName,callback:function(t){e.$set(e.driverInfo,"driverName",t)},expression:"driverInfo.driverName"}}),a("Poptip",{attrs:{trigger:"hover"}},[a("Tag",{staticStyle:{"margin-left":"1vw"},attrs:{size:"large",color:"primary"}},[e._v("详情")]),a("div",{staticStyle:{overflow:"hidden"},attrs:{slot:"content"},slot:"content"},[e._v(" 账号: "+e._s(e.driverInfo.driverAccount)+" "),a("Divider",{staticStyle:{margin:"10px"}}),e._v(" 手机号: "+e._s(e.driverInfo.driverPhone)+" ")],1)],1)],1),a("FormItem",{attrs:{label:"接车时间","label-width":120}},[a("DatePicker",{attrs:{type:"datetime",readonly:!0},model:{value:e.driverInfo.pickupTime,callback:function(t){e.$set(e.driverInfo,"pickupTime",t)},expression:"driverInfo.pickupTime"}})],1),a("Form",{attrs:{"label-colon":"","label-width":120}},[a("FormItem",{attrs:{label:"接车地点","label-width":120}},[a("Input",{attrs:{type:"text",readonly:!0},model:{value:e.driverInfo.pickupSite,callback:function(t){e.$set(e.driverInfo,"pickupSite",t)},expression:"driverInfo.pickupSite"}})],1),a("FormItem",{attrs:{label:"车牌号","label-width":120}},[a("Input",{staticStyle:{width:"80px"},attrs:{type:"text",readonly:!0},model:{value:e.driverInfo.carNumber,callback:function(t){e.$set(e.driverInfo,"carNumber",t)},expression:"driverInfo.carNumber"}})],1)],1),1===e.driverInfo.status?a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:e.confirmDriver}},[e._v("确认信息")])],1):e._e()],1):e._e()],1)],1),a("br"),a("Card",{staticClass:"card_size",attrs:{"dis-hover":"",title:e.hotelInfo.statusMessage}},[a("Form",{attrs:{"label-colon":"","label-width":120}},[a("FormItem",{attrs:{label:"住宿时间",inline:""}},[a("DatePicker",{attrs:{readonly:!0},model:{value:e.hotelInfo.stayStartTime,callback:function(t){e.$set(e.hotelInfo,"stayStartTime",t)},expression:"hotelInfo.stayStartTime"}}),a("br"),e._v("至"),a("br"),a("DatePicker",{attrs:{readonly:!0},model:{value:e.hotelInfo.stayEndTime,callback:function(t){e.$set(e.hotelInfo,"stayEndTime",t)},expression:"hotelInfo.stayEndTime"}})],1),e.hotelInfo.status>=1?a("div",[a("FormItem",{attrs:{label:"住宿酒店","label-width":120}},[a("Input",{staticStyle:{width:"75%"},attrs:{type:"text",readonly:!0},model:{value:e.hotelInfo.hotelName,callback:function(t){e.$set(e.hotelInfo,"hotelName",t)},expression:"hotelInfo.hotelName"}}),a("Poptip",{attrs:{trigger:"hover"}},[a("Tag",{staticStyle:{"margin-left":"1vw"},attrs:{size:"large",color:"primary"}},[e._v("详情")]),a("div",{staticStyle:{overflow:"hidden"},attrs:{slot:"content"},slot:"content"},[e._v(" 账号: "+e._s(e.hotelInfo.hotelAccount)+" "),a("Divider",{staticStyle:{margin:"10px"}}),e._v(" 电话: "+e._s(e.hotelInfo.hotelPhone)+" "),a("Divider",{staticStyle:{margin:"10px"}}),e._v(" 地址: "+e._s(e.hotelInfo.hotelAddress)+" ")],1)],1)],1),a("FormItem",{attrs:{label:"入住时间",inline:""}},[a("DatePicker",{attrs:{readonly:!0},model:{value:e.hotelInfo.checkinTime,callback:function(t){e.$set(e.hotelInfo,"checkinTime",t)},expression:"hotelInfo.checkinTime"}})],1),a("FormItem",{attrs:{label:"房间号"}},[a("Input",{staticStyle:{width:"50px"},attrs:{type:"text",readonly:!0},model:{value:e.hotelInfo.roomNumber,callback:function(t){e.$set(e.hotelInfo,"roomNumber",t)},expression:"hotelInfo.roomNumber"}})],1),1===e.hotelInfo.status?a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:e.confirmHotel}},[e._v("确认")])],1):e._e()],1):e._e()],1)],1)],1)],1)},C=[],R={name:"ParticipantDetail",data:function(){return{currentProgress:0,conferenceInfo:{name:"xxx",creatorName:"xxx",creatorPhone:"xxxssssssssssssssssss",creatorEmail:"xxx",detail:"...",address:"xxx",startTime:"2020-10-11",endTime:"2020-10-11",enrollTime:"2020-10-12",enrollStatus:0,statusMessage:""},driverInfo:{status:1,statusMessage:"行程信息: 待用户确认",tripNumber:"G1",arriveTime:new Date,driverAccount:"",driverName:"",driverPhone:"",pickupTime:new Date,pickupSite:"",carNumber:""},hotelInfo:{status:1,statusMessage:"住宿信息: 待用户确认",stayStartTime:"2020-10-11",stayEndTime:"2020-10-11",hotelAccount:"",hotelName:"",hotelPhone:"",hotelAddress:"",checkinTime:"2020-10-11",roomNumber:""}}},props:["conferenceId"],created:function(){this.loadConferenceInfo(),this.loadEnrollmentInfo(),this.loadDriverInfo(),this.loadHotelInfo(),""===this.conferenceInfo.statusMessage&&(this.conferenceInfo.statusMessage="准备参会")},methods:{loadConferenceInfo:function(){var e=this;this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/conference/getById"),data:{id:e.conferenceId}}).then((function(t){var a=t["data"];switch(e.conferenceInfo={name:a["name"],startTime:a["startTime"],endTime:a["endTime"],detail:a["detail"],address:a["address"],enrollTime:new Date(a["enrollTime"]),statusMessage:""},a["progress"]){case"ENROLLMENT":e.currentProgress=0;break;case"OWNER_CONFIRM":e.currentProgress=1;break;case"RESERVATION_CONFIRM":e.currentProgress=2;break;case"READY":e.currentProgress=3;break;case"ENDED":e.currentProgress=4;break}Date()<Date(a["enrollTime"])?e.conferenceInfo.enrollStatus=1:e.conferenceInfo.enrollStatus=0,e.$axios({method:"post",url:"".concat(this.$baseURI,"/api/user/profile/getById"),data:{id:a["userId"]}}).then((function(t){var a=t["data"];e.conferenceInfo.creatorName=a["name"],e.conferenceInfo.creatorPhone=a["telephone"],e.conferenceInfo.creatorEmail=a["email"]}))}))},loadEnrollmentInfo:function(){var e=this;this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/conference/enrollment"),data:{id:e.conferenceId}}).then((function(t){var a=t["data"];e.driverInfo={statusMessage:"行程信息: ",tripNumber:a["tripNumber"],arriveTime:new Date(a["arriveTime"])},e.hotelInfo={statusMessage:"住宿信息: ",stayStartTime:new Date(a["stayStart"]),stayEndTime:new Date(a["stayEnd"])}}))},loadDriverInfo:function(){var e=this;this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/conference/driverReservation"),data:{id:e.conferenceId}}).then((function(t){var a=t["data"];!0===a["driverCheck"]?(!0===a["userCheck"]?(e.driverInfo.status=2,e.driverInfo.statusMessage+="用户已确认"):(e.driverInfo.status=1,e.driverInfo.statusMessage+="待用户确认",this.conferenceInfo.statusMessage+="待确认接车信息 "),e.driverInfo.pickupTime=a["pickupTime"],e.driverInfo.pickupSite=a["pickupSite"],e.driverInfo.carNumber=a["carNumber"],e.$axios({method:"post",url:"".concat(this.$baseURI,"/api/driver/getById"),data:{id:a["driverId"]}}).then((function(t){var a=t["data"];e.driverInfo.driverAccount=a["accountId"],e.driverInfo.driverName=a["name"],e.driverInfo.driverPhone=a["telephone"]}))):(e.driverInfo.status=0,e.driverInfo.statusMessage+="待司机接单",this.conferenceInfo.statusMessage+="待司机接单 ")}))},loadHotelInfo:function(){var e=this;this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/conference/hotelReservation"),data:{id:e.conferenceId}}).then((function(t){var a=t["data"];!0===a["hotelCheck"]?(!0===a["userCheck"]?(e.hotelInfo.status=2,e.hotelInfo.statusMessage+="用户已确认"):(e.hotelInfo.status=1,e.hotelInfo.statusMessage+="待用户确认",this.conferenceInfo.statusMessage+="待确认酒店信息 "),e.hotelInfo.checkinTime=new Date(a["checkinTime"]),e.hotelInfo.roomNumber=new Date(a["roomNumber"]),e.$axios({method:"post",url:"".concat(this.$baseURI,"/api/hotel/get"),data:{id:a["hotelId"]}}).then((function(t){var a=t["data"];e.hotelInfo.hotelAccount=a["accountId"],e.hotelInfo.hotelName=a["name"],e.hotelInfo.hotelPhone=a["telephone"],e.hotelInfo.hotelAddress=a["address"]}))):(e.hotelInfo.status=0,e.hotelInfo.statusMessage+="待酒店接单",this.conferenceInfo.statusMessage+="待酒店接单 ")}))},confirmDriver:function(){var e=this;this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/conference/driverReservation"),data:{id:this.conferenceId}}).then((function(t){!0===t["data"]["success"]?e.$Message.success("确认成功"):e.$Message.error(t["data"]["message"])}))},confirmHotel:function(){var e=this;this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/conference/hotelReservation/check"),data:{id:this.conferenceId}}).then((function(t){!0===t["data"]["success"]?e.$Message.success("确认成功"):e.$Message.error(t["data"]["message"])}))}}},N=R,E=(a("1759"),Object(m["a"])(N,F,C,!1,null,"3f8dc281",null)),A=E.exports,L={name:"Detail",components:{CreatorDetail:_,ParticipantDetail:A},data:function(){return{id:0,isCreator:!0}},created:function(){this.initData()},methods:{initData:function(){var e=this;this.id=this.$route.params.id;var t={id:this.id};this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/user/conference/created/checkById"),data:t}).then((function(t){e.isCreator=t["data"]["result"]}))}}},B=L,O=Object(m["a"])(B,r,n,!1,null,"4b00715b",null);t["default"]=O.exports},"8d0a":function(e,t,a){},a640:function(e,t,a){"use strict";var r=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&r((function(){a.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,a){var r=a("83ab"),n=a("d039"),o=a("5135"),s=Object.defineProperty,i={},c=function(e){throw e};e.exports=function(e,t){if(o(i,e))return i[e];t||(t={});var a=[][e],l=!!o(t,"ACCESSORS")&&t.ACCESSORS,d=o(t,0)?t[0]:c,f=o(t,1)?t[1]:void 0;return i[e]=!!a&&!n((function(){if(l&&!r)return!0;var e={length:-1};l?s(e,1,{enumerable:!0,get:c}):e[1]=1,a.call(e,d,f)}))}},b0c0:function(e,t,a){var r=a("83ab"),n=a("9bf2").f,o=Function.prototype,s=o.toString,i=/^\s*function ([^ (]*)/,c="name";r&&!(c in o)&&n(o,c,{configurable:!0,get:function(){try{return s.call(this).match(i)[1]}catch(e){return""}}})},b727:function(e,t,a){var r=a("0366"),n=a("44ad"),o=a("7b0b"),s=a("50c4"),i=a("65f0"),c=[].push,l=function(e){var t=1==e,a=2==e,l=3==e,d=4==e,f=6==e,m=5==e||f;return function(u,h,p,I){for(var v,b,y=o(u),g=n(y),k=r(h,p,3),x=s(g.length),S=0,w=I||i,$=t?w(u,x):a?w(u,0):void 0;x>S;S++)if((m||S in g)&&(v=g[S],b=k(v,S,y),e))if(t)$[S]=b;else if(b)switch(e){case 3:return!0;case 5:return v;case 6:return S;case 2:c.call($,v)}else if(d)return!1;return f?-1:l||d?d:$}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},e8b5:function(e,t,a){var r=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-36c5f3a2.f7984cf1.js.map