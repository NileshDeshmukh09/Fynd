<template>
  <div>
    <div class="navMenu">
      <b-navbar toggleable="lg" type="dark" >
        <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="d-flex">
            <div class="navleft">
            <b-nav-item href="/">Calender</b-nav-item>
            <b-nav-item href="/meetings" >Meetings</b-nav-item>
            <b-nav-item href="/teams" >Teams</b-nav-item>
            </div>

            <div class="navRight">
            <b-nav-item href="#">Welcome <span class="bg-">Nilesh09 !</span></b-nav-item>
            <b-nav-item href="/" >Logout</b-nav-item>
            </div>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMenu",
};
</script>

<style scoped>
.navMenu {
  color: red;
  background: rgb(135, 41, 41);
}

.navbar{
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
}
</style>
