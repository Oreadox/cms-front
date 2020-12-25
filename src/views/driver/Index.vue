<template>
  <div class="layout">
    <Navbar></Navbar>
    <DriverSidebar style="position: absolute"></DriverSidebar>
    <Content style="margin-top: 60px; width: 100%; overflow-x: hidden">
      <RouterView :style="{padding: '24px', margin: 'auto auto auto 15vw'}"></RouterView>
    </Content>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import DriverSidebar from "@/components/driver/DriverSidebar";

export default {
  name: "Index",
  components: {Navbar, DriverSidebar},
}
</script>

<style scoped>
.layout {
  background-color: #ffffff;
  position: relative;
}
</style>