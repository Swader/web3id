import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

// import "@/assets/scss/white-dashboard.scss";
// import "@/assets/css/nucleo-icons.css";
// import "@/assets/demo/demo.css";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import("@/components/All.vue"),
      redirect: "home",
      children: [
        { path: "/", redirect: "home" },
        {
          path: "home",
          name: "Home",
          component: () => import("@/components/Home.vue"),
        },
        {
          path: "u/:q",
          name: "User",
          component: () => import("@/components/User.vue"),
          props: true,
        },
        {
          path: "*",
          name: "404",
          component: () => import("@/components/404.vue"),
        },
      ],
    },
  ],
  linkExactActiveClass: "active",
});

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
