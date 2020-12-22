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
          key: 'startStart',
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
              }, '查看'),
            ]);
          }
        },
      ],
      waitingConfirmConference: [{
        conferenceId:'',
        userId:'123123',
        name:'123',
        gender:'',
        residentIdNumber:'',
        telephone:'',
        startStart:'',
        startEnd:'',
        stayNeeds:'',
        reserveTime:'',
        hotelCheck:'',
        checkinTime:'',
        roomNumber:'',
        userCheck:'',
      }],
      processingConference: [{
        conferenceId:'',
        userId:'',
        name:'',
        gender:'',
        residentIdNumber:'',
        telephone:'',
        startStart:'',
        startEnd:'',
        stayNeeds:'',
        reserveTime:'',
        hotelCheck:'',
        checkinTime:'',
        roomNumber:'',
        userCheck:'',
      }],
      endedConference: [{
        hotelId:'',
        conferenceId:'',
        userId:'',
        name:'',
        gender:'',
        residentIdNumber:'',
        telephone:'',
        startStart:'',
        startEnd:'',
        stayNeeds:'',
        reserveTime:'',
        hotelCheck:'',
        checkinTime:'',
        roomNumber:'',
        userCheck:'',
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
        // that.waitingConfirmConference = []
        response['data'].forEach(v => {
          var newData = {
            conferenceId:Number(v['conferenceId']),
            userId:Number(v['userId']),
            name:v['name'],
            gender:v['gender'],
            residentIdNumber:v['residentIdNumber'],
            telephone:v['telephone'],
            startStart:new Date(v['startStart']),
            startEnd:new Date(v['startEnd']),
            stayNeeds:new Date(v['stayNeeds']),
            reserveTime:new Date(v['reserveTime']),
            hotelCheck:v['hotelCheck'],
            checkinTime:new Date(v['checkinTime']),
            roomNumber:v['roomNumber'],
            userCheck:v['userCheck'],
          }
          that.waitingConfirmConference.append(newData)
        });
      })
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/hotel/reservation/checked`,
      }).then(function (response) {
        // that.processConference = []
        response['data'].forEach(v => {
          var newData = {
            conferenceId:Number(v['conferenceId']),
            userId:Number(v['userId']),
            name:v['name'],
            gender:v['gender'],
            residentIdNumber:v['residentIdNumber'],
            telephone:v['telephone'],
            startStart:new Date(v['startStart']),
            startEnd:new Date(v['startEnd']),
            stayNeeds:new Date(v['stayNeeds']),
            reserveTime:new Date(v['reserveTime']),
            hotelCheck:v['hotelCheck'],
            checkinTime:new Date(v['checkinTime']),
            roomNumber:v['roomNumber'],
            userCheck:v['userCheck'],
          }
          that.processConference.push(newData)
        });
      })
      this.$axios({
        method:'post',
        url:`${this.$baseURI}/api/hotel/reservation/ended`,
      }).then(function (response) {
        // that.endedConference = []
        response['data'].forEach(v => {
          var newData = {
            hotelId:Number(v['conferenceId']),
            conferenceId:Number(v['conferenceId']),
            userId:Number(v['userId']),
            name:v['name'],
            gender:v['gender'],
            residentIdNumber:v['residentIdNumber'],
            telephone:v['telephone'],
            startStart:new Date(v['startStart']),
            startEnd:new Date(v['startEnd']),
            stayNeeds:new Date(v['stayNeeds']),
            reserveTime:new Date(v['reserveTime']),
            hotelCheck:v['hotelCheck'],
            checkinTime:new Date(v['checkinTime']),
            roomNumber:v['roomNumber'],
            userCheck:v['userCheck'],
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
      this.$router.push(`/hotel/detail/${id}`)
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