<template>
  <div>
    <a style="text-indent: 2em;" @click="arrowBack">
      <Icon type="ios-arrow-back"></Icon>
      返回</a>
    <Table :columns="this.columns" :data="this.participantsInfo" :stripe="true">
    </Table>
    <Modal
        style="padding: 20px"
        footer-hide
        v-model="openWriteMail">
      <div style="padding: 5%">
        <WriteMail ref="fillAccount" :send-id="sendMailAccount" @closeSendModal="closeSendModal"></WriteMail>
      </div>
    </Modal>
  </div>
</template>

<script>
import WriteMail from "@/components/common/WriteMail";

export default {
  name: "Participants",
  components:{WriteMail},
  data() {
    return {
      // TODO 记得完善删除人员等功能
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
          key: 'hotelProgress',
          align: 'center',
          render: (hotelFinish, params) => {
            if (params.row.hotelProgress === 2) {
              return hotelFinish('div', [
                hotelFinish('Tag', {
                  props: {
                    color: 'success'
                  },
                  style: {
                    marginRight: '5px'
                  },
                }, '完成'),
              ]);
            } else if (params.row.hotelProgress === 1) {
              return hotelFinish('div', [
                hotelFinish('Tag', {
                  props: {
                    color: '#c5c8ce'
                  },
                  style: {
                    marginRight: '5px'
                  },

                }, '待用户确认'),
              ]);
            } else {
              return hotelFinish('div', [
                hotelFinish('Tag', {
                  props: {
                    color: '#c5c8ce',
                  },
                  style: {
                    marginRight: '5px'
                  },
                }, '待酒店接单'),
              ]);
            }
          }
        },
        {
          title: '接车订单',
          key: 'driverProgress',
          align: 'center',
          render: (driveFinish, params) => {
            if (params.row.driverProgress === 2) {
              return driveFinish('div', [
                driveFinish('Tag', {
                  props: {
                    color: 'success',
                  },
                  style: {
                    marginRight: '5px'
                  },
                }, '完成'),
              ]);
            } else if (params.row.driverProgress === 1) {
              return driveFinish('div', [
                driveFinish('Tag', {
                  props: {
                    color: '#c5c8ce',
                  },
                  style: {
                    marginRight: '5px'
                  },
                }, '待用户确认'),
              ]);
            } else {
              return driveFinish('div', [
                driveFinish('Tag', {
                  props: {
                    color: '#c5c8ce',
                  },
                  style: {
                    marginRight: '5px'
                  },
                }, '待司机接单'),
              ]);
            }
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
          render: (sent, params) => {
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
                    this.sendMail(params.row.account)
                  }
                }
              }, '发信息'),
            ]);
          },
        },
        {
          title: '删除人员',
          key: 'deleteMember',
          width: 100,
          align: 'center',
          render: (deleteMember, params) => {
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
                    this.deleteParticipant(params.row.id)
                  }
                }
              }, '删除'),
            ]);
          }
        }
      ],
      conference: [{
        name: 'one',
        phone: '12312312411',
        workUnit: 'xxx',
        hotel: 'xxx',
        driveFinish: true,
        account: "xxx",
      },
      ],
      sendMailAccount: { account:'1233'},
      openWriteMail:false,
    }
  },
  props: ['participantsInfo', 'conferenceId'],
  methods: {
    deleteParticipant(userId) {
      let that = this
      this.$axios({
        method: 'post',
        url: `${this.$baseURI}/api/conference/enrollment/remove`,
        data: {id: that.conferenceId, userId: userId}
      }).then(function (response) {
        if (response['data']['success'] === true) {
          that.$Message.success("删除成功");
        } else {
          that.$Message.error(response['data']['message'])
        }
      })
    },
    arrowBack() {
      this.$emit('setCheckParticipants', false);
    },
    closeSendModal(fromChild){
      this.openWriteMail=fromChild
    },
    sendMail(userId){
      this.sendMailAccount.account = userId;
      this.$refs.fillAccount.autoFillAccount()
      console.log("传前"+this.sendMailAccount)
      this.openWriteMail=true
    }
  }
}
</script>

<style scoped>

</style>