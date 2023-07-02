import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueSocketIO from "socket.io-client";
const socket = VueSocketIO("http://localhost");

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import TheNavbar from "@/components/TheNavbar.vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.prototype.$socket = socket;

Vue.config.productionTip = false;

Vue.component("TheNavbar", TheNavbar);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
