<template>
  <div v-for="task in tasks" :key="task.id">
    <h3>{{ task.text }}</h3>
  </div>
</template>

<script lang="ts">
import { Task } from "../interface/Task";

export default {
  name: "Tasks",
  props: {
    tasks: {
      type: Array as () => Array<Task>,
    },
  },
};
</script>
