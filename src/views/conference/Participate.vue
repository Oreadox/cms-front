<template>
  <div :style="{padding: '24px', margin: 'auto auto auto 15vw'}">
    <Form :label-width="120" >
      <FormItem label="航班号/车次: ">
      <Input type="text" class="input_size"></Input>
      </FormItem>
      <FormItem label="到达时间">
        <DatePicker type="date"></DatePicker>
      </FormItem>
      <FormItem label="住宿时间" >
        <DatePicker type="date"></DatePicker>
      </FormItem>
      <FormItem label="住宿要求" >
        <Input type="textarea" class="input_size"></Input>
      </FormItem>
      <FormItem label="备注">
        <Input type="textarea" class="input_size"></Input>
      </FormItem>
      <div style="height: 60px" v-if="ifUseInviteCode">
          <FormItem label="邀请码 ">
            <Input type="text" v-model="InviteCode" style="width: 150px"/>
          </FormItem>
      </div>
      <FormItem >
        <Button type="primary" style="margin-right: 10%">参加</Button>
        <Button style="margin-right: 10%">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "participate",
  data(){
    return {
      ifUseInviteCode:true,
      InviteCode:"",

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

.card_size {
  width: 580px;
}

@media screen and (max-width: 800px) {
  .card_size {
    width: 90%;
  }
}
</style>