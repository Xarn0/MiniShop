import "./assets/main.css";
import piniaPersist from "pinia-plugin-persistedstate";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPersist);
app.use(pinia);
app.use(router);

app.mount("#app");
