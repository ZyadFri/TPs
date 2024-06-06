<template>
  <div class="welcome container d-flex flex-column justify-content-center align-items-center min-vh-100">
    <div class="form-container">
      <h2>{{ showLogin ? 'Login' : 'Sign up' }}</h2>
      <div v-if="showLogin">
        <LoginForm @login="enterForum" />
        <p>No account yet? <span @click="showLogin = false">Signup</span> instead.</p>
      </div>
      <div v-else>
        <SignupForm @signup="enterForum" />
        <p>Already registered? <span @click="showLogin = true">Login</span> instead.</p>
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue';
import LoginForm from '../components/LoginForm.vue';

export default {
  components: { SignupForm, LoginForm },
  data() {
    return {
      showLogin: false
    }
  },
  methods: {
    enterForum() {
      this.$router.push('/home');
    }
  }
}
</script>
<style scoped>
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #42cef5;
  background-image: linear-gradient(to bottom right, #0b0909 0%, #b33750 100%);
  background-size: cover;
}

.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.form-container {
  width: 80%;
  max-width: 600px;
  background-color: #d7cbcb;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #615b5b;
  margin-bottom: 20px;
}

p {
  color: #000;
}

span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
