<template>
  <div :style="{padding: '24px', margin: 'auto auto auto 15vw'}">
    <Form label-colon :label-width="120">
      <FormItem label="会议名">
        <Input type="text" style="width: 150px"></Input>
      </FormItem>
      <FormItem label="会议简介">
        <Input type="textarea" v-model="formItem.introduction"  class="input_size"></Input>
      </FormItem>
      <FormItem label="会议地点">
        <Input type="textarea" v-model="formItem.address"  class="input_size"></Input>
      </FormItem>
      <FormItem label="会议时间">
        <DatePicker v-model="formItem.startTime" ></DatePicker>
        至
        <DatePicker v-model="formItem.endTime" ></DatePicker>
      </FormItem>
      <FormItem label="报名截止时间">
        <DatePicker v-model="formItem.startTime" ></DatePicker>
      </FormItem>
      <FormItem label="使用邀请码">
        <i-switch v-model="invitationSwitch" />
      </FormItem>
      <div  style="height: 60px">
        <transition name="fade">
          <FormItem v-if="invitationSwitch">
            <Input type="text" v-model="formItem.invitationCode" style="width: 150px"></Input>
          </FormItem>
        </transition>
      </div>
      <FormItem>
        <Button style=" margin-left:15% ">取消</Button>
        <Button style=" margin-left:15% "  type="primary">创建</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "create",
  data () {
    return {
      invitationSwitch:false,
      formItem: {
        name: 'xxx',
        introduction: '...',
        address: 'xxx',
        startTime: '2020-10-11',
        endTime: '2020-12-11',
        deadline:'2020-11-11',
        invitationCode: '111123',
      },
    }
  },
  methods: {
    changeSwitch(){
      this.invitationSwitch = !this.invitationSwitch;
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