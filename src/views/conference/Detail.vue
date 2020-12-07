<template>
  <div :style="{padding: '24px', margin: 'auto auto auto 15vw'}">
    <Button style="margin: 0 0 1vw 0" size="small" icon="ios-arrow-back" @click="$router.push('/conference/list')">返回
    </Button>
    <br>

    <p style="text-indent: 2em; font-weight: bold">会议阶段</p>
    <Divider/>
    <Steps :current="getCurret" :status="status.process">
      <Step content="报名阶段"></Step>
      <Step content="报名确认"></Step>
      <Step content="车队，酒店确认"></Step>
      <Step content="会议进行"></Step>
      <Step content="会议结束"></Step>
    </Steps>
    <div v-if="ifManage">
      <Button type="primary" style="margin: 2vw 1vw 1vw 0">确认信息</Button>
    </div>
    <Divider/>
    <div>
      <Form :model="formItem" label-colon :label-width="120">
        <FormItem label="会议名">
          <Input type="text" v-model="formItem.name" :readonly="true" class="input_size"></Input>
        </FormItem>
        <FormItem label="会议简介">
          <Input type="textarea" v-model="formItem.introduction" :readonly="true" class="input_size"></Input>
        </FormItem>
        <FormItem label="会议时间">
          <DatePicker v-model="formItem.startTime" :readonly="true"></DatePicker>
          至
          <DatePicker v-model="formItem.endTime" :readonly="true"></DatePicker>
        </FormItem>
        <FormItem label="会议地点">
          <Input type="textarea" v-model="formItem.address" :readonly="true" class="input_size"></Input>
        </FormItem>
        <div v-if="ifManage">
          <FormItem label="报名人数">
            <InputNumber v-model="formItem.applicants" :readonly="true"></InputNumber>
            <Button style="margin-left: 1vw" type="primary" @click="checkParticipants=true">详情</Button>
          </FormItem>
          <FormItem label="酒店管理">
            <Input v-model="formItem.hotelManege" :readonly="true" class="input_size"></Input>
            <Button style="margin-left: 1vw" type="primary" @click="checkHotal=true">详情</Button>
          </FormItem>
          <FormItem label="车队管理">
            <Input v-model="formItem.driveManege" :readonly="true" class="input_size"></Input>
            <Button style="margin-left: 1vw" type="primary" @click="checkDrive=true">详情</Button>
          </FormItem>
        </div>
        <div v-else-if="!ifManage">
          <FormItem label="创建人">
            <Input type="text" v-model="formItem.manageName" :readonly="true" style="width: 150px"></Input>
            <Button style="margin-left: 1vw" type="primary" @click="$router.push('/conference/list')"><Icon size="24" type="ios-mail" /></Button>
          </FormItem>
          <FormItem label="我的车次/航班">
            <Input type="text" v-model="formItem.manageName" :readonly="true" class="input_size"></Input>
          </FormItem>
          <FormItem label="到达时间">
            <Input type="text" v-model="formItem.manageName" :readonly="true" class="input_size"></Input>
          </FormItem>

        </div>

      </Form>
    </div>
    <Modal style="padding: 20px;"
           footer-hide
            width="85"
           scrollable
           :mask-closable="false"
           v-model="checkParticipants">
      <Participants style="height:40vw;overflow-y:auto;overflow-x:hidden;"    @setCheckParticipants=setCheckParticipants></Participants>
    </Modal>
    <Modal style="padding: 20px" width="45"
           footer-hide
           :mask-closable="false"
           v-model="checkHotal">
      <HotalDetail style="height: 30vw" @setCheckHotal=setCheckHotal></HotalDetail>
    </Modal>

    <Modal style="padding: 20px" width="45"
           footer-hide
           :mask-closable="false"
           v-model="checkDrive">
      <DriveDtail style="height: 30vw" @setCheckDrive=setCheckDrive></DriveDtail>
    </Modal>

  </div>
</template>

<script>
import Participants from "@/components/conference/Participants";
import DriveDtail from "@/components/conference/DriveDtail";
import HotalDetail from "@/components/conference/HotalDetail";
export default {
  name: "detail",
  components: {Participants,DriveDtail,HotalDetail},
  data() {
    return {
      ifManage :true,
      getCurret: 0,
      status: {
        wait: 'wait',
        process: 'process',
        finish: 'finish',
        error: 'error'
      },
      statusContent: '描述...',

      formItem: {
        name: 'xxx',
        manageName : 'xxx',
        introduction: '...',
        address: 'xxx',
        startTime: '2020-10-11',
        endTime: '2020-12-11',
        applicants: 10,
        hotelManege: 'xxx',
        driveManege: 'xxx',
      },
      checkParticipants: false,
      checkHotal: false,
      checkDrive:false,
    }
  },
  methods: {
    setCheckParticipants(fromChild) {
      this.checkParticipants = fromChild;
    },
    setCheckHotal(fromChild) {
      this.checkHotal = fromChild;
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
