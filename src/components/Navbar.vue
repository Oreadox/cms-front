<template>
  <div class="layout">
    <Layout>
      <Header class="header">
        <Menu mode="horizontal" theme="light">
          <div class="layout-nav">
            <MenuItem name="login">
              <Button type="primary" v-on:click="toLogin">登录</Button>
            </MenuItem>
            <MenuItem name="register">
              <Button v-on:click="toRegister">注册</Button>
            </MenuItem>
          </div>
        </Menu>
      </Header>
    </Layout>
  </div>
</template>
<script>


export default {
  name: "Navbar",
  methods:{
    toLogin:function (){
      this.$router.push('/login');
    },
    toRegister:function (){
      this.$router.push('/user/register')
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
</style>