<template>
  <div>
    <Button style="margin: 0 0 1vw 0" size="small" icon="ios-arrow-back" @click="$router.push('/conference/list')">返回
    </Button>
    <br>
    <p style="text-indent: 2em; font-weight: bold">会议阶段</p>
    <Divider/>
    <Steps :current="currentProgress">
      <Step content="报名阶段"></Step>
      <Step content="报名确认"></Step>
      <Step content="车队，酒店确认"></Step>
      <Step content="会议进行"></Step>
      <Step content="会议结束"></Step>
    </Steps>
    <Divider/>
    <div>
      <Form :model="conferenceInfo" label-colon :label-width="120">
        <Form inline label-colon :label-width="120">
          <FormItem label="会议名">
            <Input type="text" v-model="conferenceInfo.name" :readonly="true" style="width: 150px"></Input>
          </FormItem>
          <FormItem label="会议号">
            <Input type="text" v-model="conferenceInfo.conferenceIdOfNumber" :readonly="true" style="width: 150px"></Input>
          </FormItem>
        </Form>
        <FormItem label="创建人">
          <Input type="text" v-model="conferenceInfo.creatorName" :readonly="true" style="width: 150px"></Input>
          <Poptip trigger="hover">
            <Tag size="large" style="margin-left: 1vw" color="primary">详情</Tag>
            <div slot="content" style="overflow: hidden">
              手机号: {{ conferenceInfo.creatorPhone }}
              <Divider style="margin: 10px"/>
              邮箱：{{ conferenceInfo.creatorEmail }}
            </div>
          </Poptip>
          <Button style="margin-left: 1vw" type="primary" @click="sendMail()">
            <Icon size="24" type="ios-mail"/>
          </Button>
        </FormItem>
        <FormItem label="会议简介">
          <Input type="textarea" v-model="conferenceInfo.detail" :readonly="true" class="input_size"></Input>
        </FormItem>
        <FormItem label="会议时间">
          <DatePicker v-model="conferenceInfo.startTime" :readonly="true"></DatePicker>
          至
          <DatePicker v-model="conferenceInfo.endTime" :readonly="true"></DatePicker>
        </FormItem>
        <FormItem label="会议地点">
          <Input type="textarea" v-model="conferenceInfo.address" :readonly="true" class="input_size"></Input>
        </FormItem>
        <FormItem label="报名截止时间">
          <DatePicker v-model="conferenceInfo.enrollTime" :readonly="true"></DatePicker>
          <Tag size="large" style="margin-left: 1vw" color="primary" v-if="conferenceInfo.enrollStatus===1">
            进行中
          </Tag>
          <Tag size="large" style="margin-left: 1vw" v-else>
            已结束
          </Tag>
        </FormItem>
      </Form>
      <Modal
          style="padding: 20px"
          footer-hide
          v-model="openWriteMail">
        <div style="padding: 5%">
        <WriteMail ref="fillAccount" :send-id="sendMailAccount" @closeSendModal="closeSendModal"></WriteMail>
        </div>
      </Modal>
      <Card dis-hover class="card_size" :title="'行程信息：'+driverInfo.statusMessage">
        <Form label-colon :label-width="120">
          <FormItem label="我的车次/航班">
            <Input type="text" v-model="driverInfo.tripNumber" :readonly="true"></Input>
          </FormItem>
          <FormItem label="我的到达时间" :label-width="120">
            <DatePicker type="datetime" v-model="driverInfo.arriveTime" :readonly="true"></DatePicker>
          </FormItem>
          <div v-if="driverInfo.status>=1">
            <FormItem label="接车司机" :label-width="120">
              <Input type="text" v-model="driverInfo.driverName" :readonly="true" style="width: 120px"></Input>
              <Poptip trigger="hover"  placement="right">
                <Tag size="large" style="margin-left: 1vw" color="primary">详情</Tag>
                <div slot="content" style="overflow: hidden">
                  手机号: {{ driverInfo.driverPhone }}
                </div>
              </Poptip>
            </FormItem>
            <FormItem label="接车时间" :label-width="120">
              <DatePicker type="datetime" v-model="driverInfo.pickupTime" :readonly="true"></DatePicker>
            </FormItem>
            <Form label-colon :label-width="120">
              <FormItem label="接车地点" :label-width="120">
                <Input type="text" v-model="driverInfo.pickupSite" :readonly="true"></Input>
              </FormItem>
              <FormItem label="车牌号" :label-width="120">
                <Input type="text" v-model="driverInfo.carNumber" :readonly="true" style="width: 120px"></Input>
              </FormItem>
            </Form>
            <FormItem v-if="driverInfo.status===1">
              <Button type="primary" @click="confirmDriver">确认接车</Button>
            </FormItem>
          </div>
        </Form>
      </Card>
      <br>
      <Card dis-hover class="card_size" :title="'住宿信息:'+ hotelInfo.statusMessage">
        <Form label-colon :label-width="120">
          <FormItem label="住宿时间" inline>
            <DatePicker v-model="hotelInfo.stayStartTime" :readonly="true"></DatePicker>
            <br>至<br>
            <DatePicker v-model="hotelInfo.stayEndTime" :readonly="true"></DatePicker>
          </FormItem>
          <div v-if="hotelInfo.status>=1">
            <FormItem label="住宿酒店" :label-width="120">
              <Input type="text" v-model="hotelInfo.hotelName" :readonly="true" style="width: 75%"></Input>
              <Poptip trigger="hover">
                <Tag size="large" style="margin-left: 1vw" color="primary">详情</Tag>
                <div slot="content" style="overflow: hidden">
                  账号: {{ hotelInfo.hotelAccount }}
                  <Divider style="margin: 10px"/>
                  电话: {{ hotelInfo.hotelPhone }}
                  <Divider style="margin: 10px"/>
                  地址: {{ hotelInfo.hotelAddress }}
                </div>
              </Poptip>
            </FormItem>
            <FormItem label="入住时间" inline>
              <DatePicker v-model="hotelInfo.checkinTime" :readonly="true"></DatePicker>
            </FormItem>
            <FormItem label="房间号">
              <Input type="text" v-model="hotelInfo.roomNumber" :readonly="true" style="width: 50px"></Input>
            </FormItem>
            <FormItem v-if="hotelInfo.status===1">
              <Button type="primary" @click="confirmHotel">确认入住</Button>
            </FormItem>
          </div>
        </Form>
      </Card>
    </div>
  </div>
