<template>
  <div>
    <Sider :style="{background: '#fff', position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}" width="15vw">
      <Menu :active-name="activeItem" @on-select="switchItem"   width="15vw">
        <MenuItem name="home" >
          <Icon type="ios-home" />
          <span>系统信息</span>
        </MenuItem>
        <MenuItem name="user" >
          <Icon type="ios-person" />
          <span>用户管理</span>
        </MenuItem>
        <MenuItem name="conference" >
          <Icon type="ios-cafe"/>
          <span>会议管理</span>
        </MenuItem>
        <MenuItem name="hotel" >
          <Icon type="ios-home" />
          <span>酒店管理</span>
        </MenuItem>
        <MenuItem name="driver" >
          <Icon type="ios-car" />
          <span>车队管理</span>
        </MenuItem>
        <MenuItem name="personalInfo" >
          <Icon type="ios-person" />
          <span>个人信息</span>
        </MenuItem>
        <MenuItem name="message" >
          <Icon type="ios-mail"></Icon>
          <span>站内信息</span>
        </MenuItem>

      </Menu>
    </Sider>
  </div>
</template>

<script>
import router from "@/router/router";

export default {
  name: "Sidebar",
  data() {
  return {
    activeItem: "home",

    events:"",
  }
},
  watch:{
    },
  methods: {
    switchItem(ItemName) {
      // var nowPath = this.$route.path;
      var path = "/admin/"+ItemName;
      if (path!==this.$route.path)
        router.push(path);
    }
  }
}
</script>

<style scoped>

</style>