<template>
	<div class="information-alert">
		{{ message }}
	</div>
</template>

<script setup>
const props = defineProps({
	message: {
		type: String,
		default: ""
	}
});
</script>
<style>
.information-alert {
	width: 250px;
	background: #2ecc71;
	color: #fff;
	text-align: center;
	margin-top: 10px;
	border-radius: 15px;
	padding: 10px;

	z-index: 100;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
}
</style>
