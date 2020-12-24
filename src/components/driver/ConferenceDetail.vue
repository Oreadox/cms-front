<template>
  <div style="padding: 0">
    <Card class="card_size" dis-hover title="客户信息" style="width: 100%">
      <Form :label-width="120">
        <FormItem label="姓名">
          <Input v-model="formItem.name" style="width: 150px" disabled></Input>
          <Button style="margin-left: 5%" type="primary"
                  @click="sendMail(formItem.accountId)">
            <Icon size=24 type="ios-mail"/>
          </Button>
        </FormItem>
        <FormItem label="联系方式">
          <Input v-model="formItem.telephone" style="width: 80%" disabled></Input>
        </FormItem>
        <FormItem label="到达时间">
          <DatePicker v-model="formItem.arriveTime" disabled></DatePicker>
        </FormItem>
        <FormItem label="到达地点">
          <Input v-model="formItem.arriveSite" style="width: 80%" disabled></Input>
        </FormItem>
        <FormItem label="预约时间">
          <DatePicker v-model="formItem.reserveTime" type="datetime" disabled></DatePicker>
        </FormItem>
      </Form>
    </Card>
    <Card class="card_size" dis-hover title="订单信息" style="width: 100%">
      <div v-if="checked===false">
        <Form hide-required-mark ref="formItem" :model="formItem" :rules="fromValidate" :label-width="80">
          <FormItem label="接车时间" prop="pickupTime">
            <DatePicker v-model="formItem.pickupTime" type="datetime" :options="pickerControl"></DatePicker>
          </FormItem>
          <FormItem label="接车地点" prop="pickupSite">
            <Input type="text" v-model="formItem.pickupSite"></Input>
          </FormItem>
          <FormItem label="车牌号" prop="carNumber">
            <Input v-model="formItem.carNumber" style="width: 120px"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" style="margin-right: 10%" @click="checkOrder('formItem')">确认订单</Button>
          </FormItem>
        </Form>
      </div>
      <div v-else>
        <Form hide-required-mark :label-width="120">
          <FormItem label="接车时间" prop="pickupTime">
            <DatePicker v-model="formItem.pickupTime" type="datetime" :options="pickerControl" disabled></DatePicker>
          </FormItem>
          <FormItem label="接车地点" prop="pickupSite">
            <Input v-model="formItem.pickupSite" disabled></Input>
          </FormItem>
          <FormItem label="车牌号" prop="carNumber" >
            <Input v-model="formItem.carNumber" style="width: 120px" disabled></Input>
          </FormItem>
        </Form>
      </div>
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
  name: "ConferenceDetail",
  components: {WriteMail},
  data() {
    const compareTime = (time) => {
      return time.getTime() < new Date(this.formItem.arriveTime).getTime() - 2.592e8 ||
          time.getTime() > new Date(this.formItem.arriveTime).getTime() + 2.592e8
    }
    return {
      formItem: {
        accountId:'',
        name: '',
        conferenceId: '',
        userId: '',
        gender: '',
        telephone: '',
        arriveTime: '',
        arriveSite: '',
        reserveTime: '',
        driverCheck: '',
        driverId: '',
        pickupTime: '',
        pickupSite: '',
        carNumber: '',
        userCheck: '',
      },
      checked: false,
      pickerControl: {
        disabledDate(time) {
          return compareTime(time)
        }
      },
      fromValidate: {
        pickupTime: [
          {required: true, type: 'date', message: '接车时间不能为空', trigger: 'blur'},
        ],
        pickupSite: [
          {required: true,  message: '接车地点不能为空', trigger: 'blur'},
        ],
        carNumber: [
          {required: true, message: '车牌号不能为空', trigger: 'blur'},
        ],
      },
      openWriteMail: false,
      sendMailAccount: {account: ''},
    }
  },
  methods: {
    setData(conferenceData, checked) {
      this.formItem.accountId = conferenceData.accountId
      this.formItem.name = conferenceData.name
      this.formItem.conferenceId = conferenceData.conferenceId
      this.formItem.userId = conferenceData.userId
      this.formItem.gender = conferenceData.gender
      this.formItem.telephone = conferenceData.telephone
      this.formItem.arriveTime = new Date(conferenceData.arriveTime)
      this.formItem.arriveSite = conferenceData.arriveSite
      this.formItem.reserveTime = new Date(conferenceData.reserveTime)
      this.formItem.driverCheck = conferenceData.driverCheck
      this.formItem.driverId = conferenceData.driverId
      this.formItem.pickupTime = new Date(conferenceData.arriveTime)
      this.formItem.pickupSite = conferenceData.pickupSite
      this.formItem.carNumber = conferenceData.carNumber
      this.checked = checked
    },
    checkOrder(name) {
      var that = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(that.formItem)
          var data = {
            conferenceId: that.formItem.conferenceId,
            userId: that.formItem.userId,
            pickupTime: that.formItem.pickupTime.getTime(),
            pickupSite: that.formItem.pickupSite,
            carNumber: that.formItem.carNumber
          }
          console.log('3')
          that.$axios({
            method: 'post',
            url: `${that.$baseURI}/api/driver/reservation/check`,
            data: data
          }).then(function (response) {
            if (response['data']['success'] === true) {
              that.$Message.success("确认成功");
              // that.$emit('gotoReservation', false);
              setTimeout(()=>{
                that.$router.go(0)
              },300)
            } else {
              that.$Message.error(response['data']['message'])
            }
          })
        }
      })
    },
    sendMail(accountId) {
      this.sendMailAccount.account = accountId;
      console.log(this.sendMailAccount.account)
      this.$refs.fillAccount.autoFillAccount()
      this.openWriteMail = true
    },
    closeSendModal(fromChild) {
      this.openWriteMail = fromChild
    },
  }
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