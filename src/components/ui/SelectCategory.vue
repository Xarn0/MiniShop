<template>
	<component
		:is="tag"
		class="select-category"
		@click="$emit('sel', props.name)"
	>
		<RouterLink class="select-category__link" :to="mypath">{{
			name
		}}</RouterLink>
	</component>
</template>
<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
	tag: {
		type: String,
		default: "li"
	},
	mypath: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	}
});
</script>
<style>
.select-category__link {
	color: #fff;
	font-weight: 5 00;
	text-decoration: none;
	transition: color 0.4s ease-in-out, font-weight 0.4s ease-in-out;
}
.select-category__link:hover {
	color: red;
}
.router-link-active {
	font-weight: 600;
	color: #ffcc00;
}
</style>
