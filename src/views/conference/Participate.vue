<template>
  <div>

    <Form :label-width="120" hide-required-mark ref="formItem" :model="formItem" :rules="fromValidate">
      <FormItem label="">
        <p style="font-size: 2em; margin-left: 8% ">填写参加会议信息</p>
      </FormItem>
      <FormItem label="会议号">
        <Input type="text" v-model="formItem.conferenceId" class="input_size" disabled></Input>
      </FormItem>
      <FormItem label="航班号/车次" prop="tripNumber">
        <Input type="text" v-model="formItem.tripNumber" class="input_size"></Input>
      </FormItem>
      <FormItem label="到达时间" prop="arriveTime">
        <DatePicker :options="ControlArriveTime" type="datetime" v-model="formItem.arriveTime"></DatePicker>
      </FormItem>
      <FormItem label="到达地点" prop="arriveSite">
        <Input type="text" v-model="formItem.arriveSite" class="input_size"></Input>
      </FormItem>
      <FormItem label="住宿时间" prop="stayTime">
        <DatePicker :options="ControlStayTime" v-model="formItem.stayStart"></DatePicker>
        至
        <DatePicker :options="ControlEndTime" v-model="formItem.stayEnd"></DatePicker>
      </FormItem>
      <FormItem label="住宿要求">
        <Input type="textarea" v-model="formItem.stayNeeds" class="input_size"></Input>
      </FormItem>
      <FormItem label="备注">
        <Input type="textarea" v-model="formItem.remark" class="input_size"></Input>
      </FormItem>
      <div style="height: 60px" v-if="useInviteCode">
        <FormItem label="邀请码" prop="inviteCode">
          <Input type="text" v-model="formItem.inviteCode" style="width: 150px"/>
        </FormItem>
      </div>
      <FormItem>
        <Button type="primary" style="margin-right: 10%" @click="submitForm('formItem')">参加</Button>
        <Button style="margin-right: 10%" @click="gotoList">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "participate",
  data() {
    const validateStayTime = (rule, value, callback) => {
      if (this.formItem.stayStart === '' || this.formItem.stayEnd === '') {
        callback(new Error("住宿时间不能为空"))
      } else {
        callback();
      }
    }
    const validateInviteCode = (rule, value, callback) => {
      if (!this.useInviteCode){
        callback();
      } else {
        if(this.formItem.inviteCode===''){
          callback(new Error("邀请码不能为空"))
        }
        callback();
      }
    }
    return {
      ControlArriveTime: {
        disabledDate: (time) => {
          return time && time.getTime() < Date.now() - 8.64e7
        }
      },
      ControlStayTime: {
        disabledDate: (time) => {
          return time.getTime() < Date.now()
        }
      },
      ControlEndTime: {
        disabledDate: (time) => {
          if (this.formItem.stayEnd === '')
            return time.getTime() < Date.now()
          else
            return time.getTime() < Date.now() || time.getTime() < new Date(this.formItem.stayStart).getTime()
        }
      },
      formItem: {
        conferenceId: '',
        tripNumber: '',
        arriveTime: '',
        arriveSite: '',
        stayStart: '',
        stayEnd: '',
        stayNeeds: '',
        remark: '',
        inviteCode: ''
      },
      fromValidate: {
        tripNumber: [
          {required: true, message: '航班号/车次不能为空', trigger: 'blur'},
        ],
        arriveTime: [
          {required: true, type: 'date', message: '到达时间不能为空', trigger: 'blur'},
        ],
        arriveSite: [
          {required: true, message: '到达地点不能为空', trigger: 'blur'},
        ],
        stayTime: [
          {validator: validateStayTime, trigger: 'blur'}
        ],
        inviteCode: [
          {validator: validateInviteCode, trigger: 'blur'}
        ]
      },
      useInviteCode: false
    }
  },
  created() {
    this.formItem.conferenceId = this.$route.params.id
    this.checkUseInviteCode()
  },
  methods: {
    checkUseInviteCode() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${that.$baseURI}/api/user/conference/checkInviteCodeNeeded`,
        data: {number: this.formItem.conferenceId,}
      }).then(function (response) {
        that.useInviteCode = response['data']['result']
      })
    },
    submitForm(name) {
      let that = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          let data = {
            number: that.formItem.conferenceId,
            tripNumber: that.formItem.tripNumber,
            arriveTime: that.formItem.arriveTime.getTime(),
            arriveSite: that.formItem.arriveSite,
            stayStart: that.formItem.stayStart.getTime(),
            stayEnd: that.formItem.stayEnd.getTime(),
            stayNeeds: that.formItem.stayNeeds,
            remark: that.formItem.remark,
            inviteCode: that.formItem.inviteCode,
          }
          that.$axios({
            method: 'post',
            url: `${that.$baseURI}/api/user/conference/participate`,
            data: data
          }).then(function (response) {
            if (response['data']['success'] === true) {
              that.$Message.success("加入成功");
              setTimeout(function () {
                that.$router.push('/conference/list')
              }, 1500);
            } else if (response['data']['inviteCodeCorrect'] === false) {
              that.$Message.error('邀请码错误')
            } else {
              that.$Message.error(response['data']['message'])
            }
          })
        }
      })
    },
    gotoList() {
      this.$router.push('/conference/list')
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