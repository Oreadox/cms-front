<template>
  <div>
    <Form>
      <FormItem label="会议号: ">
        <Input type="text" v-model="invitationCode"></Input>
      </FormItem>
      <FormItem >
        <Button long type="primary" @click="Verification()">确定</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import router from "@/router/router";

export default {
  name: "JoinConference",
  data(){
    return{
      invitationCode:"",
      VerifyCode:"123456",
    }
  },
  methods:{
    Verification(){
        if (this.invitationCode===this.VerifyCode){
          router.push("/conference/participate")
        }
    }
  }
}
</script>

<style scoped>

</style>