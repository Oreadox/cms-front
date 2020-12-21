<template>
  <div>
    <Form hide-required-mark style="margin-top: 5%" :rules="formValidate" ref="formItem" :model="formItem">
      <h2 style="text-align: center">修改个人信息</h2>

      <FormItem label="酒店名" prop="name" >
        <Input type="text" v-model="formItem.name"/>
      </FormItem>

      <FormItem label="联系电话" prop="phone">
        <Input type="text" v-model="formItem.phone"/>
      </FormItem>

      <FormItem label="酒店地址" prop="birthday">
        <Input type="text" v-model="formItem.address"/>
      </FormItem>

      <FormItem label="酒店简介" prop="detail">
        <Input type="textarea" v-model="formItem.detail"/>
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
        name:this.hotelData.name,
        phone: this.hotelData.celephone,
        address:this.hotelData.address,
        detail:this.hotelData.detail,

      },

      formValidate: {
        name: [
          {required: true, message: '酒店名不能为空', trigger: 'blur'},
        ],
        phone: [
          {required: true, message: '手机号码不能为空', trigger: 'blur'},
          {pattern: /^[1][0-9]{10}$/, message: '手机号不合法', trigger: 'blur'}
        ]
      }

    }
  },

  props: ['hotelData'],
  methods: {

    resetForm(name) {
      this.$refs[name].resetFields();
    },
    cancelButton() {
      this.$emit('gotoProfile', false);
    },
    submitForm() {
      let that = this
      let data= {
            name: this.formItem.name,
            address:this.formItem.address,
            detail:this.formItem.detail,
            telephone:this.formItem.phone,
      }

      // console.log(that.formItem.birthday)
      this.$axios(
          {
            method: 'post',
              url: `${this.$baseURI}/api/hotel/profile/modify`,
              data:data
          }
      ).then(function (response) {
        if (response['data']['success'] === true) {
          that.$Message.success("修改成功");
        } else {
          that.$Message.error(response['data']['message']);
        }
      })
    }
  }
}
</script>

<style scoped>

</style>