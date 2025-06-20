<template>
	<div class="notification-list">
		<NotificationItem
			v-for="notification in infomations.list"
			:message="notification.message"
			:key="notification.id"
		/>
	</div>
</template>
<script setup>
import NotificationItem from "./NotificationItem.vue";
import { useInformationStore } from "@/stores/infomations";
const infomations = useInformationStore();
</script>
<style>
.notification-list {
	position: fixed;
	top: 100px;
	right: 0px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	z-index: 1000;
	pointer-events: none;
}
</style>
