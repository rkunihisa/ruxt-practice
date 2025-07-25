<template>
    <div>
        <h2>新しいアイテムを作成</h2>
        <form @submit.prevent="createItem">
            <div>
                <label for="item-name">アイテム名:</label>
                <input type="text" id="item-name" v-model="itemData.name" required />
            </div>
            <div>
                <label for="item-price">価格:</label>
                <input type="number" id="item-price" v-model.number="itemData.price" required />
            </div>
            <div>
                <label for="item-desc">説明:</label>
                <textarea id="item-desc" v-model="itemData.description"></textarea>
            </div>
            <button type="submit" :disabled="isCreating">
                {{ isCreating ? '作成中...' : '作成' }}
            </button>

            <p v-if="creationSuccess" class="success-message">アイテムが作成されました。</p>
            <p v-if="creationError" class="error-message">エラー: {{ creationError.message }}</p>
        </form>
    </div>
</template>

<script setup>
const itemData = ref({
    name: '',
    price: null,
    description: ''
});
const isCreating = ref(false);
const creationSuccess = ref(false);
const creationError = ref(null);

async function createItem() {
    isCreating.value = true;
    creationSuccess.value = false;
    creationError.value = null;

    try {
        const response = await $api.post('/items', itemData);

        const newItem = response.data;
        console.log('新しいアイテムが作成されました:', newItem);
        creationSuccess.value = true;
        itemData.value = { name: '', price: null, description: '' };
    } catch (error) {
        console.error('アイテムの作成中にエラーが発生しました:', error);
        creationError.value = error;
    } finally {
        isCreating.value = false;
    }
}
</script>

<style scoped>
.success-message {
    color: green;
}
.error-message {
    color: red;
}
</style>
