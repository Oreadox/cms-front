<template>
  <div :style="{padding: '24px', margin: 'auto auto auto 15vw'}">
    <ParticipantDetail v-if="whichChoose"></ParticipantDetail>
    <CreatorDetail v-else-if ="!whichChoose"></CreatorDetail>
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
      whichChoose: false,
    }
  }
}
</script>

<style scoped>


</style>
