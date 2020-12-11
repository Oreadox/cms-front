<template>
  <div>
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
    <Divider/>

  <Button type="primary" style="margin: 2vw 1vw 1vw 0">确认信息</Button>

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
</template>

<script>


export default {
  name: "CreaterDtail",
  data(){
    return{
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

</style>