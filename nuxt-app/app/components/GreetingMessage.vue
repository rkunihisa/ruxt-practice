<template>
  <div>
    <p>{{ greeting }} {{ name }}さん</p>
    <p v-if="message">{{ message }} </p>
  </div>
</template>

<script setup>
defineProps({
  greeting: {
    type: String,
    required: false,
    default: 'こんにちは'
  },
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: false,
    default: ''
  }
});
</script>

<style scoped>
p {
  color: #333;
  font-size: 1.1em;
}
</style>
