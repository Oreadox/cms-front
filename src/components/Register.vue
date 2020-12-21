<template>
  <div style="padding: 12px 10px; padding-bottom: 0">
    <h2 class="center">注册</h2>
    <Form hide-required-mark ref="formItem" :model="formItem" :rules="fromValidate" :label-width="80">
      <FormItem label="用户名" prop="username">
        <Input v-model="formItem.username" placeholder="长度为2-16的字符"></Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input type="password" password v-model="formItem.password" placeholder="长度为8-32, 需包含字母和数字"></Input>
      </FormItem>
      <FormItem label="确认密码" prop="passwordCheck">
        <Input type="password" password v-model="formItem.passwordCheck" placeholder="重复上述的密码"></Input>
      </FormItem>
      <FormItem label="姓名" prop="name">
        <Input v-model="formItem.name" placeholder=""></Input>
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
        <Input v-model="formItem.email"></Input>
      </FormItem>
      <FormItem label="身份证号" prop="idCard">
        <Input v-model="formItem.idCard" placeholder=""></Input>
      </FormItem>
      <FormItem label="工作单位" prop="workUnit">
        <Input v-model="formItem.workUnit" placeholder=""></Input>
      </FormItem>
      <FormItem label="手机号码" prop="phone">
        <Input v-model="formItem.phone" placeholder=""></Input>
      </FormItem>
      <FormItem>
        <Button style="float: right; margin-left: 8px " @click="resetForm('formItem')">重置</Button>
        <Button style="float: right" type="primary" @click="submitForm('formItem')">提交</Button>
        <Button style="float: left" type="text" @click="function(){resetForm('formItem'); gotoLogin()}">登录现有账号</Button>
      </FormItem>
    </Form>
  </div>

</template>

<script>
export default {
  name: "Register",
  data() {
    const validatePassCheck = (rule, value, callback) => {
      if (value !== this.formItem.password) {
        return callback(new Error('密码验证不一致'))
      } else {
        return callback()
      }
    };
    const validateUsername = (rule, value, callback) => {
      // var err
      this.$axios(
          {
            method: 'post',
            url: this.$baseURI + '/api/register/checkUsername',
            data: {
              "username": value
            }
          }
      ).then(function (response) {
        if(response['data']['result']===false){
          callback(new Error('用户名重复'))
        } else {
          callback();
        }
      })
    }
    return {
      formItem: {
        username: '',
        password: '',
        passwordCheck: '',
        name: '',
        gender: 'MALE',
        birthday: '',
        email: '',
        idCard: '',
        workUnit: '',
        phone: ''
      },
      fromValidate: {
        username: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
          {validator: validateUsername, trigger: 'blur'}
        ],
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
        name: [
          {required: true, message: '姓名不能为空', trigger: 'blur'},
        ],
        gender: [
          {required: true, message: '性别不能为空', trigger: 'blur'},
        ],
        birthday: [
          {required: true, type:'date', message: '生日不能为空', trigger: 'change'},
        ],
        email: [
          {required: true, message: '邮箱不能为空', trigger: 'blur'},
          {type: 'email', message: '邮箱不合法', trigger: 'blur'}
        ],
        idCard: [
          {required: true, message: '身份证号不能为空', trigger: 'blur'},
          {
            pattern: /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
            , message: '身份证号不合法', trigger: 'blur'
          }
        ],
        workUnit: '',
        phone: [
          {required: true, message: '手机号码不能为空', trigger: 'blur'},
          {pattern: /^[1][0-9]{10}$/, message: '手机号不合法', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm(name) {
      var that = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          var data = {
            username: this.formItem.username,
            password: this.formItem.password,
            name: this.formItem.name,
            gender: this.formItem.gender,
            birthday: this.formItem.birthday.getTime(),
            residentIdNumber: this.formItem.idCard,
            email: this.formItem.email,
            telephone: this.formItem.phone,
            workplace: this.formItem.workUnit
          }
          this.$axios(
              {
                method: 'post',
                url: `${this.$baseURI}/api/register/submit`,
                data: data
              }
          ).then(function (response) {
            if(response['data']['success']===true){
              that.$Message.success("注册成功，即将跳转到登录界面");
              setTimeout(function(){
                that.$emit('setRegisterModal', false);
                that.$emit('setLoginModal', true);
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
    gotoLogin() {
      this.$emit('setRegisterModal', false);
      this.$emit('setLoginModal', true);
    }
  }
}
</script>

<style scoped>
.form {
  width: 30%;
  margin: 10% auto;
}

@media screen and (max-width: 640px) {
  .form-wrapper {
    width: 90%;
    margin: auto;
  }
}

.form-wrapper {
  width: 450px;
  margin: auto;
}

.center {
  text-align: center;
}
</style>
