<template>
<div class="layout">
  <Navbar ></Navbar>
    <Sidebar></Sidebar>
  <Content >
    <RouterView></RouterView>
  </Content>
</div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";
// import Home from "@/views/user/Home";
export default {
name: "index",
  components: {Navbar, Sidebar},
  data(){
    return{
      showHome: true
    }
  },
}

</script>

<style scoped>
.layout{
  background-color: #ffffff;
  position: relative;
}
</style>