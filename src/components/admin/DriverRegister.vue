<template>
  <div style="padding: 0">
    <h2 class="center">注册</h2>
    <Form hide-required-mark ref="formItem" :model="formItem" :rules="fromValidate" :label-width="80">
      <FormItem label="用户名" prop="username">
        <Input v-model="formItem.username" placeholder="长度为2-16的字符"></Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input type="password" password v-model="formItem.password" placeholder="长度为8-32, 需包含字母和数字"></Input>
      </FormItem>
      <div class="center">
        <Button style="margin-right: 10px" @click="resetForm('formItem')">重置</Button>
        <Button type="primary" @click="submitForm('formItem')">提交</Button>
      </div>
    </Form>
  </div>
</template>

<script>
export default {
  name: "DriverRegister",
  data() {
    return {
      formItem: {
        username: '',
        password: ''
      },
      fromValidate: {
        username: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {type: 'string', min: 8, message: '密码至少需8位', trigger: 'blur'},
          {type: 'string', max: 32, message: '密码最多32位', trigger: 'blur'},
          {pattern: /(?=.*[0-9])(?=.*[a-zA-Z])/, message: '密码需包含字母和数字', trigger: 'blur'}
        ],
      }
    }
  },
  props: ['registerInfo'],
  methods: {
    submitForm(name) {
      var that = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          var data = {
            username: this.formItem.username,
            password: this.formItem.password,
            fleetId: this.registerInfo.fleetId
          }
          this.$axios(
              {
                method: 'post',
                url: `${this.$baseURI}/api/admin/hotel/add`,
                data: data
              }
          ).then(function (response) {
            if (response['data']['success'] === true) {
              that.$Message.success("注册成功");
              setTimeout(function () {
                that.$emit('setRegisterModal', false);
                that.resetForm(name)
              }, 1500);
            } else {
              that.$Message.error(response['data']['message'])
            }
          })
        }
      })
    },
    resetForm(name) {
      this.$refs[name].resetFields();
    },
  }
}
</script>

<style scoped>
@media screen and (max-width: 640px) {
  .form-wrapper {
    width: 90%;
    margin: auto;
  }
}

.center {
  text-align: center;
}
</style>