<template>
  <div>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <RouterView :style="{padding: '24px', margin: 'auto auto auto 15vw'}"></RouterView>
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