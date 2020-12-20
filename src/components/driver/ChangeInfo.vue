<template>
  <div>
    <Form hide-required-mark style="margin-top: 5%" :rules="formValidate" ref="formItem" :model="formItem">
      <h2 style="text-align: center">修改个人信息</h2>

      <FormItem label="姓名" prop="name" >
        <Input type="text" v-model="formItem.name"/>
      </FormItem>

      <FormItem label="性别" prop="gender">
        <RadioGroup v-model="formItem.gender">
          <Radio label="MALE">男</Radio>
          <Radio label="FEMALE">女</Radio>
        </RadioGroup>
      </FormItem>

      <FormItem label="联系电话" prop="phone">
        <Input type="text" v-model="formItem.telephone"/>
      </FormItem>

      <FormItem label="身份证号" prop="idCard">
        <Input type="text" v-model="formItem.residentIdNumber"/>
      </FormItem>

      <FormItem label="所属车队" prop="team">
        <Input type="text" v-model="formItem.fleetId"/>
      </FormItem>

      <FormItem>
        <Button style="float: right; margin-left: 16px" type="primary" @click="submitForm()">修改
        </Button>
        <Button type="text" style="float: right; " @click="function() {resetForm('formItem');cancelButton()}">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "ChangeInfo",
  data() {
    return {
      formItem: {
        name: this.driverData.name,
        gender: this.driverData.gender,
        phone: this.driverData.telephone,
        idCard: this.driverData.residentIdNumber,
        team: this.driverData.fleetId
      },

      formValidate: {
        name: [
          {required: true, message: '姓名不能为空', trigger: 'blur'},
        ],
        gender: [
          {required: true, message: '性别不能为空', trigger: 'blur'},
        ],
        telephone: [
          {required: true, message: '联系电话不能为空', trigger: 'blur'},
          {pattern: /^[1][0-9]{10}$/, message: '电话号码不合法', trigger: 'blur'}
        ],
        residentIdNumber: [
          {required: true, message: '身份证号不能为空', trigger: 'blur'},
          {
            pattern: /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
            , message: '身份证号不合法', trigger: 'blur'
          }
        ],
        fleetId: [
          {required: true, message: '所属车队不能为空', trigger: 'blur'},
        ],
      }

    }
  },

  props:['driverData'],
  methods:{

    resetForm(name) {
      this.$refs[name].resetFields();
    },
    cancelButton() {
      this.$emit('gotoProfile', false);
    },
    submitForm() {
      let that = this
      let data = {
        name: this.driverData.name,
        gender: this.driverData.gender,
        phone: this.driverData.telephone,
        idCard: this.driverData.residentIdNumber,
        team: this.driverData.fleetId
      }

      this.$axios(
          {
            method: 'post',
            url: `${this.$baseURI}/api/driver/profile/modify`,
            data:data
          }
      ).then(function (response) {
        if (response['data']['success'] === true) {
          that.$Message.success("修改成功");
        } else {
          that.$Message.error(response['data']['message']);
        }
      })
    }
  }
}
</script>

<style scoped>

</style>