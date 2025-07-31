<template>
    <p>{{ greeting }}, {{ name }}</p>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: 'World'
  },
  greeting: {
    type: String,
    default: 'Hello'
  }
});
</script>
