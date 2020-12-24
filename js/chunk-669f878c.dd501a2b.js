(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-669f878c"],{"6ca4":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Card",{attrs:{"dis-hover":"",bordered:!1}},[r("div",{attrs:{id:"Profile"}},[r("Content",[r("div",[r("List",{staticClass:"List",staticStyle:{"margin-top":"5%","text-align":"center"},attrs:{header:"司机资料",footer:"",border:""}},e._l(e.listItem.driverData,(function(t,a){return r("ListItem",{key:a,staticClass:"ListItem",attrs:{value:t},model:{value:e.driverData[t],callback:function(r){e.$set(e.driverData,t,r)},expression:"driverData[value]"}},[r("a",{on:{click:function(r){return e.gotoChange(t,a)}}},[r("div",{staticClass:"set_margin"},[e._v(e._s(t))]),r("div",[e._v(e._s(e.driverData[a]))])])])})),1)],1)])],1)]),r("Modal",{attrs:{"footer-hide":"","mask-closable":!1},model:{value:e.modelInfo.changeModal,callback:function(t){e.$set(e.modelInfo,"changeModal",t)},expression:"modelInfo.changeModal"}},[r("ChangeInfo",{ref:"checkGender",attrs:{driverData:e.driverData},on:{gotoProfile:e.gotoProfile}})],1),r("Modal",{attrs:{"footer-hide":"","mask-closable":!1},model:{value:e.passwordModel.changePasswordModal,callback:function(t){e.$set(e.passwordModel,"changePasswordModal",t)},expression:"passwordModel.changePasswordModal"}},[r("ChangePassword",{attrs:{driverData:e.driverData},on:{gotoProfile:e.gotoProfile}})],1)],1)},o=[],s=(r("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Form",{ref:"formItem",staticStyle:{"margin-top":"5%"},attrs:{"hide-required-mark":"",rules:e.formValidate,model:e.formItem}},[r("h2",{staticStyle:{"text-align":"center"}},[e._v("修改个人信息")]),r("FormItem",{attrs:{label:"姓名",prop:"name"}},[r("Input",{attrs:{type:"text"},model:{value:e.formItem.name,callback:function(t){e.$set(e.formItem,"name",t)},expression:"formItem.name"}})],1),r("FormItem",{attrs:{label:"性别",prop:"gender"}},[r("RadioGroup",{model:{value:e.formItem.gender,callback:function(t){e.$set(e.formItem,"gender",t)},expression:"formItem.gender"}},[r("Radio",{attrs:{label:"MALE"}},[e._v("男")]),r("Radio",{attrs:{label:"FEMALE"}},[e._v("女")])],1)],1),r("FormItem",{attrs:{label:"联系电话",prop:"telephone"}},[r("Input",{attrs:{type:"text"},model:{value:e.formItem.telephone,callback:function(t){e.$set(e.formItem,"telephone",t)},expression:"formItem.telephone"}})],1),r("FormItem",{attrs:{label:"身份证号",prop:"residentIdNumber"}},[r("Input",{attrs:{type:"text"},model:{value:e.formItem.residentIdNumber,callback:function(t){e.$set(e.formItem,"residentIdNumber",t)},expression:"formItem.residentIdNumber"}})],1),r("FormItem",[r("Button",{staticStyle:{float:"right","margin-left":"16px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("修改 ")]),r("Button",{staticStyle:{float:"right"},attrs:{type:"text"},on:{click:function(){e.resetForm("formItem"),e.cancelButton()}}},[e._v("取消")])],1)],1)],1)}),n=[],i={name:"ChangeInfo",data:function(){return{formItem:{name:this.driverData.name,gender:this.driverData.gender,telephone:this.driverData.telephone,residentIdNumber:this.driverData.residentIdNumber},formValidate:{name:[{required:!0,message:"姓名不能为空",trigger:"blur"}],gender:[{required:!0,message:"性别不能为空",trigger:"blur"}],telephone:[{required:!0,message:"联系电话不能为空",trigger:"blur"},{pattern:/^[1][0-9]{10}$/,message:"电话号码不合法",trigger:"blur"}],residentIdNumber:[{required:!0,message:"身份证号不能为空",trigger:"blur"},{pattern:/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,message:"身份证号不合法",trigger:"blur"}]}}},props:["driverData"],methods:{checkGender:function(){this.formItem.gender="男"===this.driverData.gender?"MALE":"FEMALE",this.formItem.name=this.driverData.name,this.formItem.telephone=this.driverData.telephone,this.formItem.residentIdNumber=this.driverData.residentIdNumber},resetForm:function(e){this.$refs[e].resetFields()},cancelButton:function(){this.$emit("gotoProfile",!1)},submitForm:function(){var e=this,t=this;this.$refs["formItem"].validate((function(r){if(r){var a={name:e.formItem.name,gender:e.formItem.gender,telephone:e.formItem.telephone,residentIdNumber:e.formItem.residentIdNumber};e.$axios({method:"post",url:"".concat(e.$baseURI,"/api/driver/profile/modify"),data:a}).then((function(e){!0===e["data"]["success"]?(t.$Message.success("修改成功"),setTimeout((function(){t.$router.go(0)}),500)):t.$Message.error(e["data"]["message"])}))}}))}}},d=i,m=r("0c7c"),l=Object(m["a"])(d,s,n,!1,null,"506c01ca",null),c=l.exports,u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Form",{ref:"formItem",staticStyle:{"margin-top":"5%"},attrs:{"hide-required-mark":"",rules:e.fromValidate,model:e.formItem}},[r("h2",{staticStyle:{"text-align":"center"}},[e._v("修改密码")]),r("FormItem",{attrs:{"show-message":"",label:"原密码",prop:"oldPassword"}},[r("Input",{attrs:{type:"password",password:"",placeholder:"输入原密码"},model:{value:e.formItem.oldPassword,callback:function(t){e.$set(e.formItem,"oldPassword",t)},expression:"formItem.oldPassword"}})],1),r("FormItem",{attrs:{label:"新密码",prop:"password"}},[r("Input",{attrs:{type:"password",password:"",placeholder:"长度为8-32, 需包含字母和数字"},model:{value:e.formItem.password,callback:function(t){e.$set(e.formItem,"password",t)},expression:"formItem.password"}})],1),r("FormItem",{attrs:{label:"确认密码",prop:"passwordCheck"}},[r("Input",{attrs:{type:"password",password:"",placeholder:"重复上述的密码"},model:{value:e.formItem.passwordCheck,callback:function(t){e.$set(e.formItem,"passwordCheck",t)},expression:"formItem.passwordCheck"}})],1),r("FormItem",[r("Button",{staticStyle:{float:"right","margin-left":"16px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("formItem")}}},[e._v("修改 ")]),r("Button",{staticStyle:{float:"right"},attrs:{type:"text"},on:{click:function(){e.resetForm("formItem"),e.cancelButton()}}},[e._v("取消 ")])],1)],1)],1)},f=[],p={name:"ChangePassword",data:function(){var e=this,t=function(t,r,a){return r!==e.formItem.password?a(new Error("密码验证不一致")):a()};return{formItem:{oldPassword:"",password:"",passwordCheck:""},fromValidate:{oldPassword:[{required:!0,message:"原密码不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{type:"string",min:8,message:"密码至少需8位",trigger:"blur"},{type:"string",max:32,message:"密码最多32位",trigger:"blur"},{pattern:/(?=.*[0-9])(?=.*[a-zA-Z])/,message:"密码需包含字母和数字",trigger:"blur"}],passwordCheck:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{validator:t,trigger:"blur"}]}}},methods:{resetForm:function(e){this.$refs[e].resetFields()},cancelButton:function(){this.$emit("gotoProfile",!1)},submitForm:function(e){var t=this;t.$refs[e].validate((function(e){if(e){var r={oldPassword:t.formItem.oldPassword,newPassword:t.formItem.password};t.$axios({method:"post",url:"".concat(t.$baseURI,"/api/driver/password/modify"),data:r}).then((function(e){!0===e["data"]["success"]?(t.$Message.success("修改成功"),setTimeout((function(){t.$emit("gotoProfile",!1)}),200)):t.$Message.error(e["data"]["message"])}))}}))}}},g=p,h=Object(m["a"])(g,u,f,!1,null,"2c0c4fde",null),I=h.exports,v={name:"Profile",components:{ChangeInfo:c,ChangePassword:I},data:function(){return{driverData:{account:"xxx",password:"●●●●●●●●●●",name:"xxx",gender:"女",telephone:"12312312411",residentIdNumber:"xxx",fleetId:"xxx"},listItem:{driverData:{account:"司机账号",password:"密码",name:"姓名",gender:"性别",telephone:"联系电话",residentIdNumber:"身份证号",fleetId:"所属车队"}},modelInfo:{changeModal:!1},passwordModel:{changePasswordModal:!1}}},created:function(){this.getProfile()},methods:{gotoProfile:function(e){this.modelInfo.changeModal=e,this.passwordModel.changePasswordModal=e},gotoChange:function(e,t){"account"!==t&&("password"===t?this.passwordModel.changePasswordModal=!0:(this.$refs.checkGender.checkGender(),this.modelInfo.changeModal=!0))},getProfile:function(){var e=this;this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/driver/profile")}).then((function(t){var r=t["data"];e.driverData.account=r["accountId"],e.driverData.name=r["name"],e.driverData.gender="MALE"===r["gender"]?"男":"女",e.driverData.telephone=r["telephone"],e.driverData.residentIdNumber=r["residentIdNumber"],e.driverData.fleetId=r["fleetId"]}))}}},b=v,w=(r("f06c"),Object(m["a"])(b,a,o,!1,null,"68824100",null));t["default"]=w.exports},b0c0:function(e,t,r){var a=r("83ab"),o=r("9bf2").f,s=Function.prototype,n=s.toString,i=/^\s*function ([^ (]*)/,d="name";a&&!(d in s)&&o(s,d,{configurable:!0,get:function(){try{return n.call(this).match(i)[1]}catch(e){return""}}})},cc06:function(e,t,r){},f06c:function(e,t,r){"use strict";r("cc06")}}]);
//# sourceMappingURL=chunk-669f878c.dd501a2b.js.map