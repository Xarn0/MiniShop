<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "@/components/layouts/AppHeader.vue";
import AppFooter from "@/components/layouts/AppFooter.vue";
import NotificationList from "./components/ui/NotificationList.vue";
import NavigationDrawer from "./components/ui/NavigationDrawer.vue";
</script>

<template>
	<div class="app-container">
		<AppHeader />
		<NavigationDrawer />
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