</template>

<script>
import WriteMail from "@/components/common/WriteMail";
export default {
  name: "ParticipantDetail",
  components:{WriteMail},
  data() {
    return {
      currentProgress: 0,
      conferenceInfo: {
        name: '',
        creatorName: '',
        creatorPhone: '',
        creatorEmail: '',
        conferenceIdOfNumber:'',
        detail: '',
        address: '',
        startTime: '',
        endTime: '',
        enrollTime: '',
        enrollStatus: 0,
      },
      sendMailAccount: { account:'1233'},
      hotelInfo: {
        status: 1,
        statusMessage: '住宿信息: 待用户确认',
        stayStartTime: '',
        stayEndTime: '',
        hotelAccount: '',
        hotelName: '',
        hotelPhone: '',
        hotelAddress: '',
        checkinTime: '',
        roomNumber: '',
      },
      driverInfo: {
        status: 1,
        statusMessage: '行程信息: 待用户确认',
        tripNumber: '',
        arriveTime: new Date(),
        driverAccount: '',
        driverName: '',
        driverPhone: '',
        pickupTime: new Date(),
        pickupSite: '',
        carNumber: ''
      },
      openWriteMail: false
    }
  },
  props: ['conferenceId'],
  created() {

  },
  mounted() {
    this.loadConferenceInfo();
    this.loadEnrollmentInfo();
    this.loadDriverInfo();
    this.loadHotelInfo();
  },
  methods: {
    loadConferenceInfo() {
      let that = this
      // 获取会议基本信息
      this.$axios({
        method: 'post',
        url: `${that.$baseURI}/api/conference/getById`,
        data: {id: that.conferenceId}
      }).then(function (response) {
        let resData = response['data']
        that.conferenceInfo.name = resData['name']
        that.conferenceInfo.startTime = resData['startTime']
        that.conferenceInfo.endTime = resData['endTime']
        that.conferenceInfo.detail = resData['detail']
        that.conferenceInfo.address = resData['address']
        that.conferenceInfo.enrollTime = new Date(resData['enrollTime'])
        that.conferenceInfo.conferenceIdOfNumber = resData['number']
        switch (resData['progress']) {
          case "ENROLLMENT":
            that.currentProgress = 0;
            break;
          case "OWNER_CONFIRM":
            that.currentProgress = 1;
            break;
          case "RESERVATION_CONFIRM":
            that.currentProgress = 2;
            break;
          case "READY":
            that.currentProgress = 3;
            break;
          case "ENDED":
            that.currentProgress = 4;
            break;
        }
        if (that.conferenceInfo.enrollStatus === 'ENROLLMENT') {
          that.conferenceInfo.enrollStatus = 1
        } else {
          that.conferenceInfo.enrollStatus = 0
        }
        // 获取创建者信息
        that.$axios({
          method: 'post',
          url: `${that.$baseURI}/api/user/profile/getById`,
          data: {id: resData['userId']}
        }).then(function (response) {
          let resData2 = response['data']
          that.conferenceInfo.creatorName = resData2['name']
          that.conferenceInfo.creatorPhone = resData2['telephone']
          that.conferenceInfo.creatorEmail = resData2['email']
          that.sendMailAccount.account = resData2['accountId']
          that.conferenceInfo.enrollStatus = resData2['progress']
        })
      })
    },
    // 获取报名信息
    loadEnrollmentInfo() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${that.$baseURI}/api/conference/enrollment`,
        data: {id: that.conferenceId}
      }).then(function (response) {
        let resData = response['data']
        that.driverInfo.tripNumber = resData['tripNumber']
        that.driverInfo.arriveTime = new Date(resData['arriveTime'])

        that.hotelInfo.stayStartTime= new Date(resData['stayStart'])
        that.hotelInfo.stayEndTime= new Date(resData['stayEnd'])
      })
    },

    // 获取接车信息
    loadDriverInfo() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${that.$baseURI}/api/conference/driverReservation`,
        data: {id: that.conferenceId}
      }).then(function (response) {
        let resData = response['data']
        if (resData['driverCheck'] === true) {
          that.driverInfo.status = 1
          that.driverInfo.statusMessage = '司机已确认'
          that.driverInfo.pickupTime = resData['pickupTime']
          that.driverInfo.arriveTime = resData['reserveTime']
          that.driverInfo.pickupSite = resData['pickupSite']
          that.driverInfo.carNumber = resData['carNumber']
          // 获取司机信息
          that.$axios({
            method: 'post',
            url: `${that.$baseURI}/api/driver/getById`,
            data: {id: resData['driverId']}
          }).then(function (response) {
            let resData2 = response['data']
            that.driverInfo.driverAccount = resData2['accountId']
            that.driverInfo.driverName = resData2['name']
            that.driverInfo.driverPhone = resData2['telephone']
          })
        } else {
          that.driverInfo.status = 0
          that.driverInfo.statusMessage = '待司机接单'
        }
      })
    },
    // 获取酒店信息
    loadHotelInfo() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${that.$baseURI}/api/conference/hotelReservation`,
        data: {id: that.conferenceId}
      }).then(function (response) {
        let resData = response['data']
        if (resData['hotelCheck'] === true) {
          that.hotelInfo.status = 1
          that.hotelInfo.statusMessage = '酒店已确认'

          that.hotelInfo.checkinTime = new Date(resData['checkinTime'])
          that.hotelInfo.roomNumber = (resData['roomNumber'])===null?'':resData['roomNumber']
          // 获取酒店信息
          that.$axios({
            method: 'post',
            url: `${that.$baseURI}/api/hotel/get`,
            data: {id: resData['hotelId']}
          }).then(function (response) {
            let resData2 = response['data']
            that.hotelInfo.hotelAccount = resData2['accountId']
            that.hotelInfo.hotelName = resData2['name']
            that.hotelInfo.hotelPhone = resData2['telephone']
            that.hotelInfo.hotelAddress = resData2['address']
          })
        } else {
          that.hotelInfo.status = 0
          that.hotelInfo.statusMessage = '待酒店接单'
        }
      })
    },
    confirmDriver(){
      let that = this
      this.$axios({
        method: 'post',
        url: `${that.$baseURI}/api/conference/driverReservation/check`,
        data: {id: this.conferenceId}
      }).then(function (response) {
        if(response['data']['success']===true){
          that.$Message.success('确认成功')
          setTimeout(()=>{
            that.$router.go(0)
          },500)
        } else {
          that.$Message.error(response['data']['message'])
        }
      })
    },
    confirmHotel(){
      let that = this
      this.$axios({
        method: 'post',
        url: `${that.$baseURI}/api/conference/hotelReservation/check`,
        data: {id: this.conferenceId}
      }).then(function (response) {
        if(response['data']['success']===true){
          that.$Message.success('确认成功')
          setTimeout(()=>{
            that.$router.go(0)
          },500)
        } else {
          that.$Message.error(response['data']['message'])
        }
      })
    },
    closeSendModal(fromChild){
      this.openWriteMail=fromChild
    },
    sendMail(){
      console.log(this.sendMailAccount.account);
      this.$refs.fillAccount.autoFillAccount()
      this.openWriteMail=true
    }
  }
}
</script>

<style scoped>
.input_size {
  width: 440px;
}

@media screen and (max-width: 800px) {
  .input_size {
    width: 90%;
  }
}

.card_size {
  width: 580px;
}

@media screen and (max-width: 800px) {
  .card_size {
    width: 90%;
  }
}
</style>
