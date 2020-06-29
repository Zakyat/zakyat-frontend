import Vue from 'vue';
import Router from 'vue-router';

import FeesSection from '@/components/reports/FeesSection.vue';
import ForDestituteSubsection from '@/components/reports/ForDestituteSubsection.vue';
import OtherCostsSubsection from '@/components/reports/OtherCostsSubsection.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/reports',
      name: 'FeesSection',
      component: FeesSection,
    },
    {
      path: '/for-destitute',
      name: 'ForDestituteSubsection',
      component: ForDestituteSubsection,
    },
    {
      path: '/other-costs',
      name: 'OtherCostsSubsection',
      component: OtherCostsSubsection,
    },
  ],
});
