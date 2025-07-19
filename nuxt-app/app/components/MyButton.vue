<template>
    <button>
        <slot />
    </button>
</template>

<script setup>
</script>

<style scoped>
button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    opacity: 0.8;
}
</style>
