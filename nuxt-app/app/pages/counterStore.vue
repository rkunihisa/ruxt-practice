<template>
    <div>
        <h1>コンポーサブルの例</h1>

        <h2>{{ counterStore.greeting }}</h2>
        <p>Count: {{ counterStore.count }}</p>
        <p>Double Count: {{ counterStore.doubleCount }}</p>

        <button @click="counterStore.increment()">Increment</button>
        <button @click="counterStore.increment(5)">Increment5</button>
        <button :disabled="isIncrementing" @click="incrementAsync()">
            {{ isIncrementing ? 'Incrementing...' : 'Increment Async' }}
        </button>

        <hr>
        <p>Count(分割): {{ count }}</p>
        <p>Name(分割): {{ name }}</p>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore();
const { count, name } = storeToRefs(counterStore);
const isIncrementing = ref(false);

const incrementAsync = async () => {
    isIncrementing.value = true;
    await counterStore.incrementAsync();
    isIncrementing.value = false;
};


</script>
