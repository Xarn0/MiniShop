<template>
	<div class="product-card">
		<div class="product-card__title">{{ props.title }}</div>
		<div class="product-card__image-wrapper">
			<img
				:src="currentImage"
				@error="onImagesError"
				alt=""
				class="product-card__image"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import defaultImage from "@/assets/images/images.jpeg";
const props = defineProps({
	title: {
		type: String,
		default: 1
	},
	url: {
		type: String,
		default: defaultImage
	}
});
const currentImage = ref(props.url);
function onImagesError() {
	currentImage.value = defaultImage;
}
</script>

<style scoped>
.product-card {
	border: 1px solid #049;
	/* width: 150px; */
	/* height: 150px; */
	background-color: #048;
	color: #fff;
	opacity: 0.6;
	cursor: pointer;
	transition: opacity 0.3s ease-in-out;
}
.product-card__image-wrapper {
	width: 300px;
}
.product-card__image {
	max-width: 100%;
	object-fit: cover;
}
.product-card:hover {
	opacity: 1;
}
</style>
