<template>
  <div>
    <Form>
      <FormItem label="会议号: ">
        <Input type="text" v-model="conferenceId"></Input>
      </FormItem>
      <FormItem >
        <Button long type="primary" @click="gotoParticipate">确定</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>

export default {
  name: "JoinConference",
  data(){
    return{
      conferenceId:"",
      // VerifyCode:"123456",
    }
  },
  methods:{
    gotoParticipate(){
      if(this.conferenceId!=null&&this.conferenceId.length>0){
        this.$router.push(`/conference/participate/${this.conferenceId}`)
      }
    }
  }
}
</script>

<style scoped>

</style>