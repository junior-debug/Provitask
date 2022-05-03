<script>
export default {
  name: "TitleFooter",
};
</script>
<template>
  <h1 class="fontBold">
    <slot />
  </h1>
</template>
<style scoped>
.fontBold {
  background-color: #e5841d;
  padding: 10px 20px;
  border-radius: 30px 0 30px 30px;
  box-shadow: 0 0 10px black;
}
</style>