<template>
  <div>
       <nav class="navbar">
        <ul class="list-unstyled menu container">
        
        <div class="nav-left">
            <li class="d-lg-none text-right">
                <button id="menu-button"><i class="fa-solid fa-bars"></i></button>
            </li> 
            <li class="nav-items nav-items-selected d-sm-none">
                <a href="/index.html" class="link-plain page-start">Calender</a>
            </li>
            <li class="nav-items d-sm-none">
                <a href="/meeting.html" class="link-plain">Meeting</a>
            </li>
            <li class="nav-items d-sm-none">
                <a href="/teams.html" class="link-plain">Teams</a>
            </li>
        </div>
           
        <div class="nav-right">
            <li class="nav-items d-sm-none ">
                <a class="link-plain ">Welcome <span id="username">Nilesh09 </span> ! </a>
            </li>
            <li class="nav-items d-sm-none">
                <a id="logout" class="link-plain">Logout</a>
            </li>

            <li class="nav-items d-sm-none">
                <a href="./signup.html" class="link-plain">Signup</a>
            </li>
        </div>

         
                
        
        </ul>
    </nav> 

  </div>
</template>

<script>
export default {
  name: "AppMenu",
};
</script>


<style scoped>
.navbar {
  height: 50px;
}
nav {
  background-color: #eee;
  font-size: 1.2rem;
}

.menu {
    display: flex;
    flex-wrap: wrap;
    padding: 0.5em 0;
    justify-content: space-between;
   
}

.menu .nav-left ,
.menu .nav-right{
  display: flex;
  flex-wrap: wrap;
}



span {
  color: rgb(48, 142, 210);
  font-weight: 900;
}

.menu li a {
    display: inline-block;
    padding: 0.5em;
    margin-right: 1em;
} 

.nav-items-selected a {
  color: blue;
}

.text-right {
  text-align: right;
}

.menu .nav-left,
.menu .nav-right{
  flex-direction: column;
}

.menu{
  flex-direction: column;
}

.fa-solid {
  color: black;
}


/*---------responsive nav ----------*/



@media (min-width: 600px) {
  .menu div {
    flex-basis: auto;
  }

  .menu {
    flex-direction: row;
  }

  .menu .nav-left,
  .menu .nav-right{
  flex-direction: row;
}
}

/*----------- utils .css --------------- */


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
    width: 80%; 
    max-width: 1300px;
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
