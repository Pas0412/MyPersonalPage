import { createRouter, createWebHashHistory } from "vue-router";
import instance from "@/api/index.js";

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
      path: "/domain",
      name: "domain",
      component: () => import("../views/Domain.vue"),
      children: [
        {
          path: "/lunar",
          name: "lunar",
          component: () => import("../components/Lunar.vue"),
        },
      ]
    },
    {
      path: "/dashboard",
      redirect: "/aboutme",
      name: "dashboard",
      component: () => import("../views/DashboardPage.vue"),
      children: [
        {
          path: "/aboutme",
          name: "aboutme",
          component: () => import("../views/SidePage/AboutMe.vue"),
        },
        {
          path: "/collections",
          name: "collections",
          component: () => import("../views/SidePage/Collections.vue"),
        },
        {
          path: "/note",
          name: "note",
          component: () => import("../views/SidePage/Notes.vue"),
        }
      ]
    },
    {
      path: "/chinamap",
      name: "chinamap",
      component: () => import("../views/ChinaMap.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // 发送请求给后端记录访问次数
  console.log(to.path.slice(1))
  instance.post('/add-views', null, {
    params: { name: to.path.slice(1) },
  }).then(() => {
    next();
  }).catch(error => {
    console.error('Failed to record visit:', error);
    next();
  });
});

export default router;
