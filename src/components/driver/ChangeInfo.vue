<template>
  <div>
    <Form hide-required-mark style="margin-top: 5%" :rules="fromValidate" ref="formItem" :model="formItem">
      <h2 style="text-align: center">修改{{ modelInfo.changedTitle }}</h2>
      <FormItem show-message :label="modelInfo.changedTitle">
        <Input disabled :placeholder=driverData[modelInfo.changedType]></Input>
      </FormItem>
      <FormItem label="性别" prop="gender" v-if="modelInfo.changedType==='gender'">
        <RadioGroup v-model="formItem.newInfo">
          <Radio label="MALE">男</Radio>
          <Radio label="FEMALE">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="新密码" prop="password" v-if="modelInfo.changedType==='password'">
        <Input type="password" password v-model="formItem.newInfo" placeholder="长度为8-32, 需包含字母和数字"></Input>
      </FormItem>
      <FormItem label="确认密码" prop="passwordCheck" v-if="modelInfo.changedType==='password'">
        <Input type="password" password v-model="formItem.passwordCheck" placeholder="重复上述的密码"></Input>
      </FormItem>
      <FormItem :label="'新的'+modelInfo.changedTitle" :prop="modelInfo.changedType" v-else>
        <Input v-model="formItem.newInfo"></Input>
      </FormItem>
      <FormItem>
        <Button style="float: right; margin-left: 16px" type="primary" @click="submitForm(modelInfo.changedType)">修改
        </Button>
        <Button type="text" style="float: right; " @click="cancelButton()">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "ChangeInfo",
  data() {
    const validatePassCheck = (rule, value, callback) => {
      if (value !== this.formItem.password) {
        return callback(new Error('密码验证不一致'))
      } else {
        return callback()
      }
    };
    const validateUsername = (rule, value, callback) => {
      this.$axios(
          {
            method: 'post',
            url: this.$baseURI + '/api/register/checkUsername',
            data: {
              "username": value
            }
          }
      ).then(function (response) {
        if (response['data']['result'] === false) {
          callback(new Error('用户名重复'))
        } else {
          callback();
        }
      })
    }

    return {
      formItem: {
        newInfo: '',
        passwordCheck: '',
      },

      fromValidate: {
        account: [
          {required: true, message: '新用户名不能为空', trigger: 'blur'},
          {validator: validateUsername, trigger: 'blur'}
        ],
        password: [
          {required: true, message: '新密码不能为空', trigger: 'blur'},
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
        phone: [
          {required: true, message: '联系电话不能为空', trigger: 'blur'},
          {pattern: /^[1][0-9]{10}$/, message: '电话号码不合法', trigger: 'blur'}
        ],
        idCard: [
          {required: true, message: '身份证号不能为空', trigger: 'blur'},
          {
            pattern: /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
            , message: '身份证号不合法', trigger: 'blur'
          }
        ],
        team: [
          {required: true, message: '所属车队不能为空', trigger: 'blur'},
        ],
      }

    }
  },
  props: ['driverData', 'modelInfo'],
  methods: {
    resetForm() {
      this.formItem.newInfo = ''
      this.formItem.passwordCheck = ''
    },
    cancelButton() {
      this.$emit('gotoProfile', false);
      this.resetForm();
    },
    submitForm(changedType) {
      var that = this
      var data = {
        account:changedType==='account'? this.formItem.newInfo:this.driverData.account,
        name: changedType === 'name' ? this.formItem.newInfo : this.driverData.name,
        gender:changedType === 'gender' ? this.formItem.newInfo : this.driverData.gender,
        celephone:changedType === 'phone' ? this.formItem.newInfo : this.driverData.phone,
        idCard:changedType==='idCard'?this.formItem.newInfo:this.driverData.idCard,
        team:changedType==='team'?this.formItem.newInfo:this.driverData.team
      }
      this.$axios(
          {
            method: 'post',
            url: `${this.$baseURI}/api/driver/profile/modify`,
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
  }
}
</script>

<style scoped>

</style>