<template>
  <header >
    <Menu mode="horizontal" active-name="1" >
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
          设计团队
        </MenuItem>
        <div slot="content">
          该描述点啥还得看项目经理啊
        </div>
      </Poptip>
      <div style="float: right">
      </div>
    </Menu>
  </header>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {}
  },
  methods: {}
}
</script>
<style>
.control-layout {
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
