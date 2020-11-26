<template>
  <div>
  <Menu mode="horizontal" :theme="light" active-name="1">
    <div style="float: right" >
    <MenuItem name="login">
      <Button type="primary" size="large" v-on:click=showLogin>登录</Button>
    </MenuItem>
    <MenuItem name="register">
      <Button  size="large" v-on:click=showRegister>注册</Button>
    </MenuItem>
    </div>
  </Menu>
</div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {}
  },
  methods: {
    showLogin() {
      this.$emit('setLoginModal', true);
    },
    showRegister() {
      this.$emit('setRegisterModal', true);
    }
  }
}
</script>
<style>
.layout-nav {
  width: 200px;
  margin: 0 auto;
  margin-right: 20px;
  text-align: right;
}
</style>

<!--
<template>
  <div>
    <div class="layout">
        <Header class="header">
          <Menu mode="horizontal" theme="light">
            <div class="layout-nav">
              <MenuItem name="login">
                <Button type="primary" v-on:click=showLogin>登录</Button>
              </MenuItem>
              <MenuItem name="register">
                <Button v-on:click=showRegister>注册</Button>
              </MenuItem>
            </div>
          </Menu>
        </Header>
    </div>
  </div>
</template>
<script>

export default {
  name: "Navbar",
  data() {
    return {}
  },
  methods: {
    showLogin() {
      this.$emit('setLoginModal', true);
    },
    showRegister() {
      this.$emit('setRegisterModal', true);
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #ffffff;
  padding: 0;
}

.layout {
  border: 1px solid #ffffff;
  background: #ffffff;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  padding: 0;
}

.layout-nav {
  width: 200px;
  margin: 0 auto;
  margin-right: 20px;
  text-align: right;
}
</style>-->
