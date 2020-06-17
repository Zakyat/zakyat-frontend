import Vue from 'vue';
import Router from 'vue-router';

import ParameterBar from '../components/reports/Reports.vue';

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
