import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Fortune from '@/components/Fortune';
import FortuneBack from '@/components/FortuneBack';
import FortuneFront from '@/components/FortuneFront';
import EmblemGood from '@/components/EmblemGood';
import EmblemNormal from '@/components/EmblemNormal';

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
    {
      path: '/HW',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/EG',
      name: 'EmblemGood',
      component: EmblemGood,
    },
    {
      path: '/EN',
      name: 'EmblemNormal',
      component: EmblemNormal,
    },
  ],
});
