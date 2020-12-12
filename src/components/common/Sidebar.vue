<template>
  <div>
    <Sider :style="{background: '#fff', position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}" width="15vw">
      <Menu :active-name="activeItem" width="15vw">
        <MenuItem name="home" to="/user/home">
          <Icon type="ios-navigate"></Icon>
          <span>首页</span>
        </MenuItem>
        <MenuItem name="profile" to="/user/profile">
          <Icon type="ios-keypad"></Icon>
          <span>账户信息</span>
        </MenuItem>
        <MenuItem name="conference" to="/conference/">
          <Icon type="ios-paper"></Icon>
          <span>会议</span>
        </MenuItem>
        <MenuItem name="message" to="/user/message">
          <Icon type="ios-mail"></Icon>
          <span>站内信息</span>
        </MenuItem>
      </Menu>
    </Sider>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  data() {
    return {
      activeItem: "home"
    }
  },
  mounted() {
    this.switchItem()
  },
  methods: {
    switchItem() {
      var path = this.$route.path
      if (path === '/user/home') {
        this.activeItem = 'home'
      } else if (path === '/user/profile') {
        this.activeItem = 'profile'
      } else if (path.startsWith('/conference')) {
        this.activeItem = 'conference'
      } else if (path === '/user/message') {
        this.activeItem = 'message'
      }
    }
  }
}
</script>

<style scoped>
.sider {
  max-width: 500px;
  width: 500px;
}
</style>