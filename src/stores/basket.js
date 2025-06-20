import { defineStore } from "pinia";

export const useBasketStore = defineStore("basket", {
	state: () => {
		return { items: [] };
	},
	actions: {
		addItem(item) {
			if (!this.items.find((i) => i.id === item.id)) {
				this.items.push(item);
				return "Добавлено в корзину";
			}
			return "такой элемент уже есть в корзине";
		},
		removeElementItems(id) {
			this.items = this.items.filter((item) => item.id !== id);
		},
		clearBasket() {
			this.items = [];
		}
	},
	getters: {
		getItems: (state) => state.items,
		getCountItems: (state) => state.items.length,
		getCountSum: (state) =>
			state.items.reduce((acc, current) => acc + current.price, 0)
	},
	persist: true
});
