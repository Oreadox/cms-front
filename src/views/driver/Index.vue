<template>
  <div class="layout">
    <Navbar></Navbar>
    <DriverSidebar></DriverSidebar>
    <Content>
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