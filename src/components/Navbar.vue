<template>
  <div>
  <Menu mode="horizontal" active-name="1">
    <img src="http://tvax4.sinaimg.cn/large/007YSV3xgy1gl45wx0lx7j30a00a0mxd.jpg"
         style="pointer-events: none;float: left;" class="control-layout">
<!--    src 请放本地，本次仅供测试使用，最终图标待定-->
    <MenuItem name="home">
      <Icon type="ios-people" />
      欢迎使用CMS
    </MenuItem>

    <Poptip  trigger="hover" class="control-layout" >
      <MenuItem name="introduction">
        产品介绍
      </MenuItem>
      <div slot="content">
        该描述点啥就该找项目经理了
      </div>
    </Poptip>
    <Poptip trigger="hover" class="control-layout">
      <MenuItem name="designTeam">
        设计团队
      </MenuItem>
      <div slot="content">
        该描述点啥还得看项目经理啊
      </div>
    </Poptip>

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
.control-layout{
  height: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
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
