<template>
	<Teleport to="body">
		<div class="product-modal__overlay" @click.self="close">
			<div class="product-modal__content">
				<button class="product-modal__close" @click="close">
					<img
						class="product-modal__close--img"
						src="../icons/cross-small.svg"
						alt=""
					/>
				</button>
				<h2>{{ product.title }}</h2>
				<p class="product-modal__desc">{{ product.description }}</p>
				<p class="product-modal__price">
					<strong>Цена:</strong> {{ product.price }}$
				</p>
				<img
					class="product-modal__img"
					:src="product.images?.[0]"
					alt="Изображение"
				/>
				<button class="product-modal__order">Оформить заказ</button>
			</div>
		</div>
	</Teleport>
</template>
<script setup>
const props = defineProps({
	product: Object
});
const emit = defineEmits(["close"]);
function close() {
	emit("close");
}
</script>
<style scoped>
.product-modal__overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
}
.product-modal__content {
	background: #fff;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 30px 70px 1fr;
	padding: 20px;
	border-radius: 10px;
	width: 400px;
	max-width: 90%;
	gap: 15px 0px;
}
.product-modal__img {
	width: 100%;
	grid-area: 2/2;
}
.product-modal__desc {
	justify-self: center;
	align-items: center;
	justify-content: center;
	align-content: center;
	margin-top: 10px;
}
.product-modal__close {
	margin-left: auto;
	width: 50px;
	display: block;
	background-color: transparent;
	border: none;
	cursor: pointer;
	grid-area: 1 / span 2;
}
.product-modal__close--img {
	width: 30px;
}
.product-modal__price {
	grid-area: 4/1;
	align-content: center;
}
.product-modal__order {
	grid-area: 4/2;
	border-radius: 15px;
	border: none;
	background-color: #00cc6a;
	color: #fff;
	padding: 10px 20px;
	font-size: 20px;
}
</style>
