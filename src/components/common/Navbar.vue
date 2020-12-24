<template>
  <header>
    <Menu mode="horizontal" active-name="1">
      <img src="http://tvax4.sinaimg.cn/large/007YSV3xgy1gl45wx0lx7j30a00a0mxd.jpg"
           style="pointer-events: none;float: left;" class="control-layout">
      <!--    src 请放本地，本次仅供测试使用，最终图标待定-->
      <MenuItem name="home" to="/index">
        <Icon type="ios-people"/>
        欢迎使用CMS
      </MenuItem>

      <Poptip trigger="hover" class="control-layout">
        <MenuItem name="introduction">
          产品介绍
        </MenuItem>
        <div slot="content">
          该描述点啥就该找项目经理了
        </div>
      </Poptip>
      <Poptip trigger="hover" class="control-layout">
        <MenuItem name="designTeam">
          联系管理员
        </MenuItem>
        <div slot="content">
          <List class="List" style="margin-top: 5%; text-align: center" header="" footer="">
            <ListItem v-for="(value, key) in listItem.adminInfo" :key="key" :value="value"
                      v-model=adminData[value]>
              <a>
                {{ value }}：
                {{ adminData[key] }}
              </a>
                <!--              <Icon style="float: right" type="ios-arrow-forward"/>-->
            </ListItem>
          </List>
        </div>
      </Poptip>
      <div style="float: right; margin-right: 5%">
        <Dropdown>
          <a style="font-size: 20px">
              <Icon type="ios-person" size="24"/>
              {{ userInfo.username }}
          </a>
          <DropdownMenu  slot="list">
            <DropdownItem name="exit">
              <a @click="LogOut">退出登录</a></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Menu>
  </header>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      userInfo: {
        username: this.$store.state.username,
      },
      adminData: {
        id: '',
        accountId: '',
        name: '',
        telephone: '',
        email: ''
      },
      listItem:{
        adminInfo: {
          telephone: '手机号',
          email: '电子邮箱'
        },
      }
    }
  },
  created: function () {
    let _this=this;
    window.add_data=_this.add_data;
    this.initData()
  },
  methods: {
    initData() {

      var that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/admin/getAll`,
      }).then(function (response) {
        var respData = response["data"]
        that.adminData.id=respData['telephone']
        that.adminData.account=respData['accountId']
        that.adminData.name=respData['name']
        that.adminData.telephone=respData['telephone']
        that.adminData.email=respData["email"]
      })
      // console.log("123")
    },
    LogOut(){
      console.log("name")
      window.localStorage.clear()
      this.$Message.success('退出成功')
      this.$router.replace('/index')
    }
  }
}
</script>
<style>
a{
  color: black;
}
a:link{
  color: #2d8cf0;
}
a:hover{
  color: #5cadff;
}
.control-layout {
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
