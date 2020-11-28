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
      <Row type="flex" justify="center" gutter=40 style="padding:5%;margin-top: 5%">
        <Col span="10">
          <p class="title-font-stype">
            会议管理更加便携
          </p>
          <p class="text-font-stype">
            Detailed introduction
          </p>
        </Col>
        <Col span="10">
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4qpUo?ver=fc80&q=90&h=675&w=830&b=%23FFFFFFFF&aim=true"
               class="control-layout">
        </Col>
      </Row>

      <Row type="flex" justify="center" gutter=40 style="padding:5%;background-color: lightgray">
        <Col span="10">
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oNUA?ver=2548&q=90&h=675&w=830&b=%23FFFFFFFF&aim=true"
               class="control-layout">
        </Col>
        <Col span="10">
          <p class="title-font-stype">
            随时随地组织会议
          </p>
          <p class="text-font-stype">
            Detailed introduction
          </p>
        </Col>
      </Row>

      <Row type="flex" justify="center" gutter=40 style="padding:5%;">
        <Col span="10">
          <p class="title-font-stype">
            丰富的组织方式
          </p>
          <p class="text-font-stype">
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
  }
}
</script>

<style scoped>
.body{
  width:100%;
  height:100%;
  position: absolute;
}
.title-font-stype{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 3em;
  font-weight: bold;
  flex: auto
}
.text-font-stype{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 2em;
  flex: auto;
}
@media screen and (max-width: 640px) {
  .form-wrapper {
    width: 90%;
    margin: auto;
  }
}
</style>