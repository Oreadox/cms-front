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
          key: 'id',
          title: '用户编号'
        },
        {
          key: 'sendReservationTime',
          title: '发送预约时间'
        },

        {
          key: 'customerName',
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
                    this.show(params.row.id)
                  }
                }
              }, '查看'),
            ]);
          }
        },
      ],
      waitingConfirmConference: [{
        id:1,
        sendReservationTime:'2020-12-15',
        customerName:"one",
        arriveSite:"a",
        arriveTime:"2020-12-18",
      }],
      processingConference: [{
        id:2,
        sendReservationTime:'2020-12-15',
        customerName:"two",
        arriveSite:"b",
        arriveTime:"2020-12-18",
      }],
      endedConference: [{
        id:3,
        sendReservationTime:'2020-12-15',
        customerName:"three",
        arriveSite:"c",
        arriveTime:"2020-12-18",
      }],
      showingPanel: ["waitingConfirm",'ended', 'processing'],
    }
  },
  created() {
    this.initData()
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
            id:Number(v['id']),
            sendReservationTime:new Date(v['sendReservationTime']),
            customerName:v['customerName'],
            arriveSite:v['place'],
            arriveTime:new Date(v['time']),
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
            id:Number(v['id']),
            sendReservationTime:new Date(v['sendReservationTime']),
            customerName:v['customerName'],
            arriveSite:v['place'],
            arriveTime:new Date(v['time']),
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
            id:Number(v['id']),
            sendReservationTime:new Date(v['sendReservationTime']),
            customerName:v['customerName'],
            arriveSite:v['place'],
            arriveTime:new Date(v['time']),
          }
          that.endedConference.push(newData)
        });
      })
    },
    show(id) {
      /*            this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.conference[index].name}<br>Age：${this.conference[index].address}<br>Address：${this.conference[index].startTime}`
                  })*/
      this.$router.push(`/driver/detail/${id}`)
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