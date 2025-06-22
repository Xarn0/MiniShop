<template>
	<div class="pagination-card" v-if="paginationStore.totalPages">
		<div
			class="pagination-card__button pagination-card__button--prev"
			@click="paginationStore.setPage(paginationStore.currentPage - 1)"
			role="button"
			aria-label="предыдущая страница"
			:aria-disabled="paginationStore.currentPage === 1"
			:class="{
				'pagination-card__button--disable':
					paginationStore.currentPage == 1 ? true : false
			}"
		>
			<
		</div>
		<div class="pagination-card__list pagination-card__list-dekstop">
			<template v-for="value in paginationStore.totalPages" :key="value">
				<div
					class="pagination-card__list-item"
					@click="paginationStore.setPage(value)"
					:class="{
						'pagination-card__list--active':
							value === paginationStore.currentPage ? true : false
					}"
				>
					{{ value }}
				</div>
			</template>
		</div>
		<div class="pagination-card__list-mobail">
			{{ `${paginationStore.currentPage}/${paginationStore.totalPages}` }}
		</div>
		<div
			class="pagination-card__button pagination-card__button--next"
			@click="paginationStore.setPage(paginationStore.currentPage + 1)"
			role="button"
			aria-label="Следующая страница"
			:aria-disabled="
				paginationStore.currentPage === paginationStore.totalPages
			"
			:class="{
				'pagination-card__button--disable':
					paginationStore.currentPage === paginationStore.totalPages
						? true
						: false
			}"
		>
			>
		</div>
	</div>
</template>
<script setup>
import { usePaginatorStore } from "@/stores/paginator";
const paginationStore = usePaginatorStore();
</script>
<style scoped>
.pagination-card {
	display: flex;
	justify-content: center;
	grid-area: 3 / span 2;
	align-items: center;
	margin: 30px 0;
}
.pagination-card__list {
	display: flex;
	gap: 15px;
	margin: 0 15px;
}

.pagination-card__list-item {
	width: 15px;
	height: 15px;
	display: flex;
	opacity: 0.8;
	justify-content: center;
	align-items: center;
	background-color: #ccc;
	box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.4);
	padding: 15px;
	font-size: 20px;
	text-align: center;
	cursor: pointer;
	color: #fff;
	transition: 1s opacity ease-in-out, background-color 1s ease-in-out;
}
.pagination-card__list--item:hover {
	opacity: 1;
}
.pagination-card__list--active {
	/* font-size: 20px; */
	/* font-weight: 900; */
	background-color: #049;
}
.pagination-card__button {
	cursor: pointer;
	padding: 15px;
	color: #fff;
	background-color: #049;
	width: 10px;
	height: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	transition: background-color 1s ease-in-out, cursor;
}
.pagination-card__button--disable {
	cursor: not-allowed;
	background-color: #ccc;
}
.pagination-card__list-mobail {
	display: none;
}
@media (max-width: 1024px) {
	.pagination-card__list-dekstop {
		display: none;
	}
	.pagination-card__list-mobail {
		display: block;
		margin: 0 30px;
		font-size: 20px;
	}
}
</style>
