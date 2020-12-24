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
    <Button type="primary" style="margin: 2vw 1vw 1vw 0" v-if="currentProgress===1" @click="confirmConference">
      确认信息
    </Button>
    <Button style="margin: 2vw 1vw 1vw 0" v-if="currentProgress===0" @click="quickStartNextStep">
      提前结束报名
    </Button>
    <Form label-colon :label-width="120" :model="formItem">
      <Divider/>
      <FormItem label="会议号">
        <Input type="text" v-model="formItem.number" :readonly="true" style="width: 150px"></Input>
      </FormItem>
      <FormItem label="会议名">
        <Input type="text" v-model="formItem.name" :readonly="true" style="width: 150px"></Input>
      </FormItem>
      <FormItem label="会议简介">
        <Input type="textarea" v-model="formItem.detail" :readonly="true" class="input_size"></Input>
      </FormItem>
      <FormItem label="会议地点">
        <Input type="textarea" v-model="formItem.address" :readonly="true" class="input_size"></Input>
      </FormItem>
      <FormItem label="会议时间">
        <DatePicker v-model="formItem.startTime" :readonly="true"></DatePicker>
        至
        <DatePicker v-model="formItem.endTime" :readonly="true"></DatePicker>
      </FormItem>
      <FormItem label="报名截止时间">
        <DatePicker v-model="formItem.enrollTime" :readonly="true"></DatePicker>
      </FormItem>
      <FormItem label="报名人数">
        <InputNumber v-model="formItem.applicants" :readonly="true"></InputNumber>
        <Button style="margin-left: 1vw" type="primary" @click="participantModal=true">详情</Button>
      </FormItem>

      <div v-if="formItem.progress==='ENROLLMENT'">
        <FormItem label="酒店管理">
          <Select class="input_size" v-model="formItem.hotelId" :value="formItem.hotelId" filterable>
            <Option v-for="(value, key) in hotelList" :value="key" :key="key">{{ value.name }}</Option>
          </Select>
          <Button style="margin-left: 1vw" type="primary" @click="checkHotel">详情</Button>
        </FormItem>
        <FormItem label="车队管理">
          <Select class="input_size" v-model="formItem.fleetId" :value="formItem.fleetId" filterable>
            <Option v-for="(value, key) in fleetList" :value="key" :key="key">{{ value.name }}</Option>
          </Select>
          <Button style="margin-left: 1vw" type="primary" @click="checkFleet">详情</Button>
        </FormItem>
      </div>

      <div v-else>
        <FormItem label="酒店管理">
          <Select disabled  class="input_size" v-model="formItem.hotelId" :value="formItem.hotelId" filterable>
            <Option v-for="(value, key) in hotelList" :value="key" :key="key">{{ value.name }}</Option>
          </Select>
          <Button style="margin-left: 1vw" type="primary" @click="checkHotel">详情</Button>
        </FormItem>
        <FormItem label="车队管理">
          <Select disabled class="input_size" v-model="formItem.fleetId" :value="formItem.fleetId" filterable>
            <Option v-for="(value, key) in fleetList" :value="key" :key="key">{{ value.name }}</Option>
          </Select>
          <Button style="margin-left: 1vw" type="primary" @click="checkFleet">详情</Button>
        </FormItem>
      </div>
      
    </Form>
    <Modal style="padding: 20px" width="30"
           footer-hide
           :mask-closable="false"
           v-model="quickStart">
      <div>
        <h3 style="text-align: center">您要提前结束报名吗？</h3>
        <hr style="margin: 5px"/>
        <p style="text-indent: 2em; margin-bottom: 5px">
          确认后将进入会议下一阶段，未参会者将<b>无法</b>参加该会议
        </p>
        <Button long class="button"  @click="quickConfirmConference">
          确认提前结束报名
        </Button>
      </div>
    </Modal>
    <Modal style="padding: 20px;"
           footer-hide
           width="85"
           scrollable
           :mask-closable="false"
           v-model="participantModal">
      <Participants style="height:40vw;overflow-y:auto;overflow-x:hidden;" @setCheckParticipants=setCheckParticipants
                    :participantsInfo="participantsInfo" :conferenceId="conferenceId"
                    :currentProgress="currentProgress"></Participants>
    </Modal>
    <Modal style="padding: 20px" width="40"
           footer-hide
           :mask-closable="false"
           v-model="hotelModal">
      <HotelDetail ref="hotel"></HotelDetail>
    </Modal>
    <Modal style="padding: 20px" width="40"
           footer-hide
           :mask-closable="false"
           v-model="fleetModal">
      <FleetDetail ref="fleet"></FleetDetail>
    </Modal>
  </div>
</template>
<script>

