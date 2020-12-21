<template>
  <div>
    <!--<div class="body">
      <img :src="imgSrc" width="100%" height="100%" style="pointer-events: none; background-z-index: -1 ">
    </div>-->
    <!--    图片仅供测试，可能将移除背景图-->

    <Navbar @setLoginModal="setLoginModal" @setRegisterModal=setRegisterModal></Navbar>
    <Modal
        footer-hide
        :mask-closable="false"
        v-model="loginModal">
      <Login @setLoginModal="setLoginModal" @setRegisterModal=setRegisterModal></Login>
    </Modal>
    <Modal style="padding: 20px"
           footer-hide
           :mask-closable="false"
           v-model="registerModal">
      <Register @setLoginModal="setLoginModal" @setRegisterModal=setRegisterModal></Register>
    </Modal>
    <div class="font-stype form-wrapper">
      <Row type="flex" justify="center" :gutter=40 style="padding:5%;margin-top: 5%">
        <Col span="10">
          <p class="title-font-stlye">
            随时随地组织会议
          </p>
          <p class="text-font-style">
            您只需设置好会议，然后将链接分享给与会者即可。CMS采用操作快捷的轻量级界面，并提供智能的参与者管理功能，可让您轻松组织，参与会议。
          </p>
          <Divider />
          <p class="text-font-style"> 还没有账号？<a @click="setTuretoRegisterModal">不妨注册一个</a> </p>
        </Col>
        <Col span="10">
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4qpUo?ver=fc80&q=90&h=675&w=830&b=%23FFFFFFFF&aim=true"
               class="control-layout">
        </Col>
      </Row>

      <Row type="flex" justify="center" :gutter=40 style="padding:5%;background-color: #F5F5F5">
        <Col span="10">
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oNUA?ver=2548&q=90&h=675&w=830&b=%23FFFFFFFF&aim=true"
               class="control-layout">
        </Col>
        <Col span="10">
          <p class="title-font-stlye">
            会议管理更加便捷
          </p>
          <p class="text-font-style">
            您只需要参与会议，后台即刻智能提供专车。无需额外的操作，高效开启您的会议。
          </p>
        </Col>
      </Row>

      <Row type="flex" justify="center" :gutter=40 style="padding:5%;">
        <Col span="10">
          <p class="title-font-stlye">
            丰富的组织方式
          </p>
          <p class="text-font-style">
            既可以设置为公开页面供大家加入，也能够设置为私人会议，通过id来查询加入。
          </p>
        </Col>
        <Col span="10">
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oQsI?ver=1297&q=90&h=675&w=830&b=%23FFFFFFFF&aim=true"
               class="control-layout">
        </Col>
      </Row>

    </div>
    <Footer style="height:200px;width: 100%">
      <h1 style="text-align: center">设计团队</h1>
      <p></p>
    </Footer>
  </div>

</template>

<script>
import Navbar from "@/components/Navbar";
import Login from "@/components/Login";
import Register from "@/components/Register";

export default {
  name: "index",
  components: {Navbar, Login, Register},
  data() {
    return {
      loginModal: false,
      registerModal: false,
      // img/background仅供参考，图片采用图床引用
    }
  },
  methods: {
    setLoginModal(fromChild) {
      this.loginModal = fromChild;
    },
    setRegisterModal(fromChild) {
      this.registerModal = fromChild;
    },
    setTuretoRegisterModal(){
      this.registerModal = true
    }
  }
}
</script>

<style scoped>
.body{
  width:100%;
  height:100%;
  position: absolute;
}
.title-font-stlye{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 2em;
  font-weight: bold;
  flex: auto
}
.text-font-style{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 1.5em;
  flex: auto;
}
a:link{
  color: #2d8cf0;
}
a:hover{
  color: #5cadff;
}
@media screen and (max-width: 640px) {
  .form-wrapper {
    width: 90%;
    margin: auto;
  }
}
</style>