<template>
  <div class="layout">
    <Navbar ></Navbar>
    <DriverSidebar></DriverSidebar>
    <Content >
      <RouterView></RouterView>
    </Content>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";

export default {
name: "home",
  components: { Navbar, DriverSidebar},
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