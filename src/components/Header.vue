<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-show="homePage"
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { useRoute } from "vue-router";
import Button from "./Button.vue";

const route = useRoute();
const { title, showAddTask } = defineProps(["title", "showAddTask"]);
const homePage = computed(() => route.path === "/");
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
