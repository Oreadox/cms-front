<template>
  <div>
    <Navbar v-on: @getModal1="getMod"  @getModal2=getMod1></Navbar>
    <Modal
        footer-hide
        :mask-closable="false"
        v-model="modal1">
      <Login></Login>
    </Modal>
    <Modal
        footer-hide
        :mask-closable="false"
        v-model="modal2">
      <Register></Register>
    </Modal>
  </div>
</template>

<script>


import Navbar from "@/components/Navbar";
import Login from "@/views/Login";
import Register from "@/views/user/Register";
export default {
  name: "index",
  components: { Navbar,Login,Register},
  data(){
    return{
      modal1:false,
      modal2:false,
    }
  },
  methods:{
    getMod(fromChild){
      this.modal1 = fromChild;
    },
    getMod1(fromChild){
      this.modal2 = fromChild;
    }
  }
}

</script>

<style scoped>

</style>