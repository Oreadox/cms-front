<template>
  <header>
    <Menu mode="horizontal" active-name="1">
      <img src="http://tvax4.sinaimg.cn/large/007YSV3xgy1gl45wx0lx7j30a00a0mxd.jpg"
           style="pointer-events: none;float: left;" class="control-layout">
      <!--    src 请放本地，本次仅供测试使用，最终图标待定-->
      <MenuItem name="home">
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
          电话:{{ adminInfo.telephone }}<br>
          邮箱:{{ adminInfo.email }}
        </div>
      </Poptip>
      <div style="float: right">
        <Submenu name="">
          <template slot="title">
            <Icon type="md-person"/>
            {{ userInfo.username }}
          </template>
          <MenuItem name="quit" to="/index">退出登录</MenuItem>
        </Submenu>
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
      adminInfo: {
        id: '',
        accountId: '',
        name: '',
        telephone: '',
        email: ''
      }
    }
  },
  created() {
    // this.initData()
  },
  methods: {
    initData() {
      var that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/admin/profile`,
      }).then(function (response) {
        that.adminInfo = []
        response['data'].forEach(v => {
          var newData = {
            id: v['id'],
            accountId: v['accountId'],
            name: v['name'],
            telephone: v['telephone'],
            email: v['email']
          }
          that.adminInfo.append(newData)
        });
      })
    }
  }
}
</script>
<style>
.control-layout {
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
