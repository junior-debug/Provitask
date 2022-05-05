<template>
  <div class="ModalContainer">
    <div class="logo"></div>
    <InputData placeholder="First name" V-model="firstName"/>
    <InputData placeholder="Last name" />
    <InputData placeholder="User name" />
    <InputData placeholder="Email" />
    <InputData placeholder="Password" />
    <InputData placeholder="Confirm Password" />
    <InputData placeholder="Phone" />
    <p class="fontBlack">
      By clicking below and creating an account,Iagree to ProviTask's Terms of
      Service and Privacy Policy.
    </p>
    <button class="fontBold" @click="createAccount()">CREATE ACCOUNT</button>
  </div>
</template>
<script>
import InputData from "@/components/InputData.vue";
export default {
  name: "ModalContainer",
  components: {
    InputData,
  },
  data: function (){
    return {
      firstName: "",
    };
  },
  methods: {
    createAccount(){
      console.log(this.firstName);
    },
  },
};

</script>
<style scoped>
p {
  width: 550px;
}
button {
  background: #1b0493;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 34px;
  border-radius: 10px;
}
.logo {
  width: 400px;
  height: 100px;
  border: 2px solid black;
}
.ModalContainer {
  padding: 30px 0;
  margin-top: 100px;
  border-radius: 40px;
  width: 50vw;
  height: 800px;
  box-shadow: 0 0 10px black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
