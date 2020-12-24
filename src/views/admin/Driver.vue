<template>
  <div>
    <div>
      <Button type="primary" @click="registerModal=true">添加车队</Button>
      <Input suffix="ios-search" style="width: auto; margin-left: 15px"
             placeholder="查找车队" v-model='keyword'/>
    </div>
    <Table :columns="this.columns" :data="this.currentFleetData" :stripe="true" style="margin: 30px auto">
    </Table>
    <Page :total="allFleetData.length" show-sizer show-elevator
          @on-page-size-change="changePrePageNum"
          @on-change="showPage"
          style="text-align: center"/>
    <Modal style="padding: 20px"
           footer-hide
           :mask-closable="false"
           v-model="registerModal">
      <FleetRegister @setRegisterModal=setRegisterModal></FleetRegister>
    </Modal>
    <Modal style="padding: 20px"
           width="80"
           footer-hide
           :mask-closable="false"
           v-model="driverDetailModal">
      <DriverDetail @setdriverDetailModal="setDriverDetailModal"
                    @reloadData="reloadData"
                    ref="driverDetail"
                    :fleetInfo="showingFleetInfo"></DriverDetail>
    </Modal>
  </div>
</template>

<script>
import FleetRegister from "@/components/admin/FleetRegister";
import DriverDetail from "@/components/admin/DriverDetail";

export default {
  name: "Driver",
  components: {DriverDetail, FleetRegister},
  data() {
    return {
      columns: [
        {
          title: '车队编号',
          key: 'fleetId',
          align: 'center',
        },
        {
          title: '车队名',
          key: 'name',
          align: 'center',
        },
        {
          title: '司机数量',
          key: 'driverAmount',
          align: 'center',
        },
        {
          title: '联系方式',
          key: 'telephone',
          align: 'center',
          width: 125
        },
        {
          title: '操作',
          key: 'operation',
          align: 'center',
          width: 150,
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
                    this.showDriverInfo(params.row.fleetId)
                  }
                }
              }, '司机管理'),
            ]);
          }
        },
      ],
      currentPage: 0,
      prePageNum: 10,
      driverData: {},
      showingFleetInfo: {
        driverData: [],
        fleetId: 0,
      },
      currentFleetData: [],
      allFleetData: [],
      allFleetDataBackup: [],     // 搜索时用来备份原结果
      keyword: '',
      searching: false,
      registerModal: false,
      driverDetailModal: false
    }
  },
  created() {
    this.loadFleetData()
  },
  methods: {
    reloadData(){
      this.loadFleetData()
      this.driverDetailModal = false
    },
    loadFleetData() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/admin/fleet/getAll`,
      }).then(function (response) {
        that.allFleetData = []
        response['data'].forEach(v => {
          let newData = {
            fleetId: v['id'],
            name: v['name'],
            driverAmount: v['driverAmount'],
            telephone:v['telephone']

          }
          that.allFleetData.push(newData)
          that.$axios({
            method: 'post',
            url: `${that.$baseURI}/api/admin/driver/getAll`,
            data: {fleetId: v['id']}
          }).then(function (response) {
            let id = v['id']
            that.driverData[id] = []
            response['data'].forEach(v => {
              let newDriverData = {
                accountId: v['accountId'],
                username: v['username'],
                driverId: v['driverId'],
                name: v['name'],
                telephone: v['telephone']
              }
              that.driverData[id].push(newDriverData)
            })
          })
        })
        that.currentFleetData = that.allFleetData.slice(0, 10)
      })
    },
    showDriverInfo(fleetId) {
      this.showingFleetInfo.fleetId = fleetId
      this.showingFleetInfo.driverData = this.driverData[fleetId].slice(0)
      this.driverDetailModal = true
    },
    changePrePageNum(num) {
      this.prePageNum = num
      this.currentFleetData = this.allFleetData.slice(0, num + 1)
    },
    showPage(index) {
      this.currentFleetData = this.allFleetData.slice(this.prePageNum * (index - 1), this.prePageNum * index + 1)
    },
    setRegisterModal(fromChild) {
      this.registerModal = fromChild;
    },
    setDriverDetailModal(fromChild){
      this.driverDetailModal = fromChild;
    },},
  watch: {
    keyword() {
      //函数节流
      let that = this
      if (this.timer) {
        clearTimeout(this.timer)
      }
      //删除文字  清零
      if (this.keyword === '') {
        that.allFleetData = that.allFleetDataBackup.slice(0)
        that.showPage(1)
        that.searching = false
        return
      }
      this.timer = setTimeout(() => {
        if (!that.searching) {
          that.allFleetDataBackup = that.allFleetData.slice(0)
        }
        that.searching = true
        that.allFleetData = []
        that.allFleetDataBackup.forEach(v => {
          if ((v.name + v.fleetId + v.driverAmount).indexOf(this.keyword) > -1) {
            that.allFleetData.push(v)
          }
        })
        that.showPage(1)
      }, 100)
    }
  },
}
</script>

<style scoped>

</style>