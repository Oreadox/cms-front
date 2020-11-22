<template>
  <div class="form-wrapper">
    <form class="bg-white">
      <h1 id="login-name" class="text-title">{{ login - name }}登录</h1>
      <div class="field-group">
        <label class="label" for="user-id">账号</label>
        <input class="input" type="text" id="user-id" name="user-id" placeholder=""/>
        <div id="seclected">
          <Select v-model="model2" size="small" style="width:100px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </div>
      <div class="field-group">
        <label class="label" for="user-password">密码</label>
        <input class="input" type="password" id="user-password" name="password" placeholder=""/>
        <a href="#forgot" class="link-forgot"></a>
      </div>

      <div class="field-group">
        <input class="btn-submit" type="submit" @click="login" value="登录"/>
      </div>
    </form>
    <div class="bg-grey">
      <div v-if="value === '用户'">
        <a href="#register" class="link-register">注册</a>
      </div>
      <div v-else><a href="#back" class="link-register">返回</a></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "InputBox",
  data() {
    return {
      cityList: [
        {
          value: '用户',
          label: '用户'
        },
        {
          value: '司机',
          label: '司机'
        },
        {
          value: '酒店',
          label: '酒店'
        },
        {
          value: '管理员',
          label: '管理员'
        },
      ],
      model2: '',
      /*      model3: '',
            model4: ''*/
    }
  },
  methods: {
    login() {
      axios({
        methods: 'get',
        url: '/api/user/login',
        data: [],
      }).then(function (resp) {
        console.log(resp)
      })
    }
  }
  // template:
  /*  methods:{
      gotoLogin(){
        this.$router.push("")
      }
    }*/
}
</script>

<style scoped>
html {
  font-size: 16px;
  /* If you set different base font, you might need more tweak */
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: rgb(242, 245, 247);
  color: #4D5068;
  font-family: 'Open Sans', sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.content-body {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-image: url("../assets/img/undraw_secure_login_pdn4.svg");
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  position: relative;
  background-size: 1100px;
}

@media screen and (max-width: 640px) {
  .content-body {
    background-position-y: top;
    background-size: 250px;
    margin-bottom: 5em;
    /* tweak for footer fixed -- you don't need this */
  }
}

.form-wrapper {
  width: 350px;
  margin: 0 auto;
  top: 50%;
}

@media screen and (max-width: 640px) {
  .form-wrapper {
    margin-top: 200px;
  }
}

@media screen and (max-width: 480px) {
  .form-wrapper {
    width: 90%;
  }
}

.bg-white {
  width: 100%;
  background-color: #fff;
  border: 2px solid #e5e7ec;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 1em;
  text-align: center;
}

.bg-grey {
  width: 100%;
  background-color: #f8fafc;
  border: 2px solid #e5e7ec;
  border-top: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1em;
  text-align: center;
}

.text-title {
  font-size: 1.5rem;
  font-weight: 600;
}

.field-group {
  border: 0;
  padding: 0.35em 0 0.625em 0;
  text-align: left;
  position: relative;
}

.label {
  font-size: .9rem;
  line-height: 1.5;
}

.input {
  padding: .5em 0 .5em 1em;
  width: 100%;
  border: 1px solid #e5e7ec;
  border-radius: 5px;
  outline: 0;
  box-sizing: border-box;
}

.btn-submit {
  background-color: #2baee9;
  color: #fff;
  padding: .7em;
  border-radius: 5px;
  outline: 0;
  border: 0;
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
}

.link-forgot {
  position: absolute;
  right: 10px;
  margin-top: 1em;
  font-size: .8rem;
  text-decoration: none;
  color: #ffffff;
  z-index: 2;
}

.link-register {
  background-color: #fff;
  display: flex;
  padding: .7em;
  justify-content: center;
  text-decoration: none;
  color: #4D5068;
  border: 1px solid #e5e7ec;
  border-radius: 5px;
  margin-bottom: 1em;
}

.link-about > a {
  color: #4D5068;
  text-decoration: underline;
}
</style>


