import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import ListOfProducts from "../components/ListOfProducts.vue";
// import Posts from "../components/Posts.vue";
import PostDetails from "../components/PostDetails.vue";
import Error from "../components/Error.vue";
import ProductDetails from "../components/ProductDetails.vue";
import Posts from "../components/Posts.vue";
import Dashboard from "../components/Dashboard.vue";
import Login from "../components/Login.vue";
import { useAuthStore } from "../store/authStore.js";

const routes = [
  {
    path: "/",
    redirect: "/dashboard/products",
  },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: "products", component: ListOfProducts, name: "products" },
      {
        path: "productdetails/:pid",
        component: ProductDetails,
        name: "productdetails",
      },
      {
        path: "posts",
        component: Posts,
        name: "posts",
      },
      {
        path: "/postdetails/:postid",
        component: PostDetails,
        name: "postdetails",
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/:pathMatch(.*)*",
    component: Error,
  },
];

// const routes = [
//   { path: "/", component: ListOfProducts },
//   { path: "/productdetails/:pid", component: ProductDetails, name: "productdetails" },
//   // { path: "/posts", component: Posts },
//   // { path: "/postdetails/:postid", component: PostDetails, name: "postdetails" },
//   { path: "/:pathMatch(.*)*", component: Error },
// ];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// to -> dest
// from -> prev
// next() -> navigate
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (!authStore.isAuthenticated && to.meta.requiresAuth) {
    next("/login");
  } else {
    next();
  }
});
