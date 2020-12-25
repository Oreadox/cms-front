<template>
  <div>
    <Sider :style="{background: '#fff', position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}" width="15vw">
      <Menu :active-name="activeItem" width="15vw">
        <MenuItem name="home" to="/admin/home">
          <Icon type="ios-home"/>
          <span>系统信息</span>
        </MenuItem>
        <MenuItem name="user" to="/admin/user">
          <Icon type="ios-person"/>
          <span>用户管理</span>
        </MenuItem>
        <MenuItem name="conference" to="/admin/conference">
          <Icon type="ios-cafe"/>
          <span>会议管理</span>
        </MenuItem>
        <MenuItem name="hotel" to="/admin/hotel">
          <Icon type="ios-home"/>
          <span>酒店管理</span>
        </MenuItem>
        <MenuItem name="driver" to="/admin/driver">
          <Icon type="ios-car"/>
          <span>车队管理</span>
        </MenuItem>
        <MenuItem name="personalInfo" to="/admin/personalInfo">
          <Icon type="ios-person"/>
          <span>个人信息</span>
        </MenuItem>
        <MenuItem name="message" to="/admin/message">
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
      activeItem: "home",
      events: "",
    }
  },
  created() {
    this.switchItem()
  },
  methods: {
    switchItem() {
      var path = this.$route.path
      if (path === '/admin/home') {
        this.activeItem = 'home'
      } else if (path === '/admin/user') {
        this.activeItem = 'user'
      } else if (path === '/admin/conference') {
        this.activeItem = 'conference'
      } else if (path === '/admin/hotel') {
        this.activeItem = 'hotel'
      } else if (path === '/admin/driver') {
        this.activeItem = 'driver'
      } else if (path === '/admin/personalInfo') {
        this.activeItem = 'personalInfo'
      } else if (path === '/admin/message') {
        this.activeItem = 'message'
      }
    }
  }
}
</script>

<style scoped>

</style>