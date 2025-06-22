<template>
	<div class="burger" @click="info.controlNavigationDrawer(true)">
		<span class="burger__line"></span>
		<span class="burger__line"></span>
		<span class="burger__line"></span>
	</div>
</template>
<style scoped>
.burger {
	display: flex;
	width: 30px;
	cursor: pointer;
	height: 26px;
	flex-direction: column;
	gap: 1px;

	margin-left: 20px;
	display: none;
}
.burger__line {
	height: 6px;
	background-color: #ccc;
}
@media (max-width: 1024px) {
	.burger {
		display: flex;
		justify-content: center;
	}
}
</style>
<script setup>
import { useInformationStore } from "@/stores/infomations";
const info = useInformationStore();
</script>
