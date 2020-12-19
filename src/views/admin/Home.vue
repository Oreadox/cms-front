<template>
  <div>
    <Row>
      <Col span="8" >
    <Card to="/admin/user">
      用户数：{{userNumber}}
    </Card>
      </Col >
      <Col span="8" offset="2">
        <Card to="/admin/conference">
          进行中的会议：{{ conferenceNumber }}
        </Card>
      </Col>
    </Row>
    <Divider></Divider>
    <Row >
      <Col span="8" >
        <Card to="/admin/hotel">
          合作酒店数：{{ hotelNumber }}
        </Card>
      </Col>
      <Col span="8" offset="2">
        <Card to="/admin/driver">
          合作车队数：{{ driverNumber }}
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: "home",
  data(){
    return{
      userNumber:1000,
      conferenceNumber: 10,
      hotelNumber:5,
      driverNumber:8,
    }
  }

}
</script>


<style scoped>
Card{
  color: #515a6e;
}
</style>