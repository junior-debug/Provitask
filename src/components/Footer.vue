<script>
export default {
  name: "Footer",
};
</script>
<template>
  <footer>
    <div class="footerComponents">
      <h1>Ready to make money your way?</h1>
    </div>
    <div class="footerComponents">
      <h1>Get started</h1>
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
  </footer>
</template>
<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.download {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
</style>