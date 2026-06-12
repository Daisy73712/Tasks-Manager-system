<template>
  <div class="dashboard">
    <h1>Dashboard</h1>

    <div class="summary">
      <p>Total tasks: {{ total }}</p >
      <p>Completed: {{ completed }}</p >
      <p>Pending: {{ pending }}</p >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
      completed: 0,
      pending: 0
    };
  },

  created() {
    const saved = localStorage.getItem("tasks");
    const tasks = saved ? JSON.parse(saved) : [];

    this.total = tasks.length;
    this.completed = tasks.filter(t => t.completed).length;
    this.pending = tasks.filter(t => !t.completed).length;
  }
};
</script>

<style>
.dashboard {
  padding: 20px;
}

.summary p {
  font-size: 18px;
}
</style>
