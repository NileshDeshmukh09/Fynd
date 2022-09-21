<template>
  <div>
    <main class="container mt-3 mb-3">
      <h1>Meeting</h1>
      <hr />

      <div class="tab">
        <button
          class="tablinks active"
          onclick="tabSwitch(event, 'search-filter')"
        >
          filter/Search Meeting
        </button>
        <button class="tablinks" onclick="tabSwitch(event, 'add-meet')">
          Add a Meeting
        </button>
      </div>

      <div id="search-filter" class="tabcontent">
        <!-- Form -->
        <div class="filter-form">
          <form action="./meeting.html" method="POST">
            <h1 id="filter-heading">Search for Meetings</h1>
            <hr />
            <div class="form-group">
              <label for="date" class="form-data">Date</label>
              <!-- <input type="date" class="form-control" id="date" > -->
              <select class="form-control" id="search">
                <option class="options">ALL</option>
                <option class="options">PAST</option>
                <option class="options">TODAY</option>
                <option class="options">UPCOMING</option>
              </select>
            </div>
            <div class="form-group">
              <label for="search" class="form-data">Search for</label>
              <textarea
                name="search"
                id="search"
                cols="5"
                rows="3"
                placeholder="search using words which describe the meeting"
              ></textarea>
            </div>

            <button class="btn btn-info btn-width">Select</button>
          </form>
        </div>

        <div class="filter-box">
          <h1>Meeting Matching search criteria</h1>
          <hr />

          <div class="filter-content">
            <p>
              <span id="meet-date" class="text-info">05 August 2000</span> 06:00
              - 07:00
            </p>

            <p>Project kickoff</p>
            <a href="#" class="btn btn-danger btn-space remove-underline"
              >Excuse Yourself</a
            >
            <hr />

            <p class="members-email">
              <span><b> Attendee :</b></span> fakeemail@fynd.com ,
              fakeemail02@fynd.com
            </p>
            <div>
              <input
                type="number"
                class="select-member"
                placeholder="Select Member"
              />
              <button class="button btn-style btn-info">Add</button>
            </div>
          </div>

          <div class="filter-content">
            <p>
              <span id="meet-date" class="text-info">09 August 2000</span> 09:00
              - 10:30
            </p>

            <p>AWS Architecture</p>
            <a href="#" class="btn btn-danger btn-space remove-underline"
              >Excuse Yourself</a
            >
            <hr />

            <p class="members-email">
              <span>Attendee :</span> fakeemail@fynd.com , fakeemail02@fynd.com
            </p>
            <div>
              <input
                type="number"
                class="select-member"
                placeholder="Select Member"
              />
              <button class="button btn-style btn-info">Add</button>
            </div>
          </div>
        </div>

        <!-- Form end -->
      </div>

      <div id="add-meet" class="tabcontent">
        <!-- Form -->
        <div class="filter-form">
          <form @submit.prevent="addMeet">
            <h1 id="filter-heading">Add a New Meeting</h1>
            <hr />
            <div class="form-group">
              <label for="date" class="form-data">Date</label>
              <input
                type="date"
                v-model="date"
                class="form-control"
                name="date"
                id="date"
              />

              <!-- <select class="form-control" id="search">

                            <option class="options">ALL</option>
                            <option class="options">PAST</option>
                            <option class="options">TODAY</option>
                            <option class="options">UPCOMING</option>

                        </select> -->
            </div>

            <div class="form-group">
              <label for="startTime" class="form-data"
                >Start time ( hh:mm )</label
              >
              <input
                type="time"
                v-model="startTime"
                name="startTime"
                id="startTime"
              />
            </div>

            <div class="form-group">
              <label for="endTime" class="form-data">End time ( hh:mm )</label>
              <input
                type="time"
                v-model="endTime"
                name="endTime"
                id="endTime"
              />
            </div>

            <div class="form-group">
              <label for="description" class="form-data">Description</label>
              <textarea
                name="description"
                id="description"
                cols="5"
                rows="3"
                v-model="description"
                placeholder="What is the Agenda of the Meeting ?"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="email" class="form-data"
                >EmailIds of attendees , or teams's short</label
              >
              <input
                type="email"
                name="email"
                id="email"
                v-model="newEmail"
                placeholder="fake@email.com , @fake-day , fake@fynd.com"
              />
              <p>
                Separte emailds / team short names by commas - team short names
                always begin with @
              </p>
            </div>

            <button class="btn btn-info btn-width">Add Meeting</button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { scheduleAMeet } from "@/services/addMeet";
export default {
  name: "MeetingsPage",
  date: {
    meetings : [],
    addAMeet: {
      date: "",
      startTime: "",
      endTime:"",
      description: "",
      newEmail: "",
      emails: [],
    },
    methods: {
      addMeet() {
        this.email = this.newEmail.split(",");
        console.log(this.addMeet);
      },

    
    async fetchMeeting() {
      try{
        this.meetings = await scheduleAMeet();
      }catch(error){
        console.log(error.message );
      }
    
    },
    
    }
  }
}


</script>

<style>
/* Style the tab */
.tab {
  overflow: hidden;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 1.2em;
  font-weight: 800;
  margin: 20px 0px 0px 0px;
  color: rgb(25, 87, 234);
}

/* style and hover the Button */
btn-info:hover {
  background-color: rgb(11, 40, 156);
}
/**
.container {
  font-family: 'Nunito', sans-serif;
}
*/

.btn-secondary {
  background-color: rgb(204, 70, 70);
  color: white;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: rgb(227, 223, 223);
  color: black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

/* Style the tab content */
.tabcontent {
  display: block;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  background-color: rgb(227, 223, 223);
}

/* filter-heading */
#filter-heading {
  color: white;
}

.btn-width {
  width: 200px;
  font-size: 1.2em;
  font-weight: 900;
  margin: 20px auto;
  border-radius: 5px;
}
.filter-form {
  background: rgb(63, 153, 205);
  padding: 30px;
  border-radius: 5px;
}

.filter-content {
  border: 1px solid black;
  border-radius: 5px;
  padding: 15px;
  /* height : 300px; */
  margin-top: 10px;
  background-color: #fff;
}

.filter-content p {
  font-size: 1.2em;
  font-weight: 700;
  margin-left: 20px;
}

.filter-content p #meet-date {
  font-size: 1.4em;
}

.btn-space {
  margin-top: -10px;
}

.members-email span {
  color: rgb(87, 86, 86);
  font-weight: 900;
}

.options {
  /* background: rgb(204, 228, 241); */
  background: rgb(103, 145, 207);
  font-weight: 700;
}

.form-group p {
  font-size: 1em;
  color: rgb(252, 251, 248);
  font-weight: 800;
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

@media (min-width: 1000px) {
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
  /* width: 80%; */
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
  margin: 22px;
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
  margin-left: 15px;
  width: auto;
  border: 1px solid black;
  border-radius: 3px;
}

.btn-style {
  padding: 2px;
  border-radius: 3px;
  height: 36px;
  border: 0px solid;
  margin: 5px;
  width: 50px;
}

@media (max-width: 600px) {
  .d-sm-none {
    display: none;
  }
}

@media (min-width: 600px) {
  .d-lg-none {
    display: none;
  }
}
</style>