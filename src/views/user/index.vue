<template>
<div class="layout">
  <Navbar ></Navbar>
  <sidebar>
    <Sidebar></Sidebar>
  </sidebar>
  <Content >
    <RouterView></RouterView>
  </Content>
</div>
</template>

<script>
import Navbar from "@/components/user/Navbar";
import Sidebar from "@/components/user/Sidebar";
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