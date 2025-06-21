import { createRouter, createWebHistory } from "vue-router";

import BasketView from "@/views/CartView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../views/ProductListView.vue")
		},
		{
			path: "/basket",
			name: "basket",
			component: BasketView
		},
		{
			path: "/list-products",
			name: "list-products",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/ProductListView.vue")
		}
	]
});

export default router;
