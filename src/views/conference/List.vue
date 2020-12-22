<template>
  <div>
    <Card dis-hover :bordered=false >
      <div style="margin-bottom: 2vw">
        <Button size="large" type="primary" to="/conference/create">创建会议</Button>
        <Button size="large" style="margin-left: 5vw " @click="enterJoinNumber=true">加入会议</Button>
      </div>
      <div>
        <!--        <Button @click="showFinish = !showFinish">已结束</Button>-->
        <Collapse v-model="showingPanel" simple>
          <Panel name="processing">
            进行中
            <div slot="content" style="margin-left: 2em">
              <Collapse v-model="showingCreated" simple>
                <Panel name="created">
                  我发起的
                  <div slot="content">
                    <Table :columns="this.columns" :data="this.createdConference" :stripe="true">
                    </Table>
                  </div>
                </Panel>
              </Collapse>
              <Collapse v-model="showingParticipated" simple>
                <Panel name="participated">
                  我参加的
                  <div slot="content">
                    <Table :columns="this.columns" :data="this.participatedConference" :stripe="true">
                    </Table>
                  </div>
                </Panel>
              </Collapse>
              <!--              <Table :columns="this.columns" :data="this.conference" :stripe="true">-->
              <!--              </Table>-->
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
    <Modal
        style="padding: 20px"
        footer-hide
        :mask-closable="false"
        v-model="enterJoinNumber">
      <JoinConference></JoinConference>
    </Modal>
  </div>
</template>

<script>
// import CollapseTransition from "@/plugins/CollapseTransition"

import JoinConference from "@/components/conference/JoinConference";

export default {
  name: "List",
  components: {
    JoinConference
    // 'CollapseTransition': CollapseTransition,
  },
  data() {
    return {
      enterJoinNumber: false,
      columns: [
        {
          key: 'id',
          title: '会议编号'
        },
        {
          key: 'name',
          title: '会议名'
        },
        {
          key: 'address',
          title: '会议举办地点'
        },
        {
          key: 'date',
          title: '会议时间'
        },
        {
          key: 'state',
          title: '状态',
        },
        {
          title: '查看',
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
        }
      ],
      createdConference: [{
        id: 1000,
        name: 'one',
        address: 'xxx',
        date: '2020/12/12-2020/12/13',
        state: 'finish',
      }],
      participatedConference: [{
        id: 1000,
        name: 'one',
        address: 'xxx',
        date: '2020/12/12-2020/12/13',
        state: 'finish',
      }],
      endedConference: [{
        id: 1000,
        name: 'one',
        address: 'xxx',
        date: '2020/12/12-2020/12/13',
        state: 'finish',
      }],
      showingPanel: ['ended', 'processing'],
      showingCreated: "created",
      showingParticipated: "participated",
    }
  },
  created() {
    this.initData()
  },
  methods: {
    getInfo(v) {
      let newData = {
        id: v['id'],
        name: v['name'],
        address: v['address'],
      }
      let startTime = new Date(v['startTime'])
      let endTime = new Date(v['endTime'])
      newData.date = `${startTime.getFullYear()}/${startTime.getMonth()}/${startTime.getDate()}-`
      newData.date += `${endTime.getFullYear()}/${endTime.getMonth()}/${endTime.getDate()}`
      switch (v['progress']) {
        case "ENROLLMENT":
          newData.state = '报名阶段'
          break;
        case "OWNER_CONFIRM":
          newData.state = '报名确认'
          break;
        case "RESERVATION_CONFIRM":
          newData.state = '车队，酒店确认'
          break;
        case "READY":
          newData.state = '会议进行'
          break;
        case "ENDED":
          newData.state = '会议结束\n'
          break;
      }
      return newData
    },
    initData() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/user/conference/created/ongoing`,
      }).then(function (response) {
        that.createdConference = []
        response['data'].forEach(v => {
          that.createdConference.push(that.getInfo(v))
        });
      })
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/user/conference/participated/ongoing`,
      }).then(function (response) {
        that.participatedConference = []
        response['data'].forEach(v => {
          that.participatedConference.push(that.getInfo(v))
        });
      })
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/user/conference/created/ended`,
      }).then(function (response) {
        that.endedConference = []
        let respData = response['data']
        that.$axios({
          method: 'post',
          url: `${that.$baseURI}/api/user/conference/participated/ended`,
        }).then(function (response) {
          respData = respData.concat(response['data'])
          respData.forEach(v => {
            that.endedConference.push(that.getInfo(v))
          });
        })
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