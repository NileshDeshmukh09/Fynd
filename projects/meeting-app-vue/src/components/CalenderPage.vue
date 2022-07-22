<template>
  <div>
    <main class="container mt-3 mb-3">
      <h1>Calender</h1>
      <hr />
      <div class="page-heading">
        <h2>23 September 2022</h2>
        <input type="date" class="input-date" />
      </div>
      <h3>Saturday</h3>

      <section class="meeting-list-schedule">
        <div class="meet-schedule">
          <div class="meet-number">0</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">1</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">2</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">3</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">4</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">5</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">6</div>
          <div class="meet-details">
            <!-- <h3>meet has been scheduled</h3> -->
            <div class="meet-day-detail">
              <h4>project kickoff</h4>
              <p>Attendee : nileshdeshmukh@gmail.com</p>
            </div>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">7</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">8</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">9</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">10</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">11</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">12</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">13</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">14</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">15</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">16</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">17</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">18</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">19</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>

        <div class="meet-schedule">
          <div class="meet-number">20</div>
          <div class="meet-details">
            <h3>meet has been scheduled</h3>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "CalenderPage",
};
</script>

<style>
.page-heading {
    display: flex;
    justify-content: space-between;
  
}

.input-date {
    border-radius: 5px;
    width: 16em;
    height: 40px;
}

h1,h2,h3 {
    margin-left: 27px;
    
}
h3 {
    color: rgb(124, 123, 121);
}
/* .page-start {
    margin-left: 25px;
} */

.meet-schedule {
    display: flex;
    align-items: center;
    margin: 8px;
  

}

.meet-number {
    width: 25px;
    font-weight: 700;
    /* background-color: rgb(196, 201, 202); */
}

.meet-details {
    flex-grow: 1;
    background: rgb(63, 153, 205);
    flex-basis: 100%;
    width: auto;
    height: 50px;
    display: flex;

}


.meet-day-detail {
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin: 5px 25px;
    justify-self:center ;
    
    background: rgb(192, 186, 186);
}
</style>