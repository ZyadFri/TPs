<template>
    <div class="welcome container">
      <div v-if="showLogin">
        <h2>Login</h2>
        <LoginForm @login="enterForum" />
        <p>No account yet? <span @click="showLogin = false">Signup</span> instead.</p>
      </div>
      <div v-else>
        <h2>Sign up</h2>
        <SignupForm @signup="enterForum" />
        <p>Already registered? <span @click="showLogin = true">Login</span> instead.</p>
      </div>
    </div>
  </template>
  
  <script>
  import SignupForm from '../components/SignupForm.vue'
  import LoginForm from '../components/LoginForm.vue'
  
  export default {
    components: { SignupForm, LoginForm },
    data() {
      return {
        showLogin:false    }
    },
    methods: {
      enterForum(){
        this.$router.push('/dashboard');
      }
     
    },
    mounted(){
     
    }
  
  }
  </script>
  <style>
  .welcome {
    padding: 40px;
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  /* Form styles */
  .welcome form {
    width: 80%;
    max-width: 600px;
    margin: 0 auto;
    padding: 30px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .welcome label {
    display: block;
    margin-bottom: 20px;
    font-size: 1.2rem;
    color: #333;
  }

  .welcome input[type="text"],
  .welcome input[type="email"],
  .welcome input[type="password"] {
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    border: 2px solid #ccc;
    margin-bottom: 20px;
    font-size: 1.1rem;
    transition: border-color 0.3s ease;
  }

  .welcome input[type="text"]:focus,
  .welcome input[type="email"]:focus,
  .welcome input[type="password"]:focus {
    border-color: #ff6600;
  }

  .welcome span {
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    color: #1e90ff;
    font-size: 1.1rem;
  }

  .welcome button {
    width: 100%;
    padding: 12px;
    background-color: #ff6600;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 1.2rem;
  }

  .welcome button:hover {
    background-color: #ff8533;
  }
</style>
