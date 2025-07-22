<template>
    <div>
        <h1>Unuse Layout Example</h1>
        <p>This page does not use the default layout.</p>
        <p>You can add any content here without the default layout structure.</p>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom'
})
</script>
