<template>
  <div>
    <Card dis-hover :bordered=false :style="{padding: '24px', margin: 'auto auto auto 15vw'}">
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
          <Modal
              footer-hide
              :mask-closable="true"
            v-model="modelInfo.changeModal">
            <ConferenceDetail></ConferenceDetail>
          </Modal>
        </Collapse>
      </div>
    </Card>
    <CustomerMessage></CustomerMessage>
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
      modelInfo: {
        changedTitle: '名字',
        changedType: 'name',
        changeModal: false,
      },
      columns: [
        {
          key: 'sendReservationTime',
          title: '发送预约时间'
        },

        {
          key: 'customerName',
          title: '顾客姓名'
        },

        {
          key: 'startTime',
          title: '住宿开始时间'
        },

        {
          key: 'endTime',
          title: '住宿结束时间'
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
              }, 'View'),
            ]);
          }
        }
      ],
      waitingConfirmConference: [{
        sendReservationTime:'2020/12/15',
        customerName:"one",
        startTime:"2020/12/16",
        endTime:"2020/12/18",
      }],
      processingConference: [{
        sendReservationTime:'2020/12/15',
        customerName:"one",
        startTime:"2020/12/16",
        endTime:"2020/12/18",
      }],
      endedConference: [{
        sendReservationTime:'2020/12/15',
        customerName:"one",
        startTime:"2020/12/16",
        endTime:"2020/12/18",
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
        url: `${this.$baseURI}/api/hotel/reservation/unchecked`,
      }).then(function (response) {
        that.waitingConfirmConference = []
        response['data'].forEach(v => {
          var newData = {
            sendReservationTime:new Date(v['sendReservationTime']),
            customerName:v['customerName'],
            startTime:new Date(v['startTime']),
            endTime:new Date(v['endTime']),
          }
          that.waitingConfirmConference.append(newData)
        });
      })
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/hotel/reservation/checked`,
      }).then(function (response) {
        that.processConference = []
        response['data'].forEach(v => {
          var newData = {
            sendReservationTime:new Date(v['sendReservationTime']),
            customerName:v['customerName'],
            startTime:new Date(v['startTime']),
            endTime:new Date(v['endTime']),
          }
          that.processConference.push(newData)
        });
      })
      this.$axios({
        method:'post',
        url:`${this.$baseURI}/api/hotel/reservation/ended`,
      }).then(function (response) {
        that.endedConference = []
        response['data'].forEach(v => {
          var newData = {
            sendReservationTime:new Date(v['sendReservationTime']),
            customerName:v['customerName'],
            startTime:new Date(v['startTime']),
            endTime:new Date(v['endTime']),
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
      this.$router.push(`/conference/detail/${id}`)
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