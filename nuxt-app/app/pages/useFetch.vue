<template>
  <div>
    <h1>ユーザ一覧</h1>

    <p v-if="pending">データを取得中...</p>
    <p v-else-if="error">エラー: {{ error.message }}</p>
    <ul v-else-if="users && users.length">
      <li v-for="user in users" :key="user.id">
        {{ user.name }} : {{ user.email }}
      </li>
    </ul>
    <p v-else>ユーザがいません。</p>

    <button @click="refresh">データ再取得</button>
  </div>
</template>

<script setup>
const { data: users, pending, error } = useFetch('users', {
  baseURL: $api.defaults.baseURL,
});
</script>
