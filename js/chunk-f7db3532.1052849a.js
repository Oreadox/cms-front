(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7db3532"],{"7c54":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Card",{attrs:{"dis-hover":"",bordered:!1}},[a("div",{attrs:{id:"Profile"}},[a("Content",[a("div",[a("List",{staticClass:"List",staticStyle:{"margin-top":"5%","text-align":"center"},attrs:{header:"个人资料",border:""}},[a("ListItem",{staticClass:"ListItem"},[a("a",[e._v(" 头像 ")]),e._v("v ")]),e._l(e.listItem.personalData,(function(t,r){return a("ListItem",{key:r,staticClass:"ListItem",attrs:{value:t},model:{value:e.userData[t],callback:function(a){e.$set(e.userData,t,a)},expression:"userData[value]"}},[a("a",{on:{click:function(a){return e.gotoChange(t,r)}}},[a("div",{staticClass:"set_margin"},[e._v(e._s(t))]),a("div",[e._v(e._s(e.userData[r]))])])])}))],2),a("br"),a("br"),a("List",{staticClass:"List",staticStyle:{"text-align":"center"},attrs:{header:"联系信息",border:""}},e._l(e.listItem.contactInformation,(function(t,r){return a("ListItem",{key:r,staticClass:"ListItem",attrs:{value:t}},[a("a",{on:{click:function(a){return e.gotoChange(t,r)}}},[a("div",{staticClass:"set_margin"},[e._v(e._s(t))]),a("div",[e._v(e._s(e.userData[r]))])])])})),1)],1)]),a("Modal",{attrs:{"footer-hide":"","mask-closable":!1},model:{value:e.modelInfo.changeModal,callback:function(t){e.$set(e.modelInfo,"changeModal",t)},expression:"modelInfo.changeModal"}},[a("ChangeInfo",{attrs:{userData:e.userData},on:{gotoProfile:e.gotoProfile}})],1),a("Modal",{attrs:{"footer-hide":"","mask-closable":!1},model:{value:e.passwordModel.changeModal,callback:function(t){e.$set(e.passwordModel,"changeModal",t)},expression:"passwordModel.changeModal"}},[a("ChangePassword",{attrs:{userData:e.userData},on:{gotoProfile:e.gotoProfile}})],1)],1)])},o=[],s=(a("b0c0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Form",{ref:"formItem",staticStyle:{"margin-top":"5%"},attrs:{"hide-required-mark":"",rules:e.formValidate,model:e.formItem}},[a("h2",{staticStyle:{"text-align":"center"}},[e._v("修改个人信息")]),a("FormItem",{attrs:{label:"名称",prop:"name"}},[a("Input",{attrs:{type:"text"},model:{value:e.formItem.name,callback:function(t){e.$set(e.formItem,"name",t)},expression:"formItem.name"}})],1),a("FormItem",{attrs:{label:"性别",prop:"gender"}},[a("RadioGroup",{model:{value:e.formItem.gender,callback:function(t){e.$set(e.formItem,"gender",t)},expression:"formItem.gender"}},[a("Radio",{attrs:{label:"MALE"}},[e._v("男")]),a("Radio",{attrs:{label:"FEMALE"}},[e._v("女")])],1)],1),a("FormItem",{attrs:{label:"生日",prop:"birthday"}},[a("DatePicker",{attrs:{type:"date"},model:{value:e.formItem.birthday,callback:function(t){e.$set(e.formItem,"birthday",t)},expression:"formItem.birthday"}})],1),a("FormItem",{attrs:{label:"邮箱",prop:"email"}},[a("Input",{attrs:{type:"email"},model:{value:e.formItem.email,callback:function(t){e.$set(e.formItem,"email",t)},expression:"formItem.email"}})],1),a("FormItem",{attrs:{label:"电话",prop:"phone"}},[a("Input",{attrs:{type:"text"},model:{value:e.formItem.phone,callback:function(t){e.$set(e.formItem,"phone",t)},expression:"formItem.phone"}})],1),a("FormItem",[a("Button",{staticStyle:{float:"right","margin-left":"16px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("formItem")}}},[e._v("修改 ")]),a("Button",{staticStyle:{float:"right"},attrs:{type:"text"},on:{click:function(){e.resetForm("formItem"),e.cancelButton()}}},[e._v("取消 ")])],1)],1)],1)}),n=[],i={name:"ChangeInfo",data:function(){return{formItem:{name:this.userData.name,gender:this.userData.gender,birthday:this.userData.birthday,email:this.userData.email,phone:this.userData.phone,idCard:this.userData.idCard,workUnit:this.userData.workUnit},formValidate:{name:[{required:!0,message:"姓名不能为空",trigger:"blur"}],gender:[{required:!0,message:"性别不能为空",trigger:"blur"}],birthday:[{type:"date",required:!0,message:"生日不能为空",trigger:"change"}],email:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"邮箱不合法",trigger:"blur"}],phone:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^[1][0-9]{10}$/,message:"手机号不合法",trigger:"blur"}]}}},props:["userData"],methods:{resetForm:function(e){this.$refs[e].resetFields()},cancelButton:function(){this.$emit("gotoProfile",!1)},submitForm:function(e){var t=this,a=this;this.$refs[e].validate((function(e){if(e){var r={name:t.formItem.name,gender:t.formItem.gender,birthday:t.formItem.birthday.toDateString(),residentIdNumber:t.formItem.idCard,email:t.formItem.email,telephone:t.formItem.phone,workplace:t.formItem.workUnit};a.$axios({method:"post",url:"".concat(t.$baseURI,"/api/user/profile/modify"),data:r}).then((function(e){!0===e["data"]["success"]?a.$Message.success("修改成功"):a.$Message.error(e["data"]["message"])}))}}))}}},l=i,m=a("0c7c"),d=Object(m["a"])(l,s,n,!1,null,"4bc784fa",null),c=d.exports,u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Form",{ref:"formItem",staticStyle:{"margin-top":"5%"},attrs:{"hide-required-mark":"",rules:e.fromValidate,model:e.formItem}},[a("h2",{staticStyle:{"text-align":"center"}},[e._v("修改密码")]),a("FormItem",{attrs:{"show-message":"",label:"原密码",prop:"oldPassword"}},[a("Input",{attrs:{placeholder:"输入原密码"},model:{value:e.formItem.oldPassword,callback:function(t){e.$set(e.formItem,"oldPassword",t)},expression:"formItem.oldPassword"}})],1),a("FormItem",{attrs:{label:"新密码",prop:"password"}},[a("Input",{attrs:{type:"password",password:"",placeholder:"长度为8-32, 需包含字母和数字"},model:{value:e.formItem.password,callback:function(t){e.$set(e.formItem,"password",t)},expression:"formItem.password"}})],1),a("FormItem",{attrs:{label:"确认密码",prop:"passwordCheck"}},[a("Input",{attrs:{type:"password",password:"",placeholder:"重复上述的密码"},model:{value:e.formItem.passwordCheck,callback:function(t){e.$set(e.formItem,"passwordCheck",t)},expression:"formItem.passwordCheck"}})],1),a("FormItem",[a("Button",{staticStyle:{float:"right","margin-left":"16px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("formItem")}}},[e._v("修改 ")]),a("Button",{staticStyle:{float:"right"},attrs:{type:"text"},on:{click:function(){e.resetForm("formItem"),e.cancelButton()}}},[e._v("取消 ")])],1)],1)],1)},f=[],p={name:"ChangePassword",props:["userData"],data:function(){var e=this,t=function(t,a,r){return a!==e.formItem.password?r(new Error("密码验证不一致")):r()};return{formItem:{oldPassword:"",password:"",passwordCheck:""},fromValidate:{oldPassword:[{required:!0,message:"原密码不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{type:"string",min:8,message:"密码至少需8位",trigger:"blur"},{type:"string",max:32,message:"密码最多32位",trigger:"blur"},{pattern:/(?=.*[0-9])(?=.*[a-zA-Z])/,message:"密码需包含字母和数字",trigger:"blur"}],passwordCheck:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{validator:t,trigger:"blur"}]}}},methods:{resetForm:function(e){this.$refs[e].resetFields()},cancelButton:function(){this.$emit("gotoProfile",!1)},submitForm:function(e){var t=this,a=this;this.$refs[e].validate((function(e){if(e){var r={oldPassword:a.formItem.oldPassword,newPassword:a.formItem.password};a.$axios({method:"post",url:"".concat(t.$baseURI,"/api/user/password/modify"),data:r}).then((function(e){!0===e["data"]["success"]?a.$Message.success("修改成功"):!1===e["data"]["oldPasswordCorrect"]?a.$Message.error("原密码错误"):a.$Message.error(e["data"]["message"])}))}}))}}},g=p,h=Object(m["a"])(g,u,f,!1,null,"05c6b884",null),I=h.exports,b={name:"Profile",components:{ChangePassword:I,ChangeInfo:c},data:function(){return{userData:{name:"xxx",birthday:"2000-01-01",gender:"xxx",password:"●●●●●●●●●●●●",account:"xxx",email:"xxx",phone:"xxx",idCard:"",workUnit:"xxx"},listItem:{personalData:{name:"名称",birthday:"生日",gender:"性别",password:"密码",workUnit:"工作单位"},contactInformation:{account:"账号",email:"邮箱",phone:"电话"}},modelInfo:{changeModal:!1},passwordModel:{changeModal:!1}}},created:function(){this.getProfile()},methods:{gotoProfile:function(e){this.modelInfo.changeModal=e,this.passwordModel.changeModal=e},gotoChange:function(e,t){"account"!==t&&(console.log("password"!==t),"password"!==t?this.modelInfo.changeModal=!0:this.passwordModel.changeModal=!0)},getProfile:function(){var e=this;this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/user/profile")}).then((function(t){var a=t["data"];e.userData.name=a["name"],e.userData.birthday=new Date(a["birthday"]),e.userData.gender=a["gender"],e.userData.account=a["accountId"],e.userData.email=a["email"],e.userData.phone=a["telephone"],e.userData.idCard=a["residentIdNumber"],e.userData.workUnit=a["workplace"]}))}}},w=b,v=(a("e6e6"),Object(m["a"])(w,r,o,!1,null,"7c7e0aea",null));t["default"]=v.exports},b0c0:function(e,t,a){var r=a("83ab"),o=a("9bf2").f,s=Function.prototype,n=s.toString,i=/^\s*function ([^ (]*)/,l="name";r&&!(l in s)&&o(s,l,{configurable:!0,get:function(){try{return n.call(this).match(i)[1]}catch(e){return""}}})},cd00:function(e,t,a){},e6e6:function(e,t,a){"use strict";a("cd00")}}]);
//# sourceMappingURL=chunk-f7db3532.1052849a.js.map