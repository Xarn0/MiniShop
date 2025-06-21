<template>
	<div :class="['logo', $attrs.class]">
		<RouterLink to="/" class="logo__link">
			<img src="#" alt="MiniShop" class="logo__img"
		/></RouterLink>
	</div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style>
.logo__link {
	text-decoration: none;
	color: #fff;
	font-weight: normal;
}
</style>
