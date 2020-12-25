<template>
  <div>
    <Form hide-required-mark style="margin-top: 5%" :rules="formValidate" ref="formItem" :model="formItem">
      <h2 style="text-align: center">修改个人信息</h2>
      <FormItem label="名称" prop="name">
        <Input type="text" v-model="formItem.name"></Input>
      </FormItem>
      <FormItem label="性别" prop="gender">
        <RadioGroup v-model="formItem.gender">
          <Radio label="MALE">男</Radio>
          <Radio label="FEMALE">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="生日" prop="birthday">
        <DatePicker :options="ControlTime" type="date" v-model="formItem.birthday"></DatePicker>
      </FormItem>
      <FormItem label="邮箱" prop="email">
        <Input type="email" v-model="formItem.email"></Input>
      </FormItem>
      <FormItem label="电话" prop="phone">
        <Input type="text" v-model="formItem.phone"></Input>
      </FormItem>
      <FormItem label="工作单位" prop="workUnit">
        <Input type="text" v-model="formItem.workUnit"></Input>
      </FormItem>
      <FormItem>
        <Button style="float: right; margin-left: 16px" type="primary" @click="submitForm('formItem')">修改
        </Button>
        <Button type="text" style="float: right; " @click="function() {resetForm('formItem');cancelButton()}">取消
        </Button>
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
        name: '',
        gender: '',
        birthday: '',
        email: '',
        phone: '',
        idCard: '',
        workUnit: ''
      },
      ControlTime: {
        disabledDate: (time)=>{
          return time && time.getTime() > Date.now()
        }
      },
      formValidate: {
        name: [
          {required: true, message: '姓名不能为空', trigger: 'blur'},
        ],
        gender: [
          {required: true, message: '性别不能为空', trigger: 'blur'},
        ],
        birthday: [
          {type: 'date', required: true, message: '生日不能为空', trigger: 'change'},
        ],
        email: [
          {required: true, message: '邮箱不能为空', trigger: 'blur'},
          {type: 'email', message: '邮箱不合法', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '手机号码不能为空', trigger: 'blur'},
          {pattern: /^[1][0-9]{10}$/, message: '手机号不合法', trigger: 'blur'}
        ]
      }

    }
  },
  props: ['userData'],
  methods: {
    setDataDefault() {
      this.formItem.name = this.userData.name
      this.formItem.gender = this.userData.gender
      this.formItem.birthday = this.userData.birthday
      this.formItem.email = this.userData.email
      this.formItem.phone = this.userData.phone
      this.formItem.idCard = this.userData.idCard
      this.formItem.workUnit = this.userData.workUnit
      switch (this.userData.gender) {
        case "男": {
          this.formItem.gender = "MALE"
          break
        }
        case "女": {
          this.formItem.gender = "FEMALE"
          break
        }
      }
    },
    resetForm(name) {
      this.$refs[name].resetFields();
    },
    cancelButton() {
      this.$emit('gotoProfile', false);
    },
    submitForm(name) {
      let that = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          let data = {
            name: this.formItem.name,
            gender: this.formItem.gender,
            birthday: this.formItem.birthday.getTime(),
            residentIdNumber: this.formItem.idCard,
            email: this.formItem.email,
            telephone: this.formItem.phone,
            workplace: this.formItem.workUnit
          }
          that.$axios({
            method: 'post',
            url: `${this.$baseURI}/api/user/profile/modify`,
            data: data
          }).then(function (response) {
            if (response['data']['success'] === true) {
                that.$Message.success("修改成功");
                that.$emit('gotoProfile', false);
            } else {
              that.$Message.error(response['data']['message']);
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>