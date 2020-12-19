<template>
  <div>
    <a style="text-indent: 2em;" @click="arrowBack">
      <Icon type="ios-arrow-back"></Icon>
      返回</a>
    <Form hide-required-mark :model="formItem" :rules="fromValidate" label-colon :label-width="120" style="margin-top: 5%; ">
      <h2 style="position: relative;left: 300px">订单信息</h2>
      <br>
      <FormItem label="预约时间" property="reservationTime">
        <DatePicker v-model="formItem.reservationTime" style="width: 200px"></DatePicker>
      </FormItem>
      <FormItem label="接车时间" property="pickTime">
        <DatePicker v-model="formItem.pickTime" style="width: 200px"></DatePicker>
      </FormItem>
      <FormItem label="接车地点" property="pickPlace">
        <Input type="textarea" v-model="formItem.pickPlace" style="width: 300px"></Input>
      </FormItem>
      <FormItem label="车牌号" property="carNumber">
        <Input type="number" v-model="formItem.carNumber" style="width: 80px"></Input>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "OrderDetail",
  data() {
    return {
      formItem: {
        reservationTime: 'xxx',
        pickTime: 'xxx',
        pickPlace:'xxx',
        carNumber: 'xxx',
      },
      fromValidate: {
        reservationTime: [
          {
            required: true,
            message: '预约时间不能为空',
            trigger: 'blur'
          },
        ],
        pickTime: [
          {
            required: true,
            message: '接车时间不能为空',
            trigger: 'blur'
          },
        ],
        pickPlace: [
          {
            required: true,
            message: '接车地点不能为空',
            trigger: 'blur'
          }
        ],
        carNumber: [
          {
            required: true,
            message: '车牌号不能为空',
            trigger: 'blur'
          },
        ],
      }
    }
  },
  methods: {
    arrowBack() {
      this.$emit('setCheckHotel', false);
    }
  },
}

</script>

<style scoped>

</style>