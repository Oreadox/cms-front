<template>
  <div>
    <a style="text-indent: 2em;" @click="arrowBack">
      <Icon type="ios-arrow-back"></Icon>
      返回</a>
    <Form :model="formItem" label-colon :label-width="120" style="margin-top: 5%; ">
      <h2 style="position: relative;left: 300px">客户信息</h2>
      <br>
      <FormItem label="姓名">
        <label>
          <Input type="text" v-model="formItem.name" :readonly="true" style="width: 80px"></Input>
        </label>
      </FormItem>
      <FormItem label="联系方式">
        <label>
          <Input type="text"  v-model="formItem.contact" :readonly="true"  style="width: 200px"></Input>
        </label>
      </FormItem>
      <FormItem label="身份证号">
        <label>
          <Input type="number" v-model="formItem.idCard" :readonly="true" style="width: 200px"></Input>
        </label>
      </FormItem>
      <FormItem label="住宿时间">
        <label>
          <DatePicker v-model="formItem.startTime" :readonly="true" style="width: 200px"></DatePicker>
          至
          <DatePicker v-model="formItem.endTime" :readonly="true" style="width: 200px"></DatePicker>
        </label>
      </FormItem>
      <FormItem label="住宿需求">
        <label>
          <Input type="textarea" v-model="formItem.stayRequirement" :readonly="true" style="width: 500px;height: 500px"></Input>
        </label>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  name: "CustomerMessage",
  data(){
    return{
      formItem:{
        name: 'xxx',
        contact:'xxx',
        idCard:'xxx',
        startTime:'xxx',
        endTime:'xxx',
        stayRequirement:'xxx',
      }
    }
  },
  methods: {
    arrowBack() {
      this.$emit('setCheckHotel', false);
    }
  }
}
</script>