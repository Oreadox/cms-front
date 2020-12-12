<template>
  <div>
    <Button style="margin: 0 0 1vw 0" size="small" icon="ios-arrow-back" @click="$router.push('/conference/list')">返回</Button>
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
    <Divider/>
    <div>
      <Form :model="formItem" label-colon :label-width="120">
        <Form inline label-colon :label-width="120">
          <FormItem label="会议名">
            <Input type="text" v-model="formItem.name" :readonly="true" style="width: 150px"></Input>
          </FormItem>
          <FormItem label="会议号">
            <Input type="text" v-model="formItem.name" :readonly="true" style="width: 150px"></Input>
          </FormItem>
        </Form>
          <FormItem label="创建人">
            <Input type="text" v-model="formItem.managerName" :readonly="true" style="width: 150px"></Input>
            <Poptip trigger="hover">
              <Tag size="large" style="margin-left: 1vw" color="primary">详情</Tag>
              <div slot="content">
                手机号:
              <Divider/>
                邮箱：
              </div>
            </Poptip>
            <Button style="margin-left: 1vw" type="primary" @click="$router.push('/conference/list')"><Icon size="24" type="ios-mail" /></Button>
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
        <FormItem label="报名截止时间">
          <DatePicker v-model="formItem.startTime" :readonly="true"></DatePicker>
          <Tag size="large" style="margin-left: 1vw" color="primary">
            进行中
          </Tag>
        </FormItem>
      </Form>
      <Form  label-colon :label-width="120">
        <FormItem label="行程信息"><div>等待司机接单</div></FormItem>
          <Card dis-hover class="card_size" title="行程信息: 等待司机接单">
            <FormItem label="我的车次/航班" >
              <Input type="text"  :readonly="true"></Input>
            </FormItem>
            <FormItem label="我的到达时间" :label-width="120" >
              <Input type="text"  :readonly="true"></Input>
            </FormItem>
            <FormItem label="接车司机" :label-width="120" >
              <Input type="text"  :readonly="true" style="width: 80px"></Input>
              <Poptip trigger="hover">
                <Tag size="large" style="margin-left: 1vw" color="primary">详情</Tag>
                <div slot="content">
                  姓名:
                  <Divider/>
                  手机号：
                </div>
              </Poptip>
            </FormItem>
            <FormItem label="接车时间" :label-width="120" >
              <DatePicker   :readonly="true"></DatePicker>
            </FormItem>
            <Form  label-colon :label-width="120" >
              <FormItem label="接车地点" :label-width="120">
                <Input type="text" :readonly="true"></Input>
              </FormItem>
              <FormItem label="车牌号" :label-width="120" >
                <Input type="text" :readonly="true" style="width: 80px"></Input>
              </FormItem>
            </Form>
            <FormItem>
              <Button disabled type="primary">确认订单</Button>
            </FormItem>
            </Card>
          <br>
          <Card dis-hover class="card_size" title="酒店信息: 等待酒店接单" >
            <Form :model="formItem" label-colon :label-width="120">
            <FormItem label="住宿时间" inline>
              <DatePicker   :readonly="true"></DatePicker>
              <br>至<br>
              <DatePicker   :readonly="true"></DatePicker>
            </FormItem>
              <FormItem label="住宿酒店" :label-width="120" >
                <Input type="text"  :readonly="true" style="width: 75%"></Input>
                <Button style="margin-left: 1vw" type="primary" @click="$router.push('/conference/list')">详情</Button>
              </FormItem>
            <FormItem label="入住时间" inline>
              <DatePicker   :readonly="true"></DatePicker>
            </FormItem>
            <FormItem label="房间号">
              <Input type="text"  :readonly="true" style="width: 50px"></Input>
            </FormItem>
              <FormItem>
                <Button disabled type="primary" @click="$router.push('/conference/list')">确认</Button>
              </FormItem>
          </Form>
          </Card>
        </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParticipantDetail",
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
        managerName:'xxx',
        introduction: '...',
        address: 'xxx',
        startTime: '2020-10-11',
        endTime: '2020-12-11',
        applicants: 10,
        hotelManege: 'xxx',
        driveManege: 'xxx',
      },
    }
  },
  methods: {

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
