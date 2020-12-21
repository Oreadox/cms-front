<template>
  <div>
    <a style="text-indent: 2em;" @click="arrowBack">
      <Icon type="ios-arrow-back"></Icon>
      返回</a>
    <Table :columns="this.columns" :data="this.conference" :stripe="true">
    </Table>
  </div>
</template>

<script>
export default {
  name: "CarDetail"
}
</script>

<style scoped>

</style>