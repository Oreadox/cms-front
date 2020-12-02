<template>
  <div>
  <Navbar></Navbar>
    <Sidebar></Sidebar>
  <Card dis-hover  :bordered=false :style="{padding: '24px', margin: 'auto auto auto 15vw'}">
    <div>
      <strong>Default Size:</strong>
      <br><br>
      <List header="Header" footer="Footer" border>
        <ListItem>This is a piece of text.</ListItem>
        <ListItem>This is a piece of text.</ListItem>
        <ListItem>This is a piece of text.</ListItem>
      </List>
      <br>
      <strong>Small Size:</strong>
      <br><br>
      <List header="Header" footer="Footer" border size="small">
        <ListItem>This is a piece of text.</ListItem>
        <ListItem>This is a piece of text.</ListItem>
        <ListItem>This is a piece of text.</ListItem>
      </List>
      <br>
      <strong>Large Size:</strong>
      <br><br>
      <List header="Header" footer="Footer" border size="large">
        <ListItem>This is a piece of text.</ListItem>
        <ListItem>This is a piece of text.</ListItem>
        <ListItem>This is a piece of text.</ListItem>
      </List>
    </div>
  </Card>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar"
export default {
  name: "index",
  components:{Navbar, Sidebar}
}
</script>

<style scoped>

</style>