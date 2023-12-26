<template>
    <div>
      <h3 class="text-center">Login</h3>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <form @submit.prevent="login">
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" v-model="email" required>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="password" required>
            </div>
            <router-link to="/home" @click="login" class="btn btn-primary">Login</router-link>
            <p class="mt-3">Don't have an account? <router-link to="/register">Register here</router-link></p>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: null,
      };
    },
    methods: {
      login() {
        axios.post('/api/login', {
          email: this.email,
          password: this.password,
        })
        .then(response => {
          console.log('Login successful!', response.data);
          // Redirect to a different page or perform other actions
  
          // For demonstration purposes, redirect to the home page after successful login
          this.$router.push('/home');
        })
        .catch(error => {
          console.error('Login failed:', error.response.data.message);
          // Display the error message to the user
          this.error = error.response.data.message;
        });
      },
    },
  };
  </script>
  