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
  background-color: #f7f9fb;
}
</style>
