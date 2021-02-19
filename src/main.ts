import { createApp } from "vue";
import Kattem from "./components/Kattem.vue";
import Kattem2 from "./components/Kattem2.vue";

import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Kattem,
    },
    {
      path: "/Kattem2",
      component: Kattem2,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
