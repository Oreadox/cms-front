<template>
  <div class="layout">
    <Navbar></Navbar>
    <Sidebar style="position: absolute"></Sidebar>
    <Content style="margin-top: 60px; width: 100%; overflow-x: hidden">
      <RouterView :style="{padding: '24px', margin: 'auto auto auto 15vw'}"></RouterView>
    </Content>
  </div>
</template>
<script>
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";

export default {
  name: "index",
  components: {Navbar, Sidebar},
  data() {
    return {
      showHome: true
    }
  },
}

</script>

<style scoped>
.layout {
  background-color: #ffffff;
  position: relative;
}
</style>