<template>
  <div>
    <a style="text-indent: 2em;" @click="arrowBack">
      <Icon type="ios-arrow-back"></Icon>
      返回</a>
    <Table :columns="this.columns" :data="this.conference" :stripe="true">
    </Table>

  </div>
</template>

<script>
export default {
  name: "Participants",
  data() {
    return {
      columns: [
        {
          title: '姓名',
          key: 'name',
          align: 'center',
        },
        {
          title: '手机号',
          key: 'phone',
          align: 'center',
        },
        {
          title: '工作单位',
          key: 'workUnit',
          align: 'center',
        },
        {
          title: '酒店订单',
          key: 'hotel',
          align: 'center',
          render: (hotalFinish) => {
            return hotalFinish('div', [
              hotalFinish('Tag', {
                props: {
                  size: 'small',
                  color: 'success'
                },
                style: {
                  marginRight: '5px'
                },

              }, '完成'),
            ]);
          }
        },
        {
          title: '接车订单',
          key: 'drive',
          align: 'center',
          render: (driveFinish) => {
            return driveFinish('div', [
              driveFinish('Tag', {
                props: {
                  size: 'small',
                  color:'primary',
                },
                style: {
                  marginRight: '5px'
                },
              }, '等待中'),
            ]);
          }
        },
        {
          title: '账号',
          key: 'account',
          align: 'center',
        },
        {
          title: '发信息',
          key: 'send',
          width: 100,
          align: 'center',
          render: (sent) => {
            return sent('div', [
              sent('Button', {
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
              }, 'send'),
            ]);
          },
        },
        {
          title: '删除人员',
          key: 'deleteMember',
          width: 100,
          align: 'center',
          render: (deleteMember) => {
            return deleteMember('div', [
              deleteMember('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {

                  }
                }
              }, 'delete'),
            ]);
          }
        }
      ],
      conference: [{
        name: 'one',
        phone: '1231231241',
        workUnit: 'xxx',
        hotel: 'xxx',
        drive: 'xxx',
        account: "xxx",
      }],
    }
  },
  methods: {
    arrowBack() {
      this.$emit('setCheckParticipants', false);
    }
  }
}
</script>

<style scoped>

</style>