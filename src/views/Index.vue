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
      <Row type="flex" justify="center" gutter=40 style="margin:5% auto">
        <Col span="8">
          <p class="title-font-stype">some introduction 介绍</p>
          <p class="text-font-stype"> Detailed introduction 详细介绍</p>
        </Col>
        <Col span="8">
          <img src="http://tva4.sinaimg.cn/large/007YSV3xgy1gl1j8l1esbj30kz0dle0g.jpg"
                class="control-layout">
        </Col>
      </Row>
      <Row type="flex" justify="center" gutter=40 style="margin:5% auto">
        <Col span="8">
          <img src="http://tva4.sinaimg.cn/large/007YSV3xgy1gl1j8l1esbj30kz0dle0g.jpg"
                class="control-layout">
        </Col>
        <Col span="8">
          <p class="title-font-stype">some introduction</p>
          <p class="text-font-stype"> Detailed introduction </p>
        </Col>
      </Row>
    </div>
  </div>

</template>

<script>
import Navbar from "@/components/Navbar";
import Login from "@/views/Login";
import Register from "@/views/user/Register";

export default {
  name: "index",
  components: {Navbar, Login, Register},
  data() {
    return {

      loginModal: false,
      registerModal: false,
      imgSrc:'http://tva4.sinaimg.cn/large/007YSV3xgy1gl1j8l1esbj30kz0dle0g.jpg' 
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