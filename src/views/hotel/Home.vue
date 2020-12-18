<template>
  <div class="layout">
    <Navbar ></Navbar>
    <HotelSidebar></HotelSidebar>
    <Content >
      <RouterView></RouterView>
    </Content>

  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import HotelSidebar from "@/components/hotel/HotelSidebar";

export default {
  name: "home",
  components: { Navbar, HotelSidebar},
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