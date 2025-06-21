<template>
	<header class="main-header-app">
		<div class="main-header-app__top">
			<Logo class="main-header-app__logo" />
			<SelectCategory
				:tag="'div'"
				class="main-header-app__cat"
				:mypath="`/list-products`"
				:name="`Список продуктов`"
			></SelectCategory>
			<div class="main-header-app__icons">
				<SearchInput />
				<Basket />
			</div>
		</div>
		<!-- <div class="main-header-app__bottom">
			<nav class="main-header-app__navigator">
				<ul class="main-header-app__nav-list"></ul>
			</nav>
		</div> -->
	</header>
</template>
<script setup>
import Logo from "@/components/ui/Logo.vue";
import SearchInput from "@/components/ui/SearchField.vue";
import SelectCategory from "@/components/ui/SelectCategory.vue";
import Basket from "@/components/ui/Basket.vue";
</script>
<style scoped>
.main-header-app {
	display: flex;
	justify-content: space-between;
	background-color: #049;
	flex-direction: column;
	color: #fff;
}

.main-header-app__top {
	align-items: center;
	display: flex;
	justify-content: flex-end;
}
.main-header-app__logo {
	/* margin-right: auto; */
	flex: 1;
}
.main-header-app__cat {
	width: 200px;
	display: block;
	flex: 3;
	align-self: center;
	display: flex;
	justify-content: center;
}
.main-header-app__icons {
	display: flex;
}
.main-header-app__bottom {
	align-self: center;
}
.main-header-app__nav-list {
	display: flex;
	list-style-type: none;
	gap: 15px;
}
</style>
