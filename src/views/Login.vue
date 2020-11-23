<template>
  <div style="margin: 10%"  >
      <card  title="欢迎使用CMS" class="form-wrapper" >
        <h1 style="text-align: center">{{ selected }}登录</h1>
        <Select  v-model="selected"  size="small" style="width:80px; margin: 5px auto; display: block; ">
          <Option v-for="item in userList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Form hide-required-mark ref="formInline" :model="formInline" :rules="ruleInline" >
          <FormItem label="账号" prop="user">
            <Input  type="text" v-model="formInline.user" placeholder="手机号/账号">
            </Input>
          </FormItem>
          <FormItem label="密码" prop="password" >
            <Input  type="password"  password v-model="formInline.password" placeholder="密码">
          </Input>
          </FormItem>
          <FormItem>
          <Button type="primary" class="button"  long @click="goto_submit('formItem')">登录</Button>
          <div v-if="selected==='用户'">
            <Button class="button" long @click="goto_register">注册</Button>
          </div>
          <div v-else>
            <Button class="button" long block @click="goto_back">返回</Button>
          </div>
          </FormItem>
        </Form>
      </card>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {

    return {
      formInline: [{
        usertype:'',
        username:'',
        password:'',

      }],
      ruleInline: {
        user: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { type: 'string', min: 8, message: '密码至少需8位', trigger: 'blur' }
        ]
      },
      userList: [
        {
          value: '用户',
          label:'用户',
        },
        {
          value: '司机',
          label:'司机',
        },
        {
          value: '酒店',
          label:'酒店',
        },
        {
          value: '管理员',
          label:'管理员',
        },
      ],
      selected:'用户',
    }
  },
  methods: {
    goto_back() {
      this.$router.push('/index')
    },
    goto_register(){
      this.$router.push('/user/register')
    },
    goto_submit(data){
      this.$set(this.formInline,'usertype',this.selected)
      this.$refs[data].validate((valid) => {
        if (valid) {
          this.$axios(
              {
                method: 'post',
                url: './api/submit',
                data: {}
              }
          ).then(function (response) {
            console.log(response.data['message'])
          })
        }
      })
    }
  }
}

</script>

<style scoped>
.button{
  display: block;
  margin: 10px auto;
}

@media screen and (max-width: 640px) {
  .form-wrapper {
    width: 90%;
    margin: auto;
  }
}
  .form-wrapper{
    width: 350px;
    margin: auto;
  }

</style>