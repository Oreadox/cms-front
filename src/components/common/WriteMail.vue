<template>
  <div>
    <Form :model="formItem" label-colon :label-width="80" style="margin-top: 5%; ">
      <FormItem show-message label="收件人">
        <Input type="text" v-model="formItem.senderAccount"/>
      </FormItem>
      <FormItem show-message label="内容">
        <Input :rows=4 type="textarea" v-model="formItem.content"/>
      </FormItem>
      <FormItem show-message >
        <Button type="primary" @click="clickForCheck">确认</Button>
        <Button style="margin-left: 15%" @click=closeFatherModal>取消</Button>
      </FormItem>
    </Form>
    <Modal
        style="padding: 20px"
        footer-hide
        v-model="openModal"
        >
      <Form :model="formItem" label-colon :label-width="120" style="margin-top: 5%; ">
        <FormItem show-message label="收件人账号">
          <Input  type="text" v-model="formItem.senderAccount"></Input>
        </FormItem>
        <FormItem show-message >
          <Button type="primary" @click="sendMessage">确认</Button>
          <Button  style="margin-left: 15%" @click="openModal=false">取消</Button>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  name: "WriteMail",
  props: ['sendId'],
  data(){

    return{
      formItem:{
        senderAccount:'',
        content: ''
      },
      openModal:false,
    }
  },
  methods:{
    autoFillAccount(){
      {
        let that = this;
        var data = {
          accountId:this.sendId.account,
        }
        this.$axios(
            {
              method: 'post',
              url: `${this.$baseURI}/api/message/getAccount`,
              data: data
            }
        ).then(function (response) {
          that.formItem.senderAccount = response['data']['username']
        })
      }
    },
    clickForCheck(){
      this.openModal = true
    },
    sendMessage(){
      {
        var that = this
        var data = {
          username:that.formItem.senderAccount,
          content:that.formItem.content,
        }
        this.$axios(
            {
              method: 'post',
              url: `${that.$baseURI}/api/message/sendByUsername`,
              data: data
            }
        ).then(function (response) {
          if (response['data']['success'] === true) {
            that.$Message.success("发送成功");
            that.openModal = false
            that.$emit('closeSendModal',false)
          } else {
            that.$Message.error(response['data']['message']);
          }
        })
      }
    },
    closeFatherModal(){
      this.$emit('closeSendModal',false)
    }
  }
}
</script>

<style scoped>

</style>