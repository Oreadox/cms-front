<template>
  <div>
    <Form hide-required-mark style="margin-top: 5%" :rules="formValidate" ref="formItem" :model="formItem">
      <h2 style="text-align: center">修改个人信息</h2>

      <FormItem label="姓名" prop="name" >
        <Input type="text" v-model="formItem.name"/>
      </FormItem>

      <FormItem label="联系电话" prop="telephone">
        <Input type="text" v-model="formItem.telephone"/>
      </FormItem>

      <FormItem label="邮箱" prop="email">
        <Input type="text" v-model="formItem.email"/>
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
    return {
      formItem: {
        name: this.adminData.name,
        telephone: this.adminData.telephone,
        email: this.adminData.email,
      },

      formValidate: {
        name: [
          {required: true, message: '姓名不能为空', trigger: 'blur'},
        ],
        telephone: [
          {required: true, message: '联系电话不能为空', trigger: 'blur'},
          {pattern: /^[1][0-9]{10}$/, message: '电话号码不合法', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '邮箱不能为空', trigger: 'blur'},
          {type: 'email', message: '邮箱不合法', trigger: 'blur'}
        ],
      }
    }
  },

  props:['adminData'],

  methods:{
    setDataDefault() {
      this.formItem.name = this.adminData.name
      this.formItem.telephone = this.adminData.telephone
      this.formItem.email = this.adminData.email
    },
    resetForm(name) {
      this.$refs[name].resetFields();
    },
    cancelButton() {
      this.$emit('gotoProfile', false);
    },
    submitForm() {
      let that = this
      this.$refs['formItem'].validate((valid) => {
        if (valid) {
          let data = {
            name: this.formItem.name,
            telephone: this.formItem.telephone,
            email: this.formItem.email,
          }
          this.$axios(
              {
                method: 'post',
                url: `${this.$baseURI}/api/admin/profile/modify`,
                data: data
              }
          ).then(function (response) {
            if (response['data']['success'] === true) {
              that.$Message.success("修改成功");
            } else {
              that.$Message.error(response['data']['message']);
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>