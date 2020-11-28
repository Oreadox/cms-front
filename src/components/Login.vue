<template>
  <div style="margin: 10%">
    <!--    <card title="欢迎使用CMS" class="form-wrapper">-->
    <h1 style="text-align: center">{{ userType[selected] }}登录</h1>
    <Select v-model="selected" size="small" style="width:80px; margin: 5px auto; display: block; ">
      <Option v-for="(value, key) in userType" :value="key" :key="key">{{ value }}</Option>
    </Select>
    <Form hide-required-mark ref="formItem" :model="formItem" :rules="ruleInline">
      <FormItem label="账号" prop="user">
        <Input type="text" v-model="formItem.username" placeholder="手机号/账号">
        </Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input type="password" password v-model="formItem.password" placeholder="密码">
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" class="button" long @click="submitForm('formItem')">登录</Button>
        <div v-if="selected==='user'">
          <Button class="button" long @click="function(){ resetForm('formItem');gotoRegister()}">注册</Button>
        </div>
        <div v-else>
          <Button class="button" long block @click="gotoIndex">返回</Button>
        </div>
      </FormItem>
    </Form>
    <!--    </card>-->
  </div>
</template>
<script>

export default {
  name: "Login",
  data() {
    return {
      formItem: [{
        usertype: '',
        username: '',
        password: '',
      }],
      ruleInline: {
        username: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {type: 'string', min: 8, message: '密码至少需8位', trigger: 'blur'}
        ]
      },
      userType: {
        user: '用户',
        driver: '司机',
        hotel: '酒店',
        admin: '管理员'
      },
      selected: 'user',
    }
  },
  methods: {
    gotoIndex() {
      this.$emit('setLoginModal', false);
    },
    gotoRegister() {
      this.$emit('setLoginModal', false);
      this.$emit('setRegisterModal', true);
    },
    submitForm(name) {
      var $this = this;
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$axios({
            method: 'post',
            url: 'https://mock.yonyoucloud.com/mock/16280/info',
            data: {}
          }).then(function (response) {
            if (response['status']===1){
              $this.$router.push(`/${$this.selected}/home`)
            } else {
              // todo: 给了接口文档记得改下
              $this.$router.push(`/${$this.selected}/home`)
              console.log(response)
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
.button {
  display: block;
  margin: 10px auto;
}

@media screen and (max-width: 640px) {
  .form-wrapper {
    width: 90%;
    margin: auto;
  }
}

.form-wrapper {
  width: 350px;
  margin: auto;
}

</style>