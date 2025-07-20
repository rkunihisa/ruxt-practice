<template>
	<div>
		<span>数量: {{ quantity }}</span>
		<button @click="incrementQuantity">+</button>
		<button @click="decrementQuantity">-</button>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
	initialQuantity: {
		type: Number,
		default: 0
	},
	itemId: {
		type: [String, Number],
		required: true
	}
})

const emits = defineEmits(['update-quantity'])

const quantity = ref(props.initialQuantity)

function incrementQuantity() {
	quantity.value++
	emits('update-quantity', { quantity: quantity.value, itemId: props.itemId })
}
function decrementQuantity() {
	if (quantity.value > 0) {
		quantity.value--
		emits('update-quantity', { quantity: quantity.value, itemId: props.itemId })
	}
}
</script>
