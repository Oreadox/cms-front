<template>
<div>
  <a style="text-indent: 2em;" @click="arrowBack">
    <Icon type="ios-arrow-back"></Icon>
    返回</a>

</div>
</template>

<script>
export default {
name: "DriveDtail",
  methods: {
    arrowBack() {
      this.$emit('setCheckDrive', false);
    }
  }
}
</script>

<style scoped>

</style>
