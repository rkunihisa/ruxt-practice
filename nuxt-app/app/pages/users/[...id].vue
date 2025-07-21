<template>
    <div>
        <h1>ユーザ情報</h1>
        <p>ユーザIDs</p>
        <ul>
            <li v-for="id in route.params.id" :key="id">
                {{ id }}
            </li>
        </ul>
    </div>
</template>

<script setup>
const route = useRoute();

</script>
