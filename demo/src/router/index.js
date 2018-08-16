import Vue from "vue";
import Router from "vue-router";
// import JYTable from "components/jytable";
// 建设内容
import ProjectContent from "components/projectContent";
// 资金落实
// import Money from "components/money";
// 省建设进度内容
// import ProvinceRotio from "components/provinceRotio";

// import Demo from "components/demo";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: ProjectContent
      // component: JYTable
      // component: Money
      // component: ProvinceRotio
      // component: Demo
    }
  ]
});
