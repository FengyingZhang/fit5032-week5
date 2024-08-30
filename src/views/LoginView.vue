<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="submitLogin">
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="formData.username"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="formData.password"
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
import { login } from '@/auth';
const formData = ref({
  username: '',
  password: ''
})
const error = ref("");

const clearForm = () => {
  formData.value = {
    username: '',
    password: ''
  }
}

const submitLogin = () => {
  if (formData.value.username === "user" && formData.value.password === "1234") {
        login();
        error.value = "";
        clearForm();
    } else {
        error.value = "Invalid credentials.";
    }
};
</script>
  
<style>
</style>