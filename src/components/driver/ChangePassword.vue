<template>
  <div>
    <Form hide-required-mark style="margin-top: 5%" :rules="fromValidate" ref="formItem" :model="formItem">
      <h2 style="text-align: center">修改密码</h2>
      <FormItem show-message label="原密码">
        <Input type="password" password v-model="formItem.oldPassword" placeholder="输入原密码"></Input>
      </FormItem>
      <FormItem label="新密码" prop="password" >
        <Input type="password" password v-model="formItem.password" placeholder="长度为8-32, 需包含字母和数字"></Input>
      </FormItem>
      <FormItem label="确认密码" prop="passwordCheck" >
        <Input type="password" password v-model="formItem.passwordCheck" placeholder="重复上述的密码"></Input>
      </FormItem>
      <FormItem>
        <Button style="float: right; margin-left: 16px" type="primary" @click="submitForm()">修改
        </Button>
        <Button type="text" style="float: right; " @click="function (){resetForm('formItem');cancelButton()}">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "ChangePassword",
  data() {
    const validatePassCheck = (rule, value, callback) => {
      if (value !== this.formItem.password) {
        return callback(new Error('密码验证不一致'))
      } else {
        return callback()
      }
    };
    return {
      formItem: {
        oldPassword:"",
        password:"",
        passwordCheck:"",

      },
      fromValidate:{
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {type: 'string', min: 8, message: '密码至少需8位', trigger: 'blur'},
          {type: 'string', max: 32, message: '密码最多32位', trigger: 'blur'},
          {pattern: /(?=.*[0-9])(?=.*[a-zA-Z])/, message: '密码需包含字母和数字', trigger: 'blur'}
        ],
        passwordCheck: [
          {required: true, message: '确认密码不能为空', trigger: 'blur'},
          {validator: validatePassCheck, trigger: 'blur'}
        ],
      }
    }
  },
  methods:{
    resetForm(name) {
      this.$refs[name].resetFields();
    },
    cancelButton(){
      this.$emit('gotoProfile', false);
    },
    submitForm(){
      var that = this
      that.$refs[name].validate((valid) => {
        if (valid) {
          let data = {
            oldPassword: that.formItem.oldPassword,
            newPassword: that.formItem.password
          }
          that.$axios({
            method: 'post',
            url: `${that.$baseURI}/api/driver/password/modify`,
            data: data
          }).then(function (response) {
            if (response['data']['success'] === true) {
              that.$Message.success("修改成功");
              that.$router.go(0)
            } else {
              that.$Message.error(response['data']['message']);
            }
          })
        }
      })



    },
  }

}
</script>

<style scoped>

</style>