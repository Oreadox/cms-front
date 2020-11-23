<template>
  <div>
  <Button type="primary" @click="modal1 = true">Display dialog box</Button>
  <Modal v-model="modal1">
    <Login></Login>
  </Modal>
    <Modal v-model="modal2">
      <Register></Register>
    </Modal>
  </div>
</template>

<script>
import Register from "@/views/user/Register";
import Login from "@/views/Login";
export default {
  name: "PanelShow",
  components: {Register, Login},
  data () {
    return {
      modal1: false,
      modal2:false
    }
  },
  methods: {

  }
}
</script>