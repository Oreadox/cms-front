<template>
  <div>
    <Card dis-hover :bordered=false :style="{padding: '24px', margin: 'auto auto auto 15vw'}">
      <div style="margin-bottom: 2vw">
        <Button size="large" type="primary" to="/conference/create">创建会议</Button>
        <Button size="large" style="margin-left: 5vw ">加入会议</Button>
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
  </div>
</template>

<script>
// import CollapseTransition from "@/plugins/CollapseTransition"

export default {
  name: "List",
  components: {
    // 'CollapseTransition': CollapseTransition,
  },
  data() {
    return {
      columns: [
        {
          key: 'id',
          title: 'id'
        },

        {
          key: 'name',
          title: 'name'
        },

        {
          key: 'address',
          title: 'address'
        },

        {
          key: 'startTime',
          title: 'startTime'
        },

        {
          key: 'state',
          title: 'state',
        },

        {
          title: 'Action',
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
      createdConference: [{
        id: 1000,
        name: 'one',
        address: 'xxx',
        startTime: '2020/12/12-2020/12/13',
        state: 'finish',
      }],
      participatedConference: [{
        id: 1000,
        name: 'one',
        address: 'xxx',
        startTime: '2020/12/12-2020/12/13',
        state: 'finish',
      }],
      endedConference: [{
        id: 1000,
        name: 'one',
        address: 'xxx',
        startTime: '2020/12/12-2020/12/13',
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
    initData() {
      var that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/user/conference/created/ongoing`,
      }).then(function (response) {
        that.createdConference = []
        response['data'].forEach(v => {
          var newData = {
            id: v['id'],
            name: v['name'],
            address: v['address'],
            startTime: new Date(v['startTime']),
            state: v['progress'].toLowerCase()
          }
          that.createdConference.append(newData)
        });
      })
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/user/conference/participated/ongoing`,
      }).then(function (response) {
        that.participatedConference = []
        response['data'].forEach(v => {
          var newData = {
            id: v['id'],
            name: v['name'],
            address: v['address'],
            startTime: new Date(v['startTime']),
            state: v['progress'].toLowerCase()
          }
          that.participatedConference.append(newData)
        });
      })
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/user/conference/created/ended`,
      }).then(function (response) {
        that.endedConference = []
        var respData = response['data']
        this.$axios({
          method: 'post',
          url: `${this.$baseURI}/api/user/conference/participated/ended`,
        }).then(function (response) {
          respData = respData.concat(response['data'])
          respData.forEach(v => {
            var newData = {
              id: v['id'],
              name: v['name'],
              address: v['address'],
              startTime: new Date(v['startTime']),
              state: v['progress'].toLowerCase()
            }
            that.endedConference.append(newData)
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