<template>
  <div>
    <Form :model="conferenceInfo" label-colon :label-width="120">
      <Form inline label-colon :label-width="120">
        <FormItem label="会议名">
          <Input type="text" v-model="conferenceInfo.name" :readonly="true" style="width: 150px"></Input>
        </FormItem>
      </Form>
      <FormItem label="创建人">
        <Input type="text" v-model="conferenceInfo.creatorName" :readonly="true" style="width: 150px"></Input>
        <Poptip trigger="hover">
          <Tag size="large" style="margin-left: 1vw" color="primary">详情</Tag>
          <div slot="content" style="overflow: hidden">
            手机号: {{ conferenceInfo.creatorPhone }}
            <Divider style="margin: 10px"/>
            邮箱：{{ conferenceInfo.creatorEmail }}
          </div>
        </Poptip>
      </FormItem>
      <FormItem label="会议简介">
        <Input type="textarea" v-model="conferenceInfo.detail" :readonly="true" class="input_size"></Input>
      </FormItem>
      <FormItem label="会议时间">
        <DatePicker v-model="conferenceInfo.startTime" :readonly="true"></DatePicker>
        至
        <DatePicker v-model="conferenceInfo.endTime" :readonly="true"></DatePicker>
      </FormItem>
      <FormItem label="会议地点">
        <Input type="textarea" v-model="conferenceInfo.address" :readonly="true" class="input_size"></Input>
      </FormItem>
      <FormItem label="报名截止时间">
        <DatePicker v-model="conferenceInfo.enrollTime" :readonly="true"></DatePicker>
        <Tag size="large" style="margin-left: 1vw" color="primary" v-if="conferenceInfo.progress==='ENROLLMENT'">
          进行中
        </Tag>
        <Tag size="large" style="margin-left: 1vw" v-else>
          已结束
        </Tag>
      </FormItem>
      <FormItem >
        <Button type="primary" @click="gotoParticipate">参加会议</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  name: "CheckConference",
  data(){
    return{
      conferenceInfo: {
        name: '',
        creatorName: '',
        creatorPhone: '',
        creatorEmail: '',
        detail: '',
        address: '',
        startTime: '',
        endTime: '',
        enrollTime: '',
        progress: ''
      },
    }
  },
  props: {
    fromFatherConferenceId:{
      type: String,
      default: ''
    }
},

  methods:{
/*    setConferenceID(){
      this.conferenceId = this.fromFatherConferenceId
    },*/
    loadConferenceInfo() {
      let that = this
      console.log(that.fromFatherConferenceId)
      // 获取会议基本信息
      that.$axios({
        method: 'post',
        url: `${that.$baseURI}/api/conference/getByNumber`,
        data: {number: that.fromFatherConferenceId}
      }).then(function (response) {
        let resData = response['data']
        that.conferenceInfo = {
          name: resData['name'],
          number: resData['number'],
          startTime: resData['startTime'],
          endTime: resData['endTime'],
          detail: resData['detail'],
          address: resData['address'],
          enrollTime: new Date(resData['enrollTime']),
          progress: resData['progress'],
          creatorName: '',
          creatorPhone: '',
          creatorEmail: '',
        }
        if (Date() < Date(resData['enrollTime'])) {
          that.conferenceInfo.enrollStatus = 1
        } else {
          that.conferenceInfo.enrollStatus = 0
        }
        // 获取创建者信息
        that.$axios({
          method: 'post',
          url: `${that.$baseURI}/api/user/profile/getById`,
          data: {id: resData['userId']}
        }).then(function (response) {
          let resData2 = response['data']
          that.conferenceInfo.creatorName = resData2['name']
          that.conferenceInfo.creatorPhone = resData2['telephone']
          that.conferenceInfo.creatorEmail = resData2['email']
        })
      })
    },
    gotoParticipate(){
      this.$router.push(`/conference/participate/${this.fromFatherConferenceId}`)
    }
  }
}
</script>

<style scoped>

</style>