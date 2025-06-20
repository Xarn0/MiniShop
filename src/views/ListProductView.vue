<template>
	<div class="list-product-view">
		<h1 class="list-product-view__title">Список Продуктов</h1>
		<div class="list-product-view__products">
			<div class="" v-if="spinner">Загрузка...</div>
			<AboutProductCard
				v-for="(item, key) in items"
				:key="key"
				:title="item.title"
				:rating="item.rating"
				:price="item.price"
				:img="item.images"
				:item="item"
				@select="getIdProduct"
			/>
		</div>
		<!-- <p>{{ items }}</p> -->
	</div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import AboutProductCard from "@/components/products/AboutProductCard.vue";
import { useBasketStore } from "@/stores/basket";
import { useInformationStore } from "@/stores/infomations";
const basket = useBasketStore();
const infomations = useInformationStore();

let items = ref([]);
let spinner = ref(true);

onMounted(async () => {
	try {
		let response = await fetch("https://dummyjson.com/products");
		if (!response.ok) throw new Error(`Status:${response.status}`);
		let data = await response.json();
		items.value = data.products.slice(0, 10);
		spinner.value = false;
		console.log(items.value);
	} catch (error) {
	} finally {
		spinner.value = false;
	}
});
function getIdProduct(item) {
	let result = basket.addItem(item);
	infomations.showInformation(result);
}
</script>

<style>
.list-product-view__products {
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
	border-radius: 25px;
}
.list-product-view__title {
	text-align: center;
	margin: 20px 0;
}
</style>
