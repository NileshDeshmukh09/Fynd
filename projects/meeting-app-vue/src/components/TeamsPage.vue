<template>
  <div>
   
    <main class="container mt-3 mb-3">
        <h1>Teams</h1>
        <hr>
        <h3>View and edit team you were a part of</h3>
        
        <div class="teams-section">

            <div class="teams">
                <h3 class="team-heading">Customer Acquisition Campaign</h3>
                <h3 class="sub-heading">@customer-acquisition</h3>
                
                <h3>Team to come up with Strategies to win over customer by end of FY21</h3>

                <a href="#" class="btn btn-secondary btn-space remove-underline">Excuse Yourself</a>
                <hr>
                <p class="members-email"><span>Members :</span> fakeemail@fynd.com , fakeemail02@fynd.com</p>

                <div>
                    <input type="number" class="select-member" placeholder="Select Member">
                    <button class="button btn-style btn-info">Add</button>
                </div>
            </div>

            <div class="teams">
                <h3 class="team-heading">MERN stack Training</h3>
                <h3 class="sub-heading">@mern-stack-taining</h3>
                
                <h3>Group attending MERN stack training for website revamp project</h3>

                <a href="#" class="btn btn-secondary btn-space remove-underline">Excuse Yourself</a>
                <hr>
                <p class="members-email"><span>Members :</span> fakeemail@fynd.com , fakeemail02@fynd.com</p>

                <div>
                    <input type="number" class="select-member" placeholder="Select Member">
                    <button class="button btn-style btn-info">Add</button>
                </div>
            </div>

            <div class="teams">
                   <div class="addteam">
                    +
                   </div> 
            </div>
        </div>
    </main>
  </div>
</template>

<script>
export default {
    name : 'TeamsPage'
}
</script>

<style scoped>
.addteam {
    display: flex;
    justify-content: center;
    margin-top: 250px;
    font-weight: 900;
    font-size: 3em;
}
.teams-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    /* align-items: ; */
}

.teams {
    width: 330px;
    height: 500px;
    border: 2px solid black;
    border-radius: 3px;
    background: rgb(231, 231, 231);
    margin-top: 10px;
    
}
.team-heading {
    font-size: 1.4em;
    color: black;
}

h3 {
    color: grey;
}







p  {
    font-weight: 600;
}



button {
    font-weight: bold;
    color: white;
}

.set-icon{
  position: relative;
  font-size: 1.5em;
  top: 50%;
  left:50%;

}



.sub-heading {
    color: black;
}

@media ( min-width: 600px ) {
    .teams {
        height: 550px;
    }
}

.form-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    margin-top: 30px;
    
}

.form-group label,
.form-group input,
.form-group select,
.form-group textarea {
    flex-basis: 100%;
    margin: 0.25em 0;
    font-size: 1.2em;
    border-radius: 5px;
}

.form-group textarea::placeholder {
    font-size: 1.2em;
    font-weight: 600;
}

.form-group input,
.form-group select,
.form-group textarea {
    padding: 0.5em;
}

.form-data {
    /* display: block; */
    /* background-color: white; */
    font-weight: 600;
    font-size: 50px;
    
}

@media ( min-width: 1000px ) {
    .form-group label {
        flex: 0 0 100%;
        font-size: 1.5em;
    }
     
    .form-group input,
    .form-group select,
    .form-group textarea {
        flex: 0 0 95%;
    }
}

/* app css */

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
    background-color: rgb(217, 92, 92);
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