import Participants from "@/components/conference/Participants";
import HotelDetail from "@/components/conference/HotelDetail";
import FleetDetail from "@/components/conference/FleetDetail";
export default {
  name: "CreatorDetail",
  components: {Participants, HotelDetail, FleetDetail},
  data() {
    return {
      currentProgress: 0,
      quickStart:false,
      formItem: {},
      hotelList: {
        0: {
          id: '123',
          account: '',
          name: '帆船酒店',
          address: 'address',
          detail: 'detail',
          phone: ''
        },
      },
      fleetList: {
        0: {
          name: '测试车队',
          address: 'address',
          detail: 'detail',
          phone: '',
          driverAmount: 0
        },
      },
      participantsInfo: [],
      participantModal: false,
      hotelModal: false,
      fleetModal: false,
    }
  },
  props: ['conferenceId'],
  created() {
    this.loading = 2
    this.loadConferenceInfo();
    this.loadHotelInfo();
    this.loadDriverInfo();
    this.loadParticipantsInfo();
  },
  methods: {
    loadConferenceInfo() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/conference/getById`,
        data: {id: that.conferenceId},
      }).then(function (response) {
        let resData = response['data']
        that.$axios({
          method: 'post',
          url: `${that.$baseURI}/api/conference/participant/count`,
          data: {id: that.conferenceId}
        }).then(function (response) {
          that.formItem = {
            number:resData['number'],
            name: resData['name'],
            detail: resData['detail'],
            startTime: new Date(resData['startTime']),
            endTime: new Date(resData['endTime']),
            enrollTime: new Date(resData['enrollTime']),
            address: resData['address'],
            hotelId: resData['hotelId'] != null ? resData['hotelId'].toString() : null,
            fleetId: resData['fleetId'] != null ? resData['fleetId'].toString() : null,
            applicants: response['data']['amount'],
            progress: resData['progress']
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
        })
      })
    },
    loadHotelInfo() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/hotel/getAll`,
      }).then(function (response) {
        that.hotelList = {}
        response['data'].forEach(v => {
          that.hotelList[v['id']] = {
            account: v['accountId'],
            name: v['name'],
            address: v['address'],
            detail: v['detail'],
            phone: v['telephone']
          }
        });
      })
    },
    loadDriverInfo() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/fleet/getAll`,
      }).then(function (response) {
        that.fleetList = {}
        response['data'].forEach(v => {
          that.fleetList[v['id']] = {
            name: v['name'],
            address: v['address'],
            detail: v['detail'],
            phone: v['telephone'],
            driverAmount: v['driverAmount']
          }
        });
      })
    },
    loadParticipantsInfo() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/conference/participant/get`,
        data: {id: that.conferenceId}
      }).then(function (response) {
        that.participantsInfo = []
        response['data'].forEach(v => {
          let newData = {
            id: v['id'],
            name: v['name'],
            phone: v['telephone'],
            workUnit: v['workplace'],
            hotelProgress: '',
            driverProgress: '',
            account: v['accountId']
          }
          that.$axios({
            method: 'post',
            url: `${that.$baseURI}/api/conference/hotelReservation/get`,
            data: {id: that.conferenceId, userId: newData.id}
          }).then(function (response) {
            if (response['data']['hotelCheck'] === true) {
                newData.hotelProgress = 1
            } else {
              newData.hotelProgress = 0
            }
          })
          that.$axios({
            method: 'post',
            url: `${that.$baseURI}/api/conference/driverReservation/get`,
            data: {id: that.conferenceId, userId: newData.id}
          }).then(function (response) {
            if (response['data']['driverCheck'] === true) {
                newData.driverProgress = 1
            } else {
              newData.driverProgress = 0
            }
          })
          that.participantsInfo.push(newData)
        });
      })
    },
    confirmConference() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${that.$baseURI}/api/conference/confirm`,
        data: {id: that.conferenceId}
      }).then(function (response) {
        if (response['data']['success'] === true) {
          that.$Message.success("确认成功")
          setTimeout(()=>{
            that.$router.go(0)
          },300)
        } else {
          that.$Message.error(response['data']['message'])
        }
      })
    },
    quickStartNextStep(){
      this.quickStart = true
    },
    quickConfirmConference(){
      let that = this
      this.$axios({
        method: 'post',
        url: `${that.$baseURI}/api/conference/terminateEnrollment`,
        data: {id: that.conferenceId}
      }).then(function (response) {
        if(response['data']['success']===true){
          that.$Message.success("确认成功")
          that.$router.go(0)
        } else {
          that.$Message.error(response['data']['message'])
        }
      })

    },
    checkHotel() {
      if (this.formItem.hotelId != null) {
        this.$refs.hotel.loadData(this.hotelList[this.formItem.hotelId]
            , this.currentProgress)
        this.hotelModal = true
      }
    },
    checkFleet() {
      if (this.formItem.fleetId != null) {
        this.$refs.fleet.loadData(this.fleetList[this.formItem.fleetId]
            , this.currentProgress)
        this.fleetModal = true
      }
    },
    selectDriver(conferenceId, fleetId) {
      let that = this
      this.$axios({
        method: 'post',
        url: `${that.$baseURI}/api/conference/chooseFleet`,
        data: {id: conferenceId, fleetId: fleetId}
      }).then(function (response) {
        if (response['data']['success'] === true) {
          that.$Message.success("选择车队成功")
        } else {
          that.$Message.error(response['data']['message'])
        }
      })

    },
    selectHotel(conferenceId, hotelId) {
      let that = this
      this.$axios({
        method: 'post',
        url: `${that.$baseURI}/api/conference/chooseHotel`,
        data: {id: conferenceId, hotelId: hotelId}
      }).then(function (response) {
        if (response['data']['success'] === true) {
          that.$Message.success("选择酒店成功")
        } else {
          that.$Message.error(response['data']['message'])
        }
      })
    },
    setCheckParticipants(fromChild) {
      this.participantModal = fromChild;
    },
  },
  computed: {
    fleetId() {
      return this.formItem.fleetId
    },
    hotelId() {
      return this.formItem.hotelId
    }
  },
  watch: {
    fleetId() {
      this.loading--
      if (this.loading < 0) {
        this.selectDriver(this.conferenceId, this.fleetId)
      }

    },
    hotelId() {
      this.loading--
      if (this.loading < 0) {
        this.selectHotel(this.conferenceId, this.hotelId)
      }
    },
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
</style>