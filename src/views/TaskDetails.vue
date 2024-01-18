<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <p>{{ route.path }}</p>
      <h3>{{ task.text }}</h3>
      <p>{{ task.day }}</p>
      <Button @click="goBack" text="Go Back" color="steelblue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ITask } from "../interface/ITask";
import { createDefaultTask } from "../util/util";
import Button from "../components/Button.vue";

const route = useRoute();
const router = useRouter();
const loading = ref(false);
const task = ref<ITask>(createDefaultTask());

const URL_BACKEND = process.env.VUE_APP_URL_BACKEND;

const fetchTaskById = async () => {
  const res = await fetch(URL_BACKEND + `/tasks/${route.params.id}`);
  if (res.status === 404) {
    alert("Task not Found");
    router.push("/");
    return null;
  }
  const data = await res.json();
  return data;
};

const goBack = () => {
  router.go(-1);
};

onMounted(async () => {
  const fetchedTask = await fetchTaskById();

  if (fetchedTask !== null) {
    task.value = fetchedTask;
  }
});
</script>
