<template>
  <div class="topLogin">
    <form action="" method="post" class="formContainer">
      <img
        src="../../assets/img/Logo.png"
        alt="logo"
        style="width: 11em; padding-top: 4em"
      />
      <input
        type="text"
        id="emailAddress"
        class="input lightGray"
        placeholder="Email address"
        v-model="email"
      />
      <input
        type="text"
        id="Password"
        class="input lightGray"
        placeholder="Password"
        v-model="password"
      />
      <p
        class="fontBlack lightOrange"
        style="font-size: 1.3em; letter-spacing: 2px"
      >
        Did you forgetyour password?
      </p>
      <div class="button fontItalic white font3em" @click="validateLogin()">
        <h2 style="font-size: 2em; margin-top: 0px; margin-bottom: 0px">
          Log In
        </h2>
      </div>
      <p
        class="fontBlack lightGray"
        style="padding-bottom: 4em; font-size: 1.3em; letter-spacing: 2px"
      >
        Did you sign up with Facebook or Google?
        <a href="" class="passwordLink lightOrange"
          >Tap here to <br />
          create a password</a
        >
      </p>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async showData(email) {
      const response = await fetch("http://3.87.96.160:1337/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 2488819c5478a084e2d45c1c7cc695bc467270925b823bf1763b108a0d0aeba840953746f30b5ecc274ffac794ea42fb0cad2b84593812cdb90a863e99dd30032d1533b7c73ea0b0a9fe7fb869a26b47497a2cd026f2e503b20dc8cd7a2014734abe5bc9955db1bc7596d099a1f52fac1452d2bf687ae242ab19729411cad445",
        },
        body: JSON.stringify({
          query: `
            query GetClient($email: String!) {
            clients(
                publicationState: PREVIEW
                filters:{
                email: {
                    eq: $email
                }
                }
            ){
                data{
                id
                attributes{
                    name
                    last_name
                    email
                    postal_code
                    phone
                }
                }
            }
            }`,
          variables: {
            email: email,
          },
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.data.clients.data != "") {
            window.location.href = "../../#/";
          }
        });
      return response;
    },

    async validateLogin() {
      let email;
      const response = await fetch("http://3.87.96.160:1337/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 2488819c5478a084e2d45c1c7cc695bc467270925b823bf1763b108a0d0aeba840953746f30b5ecc274ffac794ea42fb0cad2b84593812cdb90a863e99dd30032d1533b7c73ea0b0a9fe7fb869a26b47497a2cd026f2e503b20dc8cd7a2014734abe5bc9955db1bc7596d099a1f52fac1452d2bf687ae242ab19729411cad445",
        },
        body: JSON.stringify({
          query: `
            mutation Login($email: String!, $password: String!){
            login(input:{
                identifier: $email
                password: $password
            }){
                user{
                email
                }
            }
            }`,
          variables: {
            email: this.email,
            password: this.password,
          },
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          email = result.data.login.user.email;
          console.log(result);
        });

      if (email != "") {
        this.showData(email);
      }
    },
  },
};
</script>

<style scoped>
.topLogin {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 84%;
}
.formContainer {
  width: 60%;
  height: 89%;
  background-color: white;
  margin-top: 6em;
  border-top-left-radius: 55px;
  border-top-right-radius: 55px;
  border-bottom-left-radius: 55px;
  border-bottom-right-radius: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.input {
  width: 20em;
  height: 2.3em;
  padding-left: 1em;
  font-size: 20px;
  border: 1px solid #8080805e;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}
.button {
  width: 50%;
  height: 7%;
  background-color: #180692;
  border: none;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.passwordLink {
  text-decoration: none;
}
</style>
