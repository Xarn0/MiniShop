<template>
	<div class="navigation-drawer" v-if="info.isOpenNavigationDrawer">
		<div class="navigation-drawer__head">
			<div class="navigation-drawer__head-title">Меню</div>
			<div
				class="navigation-drawer__head-close"
				@click="info.controlNavigationDrawer(false)"
			>
				<img :src="crossSmaill" alt="" class="navigation-drawer__img" />
			</div>
		</div>
		<div class="navigation-drawer__body">
			<ul class="navigation-drawer__list">
				<SelectCategory
					:tag="'li'"
					class="navigation-drawer__item"
					:mypath="`/list-products`"
					:name="`Список продуктов`"
				></SelectCategory>
				<SelectCategory
					:tag="'li'"
					class="navigation-drawer__item"
					:mypath="`/basket`"
					:name="`Корзина`"
				></SelectCategory>
			</ul>
		</div>
		<SearchField class="navigation-drawer__action" />
	</div>
</template>
<style>
.navigation-drawer {
	width: 50%;
	background-color: #049;
	height: 100vh;
	position: fixed;
	right: 0;
	z-index: 1000;
	color: #fff;
	border-left: 2px solid #2b5ce4;
	box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.3);
}
.navigation-drawer__head-close {
	padding: 5px;
	width: 30px;
	height: 30px;
	cursor: pointer;
	position: absolute;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	right: 0;
	color: inherit;
}
.navigation-drawer__head-title {
	text-align: center;
	text-transform: uppercase;
	font-size: 20px;
	padding: 10px;
	font-weight: 600;
	color: inherit;
	border-bottom: 1px solid #ccc;
}
.navigation-drawer__body {
	padding: 30px 0;
	border-bottom: 1px solid #ccc;
}
.navigation-drawer__list {
	display: flex;
	gap: 15px;
	flex-direction: column;
}
.navigation-drawer__item {
	display: flex;
	justify-content: center;
	font-size: 20px;
}
.navigation-drawer__action {
	display: flex;
	justify-content: center;
	margin: 30px 0;
}
.navigation-drawer__img {
	width: 100%;
}
@media (max-width: 600px) {
	.navigation-drawer {
		width: 100%;
	}
}
</style>
<script setup>
import crossSmaill from "@/components/icons/cross-small1.svg";
import SelectCategory from "@/components/ui/SelectCategory.vue";
import SearchField from "@/components/ui/SearchField.vue";
import { useInformationStore } from "@/stores/infomations";
const info = useInformationStore();
</script>
