import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "../pages/MainPage.vue";

const routes = [
  { path: "/", name: "Home", component: MainPage },
  { path: "/summary", name: "Summary", component: MainPage },
  { path: "/skills", name: "Skills", component: MainPage },
  { path: "/education", name: "Education", component: MainPage },
  { path: "/experience", name: "Experience", component: MainPage },
  { path: "/contacts", name: "Contacts", component: MainPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    // anchor name is the path without leading slash, e.g. '/skills' -> 'skills'
    const anchor = to.path === "/" ? null : to.path.slice(1);
    if (!anchor) return { top: 0 };

    // wait until element exists (useful if components are still mounting)
    return new Promise((resolve) => {
      const attempt = () => {
        const el = document.getElementById(anchor);
        if (el) resolve({ el: `#${anchor}`, behavior: "smooth" });
        else setTimeout(attempt, 30);
      };
      attempt();
    });
  },
});

export default router;
