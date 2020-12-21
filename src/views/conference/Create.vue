<template>
  <div>
    <Form label-colon :label-width="120">
      <FormItem label="会议名">
        <Input type="text" style="width: 150px"></Input>
      </FormItem>
      <FormItem label="会议简介">
        <Input type="textarea" v-model="formItem.introduction" class="input_size"></Input>
      </FormItem>
      <FormItem label="会议地点">
        <Input type="textarea" v-model="formItem.address" class="input_size"></Input>
      </FormItem>
      <FormItem label="会议时间">
        <DatePicker v-model="formItem.startTime"></DatePicker>
        至
        <DatePicker v-model="formItem.endTime"></DatePicker>
      </FormItem>
      <FormItem label="报名截止时间">
        <DatePicker v-model="formItem.enrollTime"></DatePicker>
      </FormItem>
      <FormItem label="使用邀请码">
        <i-switch v-model="useInviteCode"/>
      </FormItem>
      <div style="height: 60px">
        <transition name="fade">
          <FormItem v-if="useInviteCode">
            <Input type="text" v-model="formItem.inviteCode" style="width: 150px"></Input>
          </FormItem>
        </transition>
      </div>
      <FormItem>
        <Button style=" margin-left:15% ">取消</Button>
        <Button style=" margin-left:15% " type="primary"  @click="submitForm">创建</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "create",
  data() {
    return {
      useInviteCode: false,
      formItem: {
        name: 'xxx',
        introduction: '...',
        address: 'xxx',
        startTime: '2020-10-11',
        endTime: '2020-12-11',
        enrollTime: '2020-11-11',
        inviteCode: '111123',
      },
    }
  },
  methods: {
    changeSwitch() {
      this.useInviteCode = !this.useInviteCode;
    },

    submitForm(){
      var that = this
      var data = {
        name: this.formItem.name,
        detail: this.formItem.introduction,
        address: this.formItem.address,
        startTime: this.formItem.startTime.getTime(),
        endTime: this.formItem.endTime.getTime(),
        enrollTime: this.formItem.enrollTime.getTime(),
        inviteCode: this.useInviteCode?this.formItem.inviteCode:null
      }
      this.$axios(
          {
            method: 'post',
            url: `${this.$baseURI}/api/user/conference/create`,
            data: data
          }
      ).then(function (response) {
        if (response['data']['success'] === true) {
          that.$Message.success("创建成功");
          setTimeout(function(){
            that.$router.push("/conference/list")
          }, 1500);
        } else {
          that.$Message.error(response['data']['message']);
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
</style>