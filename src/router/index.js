import Vue from 'vue';
import Router from 'vue-router';
import Fortune from '@/components/Fortune';
import FortuneBack from '@/components/FortuneBack';
import FortuneFront from '@/components/FortuneFront';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Fortune',
      component: Fortune,
      props: true,
    },
    {
      path: '/back',
      name: 'FortuneBack',
      component: FortuneBack,
      props: true,
    },
    {
      path: '/front',
      name: 'FortuneFront',
      component: FortuneFront,
      props: true,
    },
  ],
});
