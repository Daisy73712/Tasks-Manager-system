<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();

function register() {
  if (!name.value || !email.value || !password.value) {
    alert("All fields are required");
    return;
  }

  const newUser = {
    name: name.value,
    email: email.value,
    password: password.value
  };

  localStorage.setItem("user", JSON.stringify(newUser));
  alert("User registered successfully!");

  router.push("/login");
}
</script>

<template>
  <div class="register">
    <h1>Register</h1>

    <label>Name:</label>
    <input v-model="name" type="text" />

    <label>Email:</label>
    <input v-model="email" type="email" />

    <label>Password:</label>
    <input v-model="password" type="password" />

    <button @click="register">Register</button>
  </div>
</template>

<style>
.register {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 40px auto;
  gap: 10px;
}
</style>
