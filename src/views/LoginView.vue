<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
          />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
      <div v-if="error" class="text-danger">{{ error }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const formData = ref({
  username: '',
  password: ''
})
const isAuthenticated = ref(false);
const error = ref("");

const login = () => {
  if (formData.value.username === "user" && formData.value.password === "password") {
        isAuthenticated.value = true;
    } else {
        error.value = "Invalid credentials.";
    }
};
</script>
  
<style>
</style>