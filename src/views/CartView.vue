<template>
	<div class="cart-view">
		<p class="cart-view__empty" v-if="!basket.getItems.length">Корзина пуста</p>
		<template v-else>
			<div class="cart-view__total">
				Итого: {{ basket.getCountSum.toFixed(2) }}$
			</div>
			<div class="cart-view__title">Корзина {{ basket.getCountItems }}</div>
			<div class="cart-view__products">
				<ProductCard
					v-for="(item, key) in basket.getItems"
					:key="key"
					:title="item.title"
					:rating="item.rating"
					:price="item.price"
					:img="item.images"
					:id="item.id"
					:actionText="'Купить'"
					:close="true"
					:item="item"
					@select="openModal"
					@delete="deleteElementInBasket"
				/>
			</div>
			<ProductModal
				v-if="selectedProduct"
				:product="selectedProduct"
				@close="closeModal"
			/>
		</template>
	</div>
</template>
<style scoped>
.cart-view__products {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
	border-radius: 20px;
	padding: 10px;
}
.cart-view__title {
	font-size: 30px;
	text-align: center;
	margin: 20px 0;
}
.cart-view__total {
	font-size: 35px;
	text-align: center;
	margin-top: 20px;
}
.cart-view__empty {
	font-size: 30px;
	text-align: center;
}
@media (max-width: 768px) {
	.cart-view__products {
		grid-template-columns: 1fr;
	}
}
</style>
<script setup>
import { ref } from "vue";
import ProductCard from "@/components/products/ProductCard.vue";
import ProductModal from "@/components/ui/ProductModal.vue";
import { useBasketStore } from "@/stores/basket";
const basket = useBasketStore();
const selectedProduct = ref(null);

function deleteElementInBasket(id) {
	basket.removeElementItems(id);
}

function openModal(item) {
	selectedProduct.value = item;
	document.querySelector("body").style.overflow = "hidden";
}
function closeModal() {
	selectedProduct.value = null;
	document.querySelector("body").style.overflow = "auto";
}
</script>
