<template>
  <div>

  </div>
</template>

<script>

export default {
  name: "Profile",
}

</script>

<style scoped>
.card {
  color: #4d5669;
  font: 20px bold;
  height: 20vh;
}

.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

a {
  width: 100%;
  color: #515a6e;
  text-align: left;
}

.set_margin {
  float: left;
  width: 8em;
}

.ListItem:hover {
  background-color: #F6F6F6
}

.List {
  width: 700px;
}

@media screen and (max-width: 960px) {
  .List {
    width: 90%;
  }
}
</style>