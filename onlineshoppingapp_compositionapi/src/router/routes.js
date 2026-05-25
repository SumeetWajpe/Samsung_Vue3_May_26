import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import ListOfProducts from "../components/ListOfProducts.vue";
import Posts from "../components/Posts.vue";
import PostDetails from "../components/PostDetails.vue";

const routes = [
  { path: "/", component: ListOfProducts },
  { path: "/posts", component: Posts },
  { path: "/postdetails", component: PostDetails },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
