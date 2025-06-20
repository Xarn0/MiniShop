<template>
	<div class="search-field">
		<input @input="searchFunc" type="text" class="search-field__input" />
		<button class="search-field__button">Поиск</button>
	</div>
</template>
<script setup>
function searchFunc(e) {
	console.log(e.target.value);
}
</script>
<style scoped>
.search-field {
	padding: 10px;
	border-radius: 8px;
	/* overflow: hidden; */
}
.search-field__input {
	padding: inherit;
	border: none;
	border-top-left-radius: inherit;
	border-bottom-left-radius: inherit;
	outline: none;
}
.search-field__button {
	border: none;
	padding: inherit;
	border-top-right-radius: inherit;
	border-bottom-right-radius: inherit;
	cursor: pointer;
}
</style>
