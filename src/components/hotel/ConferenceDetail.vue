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
        <FormItem label="身份证号">
          <Input v-model="formItem.residentIdNumber" style="width: 80%" disabled></Input>
        </FormItem>
        <FormItem label="住宿时间">
          <DatePicker v-model="formItem.stayStart" disabled></DatePicker>
          至
          <DatePicker v-model="formItem.stayEnd" disabled></DatePicker>
        </FormItem>
        <FormItem label="住宿要求">
          <Input v-model="formItem.stayNeeds" type="textarea" style="width: 80%" disabled></Input>
        </FormItem>
        <FormItem label="预约时间">
          <DatePicker v-model="formItem.reserveTime" type="datetime" disabled></DatePicker>
        </FormItem>
      </Form>
    </Card>
    <Card class="card_size" dis-hover title="订单信息" style="width: 100%">
      <div v-if="checked===false">
        <Form hide-required-mark :label-width="120" :rules="fromValidate" ref="formItem" :model="formItem">
          <FormItem label="入住时间" prop="checkinTime">
            <DatePicker v-model="formItem.checkinTime" type="datetime" :options="pickerControl" ></DatePicker>
          </FormItem>
          <FormItem label="房间号" prop="roomNumber">
            <Input v-model="formItem.roomNumber" style="width: 80px"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" style="margin-right: 10%" @click="checkOrder('formItem')">确认订单</Button>
          </FormItem>
        </Form>
      </div>
      <div v-else>
        <Form hide-required-mark :label-width="120">
          <FormItem label="入住时间">
            <DatePicker v-model="formItem.checkinTime" type="datetime" disabled></DatePicker>
          </FormItem>
          <FormItem label="房间号">
            <Input v-model="formItem.roomNumber" style="width: 80px" disabled></Input>
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
      return time.getTime() < new Date(this.formItem.stayStart).getTime() - 2.592e8 ||
          time.getTime() > new Date(this.formItem.stayStart).getTime() + 2.592e8
    }
    return {
      formItem: {
        accountId:'',
        conferenceId: '',
        userId: '',
        name: '',
        residentIdNumber: '',
        telephone: '',
        stayStart: '',
        stayEnd: '',
        stayNeeds: '',
        reserveTime: '',
        checkinTime: '',
        roomNumber: '',
      },
      checked: false,
      pickerControl: {
        disabledDate(time) {
          return compareTime(time)
        }
      },
      fromValidate: {
        checkinTime: [
          {required: true, type: 'date', message: '入住时间不能为空', trigger: 'change'},
        ],
        roomNumber: [
          {required: true, message: '房间号不能为空', trigger: 'blur'},
        ],
      },
      openWriteMail: false,
      sendMailAccount: {account: ''},
    }
  },
  methods: {
    setData(conferenceData, checked) {
      this.formItem.accountId = conferenceData.accountId
      this.formItem.conferenceId = conferenceData.conferenceId
      this.formItem.userId = conferenceData.userId
      this.formItem.name = conferenceData.name
      this.formItem.residentIdNumber = conferenceData.residentIdNumber
      this.formItem.telephone = conferenceData.telephone
      this.formItem.stayStart = new Date(conferenceData.stayStart)
      this.formItem.stayEnd = new Date(conferenceData.stayEnd)
      this.formItem.stayNeeds = conferenceData.stayNeeds
      this.formItem.reserveTime = new Date(conferenceData.reserveTime)
      this.formItem.checkinTime = conferenceData.checkinTime === '' ? '' : new Date(conferenceData.checkinTime)
      this.formItem.roomNumber = conferenceData.roomNumber
      this.checked = checked
    },
    checkOrder(name) {
      var that = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          let data = {
            conferenceId: that.formItem.conferenceId,
            userId: that.formItem.userId,
            checkinTime: that.formItem.checkinTime.getTime(),
            roomNumber: that.formItem.roomNumber
          }
          this.$axios({
            method: 'post',
            url: `${this.$baseURI}/api/hotel/reservation/check`,
            data: data
          }).then(function (response) {
            if (response['data']['success'] === true) {
              that.$Message.success("确认成功");
              // this.$emit('gotoReservation', false);
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