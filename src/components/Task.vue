<template>
  <div
    @dblclick="emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <i @click="onDelete(task.id)" class="fas fa-times"></i>
    </h3>
    <p>
      {{ task.day }}
      <i @click="toggleEditTask" class="fas fa-pen-square"></i>
    </p>
    <router-link v-bind:to="'/task/' + task.id">View Details</router-link>
  </div>
  <EditTask
    v-show="showEditTask"
    @edit-task="emit('edit-task', $event)"
    :task="task"
  />
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import EditTask from "./EditTask.vue";

const { task } = defineProps(["task"]);
const emit = defineEmits([
  "toggle-reminder",
  "delete-task",
  "toggle-edit-task",
  "edit-task",
]);
const showEditTask = ref(false);

const onDelete = (id: number) => {
  emit("delete-task", id);
};

const toggleEditTask = () => {
  showEditTask.value = !showEditTask.value;
};
</script>

<style scoped>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  /* margin-bottom: 20px; */
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.task p {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fa-pen-square {
  color: teal;
}
</style>
