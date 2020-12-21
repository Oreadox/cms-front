<template>
  <div>
    <Card class="card_size" dis-hover title="客户信息">
      <Form  :label-width="120">
        <FormItem  label="姓名">
          {{userFormItem.name}}
          <Button  style="margin-left: 5%" type="primary"><Icon type="ios-mail" size=24 /></Button>
        </FormItem>
        <FormItem  label="联系方式">
          {{userFormItem.contact}}
        </FormItem>
        <FormItem  label="到达时间">
          {{userFormItem.arriveTime}}
        </FormItem>
        <FormItem  label="到达地点">
          {{userFormItem.arriveSite}}
        </FormItem>
      </Form>
    </Card>
    <Card class="card_size" dis-hover title="订单信息">
      <Form  :label-width="120">
        <FormItem label="预约时间">
          {{orderInfoFormItem.Appointment}}
        </FormItem>
        <FormItem  label="接车时间">
          {{orderInfoFormItem.pickupTime}}
        </FormItem>
        <FormItem  label="接车地点">
          {{orderInfoFormItem.pickupSite}}
        </FormItem>
        <FormItem  label="车牌号">
          {{orderInfoFormItem.carNumber}}
        </FormItem>
        <FormItem>
          <Button type="primary" style="margin-right: 10%">确认订单</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data(){
    return{
      id:this.$route.params.id,

      userFormItem:{
        name:'xxx',
        contact:'xxx',
        arriveTime:'2020-10-02',
        arriveSite: 'a'
      },

      orderInfoFormItem:{
        Appointment:'2020-10-02',
        pickupTime:'2020-12-03',
        pickupSite:'a',
        carNumber:'123',
      }
    }
  },
  mounted() {
    this.test()
  },
  methods:{
    test(){
      console.log(this.id)
    }
  },
}
</script>

<style scoped>
.card_size {
  width: 600px;
}

@media screen and (max-width: 800px) {
  .card_size {
    width: 100%;
  }
}
</style>