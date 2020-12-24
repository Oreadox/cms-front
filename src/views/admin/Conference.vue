<template>
  <div>
    <Input suffix="ios-search" style="width: auto" placeholder="查找会议" v-model='keyword'/>
    <Table :columns="this.columns" :data="this.currentConferenceData" :stripe="true" style="margin: 30px auto">
    </Table>
    <Page :total="allConferenceData.length" show-sizer show-elevator
          @on-page-size-change="changePrePageNum"
          @on-change="showNextPage"
          style="text-align: center"/>
    <Modal style="padding: 20px" width="30"
           footer-hide
           :mask-closable="false"
           v-model="deleteConferenceModal">
      <div>
        <h3 style="text-align: center">确定要删除账号{{ deletedConferenceValue.name }}吗？</h3>
        <hr style="margin: 5px"/>
        <p style="text-indent: 2em; margin-bottom: 5px">这个选项<b>不能</b>被回滚，这会导致会议<b>
          {{ deletedConferenceValue.name }}</b> 被永久移除</p>
        <p style="text-indent: 2em; margin-bottom: 8px">如果确实要删除，请在下方输入<b>
          {{ deletedConferenceValue.name }}</b> 以再次确认</p>
        <Input style="width: 100%; margin-bottom: 5px"
               v-model="deletedConferenceValue.nameCheck"></Input>
        <Button class="button" type="text" @click="deleteConferenceCheck">
          我明白这意味着什么，删除该账号
        </Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: "Conference",
  data() {
    return {
      columns: [
        {
          title: '会议编号',
          key: 'conferenceId',
          align: 'center',
        },
        {
          title: '会议名',
          key: 'name',
          align: 'center',
        },
        {
          title: '创建者用户名',
          key: 'creatorUsername',
          align: 'center',
        },
        {
          title: '会议号',
          key: 'number',
          align: 'center',
        },
        {
          title: '操作',
          key: 'operation',
          align: 'center',
          width: 180,
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
                    this.deleteConference(params.row.conferenceId, params.row.name)
                  }
                }
              }, '删除会议'),
            ]);
          }
        },
      ],
      currentPage: 0,
      prePageNum: 10,
      currentConferenceData: [],
      allConferenceData: [],
      allConferenceDataBackup: [],     // 搜索时用来备份原结果
      keyword: '',
      searching: false,
      deletedConferenceValue: {
        id: 0,
        name: '',
        nameCheck: ''
      },
      deleteConferenceModal: false,
    }
  },
  created() {
    this.loadConferenceData()
  },
  methods: {
    loadConferenceData() {
      let that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/admin/conference/getAll`,
      }).then(function (response) {
        that.allConferenceData = []
        response['data'].forEach(v => {
          let newData = {
            conferenceId: v['conferenceId'],
            name: v['name'],
            creatorUsername: v['username'],
            number: v['number']
          }
          that.allConferenceData.push(newData)
        })
        that.currentConferenceData = that.allConferenceData.slice(0, 10)
      })
    },
    deleteConference(conferenceId, name) {
      this.deletedConferenceValue.id = conferenceId
      this.deletedConferenceValue.name = name
      this.deleteConferenceModal = true
    },
    deleteConferenceCheck() {
      if (this.deletedConferenceValue.name === this.deletedConferenceValue.nameCheck) {
        let that = this
        this.$axios({
          method: 'post',
          url: `${this.$baseURI}/api/admin/conference/remove`,
          data: {conferenceId: that.deletedConferenceValue.id}
        }).then(function (response) {
          if (response['data']['success'] === true) {
            that.$Message.success("删除成功");
            setTimeout(()=>{
              that.$router.go(0)
            },500)

          } else {
            that.$Message.error(response['data']['message'])
          }
        })
      }
    },
    changePrePageNum(num) {
      this.prePageNum = num
      this.currentConferenceData = this.allConferenceData.slice(0, num + 1)
    },
    showNextPage(index) {
      this.currentConferenceData = this.allConferenceData.slice(this.prePageNum * (index - 1), this.prePageNum * index + 1)
    }
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
        that.allConferenceData = that.allConferenceDataBackup.slice(0)
        that.showNextPage(1)
        that.searching = false
        return
      }
      this.timer = setTimeout(() => {
        if (!that.searching) {
          that.allConferenceDataBackup = that.allConferenceData.slice(0)
        }
        that.searching = true
        that.allConferenceData = []
        that.allConferenceDataBackup.forEach(v => {
          if ((v.creatorUsername + v.name + v.conferenceId + v.number).indexOf(this.keyword) > -1) {
            that.allConferenceData.push(v)
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