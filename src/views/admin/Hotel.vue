<template>
  <div>
    <div>
      <Button type="primary" @click="registerModal=true">添加酒店账号</Button>
      <Input suffix="ios-search" style="width: auto; margin-left: 15px"
             placeholder="查找酒店账号" v-model='keyword'/>
    </div>
    <Table :columns="this.columns" :data="this.currentHotelData" :stripe="true" style="margin: 30px auto">
    </Table>
    <Page :total="allHotelData.length" show-sizer show-elevator
          @on-page-size-change="changePrePageNum"
          @on-change="showPage"
          style="text-align: center"/>
    <Modal style="padding: 20px"
           footer-hide
           :mask-closable="false"
           v-model="registerModal">
      <HotelRegister @setRegisterModal=setRegisterModal></HotelRegister>
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
      <ChangeHotelPassword :hotel-id="this.changePasswordAccount.account"  @closeChangeModal="closeChangeModal"></ChangeHotelPassword>
    </Modal>
  </div>
</template>

<script>
import HotelRegister from "@/components/admin/HotelRegister";
import WriteMail from "@/components/common/WriteMail";
import ChangeHotelPassword from "@/components/admin/ChangeHotelPassword";
export default {
  name: "Hotel",
  components: {HotelRegister,WriteMail,ChangeHotelPassword},
  data() {
    return {
      columns: [
        {
          title: '酒店编号',
          key: 'hotelId',
          align: 'center',
        },
        {
          title: '酒店名',
          key: 'name',
          align: 'center',
        },
        {
          title: '用户名',
          key: 'hotelUsername',
          align: 'center',
        },
        {
          title: '电话号码',
          key: 'telephone',
          align: 'center',
          width: 125
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
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.changePassword(params.row.hotelId)
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
      currentHotelData: [],
      allHotelData: [],
      allHotelDataBackup: [],     // 搜索时用来备份原结果
      keyword: '',
      searching: false,
      registerModal: false,
      openWriteMail: false,
      sendMailAccount: {account: ''},
      changePasswordAccount:{account: ''},
      changePasswordModal: false,
    }
  },
  created() {
    this.loadHotelData()
  },
  methods: {
    loadHotelData() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/admin/hotel/getAll`,
      }).then(function (response) {
        that.allHotelData = []
        response['data'].forEach(v => {
          let newData = {
            hotelId: v['hotelId'],
            name: v['name'],
            hotelUsername: v['username'],
            accountId: v['accountId'],
            telephone: v['telephone']
          }
          that.allHotelData.push(newData)
        })
        that.currentHotelData = that.allHotelData.slice(0, 10)
      })
    },
    changePrePageNum(num) {
      this.prePageNum = num
      this.currentHotelData = this.allHotelData.slice(0, num + 1)
    },
    showPage(index) {
      this.currentHotelData = this.allHotelData.slice(this.prePageNum * (index - 1), this.prePageNum * index + 1)
    },
    setRegisterModal(fromChild) {
      this.registerModal = fromChild;
    },
    changePassword(hotelId){
      this.changePasswordModal = true
      this.changePasswordAccount.account = hotelId;
      console.log(this.changePasswordAccount.account);
    },
    closeChangeModal(fromChild){
      this.changePasswordModal=fromChild
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
        that.allHotelData = that.allHotelDataBackup.slice(0)
        that.showPage(1)
        that.searching = false
        return
      }
      this.timer = setTimeout(() => {
        if (!that.searching) {
          that.allHotelDataBackup = that.allHotelData.slice(0)
        }
        that.searching = true
        that.allHotelData = []
        that.allHotelDataBackup.forEach(v => {
          if ((v.creatorUsername + v.name + v.hotelId + v.accountId).indexOf(this.keyword) > -1) {
            that.allHotelData.push(v)
          }
        })
        that.showPage(1)
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