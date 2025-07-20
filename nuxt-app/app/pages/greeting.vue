<template>
  <div>
    <h1>Prop Sample</h1>
    <GreetingMessage greeting="Hello" name="World" />
    <GreetingMessage :greeting="dynamicGreeting" :name="userName" :message="optionalMessage" />
    <GreetingMessage greeting="こんにちは" name="ユーザー" />
</div>
</template>

<script setup>
import { ref } from 'vue';

const dynamicGreeting = ref('おはよう');
const userName = ref('太郎');
const optionalMessage = ref('これはオプションのメッセージです。');
</script>
