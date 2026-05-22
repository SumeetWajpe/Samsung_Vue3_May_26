import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";
import ListOfProducts from "../components/ListOfProducts.vue";
import Posts from "../components/Posts.vue";

const routes = [
  { path: "/", component: ListOfProducts },
  { path: "/posts", component: Posts },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
