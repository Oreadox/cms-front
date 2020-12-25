<template>
  <Card dis-hover :bordered=false>
    <div>
      <Content>
        <div style="text-align: center">
          <div style="margin-top: 12vh">
            <h1>您好, {{ userInfo['username'] }}</h1>
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
                <Card to="/conference/list" class="card" style="color: white; background-color: #5cadff;">
                  <p class="center">我的会议</p>
                </Card>
              </Col>
              <Col span="6" offset="1" justify="center">
                <a @click="enterJoinNumber=true">
                  <Card  class="card">
                    <p class="center">加入会议</p>
                  </Card>
                </a>
              </Col>
            </Row>
          </div>
          <Modal
              style="padding: 20px"
              footer-hide
              :mask-closable="false"
              v-model="enterJoinNumber">
            <JoinConference></JoinConference>
          </Modal>
        </div>
      </Content>
    </div>
</Card>
</template>
<script>

  // const HomePage = () => import("@/components/user/HomePage");
  import JoinConference from "@/components/conference/JoinConference";
  export default {
    name: "home",
    components: {JoinConference},
    data(){
      return {
        enterJoinNumber: false,
        userInfo: {
          username: this.$store.state.username,

        }
      }
    },
    methods:{
    }
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