<template>
  <form @submit.prevent="onSubmit" class="add-form">
    <div class="form-control">
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const { task } = defineProps(["task"]);
const emit = defineEmits(["edit-task"]);
const day = ref(task.day);

const onSubmit = () => {
  if (!day) {
    alert("Please add a day");
    return;
  }

  const newTask = {
    text: task.text,
    day: day,
    reminder: task.reminder,
  };

  emit("edit-task", newTask);
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  /* margin: 20px 0; */
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
</style>
