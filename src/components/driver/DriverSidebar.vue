<template>
  <div>
    <Sider :style="{background: '#fff', position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}" width="15vw">
      <Menu :active-name="activeItem" width="15vw">
        <MenuItem name="conference" to="/driver/reservation">
          <Icon type="ios-paper"></Icon>
          <span>订单管理</span>
        </MenuItem>
        <MenuItem name="profile" to="/driver/profile">
          <Icon type="ios-keypad"></Icon>
          <span>账户信息</span>
        </MenuItem>
        <MenuItem name="message" to="/driver/message">
          <Icon type="ios-mail"></Icon>
          <span>站内信息</span>
        </MenuItem>
      </Menu>
    </Sider>
  </div>
</template>
<script>
export default {
  name: "DriverSiderbar",
  data() {
    return {
      activeItem: "home"
    }
  },
  created() {
    this.switchItem()
  },
  methods: {
    switchItem() {
      var path = this.$route.path
      if (path === '/driver/profile') {
        this.activeItem = 'profile'
      } else if (path==='/driver/reservation') {
        this.activeItem = 'reservation'
      } else if (path === '/driver/message') {
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