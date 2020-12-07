<template>
  <div>
    <a style="text-indent: 2em;" @click="arrowBack">
      <Icon type="ios-arrow-back"></Icon>
      返回</a>
    <Form :model="formItem" label-colon :label-width="120" style="margin-top: 5%; ">
      <FormItem label="名称">
        <label>
          <Input type="text" v-model="formItem.name" :readonly="true" style="width: 80%"></Input>
        </label>
      </FormItem>
      <FormItem label="账号">
        <label>
          <Input type="text" v-model="formItem.account" :readonly="true" style="width: 80%"></Input>
        </label>
      </FormItem>
      <FormItem label="联系方式">
        <label>
          <Input type="text"  v-model="formItem.contact" :readonly="true"  style="width: 60%"></Input>
          <Button style="margin-left: 1vw" type="primary" @click="$router.push('/conference/list')"><Icon size="24" type="ios-mail" /></Button>
        </label>
      </FormItem>
      <FormItem label="地址">
        <label>
          <Input type="textarea" v-model="formItem.address" :readonly="true" style="width: 80%"></Input>
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
  name: "otalDetail",
  data(){
    return{
      formItem:{
        name: 'xxx',
        account:'xxx',
        contact:'xxx',
        address:'xxx',
        introduction:'xxx',
      }
    }
  },
  methods: {
    arrowBack() {
      this.$emit('setCheckHotal', false);
    }
  }

}

</script>

<style scoped>

</style>
