import Vue from "vue";
import App from "./App";
import { store } from "./store/store.js";

Vue.config.productionTip = false;

/* eslint-disable no-new */
var app = new Vue({
  el: "#app",
  store,
  template: "<App/>",
  components: { App }
});
