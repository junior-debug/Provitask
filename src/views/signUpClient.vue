<template>
  <div class="signUp">
    <ModalContainer />
  </div>
</template>
<script>
import ModalContainer from "@/components/ModalContainer.vue";
export default {
  components: {
    ModalContainer,
  },
};
</script>
<style scoped>
.signUp {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/img/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
}
</style>