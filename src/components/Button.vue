<template>
  <button
    v-on:click="onClick()"
    v-bind:style="{ background: color }"
    class="btn"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
const { text, color } = defineProps(["text", "color"]);
const emit = defineEmits(["btn-click"]);

const onClick = () => {
  emit("btn-click");
};
</script>
