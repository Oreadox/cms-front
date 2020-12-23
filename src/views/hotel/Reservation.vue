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
    <Modal style="padding: 0" width="45"
           footer-hide
           :mask-closable="false"
           v-model="conferenceDetailModal">
      <ConferenceDetail ref="detail" @gotoReservation="gotoReservation"></ConferenceDetail>
    </Modal>
  </div>
</template>

<script>
import ConferenceDetail from "@/components/hotel/ConferenceDetail";

export default {
  name: "reservation",
  components: {ConferenceDetail},
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
          key: 'stayStart',
          title: '住宿开始时间'
        },

        {
          key: 'stayEnd',
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
                    this.gotoDetail(params.row.conferenceId, params.row.userId)
                  }
                }
              }, '查看'),
            ]);
          }
        },
      ],
      waitingConfirmIndex: {},
      processingIndex: {},
      endedIndex: {},
      waitingConfirmConference: [],
      processingConference: [],
      endedConference: [],
      showingPanel: ["waitingConfirm", 'ended', 'processing'],
      conferenceDetailModal: false,
    }
  },
  created() {
    this.initData()
  },
  methods: {
    getFormattedDate(dateString) {
      let date = new Date(dateString)
      let month = date.getMonth() + 1
      if (month < 10) {
        month = "0" + month
      }
      return `${date.getFullYear()}-${month}-${date.getDate()}`
    },
    getFormattedDateTime(dateString) {
      let date = new Date(dateString)
      let month = date.getMonth() + 1
      if (month < 10) {
        month = "0" + month
      }
      return `${date.getFullYear()}-${month}-${date.getDate()} ` +
          `${date.getHours()}:${date.getMinutes()}`
    },
    initData() {
      var that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/hotel/reservation/unchecked`,
      }).then(function (response) {
        that.waitingConfirmConference = []
        response['data'].forEach(v => {
          var newData = {
            conferenceId: v['conferenceId'],
            userId: v['userId'],
            name: v['name'],
            gender: v['gender'],
            residentIdNumber: v['residentIdNumber'],
            telephone: v['telephone'],
            stayStart: that.getFormattedDate(v['stayStart']),
            stayEnd: that.getFormattedDate(v['stayEnd']),
            stayNeeds: v['stayNeeds'],
            reserveTime: that.getFormattedDateTime(v['reserveTime']),
            hotelCheck: v['hotelCheck'],
            checkinTime: v['checkinTime'] == null ? '' : that.getFormattedDateTime(v['checkinTime']),
            roomNumber: v['roomNumber'],
            userCheck: v['userCheck'],
          }
          that.waitingConfirmConference.push(newData)
        });
      })
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/hotel/reservation/checked`,
      }).then(function (response) {
        that.processingConference = []
        response['data'].forEach(v => {
          var newData = {
            conferenceId: v['conferenceId'],
            userId: v['userId'],
            name: v['name'],
            gender: v['gender'],
            residentIdNumber: v['residentIdNumber'],
            telephone: v['telephone'],
            stayStart: that.getFormattedDate(v['stayStart']),
            stayEnd: that.getFormattedDate(v['stayEnd']),
            stayNeeds: v['stayNeeds'],
            reserveTime: that.getFormattedDateTime(v['reserveTime']),
            hotelCheck: v['hotelCheck'],
            checkinTime: v['checkinTime'] == null ? '' : that.getFormattedDateTime(v['checkinTime']),
            roomNumber: v['roomNumber'],
            userCheck: v['userCheck'],
          }
          that.processingConference.push(newData)
        });
      })
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/hotel/reservation/ended`,
      }).then(function (response) {
        that.endedConference = []
        response['data'].forEach(v => {
          var newData = {
            conferenceId: v['conferenceId'],
            userId: v['userId'],
            name: v['name'],
            gender: v['gender'],
            residentIdNumber: v['residentIdNumber'],
            telephone: v['telephone'],
            stayStart: that.getFormattedDate(v['stayStart']),
            stayEnd: that.getFormattedDate(v['stayEnd']),
            stayNeeds: v['stayNeeds'],
            reserveTime: that.getFormattedDateTime(v['reserveTime']),
            hotelCheck: v['hotelCheck'],
            checkinTime: v['checkinTime'] == null ? '' : that.getFormattedDateTime(v['checkinTime']),
            roomNumber: v['roomNumber'],
            userCheck: v['userCheck'],
          }
          that.endedConference.push(newData)
        });
      })
    },
    gotoDetail(conferenceId, userId) {
      for(let index in this.waitingConfirmConference) {
        if (this.waitingConfirmConference[index].conferenceId === conferenceId &&
            this.waitingConfirmConference[index].userId === userId) {
          this.$refs.detail.setData(this.waitingConfirmConference[index], false)
          this.conferenceDetailModal = true
          return;
        }
      }
      let otherConference = this.processingConference.concat(this.endedConference)
      for(let index in otherConference){
        if(otherConference[index].conferenceId===conferenceId&&otherConference[index].userId===userId){
          this.$refs.detail.setData(otherConference[index], true)
          this.conferenceDetailModal = true
        }
      }
    },
    gotoReservation(child) {
      this.conferenceDetailModal = child;
      this.initData()
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

>>> .ivu-modal-body {
  padding: 0px;
}
</style>