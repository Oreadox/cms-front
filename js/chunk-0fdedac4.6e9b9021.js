(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fdedac4"],{"00bd":function(e,t,r){},"0df1":function(e,t,r){"use strict";r("00bd")},"1dde":function(e,t,r){var o=r("d039"),a=r("b622"),n=r("2d00"),i=a("species");e.exports=function(e){return n>=51||!o((function(){var t=[],r=t.constructor={};return r[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,r){var o=r("861d"),a=r("e8b5"),n=r("b622"),i=n("species");e.exports=function(e,t){var r;return a(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?o(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},"6ca4":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Card",{style:{padding:"24px",margin:"auto auto auto 15vw"},attrs:{"dis-hover":"",bordered:!1}},[r("div",{attrs:{id:"Profile"}},[r("Content",[r("div",[r("List",{staticClass:"List",staticStyle:{"margin-top":"5%","text-align":"center"},attrs:{header:"司机资料",border:""}},e._l(e.listItem.driverData,(function(t,o){return r("ListItem",{key:o,staticClass:"ListItem",attrs:{value:t},model:{value:e.driverData[t],callback:function(r){e.$set(e.driverData,t,r)},expression:"driverData[value]"}},[r("a",{on:{click:function(r){return e.gotoChange(t,o)}}},[r("div",{staticClass:"set_margin"},[e._v(e._s(t))]),r("div",[e._v(e._s(e.driverData[o]))])])])})),1)],1)]),r("Modal",{attrs:{"footer-hide":"","mask-closable":!1},model:{value:e.modelInfo.changeModal,callback:function(t){e.$set(e.modelInfo,"changeModal",t)},expression:"modelInfo.changeModal"}},[r("ChangeInfo",{attrs:{driverData:"driverData",modelInfo:e.modelInfo},on:{gotoProfile:e.gotoProfile}})],1)],1)])},a=[],n=(r("99af"),r("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Form",{ref:"formItem",staticStyle:{"margin-top":"5%"},attrs:{"hide-required-mark":"",rules:e.fromValidate,model:e.formItem}},[r("h2",{staticStyle:{"text-align":"center"}},[e._v("修改"+e._s(e.modelInfo.changedTitle))]),r("FormItem",{attrs:{"show-message":"",label:e.modelInfo.changedTitle}},[r("Input",{attrs:{disabled:"",placeholder:e.driverData[e.modelInfo.changedType]}})],1),"gender"===e.modelInfo.changedType?r("FormItem",{attrs:{label:"性别",prop:"gender"}},[r("RadioGroup",{model:{value:e.formItem.newInfo,callback:function(t){e.$set(e.formItem,"newInfo",t)},expression:"formItem.newInfo"}},[r("Radio",{attrs:{label:"MALE"}},[e._v("男")]),r("Radio",{attrs:{label:"FEMALE"}},[e._v("女")])],1)],1):e._e(),"password"===e.modelInfo.changedType?r("FormItem",{attrs:{label:"新密码",prop:"password"}},[r("Input",{attrs:{type:"password",password:"",placeholder:"长度为8-32, 需包含字母和数字"},model:{value:e.formItem.newInfo,callback:function(t){e.$set(e.formItem,"newInfo",t)},expression:"formItem.newInfo"}})],1):e._e(),"password"===e.modelInfo.changedType?r("FormItem",{attrs:{label:"确认密码",prop:"passwordCheck"}},[r("Input",{attrs:{type:"password",password:"",placeholder:"重复上述的密码"},model:{value:e.formItem.passwordCheck,callback:function(t){e.$set(e.formItem,"passwordCheck",t)},expression:"formItem.passwordCheck"}})],1):r("FormItem",{attrs:{label:"新的"+e.modelInfo.changedTitle,prop:e.modelInfo.changedType}},[r("Input",{model:{value:e.formItem.newInfo,callback:function(t){e.$set(e.formItem,"newInfo",t)},expression:"formItem.newInfo"}})],1),r("FormItem",[r("Button",{staticStyle:{float:"right","margin-left":"16px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm(e.modelInfo.changedType)}}},[e._v("修改 ")]),r("Button",{staticStyle:{float:"right"},attrs:{type:"text"},on:{click:function(t){return e.cancelButton()}}},[e._v("取消")])],1)],1)],1)}),i=[],s={name:"ChangeInfo",data:function(){var e=this,t=function(t,r,o){return r!==e.formItem.password?o(new Error("密码验证不一致")):o()},r=function(t,r,o){e.$axios({method:"post",url:e.$baseURI+"/api/register/checkUsername",data:{username:r}}).then((function(e){!1===e["data"]["result"]?o(new Error("用户名重复")):o()}))};return{formItem:{newInfo:"",passwordCheck:""},fromValidate:{account:[{required:!0,message:"新用户名不能为空",trigger:"blur"},{validator:r,trigger:"blur"}],password:[{required:!0,message:"新密码不能为空",trigger:"blur"},{type:"string",min:8,message:"密码至少需8位",trigger:"blur"},{type:"string",max:32,message:"密码最多32位",trigger:"blur"},{pattern:/(?=.*[0-9])(?=.*[a-zA-Z])/,message:"密码需包含字母和数字",trigger:"blur"}],passwordCheck:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{validator:t,trigger:"blur"}],name:[{required:!0,message:"姓名不能为空",trigger:"blur"}],gender:[{required:!0,message:"性别不能为空",trigger:"blur"}],phone:[{required:!0,message:"联系电话不能为空",trigger:"blur"},{pattern:/^[1][0-9]{10}$/,message:"电话号码不合法",trigger:"blur"}],idCard:[{required:!0,message:"身份证号不能为空",trigger:"blur"},{pattern:/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,message:"身份证号不合法",trigger:"blur"}],team:[{required:!0,message:"所属车队不能为空",trigger:"blur"}]}}},props:["driverData","modelInfo"],methods:{resetForm:function(){this.formItem.newInfo="",this.formItem.passwordCheck=""},cancelButton:function(){this.$emit("gotoProfile",!1),this.resetForm()},submitForm:function(e){var t=this,r={account:"account"===e?this.formItem.newInfo:this.driverData.account,name:"name"===e?this.formItem.newInfo:this.driverData.name,gender:"gender"===e?this.formItem.newInfo:this.driverData.gender,celephone:"phone"===e?this.formItem.newInfo:this.driverData.phone,idCard:"idCard"===e?this.formItem.newInfo:this.driverData.idCard,team:"team"===e?this.formItem.newInfo:this.driverData.team};this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/driver/profile/modify"),data:r}).then((function(e){!0===e["data"]["success"]?t.$Message.success("修改成功"):t.$Message.error(e["data"]["message"])}))}}},d=s,c=r("0c7c"),l=Object(c["a"])(d,n,i,!1,null,"39b28516",null),m=l.exports,f={name:"Profile",components:{ChangeInfo:m},data:function(){return{driverData:{account:"xxx",password:"xxxx",name:"xxx",gender:"xxx",celephone:"xxx",idCard:"xxx",team:"xxx"},listItem:{driverData:{account:"司机账号",password:"密码",name:"姓名",gender:"性别",celephone:"联系电话",idCard:"身份证号",team:"所属车队"}},modelInfo:{changedTitle:"名字",changedType:"name",changeModal:!1}}},created:function(){this.getProfile()},methods:{gotoProfile:function(e){this.modelInfo.changeModal=e},gotoChange:function(e,t){console.log("".concat(e," ").concat(t)),"account"!==t&&(this.modelInfo.changedTitle=e,this.modelInfo.changedType=t,this.modelInfo.changeModal=!0)},getProfile:function(){var e=this;this.$axios({method:"post",url:"".concat(this.$baseURI,"/api/driver/profile")}).then((function(t){var r=t["data"];e.hotelData.account=r["account"],e.hotelData.password=r["password"],e.hotelData.name=r["name"],e.hotelData.gender=r["gender"],e.hotelData.celephone=r["celephone"],e.hotelData.idCard=r["idCard"],e.hotelData.team=r["team"]}))}}},u=f,g=(r("0df1"),Object(c["a"])(u,o,a,!1,null,"901ec7c6",null));t["default"]=g.exports},8418:function(e,t,r){"use strict";var o=r("c04e"),a=r("9bf2"),n=r("5c6c");e.exports=function(e,t,r){var i=o(t);i in e?a.f(e,i,n(0,r)):e[i]=r}},"99af":function(e,t,r){"use strict";var o=r("23e7"),a=r("d039"),n=r("e8b5"),i=r("861d"),s=r("7b0b"),d=r("50c4"),c=r("8418"),l=r("65f0"),m=r("1dde"),f=r("b622"),u=r("2d00"),g=f("isConcatSpreadable"),h=9007199254740991,p="Maximum allowed index exceeded",I=u>=51||!a((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),v=m("concat"),b=function(e){if(!i(e))return!1;var t=e[g];return void 0!==t?!!t:n(e)},w=!I||!v;o({target:"Array",proto:!0,forced:w},{concat:function(e){var t,r,o,a,n,i=s(this),m=l(i,0),f=0;for(t=-1,o=arguments.length;t<o;t++)if(n=-1===t?i:arguments[t],b(n)){if(a=d(n.length),f+a>h)throw TypeError(p);for(r=0;r<a;r++,f++)r in n&&c(m,f,n[r])}else{if(f>=h)throw TypeError(p);c(m,f++,n)}return m.length=f,m}})},b0c0:function(e,t,r){var o=r("83ab"),a=r("9bf2").f,n=Function.prototype,i=n.toString,s=/^\s*function ([^ (]*)/,d="name";o&&!(d in n)&&a(n,d,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(e){return""}}})},e8b5:function(e,t,r){var o=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==o(e)}}}]);
//# sourceMappingURL=chunk-0fdedac4.6e9b9021.js.map