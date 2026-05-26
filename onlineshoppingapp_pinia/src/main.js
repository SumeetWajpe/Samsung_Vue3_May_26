import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { router } from "./router/routes.js";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
