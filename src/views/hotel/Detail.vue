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
        <FormItem  label="身份证号">
          {{userFormItem.identityNumber}}
        </FormItem>
        <FormItem  label="住宿时间">
          {{userFormItem.stayTimeStart}}
          至
          {{userFormItem.stayTimeEnd}}
        </FormItem>
        <FormItem  label="住宿要求">
          {{userFormItem.requirements}}
        </FormItem>
      </Form>
    </Card>
    <Card class="card_size" dis-hover title="订单信息">
      <Form  :label-width="120">
        <FormItem label="预约时间">
          {{orderInfoFormItem.Appointment}}
        </FormItem>
        <FormItem  label="入住时间">
          {{orderInfoFormItem.checkTime}}
        </FormItem>
        <FormItem  label="房间号">
          {{orderInfoFormItem.roomNumber}}
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
        identityNumber:'1231293471458972305',
        stayTimeStart:'2020-10-02',
        stayTimeEnd:'2020-12-02',
        requirements:'abc',
      },

      orderInfoFormItem:{
        Appointment:'2020-10-02',
        checkTime:'2020-12-03',
        roomNumber:'123',
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