<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "@/components/layouts/AppHeader.vue";
import AppFooter from "@/components/layouts/AppFooter.vue";
import NotificationItem from "./components/ui/NotificationItem.vue";
import NotificationList from "./components/ui/NotificationList.vue";
</script>

<template>
	<div class="app-container">
		<AppHeader />

		<main class="app-main">
			<NotificationList />
			<RouterView class="container" />
		</main>
		<AppFooter />
	</div>
</template>

<style scoped>
.app-container {
	display: flex;
	flex-direction: column;
	/* justify-content: space-between;*/
	height: 100vh;
}
.app-main {
}
</style>
