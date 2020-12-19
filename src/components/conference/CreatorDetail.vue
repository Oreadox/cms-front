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
    <Button type="primary" style="margin: 2vw 1vw 1vw 0">确认信息</Button>
    <Divider/>
    <Form label-colon :label-width="120">
      <FormItem label="会议名">
        <Input type="text" :readonly="true" style="width: 150px"></Input>
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
      <FormItem label="报名人数">
        <InputNumber v-model="formItem.applicants" :readonly="true"></InputNumber>
        <Button style="margin-left: 1vw" type="primary" @click="checkParticipants=true">详情</Button>
      </FormItem>
      <FormItem label="酒店管理">
        <Select class="input_size" v-model="formItem.hotelId">
          <Option v-for="(value, key) in hotelList" :value="key" :key="key">{{ value.name }}</Option>
        </Select>
        <Button style="margin-left: 1vw" type="primary" @click="checkHotel=true">详情</Button>
      </FormItem>
      <FormItem label="车队管理">
        <Select class="input_size" v-model="formItem.fleetId">
          <Option v-for="(value, key) in fleetList" :value="key" :key="key">{{ value.name }}</Option>
        </Select>
        <Button style="margin-left: 1vw" type="primary" @click="checkFleet=true">详情</Button>
      </FormItem>
    </Form>
    <Modal style="padding: 20px;"
           footer-hide
           width="85"
           scrollable
           :mask-closable="false"
           v-model="checkParticipants">
      <Participants style="height:40vw;overflow-y:auto;overflow-x:hidden;"
                    @setCheckParticipants=setCheckParticipants></Participants>
    </Modal>
    <Modal style="padding: 20px" width="45"
           footer-hide
           :mask-closable="false"
           v-model="checkHotel">
      <HotelDetail style="height: 30vw" @setCheckHotel=setCheckHotel
                   :hotelId="formItem.hotelId" :hotelData="hotelList[formItem.hotelId]"></HotelDetail>
    </Modal>
    <Modal style="padding: 20px" width="45"
           footer-hide
           :mask-closable="false"
           v-model="checkFleet">
      <FleetDetail style="height: 30vw" @setCheckFleet=setCheckFleet
                   :fleetId="formItem.fleetId" :fleetData="fleetList[formItem.fleetId]"></FleetDetail>
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
      formItem: {
        name: 'xxx',
        detail: '...',
        startTime: '2020-10-11',
        endTime: '2020-12-11',
        address: 'xxx',
        applicants: 10,     //
        hotelId: 0,
        fleetId: 0,
      },
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
      checkParticipants: false,
      checkHotel: false,
      checkFleet: false,
    }
  },
  props: ['conferenceId'],
  created() {
    this.loadConferenceInfo();
    this.loadHotelInfo();
    this.loadDriverInfo();
  },
  methods: {
    loadConferenceInfo() {
      var that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/conference/getById`,
        data: {id: that.conferenceId}
      }).then(function (response) {
        var resData = response['data']
        that.formItem = {
          name: resData['name'],
          detail: resData['resData'],
          startTime: new Date(resData['startTime']),
          endTime: new Date(resData['endTime']),
          address: resData['address'],
          hotelId: resData['hotelId'],
          fleetId: resData['fleetId'],
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
        that.$axios({
          method: 'post',
          url: `${this.$baseURI}/api/conference/participant/count`,
          data: {id: that.conferenceId}
        }).then(function (response) {
              that.formItem.applicants = response['data']['amount']
        })
      })
    },
    loadHotelInfo() {
      var that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/hotel/getAll`,
      }).then(function (response) {
        that.hotelList = []
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
      var that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/fleet/getAll`,
      }).then(function (response) {
        that.fleetList = []
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
    setCheckParticipants(fromChild) {
      this.checkParticipants = fromChild;
    },
    setCheckHotel(fromChild) {
      this.checkHotel = fromChild;
    },
    setCheckFleet(fromChild) {
      this.checkFleet = fromChild;
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