<template>
  <div>
    <Button style="margin: 0 0 1vw 0" size="small" icon="ios-arrow-back" @click="$router.push('/conference/list')">返回
    </Button>
    <br>

    <p style="text-indent: 2em; font-weight: bold">会议阶段</p>
    <Divider/>
    <Steps :current="getCurrent" :status="status.process">
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
        <Input type="textarea" v-model="formItem.introduction" :readonly="true" class="input_size"></Input>
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
        <Select class="input_size">
          <Option v-for="item in hotelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Button style="margin-left: 1vw" type="primary" @click="checkHotel=true">详情</Button>
      </FormItem>
      <FormItem label="车队管理">
        <Select class="input_size">
          <Option v-for="item in driveList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Button style="margin-left: 1vw" type="primary" @click="checkDrive=true">详情</Button>
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
      <HotelDetail style="height: 30vw" @setCheckHotel=setCheckHotel></HotelDetail>
    </Modal>

    <Modal style="padding: 20px" width="45"
           footer-hide
           :mask-closable="false"
           v-model="checkDrive">
      <DriveDetail style="height: 30vw" @setCheckDrive=setCheckDrive></DriveDetail>
    </Modal>
  </div>
</template>
<script>

import Participants from "@/components/conference/Participants";
import HotelDetail from "@/components/conference/HotelDetail";
import DriveDetail from "@/components/conference/DriveDetail";

export default {
  name: "CreatorDetail",
  components: {Participants, HotelDetail, DriveDetail},
  data() {
    return {
      getCurrent: 0,
      status: {
        wait: 'wait',
        process: 'process',
        finish: 'finish',
        error: 'error'
      },
      statusContent: '描述...',
      formItem: {
        name: 'xxx',
        introduction: '...',
        startTime: '2020-10-11',
        endTime: '2020-12-11',
        address: 'xxx',
        applicants: 10,
      },
      hotelList: [
        {
          value: '帆船酒店',
          label: '帆船酒店'
        },
      ],
      driveList: [
        {
          value: '滴滴出租',
          label: '滴滴出租'
        },
      ],
      checkParticipants: false,
      checkHotel: false,
      checkDrive: false,

    }
  },
  methods: {
    setCheckParticipants(fromChild) {
      this.checkParticipants = fromChild;
    },
    setCheckHotel(fromChild) {
      this.checkHotel = fromChild;
    },
    setCheckDrive(fromChild) {
      this.checkDrive = fromChild;
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