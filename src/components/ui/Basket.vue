<template>
	<div class="basket">
		<RouterLink to="/basket">
			<img :src="shoppingCartIcon" alt="" class="basket__img" />
			<span class="basket__circle">{{ basket.getCountItems }}</span>
		</RouterLink>
	</div>
</template>
<style>
.basket {
	width: 30px;
	height: 30px;
	margin-left: 30px;
	align-self: center;
	position: relative;
}
.basket__img {
	max-width: 100%;
	cursor: pointer;
}
.basket__circle {
	position: absolute;
	width: 18px;
	height: 18px;
	border-radius: 50%;
	font-size: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #000;
	top: -5px;
	right: -10px;
	font-family: serif;
	color: #fff;
}
.router-link-active {
	font-weight: 600;
	color: #ffcc00;
}
</style>

<script setup>
import { RouterLink } from "vue-router";
import shoppingCartIcon from "@/components/icons/shopping-cart.svg";
import { useBasketStore } from "@/stores/basket";
const basket = useBasketStore();
</script>
