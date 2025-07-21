<template>
    <div>
        <h1>コンポーサブルの例</h1>

        <h2>カウンター</h2>
        <p>Count: {{ count }}</p>
        <p>Double Count: {{ doubleCount }}</p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>

        <hr>

        <h2>別のカウンター</h2>
        <p>Count: {{ anotherCounter.count }}</p>
        <button @click="anotherCounter.increment">Increment</button>
    </div>
</template>

<script setup>
const { count, doubleCount, increment, decrement } = useCounter(10);
const anotherCounter = useCounter(100);

</script>
