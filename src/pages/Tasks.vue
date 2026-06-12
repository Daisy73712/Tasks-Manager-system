<template>
  <div class="tasks">
    <h1>Tasks</h1>

    <input 
      v-model="newTask" 
      placeholder="Enter a new task"
    />

    <button @click="addTask">Add Task</button>

    <ul>
      <li 
        v-for="task in tasks" 
        :key="task.id"
        @click="toggleTask(task)"
        :style="{ textDecoration: task.completed ? 'line-through' : 'none' }"
      >
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      tasks: []
    };
  },

  created() {
    const saved = localStorage.getItem("tasks");
    this.tasks = saved ? JSON.parse(saved) : [];
  },

  methods: {
    addTask() {
      if (this.newTask.trim() === "") return;

      const task = {
        id: Date.now(),
        name: this.newTask,
        completed: false
      };

      this.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));

      this.newTask = "";
    },

    toggleTask(task) {
      task.completed = !task.completed;
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
  }
};
</script>

<style>
.tasks {
  padding: 20px;
}

.tasks ul {
  list-style: none;
  padding: 0;
}

.tasks li {
  cursor: pointer;
  margin: 5px 0;
}
</style>
