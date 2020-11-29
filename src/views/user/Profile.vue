<template>
  <div ><Content :style="{padding: '24px', margin: 'auto auto auto 15vw'}">
    <div style="text-align: center">

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
  </Content>
  </div>
</template>

<script>
export default {
name: "profile"
}
</script>

<style scoped>
.card{
  color: #4d5669;
  font: 20px bold;
  height: 20vh;
}
.center{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>