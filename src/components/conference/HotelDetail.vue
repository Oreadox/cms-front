<template>
  <div>
    <Form :model="formItem" label-colon :label-width="80" style="margin-top: 5%; ">
      <FormItem label="名称">
        <label>
          <Input type="text" v-model="formItem.name" :readonly="true" style="width: 90%"></Input>
        </label>
      </FormItem>
      <FormItem label="账号">
        <label>
          <Input type="text" v-model="formItem.account" :readonly="true" style="width: 90%"></Input>
        </label>
      </FormItem>
      <FormItem label="联系方式">
        <label>
          <Input type="text"  v-model="formItem.phone" :readonly="true"  style="width: 60%"></Input>
          <Button style="margin-left: 1vw" type="primary" @click="$router.push('/conference/list')"><Icon size="24" type="ios-mail" /></Button>
        </label>
      </FormItem>
      <FormItem label="地址">
        <label>
          <Input type="textarea" v-model="formItem.address" :readonly="true" style="width: 90%"></Input>
        </label>
      </FormItem>
      <FormItem label="简介">
        <label>
          <Input type="textarea" v-model="formItem.detail" :readonly="true" style="width: 90%"></Input>
        </label>
      </FormItem>
<!--      <FormItem>
        <Button v-if="progress<=1" type="primary" @click="submitSelection">选择此酒店</Button>
      </FormItem>-->
    </Form>
  </div>
</template>

<script>
export default {
  name: "HotelDetail",
  data(){
    return{
      formItem:{
        name: '',
        account: '',
        phone: '',
        address: '',
        detail: '',
      },
      conferenceId: 0,
      progress: 0,
      hotelId: 0,
    }
  },
  props: [],
  methods: {
    loadData(data, progress){
      this.formItem = data
      this.progress = progress
    },
  }

}

</script>

<style scoped>

</style>
