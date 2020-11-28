<template>
  <div style="margin: 10%">
<!--    <card title="欢迎使用CMS" class="form-wrapper">-->
      <h1 style="text-align: center">{{ selected }}登录</h1>
      <Select v-model="selected" size="small" style="width:80px; margin: 5px auto; display: block; ">
        <Option v-for="item in userList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Form hide-required-mark ref="formItem" :model="formItem" :rules="ruleInline">
        <FormItem label="账号" prop="user">
          <Input type="text" v-model="formItem.user" placeholder="手机号/账号">
          </Input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input type="password" password v-model="formItem.password" placeholder="密码">
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" class="button" long @click="submitForm('formItem')">登录</Button>
          <div v-if="selected==='用户'">
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
        user: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {type: 'string', min: 8, message: '密码至少需8位', trigger: 'blur'}
        ]
      },
      userList: [
        {
          value: '用户',
          label: '用户',
        },
        {
          value: '司机',
          label: '司机',
        },
        {
          value: '酒店',
          label: '酒店',
        },
        {
          value: '管理员',
          label: '管理员',
        },
      ],
      selected: '用户',
    }
  },
  methods: {
    gotoIndex() {
      this.$emit('setLoginModal', false);
    },
    gotoRegister() {
      // this.$router.push('/user/register')
      this.$emit('setLoginModal', false);
      this.$emit('setRegisterModal', true);
    },
    submitForm(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$axios(
              {
                method: 'post',
                url: 'https://mock.yonyoucloud.com/mock/16280/info',
                data: {}
              }
          ).then(function (response) {
            console.log(response.data['message'])
          })
        }
      })
    },
    resetForm(name) {
      this.$refs[name].resetFields();
    },  }
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