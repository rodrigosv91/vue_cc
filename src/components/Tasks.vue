<template>
  <div v-for="task in tasks" :key="task.id">
    <Task :task="task" />
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
};
</script>
../interface/ITask
