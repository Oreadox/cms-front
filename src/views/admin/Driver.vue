<template>
  <div>
    <div>
      <Button type="primary">添加车队</Button>
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
  </div>
</template>

<script>
import FleetRegister from "@/components/admin/FleetRegister";
export default {
  name: "Driver",
  components: {FleetRegister},
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
                    this.show(params.index)
                  }
                }
              }, '车队详情'),
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
              }, '司机管理'),
            ]);
          }
        },
      ],
      currentPage: 0,
      prePageNum: 10,
      driverData: {},
      currentFleetData: [],
      allFleetData: [],
      allFleetDataBackup: [],     // 搜索时用来备份原结果
      keyword: '',
      searching: false,
      registerModal: false
    }
  },
  created() {
    this.loadFleetData()
  },
  methods: {
    loadFleetData() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/admin/fleet/getAll`,
      }).then(function (response) {
        that.allFleetData = []
        response['data'].forEach(v => {
          let newData = {
            fleetId: v['fleetId'],
            name: v['name'],
            driverAmount: v['driverAmount']
          }
          that.allFleetData.push(newData)
        })
        that.currentFleetData = that.allFleetData.slice(0, 10)
      })
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
        that.allFleetData = that.allFleetDataBackup.slice(0)
        that.showNextPage(1)
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
        that.showNextPage(1)
      }, 100)
    }
  },
}
</script>

<style scoped>

</style>