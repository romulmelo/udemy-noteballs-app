import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    component: () => import("@/views/ViewNotes.vue")
  },
  {
    path: "/stats",
    component: () => import("@/views/ViewStats.vue")
  },
  {
    path: "/deleted-notes",
    component: () => import("@/views/ViewDeletedNotes.vue")
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact"
})

export { router }
