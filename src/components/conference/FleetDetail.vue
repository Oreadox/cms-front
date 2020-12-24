<template>
  <div>
    <Form :model="formItem" label-colon :label-width="80" style="margin-top: 5%; ">
      <FormItem label="车队名">
        <label>
          <Input type="text" v-model="formItem.name" :readonly="true" style="width: 90%"></Input>
        </label>
      </FormItem>
      <FormItem label="联系方式">
        <label>
          <Input type="text" v-model="formItem.phone" :readonly="true" style="width: 90%"></Input>
        </label>
      </FormItem>
      <FormItem label="司机人数">
        <label>
          <Input type="number" v-model="formItem.driverAmount" :readonly="true" style="width: 80px"></Input>
        </label>
      </FormItem>
      <FormItem label="简介">
        <label>
          <Input type="textarea" v-model="formItem.detail" :readonly="true" style="width: 90%"></Input>
        </label>
      </FormItem>
      <FormItem>
        <Button v-if="progress===1" type="primary" @click="submitSelection">选择此车队</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "FleetDetail",
  data() {
    return {
      formItem:{
        name: '',
        phone: '',
        driverAmount: '',
        detail: ''
      },
      conferenceId: 0,
      progress: 0,
      fleetId: 0
    }
  },
  props: [],
  methods: {
    loadData(data, conferenceId, progress, fleetId){
      this.formItem = data
      this.conferenceId = conferenceId
      this.progress = progress
      this.fleetId = fleetId
    },
    submitSelection(){
      let that = this
      this.$axios({
        method: 'post',
        url: `${that.$baseURI}/api/conference/chooseFleet`,
        data: {id: that.conferenceId, fleetId: parseInt(that.fleetId) }
      }).then(function (response) {
        if(response['data']['success']===true){
          that.$Message.success("选择成功")
          that.arrowBack()
        } else {
          that.$Message.error(response['data']['message'])
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
