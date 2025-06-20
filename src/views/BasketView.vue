<template>
	<div class="basket-view">
		<p class="basket-view__empty" v-if="!basket.getItems.length">
			Корзина пуста
		</p>
		<template v-else>
			<div class="basket-view__total">
				Итого: {{ basket.getCountSum.toFixed(2) }}$
			</div>
			<div class="basket-view__title">Корзина {{ basket.getCountItems }}</div>
			<div class="basket-view__products">
				<AboutProductCard
					v-for="(item, key) in basket.getItems"
					:key="key"
					:title="item.title"
					:rating="item.rating"
					:price="item.price"
					:img="item.images"
					:id="item.id"
					:actionText="'Купить'"
					:close="true"
					@delete="deleteElementInBasket"
				/></div
		></template>
	</div>
</template>
<style scoped>
.basket-view__products {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
	border-radius: 20px;
}
.basket-view__title {
	font-size: 30px;
	text-align: center;
	margin: 20px 0;
}
.basket-view__total {
	font-size: 35px;
	text-align: center;
	margin-top: 20px;
}
.basket-view__empty {
	font-size: 30px;
	text-align: center;
}
</style>
<script setup>
import AboutProductCard from "@/components/products/AboutProductCard.vue";
import { useBasketStore } from "@/stores/basket";
const basket = useBasketStore();

function deleteElementInBasket(id) {
	basket.removeElementItems(id);
}
</script>
