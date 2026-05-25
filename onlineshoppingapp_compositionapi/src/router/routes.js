import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import ListOfProducts from "../components/ListOfProducts.vue";
import Posts from "../components/Posts.vue";
import PostDetails from "../components/PostDetails.vue";
import Error from "../components/Error.vue";

const routes = [
  { path: "/", component: ListOfProducts },
  { path: "/posts", component: Posts },
  { path: "/postdetails/:postid", component: PostDetails, name: "postdetails" },
  { path: "/:pathMatch(.*)*", component: Error },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
