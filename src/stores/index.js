import { defineStore } from "pinia";

export const useBaseStore = defineStore("base", {
	state: () => ({
		items: [],
		searchQuery: ""
	}),
	actions: {
		async setItems() {
			try {
				let count = 0;
				let response = await fetch("https://dummyjson.com/products");
				if (!response.ok) throw new Error(`Status:${response.status}`);
				let data = await response.json();

				this.items = data.products;
			} catch (error) {}
		},
		setSearchQuery(str) {
			this.searchQuery = str;
		},
		removeSearchQuery() {
			this.searchQuery = "";
		}
	},
	getters: {
		getItems: (state) => {
			return state.items;
		},
		getSearchQuery: (state) => {
			return state.searchQuery;
		},
		filtersItems() {
			return this.items.filter((item) =>
				item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
			);
		}
	}
});
