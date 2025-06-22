<template>
	<div class="product-list-view">
		<h1 class="product-list-view__title">
			Список Продуктов ({{ filtersItems.length }})
		</h1>
		<div class="product-list-view__products">
			<div class="" v-if="spinner">Загрузка...</div>
			<div
				v-else-if="filtersItems.length === 0"
				class="product-list-view__empty"
			>
				По вашему запросу ничего не найдено.
			</div>

			<ProductCard
				v-else
				v-for="(item, key) in paginatorStore.getPageItems"
				:key="key"
				:title="item.title"
				:rating="item.rating"
				:price="item.price"
				:img="item.images"
				:item="item"
				@select="getIdProduct"
			/>
		</div>
		<PaginationCard />
		<!-- <p>{{ base.getItems }}</p> -->
	</div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import ProductCard from "@/components/products/ProductCard.vue";
import { useBasketStore } from "@/stores/basket";
import { useInformationStore } from "@/stores/infomations";
import { useBaseStore } from "@/stores/index";
import { usePaginatorStore } from "@/stores/paginator";
import PaginationCard from "@/components/ui/PaginationCard.vue";
const paginatorStore = usePaginatorStore();
const basket = useBasketStore();
const infomations = useInformationStore();
const base = useBaseStore();

let items = ref([]);
let spinner = ref(true);

onMounted(async () => {
	try {
		await base.setItems();
		paginatorStore.setData(base.getItems, 4);
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
.product-list-view__products {
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 10px;
	border-radius: 25px;
}
.product-list-view__title {
	text-align: center;
	margin: 20px 0;
}
.product-list-view__empty {
	text-align: center;
	font-size: 30px;
	width: 100%;
	grid-area: span 2 / span 3;
}
</style>
