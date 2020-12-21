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
      <FormItem label="入住时间" property="startTime">
          <DatePicker v-model="formItem.startTime" style="width: 200px"></DatePicker>
      </FormItem>
      <FormItem label="房间号" property="room">
          <Input type="number" v-model="formItem.room" style="width: 80px"></Input>
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
        startTime: 'xxx',
        room: 'xxx',
      },
      fromValidate: {
        reservationTime: [
          {
            required: true,
            message: '预约时间不能为空',
            trigger: 'blur'
          },
        ],
        startTime: [
          {
            required: true,
            message: '入住时间不能为空',
            trigger: 'blur'
          },
        ],
        room: [
          {
            required: true,
            message: '房间号不能为空',
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