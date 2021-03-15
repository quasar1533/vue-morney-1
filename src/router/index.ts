import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Money from "@/views/Money.vue";
import Statistics from "@/views/Statistics.vue";
import Labels from "@/views/Labels.vue";
import NotFound from "@/views/NotFound.vue";
import EditLabel from "@/views/EditLabel.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Money
  },
  // path后面是 URL #后面的hash值
  {
    path: "/money",
    component: Money
  },
  {
    path: "/labels",
    component: Labels
  },
  {
    path: "/labels/edit",
    component: EditLabel
  },
  {
    path: "/statistics",
    component: Statistics
  },
  {
    path: "*",
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;


// {
//   path: '/',
//   name: 'Home',
//   component: Home
// },
// {
//   path: '/about',
//   name: 'About',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// }