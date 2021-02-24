import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";
import Switch from "../components/switch.vue";
import Button from "../components/button.vue";
import Dialog from "../components/dialog.vue";
import Tabs from "../components/tabs.vue";
import { createWebHashHistory, createRouter } from "vue-router";
const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "switch", component: Switch },
        { path: "button", component: Button },
        { path: "dialog", component: Dialog },
        { path: "tabs", component: Tabs },
      ],
    },
  ],
});
