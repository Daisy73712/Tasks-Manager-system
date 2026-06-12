<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

function login() {
  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No registered users found");
    return;
  }

  if (email.value === savedUser.email && password.value === savedUser.password) {
    localStorage.setItem("loggedIn", "true");
    router.push("/profile");
  } else {
    alert("Incorrect email or password");
  }
}
</script>

<template>
  <div class="login">
    <h1>Login</h1>

    <label>Email:</label>
    <input v-model="email" type="email" />

    <label>Password:</label>
    <input v-model="password" type="password" />

    <button @click="login">Login</button>
  </div>
</template>

<style>
.login {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 40px auto;
  gap: 10px;
}
</style>
