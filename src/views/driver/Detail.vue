<template>
  <div>
    <Card class="card_size" dis-hover title="客户信息">
      <Form  :label-width="120">
        <FormItem  label="姓名">
          {{userFormItem.name}}
          <Button style="margin-left: 5%" type="primary"
                  @click="sendMail(userFormItem.userId)">
            <Icon type="ios-mail" size=24 />
          </Button>
        </FormItem>
        <FormItem  label="联系方式">
          {{userFormItem.telephone}}
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
          <DatePicker type="datetime" v-model="orderInfoFormItem.Appointment" format="yyyy-MM-dd: HH:mm"></DatePicker>
        </FormItem>
        <FormItem  label="接车时间">
          <DatePicker type="datetime" v-model="orderInfoFormItem.pickupTime" format="yyyy-MM-dd: HH:mm"></DatePicker>
        </FormItem>
        <FormItem  label="接车地点">
          {{orderInfoFormItem.pickupSite}}
        </FormItem>
        <FormItem  label="车牌号">
          {{orderInfoFormItem.carNumber}}
        </FormItem>
        <FormItem>
          <Button type="primary" style="margin-right: 10%" @click="confirmOrder">确认订单</Button>
        </FormItem>
      </Form>
    </Card>
    <Modal
        style="padding: 20px"
        footer-hide
        v-model="openWriteMail">
      <div style="padding: 5%">
        <WriteMail ref="fillAccount" :send-id="this.sendMailAccount" @closeSendModal="closeSendModal"></WriteMail>
      </div>
    </Modal>
  </div>
</template>

<script>
import WriteMail from "@/components/common/WriteMail";
export default {
  name: "Detail",
  components:{WriteMail},
  data(){
    return{
      id:this.$route.params.id,

      userFormItem:{
        name:this.$route.query.data.name,
        conferenceId:this.$route.query.data.conferenceId,
        userId:this.$route.query.data.userId,
        gender:'',
        telephone:this.$route.query.data.telephone,
        arriveTime: new Date(this.$route.query.data.arriveTime),
        arriveSite:this.$route.query.data.arriveSite,
        reserveTime:'',
        driverCheck:'',
        driverId:'',
        pickupTime:'',
        pickupSite:'',
        carNumber:'',
        userCheck:'',
      },
      orderInfoFormItem:{
        Appointment:'2020-10-02:12:54',
        pickupTime:'2020-12-03',
        pickupSite:'a',
        carNumber:'123',
      },
      openWriteMail:false,
      sendMailAccount: { account:'1233'},
    }
  },
  mounted() {
    this.test()
  },
  methods:{
    test(){
    },
    confirmOrder(){

    },
    sendMail(userId){
      this.sendMailAccount.account = userId;
      console.log(this.sendMailAccount.account)
      this.$refs.fillAccount.autoFillAccount()
      this.openWriteMail=true
    },
    closeSendModal(fromChild){
      this.openWriteMail=fromChild
    },
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