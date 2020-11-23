<template><div>
  <div class="layout">
    <Layout>
      <Header class="header">
        <Menu mode="horizontal" theme="light">
          <div class="layout-nav">
            <MenuItem name="login">
              <Button type="primary" v-on:click=childClick1>登录</Button>
            </MenuItem>
            <MenuItem name="register">
              <Button v-on:click=childClick2>注册</Button>
            </MenuItem>
          </div>
        </Menu>
      </Header>
    </Layout>

  </div>
</div></template>
<script>

export default {
  name: "Navbar",
  data(){
    return{
      modal1: false,
      modal2:false,

    }
  },
  methods:{
    childClick1(){
      this.modal1 = true;
      this.$emit('getModal1',this.modal1);
    },
    childClick2(){
      this.modal2 = true;
      this.$emit('getModal2',this.modal2);
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