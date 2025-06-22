<template>
	<div class="product-card">
		<template v-if="close">
			<span class="product-card__close" @click="$emit('delete', id)"
				><img
					class="product-card__close--img"
					:src="crossSmaill"
					alt="" /></span
		></template>
		<div class="product-card__img--wrap">
			<img :src="img[0]" alt="" class="product-card__img" />
		</div>
		<h4 class="product-card__title">
			{{ title }}
		</h4>
		<div class="product-card__rating">
			<span>{{ rating }}/5.00</span> <Rating :rating="rating" />
		</div>
		<p class="product-card__price">Цена: {{ price }}$</p>
		<button class="product-card__button" @click="$emit('select', item)">
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
.product-card {
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
.product-card__img--wrap {
	grid-area: span 3 / 1;
	width: 200px;
}
.product-card__img {
	width: 100%;
}
.product-card__title {
	font-size: 25px;
}
.product-card__rating,
.product-card__price {
	align-self: center;
}
.product-card__button {
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
.product-card__close {
	position: absolute;
	right: 10px;
	top: 5px;
	width: 30px;
	height: 30px;
}
.product-card__close--img {
	max-width: 100%;
	object-fit: contain;
}
.product-card__rating {
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 10px;
}
@media (max-width: 1224px) {
	.product-card__title {
		font-size: 20px;
	}
}
@media (max-width: 1024px) {
	.product-card__title {
		text-align: center;
		grid-area: 1 / span 2;
	}
	.product-card__button {
		grid-area: 5 / span 2;
	}
}
@media (max-width: 450px) {
	.product-card {
		grid-template-columns: 1fr;
		grid-template-rows: 20px 170px;
		justify-content: center;
		justify-items: center;
		padding: 5px;
	}
	.product-card__img--wrap {
		grid-area: 2 / 1;
		text-align: center;
		width: 170px;
	}
	.product-card__close--img {
		max-width: 100%;
	}
	.product-card__title {
		grid-area: 3 / 1;
	}
	.product-card__price {
		grid-area: 4 / 1;
		align-self: center;
	}
	.product-card__rating {
		grid-area: 5 / 1;

		align-items: center;
	}
	.product-card__button {
		grid-area: 6 / span 1;
		width: 100%;
	}
}
</style>
