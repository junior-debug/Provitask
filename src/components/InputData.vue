<template>
  <input
    type="text"
    class="InputData fontBlack"
    :placeholder="placeholder"
    @change="onChange($event)"
  />
</template>
<script>
export default {
  name: "InputData",
  props: {
    placeholder: String,
    value: String,
  },
  data() {
    return {};
  },
  methods: {
    onChange(event) {
      if (this.placeholder === "First name") {
        this.$store.state.firstName = event.target.value;
      } else if (this.placeholder === "Last name") {
        this.$store.state.lastName = event.target.value;
      } else if (this.placeholder === "User name") {
        this.$store.state.userName = event.target.value;
      } else if (this.placeholder === "Email") {
        this.$store.state.email = event.target.value;
      } else if (this.placeholder === "Password") {
        this.$store.state.password = event.target.value;
      } else if (this.placeholder === "Phone") {
        this.$store.state.phone = event.target.value;
      }
    },
  },
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