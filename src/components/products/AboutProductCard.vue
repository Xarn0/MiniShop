<template>
	<div class="about-product-card">
		<template v-if="close">
			<span class="about-product-card__close" @click="$emit('delete', id)"
				><img
					class="about-product-card__close--img"
					:src="crossSmaill"
					alt="" /></span
		></template>
		<div class="about-product-card__img--wrap">
			<img :src="img[0]" alt="" class="about-product-card__img" />
		</div>
		<h4 class="about-product-card__title">
			{{ title }}
		</h4>
		<div class="about-product-card__rating">
			{{ rating }}/5.00 <Rating :rating="rating" />
		</div>
		<p class="about-product-card__price">Price: {{ price }}$</p>
		<button class="about-product-card__button" @click="$emit('select', item)">
			{{ actionText }}
		</button>
	</div>
</template>
<script setup>
import Rating from "@/components/ui/Rating.vue";
import crossSmaill from "@/components/icons/cross-small.svg";
const props = defineProps({
	title: {
		type: String,
		required: true
	},
	rating: {
		type: Number
	},
	price: {
		type: Number
	},
	img: {
		type: Array
	},
	item: {
		type: Object
	},
	id: {
		type: Number
	},
	close: {
		type: Boolean,
		default: false
	},
	actionText: {
		type: String,
		default: "Добавить в корзину"
	}
});
</script>
<style scoped>
.about-product-card {
	position: relative;
	padding: 20px;
	border: 2px solid #046;
	border-radius: inherit;
	cursor: pointer;
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-template-rows: 40px 100px;
	gap: 20px;
	box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
}
.about-product-card__img--wrap {
	grid-area: span 3 / 1;
	width: 200px;
}
.about-product-card__img {
	width: 100%;
}
.about-product-card__title {
	font-size: 30px;
}
.about-product-card__rating,
.about-product-card__price {
	align-self: center;
}
.about-product-card__button {
	align-self: center;
	grid-area: 4 / span 2;
	border: none;
	padding: 10px;
	background-color: #00cc6a;
	font-size: 18px;
	color: #fff;
	border-radius: inherit;
	cursor: pointer;
}
.about-product-card__close {
	position: absolute;
	right: 10px;
	top: 5px;
	width: 30px;
	height: 30px;
}
.about-product-card__close--img {
	max-width: 100%;
	object-fit: contain;
}
.about-product-card__rating {
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 10px;
}
</style>
