import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./components/Home.vue";
import StoreItem from "./components/StoreItem.vue";
const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: HomeView,
  },
  {
    path: '/item/:id', // Adjust the path as per your requirement
    name: 'Item',
    component: StoreItem,
    props: true
  },
  // you need to add more routes here
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
