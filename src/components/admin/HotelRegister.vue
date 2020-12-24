<template>
  <div style="padding: 0">
    <h2 class="center">注册</h2>
    <Form hide-required-mark ref="formItem" :model="formItem" :rules="fromValidate" :label-width="80">
      <FormItem label="用户名" prop="username">
        <Input v-model="formItem.username" placeholder="长度为2-16的字符"></Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input password v-model="formItem.password" placeholder="长度为8-32, 需包含字母和数字"></Input>
      </FormItem>
      <FormItem label="酒店名" prop="name">
        <Input style="width: 100px"  v-model="formItem.name"></Input>
      </FormItem>
      <FormItem label="地址" prop="address">
        <Input  v-model="formItem.address" ></Input>
      </FormItem>
      <FormItem label="详情" prop="detail">
        <Input type="textarea"  v-model="formItem.detail" ></Input>
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
  name: "HotelRegister",
  data() {
    return {
      formItem: {
        username: '',
        password: '',
        name: '',
        address: '',
        detail: '',
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
        address: [
          {required: true, message: '地址不能为空', trigger: 'blur'},
        ],
        detail: [
          {required: true, message: '详情不能为空', trigger: 'blur'},
        ],
        telephone: [
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
            address: this.formItem.address,
            detail: this.formItem.detail,
            telephone: this.formItem.telephone,
            // name: '',
            // address: '',
            // detail: '',
            // telephone: '',
          }
          this.$axios(
              {
                method: 'post',
                url: `${this.$baseURI}/api/admin/hotel/add`,
                data: data
              }
          ).then(function (response) {
            if(response['data']['success']===true){
              that.$Message.success("注册成功");
              setTimeout(function(){
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