<template>
  <div>
    <h1>カウンター</h1>
    <h2>商品数量管理</h2>
    <p>商品ID: {{ item101.id }}の数量: {{ item101.quantity }}</p>
    <CountQuantity
      :item-id="item101.id"
      :initial-quantity="item101.quantity"
      @update-quantity="handleQuantityUpdate"
    />

    <p>商品ID: {{ item102.id }}の数量: {{ item102.quantity }}</p>
    <CountQuantity
      :item-id="item102.id"
      :initial-quantity="item102.quantity"
      @update-quantity="handleQuantityUpdate"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const item101 = reactive({ id: 101, quantity: 5 });
const item102 = reactive({ id: 102, quantity: 3 });

function handleQuantityUpdate({ quantity, itemId }) {
  if (itemId === item101.id) {
    item101.quantity = quantity;
  } else if (itemId === item102.id) {
    item102.quantity = quantity;
  }
}
</script>
