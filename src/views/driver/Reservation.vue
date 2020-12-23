<template>
  <div>
    <Card dis-hover :bordered=false>
      <div>
        <!--        <Button @click="showFinish = !showFinish">已结束</Button>-->
        <Collapse v-model="showingPanel" simple>
          <Panel name="waitingConfirm">
            待确认
            <div slot="content">
              <Table :columns="this.columns" :data="this.waitingConfirmConference" :stripe="true"
                     max-height="500px" style="overflow-y: auto">
              </Table>
            </div>
          </Panel>
          <Panel name="processing">
            进行中
            <div slot="content">
              <Table :columns="this.columns" :data="this.processingConference" :stripe="true"
                     max-height="500px" style="overflow-y: auto">
              </Table>
            </div>
          </Panel>
          <Panel name="ended">
            已结束
            <div slot="content">
              <Table :columns="this.columns" :data="this.endedConference" :stripe="true"
                     max-height="500px" style="overflow-y: auto">
              </Table>
            </div>
          </Panel>
        </Collapse>
      </div>
    </Card>
  </div>
</template>

<script>
// import CollapseTransition from "@/plugins/CollapseTransition"

export default {
  name: "reservation",
  components: {
    // 'CollapseTransition': CollapseTransition,
  },
  data() {
    return {
      columns: [
        {
          key: 'userId',
          title: '用户编号'
        },
        {
          key: 'reserveTime',
          title: '发送预约时间'
        },

        {
          key: 'name',
          title: '顾客姓名'
        },

        {
          key: 'arriveSite',
          title: '到站地点'
        },

        {
          key: 'arriveTime',
          title: '到站时间'
        },

        {
          title: '详情',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.row.userId, params.row)
                  }
                }
              }, '查看'),
            ]);
          }
        },
      ],
      waitingConfirmConference: [{
        conferenceId:'',
        userId:'',
        name:'',
        gender:'',
        telephone:'',
        arriveTime:'',
        arriveSite:'',
        reserveTime:'',
        driverCheck:'',
        driverId:'',
        pickupTime:'',
        pickupSite:'',
        carNumber:'',
        userCheck:'',
      }],
      processingConference: [{
        conferenceId:'',
        userId:'',
        name:'',
        gender:'',
        telephone:'',
        arriveTime:'',
        arriveSite:'',
        reserveTime:'',
        driverCheck:'',
        driverId:'',
        pickupTime:'',
        pickupSite:'',
        carNumber:'',
        userCheck:'',
      }],
      endedConference: [{
        conferenceId:'',
        userId:'',
        name:'',
        gender:'',
        telephone:'',
        arriveTime:'',
        arriveSite:'',
        reserveTime:'',
        driverCheck:'',
        driverId:'',
        pickupTime:'',
        pickupSite:'',
        carNumber:'',
        userCheck:'',
      }],
      showingPanel: ["waitingConfirm",'ended', 'processing'],
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
        url: `${this.$baseURI}/api/driver/reservation/unchecked`,
      }).then(function (response) {
        that.waitingConfirmConference = []
        response['data'].forEach(v => {
          var newData = {
            conferenceId:v['conferenceId'],
            userId:v['userId'],
            name:v['name'],
            gender:v['gender'],
            telephone:v['telephone'],
            arriveTime:new Date(v['arriveTime']),
            arriveSite:v['arriveSite'],
            reserveTime:new Date(v['reserveTime']),
            driverCheck:v['driverCheck'],
            driverId:v['driverId'],
            pickupTime:new Date(v['pickupTime']),
            pickupSite:v['pickupSite'],
            carNumber:v['carNumber'],
            userCheck:v['userCheck'],
          }
          that.waitingConfirmConference.append(newData)
        });
      })
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/driver/reservation/checked`,
      }).then(function (response) {
        that.processConference = []
        response['data'].forEach(v => {
          var newData = {
            conferenceId:v['conferenceId'],
            userId:v['userId'],
            name:v['name'],
            gender:v['gender'],
            telephone:v['telephone'],
            arriveTime:new Date(v['arriveTime']),
            arriveSite:v['arriveSite'],
            reserveTime:new Date(v['reserveTime']),
            driverCheck:v['driverCheck'],
            driverId:v['driverId'],
            pickupTime:new Date(v['pickupTime']),
            pickupSite:v['pickupSite'],
            carNumber:v['carNumber'],
            userCheck:v['userCheck'],
          }
          that.processConference.push(newData)
        });
      })
      this.$axios({
        method:'post',
        url:`${this.$baseURI}/api/driver/reservation/ended`,
      }).then(function (response) {
        that.endedConference = []
        response['data'].forEach(v => {
          var newData = {
            conferenceId:v['conferenceId'],
            userId:v['userId'],
            name:v['name'],
            gender:v['gender'],
            telephone:v['telephone'],
            arriveTime:new Date(v['arriveTime']),
            arriveSite:v['arriveSite'],
            reserveTime:new Date(v['reserveTime']),
            driverCheck:v['driverCheck'],
            driverId:v['driverId'],
            pickupTime:new Date(v['pickupTime']),
            pickupSite:v['pickupSite'],
            carNumber:v['carNumber'],
            userCheck:v['userCheck'],
          }
          that.endedConference.push(newData)
        });
      })
    },
    show(userId, data) {
      /*            this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.conference[index].name}<br>Age：${this.conference[index].address}<br>Address：${this.conference[index].startTime}`
                  })*/
      this.$router.push({path:`/driver/detail/${userId}`, query: {data}})
    },

  }
}
</script>

<style scoped>
>>> .ivu-collapse-content, >>> .ivu-collapse-content-box {
  padding: 0;
}

>>> .ivu-table tr:last-child td, th {
  border-bottom: none;
}

>>> .ivu-table::before {
  height: 0;
}

>>> .ivu-table-overflowX {
  overflow-x: hidden;
}
</style>