<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>Not loading {{ taskId }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const loading = ref(false);
const taskId = ref();

const URL_BACKEND = "http://localhost:5000";

const fetchTaskById = async (id: number) => {
  const res = await fetch(URL_BACKEND + `/tasks/${id}`);
  const data = await res.json();
  return data;
};

onMounted(() => {
  taskId.value = route.params.id;
});
</script>

<!-- 
//pegar id no pathParam
//buscar task pelo id
//deixar loading enquanto nao finalizar a busca pelo id
//colocar dados da task na tela
 -->
