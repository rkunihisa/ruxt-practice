<template>
    <div>
        <h2>製品情報</h2>
        <p>製品名: {{ product.name }}</p>
        <p>単価: ${{ product.price.toFixed(2) }}</p>
        <p>数量: <input v-model.number="quantity" type="number" ></p>

        <hr>

        <p>合計金額: ${{ totalPrice.toFixed(2) }}</p>
        <p>割引後の価格: ${{ discountedPrice.toFixed(2) }}</p>

        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.text }}
            </li>
        </ul>
    </div>
</template>

<script setup>

const product = reactive({
    name: 'Sample Product',
    price: 50.00
})

const quantity = ref(1)

// computed = getter
const totalPrice = computed(() => {
    return product.price * quantity.value;
});

const discountRate = ref(0.1)
const discountedPrice = computed(() => {
    return totalPrice.value * (1 - discountRate.value);
});

const items = ref([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
]);

</script>

