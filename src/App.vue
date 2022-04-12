<template>
  <nav class="nav">
    <div class="logoContainer"></div>
    <router-link to="/" class="menuOptions">HOME</router-link> 
    <router-link to="/Locations" class="menuOptions">LOCATIONS</router-link>
    <router-link to="/Services" class="menuOptions">SERVICES</router-link>
    <div class="midleSpace"></div>
    <router-link to="/SignUp" class="menuOptions">SIGN UP</router-link>
    <router-link to="/Login" class="menuOptions">LOGIN</router-link>
    <router-link to="/JoinTo" class="menuOptions">JOIN TO</router-link>
  </nav>
  <router-view/>
</template>

<style>
@font-face {
font-family: Graphik;
src: url('./assets/fonts/GraphikRegular.otf');
}
body{
  padding-left: 3em;
  padding-right: 3em;
  font-family: Graphik;
}
.nav{
  display: flex;
  width: 100%;
  height: 5em;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.logoContainer{
  width: 10%;
  height: 100%;
  padding-left: 1em;
  border: 1px solid black;
}
.midleSpace{
  width: 28%;
  height: 100%;
  border: 1px solid black;
}
.menuOptions{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
  border: 1px solid black;
  text-decoration: none;
  color: black;
}
.menuOptions:nth-child(8){
  height: 2.2em;
  width: 15%;
  background-color: orange;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

</style>
