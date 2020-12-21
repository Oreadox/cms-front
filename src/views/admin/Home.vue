<template>
  <div>
    <Row>
      <Col span="8" offset="2">
        <Card dis-hover class="card" to="/admin/user">
          <i-circle
              :trail-width="4"
              :stroke-width="5"
              :size="radius"
              :percent="userNumber*100/(conferenceNumber*5+userNumber)"
              stroke-linecap="square"
              stroke-color="#43a3fb">
            <div class="demo-Circle-custom">
              <h1>{{ userNumber }}</h1>
              <p>用户数</p>
            </div>
          </i-circle>
        </Card>
      </Col>
      <Col span="8" offset="1">
        <Card dis-hover class="card" to="/admin/conference">
          <i-circle
              :trail-width="4"
              :stroke-width="5"
              :size="radius"
              :percent="conferenceNumber*5*100/(conferenceNumber*5+userNumber)"
              stroke-linecap="square"
              stroke-color="#43a3fb">
            <div class="demo-Circle-custom">
              <h1>{{ conferenceNumber }}</h1>
              <p>进行中的会议数</p>
            </div>
          </i-circle>
        </Card>
      </Col>
    </Row>
    <br>
    <Row>
      <Col span="8" offset="2">
        <Card dis-hover class="card" to="/admin/hotel">
          <i-circle
              :trail-width="4"
              :stroke-width="5"
              :size="radius"
              :percent="hotelNumber*100/(driverNumber+hotelNumber)"
              stroke-linecap="square"
              stroke-color="#43a3fb">
            <div class="demo-Circle-custom">
              <h1>{{ hotelNumber }}</h1>
              <p>合作酒店数</p>
            </div>
          </i-circle>
        </Card>
      </Col>
      <Col span="8" offset="1">
        <Card dis-hover class="card" to="/admin/driver">
          <i-circle
              :trail-width="4"
              :stroke-width="5"
              :size="radius"
              :percent="driverNumber*100/(driverNumber+hotelNumber)"
              stroke-linecap="square"
              stroke-color="#43a3fb">
            <div class="demo-Circle-custom">
              <h1>{{ driverNumber }}</h1>
              <p>合作车队数</p>
            </div>
          </i-circle>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      radius: 150,
      userNumber: 100,
      conferenceNumber: 10,
      hotelNumber: 5,
      driverNumber: 8,
    }
  },
  created() {
    this.radius = window.innerHeight * 0.3 >= 200 ? 200 : window.innerHeight * 0.3
  }
}
</script>


<style scoped>
.card {
  color: #515a6e;
  width: 25vw;
  height: 35vh;
  text-align: center;
  border: none;
}
</style>