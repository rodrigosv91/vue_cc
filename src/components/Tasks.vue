<template>
  <div v-for="task in tasks" :key="task.id">
    <Task
      @toggle-reminder="emit('toggle-reminder', task.id)"
      @delete-task="emit('delete-task', task.id)"
      @toggle-edit-task="emit('toggle-edit-task')"
      @edit-task="emit('edit-task', $event)"
      :task="task"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import Task from "./Task.vue";

const { tasks } = defineProps(["tasks"]);
const emit = defineEmits([
  "delete-task",
  "toggle-reminder",
  "toggle-edit-task",
  "edit-task",
]);
</script>
