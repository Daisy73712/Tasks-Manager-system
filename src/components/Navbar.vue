<template>
  <nav class="navbar">
    <div class="logo">TaskManager</div>

    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/dashboard">Dashboard</router-link></li>
      <li><router-link to="/tasks">Tasks</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
    </ul>
  </nav>
</template>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: #1e1e2f;
  color: white;
}

.logo {
  font-size: 22px;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 25px;
  list-style: none;
}

.nav-links a {
  color: #cfcfcf;
  text-decoration: none;
  font-size: 16px;
  transition: 0.3s;
}

.nav-links a:hover {
  color: #ffffff;
  border-bottom: 2px solid #fff;
  padding-bottom: 3px;
}
</style>
