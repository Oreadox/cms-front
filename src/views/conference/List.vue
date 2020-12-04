<template>
  <div>
    <Card dis-hover  :bordered=false :style="{padding: '24px', margin: 'auto auto auto 15vw'}">
      <div style="margin-bottom: 2vw">
        <Button size="large" type="primary">创建会议</Button>
        <Button size="large" style="margin-left: 5vw ">加入会议</Button>
      </div>
      <div>

        <Button @click="showProcessing = !showProcessing"  >进行中</Button>

        <collapse-transition>
          <Table :columns="this.columns" :data="this.conference" v-if="showProcessing"  :stripe="true">
          </Table>
        </collapse-transition><br>

        <Button @click="showFinish = !showFinish">已结束</Button>
        <collapse-transition>
          <Table :columns="this.columns" :data="this.conference" v-if="showFinish" :stripe="true">
          </Table>
        </collapse-transition>
      </div>
    </Card>
  </div>
</template>

<script>
import CollapseTransition from "@/plugins/CollapseTransition"

export default {


  name: "List",
  components:{
    'CollapseTransition':CollapseTransition,
  },
  data(){
    return{
      columns:[
        {key: 'id',
          title:'id'},

        {key: 'name',
          title:'name'},

        {key: 'address',
          title:'address'},

        {key: 'startTime',
          title:'startTime'},

        {key:'state',
          title: 'state',
        },

        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h) => {
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
                    this.show()
                  }
                }
              }, 'View'),
            ]);
          }
        }
      ],
      conference:[{
        id: 1000,
        name:'one',
        address:'xxx',
        startTime: '2020/12/12-2020/12/13',
        state: 'finish',
      }],
      showProcessing:true,
      showFinish:true,
    }
  },
  methods: {
    show () {
/*            this.$Modal.info({
              title: 'User Info',
              content: `Name：${this.conference[index].name}<br>Age：${this.conference[index].address}<br>Address：${this.conference[index].startTime}`
            })*/
      this.$router.push('/conference/detail')
    },
  }
}
</script>

<style scoped>

</style>