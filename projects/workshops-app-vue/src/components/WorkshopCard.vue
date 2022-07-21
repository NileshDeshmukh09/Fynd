<template>
  <div class="card p-3">
    <img :src="workshop.imageUrl" class="card-img-top" :alt="workshop.name" />
    <div class="card-body">
      <h5 class="card-title">{{ workshop.name }}</h5>
      <div class="card-text">
      <!-- While using mixins -->

      <!-- 
        <div>{{ formatDate(workshop.startDate , dateFormat) }} - {{formatDate( workshop.endDate , dateFormat )}}</div>
      -->

      <div>{{ workshop.startDate | formatDate( 'indian' ) }} - {{ workshop.endDate | formatDate( format ) }} </div>
       
      </div>
      <a href="#" class="btn btn-primary">View Details</a>
    </div>
  </div>
</template>

<script>
// import { formatDate } from '@/mixins/formatDate';
import formatDateMixin from '@/mixins/formatDate';

export default {
    name : "WorkshopCard",
    date(){
      return {
        format : 'indian',     
      }
    },
    props : {
        workshop : {
            type : Object ,
            required : true
        }
    },

    mixins : [ formatDateMixin ]
    
};
</script>

<style>
</style>