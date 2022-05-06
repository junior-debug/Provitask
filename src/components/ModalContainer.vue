<template>
  <div class="ModalContainer">
    <img class="logo" src="../assets/img/letras.png" alt="Plomero" />

    <InputData placeholder="First name" />
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
    <button class="fontBold" @click="registerClient()">CREATE ACCOUNT</button>
  </div>
</template>
<script>
import InputData from "@/components/InputData.vue";
import axios from "axios";
export default {
  name: "ModalContainer",
  components: {
    InputData,
  },
  data() {
    return {};
  },
  methods: {
    async registerClient() {
      // Ejemplo para recibir los datos del state
      console.log(
        this.$store.state.firstName,
        this.$store.state.lastName,
        this.$store.state.userName,
        this.$store.state.email,
        this.$store.state.password,
        this.$store.state.phone
      );
      // Fin del ejemplo
      const response = await axios.post("http://3.87.96.160:1337/graphql", {
        method: "post",
        headers: {
          Authorization:
            "Bearer 2488819c5478a084e2d45c1c7cc695bc467270925b823bf1763b108a0d0aeba840953746f30b5ecc274ffac794ea42fb0cad2b84593812cdb90a863e99dd30032d1533b7c73ea0b0a9fe7fb869a26b47497a2cd026f2e503b20dc8cd7a2014734abe5bc9955db1bc7596d099a1f52fac1452d2bf687ae242ab19729411cad445",
        },
        query: `
mutation RegistroCliente(
  $username: String!
  $email: String!
  $password: String!
  $name: String!
  $last_name: String!
  $postal_code: String!
  $phone: String!
  $token: String
) {
  register(input: {
    username: $username
    email: $email
    password: $password
  }){
    user{
      username
    }
  }
  createClient(data: {
    name: $name,
    last_name: $last_name,
    email: $email,
    password: $password,
    postal_code: $postal_code,
    username: $username,
    token: $token,
    phone: $phone
  }) {
    data {
      id
      attributes {
        email
      }
    }
  }
}`,
        variables: {
          username: "eeeeeeee",
          email: "eeeeeeee@gmail.com",
          password: "eeeeeeee",
          name: "eeeeeeee",
          last_name: "eeeeeeee",
          postal_code: "123456",
          phone: "23231",
          token: "1234",
        },
      });
      console.log(response);
      return response;
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
  background: white;
  margin-bottom: 50px;
}
</style>
