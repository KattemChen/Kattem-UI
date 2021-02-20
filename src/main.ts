import { createApp } from "vue";
import App from "./App.vue";
import "./index.scss";
import "./assets/style/common.scss";
import { router } from "./router/router";

const app = createApp(App);
app.use(router);
app.mount("#app");
