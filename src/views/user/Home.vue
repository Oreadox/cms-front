<template>
  <Card dis-hover :bordered=false  :style="{padding: '24px', margin: 'auto auto auto 15vw'}">
    <div >
      <Content>
        <div style="text-align: center">
          <div style="margin-top: 12vh">
            <h1>你好, {{ userInfo['username'] }}</h1>
            <h2>welcome to NCU-CMS</h2>
          </div>
          <div style="position: relative; left: 4%; ">
            <Row style="margin-top: 5vh">
              <Col span="6" offset="1" justify="center">
                <Card to="/conference/create" class="card" >
                  <p class="center" >
                    <Icon type="ios-add-circle-outline"/>
                    发起会议
                  </p>
                </Card>
              </Col>
              <Col span="6" offset="1" justify="center">
                <Card to="/conference/participate" class="card" style="color: white; background-color: #5cadff;">
                  <p class="center">我的会议</p>
                </Card>
              </Col>
              <Col span="6" offset="1" justify="center">
                <Card to="/conference/detail" class="card">
                  <p class="center">加入会议</p>
                </Card>
              </Col>
            </Row>

          </div>
        </div>
      </Content>
    </div>
</Card>
</template>
<script>

  // const HomePage = () => import("@/components/user/HomePage");
  export default {
    name: "home",
    data(){
      return {
        userInfo: {
          username: 'xxx',

        }
      }
    },
  }
</script>

<style scoped>
.card{
  color: black;
  border: 1px solid gray;
  font: 20px bold;
  height: 18vh;
}
.center{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>