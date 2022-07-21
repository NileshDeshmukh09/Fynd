<template>
  <div class="mainDiv">
  <h1></h1>
    <AppMenu />
    <div class="container my-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu.vue'

export default {
  name: 'App',
  components: {
    AppMenu
  }
}
</script>

<style>
.mainDiv {
    font-family: 'Nunito', sans-serif;
}



</style>
