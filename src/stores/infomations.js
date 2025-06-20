import { defineStore } from "pinia";
let idCounter = 0;
export const useInformationStore = defineStore("information", {
	state: () => {
		return {
			list: []
		};
	},
	actions: {
		showInformation(message, delay = 2000) {
			const id = ++idCounter;
			this.list.push({ id: id, message: message });
			setTimeout(() => {
				this.remove(id);
			}, delay);
		},
		remove(id) {
			this.list = this.list.filter((item) => item.id !== id);
		}
	}
});
