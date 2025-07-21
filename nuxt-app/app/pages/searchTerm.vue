<template>
    <div>
        <h2>ウォッチャの例</h2>
        <p>検索後: <input v-model="searchTerm"></p>
        <p v-if="isSearching">検索中...</p>
    </div>
</template>

<script setup>
    const searchTerm = ref('');
    const isSearching = ref(false);

    watch(searchTerm, (newTerm) => {
        if (newTerm.length > 2) {
            performSearch(newTerm);
        } else {
            isSearching.value = false;
        }
    });

    watchEffect(() => {
        if (searchTerm.value === '') {
            console.log('検索語がクリアされました');
        }
    });

    async function performSearch(term) {
        isSearching.value = true;
        console.log(`検索中: ${term}`);
        // Simulate an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        isSearching.value = false;
        console.log(`検索完了: ${term}`);
    }

</script>
