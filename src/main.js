import Vue from "vue";
import App from "./App.vue";
import VueHead from "vue-head";

Vue.use(VueHead);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
