import Vue from 'vue';
import Router from 'vue-router';

import ParameterBar from '../components/reports/ReportBar.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/reports',
      name: 'ParameterBar',
      component: ParameterBar,
    },
  ],
});
