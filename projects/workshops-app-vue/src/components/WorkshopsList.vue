<template>
  <div>
      <!-- <div v-for="workshop in workshops" :key="workshop.id">
        {{workshop.name}}

      </div> -->
      WokshopList Works !
  </div>
</template>

<script>
// import { getWorkshops } from '@/services/workshops';

export default {
    name : 'WorkshopsList',

    created(){
      console.log("Component has loaded !")
    }
    // data() {
    //    return {
    //     workshops :[],
    //    }
    // },
    // async created(){
    //  this.workshops =  await getWorkshops()
    // } 

}
</script>

<style>

</style>