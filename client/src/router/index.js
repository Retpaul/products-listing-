import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsView from "@/views/ProductsView.vue";
import ProductView from "@/views/ProductView.vue";
import DefaultLayout from "@/components/DefaultLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "/",
          name: "home",
          component:ProductsView ,
        },
        // {
        //   path: "/products",
        //   name: "products",
        //   component: HomeView,
        // },
        {
          path: "/products/:productId",
          name: "product",
          component: ProductView,
        },
      ],
    },

    // {
    //   path: '/',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
