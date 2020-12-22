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
  </div>
</template>

<script>
import DriverRegister from "@/components/admin/DriverRegister";

export default {
  name: "DriverDetail",
  components: {DriverRegister},
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
          title: '操作',
          key: 'operation',
          align: 'center',
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
                    this.deleteDriver(params.row.driverId)
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

                  }
                }
              }, '用户详情'),
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
      }
    }
  },
  props: ['fleetInfo'],
  methods: {
    deleteDriver(driverId) {
      console.log(driverId)
    },
    showRegisterModal() {
      this.registerInfo.fleetId = this.fleetInfo.fleetId
      this.registerModal = true
    },
    setRegisterModal(fromChild) {
      this.registerModal = fromChild;
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