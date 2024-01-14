<template>
  <div v-for="task in tasks" :key="task.id">
    <Task
      @toggle-reminder="emit('toggle-reminder', task.id)"
      @delete-task="emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>

<script setup lang="ts">
import Task from "./Task.vue";

const { tasks } = defineProps(["tasks"]);
const emit = defineEmits(["delete-task", "toggle-reminder"]);
</script>
