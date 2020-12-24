<template>
  <div>
    <Form hide-required-mark style="margin-top: 5%" :rules="formValidate" ref="formItem" :model="formItem">
      <h2 style="text-align: center">修改个人信息</h2>

      <FormItem label="酒店名" prop="name">
        <Input type="text" v-model="formItem.name"/>
      </FormItem>

      <FormItem label="联系电话" prop="phone">
        <Input type="text" v-model="formItem.phone"/>
      </FormItem>

      <FormItem label="酒店地址" prop="address">
        <Input type="text" v-model="formItem.address"/>
      </FormItem>

      <FormItem label="酒店简介" prop="detail">
        <Input type="textarea" v-model="formItem.detail"/>
      </FormItem>
      <FormItem>
        <Button style="float: right; margin-left: 16px" type="primary" @click="submitForm('formItem')">修改
        </Button>
        <Button type="text" style="float: right; " @click="function() {resetForm('formItem');cancelButton()}">取消
        </Button>
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
        name: this.hotelData.name,
        phone: this.hotelData.phone,
        address: this.hotelData.address,
        detail: this.hotelData.detail,
      },

      formValidate: {
        name: [
          {required: true, message: '酒店名不能为空', trigger: 'blur'},
        ],
        phone: [
          {required: true, message: '联系电话不能为空', trigger: 'blur'},
          {pattern: /^[0-9]{11}$/, message: '联系电话不合法', trigger: 'blur'}
        ],
        address: [
          {required: true, message: '酒店地址不能为空', trigger: 'blur'},
        ],
        detail: [
          {required: true, message: '酒店简介不能为空', trigger: 'blur'},
        ],
      }

    }
  },

  props: ['hotelData'],
  methods: {
    setForm(value) {
      this.formItem.name = value.name
      this.formItem.phone = value.phone
      this.formItem.address = value.address
      this.formItem.detail = value.detail
    },
    resetForm(name) {
      this.$refs[name].resetFields();
    },
    cancelButton() {
      this.$emit('gotoProfile', false);
    },
    submitForm(name) {
      var that = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          let data = {
            name: this.formItem.name,
            address: this.formItem.address,
            detail: this.formItem.detail,
            telephone: this.formItem.phone,
          }
          // console.log(that.formItem.birthday)
          that.$axios({
                method: 'post',
                url: `${that.$baseURI}/api/hotel/profile/modify`,
                data: data
              }).then(function (response) {
            if (response['data']['success'] === true) {
              that.$Message.success("修改成功");
              setTimeout(()=>{
                that.$router.go(0)
              },500)
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