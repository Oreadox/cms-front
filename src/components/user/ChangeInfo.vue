<template>
  <div>
    <Form hide-required-mark style="margin-top: 5%" :rules="formValidate" ref="formItem" :model="formItem">
      <h2 style="text-align: center">修改个人信息</h2>

      <FormItem label="名称" prop="name" >
        <Input type="text" v-model="formItem.name"></Input>
      </FormItem>

      <FormItem label="性别" prop="gender">
        <RadioGroup v-model="formItem.gender">
          <Radio label="MALE">男</Radio>
          <Radio label="FEMALE">女</Radio>
        </RadioGroup>
      </FormItem>

      <FormItem label="生日" prop="birthday">
        <DatePicker type="date" v-model="formItem.birthday"></DatePicker>
      </FormItem>

      <FormItem label="邮箱" prop="email">
        <Input type="email" v-model="formItem.email"></Input>
      </FormItem>

      <FormItem label="电话" prop="phone">
        <Input type="text" v-model="formItem.phone"></Input>
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
    const validateUsername = (rule, value, callback) => {
      this.$axios(
          {
            method: 'post',
            url: this.$baseURI + '/api/register/checkUsername',
            data: {
              "username": value
            }
          }
      ).then(function (response) {
        if (response['data']['result'] === false) {
          callback(new Error('用户名重复'))
        } else {
          callback();
        }
      })
    }

    return {
      formItem: {
        name:this.userData.name,
        gender:this.userData.gender,
        birthday:this.userData.birthday,
        email: this.userData.email,
        phone: this.userData.phone,
        idCard:this.userData.idCard,
        workUnit:this.userData.workUnit,
      },

      formValidate: {
        username: [
          {required: true, message: '新用户名不能为空', trigger: 'blur'},
          {validator: validateUsername, trigger: 'blur'}
        ],
        name: [
          {required: true, message: '姓名不能为空', trigger: 'blur'},
        ],
        gender: [
          {required: true, message: '性别不能为空', trigger: 'blur'},
        ],
        birthday: [
          {type:'date',required: true, message: '生日不能为空', trigger: 'change' },
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

    resetForm(name) {
      this.$refs[name].resetFields();
    },
    cancelButton() {
      this.$emit('gotoProfile', false);
    },
    submitForm() {
      var that = this
      // console.log(that.formItem.birthday)
      this.$axios(
          {
            method: 'post',
            url: `${this.$baseURI}/api/user/profile/modify`,
            data: this.formItem
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