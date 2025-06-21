<template>
	<div class="search-field">
		<input @input="searchFunc" type="text" class="search-field__input" />
		<RouterLink to="/list-products" class="search-field__button"
			>Поиск</RouterLink
		>
	</div>
</template>

<style scoped>
.search-field {
	padding: 10px;
	border-radius: 8px;
	display: flex;

	/* overflow: hidden; */
}
.search-field__input {
	padding: inherit;
	border: none;
	border-top-left-radius: inherit;
	border-bottom-left-radius: inherit;
	outline: none;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
}
.search-field__button {
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
	border: none;
	padding: 8px;
	border-top-right-radius: inherit;
	border-bottom-right-radius: inherit;
	cursor: pointer;
	text-decoration: none;
	background-color: #1447e6;
	font-size: 16px;
	color: #fff;
	font-weight: normal;
}
</style>
<script setup>
import { RouterLink } from "vue-router";
import { useBaseStore } from "@/stores";
const base = useBaseStore();
function searchFunc(e) {
	base.setSearchQuery(e.target.value.trim());
}
</script>
