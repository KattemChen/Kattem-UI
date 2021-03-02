import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";
import SwitchDoc from "../components/switchDoc.vue";
import ButtonDoc from "../components/buttonDoc.vue";
import DialogDoc from "../components/dialogDoc.vue";
import TabsDoc from "../components/tabsDoc.vue";
import Document from "../components/document.vue";

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
        { path: "", component: Document },
        { path: "switch", component: SwitchDoc },
        { path: "button", component: ButtonDoc },
        { path: "dialog", component: DialogDoc },
        { path: "tabs", component: TabsDoc },
      ],
    },
  ],
});
