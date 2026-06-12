const BASE_URL = "https://TU_URL_REAL.mockapi.io/tasks";

// Get all tasks
export async function getTasks() {
  const res = await fetch(BASE_URL);
  return res.json();
}

// Create a new task
export async function createTask(taskName) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: taskName,
      completed: false
    })
  });
  return res.json();
}
