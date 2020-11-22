<template>
  <div>
    <h1>{{ cityList.values() }}登录</h1>
    <form action="./api/login">
      <FormItem label="用户" prop="username">
        <Input v-model="value" name="user-name" placeholder="enter your name" style="width: 200px"/>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input v-model="value18" name="password" type="password" password placeholder="enter your password"
               style="width: 200px"/>
      </FormItem>
      <div>
        <Select v-model="model2" size="small" style="width:100px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <a-button type="primary" block>登录</a-button>
        <div v-if="cityList.value()==='用户'">
          <a-button block>注册</a-button>
        </div>
        <div v-else>
          <a-button block @click="do_something">返回</a-button>
        </div>
        <a-button type="link" block>
          注册
        </a-button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
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
      value: '',
      value18: '',
      model2: '',
    }
  },
  methods: {
    do_something() {


    }
  }
}

</script>

<style scoped>

</style>