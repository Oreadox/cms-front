<template>
    <div>
      <Sider :style="{background: '#fff', position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}" width="15vw">
        <Menu active-name="home" width="15vw">
          <MenuItem name="home" to="/user/home">
            <Icon type="ios-navigate"></Icon>
            <span>首页</span>
          </MenuItem>
          <MenuItem name="profile" to="/user/profile">
            <Icon type="ios-keypad"></Icon>
            <span>账户信息</span>
          </MenuItem>
          <MenuItem name="conference" to="/conference/create">
            <Icon type="ios-paper"></Icon>
            <span>会议</span>
          </MenuItem>
          <MenuItem name="message" to="/user/message">
            <Icon type="ios-mail"></Icon>
            <span>站内邮箱</span>
          </MenuItem>
        </Menu>
      </Sider>
    </div>
</template>
<script>
export default {
  name: "Sidebar",
  data(){
    return{
    }
  },
}
</script>

<style scoped>
.sider {
  max-width: 500px;
  width: 500px;
}
</style>