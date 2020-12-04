<template>
  <div>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
      <RouterView></RouterView>

  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar"

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

</style>