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
            <Input type="text" v-model="conferenceId" :readonly="true" style="width: 150px"></Input>
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
          <Button style="margin-left: 1vw" type="primary" @click="$router.push('/conference/list')">
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
        <FormItem label="行程信息">
          <div>{{ conferenceInfo.statusMessage }}</div>
        </FormItem>
      </Form>
      <Card dis-hover class="card_size" :title="driverInfo.statusMessage">
        <Form label-colon :label-width="120">
          <FormItem label="我的车次/航班">
            <Input type="text" v-model="driverInfo.tripNumber" :readonly="true"></Input>
          </FormItem>
          <FormItem label="我的到达时间" :label-width="120">
            <DatePicker type="datetime" v-model="driverInfo.arriveTime" :readonly="true"></DatePicker>
          </FormItem>
          <div v-if="driverInfo.status>=1">
            <FormItem label="接车司机" :label-width="120">
              <Input type="text" v-model="driverInfo.driverName" :readonly="true" style="width: 80px"></Input>
              <Poptip trigger="hover">
                <Tag size="large" style="margin-left: 1vw" color="primary">详情</Tag>
                <div slot="content" style="overflow: hidden">
                  账号: {{ driverInfo.driverAccount }}
                  <Divider style="margin: 10px"/>
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
                <Input type="text" v-model="driverInfo.carNumber" :readonly="true" style="width: 80px"></Input>
              </FormItem>
            </Form>
            <FormItem v-if="driverInfo.status===1">
              <Button type="primary">确认信息</Button>
            </FormItem>
          </div>
        </Form>
      </Card>
      <br>
      <Card dis-hover class="card_size" :title="hotelInfo.statusMessage">
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
              <Button type="primary">确认</Button>
            </FormItem>
          </div>
        </Form>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParticipantDetail",
  data() {
    return {
      currentProgress: 0,
      conferenceInfo: {
        name: 'xxx',
        creatorName: 'xxx',
        creatorPhone: 'xxxssssssssssssssssss',
        creatorEmail: 'xxx',
        detail: '...',
        address: 'xxx',
        startTime: '2020-10-11',
        endTime: '2020-10-11',
        enrollTime: '2020-10-12',
        enrollStatus: 0,
        statusMessage: "",
      },
      driverInfo: {
        status: 1,
        statusMessage: '行程信息: 待用户确认',
        tripNumber: 'G1',
        arriveTime: new Date(),
        driverAccount: '',
        driverName: '',
        driverPhone: '',
        pickupTime: new Date(),
        pickupSite: '',
        carNumber: ''
      },
      hotelInfo: {
        status: 1,
        statusMessage: '住宿信息: 待用户确认',
        stayStartTime: '2020-10-11',
        stayEndTime: '2020-10-11',
        hotelAccount: '',
        hotelName: '',
        hotelPhone: '',
        hotelAddress: '',
        checkinTime: '2020-10-11',
        roomNumber: '',
      }
    }
  },
  props: ['conferenceId'],
  created() {
    this.loadConferenceInfo();
    this.loadEnrollmentInfo();
    this.loadDriverInfo();
    this.loadHotelInfo();
    if (this.conferenceInfo.statusMessage === '') {
      this.conferenceInfo.statusMessage = '准备参会'
    }
  },
  methods: {
    loadConferenceInfo() {
      let that = this
      // 获取会议基本信息
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/conference/getById`,
        data: {id: that.conferenceId}
      }).then(function (response) {
        let resData = response['data']
        that.conferenceInfo = {
          name: resData['name'],
          startTime: resData['startTime'],
          endTime: resData['endTime'],
          detail: resData['detail'],
          address: resData['address'],
          enrollTime: new Date(resData['enrollTime']),
          statusMessage: ''
        }
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
        if (Date() < Date(resData['enrollTime'])) {
          that.conferenceInfo.enrollStatus = 1
        } else {
          that.conferenceInfo.enrollStatus = 0
        }
        // 获取创建者信息
        that.$axios({
          method: 'post',
          url: `${this.$baseURI}/api/user/profile/getById`,
          data: {id: resData['userId']}
        }).then(function (response) {
          let resData = response['data']
          that.conferenceInfo.creatorName = resData['name']
          that.conferenceInfo.creatorPhone = resData['telephone']
          that.conferenceInfo.creatorEmail = resData['email']
        })
      })
    },
    // 获取报名信息
    loadEnrollmentInfo() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/conference/enrollment`,
        data: {id: that.conferenceId}
      }).then(function (response) {
        let resData = response['data']
        that.driverInfo = {
          statusMessage: '行程信息: ',
          tripNumber: resData['tripNumber'],
          arriveTime: new Date(resData['arriveTime'])
        }
        that.hotelInfo = {
          statusMessage: '住宿信息: ',
          stayStartTime: new Date(resData['stayStart']),
          stayEndTime: new Date(resData['stayEnd']),
        }
      })
    },
    // 获取接车信息
    loadDriverInfo() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/conference/driverReservation`,
        data: {id: that.conferenceId}
      }).then(function (response) {
        let resData = response['data']
        if (resData['driverCheck'] === true) {
          if (resData['userCheck'] === true) {
            that.driverInfo.status = 2
            that.driverInfo.statusMessage += '用户已确认'
          } else {
            that.driverInfo.status = 1
            that.driverInfo.statusMessage += '待用户确认'
            this.conferenceInfo.statusMessage += '待确认接车信息 '
          }
          that.driverInfo.pickupTime = resData['pickupTime']
          that.driverInfo.pickupSite = resData['pickupSite']
          that.driverInfo.carNumber = resData['carNumber']
          // 获取司机信息
          that.$axios({
            method: 'post',
            url: `${this.$baseURI}/api/driver/getById`,
            data: {id: resData['driverId']}
          }).then(function (response) {
            let resData = response['data']
            that.driverInfo.driverAccount = resData['accountId']
            that.driverInfo.driverName = resData['name']
            that.driverInfo.driverPhone = resData['telephone']
          })
        } else {
          that.driverInfo.status = 0
          that.driverInfo.statusMessage += '待司机接单'
          this.conferenceInfo.statusMessage += '待司机接单 '
        }
      })
    },
    // 获取酒店信息
    loadHotelInfo() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/conference/hotelReservation`,
        data: {id: that.conferenceId}
      }).then(function (response) {
        let resData = response['data']
        if (resData['hotelCheck'] === true) {
          if (resData['userCheck'] === true) {
            that.hotelInfo.status = 2
            that.hotelInfo.statusMessage += '用户已确认'
          } else {
            that.hotelInfo.status = 1
            that.hotelInfo.statusMessage += '待用户确认'
            this.conferenceInfo.statusMessage += '待确认酒店信息 '
          }
          that.hotelInfo.checkinTime = new Date(resData['checkinTime'])
          that.hotelInfo.roomNumber = new Date(resData['roomNumber'])
          // 获取酒店信息
          that.$axios({
            method: 'post',
            url: `${this.$baseURI}/api/hotel/get`,
            data: {id: resData['hotelId']}
          }).then(function (response) {
            let resData = response['data']
            that.hotelInfo.hotelAccount = resData['accountId']
            that.hotelInfo.hotelName = resData['name']
            that.hotelInfo.hotelPhone = resData['telephone']
            that.hotelInfo.hotelAddress = resData['address']
          })
        } else {
          that.hotelInfo.status = 0
          that.hotelInfo.statusMessage += '待酒店接单'
          this.conferenceInfo.statusMessage += '待酒店接单 '
        }
      })
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
