<template>
    <div>
        <h1>フォームの例</h1>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="name">名前:</label>
                <input id="name" v-model="formData.name" type="text">
            </div>

            <div>
                <label for="email">メールアドレス:</label>
                <input id="email" v-model="formData.email" type="email">
            </div>

            <div>
                <label for="message">メッセージ:</label>
                <textarea id="message" v-model="formData.message"/>
            </div>

            <div>
                <input v-model="formData.agree" type="checkbox"><label>同意する</label>
            </div>

            <button type="submit">送信</button>
        </form>

        <h3>入力データ</h3>
        <pre>{{ formData }}</pre>
    </div>
</template>

<script setup>
const formData = ref({
    name: '',
    email: '',
    message: '',
    agree: false
});

function handleSubmit() {
    console.log('フォームが送信されました:', formData.value);
    // ここでAPIにデータを送信することもできます
    // 例: $api.post('/submit', formData.value);
}
</script>
