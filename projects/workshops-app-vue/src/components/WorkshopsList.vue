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
        <strong>
          {{ error.message }}
        </strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
    <div v-else>
      <div class="row" >
          <div class="col-12 col-sm-6 col-lg-3" v-for="workshop in workshops" :key="workshop.id">
              {{ workshop.name }}
          </div>
      </div>
    </div>
    <!-- WokshopList Works ! -->
  </div>
</template>

<script>
import { getWorkshops } from "@/services/workshops";

export default {
  name: "WorkshopsList",
  data() {
    console.log("Component Instantiated - data is being created !");
    return {
      status: "LOADED",
      workshops: [],
      error: null,
    };
  },
  async created() {
    try {
      this.workshops = await getWorkshops();
      this.status = "LOADED";
    } catch (error) {
      console.log(error);
      this.status = "ERROR";
      this.error = error;
    }
  },
};
</script>

<style>
</style>