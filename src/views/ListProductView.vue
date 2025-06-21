<template>
	<div class="list-product-view">
		<h1 class="list-product-view__title">
			Список Продуктов ({{ filtersItems.length }})
		</h1>
		<div class="list-product-view__products">
			<div class="" v-if="spinner">Загрузка...</div>
			<div
				v-else-if="filtersItems.length === 0"
				class="list-product-view__empty"
			>
				По вашему запросу ничего не найдено.
			</div>
			<AboutProductCard
				v-else
				v-for="(item, key) in filtersItems"
				:key="key"
				:title="item.title"
				:rating="item.rating"
				:price="item.price"
				:img="item.images"
				:item="item"
				@select="getIdProduct"
			/>
		</div>
		<!-- <p>{{ base.getItems }}</p> -->
	</div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import AboutProductCard from "@/components/products/AboutProductCard.vue";
import { useBasketStore } from "@/stores/basket";
import { useInformationStore } from "@/stores/infomations";
import { useBaseStore } from "@/stores/index";
const basket = useBasketStore();
const infomations = useInformationStore();
const base = useBaseStore();

let items = ref([]);
let spinner = ref(true);

onMounted(async () => {
	try {
		await base.setItems();
	} catch (error) {
		console.error("Ошибка загрузки продуктов:", error);
	} finally {
		spinner.value = false;
	}
});

const filtersItems = computed(() =>
	base.getItems.filter((item) =>
		item.title.toLowerCase().includes(base.getSearchQuery.toLowerCase())
	)
);

// base.setItems();
// onMounted();
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
.list-product-view__empty {
	text-align: center;
	font-size: 30px;
	width: 100%;
	grid-area: span 2 / span 3;
}
</style>
