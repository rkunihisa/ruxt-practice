<template>
  <div>
    <h1>データフェッチの例</h1>

    <p v-if="pending">データを取得中...</p>
    <p v-else-if="error">エラー: {{ error.message }}</p>
    <div v-else>
      <h2>Fetched Data</h2>
      <pre>{{ data }}</pre>
    </div>
    <button @click="refresh">データ再取得</button>
  </div>
</template>

<script setup>
const { data, pending, error, refresh } = await useAsyncData('my-data-key', async () => {
  console.log('Fetching data...');
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { message: 'Hello, this is fetched data!' };
});

console.log('Data fetched:', data.value);
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
