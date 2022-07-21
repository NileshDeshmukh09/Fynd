<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

          <li class="nav-item active">
            <a class="nav-link" href="#">Calender</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Meeting</a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="#">Teams</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Welcome <span class="text-info"></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Teams</a>
          </li>

        </ul>

        
      </div>
    </nav>
  </div>
</template>

<script>


export default {
  name: "AppNavbar",
  
 
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
