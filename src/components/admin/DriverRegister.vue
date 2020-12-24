<template>
  <div style="padding: 0">
    <h2 class="center" style="margin-bottom: 5%">添加司机</h2>
    <Form hide-required-mark ref="formItem" :model="formItem" :rules="fromValidate" :label-width="80">
      <FormItem label="用户名" prop="username">
        <Input v-model="formItem.username" placeholder="长度为2-16的字符"></Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input password v-model="formItem.password" placeholder="长度为8-32, 需包含字母和数字"></Input>
      </FormItem>
      <FormItem label="姓名" prop="name">
        <Input style="width: 100px"  v-model="formItem.name"></Input>
      </FormItem>
      <FormItem label="性别" prop="gender">
        <RadioGroup v-model="formItem.gender">
          <Radio label="MALE">男</Radio>
          <Radio label="FEMALE">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="详情" prop="residentIdNumber">
        <Input  v-model="formItem.residentIdNumber" ></Input>
      </FormItem>
      <FormItem label="电话" prop="telephone">
        <Input style="width: 200px"  v-model="formItem.telephone" ></Input>
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
        password: '',
        name: '',
        gender: '',
        residentIdNumber: '',
        telephone: '',
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
        name: [
          {required: true, message: '酒店名不能为空', trigger: 'blur'},
        ],
        gender: [
          {required: true, message: '性别不能为空', trigger: 'blur'},
        ],
        residentIdNumber: [
          {required: true, message: '身份证号不能为空', trigger: 'blur'},
          {
            pattern: /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
            , message: '身份证号不合法', trigger: 'blur'
          }
        ],
        telephone: [
          {required: true, message: '手机号码不能为空', trigger: 'blur'},
          {pattern: /^[1][0-9]{10}$/, message: '手机号不合法', trigger: 'blur'}
        ]

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
            fleetId: this.registerInfo.fleetId,
            name: this.formItem.name,
            gender: this.formItem.gender,
            residentIdNumber: this.formItem.residentIdNumber,
            telephone: this.formItem.telephone,
          }
          this.$axios(
              {
                method: 'post',
                url: `${this.$baseURI}/api/admin/driver/add`,
                data: data
              }
          ).then(function (response) {
            if (response['data']['success'] === true) {
              that.$Message.success("注册成功");
              setTimeout(function(){
                that.$emit('setRegisterModal', false);
                that.resetForm(name);
              }, 100);
              that.$router.go(0)
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