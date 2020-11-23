<template>
  <div>
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

</style>