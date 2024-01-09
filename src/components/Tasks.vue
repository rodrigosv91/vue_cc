<template>
  <div v-for="task in tasks" :key="task.id">
    <Task :task="task" @delete-task="$emit('delete-task', task.id)" />
  </div>
</template>

<script lang="ts">
import { ITask } from "../interface/ITask";
import Task from "./Task.vue";

export default {
  name: "Tasks",
  props: {
    tasks: {
      type: Array as () => Array<ITask>,
    },
  },
  components: {
    Task,
  },
  emits: ["delete-task"],
};
</script>
