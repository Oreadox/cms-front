<template>
  <div>
        <Card dis-hover :bordered=false >
          <div style="margin-bottom: 2vw">
            <Button size="large" type="primary">写信</Button>
          </div>
          <div>
            <Collapse v-model="showingAll" simple>
              <Panel name="receive">
                收信箱
                <div slot="content" >
                        <Table :columns="this.columns" :data="this.receiveBox" :stripe="true"
                               highlight-row  @on-row-click="openReceiveDetail" >
                        </Table>
                </div>
              </Panel>
              <Panel name="send">
                发信箱
                <div slot="content">
                  <Table :columns="this.columns2" :data="this.sendBox" :stripe="true"
                         highlight-row @on-row-click="openSendDetail"
                         max-height="500px" style="overflow-y: auto" >
                    <template slot-scope="{row}" slot="ifRead">
                      <Tag color="primary"  style="margin-right: 5px" v-if="!row.read">未读</Tag>
                      <Tag color="success"  style="margin-right: 5px" v-else-if="row.read">已读</Tag>
                    </template>
                  </Table>
                </div>
              </Panel>
            </Collapse>
          </div>
        </Card>
        <Modal
            style="padding: 20px"
            footer-hide
            v-model="openModal"
            >
          <div style="padding: 5%">
              <Form>
                <FormItem label="内容详情">
                  <Input :rows=4 type="textarea" v-model="contentDetail" readonly/>
                </FormItem>
              </Form>
          </div>
        </Modal>
  </div>
</template>
<script>
export default {
  name: "Mail",
  data() {
    return {
      columns: [
        {
          key: 'senderId',
          title: '用户编号',
          maxWidth: 200
        },
        {
          key: 'content',
          title: '内容',
          ellipsis:true,
        },
      ],
      columns2: [
        {
          key: 'recipient',
          title: '用户编号',
          maxWidth: 200
        },
        {
          key: 'content',
          title: '内容',
          ellipsis:true,
        },
        {
          title: '状态',
          slot: 'ifRead',
          ellipsis:true,
          maxWidth: 100

        },
      ],
      receiveBox: [{
        id:1,
        senderId: 1000,
        content:'asd',
        sendTime: '2020-10-22',
        read: false,
      },
        {
          id:2,
          senderId: 1001,
          content:'asd',
          sendTime: '2020-10-22',
          read: false,
        },
        {
          id:3,
          senderId: 1002,
          content:'asd',
          sendTime: '2020-10-22',
          read: false,
        },
      ],
      sendBox: [{
        id:1,
        recipient: 2000,
        sendTime:'2020-10-10',
          content: '1231111111111111111111111111111111111111111111111' +
              '111111111111111111111111111111111111111111111111111111' +
              '111111111111111111111111111111111111111111111111111111' +
              '111111111111122222222222222222222222222222222222222223',
        read: false,
        }],
      showingAll: ['receive', 'send'],
      contentDetail:'xxx',
      openModal: false,
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
        url: `${this.$baseURI}/api/message/unread`,
      }).then(function (response) {
        that.receiveBox = []
        response['data'].forEach(v => {
          var newData = {
            id: v['id'],
            sender:v['senderId'],
            content: v['content'],
            sendTime:v['sendTime'],
            read:v['read'],
          }
          that.receiveBox.push(newData)
        });
      })
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/message/sent`,
      }).then(function (response) {
        that.sendBox = []
        response['data'].forEach(v => {
          var newData2 = {
            id: v['id'],
            recipient:v['recipientId'],
            content: v['content'],
            sendTime:v['sendTime'],
            read:v['read'],
          }
          that.sendBox.push(newData2)
        });
      })
    },
    openReceiveDetail(currentRow){
      var that = this
      this.contentDetail = currentRow.content
      this.openModal = true
      var data = {
        id: currentRow.id
      }
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/message/setRead`,
        data:data,
      }).then(function (response) {
        response['data'].forEach(v => {
          var massage = {
            success:v['success'],
            message:v['massage']
          }
          if (Boolean(massage['success']) === true) {
            that.$Message.success(massage['message'])
          } else {
            that.$Message.error(massage['message'])
          }
        });
      })
    },
    openSendDetail(currentRow){

      this.contentDetail = currentRow.content
      this.openModal = true

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