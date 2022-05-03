<template>
  <input type="text" class="InputData fontBlack" :placeholder="placeholder" />
</template>
<script>
export default {
  props: {
    placeholder: String,
  },
  name: "InputData",
};
</script>
<style scoped>
.InputData {
  padding: 5px 30px;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid gray;
  width: 350px;
}
</style>