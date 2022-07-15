<template>
  <div>
      <div v-for="workshop in workshops" :key="workshop.id">
          {{workshop.name}}
      </div>
      WokshopList Works !
  </div>
</template>

<script>
import { getWorkshops } from '@/services/workshops';

export default {
    name : 'WorkshopsList',
    data() {
      console.log("Component Instantiated - data is being created !")
       return {
        workshops :[],
       }
    },
    async created(){
      try{
        this.workshops =  await getWorkshops()
      }catch(err){
        console.log(err);
      }
    } 

}
</script>

<style>

</style>