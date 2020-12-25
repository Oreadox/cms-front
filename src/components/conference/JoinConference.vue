<template>
  <div>
    <Form>
      <FormItem label="会议号: ">
        <Input type="text" v-model="conferenceId"></Input>
      </FormItem>
      <FormItem>
        <Button long type="primary" @click="gotoParticipate">确定</Button>
      </FormItem>
    </Form>
    <Modal
        style="padding: 20px"
        footer-hide
        v-model="checkConferenceDetail">
      <div style="padding: 5%">
        <CheckConference ref="initCheckDetail" :fromFatherConferenceId="conferenceId"></CheckConference>
      </div>
    </Modal>
  </div>
</template>

<script>

import CheckConference from "@/components/conference/CheckConference";

export default {
  name: "JoinConference",
  components: {CheckConference},
  data() {
    return {
      conferenceId: "",
      // VerifyCode:"123456",
      checkConferenceDetail: false,
      checkConference: 0
    }
  },
  methods: {
    gotoParticipate() {
      let that = this
      if (that.conferenceId != null && that.conferenceId.length > 0) {
        var dataOfCheck = {
          number: that.conferenceId
        }
        that.$axios(
            {
              method: "post",
              url: that.$baseURI + '/api/user/conference/checkExisted',
              data: dataOfCheck
            }
        ).then(function (response) {
          if (response["data"]["result"]) {
            that.$axios({
              method: "post",
              url: that.$baseURI + '/api/user/conference/created/checkByNumber',
              data: dataOfCheck
            }).then(function (rep) {
              if (!rep["data"]['result']) {
                that.$axios({
                  method: "post",
                  data: dataOfCheck,
                  url: that.$baseURI + '/api/user/conference/participated/checkByNumber',
                }).then(function (reps) {
                  if (!reps['data']['result']) {
                    that.$axios({
                      method: "post",
                      data: dataOfCheck,
                      url: that.$baseURI + '/api/user/conference/checkOngoing',
                    }).then(function (response) {
                      if (response['data']['result']) {
                        that.$refs.initCheckDetail.loadConferenceInfo()
                        that.checkConferenceDetail = true
                      } else that.$Message.error("会议已不可报名！")
                    })
                  } else
                    that.$Message.error("您已经参与此会议!")
                })
              } else
                that.$Message.error("您是该会议的创建者！")

            })
          } else {
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