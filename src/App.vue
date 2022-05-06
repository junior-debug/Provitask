<template>
  <nav class="nav">
    <div class="logoContainer"></div>
    <router-link to="/" class="menuOptions"
      ><p class="fontBlack lightGray font0em letterSpacing">
        HOME
      </p></router-link
    >
    <router-link to="/Locations" class="menuOptions"
      ><p class="fontBlack lightGray font0em letterSpacing">
        LOCATIONS
      </p></router-link
    >
    <router-link to="/Services" class="menuOptions"
      ><p class="fontBlack lightGray font0em letterSpacing">
        SERVICES
      </p></router-link
    >
    <div class="midleSpace"></div>
    <router-link to="/signUpClient" class="menuOptions"
      ><p class="fontBlack lightGray font0em letterSpacing">
        Sign up
      </p></router-link
    >
    <router-link to="/Login" class="menuOptions"
      ><p class="fontBlack lightGray font0em letterSpacing">
        Login
      </p></router-link
    >
    <router-link to="/JoinTo" class="menuOptions">
      <div class="joinContainer">
        <p
          class="fontBlack fontBold font0em white letterSpacing"
          style="margin-top: 0px; margin-bottom: 0px"
        >
          Join to
        </p>
        <img src="./assets/img/martillo.png" alt="hammer" style="width: 23%" />
      </div>
    </router-link>
  </nav>
  <router-view />
</template>

<style>
@font-face {
  font-family: GraphikBold;
  src: url("./assets/fonts/GraphikBold.otf");
}
@font-face {
  font-family: GraphikBoldItalic;
  src: url("./assets/fonts/GraphikBoldItalic.otf");
}
@font-face {
  font-family: GraphikBlack;
  src: url("./assets/fonts/GraphikRegular.otf");
}
body {
  margin-right: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  margin-left: 0px;
  letter-spacing: 3px;
}
li {
  list-style-image: url(assets/img/proximo.png);
  vertical-align: top;
  font-size: 20px;
}
.fontBlack {
  font-family: GraphikBlack;
}
.fontBold {
  font-family: GraphikBold;
}
.fontItalic {
  font-family: GraphikBoldItalic;
}
.gray {
  color: #5b5b5b;
}
.lightGray {
  color: #26262661;
}
.lightOrange {
  color: #df8a5d;
}
.orange {
  color: #e5841d;
}
.darkOrange {
  color: #a15228;
}
.blue {
  color: #180692;
}
.darkBlue {
  color: #11046d;
}
.white {
  color: #fff;
}
.title {
  font-size: 5em;
  margin-top: 0;
  margin-bottom: 0;
}
.menuOptions:nth-child(8) {
  width: 10em;
}
.nav {
  display: flex;
  width: 100%;
  height: 5em;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.logoContainer {
  width: 10%;
  height: 100%;
  padding-left: 1em;
}
.midleSpace {
  width: 28%;
  height: 100%;
}
.menuOptions {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
  text-decoration: none;
  color: black;
}
.joinContainer {
  height: 2.2em;
  width: 100%;
  background-color: #e5841d;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.letterSpacing {
  letter-spacing: 0px;
}
</style>