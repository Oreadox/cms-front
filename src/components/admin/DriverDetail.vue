<template>
  <div>
    <div>
      <Button type="primary" @click="showRegisterModal">添加司机账号</Button>
      <Input suffix="ios-search" style="width: auto; margin-left: 15px"
             placeholder="查找司机账号" v-model='keyword'/>
    </div>
    <Table :columns="this.columns" :data="this.fleetInfo.driverData" :stripe="true"
           style="margin: 30px auto; overflow-y: auto">
    </Table>
    <Modal style="padding: 20px"
           footer-hide
           :mask-closable="false"
           v-model="registerModal">
      <DriverRegister @setRegisterModal=setRegisterModal
                      :registerInfo="registerInfo"></DriverRegister>
    </Modal>
    <Modal
        footer-hide
        :mask-closable="false"
        v-model="changePasswordModal">
      <ChangeDriverPassword :driver-id="this.changePasswordAccount.account"  @closeChangeModal="closeChangeModal"></ChangeDriverPassword>
    </Modal>
    <Modal
        style="padding: 20px"
        footer-hide
        v-model="openWriteMail">
      <div style="padding: 5%">
        <WriteMail ref="fillAccount" :send-id="this.sendMailAccount" @closeSendModal="closeSendModal"></WriteMail>
      </div>
    </Modal>
  </div>
</template>

<script>
import DriverRegister from "@/components/admin/DriverRegister";
import WriteMail from "@/components/common/WriteMail";
import ChangeDriverPassword from "@/components/admin/ChangeDriverPassword";

export default {
  name: "DriverDetail",
  components: {WriteMail,DriverRegister,ChangeDriverPassword},
  data() {
    return {
      columns: [
        {
          title: '司机编号',
          key: 'driverId',
          align: 'center',
        },
        {
          title: '姓名',
          key: 'name',
          align: 'center',
        },
        {
          title: '用户名',
          key: 'username',
          align: 'center',
        },
        {
          title: '账户编号',
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
          width: '200',
          render: (h,params) => {
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
                    this.changePassword(params.row.driverId)
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
      searching: false,
      keyword: '',
      driverDataBackup: [],
      registerModal: false,
      registerInfo: {
        fleetId: 0,
      },
      loaded: true,
      openWriteMail: false,
      sendMailAccount: {account: ''},
      changePasswordAccount:{account: ''},
      changePasswordModal: false,
    }
  },
  props: ['fleetInfo'],
  methods: {
    showRegisterModal() {
      this.registerInfo.fleetId = this.fleetInfo.fleetId
      this.registerModal = true
    },
    setRegisterModal(fromChild) {
      this.registerModal = fromChild;
      let that = this
      setTimeout(function(){
        that.$emit("reloadData")
      }, 300);
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
        that.fleetInfo.driverData = that.driverDataBackup.slice(0)
        that.searching = false
        return
      }
      this.timer = setTimeout(() => {
        if (!that.searching) {
          that.driverDataBackup = that.fleetInfo.driverData.slice(0)
        }
        that.searching = true
        that.fleetInfo.driverData = []
        that.driverDataBackup.forEach(v => {
          if ((v.name + v.driverId + v.accountId + v.username).indexOf(this.keyword) > -1) {
            that.fleetInfo.driverData.push(v)
          }
        })
      }, 100)

    }
  },
}
</script>

<style scoped>

</style>