<script setup>
import { ref, onMounted } from "vue";

const user = ref(null);

onMounted(() => {
  const savedUser = localStorage.getItem("user");
  const loggedIn = localStorage.getItem("loggedIn");

  if (savedUser && loggedIn === "true") {
    user.value = JSON.parse(savedUser);
  }
});

function logout() {
  localStorage.removeItem("loggedIn");
  user.value = null;
}
</script>

<template>
  <div class="profile">
    <h1>User Profile</h1>

    <div v-if="user">
      <p><strong>Name:</strong> {{ user.name }}</p >
      <p><strong>Email:</strong> {{ user.email }}</p >
      <button @click="logout">Logout</button>
    </div>

    <div v-else>
      <p>No user logged in</p >
    </div>
  </div>
</template>