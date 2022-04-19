<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Footer
  }
}
</script>
<template>
  <div class="topHome">
    <div class="topHomeDistribuation">
      <div class="boyImg">

      </div>
      <div class="textRight">
        <h1>Earn money <br> your way</h1>
        <p>See how much you can make tasking <br> on ProviTask</p>
        <label for="area">Select your area <br>
          <select name="" id="area"></select>
        </label>
        <label for="area">Choose a Category <br>
          <select name="" id="area"></select>
        </label>
        <p>16$ per hour</p>
      </div>
    </div>
    <div class="textBottom">
      <button>Get started</button>
      <p>Already have an account? Sign in</p>
    </div>
  </div>
  <div class="middleHome">
    <div class="download">
      <div class="content"> 
        <p>For better services download now</p>
      </div>
      <div class="content"> 

      </div>
      <div class="content"> 

      </div>
    </div>
    <div class="workDescription">
      <h1>Flexible work, at your <br> fingertips</h1>
      <p>find local jobs that fit your skills and schedule. with TaskRabbit, you have <br> the freedom and  support to be your own boss</p>
    </div>
    <div class="workDescription">
      <div class="workImg">
        <h1>Be your own <br> boss</h1>
        <p>Work how, when, and <br>where you want. Offer ser- <br>
        vices in 50+ categories <br> and set a flexible schedule <br>
        and work area.</p>
      </div>
      <div class="workImg">
        <h1>Set your own <br> rates</h1>
        <p>You keep 100% of what <br> you charge, plus tips! In- <br>
        voice and get paid directly <br> through our secure pay- <br>
        ment system.</p>
      </div>
      <div class="workImg">
        <h1>Grow your <br> business</h1>
        <p>We connect you with cli- <br> ents in your area, and <br>
        ways to market yourself -- <br> so you can focus on what <br>
        you do best.</p>
      </div>
    </div>
    <div class="whatIs">
      <div class="whatIsContent">
        <h1>What is ProviTask?</h1>
        <p>it is a pleasure for us that you are <br>
        part of our Provitask family, wheter <br>
        you are a client or a professional,<br>
        our interactive platform is linked to <br>
        the daily work of our home lives and<br>
        work centers, we are satisfied with<br>
        being able to help our clients to <br>
        have a longer life easy, without wor- <br>
        king about doing usual complicated <br>
        tasks, often not having the neces- <br>
        sary knowledge and equipment.</p>
      </div>
      <div class="whatIsContent">

      </div>
    </div>
    <div class="started">
      <h1>getting started</h1>
    </div>
    <div class="started">
      <div class="startedDescription">
        <h1>1. Sign Up</h1>
        <p>Create your account. Then <br>
        download the Tasker app <br>
        to continue registration</p>
      </div>
      <div class="startedDescription">
        <h1>2. Build your profile</h1>
        <p>Select what services you <br>
        want to offer and where</p>
      </div>
      <div class="startedDescription">
        <h1>3. Verify your eligibility <br>
        to task</h1>
        <p>Confirm your identity and <br> 
        submit business verifications, <br>
        as required</p>
      </div>
    </div>
    <div class="started">
      <div class="startedDescription">
        <h1>4. Pay registration fee</h1>
        <p>In applicable cities, we <br> 
        charge a $25 registra fee <br>
        that helps us provide the <br>
        best service to you</p>
      </div>
      <div class="startedDescription">
        <h1>5. Set your scheedule <br>
        and work are</h1>
        <p>Set your weekly availabily- <br>
        ty and opt in to receive <br>
        same-day jobs</p>
      </div>
      <div class="startedDescription">
        <h1>6. Start getting jobs</h1>
        <p>Grow your business on your
          own terms.
        </p>
      </div>
    </div>
    <div class="started">
      <h1>Your questions, answered</h1>
    </div>
    <div class="helpers">
      <p>What`s required to become a Tasker?</p>
      <p>Do i need experience to task?</p>
      <p>How do i get jobs?</p>
      <p>How do i get paid?</p>
      <p>Where does Provitask operate?</p>
      <p>What categories can i task in on Provitask?</p>
      <p>How long does it take for my registration to be processed?</p>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.topHome{
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60em;
  border: 1px solid black;
}
.topHomeDistribuation{
  display: flex;
  width: 100%;
  height: 80%;
  border: 1px solid black;
}
.boyImg{
  width: 55%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.textRight{
  width: 45%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  text-align: end;
}
.textBottom{
  width: 100%;
  height: 20%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.middleHome{
  width: 100%;
  height: 210em;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}
.download{
  width: 100%;
  height: 10em;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content{
  width: 20%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content:nth-child(1){
  width: 60%;
}
.workDescription{
  width: 100%;
  height: 25em;
  text-align: center;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.workDescription:nth-child(3){
  height: 40em;
  flex-direction: initial;
}

.workImg{
  width: 100%;
  height: 100%;
  text-align: initial;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.whatIs{
  width: 100%;
  height: 65em;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.whatIsContent{
  width: 50%;
  height: 100%;
  border: 1px solid black;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
.started{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10em;
  border: 1px solid black;
}
.started:nth-child(6){
  height: 30em;
}
.started:nth-child(7){
  height: 30em;
}
.startedDescription{
  width: 100%;
  height: 100%;
  border: 1px solid black;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
.helpers{
  width: 100%;
  height: 60em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>


