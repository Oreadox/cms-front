<template>
  <div>
    <Card dis-hover :bordered=false>
      <div style="margin-bottom: 2vw">
        <Button size="large" type="primary" @click="openWriteMail=true">写信</Button>
      </div>
      <div>
        <Collapse v-model="showingAll" simple>
          <Panel name="receive">
            收信箱
            <div slot="content">
              <Table :columns="this.columns" :data="this.receiveBox" :stripe="true"
                     highlight-row @on-row-click="openReceiveDetail">
                <template slot-scope="{row}" slot="ifRead">
                  <Tag color="primary" style="margin-right: 5px" v-if="!row.read">未读</Tag>
                  <Tag color="success" style="margin-right: 5px" v-else-if="row.read">已读</Tag>
                </template>
              </Table>
            </div>
          </Panel>
          <Panel name="send">
            发信箱
            <div slot="content">
              <Table :columns="this.columns2" :data="this.sendBox" :stripe="true"
                     highlight-row @on-row-click="openSendDetail"
                     max-height="500px" style="overflow-y: auto">
                <template slot-scope="{row}" slot="ifRead">
                  <Tag color="primary" style="margin-right: 5px" v-if="!row.read">未读</Tag>
                  <Tag color="success" style="margin-right: 5px" v-else-if="row.read">已读</Tag>
                </template>
              </Table>
            </div>
          </Panel>
        </Collapse>
      </div>
    </Card>
    <Modal
        style="padding-top: 20px"
        footer-hide
        v-model="openModal"
    >
      <div>
        <Form>
          <FormItem label="内容详情">
            <Input :rows=4 type="textarea" v-model="contentDetail" readonly/>
          </FormItem>
        </Form>
      </div>
    </Modal>
    <Modal
        style="padding: 20px"
        footer-hide
        v-model="openWriteMail"
    >
      <div style="padding: 5%">
        <WriteMail @closeSendModal="closeSendModal"></WriteMail>
      </div>
    </Modal>
  </div>
</template>
<script>
import WriteMail from "@/components/common/WriteMail";
export default {
  name: "CommonMail",
  components:{WriteMail},
  data() {
    return {
      columns: [
        {
          key: 'username',
          title: '用户名',
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
      columns2: [
        {
          key: 'username',
          title: '用户名',
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
      ],
      sendBox: [],
      showingAll: ['receive', 'send'],
      contentDetail:'xxx',
      openModal: false,
      openWriteMail:false,
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
            senderId:v['senderId'],
            content: v['content'],
            sendTime:v['sendTime'],
            read:v['read'],
            username:v['']
          }
          var receiveName = {
            accountId: newData.senderId
          };
          that.$axios({
            method: "post",
            url: `${that.$baseURI}/api/message/getAccount`,
            data: receiveName
          }).then(function (res){
            // console.log(res['data']['username'])
            newData.username = res['data']['username']
            that.receiveBox.push(newData)
          });
        });
      }).then(function (){
        that.$axios({
          method: 'post',
          url: `${that.$baseURI}/api/message/read`,
        }).then(function (response){
          response['data'].forEach(v => {
            var newData = {
              id: v['id'],
              senderId:v['senderId'],
              content: v['content'],
              sendTime:v['sendTime'],
              read:v['read'],
              username:v[''],
            }
            var receiveName = {
              accountId: newData.senderId
            };
            that.$axios({
              method: "post",
              url: `${that.$baseURI}/api/message/getAccount`,
              data: receiveName
            }).then(function (res){
              // console.log(res['data']['username'])
              newData.username = res['data']['username']
              that.receiveBox.push(newData)
            });
          })
        })
      });

      this.$axios({
        method: 'post',
        url: `${that.$baseURI}/api/message/sent`,
      }).then(function (response) {
        that.sendBox = []
        response['data'].forEach(v => {
          var newData2 = {
            id: v['id'],
            recipient:v['recipientId'],
            content: v['content'],
            sendTime:v['sendTime'],
            read:v['read'],
            username:v[''],
          };
          var sendId = {
            accountId: newData2.recipient
          };
          that.$axios({
            method: "post",
            url: `${that.$baseURI}/api/message/getAccount`,
            data: sendId
          }).then(function (res){
            // console.log(res['data']['username'])
            newData2.username = res['data']['username']
            that.sendBox.push(newData2)
          });

        });
      })
    },
    openReceiveDetail(currentRow) {
      var that = this
      this.contentDetail = currentRow.content
      this.openModal = true
      if (currentRow.read !== true) {
        var data = {
          id: currentRow.id
        }
        console.log(data.id)
        that.$axios({
          method: 'post',
          url: `${that.$baseURI}/api/message/setRead`,
          data: data,
        }).then(function (response) {
          var massage = {
            success: response['data']['success'],
            message: response['data']['massage'],
          };
          if (Boolean(massage['success']) !== true) {
            that.$Message.error(massage['message'])
          }
        });
      }
    },

    openSendDetail(currentRow){
      this.contentDetail = currentRow.content
      this.openModal = true
    },
    closeSendModal(fromChild){
      this.openWriteMail=fromChild
    }
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