<template>
    <div class="bodyContainer">
        <LoginForm />
    </div>
</template>

<style scoped>
.bodyContainer{
  width: 100%;
  height: 65.813em;
}
</style>

<script>
// @ is an alias to /src
import LoginForm from '@/components/Login/LoginForm.vue'

export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>