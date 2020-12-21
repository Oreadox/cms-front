<template>
  <div>
    <Table :columns="this.columns" :data="this.conference" :stripe="true">
    </Table>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      driveFinish:false,
      hotelFinish:false,
      columns: [
        {
          title: '用户编号',
          key: 'userID',
          align: 'center',
          width: 100
        },
        {
          title: '用户名',
          key: 'name',
          align: 'center',
        },
        {
          title: '用户姓名',
          key: 'username',
          align: 'center',
        },
        {
          title: '操作',
          key: 'operation',
          align: 'center',
          width: 300 ,
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
                    this.remove(params.index)
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
                    this.show(params.index)
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
              },  '发信息'),
            ]);
          }
        },
      ],
      conference: [{
        userID: 'one',
        name: 'xx',
        username: 'xxx',
      }],
    }
  },
  methods: {
      addConferenceData(){
        // TODO: 自增完毕后再加载表格
        let conferenceData = {
          userID: 'two',
          name: 'xx',
          username: 'xxx',
        }
        this.conference.push(conferenceData)
      },

    show (index) {
      console.log(index)
    },
    remove (index) {
        // TODO: 添加删除反馈
      this.data.splice(index, 1);
    }
  }
}
</script>

<style scoped>

</style>

