<template>
  <div style="padding: 0">
    <h2 class="center" style="margin-bottom: 5%">添加车队</h2>
    <Form hide-required-mark ref="formItem" :model="formItem" :rules="fromValidate" :label-width="80">
      <FormItem label="车队名" prop="name">
        <Input v-model="formItem.name"></Input>
      </FormItem>
      <FormItem label="联系电话" prop="phone">
        <Input v-model="formItem.phone"></Input>
      </FormItem>
      <FormItem label="详情" prop="detail">
        <Input type="textarea" v-model="formItem.detail" class="input_size"></Input>
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
  name: "FleetRegister",
  data() {
    return {
      formItem: {
        name: '',
        phone: '',
        detail: ''
      },
      fromValidate: {
        name: [
          {required: true, message: '车队名不能为空', trigger: 'blur'},
        ],
        phone: [
          {required: true, message: '联系电话不能为空', trigger: 'blur'},
        ],
        detail: [
          {required: true, message: '详情不能为空', trigger: 'blur'},
        ],
      }
    }
  },
  methods: {
    submitForm(name) {
      var that = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          var data = {
            name: this.formItem.name,
            detail: this.formItem.detail,
            telephone: this.formItem.phone
          }
          this.$axios(
              {
                method: 'post',
                url: `${this.$baseURI}/api/admin/fleet/add`,
                data: data
              }
          ).then(function (response) {
            if (response['data']['success'] === true) {
              that.$Message.success("注册成功");
              setTimeout(function () {
                that.$emit('setRegisterModal', false);
                that.resetForm(name)
              }, 300);
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

.input_size {
  width: 90%;
}
</style>