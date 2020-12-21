<template>
  <div>
    <CreatorDetail v-if="isCreator" :conferenceId="id"></CreatorDetail>
    <ParticipantDetail v-else-if ="!isCreator" :conferenceId="id"></ParticipantDetail>
  </div>
</template>

<script>
 import CreatorDetail from "@/components/conference/CreatorDetail";
 import ParticipantDetail from "@/components/conference/ParticipantDetail";
export default {
  name: "Detail",
  components:{CreatorDetail,ParticipantDetail},
  data(){
    return{
      id: 0,
      isCreator: true,
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData(){
      var that = this
      this.id = this.$route.params.id
      var data = {
        id: this.id
      }
      this.$axios(
          {
            method: 'post',
            url: `${this.$baseURI}/api/user/conference/created/checkById`,
            data: data
          }
      ).then(function (response) {
        that.isCreator = response['data']['result']
      })
    }
  }
}
</script>

<style scoped>


</style>
