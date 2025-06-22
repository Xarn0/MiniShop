import paginateArray from "@/utils/paginateArray";
import { defineStore } from "pinia";

export const usePaginatorStore = defineStore("paginator", {
	state: () => ({
		allPages: [],
		currentPage: 1
	}),
	getters: {
		getPageItems() {
			const page = this.allPages.find((item) => item.page === this.currentPage);
			return page ? page.items : [];
		},
		totalPages() {
			return this.allPages.length;
		}
	},
	actions: {
		setData(rawArray, itemsPerPage = 10) {
			this.allPages = paginateArray(rawArray, itemsPerPage);
			this.currentPage = 1;
		},
		setPage(page) {
			if (page >= 1 && page <= this.totalPages) {
				this.currentPage = page;
			}
		}
	}
});
