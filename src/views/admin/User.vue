<template>
  <div>
    <Input suffix="ios-search" style="width: auto" placeholder="查找用户" v-model='keyword'/>
    <Table :columns="this.columns" :data="this.currentUserData" :stripe="true" style="margin: 30px auto">
    </Table>
    <Page :total="allUserData.length" show-sizer show-elevator
          @on-page-size-change="changePrePageNum"
          @on-change="showNextPage"
          style="text-align: center"/>
    <Modal style="padding: 20px" width="30"
           footer-hide
           :mask-closable="false"
           v-model="deleteUserModal">
      <div>
        <h3 style="text-align: center">确定要删除账号{{ deletedUserValue.username }}吗？</h3>
        <hr style="margin: 5px"/>
        <p style="text-indent: 2em; margin-bottom: 5px">这个选项<b>不能</b>被回滚，这会导致账号<b>
          {{ deletedUserValue.username }}</b> 被永久移除，这将导致其永久性的不能登录等关联性的后果</p>
        <p style="text-indent: 2em; margin-bottom: 8px">如果确实要删除，请在下方输入<b>
          {{ deletedUserValue.username }}</b> 以再次确认</p>
        <Input style="width: 100%; margin-bottom: 5px"
               v-model="deletedUserValue.usernameCheck"></Input>
        <Button class="button" type="text" @click="deleteUserCheck">
          我明白这意味着什么，删除该账号
        </Button>
      </div>
    </Modal>
    <Modal
        style="padding: 20px"
        footer-hide
        v-model="openWriteMail">
      <div style="padding: 5%">
        <WriteMail ref="fillAccount" :send-id="this.sendMailAccount" @closeSendModal="closeSendModal"></WriteMail>
      </div>
    </Modal>
    <Modal
        footer-hide
        :mask-closable="false"
        v-model="changePasswordModal">
      <ChangeUserPassword :user-id="this.changePasswordAccount.account"  @closeChangeModal="closeChangeModal"></ChangeUserPassword>
    </Modal>
  </div>
</template>

<script>
import WriteMail from "@/components/common/WriteMail";
import ChangeUserPassword from "@/components/admin/ChangeUserPassword";

export default {
  name: "User",
  components: {WriteMail,ChangeUserPassword},
  data() {
    return {
      driveFinish: false,
      hotelFinish: false,
      columns: [
        {
          title: '用户编号',
          key: 'userId',
          align: 'center',
        },
        {
          title: '用户姓名',
          key: 'name',
          align: 'center',
        },
        {
          title: '用户名',
          key: 'username',
          align: 'center',
        },
        {
          title: '用户账号',
          key: 'accountId',
          align: 'center',
        },
        {
          title: '电话号码',
          key: 'telephone',
          align: 'center',
        },
        {
          title: '操作',
          key: 'operation',
          align: 'center',
          width: 300,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.deleteUser(params.row.userId, params.row.username)
                  }
                }
              }, '删除账号'),
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
                    this.changePassword(params.row.userId)
                  }
                }
              }, '修改密码'),
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
                    this.sendMail(params.row.accountId)
                  }
                }
              }, '发信息'),
            ]);
          }
        },
      ],
      currentPage: 0,
      prePageNum: 10,
      currentUserData: [],
      allUserData: [],
      allUserDataBackup: [],     // 搜索时用来备份原结果
      keyword: '',
      searching: false,
      deletedUserValue: {
        id: 0,
        username: '',
        usernameCheck: ''
      },
      deleteUserModal: false,
      openWriteMail: false,
      sendMailAccount: {account: ''},
      changePasswordAccount:{account: ''},
      changePasswordModal: false,
    }
  },
  created() {
    this.loadUserData()
  },
  methods: {
    loadUserData() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/admin/user/getAll`,
      }).then(function (response) {
        that.allUserData = []
        response['data'].forEach(v => {
          let newData = {
            accountId: v['accountId'],
            username: v['username'],
            userId: v['userId'],
            name: v['name'],
            telephone: v['telephone']
          }
          that.allUserData.push(newData)
        })
        that.currentUserData = that.allUserData.slice(0, 10)
      })
    },
    deleteUser(userId, username) {
      this.deletedUserValue.id = userId
      this.deletedUserValue.username = username
      this.deleteUserModal = true
    },
    deleteUserCheck() {
      if (this.deletedUserValue.usernameCheck === this.deletedUserValue.username) {
        let that = this
        this.$axios({
          method: 'post',
          url: `${this.$baseURI}/api/admin/user/remove`,
          data: {userId: that.deletedUserValue.id}
        }).then(function (response) {
          if (response['data']['result'] === true) {
            that.$Message.success("删除成功");
            that.deleteUserModal = false
          } else {
            that.$Message.error(response['data']['message'])
          }
        })
      }
    },
    show(index) {
      console.log(index)
    },
    remove(index) {
      // TODO: 添加删除反馈
      this.data.splice(index, 1);
    },
    changePrePageNum(num) {
      this.prePageNum = num
      this.currentUserData = this.allUserData.slice(0, num + 1)
    },
    showNextPage(index) {
      this.currentUserData = this.allUserData.slice(this.prePageNum * (index - 1), this.prePageNum * index + 1)
    },
    sendMail(accountId) {
      this.sendMailAccount.account = accountId;
      console.log(this.sendMailAccount.account)
      this.$refs.fillAccount.autoFillAccount()
      this.openWriteMail = true
    },
    closeSendModal(fromChild) {
      this.openWriteMail = fromChild
    },
    changePassword(userId){
      this.changePasswordModal = true
      this.changePasswordAccount.account = userId;
      console.log(this.changePasswordAccount.account);
    },
    closeChangeModal(fromChild){
      this.changePasswordModal=fromChild
    },
  },
  watch: {
    keyword() {
      //函数节流
      let that = this
      if (this.timer) {
        clearTimeout(this.timer)
      }
      //删除文字  清零
      if (this.keyword === '') {
        that.allUserData = that.allUserDataBackup.slice(0)
        that.showNextPage(1)
        that.searching = false
        return
      }
      this.timer = setTimeout(() => {
        if (!that.searching) {
          that.allUserDataBackup = that.allUserData.slice(0)
        }
        that.searching = true
        that.allUserData = []
        that.allUserDataBackup.forEach(v => {
          if ((v.username + v.account + v.userId + v.name).indexOf(this.keyword) > -1) {
            that.allUserData.push(v)
          }
        })
        that.showNextPage(1)
      }, 100)
    }
  },

}
</script>

<style scoped>
.button {
  width: 100%;
  color: red;
  border: lightgray 1px solid !important;
}
</style>

