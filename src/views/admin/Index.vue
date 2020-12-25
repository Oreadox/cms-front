<template>
  <div>
    <Navbar></Navbar>
    <Sidebar style="position: absolute"></Sidebar>
    <Content style="margin-top: 60px; width: 100%; overflow-x: hidden">
      <RouterView :style="{padding: '24px', margin: 'auto auto auto 15vw'}"></RouterView>
    </Content>
    </div>
</template>

<script>
import Sidebar from "@/components/admin/Sidebar";
import Navbar from "@/components/common/Navbar";
export default {
name: "Index",
  components: {Navbar, Sidebar}
}
</script>

<style scoped>
.layout{
  background-color: #ffffff;
  position: relative;
}
</style>