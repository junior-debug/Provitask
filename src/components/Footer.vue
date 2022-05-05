<script>
import TitleFooter from "./TitleFooter.vue";
export default {
  name: "Footer",
  components: {
    TitleFooter,
  },
};
</script>
<template>
  <footer>
    <div class="footer_1">
      <div class="footerComponents">
        <h1 class="fontBold orange ready">Ready to make money your way?</h1>
      </div>
      <div class="footerComponents">
        <button class="button fontItalic white">Get started</button>
      </div>
      <div class="download">
        <div>
          <img
            src="@/assets/img/download-on-the-app-store-logo-png-23.png"
            width="210px"
            alt="Download on the app store"
          />
        </div>
        <div>
          <img
            src="https://www.freepnglogos.com/uploads/itunes-logo/google-play-itunes-png-logo-4.png"
            width="187px"
            alt="google play itunes"
          />
        </div>
      </div>
    </div>
    <img
      class="footer_2"
      src="@/assets/img/work-tools-on-white-background-top-view.png"
      alt=""
    />
    <div class="footer_3">
      <div class="containerColumns">
        <div>
          <div></div>
          <p class="description fontBlack">
            It is a pleasure for us that you are part of our Provitask family,
            whether you are a client or supplier, our interactive platform is
            linked to the daily work of our home lives and work centers, we are
            satisfied to be able to help our clients to have a longer life easy,
            without worrying about doing usual complicated tasks, often not
            having the necessary knowledge and equipment
          </p>
        </div>
        <div>
          <div>
            <TitleFooter>Site Links</TitleFooter>
            <ul class="fontBlack">
              <li>Home</li>
              <li>Locations</li>
              <li>Blog</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <TitleFooter>Contact Us</TitleFooter>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <TitleFooter>Popular Cities</TitleFooter>
            <ul class="fontBlack">
              <li>Cutler Bay</li>
              <li>Daytona Beach</li>
              <li>Florida City</li>
              <li>Homestead</li>
              <li>Homestead</li>
              <li>Jacksonville</li>
              <li>Miami</li>
            </ul>
          </div>
          <div>
            <h3 class="fontBold">For better services download now</h3>
            <div class="social">
              <img
                src="@/assets/img/download-on-the-app-store-logo-png-23.png"
                style="width: 170px"
                alt=""
              />
              <img
                src="https://www.freepnglogos.com/uploads/itunes-logo/google-play-itunes-png-logo-4.png"
                style="width: 160px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <p class="fontBlack copyright">
        Copyright 2021 | ProviTask. All Rights Reserved
      </p>
    </div>
  </footer>
</template>
<style scoped>
.footer_1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(248, 254, 252, 255) 10%,
    rgba(210, 221, 212, 255) 100%
  );
  padding: 50px 50px;
}
.footer_2 {
  width: 100%;
}
.footer_3 {
  width: 100%;
  height: 950px;
  color: white;
  background-image: url("../assets/img/grupo2.png");
}
.download {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.containerColumns {
  display: flex;
  height: 600px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.description {
  width: 280px;
}
.social {
  display: flex;
  justify-content: space-around;
}
.copyright {
  text-align: center;
}
.ready {
  font-style: italic;
  margin-bottom: 40px;
}
.button {
  width: 310px;
  height: 50px;
  background-color: #180692;
  border: none;
  border-radius: 12px;
  font-size: 27px;
  margin-bottom: 40px;
}
</style>