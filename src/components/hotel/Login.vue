<template>
  <div class='form'>
    <Layout width = 300>
        <card>
      <h1 style="text-align: center">{{ selected }}登录</h1>
          <Select  v-model="selected"  size="small" style="width:80px; margin: 0 auto; display: block; ">
            <Option v-for="item in userList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
      <Form ref="formItem" :model="formItem" :rules="fromValidate" :label-width="80">
      <FormItem label="账号" prop="username">
        <Input autofocus  v-model="formItem.username"  placeholder="enter your name" style="width: 300px"/>
      </FormItem>
      <FormItem  label="密码" prop="password">
        <Input  v-model="formItem.password"  type="password" password placeholder="enter your password"  style="width: 300px"/>
      </FormItem>
          <Button type="primary" class="button"  @click="goto_submit('formItem')">登录</Button>
          <div v-if="selected==='用户'">
            <Button class="button"  @click="goto_register">注册</Button>
          </div>
          <div v-else>
            <Button class="button" block @click="goto_back">返回</Button>
          </div>
    </Form>
        </card>
    </Layout>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {

    return {
      formItem: [{
        usertype:'',
        username:'',
        password:'',

    }],

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
      fromValidate:{
        username: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {type: 'string', min: 8, message: '密码至少需8位', trigger: 'blur'},
          {type: 'string', max: 32, message: '密码最多32位', trigger: 'blur'},
          {pattern: /(?=.*[0-9])(?=.*[a-zA-Z])/, message: '密码需包含字母和数字', trigger: 'blur'},
        ]
      }
    }
  },
  methods: {
    goto_back() {

    },
    goto_register(){
      this.$router.push('/user/register')
    },
    goto_submit(data){
      this.$set(this.formItem,'usertype',this.selected)
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
.form {
  width: 20%;
  margin: 5% auto;
}
</style>