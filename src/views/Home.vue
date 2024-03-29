<template>
  <div>
    <AddTask v-show="showAddTask" @add-task="addTask" />
    <Tasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      @edit-task="editTask"
      :tasks="tasks"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";
import { ITask } from "../interface/ITask";

const URL_BACKEND = process.env.VUE_APP_URL_BACKEND;
const { showAddTask } = defineProps(["showAddTask"]);
const tasks = ref<ITask[]>([]);

const editTask = async (task: ITask) => {
  const taskId = task.id;
  const taskToUpdate = await fetchTaskById(task.id);
  const upadatedTask = { ...taskToUpdate, day: task.day };
  const res = await fetch(URL_BACKEND + `/tasks/${task.id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(upadatedTask),
  });

  const data = await res.json();

  tasks.value = tasks.value.map((task) =>
    task.id === taskId ? { ...task, day: data.day } : task
  );
};

const addTask = async (task: ITask) => {
  const res = await fetch(URL_BACKEND + "/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  });

  const data = await res.json();

  tasks.value = [...tasks.value, data];
};

const deleteTask = async (id: number) => {
  const res = await fetch(URL_BACKEND + `/tasks/${id}`, {
    method: "DELETE",
  });

  res.status === 200
    ? (tasks.value = tasks.value.filter((task) => task.id !== id))
    : alert("Error Deleting");
};

const toggleReminder = async (id: number) => {
  const taskToToggle = await fetchTaskById(id);
  const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
  const res = await fetch(URL_BACKEND + `/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updTask),
  });

  const data = await res.json();

  tasks.value = tasks.value.map((task) =>
    task.id === id ? { ...task, reminder: data.reminder } : task
  );
};

const fetchTasks = async () => {
  const res = await fetch(URL_BACKEND + "/tasks");
  const data = await res.json();

  return data;
};

const fetchTaskById = async (id: number) => {
  const res = await fetch(URL_BACKEND + `/tasks/${id}`);
  const data = await res.json();
  return data;
};

onMounted(async () => {
  tasks.value = await fetchTasks();
});
</script>
