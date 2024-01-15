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

      <i @click="onEditClick(task.id)" class="fas fa-pen-square"></i>
    </p>
  </div>
</template>

<script setup lang="ts">
const { task } = defineProps(["task"]);
const emit = defineEmits(["toggle-reminder", "delete-task", "edit-task"]);

const onDelete = (id: number) => {
  emit("delete-task", id);
};
const onEditClick = (id: number) => {
  emit("edit-task", id);
  console.log("edit", id);
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
