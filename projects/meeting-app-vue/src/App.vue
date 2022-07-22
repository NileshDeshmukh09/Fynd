<template>
  <div class="mainDiv">
  <h1></h1>
    <AppMenu />
    <div class="container ">
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
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
* {
    font-family: 'Nunito', sans-serif;
}


.list-unstyled {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.link-plain {
    text-decoration: none;
    color: initial;
    font-weight: 600;
}

.link-plain:hover {
    background-color: #ddd;
}


.container {
    max-width: 2000px;
    margin: 0 auto;
}
.mt-3 {
    margin-top: 1em;
}

.mb-3 {
    margin-bottom: 1em;
}

.mt-2 {
    margin-top: 0.75em;
}

.mb-2 {
    margin-top: 0.75em;
}


.text-right {
    text-align: right;
}

.btn {
    display: inline-block;
    padding: 0.5em 0.75em;
    border-radius: 3px;
    font-size: 0.85em;
}

.user {
    /* float: right; */
    text-align: right;
}


.btn {
    display: inline-block;
    padding: 12px 5px;
    border-radius: 3px;
    font-size: 0.85em;
}

.btn-primary {
    background-color: rgb(117, 158, 240);
    color: white;
}

.btn-space {
    margin : 22px;
    font-size: 1em;
    font-weight: 600;
    
}

.remove-underline {
    text-decoration: none;
}

.btn-info {
    background-color: rgb(35, 119, 237);
    color: whitesmoke;
}
.btn-secondary {
    background-color: rgb(204, 70, 70);
    color: white;
}

input::placeholder {
    font-weight: 800;
}

.members-email {
    font-size: 1.4em;
    margin-left: 15px;
}

.select-member {
    height: 35px;
    margin-left:15px;
    width: auto;
    border: 1px solid black;
    border-radius: 3px;
}

.btn-style {
    padding: 2px;
    border-radius: 3px;
    height: 36px;
    border: 0px solid ;
    margin: 5px;
    width: 50px;
}

@media ( max-width: 600px ) {
    .d-sm-none {
        display: none;
    }
}

@media ( min-width: 600px ) {
    .d-lg-none {
        display: none;
    }
}



</style>
