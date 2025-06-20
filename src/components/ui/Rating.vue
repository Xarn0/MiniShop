<template>
	<div class="rating-stars" :style="ratingStyle" aria-label="Рейтинг"></div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
	rating: {
		type: Number,
		required: true
	}
});

// Заполняем пропорционально 5 звёздам
const ratingStyle = computed(() => {
	const percent = Math.round((props.rating / 5) * 100);
	return {
		background: `linear-gradient(90deg, #ffc107 ${percent}%, #e0e0e0 ${percent}%)`
	};
});
</script>

<style scoped>
.rating-stars {
	width: 100px; /* 5 звёзд по 20px */
	height: 20px;
	background-repeat: repeat-x;
	background-size: 20px 20px;

	/* SVG маска для звёзд */
	mask-image: url('data:image/svg+xml;utf8,<svg fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.57 8.332 1.151-6.064 5.974 1.48 8.296L12 18.896l-7.416 4.682 1.48-8.296L.001 9.308l8.332-1.151z"/></svg>');
	-webkit-mask-image: url('data:image/svg+xml;utf8,<svg fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.57 8.332 1.151-6.064 5.974 1.48 8.296L12 18.896l-7.416 4.682 1.48-8.296L.001 9.308l8.332-1.151z"/></svg>');

	mask-repeat: repeat-x;
	-webkit-mask-repeat: repeat-x;

	mask-size: 20px 20px;
	-webkit-mask-size: 20px 20px;
}
</style>
