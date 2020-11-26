<template>
  <div>
    <div class="body">
      <img :src="imgSrc" width="100%" height="100%" style="pointer-events: none">
    </div>
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
  height:100%;  /**宽高100%是为了图片铺满屏幕 */
  position: absolute;
}
</style>