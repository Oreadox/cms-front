<template>
  <div :style="{padding: '24px', margin: 'auto auto auto 15vw'}">
    <ParticipantDtail v-if="whichChoose"></ParticipantDtail>
    <CreaterDtail v-else></CreaterDtail>
  </div>
</template>

<script>
 import CreaterDtail from "@/components/conference/CreaterDtail";
 import ParticipantDtail from "@/components/conference/ParticipantDtail";
export default {
  name: "Detail",
  components:{CreaterDtail,ParticipantDtail},
  data(){
    return{
      whichChoose: true,
    }
  }
}
</script>

<style scoped>


</style>
