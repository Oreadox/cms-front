<template>
<div>
  <Form hide-required-mark style="margin-top: 5%" :rules="fromValidate" ref="formItem" :model="formItem">
    <h2 style="text-align: center">修改{{modelInfo.changedTitle}}</h2>
    <FormItem show-message :label="modelInfo.changedTitle">
      <Input  disabled :placeholder=userData[modelInfo.changedType]></Input>
    </FormItem>
    <FormItem label="新密码" prop="password" v-if="modelInfo.changedType==='password'">
      <Input type="password" password v-model="formItem.newInfo" placeholder="长度为8-32, 需包含字母和数字"></Input>
    </FormItem>
    <FormItem label="确认密码" prop="passwordCheck" v-if="modelInfo.changedType==='password'">
      <Input type="password" password v-model="formItem.passwordCheck" placeholder="重复上述的密码"></Input>
    </FormItem>
    <FormItem label="性别" prop="gender" v-else-if="modelInfo.changedType==='gender'">
      <RadioGroup v-model="formItem.newInfo">
        <Radio label="MALE">男</Radio>
        <Radio label="FEMALE">女</Radio>
      </RadioGroup>
    </FormItem>
    <!-- TODO:注册改了生日记得复制过来 -->
    <FormItem label="年龄" prop="age" v-else-if="modelInfo.changedType==='age'">
      <InputNumber :max="200" :min="0" v-model="formItem.newAge"></InputNumber>
    </FormItem>
    <FormItem :label="'新的'+modelInfo.changedTitle" :prop="modelInfo.changedType" v-else>
      <Input v-model="formItem.newInfo" ></Input>
    </FormItem>
    <FormItem>
      <Button style="float: right; margin-left: 16px" type="primary" @click="submitForm()">修改</Button>
      <Button type="text" style="float: right; " @click="cancelButton()" >取消</Button>
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
      // var err
      this.$axios(
          {
            method: 'post',
            url: this.$baseURI + '/api/register/checkUsername',
            data: {
              "username": value
            }
          }
      ).then(function (response) {
        if(response['data']['data']===false){
          callback(new Error('用户名重复'))
        } else {
          callback();
        }
      })
    }
    //把Profile的页面逻辑修改成动态接受值。
    return {
      // changeType: this.dataType,
      // changeValue: this.dataTitle,
      // // oldUserInfo: this.dataToChild.userName,
      formItem: {
        newInfo: '',
        newAge: Number,
        passwordCheck: '',
      },

      fromValidate: {
        username: [
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
        age: [
          {type: 'number', required: true, message: '年龄不能为空', trigger: 'blur'},
        ],
        idCard: [
          {required: true, message: '身份证号不能为空', trigger: 'blur'},
          {
            pattern: /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
            , message: '身份证号不合法', trigger: 'blur'
          }
        ],
        workUnit: '',
        phone: [
          {required: true, message: '手机号码不能为空', trigger: 'blur'},
          {pattern: /^[1][0-9]{10}$/, message: '手机号不合法', trigger: 'blur'}
        ]
      }

    }
  },
  props:['userData','modelInfo'],
  methods: {
    resetForm(){
      this.formItem.newInfo= ''
      this.formItem.newAge= Number
      this.formItem.passwordCheck= ''
    },

    cancelButton(){
      this.$emit('gotoProfile', false);
      this.resetForm();
    },
    submitForm() {
      this.$Message.success("修改成功");
      // this.$refs['formItem'].validate(() => {
      //
      // })
    }
  }
}
</script>

<style scoped>

</style>