<template>
	<main class="home-view">
		<div class="home-view__products container">
			<div class="" v-if="spinner">Загрузка...</div>
			<ProductCard
				v-for="(item, index) in items"
				:key="index"
				:title="item.id"
				:url="item.image"
			></ProductCard>
		</div>
	</main>
</template>

<style scoped>
.home-view__products {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 15px;
}
</style>
<script setup>
import ProductCard from "@/components/products/ProductCard.vue";
import { ref, onMounted } from "vue";
let spinner = ref(true);
let items = ref([]);

onMounted(async () => {
	try {
		let response = await fetch(
			"https://rss.app/feeds/v1.1/x8rXzXaqVVQYNGqz.json"
		);
		if (!response.ok) throw new Error(`status: ${response.status}`);
		let data = await response.json();
		// console.log(data.items.filter((item) => item.image !== undefined));

		items.value = data.items
			.filter((item) => item.image !== undefined)
			.slice(0, 12);
		spinner.value = false;
	} catch (error) {
		console.error("Ошибка при получении данных:", error);
	} finally {
		spinner.value = false;
	}
});
</script>
