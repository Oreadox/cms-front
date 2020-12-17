<template>
  <div>
    <Sider :style="{background: '#fff', position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}" width="15vw">
      <Menu :active-name="activeItem" width="15vw">
        <MenuItem name="conference" to="/hotel/reservation">
          <Icon type="ios-paper"></Icon>
          <span>订单管理</span>
        </MenuItem>
        <MenuItem name="profile" to="/hotel/profile">
          <Icon type="ios-keypad"></Icon>
          <span>账户信息</span>
        </MenuItem>
        <MenuItem name="message" to="/hotel/message">
          <Icon type="ios-mail"></Icon>
          <span>站内信息</span>
        </MenuItem>
      </Menu>
    </Sider>
  </div>
</template>
<script>
export default {
  name: "HotelSidebar",
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
      if (path === '/hotel/profile') {
        this.activeItem = 'profile'
      } else if (path.startsWith('/conference')) {
        this.activeItem = 'conference'
      } else if (path === '/hotel/message') {
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