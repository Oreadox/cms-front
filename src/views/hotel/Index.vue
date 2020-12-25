<template>
  <div class="layout">
    <Navbar ></Navbar>
    <HotelSidebar style="position: absolute"></HotelSidebar>
    <Content style="margin-top: 60px; width: 100%; overflow-x: hidden">
      <RouterView :style="{padding: '24px', margin: 'auto auto auto 15vw'}"></RouterView>
    </Content>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import HotelSidebar from "@/components/hotel/HotelSidebar";

export default {
  name: "Index",
  components: { Navbar, HotelSidebar},
}
</script>
<style scoped>
.layout{
  background-color: #ffffff;
  position: relative;
}
</style>