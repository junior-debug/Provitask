<template>
    <div class="bodyContainer">
        <LoginForm />
        <LoginFooter />
    </div>
</template>

<style scoped>
.bodyContainer{
  width: 100%;
  height: 65.813em;
  background-image: url("../assets/img/Capa.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>

<script>
// @ is an alias to /src
import LoginForm from '@/components/Login/LoginForm.vue'
import LoginFooter from '@/components/Login/LoginFooter.vue'

export default {
  name: 'login',
  components: {
    LoginForm,
    LoginFooter
  }
}
</script>