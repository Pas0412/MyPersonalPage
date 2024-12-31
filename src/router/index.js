import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/navigate",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/NavigatePage.vue"),
    },
    {
      path: "/video-page",
      name: "video-page",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/matrix",
      name: "matrix",
      component: () => import("../views/Matrix.vue"),
    },
    {
      path: "/expandfont",
      name: "expandfont",
      component: () => import("../views/ExpandFont.vue"),
    },
    {
      path: "/navigate",
      name: "navigate",
      component: () => import("../views/NavigatePage.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardPage.vue"),
      children: [
        {
          path: "/aboutme",
          name: "aboutme",
          component: () => import("../views/AboutMe.vue"),
        },
      ]
    },
    {
      path: "/chinamap",
      name: "chinamap",
      component: () => import("../views/ChinaMap.vue"),
    },
  ],
});

export default router;
