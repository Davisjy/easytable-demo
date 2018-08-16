// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
// 导入 css
import "vue-easytable/libs/themes-base/index.css";

// 导入 table 组件 和分页组件
import { VTable } from "vue-easytable";
import bar from "components/bar";
// 将组件注册到全局
Vue.component(VTable.name, VTable);
Vue.component(bar.name, bar);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
