<template>
  <div>
    <div v-if="status === 'LOADING'">
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">
            Please wait while we fetch workshops ...
          </span>
        </div>
      </div>
    </div>
    <div v-else-if="status === 'ERROR'">
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
          {{ error.message }}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
    <div v-else>
      <h1>List of Workshops
        <div class="float-end">
            <button class="btn btn-sm btn-primary me-2" @click="previous">Previous</button>
            <button class="btn btn-sm btn-primary" @click="next">Next</button>
        </div>
      </h1>

      <hr>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-lg-3 d-flex  my-3"
          v-for="workshop in workshops"
          :key="workshop.id"
        >
          <!-- {{ workshop.name }} -->
          <WorkshopCard :workshop="workshop" />
          
        </div>
      </div>
    </div>
    <!-- WokshopList Works ! -->
  </div>
</template>

<script>
import { getWorkshopsByPage } from "@/services/workshops";
import WorkshopCard from './WorkshopCard'

export default {
  name: "WorkshopsList",
  components : {
    WorkshopCard
  },
  data() {
    console.log("Component Instantiated - data is being created !");
    return {
      status: "LOADED",
      workshops: [],
      error: null,
      page : 1
    };
  },
  methods:{
    async fetchWorkshops(){
      try {
        this.workshops = await getWorkshopsByPage( this.page );
        this.status = "LOADED";
      } catch (error) {
        console.log(error);
        this.status = "ERROR";
        this.error = error;
      }
    },
    previous(){
      if( this.page !== 1 ){
        this.page = this.page-1;
        this.fetchWorkshops();
      }
    },
    next(){
      this.page = this.page+1;
      this.fetchWorkshops(); 
    }
  },
  async created() {
    this.fetchWorkshops();
  },
};
</script>

<style>
</style>