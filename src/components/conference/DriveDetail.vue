<template>
  <div>
    <a style="text-indent: 2em;" @click="arrowBack">
      <Icon type="ios-arrow-back"></Icon>
      返回</a>
    <Form :model="formItem" label-colon :label-width="120" style="margin-top: 5%; ">
      <FormItem label="车队名">
        <label>
          <Input type="text" v-model="formItem.name" :readonly="true" style="width: 60%"></Input>
        </label>
      </FormItem>
      <FormItem label="联系方式">
        <label>
          <Input type="text"  v-model="formItem.contact" :readonly="true"  style="width: 60%"></Input>
        </label>
      </FormItem>
      <FormItem label="司机人数">
        <label>
          <Input type="number" v-model="formItem.number" :readonly="true" style="width: 80px"></Input>
        </label>
      </FormItem>
      <FormItem label="简介">
        <label>
          <Input type="textarea" v-model="formItem.introduction" :readonly="true" style="width: 80%"></Input>
        </label>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "DriveDetail",
  data(){
    return{
      formItem:{
        name: 'xxx',
        account:'xxx',
        number:'xxx',
        introduction:'xxx',
      }
    }
  },
  methods: {
  arrowBack() {
      this.$emit('setCheckDrive', false);
    },
  }
}
</script>

<style scoped>

</style>
