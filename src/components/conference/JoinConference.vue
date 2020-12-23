<template>
  <div>
    <Form>
      <FormItem label="会议号: ">
        <Input  type="text" v-model="conferenceId"></Input>
      </FormItem>
      <FormItem >
        <Button long type="primary" @click="gotoParticipate">确定</Button>
      </FormItem>
    </Form>
    <Modal
        style="padding: 20px"
        footer-hide
        v-model="checkConferenceDetail">
      <div style="padding: 5%">
      <CheckConference  ref="initCheckDetail" :fromFatherConferenceId="conferenceId"></CheckConference>
      </div>
    </Modal>
  </div>
</template>

<script>

import CheckConference from "@/components/conference/CheckConference";
export default {
  name: "JoinConference",
  components: {CheckConference},
  data(){
    return{
      conferenceId:"",
      // VerifyCode:"123456",
      checkConferenceDetail:false
    }
  },
  methods:{
    gotoParticipate(){
      let that = this
      if(that.conferenceId!=null&&that.conferenceId.length>0){
        var data={
          number: that.conferenceId
        }
        that.$axios(
            {
              method: "post",
              url: that.$baseURI + '/api/user/conference/checkExisted',
              data:data
            }
        ).then(function (response){
          if (response["data"]["result"]){
            that.$refs.initCheckDetail.loadConferenceInfo()
            that.checkConferenceDetail = true
          }else {
            that.$Message.error("会议号不存在，请重新输入")
          }
        })

      }
    }
  }
}
</script>

<style scoped>

</style>