<template>
  <div>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <Content :style="{padding: '24px', margin: 'auto auto auto 15vw'}">
        <div style="text-align: center">
          <div style="margin-top: 12vh">
            <h1>你好, 陈总</h1>
            <h2>welcome to NCU-CMS</h2>
          </div>
          <div>
            <Row style="margin-top: 5vh">
              <Col span="6" offset="9" >
                <Card to="/conference/create" class="card">
                  <p class="center">
                    <Icon type="ios-add-circle-outline" />
                    发起会议</p>
                </Card>
              </Col>
            </Row>
            <Row style="margin-top: 3vh">
              <Col span="6" offset="5">
                <Card to="/conference/participate" class="card">
                  <p class="center">我的会议</p>
                </Card>
              </Col>
              <Col span="6" offset="2">
                <Card to="/conference/detail" class="card">
                  <p class="center">加入会议</p>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
    </Content>
  </div>
</template>

<script>
import Navbar from "@/components/user/Navbar";
import Sidebar from "@/components/user/Sidebar";
export default {
name: "home",
  components: {Sidebar, Navbar}
}
</script>

<style scoped>
.card{
  color: #4d5669;
  font: 20px bold;
  height: 20vh;
}
.center{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>